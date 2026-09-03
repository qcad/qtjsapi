#include <QQmlEngine>
#include <QNetworkAccessManager>
#include <QNetworkReply>
#include <QtConcurrent>

#include "RJSTools.h"

#include "generator/cpp/qdir_wrapper.h"
#include "generator/cpp/qdiriterator_wrapper.h"
#include "generator/cpp/qdatetime_wrapper.h"
#include "generator/cpp/qcoreevent_wrapper.h"
#include "generator/cpp/qfileinfo_wrapper.h"
#include "generator/cpp/qfile_wrapper.h"
#include "generator/cpp/qfiledevice_wrapper.h"
#include "generator/cpp/qwidget_wrapper.h"
#include "generator/cpp/qcoreapplication_wrapper.h"
#include "generator/cpp/qpoint_wrapper.h"
#include "generator/cpp/qmainwindow_wrapper.h"
#include "generator/cpp/qmenubar_wrapper.h"
#include "generator/cpp/qmenu_wrapper.h"
#include "generator/cpp/qaction_wrapper.h"
#include "generator/cpp/qpainter_wrapper.h"
#include "generator/cpp/qpixmap_wrapper.h"
#include "generator/cpp/qiodevice_wrapper.h"
#include "generator/cpp/qiodevicebase_wrapper.h"
#include "generator/cpp/qsplashscreen_wrapper.h"
#include "generator/cpp/quiloader_wrapper.h"
#include "generator/cpp/qabstractspinbox_wrapper.h"
#include "generator/cpp/qspinbox_wrapper.h"
#include "generator/cpp/qcombobox_wrapper.h"
#include "generator/cpp/qfontcombobox_wrapper.h"
#include "generator/cpp/qtoolbutton_wrapper.h"
#include "generator/cpp/qobject_wrapper.h"
#include "generator/cpp/qbuffer_wrapper.h"
#include "generator/cpp/qvariant_wrapper.h"
#include "generator/cpp/qnamespace_wrapper.h"
#include "generator/cpp/qevent_wrapper.h"
#include "generator/cpp/qlocale_wrapper.h"
#include "generator/cpp/qabstractitemmodel_wrapper.h"
#include "generator/cpp/qtranslator_wrapper.h"
#include "generator/cpp/qlabel_wrapper.h"
#include "generator/cpp/qtextbrowser_wrapper.h"
#include "generator/cpp/qgroupbox_wrapper.h"
#include "generator/cpp/qpushbutton_wrapper.h"
#include "generator/cpp/qdialogbuttonbox_wrapper.h"
#include "generator/cpp/qframe_wrapper.h"
#include "generator/cpp/qformlayout_wrapper.h"
#include "generator/cpp/qsize_wrapper.h"
#include "generator/cpp/qprinter_wrapper.h"
#include "generator/cpp/qdialog_wrapper.h"
#include "generator/cpp/qprogressdialog_wrapper.h"
#include "generator/cpp/qpagesize_wrapper.h"
#include "generator/cpp/qpagelayout_wrapper.h"
#include "generator/cpp/qabstractbutton_wrapper.h"
#include "generator/cpp/qsettings_wrapper.h"
#include "generator/cpp/qicon_wrapper.h"
#include "generator/cpp/qtoolbar_wrapper.h"
#include "generator/cpp/qstackedlayout_wrapper.h"
#include "generator/cpp/qheaderview_wrapper.h"
#include "generator/cpp/qabstractitemview_wrapper.h"
#include "generator/cpp/qpalette_wrapper.h"
#include "generator/cpp/qcolor_wrapper.h"
#include "generator/cpp/qcolordialog_wrapper.h"
#include "generator/cpp/qrect_wrapper.h"
#include "generator/cpp/qrectf_wrapper.h"
#include "generator/cpp/qregion_wrapper.h"
#include "generator/cpp/qlayout_wrapper.h"
#include "generator/cpp/qlineedit_wrapper.h"
#include "generator/cpp/qsizepolicy_wrapper.h"
#include "generator/cpp/qlayoutitem_wrapper.h"
#include "generator/cpp/qtreewidgetitem_wrapper.h"
#include "generator/cpp/qboxlayout_wrapper.h"
#include "generator/cpp/qtimer_wrapper.h"
#include "generator/cpp/qkeysequence_wrapper.h"
#include "generator/cpp/qcheckbox_wrapper.h"
#include "generator/cpp/qtextcursor_wrapper.h"
#include "generator/cpp/qsplitter_wrapper.h"
#include "generator/cpp/qstatusbar_wrapper.h"
#include "generator/cpp/qmdiarea_wrapper.h"
#include "generator/cpp/qtabbar_wrapper.h"
#include "generator/cpp/qtabwidget_wrapper.h"
#include "generator/cpp/qfont_wrapper.h"
#include "generator/cpp/qmdisubwindow_wrapper.h"
#include "generator/cpp/qscrollbar_wrapper.h"
#include "generator/cpp/qmodelindex_wrapper.h"
#include "generator/cpp/qdockwidget_wrapper.h"
#include "generator/cpp/qdesktopservices_wrapper.h"
#include "generator/cpp/qurl_wrapper.h"
#include "generator/cpp/qplaintextedit_wrapper.h"
#include "generator/cpp/qtextstream_wrapper.h"
#include "generator/cpp/qstringconverter_wrapper.h"
#include "generator/cpp/qwidgetaction_wrapper.h"
#include "generator/cpp/qdoublespinbox_wrapper.h"
#include "generator/cpp/qradiobutton_wrapper.h"
#include "generator/cpp/qbuttongroup_wrapper.h"
#include "generator/cpp/qabstractslider_wrapper.h"
#include "generator/cpp/qslider_wrapper.h"
#include "generator/cpp/qlistwidget_wrapper.h"
#include "generator/cpp/qfiledialog_wrapper.h"
#include "generator/cpp/qmessagebox_wrapper.h"
#include "generator/cpp/qfontmetrics_wrapper.h"
#include "generator/cpp/qtime_wrapper.h"
#include "generator/cpp/qprocess_wrapper.h"
#include "generator/cpp/qkeyevent_wrapper.h"
#include "generator/cpp/qbitmap_wrapper.h"
#include "generator/cpp/qcursor_wrapper.h"
#include "generator/cpp/qimagereader_wrapper.h"
#include "generator/cpp/qbytearray_wrapper.h"
#include "generator/cpp/qinputdialog_wrapper.h"
#include "generator/cpp/qinputevent_wrapper.h"
#include "generator/cpp/qbrush_wrapper.h"
#include "generator/cpp/qguiapplication_wrapper.h"
#include "generator/cpp/qtransform_wrapper.h"
#include "generator/cpp/qxml_wrapper.h"
#include "generator/cpp/qpinchgesture_wrapper.h"
#include "generator/cpp/qimagewriter_wrapper.h"
#include "generator/cpp/qimage_wrapper.h"
#include "generator/cpp/qapplication_wrapper.h"
#include "generator/cpp/qvalidator_wrapper.h"
#include "generator/cpp/qtreewidget_wrapper.h"
#include "generator/cpp/qshortcut_wrapper.h"
#include "generator/cpp/qclipboard_wrapper.h"
#include "generator/cpp/qmimedata_wrapper.h"
#include "generator/cpp/qtextedit_wrapper.h"
#include "generator/cpp/qtextformat_wrapper.h"
#include "generator/cpp/qtextdocument_wrapper.h"
#include "generator/cpp/qdom_wrapper.h"
#include "generator/cpp/qgridlayout_wrapper.h"
#include "generator/cpp/qpen_wrapper.h"
#include "generator/cpp/qabstractscrollarea_wrapper.h"
#include "generator/cpp/qxmlstream_wrapper.h"
#include "generator/cpp/qurlquery_wrapper.h"
#include "generator/cpp/qvariant_wrapper.h"
#include "generator/cpp/qprogressbar_wrapper.h"
#include "generator/cpp/qregularexpression_wrapper.h"
#include "generator/cpp/qstackedwidget_wrapper.h"
#include "generator/cpp/qstandarditemmodel_wrapper.h"
#include "generator/cpp/qfontdatabase_wrapper.h"
#include "generator/cpp/qabstractitemdelegate_wrapper.h"
#include "generator/cpp/qitemdelegate_wrapper.h"
#include "generator/cpp/qlistview_wrapper.h"
#include "generator/cpp/qline_wrapper.h"
#include "generator/cpp/qprintdialog_wrapper.h"
#include "generator/cpp/qpainterpath_wrapper.h"
#include "generator/cpp/qitemselectionmodel_wrapper.h"
#include "generator/cpp/qtablewidget_wrapper.h"
#include "generator/cpp/qtableview_wrapper.h"
#include "generator/cpp/qscrollarea_wrapper.h"
#include "generator/cpp/qeventloop_wrapper.h"
#include "generator/cpp/qpangesture_wrapper.h"
#include "generator/cpp/qtreeview_wrapper.h"
#include "generator/cpp/qfileiconprovider_wrapper.h"
#include "generator/cpp/qdrag_wrapper.h"
#include "generator/cpp/qtooltip_wrapper.h"
#include "generator/cpp/qdoublevalidator_wrapper.h"
#include "generator/cpp/qsortfilterproxymodel_wrapper.h"
#include "generator/cpp/qitemdelegate_wrapper.h"
#include "generator/cpp/qeasingcurve_wrapper.h"
#include "generator/cpp/qsvgrenderer_wrapper.h"
#include "generator/cpp/qqmlapplicationengine_wrapper.h"
#include "generator/cpp/qqmlcontext_wrapper.h"
#include "generator/cpp/qqmlengine_wrapper.h"
#include "generator/cpp/qquickitem_wrapper.h"
#include "generator/cpp/qquickview_wrapper.h"
#include "generator/cpp/qquickwidget_wrapper.h"
#include "generator/cpp/qgraphicseffect_wrapper.h"
#include "generator/cpp/qpaintdevice_wrapper.h"
#include "generator/cpp/qjsengine_wrapper.h"
#include "generator/cpp/qfilesystemwatcher_wrapper.h"
#include "generator/cpp/qscreen_wrapper.h"
#include "generator/cpp/qhostaddress_wrapper.h"
#include "generator/cpp/qnetworkproxy_wrapper.h"
#include "generator/cpp/qtcpsocket_wrapper.h"
#include "generator/cpp/qtcpserver_wrapper.h"
#include "generator/cpp/qabstractsocket_wrapper.h"
#include "generator/cpp/qssl_wrapper.h"
#include "generator/cpp/qsslcertificate_wrapper.h"
#include "generator/cpp/qsslcertificateextension_wrapper.h"
#include "generator/cpp/qsslcipher_wrapper.h"
#include "generator/cpp/qsslconfiguration_wrapper.h"
#include "generator/cpp/qssldiffiehellmanparameters_wrapper.h"
#include "generator/cpp/qsslellipticcurve_wrapper.h"
#include "generator/cpp/qsslerror_wrapper.h"
#include "generator/cpp/qsslkey_wrapper.h"
//#include "generator/cpp/qsslkeyingmaterial_wrapper.h"
#include "generator/cpp/qsslpresharedkeyauthenticator_wrapper.h"
#include "generator/cpp/qsslserver_wrapper.h"
#include "generator/cpp/qsslsocket_wrapper.h"
#include "generator/cpp/qabstractfileiconprovider_wrapper.h"
#include "generator/cpp/qabstractprintdialog_wrapper.h"
#include "generator/cpp/qabstracttablemodel_wrapper.h"
#include "generator/cpp/qactiongroup_wrapper.h"
#include "generator/cpp/qcalendar_wrapper.h"
#include "generator/cpp/qcompleter_wrapper.h"
#include "generator/cpp/qdate_wrapper.h"
#include "generator/cpp/qdomcomment_wrapper.h"
#include "generator/cpp/qdomdocumentfragment_wrapper.h"
#include "generator/cpp/qdomdocumenttype_wrapper.h"
#include "generator/cpp/qdomentity_wrapper.h"
#include "generator/cpp/qdomentityreference_wrapper.h"
#include "generator/cpp/qdomimplementation_wrapper.h"
#include "generator/cpp/qdomnotation_wrapper.h"
#include "generator/cpp/qdomprocessinginstruction_wrapper.h"
#include "generator/cpp/qdragleaveevent_wrapper.h"
#include "generator/cpp/qdragmoveevent_wrapper.h"
#include "generator/cpp/qeventpoint_wrapper.h"
#include "generator/cpp/qfilesystemmodel_wrapper.h"
#include "generator/cpp/qgesture_wrapper.h"
#include "generator/cpp/qgraphicscolorizeeffect_wrapper.h"
#include "generator/cpp/qgraphicsdropshadoweffect_wrapper.h"
#include "generator/cpp/qgraphicsopacityeffect_wrapper.h"
#include "generator/cpp/qinputdevice_wrapper.h"
#include "generator/cpp/qmargins_wrapper.h"
#include "generator/cpp/qmarginsf_wrapper.h"
#include "generator/cpp/qnetworkproxyfactory_wrapper.h"
#include "generator/cpp/qnetworkproxyquery_wrapper.h"
#include "generator/cpp/qpagedpaintdevice_wrapper.h"
#include "generator/cpp/qpageranges_wrapper.h"
#include "generator/cpp/qpainterpathstroker_wrapper.h"
#include "generator/cpp/qpicture_wrapper.h"
#include "generator/cpp/qpointerevent_wrapper.h"
#include "generator/cpp/qpolygon_wrapper.h"
#include "generator/cpp/qpolygonf_wrapper.h"
#include "generator/cpp/qprinterinfo_wrapper.h"
#include "generator/cpp/qregularexpressionmatch_wrapper.h"
#include "generator/cpp/qrhiwidget_wrapper.h"
#include "generator/cpp/qsinglepointevent_wrapper.h"
#include "generator/cpp/qspaceritem_wrapper.h"
#include "generator/cpp/qsplitterhandle_wrapper.h"
#include "generator/cpp/qtsqlglobal_wrapper.h"
#include "generator/cpp/qsqldatabase_wrapper.h"
#include "generator/cpp/qsqlerror_wrapper.h"
#include "generator/cpp/qsqlquery_wrapper.h"
#include "generator/cpp/qsqlrecord_wrapper.h"
#include "generator/cpp/qjsondocument_wrapper.h"
#include "generator/cpp/qgeocoordinate_wrapper.h"
#include "generator/cpp/qgeoshape_wrapper.h"
#include "generator/cpp/qgeorectangle_wrapper.h"
#include "generator/cpp/qgeocircle_wrapper.h"
#include "generator/cpp/qgeopath_wrapper.h"
#include "generator/cpp/qgeopolygon_wrapper.h"
#include "generator/cpp/qgeojson_wrapper.h"
#include "generator/cpp/qstyleoption_wrapper.h"
#include "generator/cpp/qstyleoptionbutton_wrapper.h"
#include "generator/cpp/qstyleoptioncombobox_wrapper.h"
#include "generator/cpp/qstyleoptioncomplex_wrapper.h"
#include "generator/cpp/qstyleoptiondockwidget_wrapper.h"
#include "generator/cpp/qstyleoptionfocusrect_wrapper.h"
#include "generator/cpp/qstyleoptionframe_wrapper.h"
#include "generator/cpp/qstyleoptiongraphicsitem_wrapper.h"
#include "generator/cpp/qstyleoptiongroupbox_wrapper.h"
#include "generator/cpp/qstyleoptionheader_wrapper.h"
#include "generator/cpp/qstyleoptionheaderv2_wrapper.h"
#include "generator/cpp/qstyleoptionmenuitem_wrapper.h"
#include "generator/cpp/qstyleoptionprogressbar_wrapper.h"
#include "generator/cpp/qstyleoptionrubberband_wrapper.h"
#include "generator/cpp/qstyleoptionsizegrip_wrapper.h"
#include "generator/cpp/qstyleoptionslider_wrapper.h"
#include "generator/cpp/qstyleoptionspinbox_wrapper.h"
#include "generator/cpp/qstyleoptiontab_wrapper.h"
#include "generator/cpp/qstyleoptiontabbarbase_wrapper.h"
#include "generator/cpp/qstyleoptiontabwidgetframe_wrapper.h"
#include "generator/cpp/qstyleoptiontitlebar_wrapper.h"
#include "generator/cpp/qstyleoptiontoolbar_wrapper.h"
#include "generator/cpp/qstyleoptiontoolbox_wrapper.h"
#include "generator/cpp/qstyleoptiontoolbutton_wrapper.h"
#include "generator/cpp/qstyleoptionviewitem_wrapper.h"
#include "generator/cpp/qsurfaceformat_wrapper.h"
#include "generator/cpp/qswipegesture_wrapper.h"
#include "generator/cpp/qtextblockformat_wrapper.h"
#include "generator/cpp/qtextframeformat_wrapper.h"
#include "generator/cpp/qtextimageformat_wrapper.h"
#include "generator/cpp/qtextlayout_wrapper.h"
#include "generator/cpp/qtextlength_wrapper.h"
#include "generator/cpp/qtextlistformat_wrapper.h"
#include "generator/cpp/qtexttablecellformat_wrapper.h"
#include "generator/cpp/qtexttableformat_wrapper.h"
#include "generator/cpp/qwheelevent_wrapper.h"
#include "generator/cpp/qwindow_wrapper.h"
#include "generator/cpp/qxmlstreamattribute_wrapper.h"
#include "generator/cpp/qxmlstreamattributes_wrapper.h"

