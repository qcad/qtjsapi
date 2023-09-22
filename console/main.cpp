#include <QApplication>

#include "RJSApi.h"

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);

    QJSEngine engine;
    RJSApi rjsapi(&engine);

    QJSValue res = engine.evaluate("var w = new QWidget(); w.show();");

    qDebug() << "res:" << res.toString();

    return app.exec();
}
