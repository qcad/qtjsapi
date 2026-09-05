#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QThread>
#include <QTimer>
#include <QDomNode>
#include <QtConcurrent>
#include <QImage>

#include "RJSHelper.h"
#include "RJSTools.h"
//#include "RFileCache.h"

RJSTools::RJSTools(RJSApi& handler) : handler(handler), alwaysLoadScripts(false) {
    alwaysLoadScripts = qApp->arguments().contains("-always-load-scripts");
}


RJSTools::~RJSTools() {}


bool RJSTools::isIncluded(const QString& className) {
    if (alwaysLoadScripts && className!="library" && className!="EAction" && className!="WidgetFactory") {
        // always include (again) to reload potential changes:
        return false;
    }

    QVariant vAlreadyIncluded;

    QJSEngine* engine = handler.getEngine();
    if (engine==NULL) {
        qWarning() << "script handler not initialized";
    }
    vAlreadyIncluded = engine->property("alreadyIncluded");
    if (!vAlreadyIncluded.isValid()) {
        return false;
    }

    QSet<QString> alreadyIncluded;
    alreadyIncluded = vAlreadyIncluded.value<QSet<QString> >();
    if (!alreadyIncluded.contains(className)) {
        return false;
    }

    return true;
}

void RJSTools::markIncluded(const QString& className) {
    QVariant vAlreadyIncluded;
    QSet<QString> alreadyIncluded;

    QJSEngine* engine = handler.getEngine();
    vAlreadyIncluded = engine->property("alreadyIncluded");
    if (vAlreadyIncluded.isValid()) {
        alreadyIncluded = vAlreadyIncluded.value<QSet<QString> >();
    }

    if (alreadyIncluded.contains(className)) {
        return;
    }

    alreadyIncluded.insert(className);
    vAlreadyIncluded.setValue(alreadyIncluded);
    engine->setProperty("alreadyIncluded", vAlreadyIncluded);
}

bool RJSTools::include(const QString& fileName, QString trContext, bool force) {
    static int including = 0;

    //qDebug() << "RJSTools::include:" << fileName;

    //QScriptContext* context = engine->currentContext();

    QString className = QFileInfo(fileName).completeBaseName();

    if (!force && isIncluded(className)) {
        //qDebug() << "RJSTools::include: already included";
        return true;
    }

    bool scriptsPath = fileName.startsWith("scripts");

    QJSEngine* engine = handler.getEngine();

    QStringList list;

    if (!scriptsPath) {
        // search based on the includeBasePath which changes depending on the plugin
        QJSValue includeBasePath = engine->globalObject().property("includeBasePath");
        //qDebug() << "includeBasePath:" << includeBasePath.toString();
        if (!includeBasePath.isUndefined()) {
            list << engine->globalObject().property("includeBasePath").toString();
        }

        // ... then search based on the initial script path (does not change)
        QJSValue scriptFileBasePath = engine->globalObject().property("scriptFileBasePath");
        if (!scriptFileBasePath.isUndefined()) {
            list << engine->globalObject().property("scriptFileBasePath").toString();
        }

        // ... then search based on the local data storage location path (does not change)
        QStringList candidates = QStandardPaths::standardLocations(QStandardPaths::AppDataLocation);
        list << candidates;
    }

    // ... then search based on the program path (does not change)
    list << QDir::currentPath();

    // ... then search based on the built in plugin values (does not change)
    list << ":";

    // Remove the duplicates and preserve the order
    list.removeDuplicates();

    QStringListIterator i(list);
    while (i.hasNext()) {
        QString basePath = i.next();

        QString fileNameLocal;
        QFileInfo fi(fileName);
        if (fi.isAbsolute()) {
            fileNameLocal = fileName;
        } else {
            if (basePath==":") {
                fileNameLocal = basePath + fileName;
            }
            else {
                if (basePath.startsWith(":")) {
                    // workaround for Qt 4.7.4 bug with resource paths
                    // containing both \ and /:
                    fileNameLocal = basePath + "/" + fileName;
                }
                else {
                    fileNameLocal = basePath + QDir::separator() + fileName;
                }
            }
            fi = QFileInfo(fileNameLocal);
        }

        if (!fi.exists()) {
            continue;
        }

        //qDebug() << "RJSTools::include: found at " << fileNameLocal;

        QFile file(fileNameLocal);
        if (!file.open(QIODevice::ReadOnly | QIODevice::Text)) {
            continue;
        }
        QTextStream in(&file);
        QString contents = in.readAll();
        file.close();

        if (trContext.isNull()) {
            trContext = fi.completeBaseName();
        }

        // post-processing for translation context:
#if QT_VERSION >= 0x050000
        contents.replace("qsTr(\"", QString("qsTranslate('%1', \"").arg(trContext));
#else
        // workaround for Qt 4 API / see library.js:
        contents.replace("qsTr(\"", QString("qsTranslate2('%1', \"").arg(trContext));
#endif
        contents.replace("QT_TR_NOOP(\"", QString("QT_TRANSLATE_NOOP('%1', \"").arg(trContext));

        QString includeBasePath = engine->globalObject().property("includeBasePath").toString();

        //qDebug() << "setting includeBasePath to: " << fi.absolutePath();

        engine->globalObject().setProperty("includeBasePath", fi.absolutePath());
        //context->setActivationObject(engine->globalObject());
        //context->setThisObject(engine->globalObject());
        including++;
        engine->globalObject().setProperty("including", true);
        //qDebug() << "eval include for " << fileName;
        QStringList trace;
        QJSValue res = engine->evaluate(contents, fileName, 1, &trace);

        if (res.isError()) {
            qWarning() << "include exception: " << res.toString();
            for (int i=0; i<trace.length(); i++) {
                qWarning() << trace[i];
            }
        }

        //qDebug() << "eval include for " << fileName << ": DONE";
        including--;
        engine->globalObject().setProperty("including", including!=0);

        engine->globalObject().setProperty("includeBasePath", includeBasePath);

        markIncluded(className);

        return true;
    }

    qDebug() << "RJSTools::include: not found:" << fileName;

    return false;

//    return context->throwError(QString("include: cannot read file '%1'").arg(
//                                   context->argument(0).toString()));
}


