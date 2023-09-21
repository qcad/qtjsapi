QCoreApplication.args = function() {
    if (arguments.length==0) {
        return QCoreApplicationWrapperSingletonInstance.arguments();
    }
    else {
        print("QCoreApplication.args(): wrong number / type of arguments");
    }
};

/**
 * Compatibility.
 * Set QDir.separator as property.
 * Original function QDir::separator() available as QDir.sep();
 */
QDir.separator = QDir.sep();

/**
 * Qt 4, 5, 6 Compatibility.
 */
Qt.MidButton = Qt.MiddleButton;
QRegExpValidator = QRegularExpressionValidator;

QDomNode.prototype.save = function(indent) {
    return tools.saveQNode(this, indent);
};

QDomElement.prototype.save = function(indent) {
    return tools.jsQNodeSave(this, indent);
};

QByteArray.prototype.appendByte = function(c) {
    return this.append(c);
};

function parseXml(fileName, handler) {
    var fi = new QFileInfo(fileName);
    var file = new QFile(fi.absoluteFilePath());
    var xmlReader = new QXmlSimpleReader();
    var source = new QXmlInputSource(file);
    xmlReader.setContentHandler(handler);
    var ret = xmlReader.parse(source, false);
    file.close();
}

function inspect(obj, indent) {
    if (indent==undefined) {
        indent = 0;
    }

    qDebug(" ".repeat(indent) + "obj: " + obj);
    var p = Object.getPrototypeOf(obj);
    if (p==undefined) {
        return;
    }

    inspect(p, indent + 2);
}
