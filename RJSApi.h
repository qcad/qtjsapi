#ifndef RJSAPI_H
#define RJSAPI_H

#include "qtjsapi_global.h"

#include <QString>
#include <QJSEngine>
#include <QMainWindow>
#include <QList>
#include <QObject>
#include <QDebug>

class RJSWrapperObj;
class RJSTools;


/**
 * Script handler implementation for JS scripts, based on QJSEngine.
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

private:
    QJSEngine* engine;
    RJSTools* tools;

    // list of wrappers created for this script handler:
    // deleted when script handler is deleted:
    QSet<RJSWrapperObj*> wrappers;
};

Q_DECLARE_METATYPE(RJSApi*)

#endif // RJSSCRIPTHANDLER_H