//void RJSTools::include(const QString& fileName) {
//    qDebug() << "RJSTools::include:" << fileName;

//    QString content = RFileCache::getContents(fileName, false);
//    QJSValue result = engine->evaluate(content);
//    if (result.isError()) {
//        qDebug() << "Uncaught exception in " << fileName << " at line "
//                 << result.property("lineNumber").toInt()
//                 << ":" << result.toString();
//    }
//}


bool RJSTools::isDeleted(const QJSValue& obj) {
    if (!obj.isQObject()) {
        return false;
    }

    QObject* qObj = obj.toQObject();
    return qObj==nullptr;
}

QString RJSTools::download(const QString& url, int timeout) {
    QNetworkAccessManager manager;
    QEventLoop loop;
    QNetworkReply *reply = manager.get(QNetworkRequest(url));
    QObject::connect(reply, SIGNAL(finished()), &loop, SLOT(quit()));

    // timeout:
    if (timeout>0) {
        QTimer::singleShot(timeout, &loop, SLOT(quit()));
    }

    // run loop:
    loop.exec();

    if (reply->error()!=QNetworkReply::NoError) {
        qDebug() << "Cannot download " << url << ": "<< reply->errorString();
    }

    QString content = reply->readAll();

    delete reply;

    return content;
}

/**
 * Worker thread for RJSTools::httpGet: runs the request with its own
 * QNetworkAccessManager and event loop, so that the calling (script)
 * thread does not have to spin a nested event loop.
 *
 * (A nested event loop in the script thread lets the JS engine run
 * garbage collection steps from the event loop; with a lot of garbage
 * pending, the engine was measured to be 4-5 times slower for the rest of
 * the script run.)
 */
class RJSHttpGetThread : public QThread {
public:
    RJSHttpGetThread(const QNetworkRequest& request) : request(request), status(0), contentLength(-1.0) {}

