
  // Automatically generated, do not edit
  
          #ifndef RJSHELPER_H
          #define RJSHELPER_H
        

      #include <QtCore>
      #include <QtGui>
      #include <QtWidgets>
      #include <QtXml>
      #include <QtQuick>
      #include <QtQuickWidgets>
      #include <QtPrintSupport>
      #include <QtCore5Compat>
      #include <QtSvg>
      #include <QtUiTools>


      #include "RJSWrapper.h"

    
      
        // Base class for downcasters that can downcast QAction to specific types:
        class RJSDowncaster_QAction {
        public:
          virtual QJSValue downcast(RJSApi& handler, QAction* o) = 0;
        };
      
        // Base class for downcasters that can downcast QApplication to specific types:
        class RJSDowncaster_QApplication {
        public:
          virtual QJSValue downcast(RJSApi& handler, QApplication* o) = 0;
        };
      
        // Base class for downcasters that can downcast QComboBox to specific types:
        class RJSDowncaster_QComboBox {
        public:
          virtual QJSValue downcast(RJSApi& handler, QComboBox* o) = 0;
        };
      
        // Base class for downcasters that can downcast QEvent to specific types:
        class RJSDowncaster_QEvent {
        public:
          virtual QJSValue downcast(RJSApi& handler, QEvent* o) = 0;
        };
      
        // Base class for downcasters that can downcast QDockWidget to specific types:
        class RJSDowncaster_QDockWidget {
        public:
          virtual QJSValue downcast(RJSApi& handler, QDockWidget* o) = 0;
        };
      
        // Base class for downcasters that can downcast QFileSystemModel to specific types:
        class RJSDowncaster_QFileSystemModel {
        public:
          virtual QJSValue downcast(RJSApi& handler, QFileSystemModel* o) = 0;
        };
      
        // Base class for downcasters that can downcast QFrame to specific types:
        class RJSDowncaster_QFrame {
        public:
          virtual QJSValue downcast(RJSApi& handler, QFrame* o) = 0;
        };
      
        // Base class for downcasters that can downcast QItemDelegate to specific types:
        class RJSDowncaster_QItemDelegate {
        public:
          virtual QJSValue downcast(RJSApi& handler, QItemDelegate* o) = 0;
        };
      
        // Base class for downcasters that can downcast QJSEngine to specific types:
        class RJSDowncaster_QJSEngine {
        public:
          virtual QJSValue downcast(RJSApi& handler, QJSEngine* o) = 0;
        };
      
        // Base class for downcasters that can downcast QLayout to specific types:
        class RJSDowncaster_QLayout {
        public:
          virtual QJSValue downcast(RJSApi& handler, QLayout* o) = 0;
        };
      
        // Base class for downcasters that can downcast QLineEdit to specific types:
        class RJSDowncaster_QLineEdit {
        public:
          virtual QJSValue downcast(RJSApi& handler, QLineEdit* o) = 0;
        };
      
        // Base class for downcasters that can downcast QListView to specific types:
        class RJSDowncaster_QListView {
        public:
          virtual QJSValue downcast(RJSApi& handler, QListView* o) = 0;
        };
      
        // Base class for downcasters that can downcast QListWidget to specific types:
        class RJSDowncaster_QListWidget {
        public:
          virtual QJSValue downcast(RJSApi& handler, QListWidget* o) = 0;
        };
      
        // Base class for downcasters that can downcast QMainWindow to specific types:
        class RJSDowncaster_QMainWindow {
        public:
          virtual QJSValue downcast(RJSApi& handler, QMainWindow* o) = 0;
        };
      
        // Base class for downcasters that can downcast QMdiArea to specific types:
        class RJSDowncaster_QMdiArea {
        public:
          virtual QJSValue downcast(RJSApi& handler, QMdiArea* o) = 0;
        };
      
        // Base class for downcasters that can downcast QMdiSubWindow to specific types:
        class RJSDowncaster_QMdiSubWindow {
        public:
          virtual QJSValue downcast(RJSApi& handler, QMdiSubWindow* o) = 0;
        };
      
        // Base class for downcasters that can downcast QObject to specific types:
        class RJSDowncaster_QObject {
        public:
          virtual QJSValue downcast(RJSApi& handler, QObject* o) = 0;
        };
      
        // Base class for downcasters that can downcast QQmlEngine to specific types:
        class RJSDowncaster_QQmlEngine {
        public:
          virtual QJSValue downcast(RJSApi& handler, QQmlEngine* o) = 0;
        };
      
        // Base class for downcasters that can downcast QTextBrowser to specific types:
        class RJSDowncaster_QTextBrowser {
        public:
          virtual QJSValue downcast(RJSApi& handler, QTextBrowser* o) = 0;
        };
      
        // Base class for downcasters that can downcast QToolBar to specific types:
        class RJSDowncaster_QToolBar {
        public:
          virtual QJSValue downcast(RJSApi& handler, QToolBar* o) = 0;
        };
      
        // Base class for downcasters that can downcast QToolButton to specific types:
        class RJSDowncaster_QToolButton {
        public:
          virtual QJSValue downcast(RJSApi& handler, QToolButton* o) = 0;
        };
      
        // Base class for downcasters that can downcast QTreeWidget to specific types:
        class RJSDowncaster_QTreeWidget {
        public:
          virtual QJSValue downcast(RJSApi& handler, QTreeWidget* o) = 0;
        };
      
        // Base class for downcasters that can downcast QWidget to specific types:
        class RJSDowncaster_QWidget {
        public:
          virtual QJSValue downcast(RJSApi& handler, QWidget* o) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractButton:
        class RJSBasecaster_QAbstractButton {
        public:
          virtual QAbstractButton* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractFileIconProvider:
        class RJSBasecaster_QAbstractFileIconProvider {
        public:
          virtual QAbstractFileIconProvider* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractItemDelegate:
        class RJSBasecaster_QAbstractItemDelegate {
        public:
          virtual QAbstractItemDelegate* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QModelIndex:
        class RJSBasecaster_QModelIndex {
        public:
          virtual QModelIndex* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractItemModel:
        class RJSBasecaster_QAbstractItemModel {
        public:
          virtual QAbstractItemModel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractTableModel:
        class RJSBasecaster_QAbstractTableModel {
        public:
          virtual QAbstractTableModel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractListModel:
        class RJSBasecaster_QAbstractListModel {
        public:
          virtual QAbstractListModel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractItemView:
        class RJSBasecaster_QAbstractItemView {
        public:
          virtual QAbstractItemView* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractPrintDialog:
        class RJSBasecaster_QAbstractPrintDialog {
        public:
          virtual QAbstractPrintDialog* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractScrollArea:
        class RJSBasecaster_QAbstractScrollArea {
        public:
          virtual QAbstractScrollArea* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractSlider:
        class RJSBasecaster_QAbstractSlider {
        public:
          virtual QAbstractSlider* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAbstractSpinBox:
        class RJSBasecaster_QAbstractSpinBox {
        public:
          virtual QAbstractSpinBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QAction:
        class RJSBasecaster_QAction {
        public:
          virtual QAction* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QActionGroup:
        class RJSBasecaster_QActionGroup {
        public:
          virtual QActionGroup* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QApplication:
        class RJSBasecaster_QApplication {
        public:
          virtual QApplication* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QBitmap:
        class RJSBasecaster_QBitmap {
        public:
          virtual QBitmap* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QBoxLayout:
        class RJSBasecaster_QBoxLayout {
        public:
          virtual QBoxLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QHBoxLayout:
        class RJSBasecaster_QHBoxLayout {
        public:
          virtual QHBoxLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QVBoxLayout:
        class RJSBasecaster_QVBoxLayout {
        public:
          virtual QVBoxLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QBrush:
        class RJSBasecaster_QBrush {
        public:
          virtual QBrush* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGradient:
        class RJSBasecaster_QGradient {
        public:
          virtual QGradient* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLinearGradient:
        class RJSBasecaster_QLinearGradient {
        public:
          virtual QLinearGradient* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRadialGradient:
        class RJSBasecaster_QRadialGradient {
        public:
          virtual QRadialGradient* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QConicalGradient:
        class RJSBasecaster_QConicalGradient {
        public:
          virtual QConicalGradient* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QBuffer:
        class RJSBasecaster_QBuffer {
        public:
          virtual QBuffer* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QButtonGroup:
        class RJSBasecaster_QButtonGroup {
        public:
          virtual QButtonGroup* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QByteArray:
        class RJSBasecaster_QByteArray {
        public:
          virtual QByteArray* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QCalendar:
        class RJSBasecaster_QCalendar {
        public:
          virtual QCalendar* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QCheckBox:
        class RJSBasecaster_QCheckBox {
        public:
          virtual QCheckBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QClipboard:
        class RJSBasecaster_QClipboard {
        public:
          virtual QClipboard* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QColor:
        class RJSBasecaster_QColor {
        public:
          virtual QColor* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QColorDialog:
        class RJSBasecaster_QColorDialog {
        public:
          virtual QColorDialog* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QComboBox:
        class RJSBasecaster_QComboBox {
        public:
          virtual QComboBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QCompleter:
        class RJSBasecaster_QCompleter {
        public:
          virtual QCompleter* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QCoreApplication:
        class RJSBasecaster_QCoreApplication {
        public:
          virtual QCoreApplication* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QEvent:
        class RJSBasecaster_QEvent {
        public:
          virtual QEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QCursor:
        class RJSBasecaster_QCursor {
        public:
          virtual QCursor* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDate:
        class RJSBasecaster_QDate {
        public:
          virtual QDate* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTime:
        class RJSBasecaster_QTime {
        public:
          virtual QTime* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDateTime:
        class RJSBasecaster_QDateTime {
        public:
          virtual QDateTime* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDesktopServices:
        class RJSBasecaster_QDesktopServices {
        public:
          virtual QDesktopServices* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDialog:
        class RJSBasecaster_QDialog {
        public:
          virtual QDialog* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDialogButtonBox:
        class RJSBasecaster_QDialogButtonBox {
        public:
          virtual QDialogButtonBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDir:
        class RJSBasecaster_QDir {
        public:
          virtual QDir* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDirIterator:
        class RJSBasecaster_QDirIterator {
        public:
          virtual QDirIterator* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDockWidget:
        class RJSBasecaster_QDockWidget {
        public:
          virtual QDockWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomImplementation:
        class RJSBasecaster_QDomImplementation {
        public:
          virtual QDomImplementation* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomNode:
        class RJSBasecaster_QDomNode {
        public:
          virtual QDomNode* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomNodeList:
        class RJSBasecaster_QDomNodeList {
        public:
          virtual QDomNodeList* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomDocumentType:
        class RJSBasecaster_QDomDocumentType {
        public:
          virtual QDomDocumentType* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomDocument:
        class RJSBasecaster_QDomDocument {
        public:
          virtual QDomDocument* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomNamedNodeMap:
        class RJSBasecaster_QDomNamedNodeMap {
        public:
          virtual QDomNamedNodeMap* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomDocumentFragment:
        class RJSBasecaster_QDomDocumentFragment {
        public:
          virtual QDomDocumentFragment* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomCharacterData:
        class RJSBasecaster_QDomCharacterData {
        public:
          virtual QDomCharacterData* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomAttr:
        class RJSBasecaster_QDomAttr {
        public:
          virtual QDomAttr* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomElement:
        class RJSBasecaster_QDomElement {
        public:
          virtual QDomElement* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomText:
        class RJSBasecaster_QDomText {
        public:
          virtual QDomText* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomComment:
        class RJSBasecaster_QDomComment {
        public:
          virtual QDomComment* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomCDATASection:
        class RJSBasecaster_QDomCDATASection {
        public:
          virtual QDomCDATASection* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomNotation:
        class RJSBasecaster_QDomNotation {
        public:
          virtual QDomNotation* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomEntity:
        class RJSBasecaster_QDomEntity {
        public:
          virtual QDomEntity* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomEntityReference:
        class RJSBasecaster_QDomEntityReference {
        public:
          virtual QDomEntityReference* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDomProcessingInstruction:
        class RJSBasecaster_QDomProcessingInstruction {
        public:
          virtual QDomProcessingInstruction* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDrag:
        class RJSBasecaster_QDrag {
        public:
          virtual QDrag* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QEasingCurve:
        class RJSBasecaster_QEasingCurve {
        public:
          virtual QEasingCurve* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QInputEvent:
        class RJSBasecaster_QInputEvent {
        public:
          virtual QInputEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPointerEvent:
        class RJSBasecaster_QPointerEvent {
        public:
          virtual QPointerEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSinglePointEvent:
        class RJSBasecaster_QSinglePointEvent {
        public:
          virtual QSinglePointEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMouseEvent:
        class RJSBasecaster_QMouseEvent {
        public:
          virtual QMouseEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QWheelEvent:
        class RJSBasecaster_QWheelEvent {
        public:
          virtual QWheelEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QKeyEvent:
        class RJSBasecaster_QKeyEvent {
        public:
          virtual QKeyEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFocusEvent:
        class RJSBasecaster_QFocusEvent {
        public:
          virtual QFocusEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPaintEvent:
        class RJSBasecaster_QPaintEvent {
        public:
          virtual QPaintEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QResizeEvent:
        class RJSBasecaster_QResizeEvent {
        public:
          virtual QResizeEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDragEnterEvent:
        class RJSBasecaster_QDragEnterEvent {
        public:
          virtual QDragEnterEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDropEvent:
        class RJSBasecaster_QDropEvent {
        public:
          virtual QDropEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QContextMenuEvent:
        class RJSBasecaster_QContextMenuEvent {
        public:
          virtual QContextMenuEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDragMoveEvent:
        class RJSBasecaster_QDragMoveEvent {
        public:
          virtual QDragMoveEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDragLeaveEvent:
        class RJSBasecaster_QDragLeaveEvent {
        public:
          virtual QDragLeaveEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QHelpEvent:
        class RJSBasecaster_QHelpEvent {
        public:
          virtual QHelpEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QActionEvent:
        class RJSBasecaster_QActionEvent {
        public:
          virtual QActionEvent* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QEventLoop:
        class RJSBasecaster_QEventLoop {
        public:
          virtual QEventLoop* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QEventPoint:
        class RJSBasecaster_QEventPoint {
        public:
          virtual QEventPoint* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFile:
        class RJSBasecaster_QFile {
        public:
          virtual QFile* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFileDevice:
        class RJSBasecaster_QFileDevice {
        public:
          virtual QFileDevice* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFileDialog:
        class RJSBasecaster_QFileDialog {
        public:
          virtual QFileDialog* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFileIconProvider:
        class RJSBasecaster_QFileIconProvider {
        public:
          virtual QFileIconProvider* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFileInfo:
        class RJSBasecaster_QFileInfo {
        public:
          virtual QFileInfo* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFileSystemModel:
        class RJSBasecaster_QFileSystemModel {
        public:
          virtual QFileSystemModel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFileSystemWatcher:
        class RJSBasecaster_QFileSystemWatcher {
        public:
          virtual QFileSystemWatcher* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFont:
        class RJSBasecaster_QFont {
        public:
          virtual QFont* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFontComboBox:
        class RJSBasecaster_QFontComboBox {
        public:
          virtual QFontComboBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFontDatabase:
        class RJSBasecaster_QFontDatabase {
        public:
          virtual QFontDatabase* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFontMetrics:
        class RJSBasecaster_QFontMetrics {
        public:
          virtual QFontMetrics* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFontMetricsF:
        class RJSBasecaster_QFontMetricsF {
        public:
          virtual QFontMetricsF* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFormLayout:
        class RJSBasecaster_QFormLayout {
        public:
          virtual QFormLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QFrame:
        class RJSBasecaster_QFrame {
        public:
          virtual QFrame* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGesture:
        class RJSBasecaster_QGesture {
        public:
          virtual QGesture* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPanGesture:
        class RJSBasecaster_QPanGesture {
        public:
          virtual QPanGesture* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPinchGesture:
        class RJSBasecaster_QPinchGesture {
        public:
          virtual QPinchGesture* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSwipeGesture:
        class RJSBasecaster_QSwipeGesture {
        public:
          virtual QSwipeGesture* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGraphicsEffect:
        class RJSBasecaster_QGraphicsEffect {
        public:
          virtual QGraphicsEffect* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGraphicsColorizeEffect:
        class RJSBasecaster_QGraphicsColorizeEffect {
        public:
          virtual QGraphicsColorizeEffect* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGraphicsBlurEffect:
        class RJSBasecaster_QGraphicsBlurEffect {
        public:
          virtual QGraphicsBlurEffect* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGraphicsDropShadowEffect:
        class RJSBasecaster_QGraphicsDropShadowEffect {
        public:
          virtual QGraphicsDropShadowEffect* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGraphicsOpacityEffect:
        class RJSBasecaster_QGraphicsOpacityEffect {
        public:
          virtual QGraphicsOpacityEffect* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGridLayout:
        class RJSBasecaster_QGridLayout {
        public:
          virtual QGridLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGroupBox:
        class RJSBasecaster_QGroupBox {
        public:
          virtual QGroupBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QGuiApplication:
        class RJSBasecaster_QGuiApplication {
        public:
          virtual QGuiApplication* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QHeaderView:
        class RJSBasecaster_QHeaderView {
        public:
          virtual QHeaderView* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QIcon:
        class RJSBasecaster_QIcon {
        public:
          virtual QIcon* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QImage:
        class RJSBasecaster_QImage {
        public:
          virtual QImage* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QImageReader:
        class RJSBasecaster_QImageReader {
        public:
          virtual QImageReader* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QImageWriter:
        class RJSBasecaster_QImageWriter {
        public:
          virtual QImageWriter* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QInputDevice:
        class RJSBasecaster_QInputDevice {
        public:
          virtual QInputDevice* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QIODevice:
        class RJSBasecaster_QIODevice {
        public:
          virtual QIODevice* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QIODeviceBase:
        class RJSBasecaster_QIODeviceBase {
        public:
          virtual QIODeviceBase* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QItemDelegate:
        class RJSBasecaster_QItemDelegate {
        public:
          virtual QItemDelegate* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QItemSelectionModel:
        class RJSBasecaster_QItemSelectionModel {
        public:
          virtual QItemSelectionModel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QItemSelection:
        class RJSBasecaster_QItemSelection {
        public:
          virtual QItemSelection* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QJSEngine:
        class RJSBasecaster_QJSEngine {
        public:
          virtual QJSEngine* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QKeySequence:
        class RJSBasecaster_QKeySequence {
        public:
          virtual QKeySequence* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLabel:
        class RJSBasecaster_QLabel {
        public:
          virtual QLabel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLayout:
        class RJSBasecaster_QLayout {
        public:
          virtual QLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLayoutItem:
        class RJSBasecaster_QLayoutItem {
        public:
          virtual QLayoutItem* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSpacerItem:
        class RJSBasecaster_QSpacerItem {
        public:
          virtual QSpacerItem* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QWidgetItem:
        class RJSBasecaster_QWidgetItem {
        public:
          virtual QWidgetItem* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLine:
        class RJSBasecaster_QLine {
        public:
          virtual QLine* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLineF:
        class RJSBasecaster_QLineF {
        public:
          virtual QLineF* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLineEdit:
        class RJSBasecaster_QLineEdit {
        public:
          virtual QLineEdit* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QListView:
        class RJSBasecaster_QListView {
        public:
          virtual QListView* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QListWidgetItem:
        class RJSBasecaster_QListWidgetItem {
        public:
          virtual QListWidgetItem* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QListWidget:
        class RJSBasecaster_QListWidget {
        public:
          virtual QListWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QLocale:
        class RJSBasecaster_QLocale {
        public:
          virtual QLocale* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMainWindow:
        class RJSBasecaster_QMainWindow {
        public:
          virtual QMainWindow* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMargins:
        class RJSBasecaster_QMargins {
        public:
          virtual QMargins* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMarginsF:
        class RJSBasecaster_QMarginsF {
        public:
          virtual QMarginsF* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMdiArea:
        class RJSBasecaster_QMdiArea {
        public:
          virtual QMdiArea* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMdiSubWindow:
        class RJSBasecaster_QMdiSubWindow {
        public:
          virtual QMdiSubWindow* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMenu:
        class RJSBasecaster_QMenu {
        public:
          virtual QMenu* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMenuBar:
        class RJSBasecaster_QMenuBar {
        public:
          virtual QMenuBar* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMessageBox:
        class RJSBasecaster_QMessageBox {
        public:
          virtual QMessageBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QMimeData:
        class RJSBasecaster_QMimeData {
        public:
          virtual QMimeData* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QKeyCombination:
        class RJSBasecaster_QKeyCombination {
        public:
          virtual QKeyCombination* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QObject:
        class RJSBasecaster_QObject {
        public:
          virtual QObject* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPagedPaintDevice:
        class RJSBasecaster_QPagedPaintDevice {
        public:
          virtual QPagedPaintDevice* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPageLayout:
        class RJSBasecaster_QPageLayout {
        public:
          virtual QPageLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPageRanges:
        class RJSBasecaster_QPageRanges {
        public:
          virtual QPageRanges* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPageSize:
        class RJSBasecaster_QPageSize {
        public:
          virtual QPageSize* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPaintDevice:
        class RJSBasecaster_QPaintDevice {
        public:
          virtual QPaintDevice* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPainter:
        class RJSBasecaster_QPainter {
        public:
          virtual QPainter* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPainterPath:
        class RJSBasecaster_QPainterPath {
        public:
          virtual QPainterPath* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPainterPathStroker:
        class RJSBasecaster_QPainterPathStroker {
        public:
          virtual QPainterPathStroker* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPalette:
        class RJSBasecaster_QPalette {
        public:
          virtual QPalette* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPen:
        class RJSBasecaster_QPen {
        public:
          virtual QPen* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPicture:
        class RJSBasecaster_QPicture {
        public:
          virtual QPicture* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPixmap:
        class RJSBasecaster_QPixmap {
        public:
          virtual QPixmap* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPlainTextEdit:
        class RJSBasecaster_QPlainTextEdit {
        public:
          virtual QPlainTextEdit* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPoint:
        class RJSBasecaster_QPoint {
        public:
          virtual QPoint* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPointF:
        class RJSBasecaster_QPointF {
        public:
          virtual QPointF* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPolygon:
        class RJSBasecaster_QPolygon {
        public:
          virtual QPolygon* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPolygonF:
        class RJSBasecaster_QPolygonF {
        public:
          virtual QPolygonF* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPrintDialog:
        class RJSBasecaster_QPrintDialog {
        public:
          virtual QPrintDialog* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPrinter:
        class RJSBasecaster_QPrinter {
        public:
          virtual QPrinter* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPrinterInfo:
        class RJSBasecaster_QPrinterInfo {
        public:
          virtual QPrinterInfo* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QProcessEnvironment:
        class RJSBasecaster_QProcessEnvironment {
        public:
          virtual QProcessEnvironment* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QProcess:
        class RJSBasecaster_QProcess {
        public:
          virtual QProcess* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QProgressBar:
        class RJSBasecaster_QProgressBar {
        public:
          virtual QProgressBar* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QProgressDialog:
        class RJSBasecaster_QProgressDialog {
        public:
          virtual QProgressDialog* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QPushButton:
        class RJSBasecaster_QPushButton {
        public:
          virtual QPushButton* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QQmlApplicationEngine:
        class RJSBasecaster_QQmlApplicationEngine {
        public:
          virtual QQmlApplicationEngine* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QQmlContext:
        class RJSBasecaster_QQmlContext {
        public:
          virtual QQmlContext* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QQmlEngine:
        class RJSBasecaster_QQmlEngine {
        public:
          virtual QQmlEngine* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QQuickView:
        class RJSBasecaster_QQuickView {
        public:
          virtual QQuickView* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QQuickWidget:
        class RJSBasecaster_QQuickWidget {
        public:
          virtual QQuickWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRadioButton:
        class RJSBasecaster_QRadioButton {
        public:
          virtual QRadioButton* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRect:
        class RJSBasecaster_QRect {
        public:
          virtual QRect* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRectF:
        class RJSBasecaster_QRectF {
        public:
          virtual QRectF* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRegion:
        class RJSBasecaster_QRegion {
        public:
          virtual QRegion* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRegularExpression:
        class RJSBasecaster_QRegularExpression {
        public:
          virtual QRegularExpression* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRegularExpressionMatch:
        class RJSBasecaster_QRegularExpressionMatch {
        public:
          virtual QRegularExpressionMatch* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QScreen:
        class RJSBasecaster_QScreen {
        public:
          virtual QScreen* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QScrollArea:
        class RJSBasecaster_QScrollArea {
        public:
          virtual QScrollArea* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QScrollBar:
        class RJSBasecaster_QScrollBar {
        public:
          virtual QScrollBar* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSettings:
        class RJSBasecaster_QSettings {
        public:
          virtual QSettings* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QShortcut:
        class RJSBasecaster_QShortcut {
        public:
          virtual QShortcut* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSize:
        class RJSBasecaster_QSize {
        public:
          virtual QSize* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSizeF:
        class RJSBasecaster_QSizeF {
        public:
          virtual QSizeF* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSizePolicy:
        class RJSBasecaster_QSizePolicy {
        public:
          virtual QSizePolicy* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSlider:
        class RJSBasecaster_QSlider {
        public:
          virtual QSlider* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSortFilterProxyModel:
        class RJSBasecaster_QSortFilterProxyModel {
        public:
          virtual QSortFilterProxyModel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSpinBox:
        class RJSBasecaster_QSpinBox {
        public:
          virtual QSpinBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDoubleSpinBox:
        class RJSBasecaster_QDoubleSpinBox {
        public:
          virtual QDoubleSpinBox* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSplashScreen:
        class RJSBasecaster_QSplashScreen {
        public:
          virtual QSplashScreen* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSplitter:
        class RJSBasecaster_QSplitter {
        public:
          virtual QSplitter* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSplitterHandle:
        class RJSBasecaster_QSplitterHandle {
        public:
          virtual QSplitterHandle* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStackedLayout:
        class RJSBasecaster_QStackedLayout {
        public:
          virtual QStackedLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStackedWidget:
        class RJSBasecaster_QStackedWidget {
        public:
          virtual QStackedWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStandardItem:
        class RJSBasecaster_QStandardItem {
        public:
          virtual QStandardItem* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStandardItemModel:
        class RJSBasecaster_QStandardItemModel {
        public:
          virtual QStandardItemModel* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStatusBar:
        class RJSBasecaster_QStatusBar {
        public:
          virtual QStatusBar* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStringConverter:
        class RJSBasecaster_QStringConverter {
        public:
          virtual QStringConverter* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStringEncoder:
        class RJSBasecaster_QStringEncoder {
        public:
          virtual QStringEncoder* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QStringDecoder:
        class RJSBasecaster_QStringDecoder {
        public:
          virtual QStringDecoder* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSurfaceFormat:
        class RJSBasecaster_QSurfaceFormat {
        public:
          virtual QSurfaceFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QSvgRenderer:
        class RJSBasecaster_QSvgRenderer {
        public:
          virtual QSvgRenderer* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTabBar:
        class RJSBasecaster_QTabBar {
        public:
          virtual QTabBar* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTableView:
        class RJSBasecaster_QTableView {
        public:
          virtual QTableView* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTableWidgetItem:
        class RJSBasecaster_QTableWidgetItem {
        public:
          virtual QTableWidgetItem* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTableWidget:
        class RJSBasecaster_QTableWidget {
        public:
          virtual QTableWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTabWidget:
        class RJSBasecaster_QTabWidget {
        public:
          virtual QTabWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextBrowser:
        class RJSBasecaster_QTextBrowser {
        public:
          virtual QTextBrowser* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextCursor:
        class RJSBasecaster_QTextCursor {
        public:
          virtual QTextCursor* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextDocument:
        class RJSBasecaster_QTextDocument {
        public:
          virtual QTextDocument* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextEdit:
        class RJSBasecaster_QTextEdit {
        public:
          virtual QTextEdit* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextLength:
        class RJSBasecaster_QTextLength {
        public:
          virtual QTextLength* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextFormat:
        class RJSBasecaster_QTextFormat {
        public:
          virtual QTextFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextCharFormat:
        class RJSBasecaster_QTextCharFormat {
        public:
          virtual QTextCharFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextBlockFormat:
        class RJSBasecaster_QTextBlockFormat {
        public:
          virtual QTextBlockFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextListFormat:
        class RJSBasecaster_QTextListFormat {
        public:
          virtual QTextListFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextImageFormat:
        class RJSBasecaster_QTextImageFormat {
        public:
          virtual QTextImageFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextFrameFormat:
        class RJSBasecaster_QTextFrameFormat {
        public:
          virtual QTextFrameFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextTableFormat:
        class RJSBasecaster_QTextTableFormat {
        public:
          virtual QTextTableFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextTableCellFormat:
        class RJSBasecaster_QTextTableCellFormat {
        public:
          virtual QTextTableCellFormat* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextLayout:
        class RJSBasecaster_QTextLayout {
        public:
          virtual QTextLayout* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTextStream:
        class RJSBasecaster_QTextStream {
        public:
          virtual QTextStream* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTimer:
        class RJSBasecaster_QTimer {
        public:
          virtual QTimer* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QToolBar:
        class RJSBasecaster_QToolBar {
        public:
          virtual QToolBar* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QToolButton:
        class RJSBasecaster_QToolButton {
        public:
          virtual QToolButton* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QToolTip:
        class RJSBasecaster_QToolTip {
        public:
          virtual QToolTip* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTransform:
        class RJSBasecaster_QTransform {
        public:
          virtual QTransform* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTranslator:
        class RJSBasecaster_QTranslator {
        public:
          virtual QTranslator* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTreeView:
        class RJSBasecaster_QTreeView {
        public:
          virtual QTreeView* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTreeWidgetItem:
        class RJSBasecaster_QTreeWidgetItem {
        public:
          virtual QTreeWidgetItem* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QTreeWidget:
        class RJSBasecaster_QTreeWidget {
        public:
          virtual QTreeWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QUiLoader:
        class RJSBasecaster_QUiLoader {
        public:
          virtual QUiLoader* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QUrl:
        class RJSBasecaster_QUrl {
        public:
          virtual QUrl* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QUrlQuery:
        class RJSBasecaster_QUrlQuery {
        public:
          virtual QUrlQuery* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QValidator:
        class RJSBasecaster_QValidator {
        public:
          virtual QValidator* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QIntValidator:
        class RJSBasecaster_QIntValidator {
        public:
          virtual QIntValidator* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QDoubleValidator:
        class RJSBasecaster_QDoubleValidator {
        public:
          virtual QDoubleValidator* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QRegularExpressionValidator:
        class RJSBasecaster_QRegularExpressionValidator {
        public:
          virtual QRegularExpressionValidator* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QVariant:
        class RJSBasecaster_QVariant {
        public:
          virtual QVariant* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QWidget:
        class RJSBasecaster_QWidget {
        public:
          virtual QWidget* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QWidgetAction:
        class RJSBasecaster_QWidgetAction {
        public:
          virtual QWidgetAction* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QWindow:
        class RJSBasecaster_QWindow {
        public:
          virtual QWindow* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlAttributes:
        class RJSBasecaster_QXmlAttributes {
        public:
          virtual QXmlAttributes* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlInputSource:
        class RJSBasecaster_QXmlInputSource {
        public:
          virtual QXmlInputSource* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlParseException:
        class RJSBasecaster_QXmlParseException {
        public:
          virtual QXmlParseException* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlReader:
        class RJSBasecaster_QXmlReader {
        public:
          virtual QXmlReader* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlSimpleReader:
        class RJSBasecaster_QXmlSimpleReader {
        public:
          virtual QXmlSimpleReader* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlLocator:
        class RJSBasecaster_QXmlLocator {
        public:
          virtual QXmlLocator* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlContentHandler:
        class RJSBasecaster_QXmlContentHandler {
        public:
          virtual QXmlContentHandler* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlErrorHandler:
        class RJSBasecaster_QXmlErrorHandler {
        public:
          virtual QXmlErrorHandler* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlDTDHandler:
        class RJSBasecaster_QXmlDTDHandler {
        public:
          virtual QXmlDTDHandler* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlEntityResolver:
        class RJSBasecaster_QXmlEntityResolver {
        public:
          virtual QXmlEntityResolver* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlLexicalHandler:
        class RJSBasecaster_QXmlLexicalHandler {
        public:
          virtual QXmlLexicalHandler* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlDeclHandler:
        class RJSBasecaster_QXmlDeclHandler {
        public:
          virtual QXmlDeclHandler* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlDefaultHandler:
        class RJSBasecaster_QXmlDefaultHandler {
        public:
          virtual QXmlDefaultHandler* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlStreamAttribute:
        class RJSBasecaster_QXmlStreamAttribute {
        public:
          virtual QXmlStreamAttribute* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlStreamAttributes:
        class RJSBasecaster_QXmlStreamAttributes {
        public:
          virtual QXmlStreamAttributes* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlStreamReader:
        class RJSBasecaster_QXmlStreamReader {
        public:
          virtual QXmlStreamReader* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for basecasters that can cast void* to base class QXmlStreamWriter:
        class RJSBasecaster_QXmlStreamWriter {
        public:
          virtual QXmlStreamWriter* castToBase(int t, void* vp) = 0;
        };
      
        // Base class for converters that can convert QVariant to specific types.
        class RJSQVariantConverter {
        public:
          virtual QJSValue fromVariant(RJSApi& handler, const QVariant& v) = 0;
          virtual QVariant toVariant(RJSApi& handler, const QJSValue& v) = 0;
        };
      QTJSAPI_EXPORT extern QVariant  getWrapperProperty(RJSApi& handler, const QObject& obj);
        QTJSAPI_EXPORT extern void setWrapperProperty(RJSApi& handler, QObject& obj, const QVariant& wrapper);
        
        QTJSAPI_EXPORT extern QJSValue getWrapperQJSValue(const QJSValue& v);
        QTJSAPI_EXPORT extern QObject* getWrapperQObject(const QJSValue& v);
        QTJSAPI_EXPORT extern RJSWrapper* getWrapperRJSWrapper(const QJSValue& v);

        /**
         * \return Wrapper in given type T for the given QJSValue.
         */
        template<typename T>
        T* getWrapper(const QJSValue& v) {
            return dynamic_cast<T*>(getWrapperQObject(v));
        }
      



      class QTJSAPI_EXPORT RJSHelper {

      public:
        
          static QString getTypeName(int type);
        
          //
          // custom types (manual implementation):
          //
         
          static QJSValue cpp2js_bool(RJSApi& handler, bool v);
          static bool js2cpp_bool(RJSApi& handler, const QJSValue& v);
          static bool is_bool(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
         
          static QString js2cpp_char_ptr(RJSApi& handler, const QJSValue& v);
          static bool is_char_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
         
          static QJSValue cpp2js_char(RJSApi& handler, const char* v);
         
          static QJSValue cpp2js_QJSValue(RJSApi& handler, const QJSValue& v);

          static QJSValue cpp2js_QVariant(RJSApi& handler, const QVariant& v);
          static QVariant js2cpp_QVariant(RJSApi& handler, const QJSValue& v);
          static bool is_QVariant(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
         
          static QJSValue cpp2js_QObjectList(RJSApi& handler, const QList<QObject*>& v);
          static QList<QObject*> js2cpp_QObjectList(RJSApi& handler, const QJSValue& v);
         
          static QJSValue cpp2js_QObject(RJSApi& handler, QObject* v);
          static QObject* js2cpp_QObject_ptr(RJSApi& handler, const QJSValue& v);
          static bool is_QObject_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
         
          static QJSValue cpp2js_QWidget(RJSApi& handler, QWidget* v);
          static QWidget* js2cpp_QWidget_ptr(RJSApi& handler, const QJSValue& v);
          static bool is_QWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
         
          static QJSValue cpp2js_QDomDocument_ParseResult(RJSApi& handler, QDomDocument::ParseResult v);
         
          static QJSValue cpp2js_QList_QPair_QString_QString(RJSApi& handler, const QList<QPair<QString,QString> >& v);
          static QList<QPair<QString,QString> > js2cpp_QList_QPair_QString_QString(RJSApi& handler, const QJSValue& v);
          static bool is_QList_QPair_QString_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
        
  // ----------------
  // primitive types:
  // ----------------
  
      static QJSValue cpp2js_QAbstractFileIconProvider_Options(RJSApi& handler, QAbstractFileIconProvider::Options v);
      static QAbstractFileIconProvider::Options js2cpp_QAbstractFileIconProvider_Options(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractFileIconProvider_Options(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView_EditTriggers(RJSApi& handler, QAbstractItemView::EditTriggers v);
      static QAbstractItemView::EditTriggers js2cpp_QAbstractItemView_EditTriggers(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_EditTriggers(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractPrintDialog_PrintDialogOptions(RJSApi& handler, QAbstractPrintDialog::PrintDialogOptions v);
      static QAbstractPrintDialog::PrintDialogOptions js2cpp_QAbstractPrintDialog_PrintDialogOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractPrintDialog_PrintDialogOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QColorDialog_ColorDialogOptions(RJSApi& handler, QColorDialog::ColorDialogOptions v);
      static QColorDialog::ColorDialogOptions js2cpp_QColorDialog_ColorDialogOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QColorDialog_ColorDialogOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDialogButtonBox_StandardButtons(RJSApi& handler, QDialogButtonBox::StandardButtons v);
      static QDialogButtonBox::StandardButtons js2cpp_QDialogButtonBox_StandardButtons(RJSApi& handler, const QJSValue& v);
      static bool is_QDialogButtonBox_StandardButtons(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDir_Filters(RJSApi& handler, QDir::Filters v);
      static QDir::Filters js2cpp_QDir_Filters(RJSApi& handler, const QJSValue& v);
      static bool is_QDir_Filters(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDir_SortFlags(RJSApi& handler, QDir::SortFlags v);
      static QDir::SortFlags js2cpp_QDir_SortFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QDir_SortFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDirIterator_IteratorFlags(RJSApi& handler, QDirIterator::IteratorFlags v);
      static QDirIterator::IteratorFlags js2cpp_QDirIterator_IteratorFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QDirIterator_IteratorFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDockWidget_DockWidgetFeatures(RJSApi& handler, QDockWidget::DockWidgetFeatures v);
      static QDockWidget::DockWidgetFeatures js2cpp_QDockWidget_DockWidgetFeatures(RJSApi& handler, const QJSValue& v);
      static bool is_QDockWidget_DockWidgetFeatures(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEventLoop_ProcessEventsFlags(RJSApi& handler, QEventLoop::ProcessEventsFlags v);
      static QEventLoop::ProcessEventsFlags js2cpp_QEventLoop_ProcessEventsFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QEventLoop_ProcessEventsFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFile_OpenMode(RJSApi& handler, QFile::OpenMode v);
      static QFile::OpenMode js2cpp_QFile_OpenMode(RJSApi& handler, const QJSValue& v);
      static bool is_QFile_OpenMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFile_Permissions(RJSApi& handler, QFile::Permissions v);
      static QFile::Permissions js2cpp_QFile_Permissions(RJSApi& handler, const QJSValue& v);
      static bool is_QFile_Permissions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDialog_Options(RJSApi& handler, QFileDialog::Options v);
      static QFileDialog::Options js2cpp_QFileDialog_Options(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDialog_Options(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileSystemModel_Options(RJSApi& handler, QFileSystemModel::Options v);
      static QFileSystemModel::Options js2cpp_QFileSystemModel_Options(RJSApi& handler, const QJSValue& v);
      static bool is_QFileSystemModel_Options(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontComboBox_FontFilters(RJSApi& handler, QFontComboBox::FontFilters v);
      static QFontComboBox::FontFilters js2cpp_QFontComboBox_FontFilters(RJSApi& handler, const QJSValue& v);
      static bool is_QFontComboBox_FontFilters(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsBlurEffect_BlurHints(RJSApi& handler, QGraphicsBlurEffect::BlurHints v);
      static QGraphicsBlurEffect::BlurHints js2cpp_QGraphicsBlurEffect_BlurHints(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsBlurEffect_BlurHints(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsEffect_ChangeFlags(RJSApi& handler, QGraphicsEffect::ChangeFlags v);
      static QGraphicsEffect::ChangeFlags js2cpp_QGraphicsEffect_ChangeFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsEffect_ChangeFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QItemSelectionModel_SelectionFlags(RJSApi& handler, QItemSelectionModel::SelectionFlags v);
      static QItemSelectionModel::SelectionFlags js2cpp_QItemSelectionModel_SelectionFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QItemSelectionModel_SelectionFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_DataSizeFormats(RJSApi& handler, QLocale::DataSizeFormats v);
      static QLocale::DataSizeFormats js2cpp_QLocale_DataSizeFormats(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_DataSizeFormats(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMessageBox_StandardButtons(RJSApi& handler, QMessageBox::StandardButtons v);
      static QMessageBox::StandardButtons js2cpp_QMessageBox_StandardButtons(RJSApi& handler, const QJSValue& v);
      static bool is_QMessageBox_StandardButtons(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPinchGesture_ChangeFlags(RJSApi& handler, QPinchGesture::ChangeFlags v);
      static QPinchGesture::ChangeFlags js2cpp_QPinchGesture_ChangeFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QPinchGesture_ChangeFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegularExpression_PatternOptions(RJSApi& handler, QRegularExpression::PatternOptions v);
      static QRegularExpression::PatternOptions js2cpp_QRegularExpression_PatternOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QRegularExpression_PatternOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegularExpression_WildcardConversionOptions(RJSApi& handler, QRegularExpression::WildcardConversionOptions v);
      static QRegularExpression::WildcardConversionOptions js2cpp_QRegularExpression_WildcardConversionOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QRegularExpression_WildcardConversionOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSizePolicy_ControlTypes(RJSApi& handler, QSizePolicy::ControlTypes v);
      static QSizePolicy::ControlTypes js2cpp_QSizePolicy_ControlTypes(RJSApi& handler, const QJSValue& v);
      static bool is_QSizePolicy_ControlTypes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSurfaceFormat_FormatOptions(RJSApi& handler, QSurfaceFormat::FormatOptions v);
      static QSurfaceFormat::FormatOptions js2cpp_QSurfaceFormat_FormatOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QSurfaceFormat_FormatOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextDocument_FindFlags(RJSApi& handler, QTextDocument::FindFlags v);
      static QTextDocument::FindFlags js2cpp_QTextDocument_FindFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QTextDocument_FindFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextEdit_AutoFormatting(RJSApi& handler, QTextEdit::AutoFormatting v);
      static QTextEdit::AutoFormatting js2cpp_QTextEdit_AutoFormatting(RJSApi& handler, const QJSValue& v);
      static bool is_QTextEdit_AutoFormatting(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextFormat_PageBreakFlags(RJSApi& handler, QTextFormat::PageBreakFlags v);
      static QTextFormat::PageBreakFlags js2cpp_QTextFormat_PageBreakFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QTextFormat_PageBreakFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl_ComponentFormattingOptions(RJSApi& handler, QUrl::ComponentFormattingOptions v);
      static QUrl::ComponentFormattingOptions js2cpp_QUrl_ComponentFormattingOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl_ComponentFormattingOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl_FormattingOptions(RJSApi& handler, QUrl::FormattingOptions v);
      static QUrl::FormattingOptions js2cpp_QUrl_FormattingOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl_FormattingOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl_UserInputResolutionOptions(RJSApi& handler, QUrl::UserInputResolutionOptions v);
      static QUrl::UserInputResolutionOptions js2cpp_QUrl_UserInputResolutionOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl_UserInputResolutionOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Alignment(RJSApi& handler, Qt::Alignment v);
      static Qt::Alignment js2cpp_Qt_Alignment(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Alignment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ApplicationStates(RJSApi& handler, Qt::ApplicationStates v);
      static Qt::ApplicationStates js2cpp_Qt_ApplicationStates(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ApplicationStates(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_DropActions(RJSApi& handler, Qt::DropActions v);
      static Qt::DropActions js2cpp_Qt_DropActions(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_DropActions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Edges(RJSApi& handler, Qt::Edges v);
      static Qt::Edges js2cpp_Qt_Edges(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Edges(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_InputMethodHints(RJSApi& handler, Qt::InputMethodHints v);
      static Qt::InputMethodHints js2cpp_Qt_InputMethodHints(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_InputMethodHints(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ItemFlags(RJSApi& handler, Qt::ItemFlags v);
      static Qt::ItemFlags js2cpp_Qt_ItemFlags(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ItemFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_KeyboardModifiers(RJSApi& handler, Qt::KeyboardModifiers v);
      static Qt::KeyboardModifiers js2cpp_Qt_KeyboardModifiers(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_KeyboardModifiers(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Modifiers(RJSApi& handler, Qt::Modifiers v);
      static Qt::Modifiers js2cpp_Qt_Modifiers(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Modifiers(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_MouseButtons(RJSApi& handler, Qt::MouseButtons v);
      static Qt::MouseButtons js2cpp_Qt_MouseButtons(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_MouseButtons(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_MouseEventFlags(RJSApi& handler, Qt::MouseEventFlags v);
      static Qt::MouseEventFlags js2cpp_Qt_MouseEventFlags(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_MouseEventFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Orientations(RJSApi& handler, Qt::Orientations v);
      static Qt::Orientations js2cpp_Qt_Orientations(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Orientations(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_TextInteractionFlags(RJSApi& handler, Qt::TextInteractionFlags v);
      static Qt::TextInteractionFlags js2cpp_Qt_TextInteractionFlags(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_TextInteractionFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_WindowFlags(RJSApi& handler, Qt::WindowFlags v);
      static Qt::WindowFlags js2cpp_Qt_WindowFlags(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_WindowFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_WindowStates(RJSApi& handler, Qt::WindowStates v);
      static Qt::WindowStates js2cpp_Qt_WindowStates(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_WindowStates(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractFileIconProvider_IconType(RJSApi& handler, QAbstractFileIconProvider::IconType v);
      static QAbstractFileIconProvider::IconType js2cpp_QAbstractFileIconProvider_IconType(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractFileIconProvider_IconType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractFileIconProvider_Option(RJSApi& handler, QAbstractFileIconProvider::Option v);
      static QAbstractFileIconProvider::Option js2cpp_QAbstractFileIconProvider_Option(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractFileIconProvider_Option(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemDelegate_EndEditHint(RJSApi& handler, QAbstractItemDelegate::EndEditHint v);
      static QAbstractItemDelegate::EndEditHint js2cpp_QAbstractItemDelegate_EndEditHint(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemDelegate_EndEditHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView_DragDropMode(RJSApi& handler, QAbstractItemView::DragDropMode v);
      static QAbstractItemView::DragDropMode js2cpp_QAbstractItemView_DragDropMode(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_DragDropMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView_EditTrigger(RJSApi& handler, QAbstractItemView::EditTrigger v);
      static QAbstractItemView::EditTrigger js2cpp_QAbstractItemView_EditTrigger(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_EditTrigger(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView_ScrollHint(RJSApi& handler, QAbstractItemView::ScrollHint v);
      static QAbstractItemView::ScrollHint js2cpp_QAbstractItemView_ScrollHint(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_ScrollHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView_ScrollMode(RJSApi& handler, QAbstractItemView::ScrollMode v);
      static QAbstractItemView::ScrollMode js2cpp_QAbstractItemView_ScrollMode(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_ScrollMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView_SelectionBehavior(RJSApi& handler, QAbstractItemView::SelectionBehavior v);
      static QAbstractItemView::SelectionBehavior js2cpp_QAbstractItemView_SelectionBehavior(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_SelectionBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView_SelectionMode(RJSApi& handler, QAbstractItemView::SelectionMode v);
      static QAbstractItemView::SelectionMode js2cpp_QAbstractItemView_SelectionMode(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_SelectionMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractPrintDialog_PrintDialogOption(RJSApi& handler, QAbstractPrintDialog::PrintDialogOption v);
      static QAbstractPrintDialog::PrintDialogOption js2cpp_QAbstractPrintDialog_PrintDialogOption(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractPrintDialog_PrintDialogOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractPrintDialog_PrintRange(RJSApi& handler, QAbstractPrintDialog::PrintRange v);
      static QAbstractPrintDialog::PrintRange js2cpp_QAbstractPrintDialog_PrintRange(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractPrintDialog_PrintRange(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractScrollArea_SizeAdjustPolicy(RJSApi& handler, QAbstractScrollArea::SizeAdjustPolicy v);
      static QAbstractScrollArea::SizeAdjustPolicy js2cpp_QAbstractScrollArea_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractScrollArea_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractSlider_SliderAction(RJSApi& handler, QAbstractSlider::SliderAction v);
      static QAbstractSlider::SliderAction js2cpp_QAbstractSlider_SliderAction(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractSlider_SliderAction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractSpinBox_StepType(RJSApi& handler, QAbstractSpinBox::StepType v);
      static QAbstractSpinBox::StepType js2cpp_QAbstractSpinBox_StepType(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractSpinBox_StepType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAction_MenuRole(RJSApi& handler, QAction::MenuRole v);
      static QAction::MenuRole js2cpp_QAction_MenuRole(RJSApi& handler, const QJSValue& v);
      static bool is_QAction_MenuRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAction_Priority(RJSApi& handler, QAction::Priority v);
      static QAction::Priority js2cpp_QAction_Priority(RJSApi& handler, const QJSValue& v);
      static bool is_QAction_Priority(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QBoxLayout_Direction(RJSApi& handler, QBoxLayout::Direction v);
      static QBoxLayout::Direction js2cpp_QBoxLayout_Direction(RJSApi& handler, const QJSValue& v);
      static bool is_QBoxLayout_Direction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QChar(RJSApi& handler, const QString& v);
      static QChar js2cpp_QChar(RJSApi& handler, const QJSValue& v);
      static bool is_QChar(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QClipboard_Mode(RJSApi& handler, QClipboard::Mode v);
      static QClipboard::Mode js2cpp_QClipboard_Mode(RJSApi& handler, const QJSValue& v);
      static bool is_QClipboard_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QColor_NameFormat(RJSApi& handler, QColor::NameFormat v);
      static QColor::NameFormat js2cpp_QColor_NameFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QColor_NameFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QColor_Spec(RJSApi& handler, QColor::Spec v);
      static QColor::Spec js2cpp_QColor_Spec(RJSApi& handler, const QJSValue& v);
      static bool is_QColor_Spec(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QColorDialog_ColorDialogOption(RJSApi& handler, QColorDialog::ColorDialogOption v);
      static QColorDialog::ColorDialogOption js2cpp_QColorDialog_ColorDialogOption(RJSApi& handler, const QJSValue& v);
      static bool is_QColorDialog_ColorDialogOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QComboBox_InsertPolicy(RJSApi& handler, QComboBox::InsertPolicy v);
      static QComboBox::InsertPolicy js2cpp_QComboBox_InsertPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QComboBox_InsertPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QComboBox_SizeAdjustPolicy(RJSApi& handler, QComboBox::SizeAdjustPolicy v);
      static QComboBox::SizeAdjustPolicy js2cpp_QComboBox_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QComboBox_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QCompleter_CompletionMode(RJSApi& handler, QCompleter::CompletionMode v);
      static QCompleter::CompletionMode js2cpp_QCompleter_CompletionMode(RJSApi& handler, const QJSValue& v);
      static bool is_QCompleter_CompletionMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QCompleter_ModelSorting(RJSApi& handler, QCompleter::ModelSorting v);
      static QCompleter::ModelSorting js2cpp_QCompleter_ModelSorting(RJSApi& handler, const QJSValue& v);
      static bool is_QCompleter_ModelSorting(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QContextMenuEvent_Reason(RJSApi& handler, QContextMenuEvent::Reason v);
      static QContextMenuEvent::Reason js2cpp_QContextMenuEvent_Reason(RJSApi& handler, const QJSValue& v);
      static bool is_QContextMenuEvent_Reason(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDialogButtonBox_ButtonLayout(RJSApi& handler, QDialogButtonBox::ButtonLayout v);
      static QDialogButtonBox::ButtonLayout js2cpp_QDialogButtonBox_ButtonLayout(RJSApi& handler, const QJSValue& v);
      static bool is_QDialogButtonBox_ButtonLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDialogButtonBox_ButtonRole(RJSApi& handler, QDialogButtonBox::ButtonRole v);
      static QDialogButtonBox::ButtonRole js2cpp_QDialogButtonBox_ButtonRole(RJSApi& handler, const QJSValue& v);
      static bool is_QDialogButtonBox_ButtonRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDialogButtonBox_StandardButton(RJSApi& handler, QDialogButtonBox::StandardButton v);
      static QDialogButtonBox::StandardButton js2cpp_QDialogButtonBox_StandardButton(RJSApi& handler, const QJSValue& v);
      static bool is_QDialogButtonBox_StandardButton(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDirIterator_IteratorFlag(RJSApi& handler, QDirIterator::IteratorFlag v);
      static QDirIterator::IteratorFlag js2cpp_QDirIterator_IteratorFlag(RJSApi& handler, const QJSValue& v);
      static bool is_QDirIterator_IteratorFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDockWidget_DockWidgetFeature(RJSApi& handler, QDockWidget::DockWidgetFeature v);
      static QDockWidget::DockWidgetFeature js2cpp_QDockWidget_DockWidgetFeature(RJSApi& handler, const QJSValue& v);
      static bool is_QDockWidget_DockWidgetFeature(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomImplementation_InvalidDataPolicy(RJSApi& handler, QDomImplementation::InvalidDataPolicy v);
      static QDomImplementation::InvalidDataPolicy js2cpp_QDomImplementation_InvalidDataPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QDomImplementation_InvalidDataPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomNode_EncodingPolicy(RJSApi& handler, QDomNode::EncodingPolicy v);
      static QDomNode::EncodingPolicy js2cpp_QDomNode_EncodingPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QDomNode_EncodingPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomNode_NodeType(RJSApi& handler, QDomNode::NodeType v);
      static QDomNode::NodeType js2cpp_QDomNode_NodeType(RJSApi& handler, const QJSValue& v);
      static bool is_QDomNode_NodeType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDoubleValidator_Notation(RJSApi& handler, QDoubleValidator::Notation v);
      static QDoubleValidator::Notation js2cpp_QDoubleValidator_Notation(RJSApi& handler, const QJSValue& v);
      static bool is_QDoubleValidator_Notation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEasingCurve_Type(RJSApi& handler, QEasingCurve::Type v);
      static QEasingCurve::Type js2cpp_QEasingCurve_Type(RJSApi& handler, const QJSValue& v);
      static bool is_QEasingCurve_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEvent_Type(RJSApi& handler, QEvent::Type v);
      static QEvent::Type js2cpp_QEvent_Type(RJSApi& handler, const QJSValue& v);
      static bool is_QEvent_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEventLoop_ProcessEventsFlag(RJSApi& handler, QEventLoop::ProcessEventsFlag v);
      static QEventLoop::ProcessEventsFlag js2cpp_QEventLoop_ProcessEventsFlag(RJSApi& handler, const QJSValue& v);
      static bool is_QEventLoop_ProcessEventsFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEventPoint_State(RJSApi& handler, QEventPoint::State v);
      static QEventPoint::State js2cpp_QEventPoint_State(RJSApi& handler, const QJSValue& v);
      static bool is_QEventPoint_State(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFile_FileTime(RJSApi& handler, QFile::FileTime v);
      static QFile::FileTime js2cpp_QFile_FileTime(RJSApi& handler, const QJSValue& v);
      static bool is_QFile_FileTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDevice_FileError(RJSApi& handler, QFileDevice::FileError v);
      static QFileDevice::FileError js2cpp_QFileDevice_FileError(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDevice_FileError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDevice_FileTime(RJSApi& handler, QFileDevice::FileTime v);
      static QFileDevice::FileTime js2cpp_QFileDevice_FileTime(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDevice_FileTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDevice_MemoryMapFlags(RJSApi& handler, QFileDevice::MemoryMapFlags v);
      static QFileDevice::MemoryMapFlags js2cpp_QFileDevice_MemoryMapFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDevice_MemoryMapFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDialog_AcceptMode(RJSApi& handler, QFileDialog::AcceptMode v);
      static QFileDialog::AcceptMode js2cpp_QFileDialog_AcceptMode(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDialog_AcceptMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDialog_DialogLabel(RJSApi& handler, QFileDialog::DialogLabel v);
      static QFileDialog::DialogLabel js2cpp_QFileDialog_DialogLabel(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDialog_DialogLabel(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDialog_FileMode(RJSApi& handler, QFileDialog::FileMode v);
      static QFileDialog::FileMode js2cpp_QFileDialog_FileMode(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDialog_FileMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDialog_Option(RJSApi& handler, QFileDialog::Option v);
      static QFileDialog::Option js2cpp_QFileDialog_Option(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDialog_Option(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDialog_ViewMode(RJSApi& handler, QFileDialog::ViewMode v);
      static QFileDialog::ViewMode js2cpp_QFileDialog_ViewMode(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDialog_ViewMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileSystemModel_Option(RJSApi& handler, QFileSystemModel::Option v);
      static QFileSystemModel::Option js2cpp_QFileSystemModel_Option(RJSApi& handler, const QJSValue& v);
      static bool is_QFileSystemModel_Option(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_Capitalization(RJSApi& handler, QFont::Capitalization v);
      static QFont::Capitalization js2cpp_QFont_Capitalization(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_Capitalization(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_HintingPreference(RJSApi& handler, QFont::HintingPreference v);
      static QFont::HintingPreference js2cpp_QFont_HintingPreference(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_HintingPreference(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_ResolveProperties(RJSApi& handler, QFont::ResolveProperties v);
      static QFont::ResolveProperties js2cpp_QFont_ResolveProperties(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_ResolveProperties(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_SpacingType(RJSApi& handler, QFont::SpacingType v);
      static QFont::SpacingType js2cpp_QFont_SpacingType(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_SpacingType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_Stretch(RJSApi& handler, QFont::Stretch v);
      static QFont::Stretch js2cpp_QFont_Stretch(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_Stretch(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_Style(RJSApi& handler, QFont::Style v);
      static QFont::Style js2cpp_QFont_Style(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_Style(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_StyleHint(RJSApi& handler, QFont::StyleHint v);
      static QFont::StyleHint js2cpp_QFont_StyleHint(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_StyleHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_StyleStrategy(RJSApi& handler, QFont::StyleStrategy v);
      static QFont::StyleStrategy js2cpp_QFont_StyleStrategy(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_StyleStrategy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont_Weight(RJSApi& handler, QFont::Weight v);
      static QFont::Weight js2cpp_QFont_Weight(RJSApi& handler, const QJSValue& v);
      static bool is_QFont_Weight(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontComboBox_FontFilter(RJSApi& handler, QFontComboBox::FontFilter v);
      static QFontComboBox::FontFilter js2cpp_QFontComboBox_FontFilter(RJSApi& handler, const QJSValue& v);
      static bool is_QFontComboBox_FontFilter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontDatabase_SystemFont(RJSApi& handler, QFontDatabase::SystemFont v);
      static QFontDatabase::SystemFont js2cpp_QFontDatabase_SystemFont(RJSApi& handler, const QJSValue& v);
      static bool is_QFontDatabase_SystemFont(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontDatabase_WritingSystem(RJSApi& handler, QFontDatabase::WritingSystem v);
      static QFontDatabase::WritingSystem js2cpp_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v);
      static bool is_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFormLayout_FieldGrowthPolicy(RJSApi& handler, QFormLayout::FieldGrowthPolicy v);
      static QFormLayout::FieldGrowthPolicy js2cpp_QFormLayout_FieldGrowthPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QFormLayout_FieldGrowthPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFormLayout_ItemRole(RJSApi& handler, QFormLayout::ItemRole v);
      static QFormLayout::ItemRole js2cpp_QFormLayout_ItemRole(RJSApi& handler, const QJSValue& v);
      static bool is_QFormLayout_ItemRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFormLayout_RowWrapPolicy(RJSApi& handler, QFormLayout::RowWrapPolicy v);
      static QFormLayout::RowWrapPolicy js2cpp_QFormLayout_RowWrapPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QFormLayout_RowWrapPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFrame_Shadow(RJSApi& handler, QFrame::Shadow v);
      static QFrame::Shadow js2cpp_QFrame_Shadow(RJSApi& handler, const QJSValue& v);
      static bool is_QFrame_Shadow(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFrame_Shape(RJSApi& handler, QFrame::Shape v);
      static QFrame::Shape js2cpp_QFrame_Shape(RJSApi& handler, const QJSValue& v);
      static bool is_QFrame_Shape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGesture_GestureCancelPolicy(RJSApi& handler, QGesture::GestureCancelPolicy v);
      static QGesture::GestureCancelPolicy js2cpp_QGesture_GestureCancelPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QGesture_GestureCancelPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGradient_CoordinateMode(RJSApi& handler, QGradient::CoordinateMode v);
      static QGradient::CoordinateMode js2cpp_QGradient_CoordinateMode(RJSApi& handler, const QJSValue& v);
      static bool is_QGradient_CoordinateMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGradient_InterpolationMode(RJSApi& handler, QGradient::InterpolationMode v);
      static QGradient::InterpolationMode js2cpp_QGradient_InterpolationMode(RJSApi& handler, const QJSValue& v);
      static bool is_QGradient_InterpolationMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGradient_Preset(RJSApi& handler, QGradient::Preset v);
      static QGradient::Preset js2cpp_QGradient_Preset(RJSApi& handler, const QJSValue& v);
      static bool is_QGradient_Preset(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGradient_Spread(RJSApi& handler, QGradient::Spread v);
      static QGradient::Spread js2cpp_QGradient_Spread(RJSApi& handler, const QJSValue& v);
      static bool is_QGradient_Spread(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGradient_Type(RJSApi& handler, QGradient::Type v);
      static QGradient::Type js2cpp_QGradient_Type(RJSApi& handler, const QJSValue& v);
      static bool is_QGradient_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsBlurEffect_BlurHint(RJSApi& handler, QGraphicsBlurEffect::BlurHint v);
      static QGraphicsBlurEffect::BlurHint js2cpp_QGraphicsBlurEffect_BlurHint(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsBlurEffect_BlurHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsEffect_ChangeFlag(RJSApi& handler, QGraphicsEffect::ChangeFlag v);
      static QGraphicsEffect::ChangeFlag js2cpp_QGraphicsEffect_ChangeFlag(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsEffect_ChangeFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsEffect_PixmapPadMode(RJSApi& handler, QGraphicsEffect::PixmapPadMode v);
      static QGraphicsEffect::PixmapPadMode js2cpp_QGraphicsEffect_PixmapPadMode(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsEffect_PixmapPadMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QHeaderView_ResizeMode(RJSApi& handler, QHeaderView::ResizeMode v);
      static QHeaderView::ResizeMode js2cpp_QHeaderView_ResizeMode(RJSApi& handler, const QJSValue& v);
      static bool is_QHeaderView_ResizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QIODeviceBase_OpenMode(RJSApi& handler, QIODeviceBase::OpenMode v);
      static QIODeviceBase::OpenMode js2cpp_QIODeviceBase_OpenMode(RJSApi& handler, const QJSValue& v);
      static bool is_QIODeviceBase_OpenMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QIcon_Mode(RJSApi& handler, QIcon::Mode v);
      static QIcon::Mode js2cpp_QIcon_Mode(RJSApi& handler, const QJSValue& v);
      static bool is_QIcon_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QIcon_State(RJSApi& handler, QIcon::State v);
      static QIcon::State js2cpp_QIcon_State(RJSApi& handler, const QJSValue& v);
      static bool is_QIcon_State(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImage_Format(RJSApi& handler, QImage::Format v);
      static QImage::Format js2cpp_QImage_Format(RJSApi& handler, const QJSValue& v);
      static bool is_QImage_Format(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImage_InvertMode(RJSApi& handler, QImage::InvertMode v);
      static QImage::InvertMode js2cpp_QImage_InvertMode(RJSApi& handler, const QJSValue& v);
      static bool is_QImage_InvertMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImageIOHandler_ImageOption(RJSApi& handler, QImageIOHandler::ImageOption v);
      static QImageIOHandler::ImageOption js2cpp_QImageIOHandler_ImageOption(RJSApi& handler, const QJSValue& v);
      static bool is_QImageIOHandler_ImageOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImageIOHandler_Transformations(RJSApi& handler, QImageIOHandler::Transformations v);
      static QImageIOHandler::Transformations js2cpp_QImageIOHandler_Transformations(RJSApi& handler, const QJSValue& v);
      static bool is_QImageIOHandler_Transformations(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImageReader_ImageReaderError(RJSApi& handler, QImageReader::ImageReaderError v);
      static QImageReader::ImageReaderError js2cpp_QImageReader_ImageReaderError(RJSApi& handler, const QJSValue& v);
      static bool is_QImageReader_ImageReaderError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImageWriter_ImageWriterError(RJSApi& handler, QImageWriter::ImageWriterError v);
      static QImageWriter::ImageWriterError js2cpp_QImageWriter_ImageWriterError(RJSApi& handler, const QJSValue& v);
      static bool is_QImageWriter_ImageWriterError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QItemSelectionModel_SelectionFlag(RJSApi& handler, QItemSelectionModel::SelectionFlag v);
      static QItemSelectionModel::SelectionFlag js2cpp_QItemSelectionModel_SelectionFlag(RJSApi& handler, const QJSValue& v);
      static bool is_QItemSelectionModel_SelectionFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QKeySequence_SequenceFormat(RJSApi& handler, QKeySequence::SequenceFormat v);
      static QKeySequence::SequenceFormat js2cpp_QKeySequence_SequenceFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QKeySequence_SequenceFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QKeySequence_SequenceMatch(RJSApi& handler, QKeySequence::SequenceMatch v);
      static QKeySequence::SequenceMatch js2cpp_QKeySequence_SequenceMatch(RJSApi& handler, const QJSValue& v);
      static bool is_QKeySequence_SequenceMatch(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QKeySequence_StandardKey(RJSApi& handler, QKeySequence::StandardKey v);
      static QKeySequence::StandardKey js2cpp_QKeySequence_StandardKey(RJSApi& handler, const QJSValue& v);
      static bool is_QKeySequence_StandardKey(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLayout_SizeConstraint(RJSApi& handler, QLayout::SizeConstraint v);
      static QLayout::SizeConstraint js2cpp_QLayout_SizeConstraint(RJSApi& handler, const QJSValue& v);
      static bool is_QLayout_SizeConstraint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLineEdit_ActionPosition(RJSApi& handler, QLineEdit::ActionPosition v);
      static QLineEdit::ActionPosition js2cpp_QLineEdit_ActionPosition(RJSApi& handler, const QJSValue& v);
      static bool is_QLineEdit_ActionPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLineEdit_EchoMode(RJSApi& handler, QLineEdit::EchoMode v);
      static QLineEdit::EchoMode js2cpp_QLineEdit_EchoMode(RJSApi& handler, const QJSValue& v);
      static bool is_QLineEdit_EchoMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListView_Flow(RJSApi& handler, QListView::Flow v);
      static QListView::Flow js2cpp_QListView_Flow(RJSApi& handler, const QJSValue& v);
      static bool is_QListView_Flow(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListView_LayoutMode(RJSApi& handler, QListView::LayoutMode v);
      static QListView::LayoutMode js2cpp_QListView_LayoutMode(RJSApi& handler, const QJSValue& v);
      static bool is_QListView_LayoutMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListView_Movement(RJSApi& handler, QListView::Movement v);
      static QListView::Movement js2cpp_QListView_Movement(RJSApi& handler, const QJSValue& v);
      static bool is_QListView_Movement(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListView_ResizeMode(RJSApi& handler, QListView::ResizeMode v);
      static QListView::ResizeMode js2cpp_QListView_ResizeMode(RJSApi& handler, const QJSValue& v);
      static bool is_QListView_ResizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListView_ViewMode(RJSApi& handler, QListView::ViewMode v);
      static QListView::ViewMode js2cpp_QListView_ViewMode(RJSApi& handler, const QJSValue& v);
      static bool is_QListView_ViewMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_Country(RJSApi& handler, QLocale::Country v);
      static QLocale::Country js2cpp_QLocale_Country(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_Country(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_CurrencySymbolFormat(RJSApi& handler, QLocale::CurrencySymbolFormat v);
      static QLocale::CurrencySymbolFormat js2cpp_QLocale_CurrencySymbolFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_CurrencySymbolFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_FormatType(RJSApi& handler, QLocale::FormatType v);
      static QLocale::FormatType js2cpp_QLocale_FormatType(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_FormatType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_Language(RJSApi& handler, QLocale::Language v);
      static QLocale::Language js2cpp_QLocale_Language(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_Language(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_MeasurementSystem(RJSApi& handler, QLocale::MeasurementSystem v);
      static QLocale::MeasurementSystem js2cpp_QLocale_MeasurementSystem(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_MeasurementSystem(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_NumberOptions(RJSApi& handler, QLocale::NumberOptions v);
      static QLocale::NumberOptions js2cpp_QLocale_NumberOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_NumberOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_QuotationStyle(RJSApi& handler, QLocale::QuotationStyle v);
      static QLocale::QuotationStyle js2cpp_QLocale_QuotationStyle(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_QuotationStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_Script(RJSApi& handler, QLocale::Script v);
      static QLocale::Script js2cpp_QLocale_Script(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_Script(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale_Territory(RJSApi& handler, QLocale::Territory v);
      static QLocale::Territory js2cpp_QLocale_Territory(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale_Territory(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMainWindow_DockOptions(RJSApi& handler, QMainWindow::DockOptions v);
      static QMainWindow::DockOptions js2cpp_QMainWindow_DockOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QMainWindow_DockOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMdiArea_AreaOption(RJSApi& handler, QMdiArea::AreaOption v);
      static QMdiArea::AreaOption js2cpp_QMdiArea_AreaOption(RJSApi& handler, const QJSValue& v);
      static bool is_QMdiArea_AreaOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMdiArea_ViewMode(RJSApi& handler, QMdiArea::ViewMode v);
      static QMdiArea::ViewMode js2cpp_QMdiArea_ViewMode(RJSApi& handler, const QJSValue& v);
      static bool is_QMdiArea_ViewMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMdiArea_WindowOrder(RJSApi& handler, QMdiArea::WindowOrder v);
      static QMdiArea::WindowOrder js2cpp_QMdiArea_WindowOrder(RJSApi& handler, const QJSValue& v);
      static bool is_QMdiArea_WindowOrder(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMdiSubWindow_SubWindowOption(RJSApi& handler, QMdiSubWindow::SubWindowOption v);
      static QMdiSubWindow::SubWindowOption js2cpp_QMdiSubWindow_SubWindowOption(RJSApi& handler, const QJSValue& v);
      static bool is_QMdiSubWindow_SubWindowOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMessageBox_ButtonRole(RJSApi& handler, QMessageBox::ButtonRole v);
      static QMessageBox::ButtonRole js2cpp_QMessageBox_ButtonRole(RJSApi& handler, const QJSValue& v);
      static bool is_QMessageBox_ButtonRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMessageBox_Icon(RJSApi& handler, QMessageBox::Icon v);
      static QMessageBox::Icon js2cpp_QMessageBox_Icon(RJSApi& handler, const QJSValue& v);
      static bool is_QMessageBox_Icon(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMessageBox_StandardButton(RJSApi& handler, QMessageBox::StandardButton v);
      static QMessageBox::StandardButton js2cpp_QMessageBox_StandardButton(RJSApi& handler, const QJSValue& v);
      static bool is_QMessageBox_StandardButton(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMetaType_Type(RJSApi& handler, QMetaType::Type v);
      static QMetaType::Type js2cpp_QMetaType_Type(RJSApi& handler, const QJSValue& v);
      static bool is_QMetaType_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageLayout_Mode(RJSApi& handler, QPageLayout::Mode v);
      static QPageLayout::Mode js2cpp_QPageLayout_Mode(RJSApi& handler, const QJSValue& v);
      static bool is_QPageLayout_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageLayout_Orientation(RJSApi& handler, QPageLayout::Orientation v);
      static QPageLayout::Orientation js2cpp_QPageLayout_Orientation(RJSApi& handler, const QJSValue& v);
      static bool is_QPageLayout_Orientation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageLayout_Unit(RJSApi& handler, QPageLayout::Unit v);
      static QPageLayout::Unit js2cpp_QPageLayout_Unit(RJSApi& handler, const QJSValue& v);
      static bool is_QPageLayout_Unit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageSize_PageSizeId(RJSApi& handler, QPageSize::PageSizeId v);
      static QPageSize::PageSizeId js2cpp_QPageSize_PageSizeId(RJSApi& handler, const QJSValue& v);
      static bool is_QPageSize_PageSizeId(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageSize_SizeMatchPolicy(RJSApi& handler, QPageSize::SizeMatchPolicy v);
      static QPageSize::SizeMatchPolicy js2cpp_QPageSize_SizeMatchPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QPageSize_SizeMatchPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageSize_Unit(RJSApi& handler, QPageSize::Unit v);
      static QPageSize::Unit js2cpp_QPageSize_Unit(RJSApi& handler, const QJSValue& v);
      static bool is_QPageSize_Unit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPagedPaintDevice_PdfVersion(RJSApi& handler, QPagedPaintDevice::PdfVersion v);
      static QPagedPaintDevice::PdfVersion js2cpp_QPagedPaintDevice_PdfVersion(RJSApi& handler, const QJSValue& v);
      static bool is_QPagedPaintDevice_PdfVersion(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPainter_CompositionMode(RJSApi& handler, QPainter::CompositionMode v);
      static QPainter::CompositionMode js2cpp_QPainter_CompositionMode(RJSApi& handler, const QJSValue& v);
      static bool is_QPainter_CompositionMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPainter_PixmapFragmentHint(RJSApi& handler, QPainter::PixmapFragmentHint v);
      static QPainter::PixmapFragmentHint js2cpp_QPainter_PixmapFragmentHint(RJSApi& handler, const QJSValue& v);
      static bool is_QPainter_PixmapFragmentHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPainter_RenderHint(RJSApi& handler, QPainter::RenderHint v);
      static QPainter::RenderHint js2cpp_QPainter_RenderHint(RJSApi& handler, const QJSValue& v);
      static bool is_QPainter_RenderHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPainter_RenderHints(RJSApi& handler, QPainter::RenderHints v);
      static QPainter::RenderHints js2cpp_QPainter_RenderHints(RJSApi& handler, const QJSValue& v);
      static bool is_QPainter_RenderHints(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPainterPath_ElementType(RJSApi& handler, QPainterPath::ElementType v);
      static QPainterPath::ElementType js2cpp_QPainterPath_ElementType(RJSApi& handler, const QJSValue& v);
      static bool is_QPainterPath_ElementType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPalette_ColorGroup(RJSApi& handler, QPalette::ColorGroup v);
      static QPalette::ColorGroup js2cpp_QPalette_ColorGroup(RJSApi& handler, const QJSValue& v);
      static bool is_QPalette_ColorGroup(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPalette_ColorRole(RJSApi& handler, QPalette::ColorRole v);
      static QPalette::ColorRole js2cpp_QPalette_ColorRole(RJSApi& handler, const QJSValue& v);
      static bool is_QPalette_ColorRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPinchGesture_ChangeFlag(RJSApi& handler, QPinchGesture::ChangeFlag v);
      static QPinchGesture::ChangeFlag js2cpp_QPinchGesture_ChangeFlag(RJSApi& handler, const QJSValue& v);
      static bool is_QPinchGesture_ChangeFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPlainTextEdit_LineWrapMode(RJSApi& handler, QPlainTextEdit::LineWrapMode v);
      static QPlainTextEdit::LineWrapMode js2cpp_QPlainTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v);
      static bool is_QPlainTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_ColorMode(RJSApi& handler, QPrinter::ColorMode v);
      static QPrinter::ColorMode js2cpp_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_DuplexMode(RJSApi& handler, QPrinter::DuplexMode v);
      static QPrinter::DuplexMode js2cpp_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_OutputFormat(RJSApi& handler, QPrinter::OutputFormat v);
      static QPrinter::OutputFormat js2cpp_QPrinter_OutputFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_OutputFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_PageOrder(RJSApi& handler, QPrinter::PageOrder v);
      static QPrinter::PageOrder js2cpp_QPrinter_PageOrder(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_PageOrder(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_PaperSource(RJSApi& handler, QPrinter::PaperSource v);
      static QPrinter::PaperSource js2cpp_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_PrintRange(RJSApi& handler, QPrinter::PrintRange v);
      static QPrinter::PrintRange js2cpp_QPrinter_PrintRange(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_PrintRange(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_PrinterMode(RJSApi& handler, QPrinter::PrinterMode v);
      static QPrinter::PrinterMode js2cpp_QPrinter_PrinterMode(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_PrinterMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_PrinterState(RJSApi& handler, QPrinter::PrinterState v);
      static QPrinter::PrinterState js2cpp_QPrinter_PrinterState(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_PrinterState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter_Unit(RJSApi& handler, QPrinter::Unit v);
      static QPrinter::Unit js2cpp_QPrinter_Unit(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_Unit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcess_ExitStatus(RJSApi& handler, QProcess::ExitStatus v);
      static QProcess::ExitStatus js2cpp_QProcess_ExitStatus(RJSApi& handler, const QJSValue& v);
      static bool is_QProcess_ExitStatus(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcess_InputChannelMode(RJSApi& handler, QProcess::InputChannelMode v);
      static QProcess::InputChannelMode js2cpp_QProcess_InputChannelMode(RJSApi& handler, const QJSValue& v);
      static bool is_QProcess_InputChannelMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcess_ProcessChannel(RJSApi& handler, QProcess::ProcessChannel v);
      static QProcess::ProcessChannel js2cpp_QProcess_ProcessChannel(RJSApi& handler, const QJSValue& v);
      static bool is_QProcess_ProcessChannel(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcess_ProcessChannelMode(RJSApi& handler, QProcess::ProcessChannelMode v);
      static QProcess::ProcessChannelMode js2cpp_QProcess_ProcessChannelMode(RJSApi& handler, const QJSValue& v);
      static bool is_QProcess_ProcessChannelMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcess_ProcessError(RJSApi& handler, QProcess::ProcessError v);
      static QProcess::ProcessError js2cpp_QProcess_ProcessError(RJSApi& handler, const QJSValue& v);
      static bool is_QProcess_ProcessError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcess_ProcessState(RJSApi& handler, QProcess::ProcessState v);
      static QProcess::ProcessState js2cpp_QProcess_ProcessState(RJSApi& handler, const QJSValue& v);
      static bool is_QProcess_ProcessState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcessEnvironment_Initialization(RJSApi& handler, QProcessEnvironment::Initialization v);
      static QProcessEnvironment::Initialization js2cpp_QProcessEnvironment_Initialization(RJSApi& handler, const QJSValue& v);
      static bool is_QProcessEnvironment_Initialization(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProgressBar_Direction(RJSApi& handler, QProgressBar::Direction v);
      static QProgressBar::Direction js2cpp_QProgressBar_Direction(RJSApi& handler, const QJSValue& v);
      static bool is_QProgressBar_Direction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQuickView_ResizeMode(RJSApi& handler, QQuickView::ResizeMode v);
      static QQuickView::ResizeMode js2cpp_QQuickView_ResizeMode(RJSApi& handler, const QJSValue& v);
      static bool is_QQuickView_ResizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQuickView_Status(RJSApi& handler, QQuickView::Status v);
      static QQuickView::Status js2cpp_QQuickView_Status(RJSApi& handler, const QJSValue& v);
      static bool is_QQuickView_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQuickWidget_ResizeMode(RJSApi& handler, QQuickWidget::ResizeMode v);
      static QQuickWidget::ResizeMode js2cpp_QQuickWidget_ResizeMode(RJSApi& handler, const QJSValue& v);
      static bool is_QQuickWidget_ResizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQuickWidget_Status(RJSApi& handler, QQuickWidget::Status v);
      static QQuickWidget::Status js2cpp_QQuickWidget_Status(RJSApi& handler, const QJSValue& v);
      static bool is_QQuickWidget_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegion_RegionType(RJSApi& handler, QRegion::RegionType v);
      static QRegion::RegionType js2cpp_QRegion_RegionType(RJSApi& handler, const QJSValue& v);
      static bool is_QRegion_RegionType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegularExpression_MatchOptions(RJSApi& handler, QRegularExpression::MatchOptions v);
      static QRegularExpression::MatchOptions js2cpp_QRegularExpression_MatchOptions(RJSApi& handler, const QJSValue& v);
      static bool is_QRegularExpression_MatchOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegularExpression_MatchType(RJSApi& handler, QRegularExpression::MatchType v);
      static QRegularExpression::MatchType js2cpp_QRegularExpression_MatchType(RJSApi& handler, const QJSValue& v);
      static bool is_QRegularExpression_MatchType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSettings_Format(RJSApi& handler, QSettings::Format v);
      static QSettings::Format js2cpp_QSettings_Format(RJSApi& handler, const QJSValue& v);
      static bool is_QSettings_Format(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSettings_Scope(RJSApi& handler, QSettings::Scope v);
      static QSettings::Scope js2cpp_QSettings_Scope(RJSApi& handler, const QJSValue& v);
      static bool is_QSettings_Scope(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSettings_Status(RJSApi& handler, QSettings::Status v);
      static QSettings::Status js2cpp_QSettings_Status(RJSApi& handler, const QJSValue& v);
      static bool is_QSettings_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSizePolicy_ControlType(RJSApi& handler, QSizePolicy::ControlType v);
      static QSizePolicy::ControlType js2cpp_QSizePolicy_ControlType(RJSApi& handler, const QJSValue& v);
      static bool is_QSizePolicy_ControlType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSizePolicy_Policy(RJSApi& handler, QSizePolicy::Policy v);
      static QSizePolicy::Policy js2cpp_QSizePolicy_Policy(RJSApi& handler, const QJSValue& v);
      static bool is_QSizePolicy_Policy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSlider_TickPosition(RJSApi& handler, QSlider::TickPosition v);
      static QSlider::TickPosition js2cpp_QSlider_TickPosition(RJSApi& handler, const QJSValue& v);
      static bool is_QSlider_TickPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStackedLayout_StackingMode(RJSApi& handler, QStackedLayout::StackingMode v);
      static QStackedLayout::StackingMode js2cpp_QStackedLayout_StackingMode(RJSApi& handler, const QJSValue& v);
      static bool is_QStackedLayout_StackingMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QString(RJSApi& handler, const QString& v);
      static QString js2cpp_QString(RJSApi& handler, const QJSValue& v);
      static bool is_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStringConverter_Encoding(RJSApi& handler, QStringConverter::Encoding v);
      static QStringConverter::Encoding js2cpp_QStringConverter_Encoding(RJSApi& handler, const QJSValue& v);
      static bool is_QStringConverter_Encoding(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStringView(RJSApi& handler, QStringView v);
      static QStringView js2cpp_QStringView(RJSApi& handler, const QJSValue& v);
      static bool is_QStringView(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSurfaceFormat_FormatOption(RJSApi& handler, QSurfaceFormat::FormatOption v);
      static QSurfaceFormat::FormatOption js2cpp_QSurfaceFormat_FormatOption(RJSApi& handler, const QJSValue& v);
      static bool is_QSurfaceFormat_FormatOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSurfaceFormat_OpenGLContextProfile(RJSApi& handler, QSurfaceFormat::OpenGLContextProfile v);
      static QSurfaceFormat::OpenGLContextProfile js2cpp_QSurfaceFormat_OpenGLContextProfile(RJSApi& handler, const QJSValue& v);
      static bool is_QSurfaceFormat_OpenGLContextProfile(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSurfaceFormat_RenderableType(RJSApi& handler, QSurfaceFormat::RenderableType v);
      static QSurfaceFormat::RenderableType js2cpp_QSurfaceFormat_RenderableType(RJSApi& handler, const QJSValue& v);
      static bool is_QSurfaceFormat_RenderableType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSurfaceFormat_SwapBehavior(RJSApi& handler, QSurfaceFormat::SwapBehavior v);
      static QSurfaceFormat::SwapBehavior js2cpp_QSurfaceFormat_SwapBehavior(RJSApi& handler, const QJSValue& v);
      static bool is_QSurfaceFormat_SwapBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSwipeGesture_SwipeDirection(RJSApi& handler, QSwipeGesture::SwipeDirection v);
      static QSwipeGesture::SwipeDirection js2cpp_QSwipeGesture_SwipeDirection(RJSApi& handler, const QJSValue& v);
      static bool is_QSwipeGesture_SwipeDirection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTabBar_ButtonPosition(RJSApi& handler, QTabBar::ButtonPosition v);
      static QTabBar::ButtonPosition js2cpp_QTabBar_ButtonPosition(RJSApi& handler, const QJSValue& v);
      static bool is_QTabBar_ButtonPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTabBar_SelectionBehavior(RJSApi& handler, QTabBar::SelectionBehavior v);
      static QTabBar::SelectionBehavior js2cpp_QTabBar_SelectionBehavior(RJSApi& handler, const QJSValue& v);
      static bool is_QTabBar_SelectionBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTabBar_Shape(RJSApi& handler, QTabBar::Shape v);
      static QTabBar::Shape js2cpp_QTabBar_Shape(RJSApi& handler, const QJSValue& v);
      static bool is_QTabBar_Shape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTabWidget_TabPosition(RJSApi& handler, QTabWidget::TabPosition v);
      static QTabWidget::TabPosition js2cpp_QTabWidget_TabPosition(RJSApi& handler, const QJSValue& v);
      static bool is_QTabWidget_TabPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTabWidget_TabShape(RJSApi& handler, QTabWidget::TabShape v);
      static QTabWidget::TabShape js2cpp_QTabWidget_TabShape(RJSApi& handler, const QJSValue& v);
      static bool is_QTabWidget_TabShape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCharFormat_FontPropertiesInheritanceBehavior(RJSApi& handler, QTextCharFormat::FontPropertiesInheritanceBehavior v);
      static QTextCharFormat::FontPropertiesInheritanceBehavior js2cpp_QTextCharFormat_FontPropertiesInheritanceBehavior(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCharFormat_FontPropertiesInheritanceBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCharFormat_UnderlineStyle(RJSApi& handler, QTextCharFormat::UnderlineStyle v);
      static QTextCharFormat::UnderlineStyle js2cpp_QTextCharFormat_UnderlineStyle(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCharFormat_UnderlineStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCharFormat_VerticalAlignment(RJSApi& handler, QTextCharFormat::VerticalAlignment v);
      static QTextCharFormat::VerticalAlignment js2cpp_QTextCharFormat_VerticalAlignment(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCharFormat_VerticalAlignment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCursor_MoveMode(RJSApi& handler, QTextCursor::MoveMode v);
      static QTextCursor::MoveMode js2cpp_QTextCursor_MoveMode(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCursor_MoveMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCursor_MoveOperation(RJSApi& handler, QTextCursor::MoveOperation v);
      static QTextCursor::MoveOperation js2cpp_QTextCursor_MoveOperation(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCursor_MoveOperation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCursor_SelectionType(RJSApi& handler, QTextCursor::SelectionType v);
      static QTextCursor::SelectionType js2cpp_QTextCursor_SelectionType(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCursor_SelectionType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextDocument_FindFlag(RJSApi& handler, QTextDocument::FindFlag v);
      static QTextDocument::FindFlag js2cpp_QTextDocument_FindFlag(RJSApi& handler, const QJSValue& v);
      static bool is_QTextDocument_FindFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextDocument_MarkdownFeatures(RJSApi& handler, QTextDocument::MarkdownFeatures v);
      static QTextDocument::MarkdownFeatures js2cpp_QTextDocument_MarkdownFeatures(RJSApi& handler, const QJSValue& v);
      static bool is_QTextDocument_MarkdownFeatures(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextDocument_MetaInformation(RJSApi& handler, QTextDocument::MetaInformation v);
      static QTextDocument::MetaInformation js2cpp_QTextDocument_MetaInformation(RJSApi& handler, const QJSValue& v);
      static bool is_QTextDocument_MetaInformation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextDocument_ResourceType(RJSApi& handler, QTextDocument::ResourceType v);
      static QTextDocument::ResourceType js2cpp_QTextDocument_ResourceType(RJSApi& handler, const QJSValue& v);
      static bool is_QTextDocument_ResourceType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextDocument_Stacks(RJSApi& handler, QTextDocument::Stacks v);
      static QTextDocument::Stacks js2cpp_QTextDocument_Stacks(RJSApi& handler, const QJSValue& v);
      static bool is_QTextDocument_Stacks(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextEdit_AutoFormattingFlag(RJSApi& handler, QTextEdit::AutoFormattingFlag v);
      static QTextEdit::AutoFormattingFlag js2cpp_QTextEdit_AutoFormattingFlag(RJSApi& handler, const QJSValue& v);
      static bool is_QTextEdit_AutoFormattingFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextEdit_LineWrapMode(RJSApi& handler, QTextEdit::LineWrapMode v);
      static QTextEdit::LineWrapMode js2cpp_QTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v);
      static bool is_QTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextFrameFormat_BorderStyle(RJSApi& handler, QTextFrameFormat::BorderStyle v);
      static QTextFrameFormat::BorderStyle js2cpp_QTextFrameFormat_BorderStyle(RJSApi& handler, const QJSValue& v);
      static bool is_QTextFrameFormat_BorderStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextFrameFormat_Position(RJSApi& handler, QTextFrameFormat::Position v);
      static QTextFrameFormat::Position js2cpp_QTextFrameFormat_Position(RJSApi& handler, const QJSValue& v);
      static bool is_QTextFrameFormat_Position(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextLayout_CursorMode(RJSApi& handler, QTextLayout::CursorMode v);
      static QTextLayout::CursorMode js2cpp_QTextLayout_CursorMode(RJSApi& handler, const QJSValue& v);
      static bool is_QTextLayout_CursorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextLength_Type(RJSApi& handler, QTextLength::Type v);
      static QTextLength::Type js2cpp_QTextLength_Type(RJSApi& handler, const QJSValue& v);
      static bool is_QTextLength_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextListFormat_Style(RJSApi& handler, QTextListFormat::Style v);
      static QTextListFormat::Style js2cpp_QTextListFormat_Style(RJSApi& handler, const QJSValue& v);
      static bool is_QTextListFormat_Style(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextOption_WrapMode(RJSApi& handler, QTextOption::WrapMode v);
      static QTextOption::WrapMode js2cpp_QTextOption_WrapMode(RJSApi& handler, const QJSValue& v);
      static bool is_QTextOption_WrapMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextStream_FieldAlignment(RJSApi& handler, QTextStream::FieldAlignment v);
      static QTextStream::FieldAlignment js2cpp_QTextStream_FieldAlignment(RJSApi& handler, const QJSValue& v);
      static bool is_QTextStream_FieldAlignment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextStream_NumberFlags(RJSApi& handler, QTextStream::NumberFlags v);
      static QTextStream::NumberFlags js2cpp_QTextStream_NumberFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QTextStream_NumberFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextStream_RealNumberNotation(RJSApi& handler, QTextStream::RealNumberNotation v);
      static QTextStream::RealNumberNotation js2cpp_QTextStream_RealNumberNotation(RJSApi& handler, const QJSValue& v);
      static bool is_QTextStream_RealNumberNotation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextStream_Status(RJSApi& handler, QTextStream::Status v);
      static QTextStream::Status js2cpp_QTextStream_Status(RJSApi& handler, const QJSValue& v);
      static bool is_QTextStream_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QToolButton_ToolButtonPopupMode(RJSApi& handler, QToolButton::ToolButtonPopupMode v);
      static QToolButton::ToolButtonPopupMode js2cpp_QToolButton_ToolButtonPopupMode(RJSApi& handler, const QJSValue& v);
      static bool is_QToolButton_ToolButtonPopupMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTransform_TransformationType(RJSApi& handler, QTransform::TransformationType v);
      static QTransform::TransformationType js2cpp_QTransform_TransformationType(RJSApi& handler, const QJSValue& v);
      static bool is_QTransform_TransformationType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTreeWidgetItem_ChildIndicatorPolicy(RJSApi& handler, QTreeWidgetItem::ChildIndicatorPolicy v);
      static QTreeWidgetItem::ChildIndicatorPolicy js2cpp_QTreeWidgetItem_ChildIndicatorPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QTreeWidgetItem_ChildIndicatorPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl_ComponentFormattingOption(RJSApi& handler, QUrl::ComponentFormattingOption v);
      static QUrl::ComponentFormattingOption js2cpp_QUrl_ComponentFormattingOption(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl_ComponentFormattingOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl_ParsingMode(RJSApi& handler, QUrl::ParsingMode v);
      static QUrl::ParsingMode js2cpp_QUrl_ParsingMode(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl_ParsingMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl_UrlFormattingOption(RJSApi& handler, QUrl::UrlFormattingOption v);
      static QUrl::UrlFormattingOption js2cpp_QUrl_UrlFormattingOption(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl_UrlFormattingOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl_UserInputResolutionOption(RJSApi& handler, QUrl::UserInputResolutionOption v);
      static QUrl::UserInputResolutionOption js2cpp_QUrl_UserInputResolutionOption(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl_UserInputResolutionOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QValidator_State(RJSApi& handler, QValidator::State v);
      static QValidator::State js2cpp_QValidator_State(RJSApi& handler, const QJSValue& v);
      static bool is_QValidator_State(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWidget_RenderFlags(RJSApi& handler, QWidget::RenderFlags v);
      static QWidget::RenderFlags js2cpp_QWidget_RenderFlags(RJSApi& handler, const QJSValue& v);
      static bool is_QWidget_RenderFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWindow_AncestorMode(RJSApi& handler, QWindow::AncestorMode v);
      static QWindow::AncestorMode js2cpp_QWindow_AncestorMode(RJSApi& handler, const QJSValue& v);
      static bool is_QWindow_AncestorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWindow_Visibility(RJSApi& handler, QWindow::Visibility v);
      static QWindow::Visibility js2cpp_QWindow_Visibility(RJSApi& handler, const QJSValue& v);
      static bool is_QWindow_Visibility(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlStreamReader_Error(RJSApi& handler, QXmlStreamReader::Error v);
      static QXmlStreamReader::Error js2cpp_QXmlStreamReader_Error(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlStreamReader_Error(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlStreamReader_ReadElementTextBehaviour(RJSApi& handler, QXmlStreamReader::ReadElementTextBehaviour v);
      static QXmlStreamReader::ReadElementTextBehaviour js2cpp_QXmlStreamReader_ReadElementTextBehaviour(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlStreamReader_ReadElementTextBehaviour(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlStreamReader_TokenType(RJSApi& handler, QXmlStreamReader::TokenType v);
      static QXmlStreamReader::TokenType js2cpp_QXmlStreamReader_TokenType(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlStreamReader_TokenType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_AlignmentFlag(RJSApi& handler, Qt::AlignmentFlag v);
      static Qt::AlignmentFlag js2cpp_Qt_AlignmentFlag(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_AlignmentFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ApplicationAttribute(RJSApi& handler, Qt::ApplicationAttribute v);
      static Qt::ApplicationAttribute js2cpp_Qt_ApplicationAttribute(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ApplicationAttribute(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ApplicationState(RJSApi& handler, Qt::ApplicationState v);
      static Qt::ApplicationState js2cpp_Qt_ApplicationState(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ApplicationState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ArrowType(RJSApi& handler, Qt::ArrowType v);
      static Qt::ArrowType js2cpp_Qt_ArrowType(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ArrowType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_AspectRatioMode(RJSApi& handler, Qt::AspectRatioMode v);
      static Qt::AspectRatioMode js2cpp_Qt_AspectRatioMode(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_AspectRatioMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Axis(RJSApi& handler, Qt::Axis v);
      static Qt::Axis js2cpp_Qt_Axis(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Axis(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_BGMode(RJSApi& handler, Qt::BGMode v);
      static Qt::BGMode js2cpp_Qt_BGMode(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_BGMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_BrushStyle(RJSApi& handler, Qt::BrushStyle v);
      static Qt::BrushStyle js2cpp_Qt_BrushStyle(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_BrushStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_CaseSensitivity(RJSApi& handler, Qt::CaseSensitivity v);
      static Qt::CaseSensitivity js2cpp_Qt_CaseSensitivity(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_CaseSensitivity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_CheckState(RJSApi& handler, Qt::CheckState v);
      static Qt::CheckState js2cpp_Qt_CheckState(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_CheckState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ClipOperation(RJSApi& handler, Qt::ClipOperation v);
      static Qt::ClipOperation js2cpp_Qt_ClipOperation(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ClipOperation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ContextMenuPolicy(RJSApi& handler, Qt::ContextMenuPolicy v);
      static Qt::ContextMenuPolicy js2cpp_Qt_ContextMenuPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ContextMenuPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Corner(RJSApi& handler, Qt::Corner v);
      static Qt::Corner js2cpp_Qt_Corner(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Corner(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_CursorMoveStyle(RJSApi& handler, Qt::CursorMoveStyle v);
      static Qt::CursorMoveStyle js2cpp_Qt_CursorMoveStyle(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_CursorMoveStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_CursorShape(RJSApi& handler, Qt::CursorShape v);
      static Qt::CursorShape js2cpp_Qt_CursorShape(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_CursorShape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_DateFormat(RJSApi& handler, Qt::DateFormat v);
      static Qt::DateFormat js2cpp_Qt_DateFormat(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_DateFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_DayOfWeek(RJSApi& handler, Qt::DayOfWeek v);
      static Qt::DayOfWeek js2cpp_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_DockWidgetArea(RJSApi& handler, Qt::DockWidgetArea v);
      static Qt::DockWidgetArea js2cpp_Qt_DockWidgetArea(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_DockWidgetArea(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_DockWidgetAreas(RJSApi& handler, Qt::DockWidgetAreas v);
      static Qt::DockWidgetAreas js2cpp_Qt_DockWidgetAreas(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_DockWidgetAreas(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_DropAction(RJSApi& handler, Qt::DropAction v);
      static Qt::DropAction js2cpp_Qt_DropAction(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_DropAction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Edge(RJSApi& handler, Qt::Edge v);
      static Qt::Edge js2cpp_Qt_Edge(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Edge(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_FillRule(RJSApi& handler, Qt::FillRule v);
      static Qt::FillRule js2cpp_Qt_FillRule(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_FillRule(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_FindChildOptions(RJSApi& handler, Qt::FindChildOptions v);
      static Qt::FindChildOptions js2cpp_Qt_FindChildOptions(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_FindChildOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_FocusPolicy(RJSApi& handler, Qt::FocusPolicy v);
      static Qt::FocusPolicy js2cpp_Qt_FocusPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_FocusPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_FocusReason(RJSApi& handler, Qt::FocusReason v);
      static Qt::FocusReason js2cpp_Qt_FocusReason(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_FocusReason(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_GestureFlags(RJSApi& handler, Qt::GestureFlags v);
      static Qt::GestureFlags js2cpp_Qt_GestureFlags(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_GestureFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_GestureState(RJSApi& handler, Qt::GestureState v);
      static Qt::GestureState js2cpp_Qt_GestureState(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_GestureState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_GestureType(RJSApi& handler, Qt::GestureType v);
      static Qt::GestureType js2cpp_Qt_GestureType(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_GestureType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_GlobalColor(RJSApi& handler, Qt::GlobalColor v);
      static Qt::GlobalColor js2cpp_Qt_GlobalColor(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_GlobalColor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ImageConversionFlags(RJSApi& handler, Qt::ImageConversionFlags v);
      static Qt::ImageConversionFlags js2cpp_Qt_ImageConversionFlags(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ImageConversionFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_InputMethodQuery(RJSApi& handler, Qt::InputMethodQuery v);
      static Qt::InputMethodQuery js2cpp_Qt_InputMethodQuery(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_InputMethodQuery(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ItemFlag(RJSApi& handler, Qt::ItemFlag v);
      static Qt::ItemFlag js2cpp_Qt_ItemFlag(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ItemFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Key(RJSApi& handler, Qt::Key v);
      static Qt::Key js2cpp_Qt_Key(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Key(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_LayoutDirection(RJSApi& handler, Qt::LayoutDirection v);
      static Qt::LayoutDirection js2cpp_Qt_LayoutDirection(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_LayoutDirection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_MaskMode(RJSApi& handler, Qt::MaskMode v);
      static Qt::MaskMode js2cpp_Qt_MaskMode(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_MaskMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_MatchFlags(RJSApi& handler, Qt::MatchFlags v);
      static Qt::MatchFlags js2cpp_Qt_MatchFlags(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_MatchFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_MouseButton(RJSApi& handler, Qt::MouseButton v);
      static Qt::MouseButton js2cpp_Qt_MouseButton(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_MouseButton(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_MouseEventSource(RJSApi& handler, Qt::MouseEventSource v);
      static Qt::MouseEventSource js2cpp_Qt_MouseEventSource(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_MouseEventSource(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_NavigationMode(RJSApi& handler, Qt::NavigationMode v);
      static Qt::NavigationMode js2cpp_Qt_NavigationMode(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_NavigationMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_Orientation(RJSApi& handler, Qt::Orientation v);
      static Qt::Orientation js2cpp_Qt_Orientation(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_Orientation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_PenCapStyle(RJSApi& handler, Qt::PenCapStyle v);
      static Qt::PenCapStyle js2cpp_Qt_PenCapStyle(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_PenCapStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_PenJoinStyle(RJSApi& handler, Qt::PenJoinStyle v);
      static Qt::PenJoinStyle js2cpp_Qt_PenJoinStyle(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_PenJoinStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_PenStyle(RJSApi& handler, Qt::PenStyle v);
      static Qt::PenStyle js2cpp_Qt_PenStyle(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_PenStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ReturnByValueConstant(RJSApi& handler, Qt::ReturnByValueConstant v);
      static Qt::ReturnByValueConstant js2cpp_Qt_ReturnByValueConstant(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ReturnByValueConstant(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ScreenOrientation(RJSApi& handler, Qt::ScreenOrientation v);
      static Qt::ScreenOrientation js2cpp_Qt_ScreenOrientation(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ScreenOrientation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ScrollBarPolicy(RJSApi& handler, Qt::ScrollBarPolicy v);
      static Qt::ScrollBarPolicy js2cpp_Qt_ScrollBarPolicy(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ScrollBarPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ScrollPhase(RJSApi& handler, Qt::ScrollPhase v);
      static Qt::ScrollPhase js2cpp_Qt_ScrollPhase(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ScrollPhase(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ShortcutContext(RJSApi& handler, Qt::ShortcutContext v);
      static Qt::ShortcutContext js2cpp_Qt_ShortcutContext(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ShortcutContext(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_SizeMode(RJSApi& handler, Qt::SizeMode v);
      static Qt::SizeMode js2cpp_Qt_SizeMode(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_SizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_SortOrder(RJSApi& handler, Qt::SortOrder v);
      static Qt::SortOrder js2cpp_Qt_SortOrder(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_SortOrder(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_TextElideMode(RJSApi& handler, Qt::TextElideMode v);
      static Qt::TextElideMode js2cpp_Qt_TextElideMode(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_TextElideMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_TextFormat(RJSApi& handler, Qt::TextFormat v);
      static Qt::TextFormat js2cpp_Qt_TextFormat(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_TextFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_TextInteractionFlag(RJSApi& handler, Qt::TextInteractionFlag v);
      static Qt::TextInteractionFlag js2cpp_Qt_TextInteractionFlag(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_TextInteractionFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_TimeSpec(RJSApi& handler, Qt::TimeSpec v);
      static Qt::TimeSpec js2cpp_Qt_TimeSpec(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_TimeSpec(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_TimerType(RJSApi& handler, Qt::TimerType v);
      static Qt::TimerType js2cpp_Qt_TimerType(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_TimerType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ToolBarArea(RJSApi& handler, Qt::ToolBarArea v);
      static Qt::ToolBarArea js2cpp_Qt_ToolBarArea(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ToolBarArea(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ToolBarAreas(RJSApi& handler, Qt::ToolBarAreas v);
      static Qt::ToolBarAreas js2cpp_Qt_ToolBarAreas(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ToolBarAreas(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_ToolButtonStyle(RJSApi& handler, Qt::ToolButtonStyle v);
      static Qt::ToolButtonStyle js2cpp_Qt_ToolButtonStyle(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_ToolButtonStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_TransformationMode(RJSApi& handler, Qt::TransformationMode v);
      static Qt::TransformationMode js2cpp_Qt_TransformationMode(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_TransformationMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_WidgetAttribute(RJSApi& handler, Qt::WidgetAttribute v);
      static Qt::WidgetAttribute js2cpp_Qt_WidgetAttribute(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_WidgetAttribute(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_WindowModality(RJSApi& handler, Qt::WindowModality v);
      static Qt::WindowModality js2cpp_Qt_WindowModality(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_WindowModality(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_WindowState(RJSApi& handler, Qt::WindowState v);
      static Qt::WindowState js2cpp_Qt_WindowState(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_WindowState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_Qt_WindowType(RJSApi& handler, Qt::WindowType v);
      static Qt::WindowType js2cpp_Qt_WindowType(RJSApi& handler, const QJSValue& v);
      static bool is_Qt_WindowType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_WId(RJSApi& handler, WId v);
      static WId js2cpp_WId(RJSApi& handler, const QJSValue& v);
      static bool is_WId(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_char(RJSApi& handler, char v);
      static char js2cpp_char(RJSApi& handler, const QJSValue& v);
      static bool is_char(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_double(RJSApi& handler, double v);
      static double js2cpp_double(RJSApi& handler, const QJSValue& v);
      static bool is_double(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_float(RJSApi& handler, float v);
      static float js2cpp_float(RJSApi& handler, const QJSValue& v);
      static bool is_float(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_int(RJSApi& handler, int v);
      static int js2cpp_int(RJSApi& handler, const QJSValue& v);
      static bool is_int(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_long(RJSApi& handler, long v);
      static long js2cpp_long(RJSApi& handler, const QJSValue& v);
      static bool is_long(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_qint64(RJSApi& handler, qint64 v);
      static qint64 js2cpp_qint64(RJSApi& handler, const QJSValue& v);
      static bool is_qint64(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_qlonglong(RJSApi& handler, qlonglong v);
      static qlonglong js2cpp_qlonglong(RJSApi& handler, const QJSValue& v);
      static bool is_qlonglong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_qreal(RJSApi& handler, qreal v);
      static qreal js2cpp_qreal(RJSApi& handler, const QJSValue& v);
      static bool is_qreal(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_qsizetype(RJSApi& handler, qsizetype v);
      static qsizetype js2cpp_qsizetype(RJSApi& handler, const QJSValue& v);
      static bool is_qsizetype(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_quint16(RJSApi& handler, quint16 v);
      static quint16 js2cpp_quint16(RJSApi& handler, const QJSValue& v);
      static bool is_quint16(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_quint32(RJSApi& handler, quint32 v);
      static quint32 js2cpp_quint32(RJSApi& handler, const QJSValue& v);
      static bool is_quint32(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_quint64(RJSApi& handler, quint64 v);
      static quint64 js2cpp_quint64(RJSApi& handler, const QJSValue& v);
      static bool is_quint64(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_qulonglong(RJSApi& handler, qulonglong v);
      static qulonglong js2cpp_qulonglong(RJSApi& handler, const QJSValue& v);
      static bool is_qulonglong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_short(RJSApi& handler, short v);
      static short js2cpp_short(RJSApi& handler, const QJSValue& v);
      static bool is_short(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_uint(RJSApi& handler, uint v);
      static uint js2cpp_uint(RJSApi& handler, const QJSValue& v);
      static bool is_uint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_ulong(RJSApi& handler, ulong v);
      static ulong js2cpp_ulong(RJSApi& handler, const QJSValue& v);
      static bool is_ulong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_unsignedlong(RJSApi& handler, unsigned long v);
      static unsigned long js2cpp_unsignedlong(RJSApi& handler, const QJSValue& v);
      static bool is_unsignedlong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_ushort(RJSApi& handler, ushort v);
      static ushort js2cpp_ushort(RJSApi& handler, const QJSValue& v);
      static bool is_ushort(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------------------------------
  // QSharedPointer types (non-copyable):
  // ------------------------------------
  
      static QJSValue cpp2js_QSharedPointer_QTextLayout(RJSApi& handler, const QSharedPointer<QTextLayout>& v);
      static QSharedPointer<QTextLayout> js2cpp_QSharedPointer_QTextLayout(RJSApi& handler, const QJSValue& v);
      static bool is_QSharedPointer_QTextLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------
  // wrapped types:
  // --------------
  
      static QJSValue cpp2js_QBitmap(RJSApi& handler, const QBitmap* v);
      static QJSValue cpp2js_QBitmap(RJSApi& handler, const QBitmap& v);
      static QBitmap js2cpp_QBitmap(RJSApi& handler, const QJSValue& v);
      static bool is_QBitmap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QBrush(RJSApi& handler, const QBrush* v);
      static QJSValue cpp2js_QBrush(RJSApi& handler, const QBrush& v);
      static QBrush js2cpp_QBrush(RJSApi& handler, const QJSValue& v);
      static bool is_QBrush(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QByteArray(RJSApi& handler, const QByteArray* v);
      static QJSValue cpp2js_QByteArray(RJSApi& handler, const QByteArray& v);
      static QByteArray js2cpp_QByteArray(RJSApi& handler, const QJSValue& v);
      static bool is_QByteArray(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QColor(RJSApi& handler, const QColor* v);
      static QJSValue cpp2js_QColor(RJSApi& handler, const QColor& v);
      static QColor js2cpp_QColor(RJSApi& handler, const QJSValue& v);
      static bool is_QColor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QConicalGradient(RJSApi& handler, const QConicalGradient* v);
      static QJSValue cpp2js_QConicalGradient(RJSApi& handler, const QConicalGradient& v);
      static QConicalGradient js2cpp_QConicalGradient(RJSApi& handler, const QJSValue& v);
      static bool is_QConicalGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QCursor(RJSApi& handler, const QCursor* v);
      static QJSValue cpp2js_QCursor(RJSApi& handler, const QCursor& v);
      static QCursor js2cpp_QCursor(RJSApi& handler, const QJSValue& v);
      static bool is_QCursor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDate(RJSApi& handler, const QDate* v);
      static QJSValue cpp2js_QDate(RJSApi& handler, const QDate& v);
      static QDate js2cpp_QDate(RJSApi& handler, const QJSValue& v);
      static bool is_QDate(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDateTime(RJSApi& handler, const QDateTime* v);
      static QJSValue cpp2js_QDateTime(RJSApi& handler, const QDateTime& v);
      static QDateTime js2cpp_QDateTime(RJSApi& handler, const QJSValue& v);
      static bool is_QDateTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDesktopServices(RJSApi& handler, const QDesktopServices* v);
      static QJSValue cpp2js_QDesktopServices(RJSApi& handler, const QDesktopServices& v);
      static QDesktopServices js2cpp_QDesktopServices(RJSApi& handler, const QJSValue& v);
      static bool is_QDesktopServices(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDir(RJSApi& handler, const QDir* v);
      static QJSValue cpp2js_QDir(RJSApi& handler, const QDir& v);
      static QDir js2cpp_QDir(RJSApi& handler, const QJSValue& v);
      static bool is_QDir(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomAttr(RJSApi& handler, const QDomAttr* v);
      static QJSValue cpp2js_QDomAttr(RJSApi& handler, const QDomAttr& v);
      static QDomAttr js2cpp_QDomAttr(RJSApi& handler, const QJSValue& v);
      static bool is_QDomAttr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomCDATASection(RJSApi& handler, const QDomCDATASection* v);
      static QJSValue cpp2js_QDomCDATASection(RJSApi& handler, const QDomCDATASection& v);
      static QDomCDATASection js2cpp_QDomCDATASection(RJSApi& handler, const QJSValue& v);
      static bool is_QDomCDATASection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomCharacterData(RJSApi& handler, const QDomCharacterData* v);
      static QJSValue cpp2js_QDomCharacterData(RJSApi& handler, const QDomCharacterData& v);
      static QDomCharacterData js2cpp_QDomCharacterData(RJSApi& handler, const QJSValue& v);
      static bool is_QDomCharacterData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomComment(RJSApi& handler, const QDomComment* v);
      static QJSValue cpp2js_QDomComment(RJSApi& handler, const QDomComment& v);
      static QDomComment js2cpp_QDomComment(RJSApi& handler, const QJSValue& v);
      static bool is_QDomComment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomDocument(RJSApi& handler, const QDomDocument* v);
      static QJSValue cpp2js_QDomDocument(RJSApi& handler, const QDomDocument& v);
      static QDomDocument js2cpp_QDomDocument(RJSApi& handler, const QJSValue& v);
      static bool is_QDomDocument(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomDocumentFragment(RJSApi& handler, const QDomDocumentFragment* v);
      static QJSValue cpp2js_QDomDocumentFragment(RJSApi& handler, const QDomDocumentFragment& v);
      static QDomDocumentFragment js2cpp_QDomDocumentFragment(RJSApi& handler, const QJSValue& v);
      static bool is_QDomDocumentFragment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomDocumentType(RJSApi& handler, const QDomDocumentType* v);
      static QJSValue cpp2js_QDomDocumentType(RJSApi& handler, const QDomDocumentType& v);
      static QDomDocumentType js2cpp_QDomDocumentType(RJSApi& handler, const QJSValue& v);
      static bool is_QDomDocumentType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomElement(RJSApi& handler, const QDomElement* v);
      static QJSValue cpp2js_QDomElement(RJSApi& handler, const QDomElement& v);
      static QDomElement js2cpp_QDomElement(RJSApi& handler, const QJSValue& v);
      static bool is_QDomElement(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomEntity(RJSApi& handler, const QDomEntity* v);
      static QJSValue cpp2js_QDomEntity(RJSApi& handler, const QDomEntity& v);
      static QDomEntity js2cpp_QDomEntity(RJSApi& handler, const QJSValue& v);
      static bool is_QDomEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomEntityReference(RJSApi& handler, const QDomEntityReference* v);
      static QJSValue cpp2js_QDomEntityReference(RJSApi& handler, const QDomEntityReference& v);
      static QDomEntityReference js2cpp_QDomEntityReference(RJSApi& handler, const QJSValue& v);
      static bool is_QDomEntityReference(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomImplementation(RJSApi& handler, const QDomImplementation* v);
      static QJSValue cpp2js_QDomImplementation(RJSApi& handler, const QDomImplementation& v);
      static QDomImplementation js2cpp_QDomImplementation(RJSApi& handler, const QJSValue& v);
      static bool is_QDomImplementation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomNamedNodeMap(RJSApi& handler, const QDomNamedNodeMap* v);
      static QJSValue cpp2js_QDomNamedNodeMap(RJSApi& handler, const QDomNamedNodeMap& v);
      static QDomNamedNodeMap js2cpp_QDomNamedNodeMap(RJSApi& handler, const QJSValue& v);
      static bool is_QDomNamedNodeMap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomNode(RJSApi& handler, const QDomNode* v);
      static QJSValue cpp2js_QDomNode(RJSApi& handler, const QDomNode& v);
      static QDomNode js2cpp_QDomNode(RJSApi& handler, const QJSValue& v);
      static bool is_QDomNode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomNodeList(RJSApi& handler, const QDomNodeList* v);
      static QJSValue cpp2js_QDomNodeList(RJSApi& handler, const QDomNodeList& v);
      static QDomNodeList js2cpp_QDomNodeList(RJSApi& handler, const QJSValue& v);
      static bool is_QDomNodeList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomNotation(RJSApi& handler, const QDomNotation* v);
      static QJSValue cpp2js_QDomNotation(RJSApi& handler, const QDomNotation& v);
      static QDomNotation js2cpp_QDomNotation(RJSApi& handler, const QJSValue& v);
      static bool is_QDomNotation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomProcessingInstruction(RJSApi& handler, const QDomProcessingInstruction* v);
      static QJSValue cpp2js_QDomProcessingInstruction(RJSApi& handler, const QDomProcessingInstruction& v);
      static QDomProcessingInstruction js2cpp_QDomProcessingInstruction(RJSApi& handler, const QJSValue& v);
      static bool is_QDomProcessingInstruction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDomText(RJSApi& handler, const QDomText* v);
      static QJSValue cpp2js_QDomText(RJSApi& handler, const QDomText& v);
      static QDomText js2cpp_QDomText(RJSApi& handler, const QJSValue& v);
      static bool is_QDomText(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEasingCurve(RJSApi& handler, const QEasingCurve* v);
      static QJSValue cpp2js_QEasingCurve(RJSApi& handler, const QEasingCurve& v);
      static QEasingCurve js2cpp_QEasingCurve(RJSApi& handler, const QJSValue& v);
      static bool is_QEasingCurve(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEventPoint(RJSApi& handler, const QEventPoint* v);
      static QJSValue cpp2js_QEventPoint(RJSApi& handler, const QEventPoint& v);
      static QEventPoint js2cpp_QEventPoint(RJSApi& handler, const QJSValue& v);
      static bool is_QEventPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileInfo(RJSApi& handler, const QFileInfo* v);
      static QJSValue cpp2js_QFileInfo(RJSApi& handler, const QFileInfo& v);
      static QFileInfo js2cpp_QFileInfo(RJSApi& handler, const QJSValue& v);
      static bool is_QFileInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFont(RJSApi& handler, const QFont* v);
      static QJSValue cpp2js_QFont(RJSApi& handler, const QFont& v);
      static QFont js2cpp_QFont(RJSApi& handler, const QJSValue& v);
      static bool is_QFont(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontDatabase(RJSApi& handler, const QFontDatabase* v);
      static QJSValue cpp2js_QFontDatabase(RJSApi& handler, const QFontDatabase& v);
      static QFontDatabase js2cpp_QFontDatabase(RJSApi& handler, const QJSValue& v);
      static bool is_QFontDatabase(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGradient(RJSApi& handler, const QGradient* v);
      static QJSValue cpp2js_QGradient(RJSApi& handler, const QGradient& v);
      static QGradient js2cpp_QGradient(RJSApi& handler, const QJSValue& v);
      static bool is_QGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QIcon(RJSApi& handler, const QIcon* v);
      static QJSValue cpp2js_QIcon(RJSApi& handler, const QIcon& v);
      static QIcon js2cpp_QIcon(RJSApi& handler, const QJSValue& v);
      static bool is_QIcon(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImage(RJSApi& handler, const QImage* v);
      static QJSValue cpp2js_QImage(RJSApi& handler, const QImage& v);
      static QImage js2cpp_QImage(RJSApi& handler, const QJSValue& v);
      static bool is_QImage(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QItemSelection(RJSApi& handler, const QItemSelection* v);
      static QJSValue cpp2js_QItemSelection(RJSApi& handler, const QItemSelection& v);
      static QItemSelection js2cpp_QItemSelection(RJSApi& handler, const QJSValue& v);
      static bool is_QItemSelection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QKeyCombination(RJSApi& handler, const QKeyCombination* v);
      static QJSValue cpp2js_QKeyCombination(RJSApi& handler, const QKeyCombination& v);
      static QKeyCombination js2cpp_QKeyCombination(RJSApi& handler, const QJSValue& v);
      static bool is_QKeyCombination(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QKeySequence(RJSApi& handler, const QKeySequence* v);
      static QJSValue cpp2js_QKeySequence(RJSApi& handler, const QKeySequence& v);
      static QKeySequence js2cpp_QKeySequence(RJSApi& handler, const QJSValue& v);
      static bool is_QKeySequence(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLine(RJSApi& handler, const QLine* v);
      static QJSValue cpp2js_QLine(RJSApi& handler, const QLine& v);
      static QLine js2cpp_QLine(RJSApi& handler, const QJSValue& v);
      static bool is_QLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLineF(RJSApi& handler, const QLineF* v);
      static QJSValue cpp2js_QLineF(RJSApi& handler, const QLineF& v);
      static QLineF js2cpp_QLineF(RJSApi& handler, const QJSValue& v);
      static bool is_QLineF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLinearGradient(RJSApi& handler, const QLinearGradient* v);
      static QJSValue cpp2js_QLinearGradient(RJSApi& handler, const QLinearGradient& v);
      static QLinearGradient js2cpp_QLinearGradient(RJSApi& handler, const QJSValue& v);
      static bool is_QLinearGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLocale(RJSApi& handler, const QLocale* v);
      static QJSValue cpp2js_QLocale(RJSApi& handler, const QLocale& v);
      static QLocale js2cpp_QLocale(RJSApi& handler, const QJSValue& v);
      static bool is_QLocale(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMargins(RJSApi& handler, const QMargins* v);
      static QJSValue cpp2js_QMargins(RJSApi& handler, const QMargins& v);
      static QMargins js2cpp_QMargins(RJSApi& handler, const QJSValue& v);
      static bool is_QMargins(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMarginsF(RJSApi& handler, const QMarginsF* v);
      static QJSValue cpp2js_QMarginsF(RJSApi& handler, const QMarginsF& v);
      static QMarginsF js2cpp_QMarginsF(RJSApi& handler, const QJSValue& v);
      static bool is_QMarginsF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QModelIndex(RJSApi& handler, const QModelIndex* v);
      static QJSValue cpp2js_QModelIndex(RJSApi& handler, const QModelIndex& v);
      static QModelIndex js2cpp_QModelIndex(RJSApi& handler, const QJSValue& v);
      static bool is_QModelIndex(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageLayout(RJSApi& handler, const QPageLayout* v);
      static QJSValue cpp2js_QPageLayout(RJSApi& handler, const QPageLayout& v);
      static QPageLayout js2cpp_QPageLayout(RJSApi& handler, const QJSValue& v);
      static bool is_QPageLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageRanges(RJSApi& handler, const QPageRanges* v);
      static QJSValue cpp2js_QPageRanges(RJSApi& handler, const QPageRanges& v);
      static QPageRanges js2cpp_QPageRanges(RJSApi& handler, const QJSValue& v);
      static bool is_QPageRanges(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPageSize(RJSApi& handler, const QPageSize* v);
      static QJSValue cpp2js_QPageSize(RJSApi& handler, const QPageSize& v);
      static QPageSize js2cpp_QPageSize(RJSApi& handler, const QJSValue& v);
      static bool is_QPageSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPainterPath(RJSApi& handler, const QPainterPath* v);
      static QJSValue cpp2js_QPainterPath(RJSApi& handler, const QPainterPath& v);
      static QPainterPath js2cpp_QPainterPath(RJSApi& handler, const QJSValue& v);
      static bool is_QPainterPath(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPalette(RJSApi& handler, const QPalette* v);
      static QJSValue cpp2js_QPalette(RJSApi& handler, const QPalette& v);
      static QPalette js2cpp_QPalette(RJSApi& handler, const QJSValue& v);
      static bool is_QPalette(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPen(RJSApi& handler, const QPen* v);
      static QJSValue cpp2js_QPen(RJSApi& handler, const QPen& v);
      static QPen js2cpp_QPen(RJSApi& handler, const QJSValue& v);
      static bool is_QPen(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPicture(RJSApi& handler, const QPicture* v);
      static QJSValue cpp2js_QPicture(RJSApi& handler, const QPicture& v);
      static QPicture js2cpp_QPicture(RJSApi& handler, const QJSValue& v);
      static bool is_QPicture(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPixmap(RJSApi& handler, const QPixmap* v);
      static QJSValue cpp2js_QPixmap(RJSApi& handler, const QPixmap& v);
      static QPixmap js2cpp_QPixmap(RJSApi& handler, const QJSValue& v);
      static bool is_QPixmap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPoint(RJSApi& handler, const QPoint* v);
      static QJSValue cpp2js_QPoint(RJSApi& handler, const QPoint& v);
      static QPoint js2cpp_QPoint(RJSApi& handler, const QJSValue& v);
      static bool is_QPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPointF(RJSApi& handler, const QPointF* v);
      static QJSValue cpp2js_QPointF(RJSApi& handler, const QPointF& v);
      static QPointF js2cpp_QPointF(RJSApi& handler, const QJSValue& v);
      static bool is_QPointF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPolygon(RJSApi& handler, const QPolygon* v);
      static QJSValue cpp2js_QPolygon(RJSApi& handler, const QPolygon& v);
      static QPolygon js2cpp_QPolygon(RJSApi& handler, const QJSValue& v);
      static bool is_QPolygon(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPolygonF(RJSApi& handler, const QPolygonF* v);
      static QJSValue cpp2js_QPolygonF(RJSApi& handler, const QPolygonF& v);
      static QPolygonF js2cpp_QPolygonF(RJSApi& handler, const QJSValue& v);
      static bool is_QPolygonF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinterInfo(RJSApi& handler, const QPrinterInfo* v);
      static QJSValue cpp2js_QPrinterInfo(RJSApi& handler, const QPrinterInfo& v);
      static QPrinterInfo js2cpp_QPrinterInfo(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinterInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcessEnvironment(RJSApi& handler, const QProcessEnvironment* v);
      static QJSValue cpp2js_QProcessEnvironment(RJSApi& handler, const QProcessEnvironment& v);
      static QProcessEnvironment js2cpp_QProcessEnvironment(RJSApi& handler, const QJSValue& v);
      static bool is_QProcessEnvironment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRadialGradient(RJSApi& handler, const QRadialGradient* v);
      static QJSValue cpp2js_QRadialGradient(RJSApi& handler, const QRadialGradient& v);
      static QRadialGradient js2cpp_QRadialGradient(RJSApi& handler, const QJSValue& v);
      static bool is_QRadialGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRect(RJSApi& handler, const QRect* v);
      static QJSValue cpp2js_QRect(RJSApi& handler, const QRect& v);
      static QRect js2cpp_QRect(RJSApi& handler, const QJSValue& v);
      static bool is_QRect(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRectF(RJSApi& handler, const QRectF* v);
      static QJSValue cpp2js_QRectF(RJSApi& handler, const QRectF& v);
      static QRectF js2cpp_QRectF(RJSApi& handler, const QJSValue& v);
      static bool is_QRectF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegion(RJSApi& handler, const QRegion* v);
      static QJSValue cpp2js_QRegion(RJSApi& handler, const QRegion& v);
      static QRegion js2cpp_QRegion(RJSApi& handler, const QJSValue& v);
      static bool is_QRegion(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegularExpression(RJSApi& handler, const QRegularExpression* v);
      static QJSValue cpp2js_QRegularExpression(RJSApi& handler, const QRegularExpression& v);
      static QRegularExpression js2cpp_QRegularExpression(RJSApi& handler, const QJSValue& v);
      static bool is_QRegularExpression(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegularExpressionMatch(RJSApi& handler, const QRegularExpressionMatch* v);
      static QJSValue cpp2js_QRegularExpressionMatch(RJSApi& handler, const QRegularExpressionMatch& v);
      static QRegularExpressionMatch js2cpp_QRegularExpressionMatch(RJSApi& handler, const QJSValue& v);
      static bool is_QRegularExpressionMatch(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSize(RJSApi& handler, const QSize* v);
      static QJSValue cpp2js_QSize(RJSApi& handler, const QSize& v);
      static QSize js2cpp_QSize(RJSApi& handler, const QJSValue& v);
      static bool is_QSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSizeF(RJSApi& handler, const QSizeF* v);
      static QJSValue cpp2js_QSizeF(RJSApi& handler, const QSizeF& v);
      static QSizeF js2cpp_QSizeF(RJSApi& handler, const QJSValue& v);
      static bool is_QSizeF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSizePolicy(RJSApi& handler, const QSizePolicy* v);
      static QJSValue cpp2js_QSizePolicy(RJSApi& handler, const QSizePolicy& v);
      static QSizePolicy js2cpp_QSizePolicy(RJSApi& handler, const QJSValue& v);
      static bool is_QSizePolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSurfaceFormat(RJSApi& handler, const QSurfaceFormat* v);
      static QJSValue cpp2js_QSurfaceFormat(RJSApi& handler, const QSurfaceFormat& v);
      static QSurfaceFormat js2cpp_QSurfaceFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QSurfaceFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextBlockFormat(RJSApi& handler, const QTextBlockFormat* v);
      static QJSValue cpp2js_QTextBlockFormat(RJSApi& handler, const QTextBlockFormat& v);
      static QTextBlockFormat js2cpp_QTextBlockFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextBlockFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCharFormat(RJSApi& handler, const QTextCharFormat* v);
      static QJSValue cpp2js_QTextCharFormat(RJSApi& handler, const QTextCharFormat& v);
      static QTextCharFormat js2cpp_QTextCharFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCharFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCursor(RJSApi& handler, const QTextCursor* v);
      static QJSValue cpp2js_QTextCursor(RJSApi& handler, const QTextCursor& v);
      static QTextCursor js2cpp_QTextCursor(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCursor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextFormat(RJSApi& handler, const QTextFormat* v);
      static QJSValue cpp2js_QTextFormat(RJSApi& handler, const QTextFormat& v);
      static QTextFormat js2cpp_QTextFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextFrameFormat(RJSApi& handler, const QTextFrameFormat* v);
      static QJSValue cpp2js_QTextFrameFormat(RJSApi& handler, const QTextFrameFormat& v);
      static QTextFrameFormat js2cpp_QTextFrameFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextFrameFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextImageFormat(RJSApi& handler, const QTextImageFormat* v);
      static QJSValue cpp2js_QTextImageFormat(RJSApi& handler, const QTextImageFormat& v);
      static QTextImageFormat js2cpp_QTextImageFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextImageFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextLength(RJSApi& handler, const QTextLength* v);
      static QJSValue cpp2js_QTextLength(RJSApi& handler, const QTextLength& v);
      static QTextLength js2cpp_QTextLength(RJSApi& handler, const QJSValue& v);
      static bool is_QTextLength(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextListFormat(RJSApi& handler, const QTextListFormat* v);
      static QJSValue cpp2js_QTextListFormat(RJSApi& handler, const QTextListFormat& v);
      static QTextListFormat js2cpp_QTextListFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextListFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextTableCellFormat(RJSApi& handler, const QTextTableCellFormat* v);
      static QJSValue cpp2js_QTextTableCellFormat(RJSApi& handler, const QTextTableCellFormat& v);
      static QTextTableCellFormat js2cpp_QTextTableCellFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextTableCellFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextTableFormat(RJSApi& handler, const QTextTableFormat* v);
      static QJSValue cpp2js_QTextTableFormat(RJSApi& handler, const QTextTableFormat& v);
      static QTextTableFormat js2cpp_QTextTableFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QTextTableFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTime(RJSApi& handler, const QTime* v);
      static QJSValue cpp2js_QTime(RJSApi& handler, const QTime& v);
      static QTime js2cpp_QTime(RJSApi& handler, const QJSValue& v);
      static bool is_QTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTransform(RJSApi& handler, const QTransform* v);
      static QJSValue cpp2js_QTransform(RJSApi& handler, const QTransform& v);
      static QTransform js2cpp_QTransform(RJSApi& handler, const QJSValue& v);
      static bool is_QTransform(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrl(RJSApi& handler, const QUrl* v);
      static QJSValue cpp2js_QUrl(RJSApi& handler, const QUrl& v);
      static QUrl js2cpp_QUrl(RJSApi& handler, const QJSValue& v);
      static bool is_QUrl(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUrlQuery(RJSApi& handler, const QUrlQuery* v);
      static QJSValue cpp2js_QUrlQuery(RJSApi& handler, const QUrlQuery& v);
      static QUrlQuery js2cpp_QUrlQuery(RJSApi& handler, const QJSValue& v);
      static bool is_QUrlQuery(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlAttributes(RJSApi& handler, const QXmlAttributes* v);
      static QJSValue cpp2js_QXmlAttributes(RJSApi& handler, const QXmlAttributes& v);
      static QXmlAttributes js2cpp_QXmlAttributes(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlAttributes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlStreamAttributes(RJSApi& handler, const QXmlStreamAttributes* v);
      static QJSValue cpp2js_QXmlStreamAttributes(RJSApi& handler, const QXmlStreamAttributes& v);
      static QXmlStreamAttributes js2cpp_QXmlStreamAttributes(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlStreamAttributes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ----------------------
  // wrapped pointer types:
  // ----------------------
  
      static QJSValue cpp2js_QAbstractFileIconProvider(RJSApi& handler, QAbstractFileIconProvider* v);
      static QAbstractFileIconProvider* js2cpp_QAbstractFileIconProvider_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractFileIconProvider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractListModel(RJSApi& handler, QAbstractListModel* v);
      static QAbstractListModel* js2cpp_QAbstractListModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractListModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractTableModel(RJSApi& handler, QAbstractTableModel* v);
      static QAbstractTableModel* js2cpp_QAbstractTableModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractTableModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QActionEvent(RJSApi& handler, QActionEvent* v);
      static QActionEvent* js2cpp_QActionEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QActionEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QCompleter(RJSApi& handler, QCompleter* v);
      static QCompleter* js2cpp_QCompleter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QCompleter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QContextMenuEvent(RJSApi& handler, QContextMenuEvent* v);
      static QContextMenuEvent* js2cpp_QContextMenuEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QContextMenuEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDirIterator(RJSApi& handler, QDirIterator* v);
      static QDirIterator* js2cpp_QDirIterator_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDirIterator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDragEnterEvent(RJSApi& handler, QDragEnterEvent* v);
      static QDragEnterEvent* js2cpp_QDragEnterEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDragEnterEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDragLeaveEvent(RJSApi& handler, QDragLeaveEvent* v);
      static QDragLeaveEvent* js2cpp_QDragLeaveEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDragLeaveEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDragMoveEvent(RJSApi& handler, QDragMoveEvent* v);
      static QDragMoveEvent* js2cpp_QDragMoveEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDragMoveEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDropEvent(RJSApi& handler, QDropEvent* v);
      static QDropEvent* js2cpp_QDropEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDropEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEvent(RJSApi& handler, QEvent* v);
      static QEvent* js2cpp_QEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileIconProvider(RJSApi& handler, QFileIconProvider* v);
      static QFileIconProvider* js2cpp_QFileIconProvider_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFileIconProvider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFocusEvent(RJSApi& handler, QFocusEvent* v);
      static QFocusEvent* js2cpp_QFocusEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFocusEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontMetrics(RJSApi& handler, QFontMetrics* v);
      static QFontMetrics* js2cpp_QFontMetrics_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFontMetrics_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontMetricsF(RJSApi& handler, QFontMetricsF* v);
      static QFontMetricsF* js2cpp_QFontMetricsF_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFontMetricsF_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QHelpEvent(RJSApi& handler, QHelpEvent* v);
      static QHelpEvent* js2cpp_QHelpEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QHelpEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QIODeviceBase(RJSApi& handler, QIODeviceBase* v);
      static QIODeviceBase* js2cpp_QIODeviceBase_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QIODeviceBase_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImageReader(RJSApi& handler, QImageReader* v);
      static QImageReader* js2cpp_QImageReader_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QImageReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QImageWriter(RJSApi& handler, QImageWriter* v);
      static QImageWriter* js2cpp_QImageWriter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QImageWriter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QInputEvent(RJSApi& handler, QInputEvent* v);
      static QInputEvent* js2cpp_QInputEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QInputEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QJSEngine(RJSApi& handler, QJSEngine* v);
      static QJSEngine* js2cpp_QJSEngine_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QJSEngine_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QKeyEvent(RJSApi& handler, QKeyEvent* v);
      static QKeyEvent* js2cpp_QKeyEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QKeyEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLayoutItem(RJSApi& handler, QLayoutItem* v);
      static QLayoutItem* js2cpp_QLayoutItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QLayoutItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListWidgetItem(RJSApi& handler, QListWidgetItem* v);
      static QListWidgetItem* js2cpp_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMouseEvent(RJSApi& handler, QMouseEvent* v);
      static QMouseEvent* js2cpp_QMouseEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMouseEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPagedPaintDevice(RJSApi& handler, QPagedPaintDevice* v);
      static QPagedPaintDevice* js2cpp_QPagedPaintDevice_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPagedPaintDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPaintDevice(RJSApi& handler, QPaintDevice* v);
      static QPaintDevice* js2cpp_QPaintDevice_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPaintDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPaintEvent(RJSApi& handler, QPaintEvent* v);
      static QPaintEvent* js2cpp_QPaintEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPaintEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPainter(RJSApi& handler, QPainter* v);
      static QPainter* js2cpp_QPainter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPainter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPanGesture(RJSApi& handler, QPanGesture* v);
      static QPanGesture* js2cpp_QPanGesture_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPanGesture_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPinchGesture(RJSApi& handler, QPinchGesture* v);
      static QPinchGesture* js2cpp_QPinchGesture_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPinchGesture_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPointerEvent(RJSApi& handler, QPointerEvent* v);
      static QPointerEvent* js2cpp_QPointerEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPointerEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrinter(RJSApi& handler, QPrinter* v);
      static QPrinter* js2cpp_QPrinter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPrinter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProcess(RJSApi& handler, QProcess* v);
      static QProcess* js2cpp_QProcess_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QProcess_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQmlEngine(RJSApi& handler, QQmlEngine* v);
      static QQmlEngine* js2cpp_QQmlEngine_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QQmlEngine_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQmlContext(RJSApi& handler, QQmlContext* v);
      static QQmlContext* js2cpp_QQmlContext_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QQmlContext_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQmlApplicationEngine(RJSApi& handler, QQmlApplicationEngine* v);
      static QQmlApplicationEngine* js2cpp_QQmlApplicationEngine_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QQmlApplicationEngine_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QResizeEvent(RJSApi& handler, QResizeEvent* v);
      static QResizeEvent* js2cpp_QResizeEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QResizeEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSinglePointEvent(RJSApi& handler, QSinglePointEvent* v);
      static QSinglePointEvent* js2cpp_QSinglePointEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSinglePointEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSpacerItem(RJSApi& handler, QSpacerItem* v);
      static QSpacerItem* js2cpp_QSpacerItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSpacerItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStandardItem(RJSApi& handler, QStandardItem* v);
      static QStandardItem* js2cpp_QStandardItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStandardItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStringConverter(RJSApi& handler, QStringConverter* v);
      static QStringConverter* js2cpp_QStringConverter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStringConverter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStringDecoder(RJSApi& handler, QStringDecoder* v);
      static QStringDecoder* js2cpp_QStringDecoder_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStringDecoder_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStringEncoder(RJSApi& handler, QStringEncoder* v);
      static QStringEncoder* js2cpp_QStringEncoder_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStringEncoder_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSwipeGesture(RJSApi& handler, QSwipeGesture* v);
      static QSwipeGesture* js2cpp_QSwipeGesture_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSwipeGesture_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTableWidgetItem(RJSApi& handler, QTableWidgetItem* v);
      static QTableWidgetItem* js2cpp_QTableWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTableWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextCursor(RJSApi& handler, QTextCursor* v);
      static QTextCursor* js2cpp_QTextCursor_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTextCursor_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextLayout(RJSApi& handler, QTextLayout* v);
      static QTextLayout* js2cpp_QTextLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTextLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextStream(RJSApi& handler, QTextStream* v);
      static QTextStream* js2cpp_QTextStream_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTextStream_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QToolTip(RJSApi& handler, QToolTip* v);
      static QToolTip* js2cpp_QToolTip_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QToolTip_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTreeWidgetItem(RJSApi& handler, QTreeWidgetItem* v);
      static QTreeWidgetItem* js2cpp_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QUiLoader(RJSApi& handler, QUiLoader* v);
      static QUiLoader* js2cpp_QUiLoader_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QUiLoader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWheelEvent(RJSApi& handler, QWheelEvent* v);
      static QWheelEvent* js2cpp_QWheelEvent_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QWheelEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWidgetItem(RJSApi& handler, QWidgetItem* v);
      static QWidgetItem* js2cpp_QWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlContentHandler(RJSApi& handler, QXmlContentHandler* v);
      static QXmlContentHandler* js2cpp_QXmlContentHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlContentHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlDTDHandler(RJSApi& handler, QXmlDTDHandler* v);
      static QXmlDTDHandler* js2cpp_QXmlDTDHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlDTDHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlDeclHandler(RJSApi& handler, QXmlDeclHandler* v);
      static QXmlDeclHandler* js2cpp_QXmlDeclHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlDeclHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlDefaultHandler(RJSApi& handler, QXmlDefaultHandler* v);
      static QXmlDefaultHandler* js2cpp_QXmlDefaultHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlDefaultHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlEntityResolver(RJSApi& handler, QXmlEntityResolver* v);
      static QXmlEntityResolver* js2cpp_QXmlEntityResolver_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlEntityResolver_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlErrorHandler(RJSApi& handler, QXmlErrorHandler* v);
      static QXmlErrorHandler* js2cpp_QXmlErrorHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlErrorHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlInputSource(RJSApi& handler, QXmlInputSource* v);
      static QXmlInputSource* js2cpp_QXmlInputSource_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlInputSource_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlLexicalHandler(RJSApi& handler, QXmlLexicalHandler* v);
      static QXmlLexicalHandler* js2cpp_QXmlLexicalHandler_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlLexicalHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlLocator(RJSApi& handler, QXmlLocator* v);
      static QXmlLocator* js2cpp_QXmlLocator_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlLocator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlParseException(RJSApi& handler, QXmlParseException* v);
      static QXmlParseException* js2cpp_QXmlParseException_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlParseException_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlReader(RJSApi& handler, QXmlReader* v);
      static QXmlReader* js2cpp_QXmlReader_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlSimpleReader(RJSApi& handler, QXmlSimpleReader* v);
      static QXmlSimpleReader* js2cpp_QXmlSimpleReader_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlSimpleReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlStreamAttribute(RJSApi& handler, QXmlStreamAttribute* v);
      static QXmlStreamAttribute* js2cpp_QXmlStreamAttribute_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlStreamAttribute_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlStreamReader(RJSApi& handler, QXmlStreamReader* v);
      static QXmlStreamReader* js2cpp_QXmlStreamReader_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlStreamReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QXmlStreamWriter(RJSApi& handler, QXmlStreamWriter* v);
      static QXmlStreamWriter* js2cpp_QXmlStreamWriter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QXmlStreamWriter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------------------------
  // wrapped QObject pointer types:
  // ------------------------------
  
      static QJSValue cpp2js_QAbstractButton(RJSApi& handler, QAbstractButton* v);
      static QJSValue cpp2js_QAbstractButton(RJSApi& handler, const QAbstractButton* v);
      static QAbstractButton* js2cpp_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemDelegate(RJSApi& handler, QAbstractItemDelegate* v);
      static QJSValue cpp2js_QAbstractItemDelegate(RJSApi& handler, const QAbstractItemDelegate* v);
      static QAbstractItemDelegate* js2cpp_QAbstractItemDelegate_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemDelegate_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemModel(RJSApi& handler, QAbstractItemModel* v);
      static QJSValue cpp2js_QAbstractItemModel(RJSApi& handler, const QAbstractItemModel* v);
      static QAbstractItemModel* js2cpp_QAbstractItemModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractItemView(RJSApi& handler, QAbstractItemView* v);
      static QJSValue cpp2js_QAbstractItemView(RJSApi& handler, const QAbstractItemView* v);
      static QAbstractItemView* js2cpp_QAbstractItemView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractItemView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractPrintDialog(RJSApi& handler, QAbstractPrintDialog* v);
      static QJSValue cpp2js_QAbstractPrintDialog(RJSApi& handler, const QAbstractPrintDialog* v);
      static QAbstractPrintDialog* js2cpp_QAbstractPrintDialog_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractPrintDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractScrollArea(RJSApi& handler, QAbstractScrollArea* v);
      static QJSValue cpp2js_QAbstractScrollArea(RJSApi& handler, const QAbstractScrollArea* v);
      static QAbstractScrollArea* js2cpp_QAbstractScrollArea_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractScrollArea_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractSlider(RJSApi& handler, QAbstractSlider* v);
      static QJSValue cpp2js_QAbstractSlider(RJSApi& handler, const QAbstractSlider* v);
      static QAbstractSlider* js2cpp_QAbstractSlider_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractSlider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAbstractSpinBox(RJSApi& handler, QAbstractSpinBox* v);
      static QJSValue cpp2js_QAbstractSpinBox(RJSApi& handler, const QAbstractSpinBox* v);
      static QAbstractSpinBox* js2cpp_QAbstractSpinBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAbstractSpinBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QAction(RJSApi& handler, QAction* v);
      static QJSValue cpp2js_QAction(RJSApi& handler, const QAction* v);
      static QAction* js2cpp_QAction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QActionGroup(RJSApi& handler, QActionGroup* v);
      static QJSValue cpp2js_QActionGroup(RJSApi& handler, const QActionGroup* v);
      static QActionGroup* js2cpp_QActionGroup_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QActionGroup_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QApplication(RJSApi& handler, QApplication* v);
      static QJSValue cpp2js_QApplication(RJSApi& handler, const QApplication* v);
      static QApplication* js2cpp_QApplication_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QApplication_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QBoxLayout(RJSApi& handler, QBoxLayout* v);
      static QJSValue cpp2js_QBoxLayout(RJSApi& handler, const QBoxLayout* v);
      static QBoxLayout* js2cpp_QBoxLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QBoxLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QBuffer(RJSApi& handler, QBuffer* v);
      static QJSValue cpp2js_QBuffer(RJSApi& handler, const QBuffer* v);
      static QBuffer* js2cpp_QBuffer_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QBuffer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QButtonGroup(RJSApi& handler, QButtonGroup* v);
      static QJSValue cpp2js_QButtonGroup(RJSApi& handler, const QButtonGroup* v);
      static QButtonGroup* js2cpp_QButtonGroup_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QButtonGroup_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QCheckBox(RJSApi& handler, QCheckBox* v);
      static QJSValue cpp2js_QCheckBox(RJSApi& handler, const QCheckBox* v);
      static QCheckBox* js2cpp_QCheckBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QCheckBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QClipboard(RJSApi& handler, QClipboard* v);
      static QJSValue cpp2js_QClipboard(RJSApi& handler, const QClipboard* v);
      static QClipboard* js2cpp_QClipboard_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QClipboard_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QColorDialog(RJSApi& handler, QColorDialog* v);
      static QJSValue cpp2js_QColorDialog(RJSApi& handler, const QColorDialog* v);
      static QColorDialog* js2cpp_QColorDialog_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QColorDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QComboBox(RJSApi& handler, QComboBox* v);
      static QJSValue cpp2js_QComboBox(RJSApi& handler, const QComboBox* v);
      static QComboBox* js2cpp_QComboBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QComboBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QCoreApplication(RJSApi& handler, QCoreApplication* v);
      static QJSValue cpp2js_QCoreApplication(RJSApi& handler, const QCoreApplication* v);
      static QCoreApplication* js2cpp_QCoreApplication_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QCoreApplication_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDialog(RJSApi& handler, QDialog* v);
      static QJSValue cpp2js_QDialog(RJSApi& handler, const QDialog* v);
      static QDialog* js2cpp_QDialog_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDialogButtonBox(RJSApi& handler, QDialogButtonBox* v);
      static QJSValue cpp2js_QDialogButtonBox(RJSApi& handler, const QDialogButtonBox* v);
      static QDialogButtonBox* js2cpp_QDialogButtonBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDialogButtonBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDockWidget(RJSApi& handler, QDockWidget* v);
      static QJSValue cpp2js_QDockWidget(RJSApi& handler, const QDockWidget* v);
      static QDockWidget* js2cpp_QDockWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDockWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDoubleSpinBox(RJSApi& handler, QDoubleSpinBox* v);
      static QJSValue cpp2js_QDoubleSpinBox(RJSApi& handler, const QDoubleSpinBox* v);
      static QDoubleSpinBox* js2cpp_QDoubleSpinBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDoubleSpinBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDoubleValidator(RJSApi& handler, QDoubleValidator* v);
      static QJSValue cpp2js_QDoubleValidator(RJSApi& handler, const QDoubleValidator* v);
      static QDoubleValidator* js2cpp_QDoubleValidator_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDoubleValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QDrag(RJSApi& handler, QDrag* v);
      static QJSValue cpp2js_QDrag(RJSApi& handler, const QDrag* v);
      static QDrag* js2cpp_QDrag_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QDrag_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QEventLoop(RJSApi& handler, QEventLoop* v);
      static QJSValue cpp2js_QEventLoop(RJSApi& handler, const QEventLoop* v);
      static QEventLoop* js2cpp_QEventLoop_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QEventLoop_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFile(RJSApi& handler, QFile* v);
      static QJSValue cpp2js_QFile(RJSApi& handler, const QFile* v);
      static QFile* js2cpp_QFile_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFile_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDevice(RJSApi& handler, QFileDevice* v);
      static QJSValue cpp2js_QFileDevice(RJSApi& handler, const QFileDevice* v);
      static QFileDevice* js2cpp_QFileDevice_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileDialog(RJSApi& handler, QFileDialog* v);
      static QJSValue cpp2js_QFileDialog(RJSApi& handler, const QFileDialog* v);
      static QFileDialog* js2cpp_QFileDialog_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFileDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileSystemModel(RJSApi& handler, QFileSystemModel* v);
      static QJSValue cpp2js_QFileSystemModel(RJSApi& handler, const QFileSystemModel* v);
      static QFileSystemModel* js2cpp_QFileSystemModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFileSystemModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFileSystemWatcher(RJSApi& handler, QFileSystemWatcher* v);
      static QJSValue cpp2js_QFileSystemWatcher(RJSApi& handler, const QFileSystemWatcher* v);
      static QFileSystemWatcher* js2cpp_QFileSystemWatcher_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFileSystemWatcher_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFontComboBox(RJSApi& handler, QFontComboBox* v);
      static QJSValue cpp2js_QFontComboBox(RJSApi& handler, const QFontComboBox* v);
      static QFontComboBox* js2cpp_QFontComboBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFontComboBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFormLayout(RJSApi& handler, QFormLayout* v);
      static QJSValue cpp2js_QFormLayout(RJSApi& handler, const QFormLayout* v);
      static QFormLayout* js2cpp_QFormLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFormLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QFrame(RJSApi& handler, QFrame* v);
      static QJSValue cpp2js_QFrame(RJSApi& handler, const QFrame* v);
      static QFrame* js2cpp_QFrame_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QFrame_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsBlurEffect(RJSApi& handler, QGraphicsBlurEffect* v);
      static QJSValue cpp2js_QGraphicsBlurEffect(RJSApi& handler, const QGraphicsBlurEffect* v);
      static QGraphicsBlurEffect* js2cpp_QGraphicsBlurEffect_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsBlurEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsColorizeEffect(RJSApi& handler, QGraphicsColorizeEffect* v);
      static QJSValue cpp2js_QGraphicsColorizeEffect(RJSApi& handler, const QGraphicsColorizeEffect* v);
      static QGraphicsColorizeEffect* js2cpp_QGraphicsColorizeEffect_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsColorizeEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsDropShadowEffect(RJSApi& handler, QGraphicsDropShadowEffect* v);
      static QJSValue cpp2js_QGraphicsDropShadowEffect(RJSApi& handler, const QGraphicsDropShadowEffect* v);
      static QGraphicsDropShadowEffect* js2cpp_QGraphicsDropShadowEffect_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsDropShadowEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsEffect(RJSApi& handler, QGraphicsEffect* v);
      static QJSValue cpp2js_QGraphicsEffect(RJSApi& handler, const QGraphicsEffect* v);
      static QGraphicsEffect* js2cpp_QGraphicsEffect_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGraphicsOpacityEffect(RJSApi& handler, QGraphicsOpacityEffect* v);
      static QJSValue cpp2js_QGraphicsOpacityEffect(RJSApi& handler, const QGraphicsOpacityEffect* v);
      static QGraphicsOpacityEffect* js2cpp_QGraphicsOpacityEffect_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsOpacityEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGridLayout(RJSApi& handler, QGridLayout* v);
      static QJSValue cpp2js_QGridLayout(RJSApi& handler, const QGridLayout* v);
      static QGridLayout* js2cpp_QGridLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGridLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGroupBox(RJSApi& handler, QGroupBox* v);
      static QJSValue cpp2js_QGroupBox(RJSApi& handler, const QGroupBox* v);
      static QGroupBox* js2cpp_QGroupBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGroupBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QGuiApplication(RJSApi& handler, QGuiApplication* v);
      static QJSValue cpp2js_QGuiApplication(RJSApi& handler, const QGuiApplication* v);
      static QGuiApplication* js2cpp_QGuiApplication_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QGuiApplication_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QHBoxLayout(RJSApi& handler, QHBoxLayout* v);
      static QJSValue cpp2js_QHBoxLayout(RJSApi& handler, const QHBoxLayout* v);
      static QHBoxLayout* js2cpp_QHBoxLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QHBoxLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QHeaderView(RJSApi& handler, QHeaderView* v);
      static QJSValue cpp2js_QHeaderView(RJSApi& handler, const QHeaderView* v);
      static QHeaderView* js2cpp_QHeaderView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QHeaderView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QIODevice(RJSApi& handler, QIODevice* v);
      static QJSValue cpp2js_QIODevice(RJSApi& handler, const QIODevice* v);
      static QIODevice* js2cpp_QIODevice_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QIODevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QInputDevice(RJSApi& handler, QInputDevice* v);
      static QJSValue cpp2js_QInputDevice(RJSApi& handler, const QInputDevice* v);
      static QInputDevice* js2cpp_QInputDevice_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QInputDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QIntValidator(RJSApi& handler, QIntValidator* v);
      static QJSValue cpp2js_QIntValidator(RJSApi& handler, const QIntValidator* v);
      static QIntValidator* js2cpp_QIntValidator_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QIntValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QItemDelegate(RJSApi& handler, QItemDelegate* v);
      static QJSValue cpp2js_QItemDelegate(RJSApi& handler, const QItemDelegate* v);
      static QItemDelegate* js2cpp_QItemDelegate_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QItemDelegate_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QItemSelectionModel(RJSApi& handler, QItemSelectionModel* v);
      static QJSValue cpp2js_QItemSelectionModel(RJSApi& handler, const QItemSelectionModel* v);
      static QItemSelectionModel* js2cpp_QItemSelectionModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QItemSelectionModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLabel(RJSApi& handler, QLabel* v);
      static QJSValue cpp2js_QLabel(RJSApi& handler, const QLabel* v);
      static QLabel* js2cpp_QLabel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QLabel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLayout(RJSApi& handler, QLayout* v);
      static QJSValue cpp2js_QLayout(RJSApi& handler, const QLayout* v);
      static QLayout* js2cpp_QLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QLineEdit(RJSApi& handler, QLineEdit* v);
      static QJSValue cpp2js_QLineEdit(RJSApi& handler, const QLineEdit* v);
      static QLineEdit* js2cpp_QLineEdit_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QLineEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListView(RJSApi& handler, QListView* v);
      static QJSValue cpp2js_QListView(RJSApi& handler, const QListView* v);
      static QListView* js2cpp_QListView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QListView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QListWidget(RJSApi& handler, QListWidget* v);
      static QJSValue cpp2js_QListWidget(RJSApi& handler, const QListWidget* v);
      static QListWidget* js2cpp_QListWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QListWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMainWindow(RJSApi& handler, QMainWindow* v);
      static QJSValue cpp2js_QMainWindow(RJSApi& handler, const QMainWindow* v);
      static QMainWindow* js2cpp_QMainWindow_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMainWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMdiArea(RJSApi& handler, QMdiArea* v);
      static QJSValue cpp2js_QMdiArea(RJSApi& handler, const QMdiArea* v);
      static QMdiArea* js2cpp_QMdiArea_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMdiArea_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMdiSubWindow(RJSApi& handler, QMdiSubWindow* v);
      static QJSValue cpp2js_QMdiSubWindow(RJSApi& handler, const QMdiSubWindow* v);
      static QMdiSubWindow* js2cpp_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMenu(RJSApi& handler, QMenu* v);
      static QJSValue cpp2js_QMenu(RJSApi& handler, const QMenu* v);
      static QMenu* js2cpp_QMenu_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMenu_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMenuBar(RJSApi& handler, QMenuBar* v);
      static QJSValue cpp2js_QMenuBar(RJSApi& handler, const QMenuBar* v);
      static QMenuBar* js2cpp_QMenuBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMenuBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMessageBox(RJSApi& handler, QMessageBox* v);
      static QJSValue cpp2js_QMessageBox(RJSApi& handler, const QMessageBox* v);
      static QMessageBox* js2cpp_QMessageBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMessageBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QMimeData(RJSApi& handler, QMimeData* v);
      static QJSValue cpp2js_QMimeData(RJSApi& handler, const QMimeData* v);
      static QMimeData* js2cpp_QMimeData_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QMimeData_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPlainTextEdit(RJSApi& handler, QPlainTextEdit* v);
      static QJSValue cpp2js_QPlainTextEdit(RJSApi& handler, const QPlainTextEdit* v);
      static QPlainTextEdit* js2cpp_QPlainTextEdit_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPlainTextEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPrintDialog(RJSApi& handler, QPrintDialog* v);
      static QJSValue cpp2js_QPrintDialog(RJSApi& handler, const QPrintDialog* v);
      static QPrintDialog* js2cpp_QPrintDialog_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPrintDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProgressBar(RJSApi& handler, QProgressBar* v);
      static QJSValue cpp2js_QProgressBar(RJSApi& handler, const QProgressBar* v);
      static QProgressBar* js2cpp_QProgressBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QProgressBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QProgressDialog(RJSApi& handler, QProgressDialog* v);
      static QJSValue cpp2js_QProgressDialog(RJSApi& handler, const QProgressDialog* v);
      static QProgressDialog* js2cpp_QProgressDialog_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QProgressDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPushButton(RJSApi& handler, QPushButton* v);
      static QJSValue cpp2js_QPushButton(RJSApi& handler, const QPushButton* v);
      static QPushButton* js2cpp_QPushButton_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QPushButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQuickView(RJSApi& handler, QQuickView* v);
      static QJSValue cpp2js_QQuickView(RJSApi& handler, const QQuickView* v);
      static QQuickView* js2cpp_QQuickView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QQuickView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QQuickWidget(RJSApi& handler, QQuickWidget* v);
      static QJSValue cpp2js_QQuickWidget(RJSApi& handler, const QQuickWidget* v);
      static QQuickWidget* js2cpp_QQuickWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QQuickWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRadioButton(RJSApi& handler, QRadioButton* v);
      static QJSValue cpp2js_QRadioButton(RJSApi& handler, const QRadioButton* v);
      static QRadioButton* js2cpp_QRadioButton_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QRadioButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QRegularExpressionValidator(RJSApi& handler, QRegularExpressionValidator* v);
      static QJSValue cpp2js_QRegularExpressionValidator(RJSApi& handler, const QRegularExpressionValidator* v);
      static QRegularExpressionValidator* js2cpp_QRegularExpressionValidator_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QRegularExpressionValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QScreen(RJSApi& handler, QScreen* v);
      static QJSValue cpp2js_QScreen(RJSApi& handler, const QScreen* v);
      static QScreen* js2cpp_QScreen_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QScreen_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QScrollArea(RJSApi& handler, QScrollArea* v);
      static QJSValue cpp2js_QScrollArea(RJSApi& handler, const QScrollArea* v);
      static QScrollArea* js2cpp_QScrollArea_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QScrollArea_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QScrollBar(RJSApi& handler, QScrollBar* v);
      static QJSValue cpp2js_QScrollBar(RJSApi& handler, const QScrollBar* v);
      static QScrollBar* js2cpp_QScrollBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QScrollBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSettings(RJSApi& handler, QSettings* v);
      static QJSValue cpp2js_QSettings(RJSApi& handler, const QSettings* v);
      static QSettings* js2cpp_QSettings_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSettings_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QShortcut(RJSApi& handler, QShortcut* v);
      static QJSValue cpp2js_QShortcut(RJSApi& handler, const QShortcut* v);
      static QShortcut* js2cpp_QShortcut_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QShortcut_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSlider(RJSApi& handler, QSlider* v);
      static QJSValue cpp2js_QSlider(RJSApi& handler, const QSlider* v);
      static QSlider* js2cpp_QSlider_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSlider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSortFilterProxyModel(RJSApi& handler, QSortFilterProxyModel* v);
      static QJSValue cpp2js_QSortFilterProxyModel(RJSApi& handler, const QSortFilterProxyModel* v);
      static QSortFilterProxyModel* js2cpp_QSortFilterProxyModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSortFilterProxyModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSpinBox(RJSApi& handler, QSpinBox* v);
      static QJSValue cpp2js_QSpinBox(RJSApi& handler, const QSpinBox* v);
      static QSpinBox* js2cpp_QSpinBox_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSpinBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSplashScreen(RJSApi& handler, QSplashScreen* v);
      static QJSValue cpp2js_QSplashScreen(RJSApi& handler, const QSplashScreen* v);
      static QSplashScreen* js2cpp_QSplashScreen_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSplashScreen_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSplitter(RJSApi& handler, QSplitter* v);
      static QJSValue cpp2js_QSplitter(RJSApi& handler, const QSplitter* v);
      static QSplitter* js2cpp_QSplitter_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSplitter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSplitterHandle(RJSApi& handler, QSplitterHandle* v);
      static QJSValue cpp2js_QSplitterHandle(RJSApi& handler, const QSplitterHandle* v);
      static QSplitterHandle* js2cpp_QSplitterHandle_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSplitterHandle_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStackedLayout(RJSApi& handler, QStackedLayout* v);
      static QJSValue cpp2js_QStackedLayout(RJSApi& handler, const QStackedLayout* v);
      static QStackedLayout* js2cpp_QStackedLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStackedLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStackedWidget(RJSApi& handler, QStackedWidget* v);
      static QJSValue cpp2js_QStackedWidget(RJSApi& handler, const QStackedWidget* v);
      static QStackedWidget* js2cpp_QStackedWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStackedWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStandardItemModel(RJSApi& handler, QStandardItemModel* v);
      static QJSValue cpp2js_QStandardItemModel(RJSApi& handler, const QStandardItemModel* v);
      static QStandardItemModel* js2cpp_QStandardItemModel_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStandardItemModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStatusBar(RJSApi& handler, QStatusBar* v);
      static QJSValue cpp2js_QStatusBar(RJSApi& handler, const QStatusBar* v);
      static QStatusBar* js2cpp_QStatusBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QStatusBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QSvgRenderer(RJSApi& handler, QSvgRenderer* v);
      static QJSValue cpp2js_QSvgRenderer(RJSApi& handler, const QSvgRenderer* v);
      static QSvgRenderer* js2cpp_QSvgRenderer_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QSvgRenderer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTabBar(RJSApi& handler, QTabBar* v);
      static QJSValue cpp2js_QTabBar(RJSApi& handler, const QTabBar* v);
      static QTabBar* js2cpp_QTabBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTabBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTabWidget(RJSApi& handler, QTabWidget* v);
      static QJSValue cpp2js_QTabWidget(RJSApi& handler, const QTabWidget* v);
      static QTabWidget* js2cpp_QTabWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTabWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTableView(RJSApi& handler, QTableView* v);
      static QJSValue cpp2js_QTableView(RJSApi& handler, const QTableView* v);
      static QTableView* js2cpp_QTableView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTableView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTableWidget(RJSApi& handler, QTableWidget* v);
      static QJSValue cpp2js_QTableWidget(RJSApi& handler, const QTableWidget* v);
      static QTableWidget* js2cpp_QTableWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTableWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextBrowser(RJSApi& handler, QTextBrowser* v);
      static QJSValue cpp2js_QTextBrowser(RJSApi& handler, const QTextBrowser* v);
      static QTextBrowser* js2cpp_QTextBrowser_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTextBrowser_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextDocument(RJSApi& handler, QTextDocument* v);
      static QJSValue cpp2js_QTextDocument(RJSApi& handler, const QTextDocument* v);
      static QTextDocument* js2cpp_QTextDocument_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTextDocument_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTextEdit(RJSApi& handler, QTextEdit* v);
      static QJSValue cpp2js_QTextEdit(RJSApi& handler, const QTextEdit* v);
      static QTextEdit* js2cpp_QTextEdit_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTextEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTimer(RJSApi& handler, QTimer* v);
      static QJSValue cpp2js_QTimer(RJSApi& handler, const QTimer* v);
      static QTimer* js2cpp_QTimer_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTimer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QToolBar(RJSApi& handler, QToolBar* v);
      static QJSValue cpp2js_QToolBar(RJSApi& handler, const QToolBar* v);
      static QToolBar* js2cpp_QToolBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QToolBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QToolButton(RJSApi& handler, QToolButton* v);
      static QJSValue cpp2js_QToolButton(RJSApi& handler, const QToolButton* v);
      static QToolButton* js2cpp_QToolButton_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QToolButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTranslator(RJSApi& handler, QTranslator* v);
      static QJSValue cpp2js_QTranslator(RJSApi& handler, const QTranslator* v);
      static QTranslator* js2cpp_QTranslator_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTranslator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTreeView(RJSApi& handler, QTreeView* v);
      static QJSValue cpp2js_QTreeView(RJSApi& handler, const QTreeView* v);
      static QTreeView* js2cpp_QTreeView_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTreeView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QTreeWidget(RJSApi& handler, QTreeWidget* v);
      static QJSValue cpp2js_QTreeWidget(RJSApi& handler, const QTreeWidget* v);
      static QTreeWidget* js2cpp_QTreeWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QTreeWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QVBoxLayout(RJSApi& handler, QVBoxLayout* v);
      static QJSValue cpp2js_QVBoxLayout(RJSApi& handler, const QVBoxLayout* v);
      static QVBoxLayout* js2cpp_QVBoxLayout_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QVBoxLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QValidator(RJSApi& handler, QValidator* v);
      static QJSValue cpp2js_QValidator(RJSApi& handler, const QValidator* v);
      static QValidator* js2cpp_QValidator_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWidgetAction(RJSApi& handler, QWidgetAction* v);
      static QJSValue cpp2js_QWidgetAction(RJSApi& handler, const QWidgetAction* v);
      static QWidgetAction* js2cpp_QWidgetAction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QWidgetAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWindow(RJSApi& handler, QWindow* v);
      static QJSValue cpp2js_QWindow(RJSApi& handler, const QWindow* v);
      static QWindow* js2cpp_QWindow_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // QList types:
  // ------------
  
      static QJSValue cpp2js_QFileInfoList(RJSApi& handler, const QFileInfoList& v);
      static QFileInfoList js2cpp_QFileInfoList(RJSApi& handler, const QJSValue& v);
      static bool is_QFileInfoList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QByteArray(RJSApi& handler, const QList<QByteArray>& v);
      static QList<QByteArray> js2cpp_QList_QByteArray(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QByteArray(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QChar(RJSApi& handler, const QList<QChar>& v);
      static QList<QChar> js2cpp_QList_QChar(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QChar(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QFontDatabase_WritingSystem(RJSApi& handler, const QList<QFontDatabase::WritingSystem>& v);
      static QList<QFontDatabase::WritingSystem> js2cpp_QList_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QKeySequence(RJSApi& handler, const QList<QKeySequence>& v);
      static QList<QKeySequence> js2cpp_QList_QKeySequence(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QKeySequence(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QLine(RJSApi& handler, const QList<QLine>& v);
      static QList<QLine> js2cpp_QList_QLine(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QLineF(RJSApi& handler, const QList<QLineF>& v);
      static QList<QLineF> js2cpp_QList_QLineF(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QLineF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QLocale(RJSApi& handler, const QList<QLocale>& v);
      static QList<QLocale> js2cpp_QList_QLocale(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QLocale(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QLocale_Country(RJSApi& handler, const QList<QLocale::Country>& v);
      static QList<QLocale::Country> js2cpp_QList_QLocale_Country(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QLocale_Country(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPageSize(RJSApi& handler, const QList<QPageSize>& v);
      static QList<QPageSize> js2cpp_QList_QPageSize(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPageSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPoint(RJSApi& handler, const QList<QPoint>& v);
      static QList<QPoint> js2cpp_QList_QPoint(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPointF(RJSApi& handler, const QList<QPointF>& v);
      static QList<QPointF> js2cpp_QList_QPointF(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPointF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPolygonF(RJSApi& handler, const QList<QPolygonF>& v);
      static QList<QPolygonF> js2cpp_QList_QPolygonF(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPolygonF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPrinter_ColorMode(RJSApi& handler, const QList<QPrinter::ColorMode>& v);
      static QList<QPrinter::ColorMode> js2cpp_QList_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPrinter_DuplexMode(RJSApi& handler, const QList<QPrinter::DuplexMode>& v);
      static QList<QPrinter::DuplexMode> js2cpp_QList_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPrinter_PaperSource(RJSApi& handler, const QList<QPrinter::PaperSource>& v);
      static QList<QPrinter::PaperSource> js2cpp_QList_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QPrinterInfo(RJSApi& handler, const QList<QPrinterInfo>& v);
      static QList<QPrinterInfo> js2cpp_QList_QPrinterInfo(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QPrinterInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QRect(RJSApi& handler, const QList<QRect>& v);
      static QList<QRect> js2cpp_QList_QRect(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QRect(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QRectF(RJSApi& handler, const QList<QRectF>& v);
      static QList<QRectF> js2cpp_QList_QRectF(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QRectF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QSize(RJSApi& handler, const QList<QSize>& v);
      static QList<QSize> js2cpp_QList_QSize(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QString(RJSApi& handler, const QList<QString>& v);
      static QList<QString> js2cpp_QList_QString(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QTextFormat(RJSApi& handler, const QList<QTextFormat>& v);
      static QList<QTextFormat> js2cpp_QList_QTextFormat(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QTextFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QTextLength(RJSApi& handler, const QList<QTextLength>& v);
      static QList<QTextLength> js2cpp_QList_QTextLength(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QTextLength(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QUrl(RJSApi& handler, const QList<QUrl>& v);
      static QList<QUrl> js2cpp_QList_QUrl(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QUrl(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QVariant(RJSApi& handler, const QList<QVariant>& v);
      static QList<QVariant> js2cpp_QList_QVariant(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QVariant(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_Qt_DayOfWeek(RJSApi& handler, const QList<Qt::DayOfWeek>& v);
      static QList<Qt::DayOfWeek> js2cpp_QList_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v);
      static bool is_QList_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_bool(RJSApi& handler, const QList<bool>& v);
      static QList<bool> js2cpp_QList_bool(RJSApi& handler, const QJSValue& v);
      static bool is_QList_bool(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_double(RJSApi& handler, const QList<double>& v);
      static QList<double> js2cpp_QList_double(RJSApi& handler, const QJSValue& v);
      static bool is_QList_double(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_int(RJSApi& handler, const QList<int>& v);
      static QList<int> js2cpp_QList_int(RJSApi& handler, const QJSValue& v);
      static bool is_QList_int(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_qreal(RJSApi& handler, const QList<qreal>& v);
      static QList<qreal> js2cpp_QList_qreal(RJSApi& handler, const QJSValue& v);
      static bool is_QList_qreal(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QModelIndexList(RJSApi& handler, const QModelIndexList& v);
      static QModelIndexList js2cpp_QModelIndexList(RJSApi& handler, const QJSValue& v);
      static bool is_QModelIndexList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QStringList(RJSApi& handler, const QStringList& v);
      static QStringList js2cpp_QStringList(RJSApi& handler, const QJSValue& v);
      static bool is_QStringList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------------
  // QList pointer types:
  // --------------------
  
      static QJSValue cpp2js_QList_QAbstractButton_ptr(RJSApi& handler, const QList<QAbstractButton*>& v);
      static QList<QAbstractButton*> js2cpp_QList_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QAction_ptr(RJSApi& handler, const QList<QAction*>& v);
      static QList<QAction*> js2cpp_QList_QAction_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QDockWidget_ptr(RJSApi& handler, const QList<QDockWidget*>& v);
      static QList<QDockWidget*> js2cpp_QList_QDockWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QDockWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QListWidgetItem_ptr(RJSApi& handler, const QList<QListWidgetItem*>& v);
      static QList<QListWidgetItem*> js2cpp_QList_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QMdiSubWindow_ptr(RJSApi& handler, const QList<QMdiSubWindow*>& v);
      static QList<QMdiSubWindow*> js2cpp_QList_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QObject_ptr(RJSApi& handler, const QList<QObject*>& v);
      static QList<QObject*> js2cpp_QList_QObject_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QObject_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QScreen_ptr(RJSApi& handler, const QList<QScreen*>& v);
      static QList<QScreen*> js2cpp_QList_QScreen_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QScreen_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QStandardItem_ptr(RJSApi& handler, const QList<QStandardItem*>& v);
      static QList<QStandardItem*> js2cpp_QList_QStandardItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QStandardItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QToolBar_ptr(RJSApi& handler, const QList<QToolBar*>& v);
      static QList<QToolBar*> js2cpp_QList_QToolBar_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QToolBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QTreeWidgetItem_ptr(RJSApi& handler, const QList<QTreeWidgetItem*>& v);
      static QList<QTreeWidgetItem*> js2cpp_QList_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QList_QWidget_ptr(RJSApi& handler, const QList<QWidget*>& v);
      static QList<QWidget*> js2cpp_QList_QWidget_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QList_QWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWidgetList_ptr(RJSApi& handler, const QWidgetList& v);
      static QWidgetList js2cpp_QWidgetList_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QWidgetList_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QWindowList_ptr(RJSApi& handler, const QWindowList& v);
      static QWindowList js2cpp_QWindowList_ptr(RJSApi& handler, const QJSValue& v);
      static bool is_QWindowList_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // -----------
  // QSet types:
  // -----------
  
      static QJSValue cpp2js_QSet_QString(RJSApi& handler, const QSet<QString>& v);
      static QSet<QString> js2cpp_QSet_QString(RJSApi& handler, const QJSValue& v);
      static bool is_QSet_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // -----------
  // QMap types:
  // -----------
  
      static QJSValue cpp2js_QVariantMap(RJSApi& handler, const QVariantMap& v);
      static QVariantMap js2cpp_QVariantMap(RJSApi& handler, const QJSValue& v);
      static bool is_QVariantMap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // -----------
  // QHash types:
  // -----------
  
      static QJSValue cpp2js_QHash_int_QByteArray(RJSApi& handler, const QHash<int,QByteArray>& v);
      static QHash<int,QByteArray> js2cpp_QHash_int_QByteArray(RJSApi& handler, const QJSValue& v);
      static bool is_QHash_int_QByteArray(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // QPair types:
  // ------------
  
      static QJSValue cpp2js_QPair_QString_QString(RJSApi& handler, const QPair<QString,QString>& v);
      static QPair<QString,QString> js2cpp_QPair_QString_QString(RJSApi& handler, const QJSValue& v);
      static bool is_QPair_QString_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      static QJSValue cpp2js_QPair_int_int(RJSApi& handler, const QPair<int,int>& v);
      static QPair<int,int> js2cpp_QPair_int_int(RJSApi& handler, const QJSValue& v);
      static bool is_QPair_int_int(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // dummy types:
  // ------------
  
      //#include <QCalendar>

      static QJSValue cpp2js_QCalendar(RJSApi& handler, const QCalendar& v);
      static QCalendar js2cpp_QCalendar(RJSApi& handler, const QJSValue& v);
      static bool is_QCalendar(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      //#include <QFontInfo>

      static QJSValue cpp2js_QFontInfo(RJSApi& handler, const QFontInfo& v);
      static QFontInfo js2cpp_QFontInfo(RJSApi& handler, const QJSValue& v);
      static bool is_QFontInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      //#include <QTimeZone>

      static QJSValue cpp2js_QTimeZone(RJSApi& handler, const QTimeZone& v);
      static QTimeZone js2cpp_QTimeZone(RJSApi& handler, const QJSValue& v);
      static bool is_QTimeZone(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------------
  // dummy pointer types:
  // --------------------
  
      //#include <QGraphicsProxyWidget>

      static QJSValue cpp2js_QGraphicsProxyWidget(RJSApi& handler, QGraphicsProxyWidget* v);
      static QGraphicsProxyWidget* js2cpp_QGraphicsProxyWidget(RJSApi& handler, const QJSValue& v);
      static bool is_QGraphicsProxyWidget(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      //#include <QPaintEngine>

      static QJSValue cpp2js_QPaintEngine(RJSApi& handler, QPaintEngine* v);
      static QPaintEngine* js2cpp_QPaintEngine(RJSApi& handler, const QJSValue& v);
      static bool is_QPaintEngine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
          // more dummy implementations
          static QJSValue cpp2js_QList_QAction(RJSApi& handler, const QList<QAction*>& v);
         
          static QList<QAction*> js2cpp_QList_QAction(RJSApi& handler, const QJSValue& v);
        
          // allow downcasting for type QAction:
          private:
            static QList<RJSDowncaster_QAction*> downcasters_QAction;

          public:
            static void registerDowncaster_QAction(RJSDowncaster_QAction* dc) {
              downcasters_QAction.append(dc);
            }
        
          // allow downcasting for type QApplication:
          private:
            static QList<RJSDowncaster_QApplication*> downcasters_QApplication;

          public:
            static void registerDowncaster_QApplication(RJSDowncaster_QApplication* dc) {
              downcasters_QApplication.append(dc);
            }
        
          // allow downcasting for type QComboBox:
          private:
            static QList<RJSDowncaster_QComboBox*> downcasters_QComboBox;

          public:
            static void registerDowncaster_QComboBox(RJSDowncaster_QComboBox* dc) {
              downcasters_QComboBox.append(dc);
            }
        
          // allow downcasting for type QEvent:
          private:
            static QList<RJSDowncaster_QEvent*> downcasters_QEvent;

          public:
            static void registerDowncaster_QEvent(RJSDowncaster_QEvent* dc) {
              downcasters_QEvent.append(dc);
            }
        
          // allow downcasting for type QDockWidget:
          private:
            static QList<RJSDowncaster_QDockWidget*> downcasters_QDockWidget;

          public:
            static void registerDowncaster_QDockWidget(RJSDowncaster_QDockWidget* dc) {
              downcasters_QDockWidget.append(dc);
            }
        
          // allow downcasting for type QFileSystemModel:
          private:
            static QList<RJSDowncaster_QFileSystemModel*> downcasters_QFileSystemModel;

          public:
            static void registerDowncaster_QFileSystemModel(RJSDowncaster_QFileSystemModel* dc) {
              downcasters_QFileSystemModel.append(dc);
            }
        
          // allow downcasting for type QFrame:
          private:
            static QList<RJSDowncaster_QFrame*> downcasters_QFrame;

          public:
            static void registerDowncaster_QFrame(RJSDowncaster_QFrame* dc) {
              downcasters_QFrame.append(dc);
            }
        
          // allow downcasting for type QItemDelegate:
          private:
            static QList<RJSDowncaster_QItemDelegate*> downcasters_QItemDelegate;

          public:
            static void registerDowncaster_QItemDelegate(RJSDowncaster_QItemDelegate* dc) {
              downcasters_QItemDelegate.append(dc);
            }
        
          // allow downcasting for type QJSEngine:
          private:
            static QList<RJSDowncaster_QJSEngine*> downcasters_QJSEngine;

          public:
            static void registerDowncaster_QJSEngine(RJSDowncaster_QJSEngine* dc) {
              downcasters_QJSEngine.append(dc);
            }
        
          // allow downcasting for type QLayout:
          private:
            static QList<RJSDowncaster_QLayout*> downcasters_QLayout;

          public:
            static void registerDowncaster_QLayout(RJSDowncaster_QLayout* dc) {
              downcasters_QLayout.append(dc);
            }
        
          // allow downcasting for type QLineEdit:
          private:
            static QList<RJSDowncaster_QLineEdit*> downcasters_QLineEdit;

          public:
            static void registerDowncaster_QLineEdit(RJSDowncaster_QLineEdit* dc) {
              downcasters_QLineEdit.append(dc);
            }
        
          // allow downcasting for type QListView:
          private:
            static QList<RJSDowncaster_QListView*> downcasters_QListView;

          public:
            static void registerDowncaster_QListView(RJSDowncaster_QListView* dc) {
              downcasters_QListView.append(dc);
            }
        
          // allow downcasting for type QListWidget:
          private:
            static QList<RJSDowncaster_QListWidget*> downcasters_QListWidget;

          public:
            static void registerDowncaster_QListWidget(RJSDowncaster_QListWidget* dc) {
              downcasters_QListWidget.append(dc);
            }
        
          // allow downcasting for type QMainWindow:
          private:
            static QList<RJSDowncaster_QMainWindow*> downcasters_QMainWindow;

          public:
            static void registerDowncaster_QMainWindow(RJSDowncaster_QMainWindow* dc) {
              downcasters_QMainWindow.append(dc);
            }
        
          // allow downcasting for type QMdiArea:
          private:
            static QList<RJSDowncaster_QMdiArea*> downcasters_QMdiArea;

          public:
            static void registerDowncaster_QMdiArea(RJSDowncaster_QMdiArea* dc) {
              downcasters_QMdiArea.append(dc);
            }
        
          // allow downcasting for type QMdiSubWindow:
          private:
            static QList<RJSDowncaster_QMdiSubWindow*> downcasters_QMdiSubWindow;

          public:
            static void registerDowncaster_QMdiSubWindow(RJSDowncaster_QMdiSubWindow* dc) {
              downcasters_QMdiSubWindow.append(dc);
            }
        
          // allow downcasting for type QObject:
          private:
            static QList<RJSDowncaster_QObject*> downcasters_QObject;

          public:
            static void registerDowncaster_QObject(RJSDowncaster_QObject* dc) {
              downcasters_QObject.append(dc);
            }
        
          // allow downcasting for type QQmlEngine:
          private:
            static QList<RJSDowncaster_QQmlEngine*> downcasters_QQmlEngine;

          public:
            static void registerDowncaster_QQmlEngine(RJSDowncaster_QQmlEngine* dc) {
              downcasters_QQmlEngine.append(dc);
            }
        
          // allow downcasting for type QTextBrowser:
          private:
            static QList<RJSDowncaster_QTextBrowser*> downcasters_QTextBrowser;

          public:
            static void registerDowncaster_QTextBrowser(RJSDowncaster_QTextBrowser* dc) {
              downcasters_QTextBrowser.append(dc);
            }
        
          // allow downcasting for type QToolBar:
          private:
            static QList<RJSDowncaster_QToolBar*> downcasters_QToolBar;

          public:
            static void registerDowncaster_QToolBar(RJSDowncaster_QToolBar* dc) {
              downcasters_QToolBar.append(dc);
            }
        
          // allow downcasting for type QToolButton:
          private:
            static QList<RJSDowncaster_QToolButton*> downcasters_QToolButton;

          public:
            static void registerDowncaster_QToolButton(RJSDowncaster_QToolButton* dc) {
              downcasters_QToolButton.append(dc);
            }
        
          // allow downcasting for type QTreeWidget:
          private:
            static QList<RJSDowncaster_QTreeWidget*> downcasters_QTreeWidget;

          public:
            static void registerDowncaster_QTreeWidget(RJSDowncaster_QTreeWidget* dc) {
              downcasters_QTreeWidget.append(dc);
            }
        
          // allow downcasting for type QWidget:
          private:
            static QList<RJSDowncaster_QWidget*> downcasters_QWidget;

          public:
            static void registerDowncaster_QWidget(RJSDowncaster_QWidget* dc) {
              downcasters_QWidget.append(dc);
            }
        
        private:
          static QList<RJSQVariantConverter*> qvariantConverters;

        public:
          static void registerQVariantConverter(RJSQVariantConverter* vc) {
            qvariantConverters.append(vc);
          }
        
      };






      #endif
    