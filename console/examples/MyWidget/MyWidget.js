// constructor of class MyWidget
function MyWidget(parent) {
    // call base class constructor:
    QWidget.call(this, parent);
}

// inherit MyWidget from QWidget:
MyWidget.prototype = new QWidget();

// custom implementation of paintEvent
MyWidget.prototype.paintEvent = function(event) {
    // paint a line from 0/0 to 100/100:
    var painter = new QPainter();
    painter.begin(this);
    painter.drawLine(0,0, 100,100);
    painter.end();
};



var mainWindow = new QMainWindow();

var myWidget = new MyWidget(null);
mainWindow.setCentralWidget(myWidget);
mainWindow.show();

QCoreApplication.exec();