    void run() override {
        QNetworkAccessManager manager;
        QEventLoop loop;
        QNetworkReply* reply = manager.get(request);
        QObject::connect(reply, &QNetworkReply::finished, &loop, &QEventLoop::quit);
        loop.exec();

        status = reply->attribute(QNetworkRequest::HttpStatusCodeAttribute).toInt();
        if (reply->error()!=QNetworkReply::NoError) {
            error = reply->errorString();
        }
        if (reply->hasRawHeader("Content-Range")) {
            // "bytes a-b/total":
            QString cr = QString::fromLatin1(reply->rawHeader("Content-Range"));
            int idx = cr.lastIndexOf('/');
            if (idx!=-1) {
                contentLength = cr.mid(idx+1).toDouble();
            }
        }
        else if (reply->hasRawHeader("Content-Length")) {
            contentLength = QString::fromLatin1(reply->rawHeader("Content-Length")).toDouble();
        }
        data = reply->readAll();
        delete reply;
    }

    QNetworkRequest request;
    int status;
    QString error;
    double contentLength;
    QByteArray data;
};

/**
 * Binary HTTP(S) GET with optional byte range, blocking.
 *
 * The request runs in a worker thread; the calling thread blocks until it
 * is finished (no nested event loop in the calling thread).
 *
 * \param from First byte to request (>=0) or -1 for no range.
 * \param to Last byte to request (inclusive), -1 for "to end of resource".
 * If from is -1 and to > 0, the last 'to' bytes are requested.
 * \param timeout Transfer timeout in ms (0: none).
 * \param headers Additional request headers.
 * \return Object with status (HTTP status code, 0 on network error),
 * error (empty on success), contentLength (from the Content-Length or
 * Content-Range header, total size of the resource) and data (the body as
 * ArrayBuffer).
 */
static QNetworkRequest rjsMakeHttpRequest(const QString& url, double from, double to, int timeout, const QVariantMap& headers) {
    QNetworkRequest request{QUrl(url)};
    request.setAttribute(QNetworkRequest::RedirectPolicyAttribute, QNetworkRequest::NoLessSafeRedirectPolicy);
    if (from>=0) {
        QString range = QString("bytes=%1-").arg((qint64)from);
        if (to>=from) {
            range += QString::number((qint64)to);
        }
        request.setRawHeader("Range", range.toLatin1());
    }
    else if (to>0) {
        // last 'to' bytes:
        request.setRawHeader("Range", QString("bytes=-%1").arg((qint64)to).toLatin1());
    }
    QVariantMap::const_iterator it;
    for (it=headers.constBegin(); it!=headers.constEnd(); ++it) {
        request.setRawHeader(it.key().toLatin1(), it.value().toString().toLatin1());
    }
    if (timeout>0) {
        request.setTransferTimeout(timeout);
    }
    return request;
}

static QVariantMap rjsHttpGetResult(const RJSHttpGetThread& thread) {
    QVariantMap ret;
    ret["status"] = thread.status;
    ret["error"] = thread.error;
    ret["contentLength"] = thread.contentLength;
    ret["data"] = thread.data;
    return ret;
}

QVariantMap RJSTools::httpGet(const QString& url, double from, double to, int timeout, const QVariantMap& headers) {
    RJSHttpGetThread thread(rjsMakeHttpRequest(url, from, to, timeout, headers));
    thread.start();
    thread.wait();
    return rjsHttpGetResult(thread);
}

/**
 * Runs several HTTP GET requests concurrently (one thread each) and
 * blocks until all are finished.
 *
 * \param requests List of objects { url, from, to, headers } (see httpGet).
 * eturn List of result objects (see httpGet) in the same order.
 */
QVariantList RJSTools::httpGetAll(const QVariantList& requests, int timeout) {
    QList<RJSHttpGetThread*> threads;
    for (int i=0; i<requests.length(); i++) {
        QVariantMap r = requests[i].toMap();
        double from = r.contains("from") ? r["from"].toDouble() : -1.0;
        double to = r.contains("to") ? r["to"].toDouble() : -1.0;
        QVariantMap headers = r.contains("headers") ? r["headers"].toMap() : QVariantMap();
        RJSHttpGetThread* t = new RJSHttpGetThread(rjsMakeHttpRequest(r["url"].toString(), from, to, timeout, headers));
        threads.append(t);
        t->start();
    }

    QVariantList ret;
    for (int i=0; i<threads.length(); i++) {
        threads[i]->wait();
        ret.append(rjsHttpGetResult(*threads[i]));
        delete threads[i];
    }
    return ret;
}

