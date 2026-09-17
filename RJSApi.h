#ifndef RJSAPI_H
#define RJSAPI_H

#include "qtjsapi_global.h"

#include <QString>
#include <QJSEngine>
#include <QMainWindow>
#include <QList>
#include <QObject>
#include <QDebug>

//#include "RDebug.h"

class RJSWrapperObj;
class RJSTools;


/**
 * Qt Script API based on QJSEngine.
 */
class QTJSAPI_EXPORT RJSApi: public QObject {
Q_OBJECT

public:
    RJSApi(QJSEngine* engine);
    virtual ~RJSApi();

    virtual void init();

    QJSEngine* getEngine() {
        return engine;
    }
    RJSTools* getTools() {
        return tools;
    }

    void trace() {
        engine->evaluate("console.trace();");
    }

    QJSValue getSelf() {
        return engine->evaluate("self");
    }

    void registerWrapper(RJSWrapperObj& obj);

public slots:
    void unregisterWrapper(RJSWrapperObj& obj);

signals:
    /**
     * Emitted right before the source of a script file is compiled by
     * the engine (include(), doScript()). Receivers (direct connections
     * only) may modify the source, e.g. the script debugger (qcaddbg)
     * rewrites 'debugger' statements, which the V4 engine does not
     * implement, into calls that pause the debugger. Modifications
     * must preserve line numbers.
     *
     * \param isInclude True if the file is library code: loaded through
     *      include() or an auto load script. False if it runs as a
     *      script (doScript(): tool / action scripts, autostart).
     */
    void preprocessSource(const QString& fileName, QString& source, bool isInclude);

private:
    QJSEngine* engine;
    RJSTools* tools;

    // list of wrappers created for this RJSApi instance:
    QSet<RJSWrapperObj*> wrappers;
};

Q_DECLARE_METATYPE(RJSApi*)

#endif // RJSSCRIPTHANDLER_H
