#include <QApplication>

#include "RJSApi.h"
//#include "RJSTypeEnumExample.h"

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    QJSEngine engine;
    RJSApi rjsapi(&engine);

    //qDebug() << "enum: " << RJSTypeEnumExample::getValue();

    {
        QJSValue res = engine.evaluate("var w = new QWidget(); w.show();");
        qDebug() << "res:" << res.toString();
    }

    {
        QJSValue res = engine.evaluate("RJSType_QWidget.getIdStatic();");
        qDebug() << "res:" << res.toString();
    }
    {
        QJSValue res = engine.evaluate("RJSType_QAction.getId();");
        qDebug() << "res:" << res.toString();
    }

    return app.exec();
}
