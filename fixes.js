QCoreApplication.args = function() {
    if (arguments.length==0) {
        return QCoreApplication_WrapperSingletonInstance.arguments();
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

/**
 * QGridLayout::getItemPosition is not available to scripts since it returns
 * its results through pointer arguments.
 *
 * \param layout QGridLayout
 * \param index Index of the item in the layout.
 *
 * \return Row / column of the item at the given index or -1.
 */
QGridLayout.getItemRow = function(layout, index) {
    return tools.jsQGridLayoutGetItemRow(layout, index);
};

QGridLayout.getItemColumn = function(layout, index) {
    return tools.jsQGridLayoutGetItemColumn(layout, index);
};

QGridLayout.prototype.getItemRow = function(index) {
    return QGridLayout.getItemRow(this, index);
};

QGridLayout.prototype.getItemColumn = function(index) {
    return QGridLayout.getItemColumn(this, index);
};
