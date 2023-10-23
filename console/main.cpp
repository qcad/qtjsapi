#include <QFile>
#include <QTextStream>
#include <QApplication>

#include "RJSApi.h"

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);
    app.setQuitOnLastWindowClosed(true);

    if (argc < 2) {
        qDebug() << "Usage: " << argv[0] << " <JavaScript file>";
        return 1;
    }

    QString filePath = argv[1];
    QString fileContents;
    QFile file(filePath);
    if (file.open(QIODevice::ReadOnly | QIODevice::Text)) {
        QTextStream in(&file);
        fileContents = in.readAll();
        file.close();
    } else {
        qDebug() << "Failed to open the file: " << filePath;
        return 1;
    }

    QJSEngine* engine = new QJSEngine();
    RJSApi* rjsapi = new RJSApi(engine);
    rjsapi->init();

    QJSValue res = engine->evaluate(fileContents);
    qDebug() << "res:" << res.toString();

    //return app.exec();
    return res.toInt();
}