RJSApi::RJSApi(QJSEngine* engine) : engine(engine) {
    init();
}


RJSApi::~RJSApi() {
    // collect garbage... (objects are scheduled for removal, not removed):
    engine->collectGarbage();

    // delete wrappers:

    // 1. Swap the set into a local variable.
    // This makes the original 'wrappers' empty immediately.
    QSet<RJSWrapperObj*> toDelete;
    toDelete.swap(wrappers);

    // 2. Now iterate over the local 'toDelete' set.
    // Even if RJSWrapperObj::~RJSWrapperObj() looks at the global 'wrappers'
    // set, it will be empty, avoiding the slow removal logic.
    for (RJSWrapperObj* wrapper : toDelete) {
        if (wrapper && wrapper->isCppOwnership()) {

            // slow but stable:
            delete wrapper;

            // causes unpredictable crashes on exit:
            //wrapper->deleteLater();
        }
    }

    // 3. No need to clear 'wrappers' here, it was already cleared by the swap.

    engine->collectGarbage();

    delete tools;
}

void RJSApi::init() {
    static int counter = 0;

    engine->setObjectName(QString("E%1").arg(counter++));

    engine->installExtensions(QJSEngine::AllExtensions);
    QJSValue global = engine->globalObject();

    global.setProperty("global", global);
    global.setProperty("engine", engine->newQObject(engine));
    QQmlEngine::setObjectOwnership(engine, QQmlEngine::CppOwnership);

    global.setProperty("handler", engine->newQObject(this));
    QQmlEngine::setObjectOwnership(this, QQmlEngine::CppOwnership);

    tools = new RJSTools(*this);
    global.setProperty("tools", engine->newQObject(tools));
    QQmlEngine::setObjectOwnership(tools, QQmlEngine::CppOwnership);
    engine->evaluate("function include(fileName, context, force) { tools.include(fileName, context, force); } ");
    engine->evaluate("function isDeleted(obj) { return tools.isDeleted(obj); } ");
    engine->evaluate("function download(url, timeout) { return tools.download(url, timeout); } ");
    engine->evaluate("function downloadToFile(url, path, fileName, timeout) { return tools.downloadToFile(url, path, fileName, timeout); } ");
    // Array.prototype.slice.apply converts arguments into an array:
    engine->evaluate("function print() { tools.print(Array.prototype.slice.apply(arguments)); } ");
    engine->evaluate("function qDebug() { tools.debug(Array.prototype.slice.apply(arguments)); } ");
    engine->evaluate("function qWarning() { tools.warning(Array.prototype.slice.apply(arguments)); } ");

    {
        QString fileName = ":copyproperties.js";
        QFile scriptFile(fileName);
        if (scriptFile.open(QIODevice::ReadOnly)) {
            QTextStream stream(&scriptFile);
            QString contents = stream.readAll();
            scriptFile.close();
            QJSValue result = engine->evaluate(contents, fileName);
            if (result.isError()) {
                qWarning()
                        << "Uncaught exception at line"
                        << result.property("lineNumber").toInt()
                        << ":" << result.toString();
            }
        }
    }

    Qt_Wrapper::init(*this);
    QCoreApplication_Wrapper::init(*this);
    QDir_Wrapper::init(*this);
    QDirIterator_Wrapper::init(*this);
    QFileInfo_Wrapper::init(*this);
    QFile_Wrapper::init(*this);
    QFileDevice_Wrapper::init(*this);
    QMouseEvent_Wrapper::init(*this);
    QPaintEvent_Wrapper::init(*this);
    QResizeEvent_Wrapper::init(*this);
    QWidget_Wrapper::init(*this);
    QPoint_Wrapper::init(*this);
    QPointF_Wrapper::init(*this);
    QDateTime_Wrapper::init(*this);
    QMainWindow_Wrapper::init(*this);
    QMenuBar_Wrapper::init(*this);
    QMenu_Wrapper::init(*this);
    QAction_Wrapper::init(*this);
    QPainter_Wrapper::init(*this);
    QIODevice_Wrapper::init(*this);
    QIODeviceBase_Wrapper::init(*this);
    QPixmap_Wrapper::init(*this);
    QSplashScreen_Wrapper::init(*this);
    QUiLoader_Wrapper::init(*this);
    QAbstractSpinBox_Wrapper::init(*this);
    QSpinBox_Wrapper::init(*this);
    QComboBox_Wrapper::init(*this);
    QFontComboBox_Wrapper::init(*this);
    QToolButton_Wrapper::init(*this);
    QObject_Wrapper::init(*this);
    QBuffer_Wrapper::init(*this);
    QVariant_Wrapper::init(*this);
    QEvent_Wrapper::init(*this);
    QLocale_Wrapper::init(*this);
    QAbstractItemModel_Wrapper::init(*this);
    QTranslator_Wrapper::init(*this);
    QLabel_Wrapper::init(*this);
    QTextBrowser_Wrapper::init(*this);
    QTextEdit_Wrapper::init(*this);
    QGroupBox_Wrapper::init(*this);
    QDialogButtonBox_Wrapper::init(*this);
    QPushButton_Wrapper::init(*this);
    QFrame_Wrapper::init(*this);
    QFormLayout_Wrapper::init(*this);
    QSize_Wrapper::init(*this);
    QSizeF_Wrapper::init(*this);
#ifdef QT_PRINTSUPPORT_LIB
    QPrinter_Wrapper::init(*this);
#endif
    QDialog_Wrapper::init(*this);
    QProgressDialog_Wrapper::init(*this);
    QPageSize_Wrapper::init(*this);
    QPageLayout_Wrapper::init(*this);
    QAbstractButton_Wrapper::init(*this);
    QSettings_Wrapper::init(*this);
    QIcon_Wrapper::init(*this);
    QToolBar_Wrapper::init(*this);
    QStackedLayout_Wrapper::init(*this);
    QHeaderView_Wrapper::init(*this);
    QAbstractItemView_Wrapper::init(*this);
    QPalette_Wrapper::init(*this);
    QColor_Wrapper::init(*this);
    QColorDialog_Wrapper::init(*this);
    QRect_Wrapper::init(*this);
    QRectF_Wrapper::init(*this);
    QRegion_Wrapper::init(*this);
    QLayout_Wrapper::init(*this);
    QLayoutItem_Wrapper::init(*this);
    QWidgetItem_Wrapper::init(*this);
    QLineEdit_Wrapper::init(*this);
    QSizePolicy_Wrapper::init(*this);
    QTreeWidgetItem_Wrapper::init(*this);
    QVBoxLayout_Wrapper::init(*this);
    QHBoxLayout_Wrapper::init(*this);
    QTimer_Wrapper::init(*this);
    QKeySequence_Wrapper::init(*this);
    QCheckBox_Wrapper::init(*this);
    QTextCursor_Wrapper::init(*this);
    QSplitter_Wrapper::init(*this);
    QStatusBar_Wrapper::init(*this);
    QMdiArea_Wrapper::init(*this);
    QTabBar_Wrapper::init(*this);
    QTabWidget_Wrapper::init(*this);
    QFont_Wrapper::init(*this);
    QMdiSubWindow_Wrapper::init(*this);
    QScrollBar_Wrapper::init(*this);
    QModelIndex_Wrapper::init(*this);
    QDockWidget_Wrapper::init(*this);
    QDesktopServices_Wrapper::init(*this);
    QUrl_Wrapper::init(*this);
    QPlainTextEdit_Wrapper::init(*this);
    QTextStream_Wrapper::init(*this);
    QStringConverter_Wrapper::init(*this);
    QWidgetAction_Wrapper::init(*this);
    QDoubleSpinBox_Wrapper::init(*this);
    QRadioButton_Wrapper::init(*this);
    QButtonGroup_Wrapper::init(*this);
    QAbstractSlider_Wrapper::init(*this);
    QSlider_Wrapper::init(*this);
    QListWidget_Wrapper::init(*this);
    QListWidgetItem_Wrapper::init(*this);
    QFileDialog_Wrapper::init(*this);
    QMessageBox_Wrapper::init(*this);
    QFontMetrics_Wrapper::init(*this);
    QFontMetricsF_Wrapper::init(*this);
    QTime_Wrapper::init(*this);
    QProcess_Wrapper::init(*this);
    QProcessEnvironment_Wrapper::init(*this);
    QBitmap_Wrapper::init(*this);
    QCursor_Wrapper::init(*this);
    QImageReader_Wrapper::init(*this);
    QByteArray_Wrapper::init(*this);
    QKeyEvent_Wrapper::init(*this);
    QInputEvent_Wrapper::init(*this);
    QBrush_Wrapper::init(*this);
    QGradient_Wrapper::init(*this);
    QLinearGradient_Wrapper::init(*this);
    QRadialGradient_Wrapper::init(*this);
    QConicalGradient_Wrapper::init(*this);
    QGuiApplication_Wrapper::init(*this);
    QTransform_Wrapper::init(*this);
    QXmlContentHandler_Wrapper::init(*this);
    QXmlDTDHandler_Wrapper::init(*this);
    QXmlDeclHandler_Wrapper::init(*this);
    QXmlDefaultHandler_Wrapper::init(*this);
    QXmlEntityResolver_Wrapper::init(*this);
    QXmlErrorHandler_Wrapper::init(*this);
    QXmlInputSource_Wrapper::init(*this);
    QXmlLexicalHandler_Wrapper::init(*this);
    QXmlLocator_Wrapper::init(*this);
    QXmlParseException_Wrapper::init(*this);
    QXmlReader_Wrapper::init(*this);
    QXmlSimpleReader_Wrapper::init(*this);
    QXmlAttributes_Wrapper::init(*this);
    QPinchGesture_Wrapper::init(*this);
    QImageWriter_Wrapper::init(*this);
    QImage_Wrapper::init(*this);
    QApplication_Wrapper::init(*this);
    QContextMenuEvent_Wrapper::init(*this);
    QValidator_Wrapper::init(*this);
    QIntValidator_Wrapper::init(*this);
    QRegularExpressionValidator_Wrapper::init(*this);
    QTreeWidget_Wrapper::init(*this);
    QShortcut_Wrapper::init(*this);
    QClipboard_Wrapper::init(*this);
    QMimeData_Wrapper::init(*this);
    QTextCharFormat_Wrapper::init(*this);
    QTextDocument_Wrapper::init(*this);
    QDomDocument_Wrapper::init(*this);
    QDomElement_Wrapper::init(*this);
    QDomNode_Wrapper::init(*this);
    QDomNamedNodeMap_Wrapper::init(*this);
    QDomAttr_Wrapper::init(*this);
    QDomText_Wrapper::init(*this);
    QDomNodeList_Wrapper::init(*this);
    QDomCharacterData_Wrapper::init(*this);
    QDomCDATASection_Wrapper::init(*this);
    QGridLayout_Wrapper::init(*this);
    QPen_Wrapper::init(*this);
    QKeyCombination_Wrapper::init(*this);
    QAbstractScrollArea_Wrapper::init(*this);
    QXmlStreamWriter_Wrapper::init(*this);
    QBoxLayout_Wrapper::init(*this);
    QUrlQuery_Wrapper::init(*this);
    QVariant_Wrapper::init(*this);
    QProgressBar_Wrapper::init(*this);
    QRegularExpression_Wrapper::init(*this);
    QStackedWidget_Wrapper::init(*this);
    QStandardItemModel_Wrapper::init(*this);
    QAbstractListModel_Wrapper::init(*this);
    QFontDatabase_Wrapper::init(*this);
    QItemDelegate_Wrapper::init(*this);
    QAbstractItemDelegate_Wrapper::init(*this);
    QListView_Wrapper::init(*this);
    QStandardItem_Wrapper::init(*this);
    QLine_Wrapper::init(*this);
    QLineF_Wrapper::init(*this);
#ifdef QT_PRINTSUPPORT_LIB
    QPrintDialog_Wrapper::init(*this);
#endif
    QPainterPath_Wrapper::init(*this);
    QItemSelection_Wrapper::init(*this);
    QItemSelectionModel_Wrapper::init(*this);
    QTableWidget_Wrapper::init(*this);
    QTableView_Wrapper::init(*this);
    QTableWidgetItem_Wrapper::init(*this);
    QScrollArea_Wrapper::init(*this);
    QEventLoop_Wrapper::init(*this);
    QPanGesture_Wrapper::init(*this);
    QTreeView_Wrapper::init(*this);
    QFileIconProvider_Wrapper::init(*this);
    QHelpEvent_Wrapper::init(*this);
    QDrag_Wrapper::init(*this);
    QToolTip_Wrapper::init(*this);
    QDragEnterEvent_Wrapper::init(*this);
    QDropEvent_Wrapper::init(*this);
    QDoubleValidator_Wrapper::init(*this);
    QSortFilterProxyModel_Wrapper::init(*this);
    QItemDelegate_Wrapper::init(*this);
    QActionEvent_Wrapper::init(*this);
    QEasingCurve_Wrapper::init(*this);
    QSvgRenderer_Wrapper::init(*this);
    QStringEncoder_Wrapper::init(*this);
    QStringDecoder_Wrapper::init(*this);
    QXmlStreamReader_Wrapper::init(*this);
    QGraphicsBlurEffect_Wrapper::init(*this);
    QFocusEvent_Wrapper::init(*this);
    QPaintDevice_Wrapper::init(*this);
    QFileSystemWatcher_Wrapper::init(*this);
    QScreen_Wrapper::init(*this);
    QInputDialog_Wrapper::init(*this);

    QHostAddress_Wrapper::init(*this);
    QNetworkProxy_Wrapper::init(*this);
    QTcpSocket_Wrapper::init(*this);
    QTcpServer_Wrapper::init(*this);
    QAbstractSocket_Wrapper::init(*this);

    QSsl_Wrapper::init(*this);
    QSslCertificate_Wrapper::init(*this);
    QSslCertificateExtension_Wrapper::init(*this);
    QSslCipher_Wrapper::init(*this);
    QSslConfiguration_Wrapper::init(*this);
    QSslDiffieHellmanParameters_Wrapper::init(*this);
    QSslEllipticCurve_Wrapper::init(*this);
    QSslError_Wrapper::init(*this);
    QSslKey_Wrapper::init(*this);
    //QSslKeyingMaterial_Wrapper::init(*this);
    QSslPreSharedKeyAuthenticator_Wrapper::init(*this);
    QSslServer_Wrapper::init(*this);
    QSslSocket_Wrapper::init(*this);

    QJSEngine_Wrapper::init(*this);
    QQmlContext_Wrapper::init(*this);
    QQmlEngine_Wrapper::init(*this);
    QQmlApplicationEngine_Wrapper::init(*this);
#ifdef QT_QUICKWIDGETS_LIB
    QQuickWidget_Wrapper::init(*this);
#endif
#ifdef QT_QUICK_LIB
    QQuickItem_Wrapper::init(*this);
    QQuickView_Wrapper::init(*this);
#endif

    QAbstractFileIconProvider_Wrapper::init(*this);
    QAbstractTableModel_Wrapper::init(*this);
    QActionGroup_Wrapper::init(*this);
    QCalendar_Wrapper::init(*this);
    QCompleter_Wrapper::init(*this);
    QDate_Wrapper::init(*this);
    QDomComment_Wrapper::init(*this);
    QDomDocumentFragment_Wrapper::init(*this);
    QDomDocumentType_Wrapper::init(*this);
    QDomEntity_Wrapper::init(*this);
    QDomEntityReference_Wrapper::init(*this);
    QDomImplementation_Wrapper::init(*this);
    QDomNotation_Wrapper::init(*this);
    QDomProcessingInstruction_Wrapper::init(*this);
    QDragLeaveEvent_Wrapper::init(*this);
    QDragMoveEvent_Wrapper::init(*this);
    QEventPoint_Wrapper::init(*this);
    QFileSystemModel_Wrapper::init(*this);
    QGesture_Wrapper::init(*this);
    QGraphicsColorizeEffect_Wrapper::init(*this);
    QGraphicsDropShadowEffect_Wrapper::init(*this);
    QGraphicsEffect_Wrapper::init(*this);
    QGraphicsOpacityEffect_Wrapper::init(*this);
    QInputDevice_Wrapper::init(*this);
    QMargins_Wrapper::init(*this);
    QMarginsF_Wrapper::init(*this);
    QNetworkProxyFactory_Wrapper::init(*this);
    QNetworkProxyQuery_Wrapper::init(*this);
    QPagedPaintDevice_Wrapper::init(*this);
    QPageRanges_Wrapper::init(*this);
    QPainterPathStroker_Wrapper::init(*this);
    QPicture_Wrapper::init(*this);
    QPointerEvent_Wrapper::init(*this);
    QPolygon_Wrapper::init(*this);
    QPolygonF_Wrapper::init(*this);
    QRegularExpressionMatch_Wrapper::init(*this);
    QSinglePointEvent_Wrapper::init(*this);
    QSpacerItem_Wrapper::init(*this);
    QSplitterHandle_Wrapper::init(*this);
    QStyleOption_Wrapper::init(*this);
    QStyleOptionButton_Wrapper::init(*this);
    QStyleOptionComboBox_Wrapper::init(*this);
    QStyleOptionComplex_Wrapper::init(*this);
    QStyleOptionDockWidget_Wrapper::init(*this);
    QStyleOptionFocusRect_Wrapper::init(*this);
    QStyleOptionFrame_Wrapper::init(*this);
    QStyleOptionGraphicsItem_Wrapper::init(*this);
    QStyleOptionGroupBox_Wrapper::init(*this);
    QStyleOptionHeader_Wrapper::init(*this);
    QStyleOptionHeaderV2_Wrapper::init(*this);
    QStyleOptionMenuItem_Wrapper::init(*this);
    QStyleOptionProgressBar_Wrapper::init(*this);
    QStyleOptionRubberBand_Wrapper::init(*this);
    QStyleOptionSizeGrip_Wrapper::init(*this);
    QStyleOptionSlider_Wrapper::init(*this);
    QStyleOptionSpinBox_Wrapper::init(*this);
    QStyleOptionTab_Wrapper::init(*this);
    QStyleOptionTabBarBase_Wrapper::init(*this);
    QStyleOptionTabWidgetFrame_Wrapper::init(*this);
    QStyleOptionTitleBar_Wrapper::init(*this);
    QStyleOptionToolBar_Wrapper::init(*this);
    QStyleOptionToolBox_Wrapper::init(*this);
    QStyleOptionToolButton_Wrapper::init(*this);
    QStyleOptionViewItem_Wrapper::init(*this);
    QSurfaceFormat_Wrapper::init(*this);
    QSwipeGesture_Wrapper::init(*this);
    QTextBlockFormat_Wrapper::init(*this);
    QTextFormat_Wrapper::init(*this);
    QTextFrameFormat_Wrapper::init(*this);
    QTextImageFormat_Wrapper::init(*this);
    QTextLayout_Wrapper::init(*this);
    QTextLength_Wrapper::init(*this);
    QTextListFormat_Wrapper::init(*this);
    QTextTableCellFormat_Wrapper::init(*this);
    QTextTableFormat_Wrapper::init(*this);
    QWheelEvent_Wrapper::init(*this);
    QWindow_Wrapper::init(*this);
    QXmlStreamAttribute_Wrapper::init(*this);
    QXmlStreamAttributes_Wrapper::init(*this);
#ifdef QT_PRINTSUPPORT_LIB
    QAbstractPrintDialog_Wrapper::init(*this);
    QPrinterInfo_Wrapper::init(*this);
#endif
#ifdef QT_SQL_LIB
    QSql_Wrapper::init(*this);
    QSqlDatabase_Wrapper::init(*this);
    QSqlError_Wrapper::init(*this);
    QSqlQuery_Wrapper::init(*this);
    QSqlRecord_Wrapper::init(*this);
#endif
    QJsonDocument_Wrapper::init(*this);
#ifdef QT_POSITIONING_LIB
    QGeoCoordinate_Wrapper::init(*this);
    QGeoShape_Wrapper::init(*this);
    QGeoRectangle_Wrapper::init(*this);
    QGeoCircle_Wrapper::init(*this);
    QGeoPath_Wrapper::init(*this);
    QGeoPolygon_Wrapper::init(*this);
#endif
#ifdef QT_LOCATION_LIB
    QGeoJson_Wrapper::init(*this);
#endif
#if QT_VERSION >= 0x060700
    QRhiWidget_Wrapper::init(*this);
#endif


    // set engine property to QQmlApplicationEngine if appropriate
    // to support mixing of QML with QtJSAPI
    QQmlApplicationEngine* appEngine = dynamic_cast<QQmlApplicationEngine*>(engine);
    if (appEngine!=NULL) {
        QQmlApplicationEngine_Wrapper* appEngineWrapper = new QQmlApplicationEngine_Wrapper(*this, appEngine, false);
        //global.setProperty("engine", engine->newQObject(appEngineWrapper));

        QJSValue cl = engine->globalObject().property("QQmlApplicationEngine");
        QJSValueList args;
        args.append(QJSValue("__GOT_WRAPPER__"));
        args.append(QJSValue(false));
        args.append(engine->newQObject(appEngineWrapper));
        QJSValue r = cl.callAsConstructor(args);

        global.setProperty("engine", r);
    }


    {
        QString fileName = ":fixes.js";
        QFile scriptFile(fileName);
        if (scriptFile.open(QIODevice::ReadOnly)) {
            QTextStream stream(&scriptFile);
            QString contents = stream.readAll();
            scriptFile.close();
            QJSValue result = engine->evaluate(contents, fileName);
            if (result.isError()) {
                qWarning()
                        << "Uncaught exception at line"
                        << result.property("lineNumber").toInt()
                        << ":" << result.toString();
            }
        }
    }
}

