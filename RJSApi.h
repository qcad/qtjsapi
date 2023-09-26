#ifndef RJSAPI_H
#define RJSAPI_H

#include "rjsapi_global.h"

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
 *
 * \ingroup js
 */
class RJSAPI_EXPORT RJSApi: public QObject {
Q_OBJECT

public:
    RJSApi(QJSEngine* engine);
    virtual ~RJSApi();

    //static void deleteWrapper(RJSWrapperObj* wrapper);

    virtual void init();

    /*
    virtual void doScript(const QString& scriptFile,const QStringList& arguments = QStringList());
    virtual QVariant eval(const QString& script, const QString& fileName = QString());
    virtual QVariant evalGlobal(const QString& script, const QString& fileName = QString());
    virtual RFileImporterAdapter* createFileImporter(const QString& className, RDocument& document);
    */

    /*
    virtual void createActionDocumentLevel(const QString& scriptFile,
            RGuiAction* guiAction, RDocumentInterface* documentInterface);
    virtual void createActionApplicationLevel(const QString& scriptFile,
            RGuiAction* guiAction);
            */

    //void initGlobalVariables(const QString& scriptFile);

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
