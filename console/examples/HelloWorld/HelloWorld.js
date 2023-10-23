var mainWindow = new QMainWindow();

var label = new QLabel("Hello World", mainWindow);

mainWindow.setCentralWidget(label);
mainWindow.show();

QCoreApplication.exec();