bool RJSTools::downloadToFile(const QString& url, const QString& path, const QString& fileName, int timeout) {

    QString localFileName = fileName;
    QNetworkAccessManager manager;
    QEventLoop loop;
    QNetworkReply *reply = manager.get(QNetworkRequest(url));
    QObject::connect(reply, SIGNAL(finished()), &loop, SLOT(quit()));

    // timeout:
    if (timeout>0) {
        QTimer::singleShot(timeout, &loop, SLOT(quit()));
    }

    // run loop:
    loop.exec();

    if (reply->error()!=QNetworkReply::NoError) {
        qWarning() << "Cannot download " << url << ": "<< reply->errorString();
        delete reply;
        return false;
    }

    if (localFileName.isEmpty()) {
        localFileName = QFileInfo(QUrl(url).path()).fileName();
    }

    localFileName = path + QDir::separator() + localFileName;
    QDir dir;
    if (!dir.mkpath(path)) {
        qWarning() << "Cannot create dir " << path;
        delete reply;
        return false;
    }
    if (QFileInfo(localFileName).exists() && !QFile(localFileName).remove()) {
        qWarning() << "Cannot remove file " << localFileName;
        delete reply;
        return false;
    }

    QByteArray contents = reply->readAll();
    if (contents.isEmpty()) {
        qWarning() << "URL does not exist " << url;
        delete reply;
        return false;
    }

    QFile f(localFileName);
    if (!f.open(QIODevice::WriteOnly)) {
        qWarning() << "Cannot write output file " << f.fileName();
        delete reply;
        return false;
    }
    f.write(contents);
    f.close();

    delete reply;
    return true;
}

void RJSTools::print(const QJSValue& args) {
    //fprintf(stdout, "RJSTools::debug\n");
    //fflush(stdout);

    if (args.property("length").toInt()==0) {
        printf("\n");
        return;
    }

    //QDebug deb = qDebug();
    for (int i=0; i<args.property("length").toInt(); i++) {
        //deb << args.property(i).toString();
        //qDebug() << args.property(i).toString();
        printf("%s", args.property(i).toString().toUtf8().data());
    }
    printf("\n");
}

void RJSTools::debug(const QJSValue& args) {
    QDebug deb = qDebug().noquote();
    for (int i=0; i<args.property("length").toInt(); i++) {
        deb << args.property(i).toString();
    }
}

void RJSTools::warning(const QJSValue& args) {
    QDebug deb = qWarning();
    for (int i=0; i<args.property("length").toInt(); i++) {
        deb << args.property(i).toString();
    }
}

QString RJSTools::jsQNodeSave(const QJSValue& jsNode, int indent) {
    QDomNode node = RJSHelper::js2cpp_QDomNode(handler, jsNode);
    QString str;
    QTextStream stream(&str);
    node.save(stream, indent);
    return str;
}

bool RJSTools::jsQThreadPoolWaitForDone(int msecs) {
    return pool.waitForDone(msecs);
}

bool RJSTools::jsQImageSave(const QJSValue& jsImage, const QString& filePath, const QString& format, int quality) {
    QImage image = RJSHelper::js2cpp_QImage(handler, jsImage);
    //return image.save(filePath, (const char*)format.toUtf8(), quality);
    //QFuture<bool> future = QtConcurrent::run(&QImage::save, &image, filePath, (const char*)format.toUtf8(), quality);
    //QFuture<bool> future = QtConcurrent::run(&QImage::save, &image, filePath);

    //QFuture<void> future = QtConcurrent::run(&QImage::invertPixels, &image, QImage::InvertRgba);

    //qDebug() << "saving image in bg: " << filePath;

    QFuture<bool> future = QtConcurrent::run(&pool, [=]{
        if (image.save(filePath, (const char*)format.toUtf8(), quality)) {
            //qDebug() << "image saved: " << filePath;
            //emit imageSaved(filename);
            return true;
        }
        else {
            qWarning() << "image NOT saved: " << filePath;
            //emit imageSaveFailed(filename);
            return false;
        }
    });

    //future.waitForFinished();

    return true;
}