void RJSApi::registerWrapper(RJSWrapperObj& obj) {
    static int counter = 0;

    // keep track of CPP owned objects
    // this is important, to make sure forwarded signals are disconnected properly
    if (!obj.isCppOwnership()) {
        return;
    }
    wrappers.insert(&obj);
    // qDebug() << "+ " << engine->objectName() << " type:" << RJSTypeEnum::getById(obj.getWrappedType())->getName();
    // qDebug() << "+ " << engine->objectName() << " wrappers:" << wrappers.size();

    // //if (wrappers.size()%1000==0) {

    // engine->collectGarbage();

    // if (RJSTypeEnum::getById(obj.getWrappedType())->getName()=="REntity") {
    //     engine->evaluate("console.trace();");
    // }

    //     // iterate through all wrappers and output the wrapper name:
    //     int c = 0;
    //     QMap<QString, int> counts;
    //     QSetIterator<RJSWrapperObj*> i(wrappers);
    //     while (i.hasNext()) {
    //         RJSWrapperObj* wrapper = i.next();
    //         //qDebug() << "\t\t" << c++ << ": wrapper:" << RJSTypeEnum::getById(wrapper->getWrappedType())->getName();

    //         // add name to total counts of wrappers:
    //         QString name = RJSTypeEnum::getById(wrapper->getWrappedType())->getName();
    //         if (counts.contains(name)) {
    //             counts[name]++;
    //         } else {
    //             counts[name] = 1;
    //         }
    //     }

    //     // remove all counts with 1:
    //     QMapIterator<QString, int> it(counts);
    //     while (it.hasNext()) {
    //         it.next();
    //         if (it.value()<20) {
    //             counts.remove(it.key());
    //         }
    //     }

    //     // output counts with total count and name, sorted by count, highest to lowest:
    //     QList<int> sortedCounts = counts.values();
    //     std::sort(sortedCounts.begin(), sortedCounts.end());
    //     for (int i=sortedCounts.size()-1; i>=0; i--) {
    //         int count = sortedCounts[i];
    //         QMapIterator<QString, int> it(counts);
    //         while (it.hasNext()) {
    //             it.next();
    //             if (it.value()==count) {
    //                 qDebug() << "\t\t" << it.key() << ": " << it.value();
    //             }
    //         }
    //     }

    // //}
}

