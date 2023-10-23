#ifndef RJSTOOLS_H
#define RJSTOOLS_H

#include "qtjsapi_global.h"

#include <QString>
#include <QJSEngine>
#include <QMainWindow>
#include <QList>
#include <QObject>
#include <QDebug>
#include <QThreadPool>

class RJSWrapperObj;
class RJSApi;


/**
 * Script handler implementation for JS scripts, based on QJSEngine..
 *
 * \ingroup js
 */
class QTJSAPI_EXPORT RJSTools: public QObject {
Q_OBJECT

public:
    RJSTools(RJSApi& handler);
    virtual ~RJSTools();

    void markIncluded(const QString& className);
    bool isIncluded(const QString& className);

    Q_INVOKABLE bool include(const QString& fileName, QString trContext = QString(), bool force = false);
    Q_INVOKABLE bool isDeleted(const QJSValue& obj);
    Q_INVOKABLE QString download(const QString& url, int timeout);
    Q_INVOKABLE bool downloadToFile(const QString& url, const QString& path, const QString& fileName, int timeout);
    Q_INVOKABLE void print(const QJSValue& args);
    Q_INVOKABLE void debug(const QJSValue& args);
    Q_INVOKABLE void warning(const QJSValue& args);

    Q_INVOKABLE QString jsQNodeSave(const QJSValue& jsNode, int indent);

    Q_INVOKABLE bool jsQThreadPoolWaitForDone(int msecs = -1);
    Q_INVOKABLE bool jsQImageSave(const QJSValue& jsImage, const QString& filePath, const QString& format, int quality);

private:
    RJSApi& handler;
    bool alwaysLoadScripts;
    QThreadPool pool;
};

Q_DECLARE_METATYPE(RJSTools*)

#endif