void RJSApi::unregisterWrapper(RJSWrapperObj& obj) {
    if (!obj.isCppOwnership()) {
        return;
    }

    wrappers.remove(&obj);
    // qDebug() << "- " << engine->objectName() << " type:" << RJSTypeEnum::getById(obj.getWrappedType())->getName();
    // qDebug() << "- " << engine->objectName() << " wrappers:" << wrappers.size();
}


// Manual implementations of functions that require extra conversion:

QJSValue QImageWriter_WrapperSingleton::supportedImageFormats() {
    {
        // call function:
        QList<QByteArray> res = QImageWriter::supportedImageFormats();

        QList<QString> res2;
        for (int i=0; i<res.length(); i++) {
            res2.append(QString(res[i]));
        }

        return RJSHelper::cpp2js_QList_QString(handler, res2);
    }

    qWarning() << "no matching function variant found for QImageWriter_WrapperSingleton::supportedImageFormats";
    handler.trace();
    return QJSValue();
}

QJSValue QImageReader_WrapperSingleton::supportedImageFormats() {
    {
        // call function:
        QList<QByteArray> res = QImageReader::supportedImageFormats();

        QList<QString> res2;
        for (int i=0; i<res.length(); i++) {
            res2.append(QString(res[i]));
        }

        return RJSHelper::cpp2js_QList_QString(handler, res2);
    }

    qWarning() << "no matching function variant found for QImageReader_WrapperSingleton::supportedImageFormats";
    handler.trace();
    return QJSValue();
}
