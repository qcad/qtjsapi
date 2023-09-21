
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

      
        QVariant getWrapperProperty(RJSApi& handler, const QObject& obj);
        void setWrapperProperty(RJSApi& handler, QObject& obj, const QVariant& wrapper);

        QJSValue getWrapperQJSValue(const QJSValue& v);
        QObject* getWrapperQObject(const QJSValue& v);
        RJSWrapper* getWrapperRJSWrapper(const QJSValue& v);

        /**
         * \return Wrapper in given type T for the given QJSValue.
         */
        template<typename T>
        T* getWrapper(const QJSValue& v) {
            return dynamic_cast<T*>(getWrapperQObject(v));
        }

        //
        // custom types (manual implementation):
        //

        QJSValue cpp2js_bool(RJSApi& handler, bool v);
        bool js2cpp_bool(RJSApi& handler, const QJSValue& v);
        bool is_bool(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        QString js2cpp_char_ptr(RJSApi& handler, const QJSValue& v);
        bool is_char_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        QJSValue cpp2js_char(RJSApi& handler, const char* v);

        /*
        QJSValue cpp2js_QMouseEvent(RJSApi& handler, QMouseEvent* v);
        QMouseEvent* js2cpp_QMouseEvent_ptr(RJSApi& handler, const QJSValue& v);
        bool is_QMouseEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
        */

        //QJSValue cpp2js_QKeyEvent(RJSApi& handler, QKeyEvent* v);
        //QKeyEvent* js2cpp_QKeyEvent_ptr(RJSApi& handler, const QJSValue& v);
        //bool is_QKeyEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        QJSValue cpp2js_QVariant(RJSApi& handler, const QVariant& v);
        QVariant js2cpp_QVariant(RJSApi& handler, const QJSValue& v);
        bool is_QVariant(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        QJSValue cpp2js_QObjectList(RJSApi& handler, const QList<QObject*>& v);
        QList<QObject*> js2cpp_QObjectList(RJSApi& handler, const QJSValue& v);

        QJSValue cpp2js_QObject(RJSApi& handler, QObject* v);
        QObject* js2cpp_QObject_ptr(RJSApi& handler, const QJSValue& v);
        bool is_QObject_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        QJSValue cpp2js_QWidget(RJSApi& handler, QWidget* v);
        QWidget* js2cpp_QWidget_ptr(RJSApi& handler, const QJSValue& v);
        bool is_QWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        /*
        QJSValue cpp2js_QLayout(RJSApi& handler, QLayout* v);
        QLayout* js2cpp_QLayout_ptr(RJSApi& handler, const QJSValue& v);
        bool is_QLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
        */

        //QJSValue cpp2js_QColor(RJSApi& handler, const QColor& v);
        //QColor js2cpp_QColor(RJSApi& handler, const QJSValue& v);
        //bool is_QColor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        QJSValue cpp2js_QDomDocument_ParseResult(RJSApi& handler, QDomDocument::ParseResult v);

        QJSValue cpp2js_QList_QPair_QString_QString(RJSApi& handler, const QList<QPair<QString,QString> >& v);
        QList<QPair<QString,QString> > js2cpp_QList_QPair_QString_QString(RJSApi& handler, const QJSValue& v);
        bool is_QList_QPair_QString_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);

        //QJSValue cpp2js_RSpatialIndexPro(RJSApi& handler, RSpatialIndexPro* v);
      
  // ----------------
  // primitive types:
  // ----------------
  
      QJSValue cpp2js_QAbstractFileIconProvider_Options(RJSApi& handler, QAbstractFileIconProvider::Options v);
      QAbstractFileIconProvider::Options js2cpp_QAbstractFileIconProvider_Options(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractFileIconProvider_Options(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDirIterator_IteratorFlags(RJSApi& handler, QDirIterator::IteratorFlags v);
      QDirIterator::IteratorFlags js2cpp_QDirIterator_IteratorFlags(RJSApi& handler, const QJSValue& v);
      bool is_QDirIterator_IteratorFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView_EditTriggers(RJSApi& handler, QAbstractItemView::EditTriggers v);
      QAbstractItemView::EditTriggers js2cpp_QAbstractItemView_EditTriggers(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_EditTriggers(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractPrintDialog_PrintDialogOptions(RJSApi& handler, QAbstractPrintDialog::PrintDialogOptions v);
      QAbstractPrintDialog::PrintDialogOptions js2cpp_QAbstractPrintDialog_PrintDialogOptions(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractPrintDialog_PrintDialogOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDialogButtonBox_StandardButtons(RJSApi& handler, QDialogButtonBox::StandardButtons v);
      QDialogButtonBox::StandardButtons js2cpp_QDialogButtonBox_StandardButtons(RJSApi& handler, const QJSValue& v);
      bool is_QDialogButtonBox_StandardButtons(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDir_Filters(RJSApi& handler, QDir::Filters v);
      QDir::Filters js2cpp_QDir_Filters(RJSApi& handler, const QJSValue& v);
      bool is_QDir_Filters(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDir_SortFlags(RJSApi& handler, QDir::SortFlags v);
      QDir::SortFlags js2cpp_QDir_SortFlags(RJSApi& handler, const QJSValue& v);
      bool is_QDir_SortFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDockWidget_DockWidgetFeatures(RJSApi& handler, QDockWidget::DockWidgetFeatures v);
      QDockWidget::DockWidgetFeatures js2cpp_QDockWidget_DockWidgetFeatures(RJSApi& handler, const QJSValue& v);
      bool is_QDockWidget_DockWidgetFeatures(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEventLoop_ProcessEventsFlags(RJSApi& handler, QEventLoop::ProcessEventsFlags v);
      QEventLoop::ProcessEventsFlags js2cpp_QEventLoop_ProcessEventsFlags(RJSApi& handler, const QJSValue& v);
      bool is_QEventLoop_ProcessEventsFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFile_OpenMode(RJSApi& handler, QFile::OpenMode v);
      QFile::OpenMode js2cpp_QFile_OpenMode(RJSApi& handler, const QJSValue& v);
      bool is_QFile_OpenMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFile_Permissions(RJSApi& handler, QFile::Permissions v);
      QFile::Permissions js2cpp_QFile_Permissions(RJSApi& handler, const QJSValue& v);
      bool is_QFile_Permissions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDialog_Options(RJSApi& handler, QFileDialog::Options v);
      QFileDialog::Options js2cpp_QFileDialog_Options(RJSApi& handler, const QJSValue& v);
      bool is_QFileDialog_Options(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileSystemModel_Options(RJSApi& handler, QFileSystemModel::Options v);
      QFileSystemModel::Options js2cpp_QFileSystemModel_Options(RJSApi& handler, const QJSValue& v);
      bool is_QFileSystemModel_Options(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontComboBox_FontFilters(RJSApi& handler, QFontComboBox::FontFilters v);
      QFontComboBox::FontFilters js2cpp_QFontComboBox_FontFilters(RJSApi& handler, const QJSValue& v);
      bool is_QFontComboBox_FontFilters(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QItemSelectionModel_SelectionFlags(RJSApi& handler, QItemSelectionModel::SelectionFlags v);
      QItemSelectionModel::SelectionFlags js2cpp_QItemSelectionModel_SelectionFlags(RJSApi& handler, const QJSValue& v);
      bool is_QItemSelectionModel_SelectionFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_DataSizeFormats(RJSApi& handler, QLocale::DataSizeFormats v);
      QLocale::DataSizeFormats js2cpp_QLocale_DataSizeFormats(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_DataSizeFormats(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMessageBox_StandardButtons(RJSApi& handler, QMessageBox::StandardButtons v);
      QMessageBox::StandardButtons js2cpp_QMessageBox_StandardButtons(RJSApi& handler, const QJSValue& v);
      bool is_QMessageBox_StandardButtons(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPinchGesture_ChangeFlags(RJSApi& handler, QPinchGesture::ChangeFlags v);
      QPinchGesture::ChangeFlags js2cpp_QPinchGesture_ChangeFlags(RJSApi& handler, const QJSValue& v);
      bool is_QPinchGesture_ChangeFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegularExpression_PatternOptions(RJSApi& handler, QRegularExpression::PatternOptions v);
      QRegularExpression::PatternOptions js2cpp_QRegularExpression_PatternOptions(RJSApi& handler, const QJSValue& v);
      bool is_QRegularExpression_PatternOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegularExpression_WildcardConversionOptions(RJSApi& handler, QRegularExpression::WildcardConversionOptions v);
      QRegularExpression::WildcardConversionOptions js2cpp_QRegularExpression_WildcardConversionOptions(RJSApi& handler, const QJSValue& v);
      bool is_QRegularExpression_WildcardConversionOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSizePolicy_ControlTypes(RJSApi& handler, QSizePolicy::ControlTypes v);
      QSizePolicy::ControlTypes js2cpp_QSizePolicy_ControlTypes(RJSApi& handler, const QJSValue& v);
      bool is_QSizePolicy_ControlTypes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextDocument_FindFlags(RJSApi& handler, QTextDocument::FindFlags v);
      QTextDocument::FindFlags js2cpp_QTextDocument_FindFlags(RJSApi& handler, const QJSValue& v);
      bool is_QTextDocument_FindFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextEdit_AutoFormatting(RJSApi& handler, QTextEdit::AutoFormatting v);
      QTextEdit::AutoFormatting js2cpp_QTextEdit_AutoFormatting(RJSApi& handler, const QJSValue& v);
      bool is_QTextEdit_AutoFormatting(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextFormat_PageBreakFlags(RJSApi& handler, QTextFormat::PageBreakFlags v);
      QTextFormat::PageBreakFlags js2cpp_QTextFormat_PageBreakFlags(RJSApi& handler, const QJSValue& v);
      bool is_QTextFormat_PageBreakFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl_ComponentFormattingOptions(RJSApi& handler, QUrl::ComponentFormattingOptions v);
      QUrl::ComponentFormattingOptions js2cpp_QUrl_ComponentFormattingOptions(RJSApi& handler, const QJSValue& v);
      bool is_QUrl_ComponentFormattingOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl_FormattingOptions(RJSApi& handler, QUrl::FormattingOptions v);
      QUrl::FormattingOptions js2cpp_QUrl_FormattingOptions(RJSApi& handler, const QJSValue& v);
      bool is_QUrl_FormattingOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl_UserInputResolutionOptions(RJSApi& handler, QUrl::UserInputResolutionOptions v);
      QUrl::UserInputResolutionOptions js2cpp_QUrl_UserInputResolutionOptions(RJSApi& handler, const QJSValue& v);
      bool is_QUrl_UserInputResolutionOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Alignment(RJSApi& handler, Qt::Alignment v);
      Qt::Alignment js2cpp_Qt_Alignment(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Alignment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ApplicationStates(RJSApi& handler, Qt::ApplicationStates v);
      Qt::ApplicationStates js2cpp_Qt_ApplicationStates(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ApplicationStates(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_DropActions(RJSApi& handler, Qt::DropActions v);
      Qt::DropActions js2cpp_Qt_DropActions(RJSApi& handler, const QJSValue& v);
      bool is_Qt_DropActions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Edges(RJSApi& handler, Qt::Edges v);
      Qt::Edges js2cpp_Qt_Edges(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Edges(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_InputMethodHints(RJSApi& handler, Qt::InputMethodHints v);
      Qt::InputMethodHints js2cpp_Qt_InputMethodHints(RJSApi& handler, const QJSValue& v);
      bool is_Qt_InputMethodHints(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ItemFlags(RJSApi& handler, Qt::ItemFlags v);
      Qt::ItemFlags js2cpp_Qt_ItemFlags(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ItemFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_KeyboardModifiers(RJSApi& handler, Qt::KeyboardModifiers v);
      Qt::KeyboardModifiers js2cpp_Qt_KeyboardModifiers(RJSApi& handler, const QJSValue& v);
      bool is_Qt_KeyboardModifiers(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Modifiers(RJSApi& handler, Qt::Modifiers v);
      Qt::Modifiers js2cpp_Qt_Modifiers(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Modifiers(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_MouseButtons(RJSApi& handler, Qt::MouseButtons v);
      Qt::MouseButtons js2cpp_Qt_MouseButtons(RJSApi& handler, const QJSValue& v);
      bool is_Qt_MouseButtons(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_MouseEventFlags(RJSApi& handler, Qt::MouseEventFlags v);
      Qt::MouseEventFlags js2cpp_Qt_MouseEventFlags(RJSApi& handler, const QJSValue& v);
      bool is_Qt_MouseEventFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Orientations(RJSApi& handler, Qt::Orientations v);
      Qt::Orientations js2cpp_Qt_Orientations(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Orientations(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_TextInteractionFlags(RJSApi& handler, Qt::TextInteractionFlags v);
      Qt::TextInteractionFlags js2cpp_Qt_TextInteractionFlags(RJSApi& handler, const QJSValue& v);
      bool is_Qt_TextInteractionFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_WindowFlags(RJSApi& handler, Qt::WindowFlags v);
      Qt::WindowFlags js2cpp_Qt_WindowFlags(RJSApi& handler, const QJSValue& v);
      bool is_Qt_WindowFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_WindowStates(RJSApi& handler, Qt::WindowStates v);
      Qt::WindowStates js2cpp_Qt_WindowStates(RJSApi& handler, const QJSValue& v);
      bool is_Qt_WindowStates(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSurfaceFormat_FormatOptions(RJSApi& handler, QSurfaceFormat::FormatOptions v);
      QSurfaceFormat::FormatOptions js2cpp_QSurfaceFormat_FormatOptions(RJSApi& handler, const QJSValue& v);
      bool is_QSurfaceFormat_FormatOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsEffect_ChangeFlags(RJSApi& handler, QGraphicsEffect::ChangeFlags v);
      QGraphicsEffect::ChangeFlags js2cpp_QGraphicsEffect_ChangeFlags(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsEffect_ChangeFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsBlurEffect_BlurHints(RJSApi& handler, QGraphicsBlurEffect::BlurHints v);
      QGraphicsBlurEffect::BlurHints js2cpp_QGraphicsBlurEffect_BlurHints(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsBlurEffect_BlurHints(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDirIterator_IteratorFlag(RJSApi& handler, QDirIterator::IteratorFlag v);
      QDirIterator::IteratorFlag js2cpp_QDirIterator_IteratorFlag(RJSApi& handler, const QJSValue& v);
      bool is_QDirIterator_IteratorFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsBlurEffect_BlurHint(RJSApi& handler, QGraphicsBlurEffect::BlurHint v);
      QGraphicsBlurEffect::BlurHint js2cpp_QGraphicsBlurEffect_BlurHint(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsBlurEffect_BlurHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsEffect_PixmapPadMode(RJSApi& handler, QGraphicsEffect::PixmapPadMode v);
      QGraphicsEffect::PixmapPadMode js2cpp_QGraphicsEffect_PixmapPadMode(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsEffect_PixmapPadMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsEffect_ChangeFlag(RJSApi& handler, QGraphicsEffect::ChangeFlag v);
      QGraphicsEffect::ChangeFlag js2cpp_QGraphicsEffect_ChangeFlag(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsEffect_ChangeFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSurfaceFormat_FormatOption(RJSApi& handler, QSurfaceFormat::FormatOption v);
      QSurfaceFormat::FormatOption js2cpp_QSurfaceFormat_FormatOption(RJSApi& handler, const QJSValue& v);
      bool is_QSurfaceFormat_FormatOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSurfaceFormat_SwapBehavior(RJSApi& handler, QSurfaceFormat::SwapBehavior v);
      QSurfaceFormat::SwapBehavior js2cpp_QSurfaceFormat_SwapBehavior(RJSApi& handler, const QJSValue& v);
      bool is_QSurfaceFormat_SwapBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSurfaceFormat_RenderableType(RJSApi& handler, QSurfaceFormat::RenderableType v);
      QSurfaceFormat::RenderableType js2cpp_QSurfaceFormat_RenderableType(RJSApi& handler, const QJSValue& v);
      bool is_QSurfaceFormat_RenderableType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSurfaceFormat_OpenGLContextProfile(RJSApi& handler, QSurfaceFormat::OpenGLContextProfile v);
      QSurfaceFormat::OpenGLContextProfile js2cpp_QSurfaceFormat_OpenGLContextProfile(RJSApi& handler, const QJSValue& v);
      bool is_QSurfaceFormat_OpenGLContextProfile(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QQuickWidget_ResizeMode(RJSApi& handler, QQuickWidget::ResizeMode v);
      QQuickWidget::ResizeMode js2cpp_QQuickWidget_ResizeMode(RJSApi& handler, const QJSValue& v);
      bool is_QQuickWidget_ResizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QQuickWidget_Status(RJSApi& handler, QQuickWidget::Status v);
      QQuickWidget::Status js2cpp_QQuickWidget_Status(RJSApi& handler, const QJSValue& v);
      bool is_QQuickWidget_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEasingCurve_Type(RJSApi& handler, QEasingCurve::Type v);
      QEasingCurve::Type js2cpp_QEasingCurve_Type(RJSApi& handler, const QJSValue& v);
      bool is_QEasingCurve_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractFileIconProvider_IconType(RJSApi& handler, QAbstractFileIconProvider::IconType v);
      QAbstractFileIconProvider::IconType js2cpp_QAbstractFileIconProvider_IconType(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractFileIconProvider_IconType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractFileIconProvider_Option(RJSApi& handler, QAbstractFileIconProvider::Option v);
      QAbstractFileIconProvider::Option js2cpp_QAbstractFileIconProvider_Option(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractFileIconProvider_Option(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemDelegate_EndEditHint(RJSApi& handler, QAbstractItemDelegate::EndEditHint v);
      QAbstractItemDelegate::EndEditHint js2cpp_QAbstractItemDelegate_EndEditHint(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemDelegate_EndEditHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView_DragDropMode(RJSApi& handler, QAbstractItemView::DragDropMode v);
      QAbstractItemView::DragDropMode js2cpp_QAbstractItemView_DragDropMode(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_DragDropMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView_EditTrigger(RJSApi& handler, QAbstractItemView::EditTrigger v);
      QAbstractItemView::EditTrigger js2cpp_QAbstractItemView_EditTrigger(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_EditTrigger(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView_ScrollHint(RJSApi& handler, QAbstractItemView::ScrollHint v);
      QAbstractItemView::ScrollHint js2cpp_QAbstractItemView_ScrollHint(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_ScrollHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView_ScrollMode(RJSApi& handler, QAbstractItemView::ScrollMode v);
      QAbstractItemView::ScrollMode js2cpp_QAbstractItemView_ScrollMode(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_ScrollMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView_SelectionBehavior(RJSApi& handler, QAbstractItemView::SelectionBehavior v);
      QAbstractItemView::SelectionBehavior js2cpp_QAbstractItemView_SelectionBehavior(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_SelectionBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView_SelectionMode(RJSApi& handler, QAbstractItemView::SelectionMode v);
      QAbstractItemView::SelectionMode js2cpp_QAbstractItemView_SelectionMode(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_SelectionMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractPrintDialog_PrintDialogOption(RJSApi& handler, QAbstractPrintDialog::PrintDialogOption v);
      QAbstractPrintDialog::PrintDialogOption js2cpp_QAbstractPrintDialog_PrintDialogOption(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractPrintDialog_PrintDialogOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractPrintDialog_PrintRange(RJSApi& handler, QAbstractPrintDialog::PrintRange v);
      QAbstractPrintDialog::PrintRange js2cpp_QAbstractPrintDialog_PrintRange(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractPrintDialog_PrintRange(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractScrollArea_SizeAdjustPolicy(RJSApi& handler, QAbstractScrollArea::SizeAdjustPolicy v);
      QAbstractScrollArea::SizeAdjustPolicy js2cpp_QAbstractScrollArea_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractScrollArea_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractSlider_SliderAction(RJSApi& handler, QAbstractSlider::SliderAction v);
      QAbstractSlider::SliderAction js2cpp_QAbstractSlider_SliderAction(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractSlider_SliderAction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractSpinBox_StepType(RJSApi& handler, QAbstractSpinBox::StepType v);
      QAbstractSpinBox::StepType js2cpp_QAbstractSpinBox_StepType(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractSpinBox_StepType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAction_MenuRole(RJSApi& handler, QAction::MenuRole v);
      QAction::MenuRole js2cpp_QAction_MenuRole(RJSApi& handler, const QJSValue& v);
      bool is_QAction_MenuRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAction_Priority(RJSApi& handler, QAction::Priority v);
      QAction::Priority js2cpp_QAction_Priority(RJSApi& handler, const QJSValue& v);
      bool is_QAction_Priority(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QBoxLayout_Direction(RJSApi& handler, QBoxLayout::Direction v);
      QBoxLayout::Direction js2cpp_QBoxLayout_Direction(RJSApi& handler, const QJSValue& v);
      bool is_QBoxLayout_Direction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QChar(RJSApi& handler, const QString& v);
      QChar js2cpp_QChar(RJSApi& handler, const QJSValue& v);
      bool is_QChar(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QClipboard_Mode(RJSApi& handler, QClipboard::Mode v);
      QClipboard::Mode js2cpp_QClipboard_Mode(RJSApi& handler, const QJSValue& v);
      bool is_QClipboard_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QColor_NameFormat(RJSApi& handler, QColor::NameFormat v);
      QColor::NameFormat js2cpp_QColor_NameFormat(RJSApi& handler, const QJSValue& v);
      bool is_QColor_NameFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QColor_Spec(RJSApi& handler, QColor::Spec v);
      QColor::Spec js2cpp_QColor_Spec(RJSApi& handler, const QJSValue& v);
      bool is_QColor_Spec(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QComboBox_InsertPolicy(RJSApi& handler, QComboBox::InsertPolicy v);
      QComboBox::InsertPolicy js2cpp_QComboBox_InsertPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QComboBox_InsertPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QComboBox_SizeAdjustPolicy(RJSApi& handler, QComboBox::SizeAdjustPolicy v);
      QComboBox::SizeAdjustPolicy js2cpp_QComboBox_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QComboBox_SizeAdjustPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QCompleter_CompletionMode(RJSApi& handler, QCompleter::CompletionMode v);
      QCompleter::CompletionMode js2cpp_QCompleter_CompletionMode(RJSApi& handler, const QJSValue& v);
      bool is_QCompleter_CompletionMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QCompleter_ModelSorting(RJSApi& handler, QCompleter::ModelSorting v);
      QCompleter::ModelSorting js2cpp_QCompleter_ModelSorting(RJSApi& handler, const QJSValue& v);
      bool is_QCompleter_ModelSorting(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QContextMenuEvent_Reason(RJSApi& handler, QContextMenuEvent::Reason v);
      QContextMenuEvent::Reason js2cpp_QContextMenuEvent_Reason(RJSApi& handler, const QJSValue& v);
      bool is_QContextMenuEvent_Reason(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDialogButtonBox_ButtonLayout(RJSApi& handler, QDialogButtonBox::ButtonLayout v);
      QDialogButtonBox::ButtonLayout js2cpp_QDialogButtonBox_ButtonLayout(RJSApi& handler, const QJSValue& v);
      bool is_QDialogButtonBox_ButtonLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDialogButtonBox_ButtonRole(RJSApi& handler, QDialogButtonBox::ButtonRole v);
      QDialogButtonBox::ButtonRole js2cpp_QDialogButtonBox_ButtonRole(RJSApi& handler, const QJSValue& v);
      bool is_QDialogButtonBox_ButtonRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDialogButtonBox_StandardButton(RJSApi& handler, QDialogButtonBox::StandardButton v);
      QDialogButtonBox::StandardButton js2cpp_QDialogButtonBox_StandardButton(RJSApi& handler, const QJSValue& v);
      bool is_QDialogButtonBox_StandardButton(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDockWidget_DockWidgetFeature(RJSApi& handler, QDockWidget::DockWidgetFeature v);
      QDockWidget::DockWidgetFeature js2cpp_QDockWidget_DockWidgetFeature(RJSApi& handler, const QJSValue& v);
      bool is_QDockWidget_DockWidgetFeature(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomImplementation_InvalidDataPolicy(RJSApi& handler, QDomImplementation::InvalidDataPolicy v);
      QDomImplementation::InvalidDataPolicy js2cpp_QDomImplementation_InvalidDataPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QDomImplementation_InvalidDataPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomNode_EncodingPolicy(RJSApi& handler, QDomNode::EncodingPolicy v);
      QDomNode::EncodingPolicy js2cpp_QDomNode_EncodingPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QDomNode_EncodingPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomNode_NodeType(RJSApi& handler, QDomNode::NodeType v);
      QDomNode::NodeType js2cpp_QDomNode_NodeType(RJSApi& handler, const QJSValue& v);
      bool is_QDomNode_NodeType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDoubleValidator_Notation(RJSApi& handler, QDoubleValidator::Notation v);
      QDoubleValidator::Notation js2cpp_QDoubleValidator_Notation(RJSApi& handler, const QJSValue& v);
      bool is_QDoubleValidator_Notation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEvent_Type(RJSApi& handler, QEvent::Type v);
      QEvent::Type js2cpp_QEvent_Type(RJSApi& handler, const QJSValue& v);
      bool is_QEvent_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEventLoop_ProcessEventsFlag(RJSApi& handler, QEventLoop::ProcessEventsFlag v);
      QEventLoop::ProcessEventsFlag js2cpp_QEventLoop_ProcessEventsFlag(RJSApi& handler, const QJSValue& v);
      bool is_QEventLoop_ProcessEventsFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEventPoint_State(RJSApi& handler, QEventPoint::State v);
      QEventPoint::State js2cpp_QEventPoint_State(RJSApi& handler, const QJSValue& v);
      bool is_QEventPoint_State(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFile_FileTime(RJSApi& handler, QFile::FileTime v);
      QFile::FileTime js2cpp_QFile_FileTime(RJSApi& handler, const QJSValue& v);
      bool is_QFile_FileTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDevice_FileError(RJSApi& handler, QFileDevice::FileError v);
      QFileDevice::FileError js2cpp_QFileDevice_FileError(RJSApi& handler, const QJSValue& v);
      bool is_QFileDevice_FileError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDevice_FileTime(RJSApi& handler, QFileDevice::FileTime v);
      QFileDevice::FileTime js2cpp_QFileDevice_FileTime(RJSApi& handler, const QJSValue& v);
      bool is_QFileDevice_FileTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDevice_MemoryMapFlags(RJSApi& handler, QFileDevice::MemoryMapFlags v);
      QFileDevice::MemoryMapFlags js2cpp_QFileDevice_MemoryMapFlags(RJSApi& handler, const QJSValue& v);
      bool is_QFileDevice_MemoryMapFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDialog_AcceptMode(RJSApi& handler, QFileDialog::AcceptMode v);
      QFileDialog::AcceptMode js2cpp_QFileDialog_AcceptMode(RJSApi& handler, const QJSValue& v);
      bool is_QFileDialog_AcceptMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDialog_DialogLabel(RJSApi& handler, QFileDialog::DialogLabel v);
      QFileDialog::DialogLabel js2cpp_QFileDialog_DialogLabel(RJSApi& handler, const QJSValue& v);
      bool is_QFileDialog_DialogLabel(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDialog_FileMode(RJSApi& handler, QFileDialog::FileMode v);
      QFileDialog::FileMode js2cpp_QFileDialog_FileMode(RJSApi& handler, const QJSValue& v);
      bool is_QFileDialog_FileMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDialog_Option(RJSApi& handler, QFileDialog::Option v);
      QFileDialog::Option js2cpp_QFileDialog_Option(RJSApi& handler, const QJSValue& v);
      bool is_QFileDialog_Option(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDialog_ViewMode(RJSApi& handler, QFileDialog::ViewMode v);
      QFileDialog::ViewMode js2cpp_QFileDialog_ViewMode(RJSApi& handler, const QJSValue& v);
      bool is_QFileDialog_ViewMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileSystemModel_Option(RJSApi& handler, QFileSystemModel::Option v);
      QFileSystemModel::Option js2cpp_QFileSystemModel_Option(RJSApi& handler, const QJSValue& v);
      bool is_QFileSystemModel_Option(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_Capitalization(RJSApi& handler, QFont::Capitalization v);
      QFont::Capitalization js2cpp_QFont_Capitalization(RJSApi& handler, const QJSValue& v);
      bool is_QFont_Capitalization(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_HintingPreference(RJSApi& handler, QFont::HintingPreference v);
      QFont::HintingPreference js2cpp_QFont_HintingPreference(RJSApi& handler, const QJSValue& v);
      bool is_QFont_HintingPreference(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_ResolveProperties(RJSApi& handler, QFont::ResolveProperties v);
      QFont::ResolveProperties js2cpp_QFont_ResolveProperties(RJSApi& handler, const QJSValue& v);
      bool is_QFont_ResolveProperties(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_SpacingType(RJSApi& handler, QFont::SpacingType v);
      QFont::SpacingType js2cpp_QFont_SpacingType(RJSApi& handler, const QJSValue& v);
      bool is_QFont_SpacingType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_Stretch(RJSApi& handler, QFont::Stretch v);
      QFont::Stretch js2cpp_QFont_Stretch(RJSApi& handler, const QJSValue& v);
      bool is_QFont_Stretch(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_Style(RJSApi& handler, QFont::Style v);
      QFont::Style js2cpp_QFont_Style(RJSApi& handler, const QJSValue& v);
      bool is_QFont_Style(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_StyleHint(RJSApi& handler, QFont::StyleHint v);
      QFont::StyleHint js2cpp_QFont_StyleHint(RJSApi& handler, const QJSValue& v);
      bool is_QFont_StyleHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_StyleStrategy(RJSApi& handler, QFont::StyleStrategy v);
      QFont::StyleStrategy js2cpp_QFont_StyleStrategy(RJSApi& handler, const QJSValue& v);
      bool is_QFont_StyleStrategy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont_Weight(RJSApi& handler, QFont::Weight v);
      QFont::Weight js2cpp_QFont_Weight(RJSApi& handler, const QJSValue& v);
      bool is_QFont_Weight(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontComboBox_FontFilter(RJSApi& handler, QFontComboBox::FontFilter v);
      QFontComboBox::FontFilter js2cpp_QFontComboBox_FontFilter(RJSApi& handler, const QJSValue& v);
      bool is_QFontComboBox_FontFilter(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontDatabase_SystemFont(RJSApi& handler, QFontDatabase::SystemFont v);
      QFontDatabase::SystemFont js2cpp_QFontDatabase_SystemFont(RJSApi& handler, const QJSValue& v);
      bool is_QFontDatabase_SystemFont(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontDatabase_WritingSystem(RJSApi& handler, QFontDatabase::WritingSystem v);
      QFontDatabase::WritingSystem js2cpp_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v);
      bool is_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFormLayout_FieldGrowthPolicy(RJSApi& handler, QFormLayout::FieldGrowthPolicy v);
      QFormLayout::FieldGrowthPolicy js2cpp_QFormLayout_FieldGrowthPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QFormLayout_FieldGrowthPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFormLayout_ItemRole(RJSApi& handler, QFormLayout::ItemRole v);
      QFormLayout::ItemRole js2cpp_QFormLayout_ItemRole(RJSApi& handler, const QJSValue& v);
      bool is_QFormLayout_ItemRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFormLayout_RowWrapPolicy(RJSApi& handler, QFormLayout::RowWrapPolicy v);
      QFormLayout::RowWrapPolicy js2cpp_QFormLayout_RowWrapPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QFormLayout_RowWrapPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFrame_Shadow(RJSApi& handler, QFrame::Shadow v);
      QFrame::Shadow js2cpp_QFrame_Shadow(RJSApi& handler, const QJSValue& v);
      bool is_QFrame_Shadow(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFrame_Shape(RJSApi& handler, QFrame::Shape v);
      QFrame::Shape js2cpp_QFrame_Shape(RJSApi& handler, const QJSValue& v);
      bool is_QFrame_Shape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGesture_GestureCancelPolicy(RJSApi& handler, QGesture::GestureCancelPolicy v);
      QGesture::GestureCancelPolicy js2cpp_QGesture_GestureCancelPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QGesture_GestureCancelPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGradient_CoordinateMode(RJSApi& handler, QGradient::CoordinateMode v);
      QGradient::CoordinateMode js2cpp_QGradient_CoordinateMode(RJSApi& handler, const QJSValue& v);
      bool is_QGradient_CoordinateMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGradient_InterpolationMode(RJSApi& handler, QGradient::InterpolationMode v);
      QGradient::InterpolationMode js2cpp_QGradient_InterpolationMode(RJSApi& handler, const QJSValue& v);
      bool is_QGradient_InterpolationMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGradient_Preset(RJSApi& handler, QGradient::Preset v);
      QGradient::Preset js2cpp_QGradient_Preset(RJSApi& handler, const QJSValue& v);
      bool is_QGradient_Preset(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGradient_Spread(RJSApi& handler, QGradient::Spread v);
      QGradient::Spread js2cpp_QGradient_Spread(RJSApi& handler, const QJSValue& v);
      bool is_QGradient_Spread(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGradient_Type(RJSApi& handler, QGradient::Type v);
      QGradient::Type js2cpp_QGradient_Type(RJSApi& handler, const QJSValue& v);
      bool is_QGradient_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QHeaderView_ResizeMode(RJSApi& handler, QHeaderView::ResizeMode v);
      QHeaderView::ResizeMode js2cpp_QHeaderView_ResizeMode(RJSApi& handler, const QJSValue& v);
      bool is_QHeaderView_ResizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QIODeviceBase_OpenMode(RJSApi& handler, QIODeviceBase::OpenMode v);
      QIODeviceBase::OpenMode js2cpp_QIODeviceBase_OpenMode(RJSApi& handler, const QJSValue& v);
      bool is_QIODeviceBase_OpenMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QIcon_Mode(RJSApi& handler, QIcon::Mode v);
      QIcon::Mode js2cpp_QIcon_Mode(RJSApi& handler, const QJSValue& v);
      bool is_QIcon_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QIcon_State(RJSApi& handler, QIcon::State v);
      QIcon::State js2cpp_QIcon_State(RJSApi& handler, const QJSValue& v);
      bool is_QIcon_State(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImage_Format(RJSApi& handler, QImage::Format v);
      QImage::Format js2cpp_QImage_Format(RJSApi& handler, const QJSValue& v);
      bool is_QImage_Format(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImage_InvertMode(RJSApi& handler, QImage::InvertMode v);
      QImage::InvertMode js2cpp_QImage_InvertMode(RJSApi& handler, const QJSValue& v);
      bool is_QImage_InvertMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImageIOHandler_ImageOption(RJSApi& handler, QImageIOHandler::ImageOption v);
      QImageIOHandler::ImageOption js2cpp_QImageIOHandler_ImageOption(RJSApi& handler, const QJSValue& v);
      bool is_QImageIOHandler_ImageOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImageIOHandler_Transformations(RJSApi& handler, QImageIOHandler::Transformations v);
      QImageIOHandler::Transformations js2cpp_QImageIOHandler_Transformations(RJSApi& handler, const QJSValue& v);
      bool is_QImageIOHandler_Transformations(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImageReader_ImageReaderError(RJSApi& handler, QImageReader::ImageReaderError v);
      QImageReader::ImageReaderError js2cpp_QImageReader_ImageReaderError(RJSApi& handler, const QJSValue& v);
      bool is_QImageReader_ImageReaderError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImageWriter_ImageWriterError(RJSApi& handler, QImageWriter::ImageWriterError v);
      QImageWriter::ImageWriterError js2cpp_QImageWriter_ImageWriterError(RJSApi& handler, const QJSValue& v);
      bool is_QImageWriter_ImageWriterError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QItemSelectionModel_SelectionFlag(RJSApi& handler, QItemSelectionModel::SelectionFlag v);
      QItemSelectionModel::SelectionFlag js2cpp_QItemSelectionModel_SelectionFlag(RJSApi& handler, const QJSValue& v);
      bool is_QItemSelectionModel_SelectionFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QKeySequence_SequenceFormat(RJSApi& handler, QKeySequence::SequenceFormat v);
      QKeySequence::SequenceFormat js2cpp_QKeySequence_SequenceFormat(RJSApi& handler, const QJSValue& v);
      bool is_QKeySequence_SequenceFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QKeySequence_SequenceMatch(RJSApi& handler, QKeySequence::SequenceMatch v);
      QKeySequence::SequenceMatch js2cpp_QKeySequence_SequenceMatch(RJSApi& handler, const QJSValue& v);
      bool is_QKeySequence_SequenceMatch(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QKeySequence_StandardKey(RJSApi& handler, QKeySequence::StandardKey v);
      QKeySequence::StandardKey js2cpp_QKeySequence_StandardKey(RJSApi& handler, const QJSValue& v);
      bool is_QKeySequence_StandardKey(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLayout_SizeConstraint(RJSApi& handler, QLayout::SizeConstraint v);
      QLayout::SizeConstraint js2cpp_QLayout_SizeConstraint(RJSApi& handler, const QJSValue& v);
      bool is_QLayout_SizeConstraint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLineEdit_ActionPosition(RJSApi& handler, QLineEdit::ActionPosition v);
      QLineEdit::ActionPosition js2cpp_QLineEdit_ActionPosition(RJSApi& handler, const QJSValue& v);
      bool is_QLineEdit_ActionPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLineEdit_EchoMode(RJSApi& handler, QLineEdit::EchoMode v);
      QLineEdit::EchoMode js2cpp_QLineEdit_EchoMode(RJSApi& handler, const QJSValue& v);
      bool is_QLineEdit_EchoMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListView_Flow(RJSApi& handler, QListView::Flow v);
      QListView::Flow js2cpp_QListView_Flow(RJSApi& handler, const QJSValue& v);
      bool is_QListView_Flow(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListView_LayoutMode(RJSApi& handler, QListView::LayoutMode v);
      QListView::LayoutMode js2cpp_QListView_LayoutMode(RJSApi& handler, const QJSValue& v);
      bool is_QListView_LayoutMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListView_Movement(RJSApi& handler, QListView::Movement v);
      QListView::Movement js2cpp_QListView_Movement(RJSApi& handler, const QJSValue& v);
      bool is_QListView_Movement(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListView_ResizeMode(RJSApi& handler, QListView::ResizeMode v);
      QListView::ResizeMode js2cpp_QListView_ResizeMode(RJSApi& handler, const QJSValue& v);
      bool is_QListView_ResizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListView_ViewMode(RJSApi& handler, QListView::ViewMode v);
      QListView::ViewMode js2cpp_QListView_ViewMode(RJSApi& handler, const QJSValue& v);
      bool is_QListView_ViewMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_Country(RJSApi& handler, QLocale::Country v);
      QLocale::Country js2cpp_QLocale_Country(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_Country(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_CurrencySymbolFormat(RJSApi& handler, QLocale::CurrencySymbolFormat v);
      QLocale::CurrencySymbolFormat js2cpp_QLocale_CurrencySymbolFormat(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_CurrencySymbolFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_FormatType(RJSApi& handler, QLocale::FormatType v);
      QLocale::FormatType js2cpp_QLocale_FormatType(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_FormatType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_Language(RJSApi& handler, QLocale::Language v);
      QLocale::Language js2cpp_QLocale_Language(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_Language(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_MeasurementSystem(RJSApi& handler, QLocale::MeasurementSystem v);
      QLocale::MeasurementSystem js2cpp_QLocale_MeasurementSystem(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_MeasurementSystem(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_NumberOptions(RJSApi& handler, QLocale::NumberOptions v);
      QLocale::NumberOptions js2cpp_QLocale_NumberOptions(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_NumberOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_QuotationStyle(RJSApi& handler, QLocale::QuotationStyle v);
      QLocale::QuotationStyle js2cpp_QLocale_QuotationStyle(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_QuotationStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_Script(RJSApi& handler, QLocale::Script v);
      QLocale::Script js2cpp_QLocale_Script(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_Script(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale_Territory(RJSApi& handler, QLocale::Territory v);
      QLocale::Territory js2cpp_QLocale_Territory(RJSApi& handler, const QJSValue& v);
      bool is_QLocale_Territory(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMainWindow_DockOptions(RJSApi& handler, QMainWindow::DockOptions v);
      QMainWindow::DockOptions js2cpp_QMainWindow_DockOptions(RJSApi& handler, const QJSValue& v);
      bool is_QMainWindow_DockOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMdiArea_AreaOption(RJSApi& handler, QMdiArea::AreaOption v);
      QMdiArea::AreaOption js2cpp_QMdiArea_AreaOption(RJSApi& handler, const QJSValue& v);
      bool is_QMdiArea_AreaOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMdiArea_ViewMode(RJSApi& handler, QMdiArea::ViewMode v);
      QMdiArea::ViewMode js2cpp_QMdiArea_ViewMode(RJSApi& handler, const QJSValue& v);
      bool is_QMdiArea_ViewMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMdiArea_WindowOrder(RJSApi& handler, QMdiArea::WindowOrder v);
      QMdiArea::WindowOrder js2cpp_QMdiArea_WindowOrder(RJSApi& handler, const QJSValue& v);
      bool is_QMdiArea_WindowOrder(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMdiSubWindow_SubWindowOption(RJSApi& handler, QMdiSubWindow::SubWindowOption v);
      QMdiSubWindow::SubWindowOption js2cpp_QMdiSubWindow_SubWindowOption(RJSApi& handler, const QJSValue& v);
      bool is_QMdiSubWindow_SubWindowOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMessageBox_ButtonRole(RJSApi& handler, QMessageBox::ButtonRole v);
      QMessageBox::ButtonRole js2cpp_QMessageBox_ButtonRole(RJSApi& handler, const QJSValue& v);
      bool is_QMessageBox_ButtonRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMessageBox_Icon(RJSApi& handler, QMessageBox::Icon v);
      QMessageBox::Icon js2cpp_QMessageBox_Icon(RJSApi& handler, const QJSValue& v);
      bool is_QMessageBox_Icon(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMessageBox_StandardButton(RJSApi& handler, QMessageBox::StandardButton v);
      QMessageBox::StandardButton js2cpp_QMessageBox_StandardButton(RJSApi& handler, const QJSValue& v);
      bool is_QMessageBox_StandardButton(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMetaType_Type(RJSApi& handler, QMetaType::Type v);
      QMetaType::Type js2cpp_QMetaType_Type(RJSApi& handler, const QJSValue& v);
      bool is_QMetaType_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageLayout_Mode(RJSApi& handler, QPageLayout::Mode v);
      QPageLayout::Mode js2cpp_QPageLayout_Mode(RJSApi& handler, const QJSValue& v);
      bool is_QPageLayout_Mode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageLayout_Orientation(RJSApi& handler, QPageLayout::Orientation v);
      QPageLayout::Orientation js2cpp_QPageLayout_Orientation(RJSApi& handler, const QJSValue& v);
      bool is_QPageLayout_Orientation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageLayout_Unit(RJSApi& handler, QPageLayout::Unit v);
      QPageLayout::Unit js2cpp_QPageLayout_Unit(RJSApi& handler, const QJSValue& v);
      bool is_QPageLayout_Unit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageSize_PageSizeId(RJSApi& handler, QPageSize::PageSizeId v);
      QPageSize::PageSizeId js2cpp_QPageSize_PageSizeId(RJSApi& handler, const QJSValue& v);
      bool is_QPageSize_PageSizeId(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageSize_SizeMatchPolicy(RJSApi& handler, QPageSize::SizeMatchPolicy v);
      QPageSize::SizeMatchPolicy js2cpp_QPageSize_SizeMatchPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QPageSize_SizeMatchPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageSize_Unit(RJSApi& handler, QPageSize::Unit v);
      QPageSize::Unit js2cpp_QPageSize_Unit(RJSApi& handler, const QJSValue& v);
      bool is_QPageSize_Unit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPagedPaintDevice_PdfVersion(RJSApi& handler, QPagedPaintDevice::PdfVersion v);
      QPagedPaintDevice::PdfVersion js2cpp_QPagedPaintDevice_PdfVersion(RJSApi& handler, const QJSValue& v);
      bool is_QPagedPaintDevice_PdfVersion(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPainter_CompositionMode(RJSApi& handler, QPainter::CompositionMode v);
      QPainter::CompositionMode js2cpp_QPainter_CompositionMode(RJSApi& handler, const QJSValue& v);
      bool is_QPainter_CompositionMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPainter_PixmapFragmentHint(RJSApi& handler, QPainter::PixmapFragmentHint v);
      QPainter::PixmapFragmentHint js2cpp_QPainter_PixmapFragmentHint(RJSApi& handler, const QJSValue& v);
      bool is_QPainter_PixmapFragmentHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPainter_RenderHint(RJSApi& handler, QPainter::RenderHint v);
      QPainter::RenderHint js2cpp_QPainter_RenderHint(RJSApi& handler, const QJSValue& v);
      bool is_QPainter_RenderHint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPainter_RenderHints(RJSApi& handler, QPainter::RenderHints v);
      QPainter::RenderHints js2cpp_QPainter_RenderHints(RJSApi& handler, const QJSValue& v);
      bool is_QPainter_RenderHints(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPainterPath_ElementType(RJSApi& handler, QPainterPath::ElementType v);
      QPainterPath::ElementType js2cpp_QPainterPath_ElementType(RJSApi& handler, const QJSValue& v);
      bool is_QPainterPath_ElementType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPalette_ColorGroup(RJSApi& handler, QPalette::ColorGroup v);
      QPalette::ColorGroup js2cpp_QPalette_ColorGroup(RJSApi& handler, const QJSValue& v);
      bool is_QPalette_ColorGroup(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPalette_ColorRole(RJSApi& handler, QPalette::ColorRole v);
      QPalette::ColorRole js2cpp_QPalette_ColorRole(RJSApi& handler, const QJSValue& v);
      bool is_QPalette_ColorRole(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPinchGesture_ChangeFlag(RJSApi& handler, QPinchGesture::ChangeFlag v);
      QPinchGesture::ChangeFlag js2cpp_QPinchGesture_ChangeFlag(RJSApi& handler, const QJSValue& v);
      bool is_QPinchGesture_ChangeFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPlainTextEdit_LineWrapMode(RJSApi& handler, QPlainTextEdit::LineWrapMode v);
      QPlainTextEdit::LineWrapMode js2cpp_QPlainTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v);
      bool is_QPlainTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_ColorMode(RJSApi& handler, QPrinter::ColorMode v);
      QPrinter::ColorMode js2cpp_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_DuplexMode(RJSApi& handler, QPrinter::DuplexMode v);
      QPrinter::DuplexMode js2cpp_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_OutputFormat(RJSApi& handler, QPrinter::OutputFormat v);
      QPrinter::OutputFormat js2cpp_QPrinter_OutputFormat(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_OutputFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_PageOrder(RJSApi& handler, QPrinter::PageOrder v);
      QPrinter::PageOrder js2cpp_QPrinter_PageOrder(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_PageOrder(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_PaperSource(RJSApi& handler, QPrinter::PaperSource v);
      QPrinter::PaperSource js2cpp_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_PrintRange(RJSApi& handler, QPrinter::PrintRange v);
      QPrinter::PrintRange js2cpp_QPrinter_PrintRange(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_PrintRange(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_PrinterMode(RJSApi& handler, QPrinter::PrinterMode v);
      QPrinter::PrinterMode js2cpp_QPrinter_PrinterMode(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_PrinterMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_PrinterState(RJSApi& handler, QPrinter::PrinterState v);
      QPrinter::PrinterState js2cpp_QPrinter_PrinterState(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_PrinterState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter_Unit(RJSApi& handler, QPrinter::Unit v);
      QPrinter::Unit js2cpp_QPrinter_Unit(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_Unit(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcess_ExitStatus(RJSApi& handler, QProcess::ExitStatus v);
      QProcess::ExitStatus js2cpp_QProcess_ExitStatus(RJSApi& handler, const QJSValue& v);
      bool is_QProcess_ExitStatus(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcess_InputChannelMode(RJSApi& handler, QProcess::InputChannelMode v);
      QProcess::InputChannelMode js2cpp_QProcess_InputChannelMode(RJSApi& handler, const QJSValue& v);
      bool is_QProcess_InputChannelMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcess_ProcessChannel(RJSApi& handler, QProcess::ProcessChannel v);
      QProcess::ProcessChannel js2cpp_QProcess_ProcessChannel(RJSApi& handler, const QJSValue& v);
      bool is_QProcess_ProcessChannel(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcess_ProcessChannelMode(RJSApi& handler, QProcess::ProcessChannelMode v);
      QProcess::ProcessChannelMode js2cpp_QProcess_ProcessChannelMode(RJSApi& handler, const QJSValue& v);
      bool is_QProcess_ProcessChannelMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcess_ProcessError(RJSApi& handler, QProcess::ProcessError v);
      QProcess::ProcessError js2cpp_QProcess_ProcessError(RJSApi& handler, const QJSValue& v);
      bool is_QProcess_ProcessError(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcess_ProcessState(RJSApi& handler, QProcess::ProcessState v);
      QProcess::ProcessState js2cpp_QProcess_ProcessState(RJSApi& handler, const QJSValue& v);
      bool is_QProcess_ProcessState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcessEnvironment_Initialization(RJSApi& handler, QProcessEnvironment::Initialization v);
      QProcessEnvironment::Initialization js2cpp_QProcessEnvironment_Initialization(RJSApi& handler, const QJSValue& v);
      bool is_QProcessEnvironment_Initialization(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProgressBar_Direction(RJSApi& handler, QProgressBar::Direction v);
      QProgressBar::Direction js2cpp_QProgressBar_Direction(RJSApi& handler, const QJSValue& v);
      bool is_QProgressBar_Direction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegion_RegionType(RJSApi& handler, QRegion::RegionType v);
      QRegion::RegionType js2cpp_QRegion_RegionType(RJSApi& handler, const QJSValue& v);
      bool is_QRegion_RegionType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegularExpression_MatchOptions(RJSApi& handler, QRegularExpression::MatchOptions v);
      QRegularExpression::MatchOptions js2cpp_QRegularExpression_MatchOptions(RJSApi& handler, const QJSValue& v);
      bool is_QRegularExpression_MatchOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegularExpression_MatchType(RJSApi& handler, QRegularExpression::MatchType v);
      QRegularExpression::MatchType js2cpp_QRegularExpression_MatchType(RJSApi& handler, const QJSValue& v);
      bool is_QRegularExpression_MatchType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSettings_Format(RJSApi& handler, QSettings::Format v);
      QSettings::Format js2cpp_QSettings_Format(RJSApi& handler, const QJSValue& v);
      bool is_QSettings_Format(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSettings_Scope(RJSApi& handler, QSettings::Scope v);
      QSettings::Scope js2cpp_QSettings_Scope(RJSApi& handler, const QJSValue& v);
      bool is_QSettings_Scope(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSettings_Status(RJSApi& handler, QSettings::Status v);
      QSettings::Status js2cpp_QSettings_Status(RJSApi& handler, const QJSValue& v);
      bool is_QSettings_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSizePolicy_ControlType(RJSApi& handler, QSizePolicy::ControlType v);
      QSizePolicy::ControlType js2cpp_QSizePolicy_ControlType(RJSApi& handler, const QJSValue& v);
      bool is_QSizePolicy_ControlType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSizePolicy_Policy(RJSApi& handler, QSizePolicy::Policy v);
      QSizePolicy::Policy js2cpp_QSizePolicy_Policy(RJSApi& handler, const QJSValue& v);
      bool is_QSizePolicy_Policy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSlider_TickPosition(RJSApi& handler, QSlider::TickPosition v);
      QSlider::TickPosition js2cpp_QSlider_TickPosition(RJSApi& handler, const QJSValue& v);
      bool is_QSlider_TickPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStackedLayout_StackingMode(RJSApi& handler, QStackedLayout::StackingMode v);
      QStackedLayout::StackingMode js2cpp_QStackedLayout_StackingMode(RJSApi& handler, const QJSValue& v);
      bool is_QStackedLayout_StackingMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QString(RJSApi& handler, const QString& v);
      QString js2cpp_QString(RJSApi& handler, const QJSValue& v);
      bool is_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStringView(RJSApi& handler, QStringView v);
      QStringView js2cpp_QStringView(RJSApi& handler, const QJSValue& v);
      bool is_QStringView(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStringConverter_Encoding(RJSApi& handler, QStringConverter::Encoding v);
      QStringConverter::Encoding js2cpp_QStringConverter_Encoding(RJSApi& handler, const QJSValue& v);
      bool is_QStringConverter_Encoding(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSwipeGesture_SwipeDirection(RJSApi& handler, QSwipeGesture::SwipeDirection v);
      QSwipeGesture::SwipeDirection js2cpp_QSwipeGesture_SwipeDirection(RJSApi& handler, const QJSValue& v);
      bool is_QSwipeGesture_SwipeDirection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTabBar_ButtonPosition(RJSApi& handler, QTabBar::ButtonPosition v);
      QTabBar::ButtonPosition js2cpp_QTabBar_ButtonPosition(RJSApi& handler, const QJSValue& v);
      bool is_QTabBar_ButtonPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTabBar_SelectionBehavior(RJSApi& handler, QTabBar::SelectionBehavior v);
      QTabBar::SelectionBehavior js2cpp_QTabBar_SelectionBehavior(RJSApi& handler, const QJSValue& v);
      bool is_QTabBar_SelectionBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTabBar_Shape(RJSApi& handler, QTabBar::Shape v);
      QTabBar::Shape js2cpp_QTabBar_Shape(RJSApi& handler, const QJSValue& v);
      bool is_QTabBar_Shape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTabWidget_TabPosition(RJSApi& handler, QTabWidget::TabPosition v);
      QTabWidget::TabPosition js2cpp_QTabWidget_TabPosition(RJSApi& handler, const QJSValue& v);
      bool is_QTabWidget_TabPosition(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTabWidget_TabShape(RJSApi& handler, QTabWidget::TabShape v);
      QTabWidget::TabShape js2cpp_QTabWidget_TabShape(RJSApi& handler, const QJSValue& v);
      bool is_QTabWidget_TabShape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCharFormat_FontPropertiesInheritanceBehavior(RJSApi& handler, QTextCharFormat::FontPropertiesInheritanceBehavior v);
      QTextCharFormat::FontPropertiesInheritanceBehavior js2cpp_QTextCharFormat_FontPropertiesInheritanceBehavior(RJSApi& handler, const QJSValue& v);
      bool is_QTextCharFormat_FontPropertiesInheritanceBehavior(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCharFormat_UnderlineStyle(RJSApi& handler, QTextCharFormat::UnderlineStyle v);
      QTextCharFormat::UnderlineStyle js2cpp_QTextCharFormat_UnderlineStyle(RJSApi& handler, const QJSValue& v);
      bool is_QTextCharFormat_UnderlineStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCharFormat_VerticalAlignment(RJSApi& handler, QTextCharFormat::VerticalAlignment v);
      QTextCharFormat::VerticalAlignment js2cpp_QTextCharFormat_VerticalAlignment(RJSApi& handler, const QJSValue& v);
      bool is_QTextCharFormat_VerticalAlignment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCursor_MoveMode(RJSApi& handler, QTextCursor::MoveMode v);
      QTextCursor::MoveMode js2cpp_QTextCursor_MoveMode(RJSApi& handler, const QJSValue& v);
      bool is_QTextCursor_MoveMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCursor_MoveOperation(RJSApi& handler, QTextCursor::MoveOperation v);
      QTextCursor::MoveOperation js2cpp_QTextCursor_MoveOperation(RJSApi& handler, const QJSValue& v);
      bool is_QTextCursor_MoveOperation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCursor_SelectionType(RJSApi& handler, QTextCursor::SelectionType v);
      QTextCursor::SelectionType js2cpp_QTextCursor_SelectionType(RJSApi& handler, const QJSValue& v);
      bool is_QTextCursor_SelectionType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextDocument_FindFlag(RJSApi& handler, QTextDocument::FindFlag v);
      QTextDocument::FindFlag js2cpp_QTextDocument_FindFlag(RJSApi& handler, const QJSValue& v);
      bool is_QTextDocument_FindFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextDocument_MarkdownFeatures(RJSApi& handler, QTextDocument::MarkdownFeatures v);
      QTextDocument::MarkdownFeatures js2cpp_QTextDocument_MarkdownFeatures(RJSApi& handler, const QJSValue& v);
      bool is_QTextDocument_MarkdownFeatures(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextDocument_MetaInformation(RJSApi& handler, QTextDocument::MetaInformation v);
      QTextDocument::MetaInformation js2cpp_QTextDocument_MetaInformation(RJSApi& handler, const QJSValue& v);
      bool is_QTextDocument_MetaInformation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextDocument_ResourceType(RJSApi& handler, QTextDocument::ResourceType v);
      QTextDocument::ResourceType js2cpp_QTextDocument_ResourceType(RJSApi& handler, const QJSValue& v);
      bool is_QTextDocument_ResourceType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextDocument_Stacks(RJSApi& handler, QTextDocument::Stacks v);
      QTextDocument::Stacks js2cpp_QTextDocument_Stacks(RJSApi& handler, const QJSValue& v);
      bool is_QTextDocument_Stacks(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextEdit_AutoFormattingFlag(RJSApi& handler, QTextEdit::AutoFormattingFlag v);
      QTextEdit::AutoFormattingFlag js2cpp_QTextEdit_AutoFormattingFlag(RJSApi& handler, const QJSValue& v);
      bool is_QTextEdit_AutoFormattingFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextEdit_LineWrapMode(RJSApi& handler, QTextEdit::LineWrapMode v);
      QTextEdit::LineWrapMode js2cpp_QTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v);
      bool is_QTextEdit_LineWrapMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextFrameFormat_BorderStyle(RJSApi& handler, QTextFrameFormat::BorderStyle v);
      QTextFrameFormat::BorderStyle js2cpp_QTextFrameFormat_BorderStyle(RJSApi& handler, const QJSValue& v);
      bool is_QTextFrameFormat_BorderStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextFrameFormat_Position(RJSApi& handler, QTextFrameFormat::Position v);
      QTextFrameFormat::Position js2cpp_QTextFrameFormat_Position(RJSApi& handler, const QJSValue& v);
      bool is_QTextFrameFormat_Position(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextLayout_CursorMode(RJSApi& handler, QTextLayout::CursorMode v);
      QTextLayout::CursorMode js2cpp_QTextLayout_CursorMode(RJSApi& handler, const QJSValue& v);
      bool is_QTextLayout_CursorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextLength_Type(RJSApi& handler, QTextLength::Type v);
      QTextLength::Type js2cpp_QTextLength_Type(RJSApi& handler, const QJSValue& v);
      bool is_QTextLength_Type(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextListFormat_Style(RJSApi& handler, QTextListFormat::Style v);
      QTextListFormat::Style js2cpp_QTextListFormat_Style(RJSApi& handler, const QJSValue& v);
      bool is_QTextListFormat_Style(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextOption_WrapMode(RJSApi& handler, QTextOption::WrapMode v);
      QTextOption::WrapMode js2cpp_QTextOption_WrapMode(RJSApi& handler, const QJSValue& v);
      bool is_QTextOption_WrapMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextStream_FieldAlignment(RJSApi& handler, QTextStream::FieldAlignment v);
      QTextStream::FieldAlignment js2cpp_QTextStream_FieldAlignment(RJSApi& handler, const QJSValue& v);
      bool is_QTextStream_FieldAlignment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextStream_NumberFlags(RJSApi& handler, QTextStream::NumberFlags v);
      QTextStream::NumberFlags js2cpp_QTextStream_NumberFlags(RJSApi& handler, const QJSValue& v);
      bool is_QTextStream_NumberFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextStream_RealNumberNotation(RJSApi& handler, QTextStream::RealNumberNotation v);
      QTextStream::RealNumberNotation js2cpp_QTextStream_RealNumberNotation(RJSApi& handler, const QJSValue& v);
      bool is_QTextStream_RealNumberNotation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextStream_Status(RJSApi& handler, QTextStream::Status v);
      QTextStream::Status js2cpp_QTextStream_Status(RJSApi& handler, const QJSValue& v);
      bool is_QTextStream_Status(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QToolButton_ToolButtonPopupMode(RJSApi& handler, QToolButton::ToolButtonPopupMode v);
      QToolButton::ToolButtonPopupMode js2cpp_QToolButton_ToolButtonPopupMode(RJSApi& handler, const QJSValue& v);
      bool is_QToolButton_ToolButtonPopupMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTransform_TransformationType(RJSApi& handler, QTransform::TransformationType v);
      QTransform::TransformationType js2cpp_QTransform_TransformationType(RJSApi& handler, const QJSValue& v);
      bool is_QTransform_TransformationType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTreeWidgetItem_ChildIndicatorPolicy(RJSApi& handler, QTreeWidgetItem::ChildIndicatorPolicy v);
      QTreeWidgetItem::ChildIndicatorPolicy js2cpp_QTreeWidgetItem_ChildIndicatorPolicy(RJSApi& handler, const QJSValue& v);
      bool is_QTreeWidgetItem_ChildIndicatorPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl_ComponentFormattingOption(RJSApi& handler, QUrl::ComponentFormattingOption v);
      QUrl::ComponentFormattingOption js2cpp_QUrl_ComponentFormattingOption(RJSApi& handler, const QJSValue& v);
      bool is_QUrl_ComponentFormattingOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl_ParsingMode(RJSApi& handler, QUrl::ParsingMode v);
      QUrl::ParsingMode js2cpp_QUrl_ParsingMode(RJSApi& handler, const QJSValue& v);
      bool is_QUrl_ParsingMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl_UrlFormattingOption(RJSApi& handler, QUrl::UrlFormattingOption v);
      QUrl::UrlFormattingOption js2cpp_QUrl_UrlFormattingOption(RJSApi& handler, const QJSValue& v);
      bool is_QUrl_UrlFormattingOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl_UserInputResolutionOption(RJSApi& handler, QUrl::UserInputResolutionOption v);
      QUrl::UserInputResolutionOption js2cpp_QUrl_UserInputResolutionOption(RJSApi& handler, const QJSValue& v);
      bool is_QUrl_UserInputResolutionOption(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QValidator_State(RJSApi& handler, QValidator::State v);
      QValidator::State js2cpp_QValidator_State(RJSApi& handler, const QJSValue& v);
      bool is_QValidator_State(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWidget_RenderFlags(RJSApi& handler, QWidget::RenderFlags v);
      QWidget::RenderFlags js2cpp_QWidget_RenderFlags(RJSApi& handler, const QJSValue& v);
      bool is_QWidget_RenderFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWindow_AncestorMode(RJSApi& handler, QWindow::AncestorMode v);
      QWindow::AncestorMode js2cpp_QWindow_AncestorMode(RJSApi& handler, const QJSValue& v);
      bool is_QWindow_AncestorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWindow_Visibility(RJSApi& handler, QWindow::Visibility v);
      QWindow::Visibility js2cpp_QWindow_Visibility(RJSApi& handler, const QJSValue& v);
      bool is_QWindow_Visibility(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlStreamReader_Error(RJSApi& handler, QXmlStreamReader::Error v);
      QXmlStreamReader::Error js2cpp_QXmlStreamReader_Error(RJSApi& handler, const QJSValue& v);
      bool is_QXmlStreamReader_Error(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlStreamReader_ReadElementTextBehaviour(RJSApi& handler, QXmlStreamReader::ReadElementTextBehaviour v);
      QXmlStreamReader::ReadElementTextBehaviour js2cpp_QXmlStreamReader_ReadElementTextBehaviour(RJSApi& handler, const QJSValue& v);
      bool is_QXmlStreamReader_ReadElementTextBehaviour(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlStreamReader_TokenType(RJSApi& handler, QXmlStreamReader::TokenType v);
      QXmlStreamReader::TokenType js2cpp_QXmlStreamReader_TokenType(RJSApi& handler, const QJSValue& v);
      bool is_QXmlStreamReader_TokenType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_AlignmentFlag(RJSApi& handler, Qt::AlignmentFlag v);
      Qt::AlignmentFlag js2cpp_Qt_AlignmentFlag(RJSApi& handler, const QJSValue& v);
      bool is_Qt_AlignmentFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ApplicationAttribute(RJSApi& handler, Qt::ApplicationAttribute v);
      Qt::ApplicationAttribute js2cpp_Qt_ApplicationAttribute(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ApplicationAttribute(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ApplicationState(RJSApi& handler, Qt::ApplicationState v);
      Qt::ApplicationState js2cpp_Qt_ApplicationState(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ApplicationState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ArrowType(RJSApi& handler, Qt::ArrowType v);
      Qt::ArrowType js2cpp_Qt_ArrowType(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ArrowType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_AspectRatioMode(RJSApi& handler, Qt::AspectRatioMode v);
      Qt::AspectRatioMode js2cpp_Qt_AspectRatioMode(RJSApi& handler, const QJSValue& v);
      bool is_Qt_AspectRatioMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Axis(RJSApi& handler, Qt::Axis v);
      Qt::Axis js2cpp_Qt_Axis(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Axis(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_BGMode(RJSApi& handler, Qt::BGMode v);
      Qt::BGMode js2cpp_Qt_BGMode(RJSApi& handler, const QJSValue& v);
      bool is_Qt_BGMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_BrushStyle(RJSApi& handler, Qt::BrushStyle v);
      Qt::BrushStyle js2cpp_Qt_BrushStyle(RJSApi& handler, const QJSValue& v);
      bool is_Qt_BrushStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_CaseSensitivity(RJSApi& handler, Qt::CaseSensitivity v);
      Qt::CaseSensitivity js2cpp_Qt_CaseSensitivity(RJSApi& handler, const QJSValue& v);
      bool is_Qt_CaseSensitivity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_CheckState(RJSApi& handler, Qt::CheckState v);
      Qt::CheckState js2cpp_Qt_CheckState(RJSApi& handler, const QJSValue& v);
      bool is_Qt_CheckState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ClipOperation(RJSApi& handler, Qt::ClipOperation v);
      Qt::ClipOperation js2cpp_Qt_ClipOperation(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ClipOperation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ContextMenuPolicy(RJSApi& handler, Qt::ContextMenuPolicy v);
      Qt::ContextMenuPolicy js2cpp_Qt_ContextMenuPolicy(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ContextMenuPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Corner(RJSApi& handler, Qt::Corner v);
      Qt::Corner js2cpp_Qt_Corner(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Corner(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_CursorMoveStyle(RJSApi& handler, Qt::CursorMoveStyle v);
      Qt::CursorMoveStyle js2cpp_Qt_CursorMoveStyle(RJSApi& handler, const QJSValue& v);
      bool is_Qt_CursorMoveStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_CursorShape(RJSApi& handler, Qt::CursorShape v);
      Qt::CursorShape js2cpp_Qt_CursorShape(RJSApi& handler, const QJSValue& v);
      bool is_Qt_CursorShape(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_DateFormat(RJSApi& handler, Qt::DateFormat v);
      Qt::DateFormat js2cpp_Qt_DateFormat(RJSApi& handler, const QJSValue& v);
      bool is_Qt_DateFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_DayOfWeek(RJSApi& handler, Qt::DayOfWeek v);
      Qt::DayOfWeek js2cpp_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v);
      bool is_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_DockWidgetArea(RJSApi& handler, Qt::DockWidgetArea v);
      Qt::DockWidgetArea js2cpp_Qt_DockWidgetArea(RJSApi& handler, const QJSValue& v);
      bool is_Qt_DockWidgetArea(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_DockWidgetAreas(RJSApi& handler, Qt::DockWidgetAreas v);
      Qt::DockWidgetAreas js2cpp_Qt_DockWidgetAreas(RJSApi& handler, const QJSValue& v);
      bool is_Qt_DockWidgetAreas(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_DropAction(RJSApi& handler, Qt::DropAction v);
      Qt::DropAction js2cpp_Qt_DropAction(RJSApi& handler, const QJSValue& v);
      bool is_Qt_DropAction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Edge(RJSApi& handler, Qt::Edge v);
      Qt::Edge js2cpp_Qt_Edge(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Edge(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_FillRule(RJSApi& handler, Qt::FillRule v);
      Qt::FillRule js2cpp_Qt_FillRule(RJSApi& handler, const QJSValue& v);
      bool is_Qt_FillRule(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_FindChildOptions(RJSApi& handler, Qt::FindChildOptions v);
      Qt::FindChildOptions js2cpp_Qt_FindChildOptions(RJSApi& handler, const QJSValue& v);
      bool is_Qt_FindChildOptions(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_FocusPolicy(RJSApi& handler, Qt::FocusPolicy v);
      Qt::FocusPolicy js2cpp_Qt_FocusPolicy(RJSApi& handler, const QJSValue& v);
      bool is_Qt_FocusPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_FocusReason(RJSApi& handler, Qt::FocusReason v);
      Qt::FocusReason js2cpp_Qt_FocusReason(RJSApi& handler, const QJSValue& v);
      bool is_Qt_FocusReason(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_GestureFlags(RJSApi& handler, Qt::GestureFlags v);
      Qt::GestureFlags js2cpp_Qt_GestureFlags(RJSApi& handler, const QJSValue& v);
      bool is_Qt_GestureFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_GestureState(RJSApi& handler, Qt::GestureState v);
      Qt::GestureState js2cpp_Qt_GestureState(RJSApi& handler, const QJSValue& v);
      bool is_Qt_GestureState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_GestureType(RJSApi& handler, Qt::GestureType v);
      Qt::GestureType js2cpp_Qt_GestureType(RJSApi& handler, const QJSValue& v);
      bool is_Qt_GestureType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_GlobalColor(RJSApi& handler, Qt::GlobalColor v);
      Qt::GlobalColor js2cpp_Qt_GlobalColor(RJSApi& handler, const QJSValue& v);
      bool is_Qt_GlobalColor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ImageConversionFlags(RJSApi& handler, Qt::ImageConversionFlags v);
      Qt::ImageConversionFlags js2cpp_Qt_ImageConversionFlags(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ImageConversionFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_InputMethodQuery(RJSApi& handler, Qt::InputMethodQuery v);
      Qt::InputMethodQuery js2cpp_Qt_InputMethodQuery(RJSApi& handler, const QJSValue& v);
      bool is_Qt_InputMethodQuery(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ItemFlag(RJSApi& handler, Qt::ItemFlag v);
      Qt::ItemFlag js2cpp_Qt_ItemFlag(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ItemFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Key(RJSApi& handler, Qt::Key v);
      Qt::Key js2cpp_Qt_Key(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Key(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_LayoutDirection(RJSApi& handler, Qt::LayoutDirection v);
      Qt::LayoutDirection js2cpp_Qt_LayoutDirection(RJSApi& handler, const QJSValue& v);
      bool is_Qt_LayoutDirection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_MaskMode(RJSApi& handler, Qt::MaskMode v);
      Qt::MaskMode js2cpp_Qt_MaskMode(RJSApi& handler, const QJSValue& v);
      bool is_Qt_MaskMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_MatchFlags(RJSApi& handler, Qt::MatchFlags v);
      Qt::MatchFlags js2cpp_Qt_MatchFlags(RJSApi& handler, const QJSValue& v);
      bool is_Qt_MatchFlags(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_MouseButton(RJSApi& handler, Qt::MouseButton v);
      Qt::MouseButton js2cpp_Qt_MouseButton(RJSApi& handler, const QJSValue& v);
      bool is_Qt_MouseButton(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_MouseEventSource(RJSApi& handler, Qt::MouseEventSource v);
      Qt::MouseEventSource js2cpp_Qt_MouseEventSource(RJSApi& handler, const QJSValue& v);
      bool is_Qt_MouseEventSource(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_NavigationMode(RJSApi& handler, Qt::NavigationMode v);
      Qt::NavigationMode js2cpp_Qt_NavigationMode(RJSApi& handler, const QJSValue& v);
      bool is_Qt_NavigationMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_Orientation(RJSApi& handler, Qt::Orientation v);
      Qt::Orientation js2cpp_Qt_Orientation(RJSApi& handler, const QJSValue& v);
      bool is_Qt_Orientation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_PenCapStyle(RJSApi& handler, Qt::PenCapStyle v);
      Qt::PenCapStyle js2cpp_Qt_PenCapStyle(RJSApi& handler, const QJSValue& v);
      bool is_Qt_PenCapStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_PenJoinStyle(RJSApi& handler, Qt::PenJoinStyle v);
      Qt::PenJoinStyle js2cpp_Qt_PenJoinStyle(RJSApi& handler, const QJSValue& v);
      bool is_Qt_PenJoinStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_PenStyle(RJSApi& handler, Qt::PenStyle v);
      Qt::PenStyle js2cpp_Qt_PenStyle(RJSApi& handler, const QJSValue& v);
      bool is_Qt_PenStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ReturnByValueConstant(RJSApi& handler, Qt::ReturnByValueConstant v);
      Qt::ReturnByValueConstant js2cpp_Qt_ReturnByValueConstant(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ReturnByValueConstant(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ScreenOrientation(RJSApi& handler, Qt::ScreenOrientation v);
      Qt::ScreenOrientation js2cpp_Qt_ScreenOrientation(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ScreenOrientation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ScrollBarPolicy(RJSApi& handler, Qt::ScrollBarPolicy v);
      Qt::ScrollBarPolicy js2cpp_Qt_ScrollBarPolicy(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ScrollBarPolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ScrollPhase(RJSApi& handler, Qt::ScrollPhase v);
      Qt::ScrollPhase js2cpp_Qt_ScrollPhase(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ScrollPhase(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ShortcutContext(RJSApi& handler, Qt::ShortcutContext v);
      Qt::ShortcutContext js2cpp_Qt_ShortcutContext(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ShortcutContext(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_SizeMode(RJSApi& handler, Qt::SizeMode v);
      Qt::SizeMode js2cpp_Qt_SizeMode(RJSApi& handler, const QJSValue& v);
      bool is_Qt_SizeMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_SortOrder(RJSApi& handler, Qt::SortOrder v);
      Qt::SortOrder js2cpp_Qt_SortOrder(RJSApi& handler, const QJSValue& v);
      bool is_Qt_SortOrder(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_TextElideMode(RJSApi& handler, Qt::TextElideMode v);
      Qt::TextElideMode js2cpp_Qt_TextElideMode(RJSApi& handler, const QJSValue& v);
      bool is_Qt_TextElideMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_TextFormat(RJSApi& handler, Qt::TextFormat v);
      Qt::TextFormat js2cpp_Qt_TextFormat(RJSApi& handler, const QJSValue& v);
      bool is_Qt_TextFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_TextInteractionFlag(RJSApi& handler, Qt::TextInteractionFlag v);
      Qt::TextInteractionFlag js2cpp_Qt_TextInteractionFlag(RJSApi& handler, const QJSValue& v);
      bool is_Qt_TextInteractionFlag(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_TimeSpec(RJSApi& handler, Qt::TimeSpec v);
      Qt::TimeSpec js2cpp_Qt_TimeSpec(RJSApi& handler, const QJSValue& v);
      bool is_Qt_TimeSpec(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_TimerType(RJSApi& handler, Qt::TimerType v);
      Qt::TimerType js2cpp_Qt_TimerType(RJSApi& handler, const QJSValue& v);
      bool is_Qt_TimerType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ToolBarArea(RJSApi& handler, Qt::ToolBarArea v);
      Qt::ToolBarArea js2cpp_Qt_ToolBarArea(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ToolBarArea(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ToolBarAreas(RJSApi& handler, Qt::ToolBarAreas v);
      Qt::ToolBarAreas js2cpp_Qt_ToolBarAreas(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ToolBarAreas(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_ToolButtonStyle(RJSApi& handler, Qt::ToolButtonStyle v);
      Qt::ToolButtonStyle js2cpp_Qt_ToolButtonStyle(RJSApi& handler, const QJSValue& v);
      bool is_Qt_ToolButtonStyle(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_TransformationMode(RJSApi& handler, Qt::TransformationMode v);
      Qt::TransformationMode js2cpp_Qt_TransformationMode(RJSApi& handler, const QJSValue& v);
      bool is_Qt_TransformationMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_WidgetAttribute(RJSApi& handler, Qt::WidgetAttribute v);
      Qt::WidgetAttribute js2cpp_Qt_WidgetAttribute(RJSApi& handler, const QJSValue& v);
      bool is_Qt_WidgetAttribute(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_WindowModality(RJSApi& handler, Qt::WindowModality v);
      Qt::WindowModality js2cpp_Qt_WindowModality(RJSApi& handler, const QJSValue& v);
      bool is_Qt_WindowModality(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_WindowState(RJSApi& handler, Qt::WindowState v);
      Qt::WindowState js2cpp_Qt_WindowState(RJSApi& handler, const QJSValue& v);
      bool is_Qt_WindowState(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_Qt_WindowType(RJSApi& handler, Qt::WindowType v);
      Qt::WindowType js2cpp_Qt_WindowType(RJSApi& handler, const QJSValue& v);
      bool is_Qt_WindowType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_char(RJSApi& handler, char v);
      char js2cpp_char(RJSApi& handler, const QJSValue& v);
      bool is_char(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_double(RJSApi& handler, double v);
      double js2cpp_double(RJSApi& handler, const QJSValue& v);
      bool is_double(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_float(RJSApi& handler, float v);
      float js2cpp_float(RJSApi& handler, const QJSValue& v);
      bool is_float(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_int(RJSApi& handler, int v);
      int js2cpp_int(RJSApi& handler, const QJSValue& v);
      bool is_int(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_long(RJSApi& handler, long v);
      long js2cpp_long(RJSApi& handler, const QJSValue& v);
      bool is_long(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_qint64(RJSApi& handler, qint64 v);
      qint64 js2cpp_qint64(RJSApi& handler, const QJSValue& v);
      bool is_qint64(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_qlonglong(RJSApi& handler, qlonglong v);
      qlonglong js2cpp_qlonglong(RJSApi& handler, const QJSValue& v);
      bool is_qlonglong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_qreal(RJSApi& handler, qreal v);
      qreal js2cpp_qreal(RJSApi& handler, const QJSValue& v);
      bool is_qreal(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_qsizetype(RJSApi& handler, qsizetype v);
      qsizetype js2cpp_qsizetype(RJSApi& handler, const QJSValue& v);
      bool is_qsizetype(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_quint16(RJSApi& handler, quint16 v);
      quint16 js2cpp_quint16(RJSApi& handler, const QJSValue& v);
      bool is_quint16(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_quint32(RJSApi& handler, quint32 v);
      quint32 js2cpp_quint32(RJSApi& handler, const QJSValue& v);
      bool is_quint32(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_quint64(RJSApi& handler, quint64 v);
      quint64 js2cpp_quint64(RJSApi& handler, const QJSValue& v);
      bool is_quint64(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_qulonglong(RJSApi& handler, qulonglong v);
      qulonglong js2cpp_qulonglong(RJSApi& handler, const QJSValue& v);
      bool is_qulonglong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_short(RJSApi& handler, short v);
      short js2cpp_short(RJSApi& handler, const QJSValue& v);
      bool is_short(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_uint(RJSApi& handler, uint v);
      uint js2cpp_uint(RJSApi& handler, const QJSValue& v);
      bool is_uint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_ulong(RJSApi& handler, ulong v);
      ulong js2cpp_ulong(RJSApi& handler, const QJSValue& v);
      bool is_ulong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_unsignedlong(RJSApi& handler, unsigned long v);
      unsigned long js2cpp_unsignedlong(RJSApi& handler, const QJSValue& v);
      bool is_unsignedlong(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_ushort(RJSApi& handler, ushort v);
      ushort js2cpp_ushort(RJSApi& handler, const QJSValue& v);
      bool is_ushort(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------------------------------
  // QSharedPointer types (non-copyable):
  // ------------------------------------
  
      QJSValue cpp2js_QSharedPointer_QTextLayout(RJSApi& handler, const QSharedPointer<QTextLayout>& v);
      QSharedPointer<QTextLayout> js2cpp_QSharedPointer_QTextLayout(RJSApi& handler, const QJSValue& v);
      bool is_QSharedPointer_QTextLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------
  // wrapped types:
  // --------------
  
      QJSValue cpp2js_QSurfaceFormat(RJSApi& handler, const QSurfaceFormat* v);
      QJSValue cpp2js_QSurfaceFormat(RJSApi& handler, const QSurfaceFormat& v);
      QSurfaceFormat js2cpp_QSurfaceFormat(RJSApi& handler, const QJSValue& v);
      bool is_QSurfaceFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QBitmap(RJSApi& handler, const QBitmap* v);
      QJSValue cpp2js_QBitmap(RJSApi& handler, const QBitmap& v);
      QBitmap js2cpp_QBitmap(RJSApi& handler, const QJSValue& v);
      bool is_QBitmap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QBrush(RJSApi& handler, const QBrush* v);
      QJSValue cpp2js_QBrush(RJSApi& handler, const QBrush& v);
      QBrush js2cpp_QBrush(RJSApi& handler, const QJSValue& v);
      bool is_QBrush(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QByteArray(RJSApi& handler, const QByteArray* v);
      QJSValue cpp2js_QByteArray(RJSApi& handler, const QByteArray& v);
      QByteArray js2cpp_QByteArray(RJSApi& handler, const QJSValue& v);
      bool is_QByteArray(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QColor(RJSApi& handler, const QColor* v);
      QJSValue cpp2js_QColor(RJSApi& handler, const QColor& v);
      QColor js2cpp_QColor(RJSApi& handler, const QJSValue& v);
      bool is_QColor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QConicalGradient(RJSApi& handler, const QConicalGradient* v);
      QJSValue cpp2js_QConicalGradient(RJSApi& handler, const QConicalGradient& v);
      QConicalGradient js2cpp_QConicalGradient(RJSApi& handler, const QJSValue& v);
      bool is_QConicalGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QCursor(RJSApi& handler, const QCursor* v);
      QJSValue cpp2js_QCursor(RJSApi& handler, const QCursor& v);
      QCursor js2cpp_QCursor(RJSApi& handler, const QJSValue& v);
      bool is_QCursor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDate(RJSApi& handler, const QDate* v);
      QJSValue cpp2js_QDate(RJSApi& handler, const QDate& v);
      QDate js2cpp_QDate(RJSApi& handler, const QJSValue& v);
      bool is_QDate(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDateTime(RJSApi& handler, const QDateTime* v);
      QJSValue cpp2js_QDateTime(RJSApi& handler, const QDateTime& v);
      QDateTime js2cpp_QDateTime(RJSApi& handler, const QJSValue& v);
      bool is_QDateTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDesktopServices(RJSApi& handler, const QDesktopServices* v);
      QJSValue cpp2js_QDesktopServices(RJSApi& handler, const QDesktopServices& v);
      QDesktopServices js2cpp_QDesktopServices(RJSApi& handler, const QJSValue& v);
      bool is_QDesktopServices(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDir(RJSApi& handler, const QDir* v);
      QJSValue cpp2js_QDir(RJSApi& handler, const QDir& v);
      QDir js2cpp_QDir(RJSApi& handler, const QJSValue& v);
      bool is_QDir(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomAttr(RJSApi& handler, const QDomAttr* v);
      QJSValue cpp2js_QDomAttr(RJSApi& handler, const QDomAttr& v);
      QDomAttr js2cpp_QDomAttr(RJSApi& handler, const QJSValue& v);
      bool is_QDomAttr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomCDATASection(RJSApi& handler, const QDomCDATASection* v);
      QJSValue cpp2js_QDomCDATASection(RJSApi& handler, const QDomCDATASection& v);
      QDomCDATASection js2cpp_QDomCDATASection(RJSApi& handler, const QJSValue& v);
      bool is_QDomCDATASection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomCharacterData(RJSApi& handler, const QDomCharacterData* v);
      QJSValue cpp2js_QDomCharacterData(RJSApi& handler, const QDomCharacterData& v);
      QDomCharacterData js2cpp_QDomCharacterData(RJSApi& handler, const QJSValue& v);
      bool is_QDomCharacterData(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomComment(RJSApi& handler, const QDomComment* v);
      QJSValue cpp2js_QDomComment(RJSApi& handler, const QDomComment& v);
      QDomComment js2cpp_QDomComment(RJSApi& handler, const QJSValue& v);
      bool is_QDomComment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomDocument(RJSApi& handler, const QDomDocument* v);
      QJSValue cpp2js_QDomDocument(RJSApi& handler, const QDomDocument& v);
      QDomDocument js2cpp_QDomDocument(RJSApi& handler, const QJSValue& v);
      bool is_QDomDocument(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomDocumentFragment(RJSApi& handler, const QDomDocumentFragment* v);
      QJSValue cpp2js_QDomDocumentFragment(RJSApi& handler, const QDomDocumentFragment& v);
      QDomDocumentFragment js2cpp_QDomDocumentFragment(RJSApi& handler, const QJSValue& v);
      bool is_QDomDocumentFragment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomDocumentType(RJSApi& handler, const QDomDocumentType* v);
      QJSValue cpp2js_QDomDocumentType(RJSApi& handler, const QDomDocumentType& v);
      QDomDocumentType js2cpp_QDomDocumentType(RJSApi& handler, const QJSValue& v);
      bool is_QDomDocumentType(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomElement(RJSApi& handler, const QDomElement* v);
      QJSValue cpp2js_QDomElement(RJSApi& handler, const QDomElement& v);
      QDomElement js2cpp_QDomElement(RJSApi& handler, const QJSValue& v);
      bool is_QDomElement(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomEntity(RJSApi& handler, const QDomEntity* v);
      QJSValue cpp2js_QDomEntity(RJSApi& handler, const QDomEntity& v);
      QDomEntity js2cpp_QDomEntity(RJSApi& handler, const QJSValue& v);
      bool is_QDomEntity(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomEntityReference(RJSApi& handler, const QDomEntityReference* v);
      QJSValue cpp2js_QDomEntityReference(RJSApi& handler, const QDomEntityReference& v);
      QDomEntityReference js2cpp_QDomEntityReference(RJSApi& handler, const QJSValue& v);
      bool is_QDomEntityReference(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomImplementation(RJSApi& handler, const QDomImplementation* v);
      QJSValue cpp2js_QDomImplementation(RJSApi& handler, const QDomImplementation& v);
      QDomImplementation js2cpp_QDomImplementation(RJSApi& handler, const QJSValue& v);
      bool is_QDomImplementation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomNamedNodeMap(RJSApi& handler, const QDomNamedNodeMap* v);
      QJSValue cpp2js_QDomNamedNodeMap(RJSApi& handler, const QDomNamedNodeMap& v);
      QDomNamedNodeMap js2cpp_QDomNamedNodeMap(RJSApi& handler, const QJSValue& v);
      bool is_QDomNamedNodeMap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomNode(RJSApi& handler, const QDomNode* v);
      QJSValue cpp2js_QDomNode(RJSApi& handler, const QDomNode& v);
      QDomNode js2cpp_QDomNode(RJSApi& handler, const QJSValue& v);
      bool is_QDomNode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomNodeList(RJSApi& handler, const QDomNodeList* v);
      QJSValue cpp2js_QDomNodeList(RJSApi& handler, const QDomNodeList& v);
      QDomNodeList js2cpp_QDomNodeList(RJSApi& handler, const QJSValue& v);
      bool is_QDomNodeList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomNotation(RJSApi& handler, const QDomNotation* v);
      QJSValue cpp2js_QDomNotation(RJSApi& handler, const QDomNotation& v);
      QDomNotation js2cpp_QDomNotation(RJSApi& handler, const QJSValue& v);
      bool is_QDomNotation(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomProcessingInstruction(RJSApi& handler, const QDomProcessingInstruction* v);
      QJSValue cpp2js_QDomProcessingInstruction(RJSApi& handler, const QDomProcessingInstruction& v);
      QDomProcessingInstruction js2cpp_QDomProcessingInstruction(RJSApi& handler, const QJSValue& v);
      bool is_QDomProcessingInstruction(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDomText(RJSApi& handler, const QDomText* v);
      QJSValue cpp2js_QDomText(RJSApi& handler, const QDomText& v);
      QDomText js2cpp_QDomText(RJSApi& handler, const QJSValue& v);
      bool is_QDomText(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEventPoint(RJSApi& handler, const QEventPoint* v);
      QJSValue cpp2js_QEventPoint(RJSApi& handler, const QEventPoint& v);
      QEventPoint js2cpp_QEventPoint(RJSApi& handler, const QJSValue& v);
      bool is_QEventPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileInfo(RJSApi& handler, const QFileInfo* v);
      QJSValue cpp2js_QFileInfo(RJSApi& handler, const QFileInfo& v);
      QFileInfo js2cpp_QFileInfo(RJSApi& handler, const QJSValue& v);
      bool is_QFileInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFont(RJSApi& handler, const QFont* v);
      QJSValue cpp2js_QFont(RJSApi& handler, const QFont& v);
      QFont js2cpp_QFont(RJSApi& handler, const QJSValue& v);
      bool is_QFont(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontDatabase(RJSApi& handler, const QFontDatabase* v);
      QJSValue cpp2js_QFontDatabase(RJSApi& handler, const QFontDatabase& v);
      QFontDatabase js2cpp_QFontDatabase(RJSApi& handler, const QJSValue& v);
      bool is_QFontDatabase(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGradient(RJSApi& handler, const QGradient* v);
      QJSValue cpp2js_QGradient(RJSApi& handler, const QGradient& v);
      QGradient js2cpp_QGradient(RJSApi& handler, const QJSValue& v);
      bool is_QGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QIcon(RJSApi& handler, const QIcon* v);
      QJSValue cpp2js_QIcon(RJSApi& handler, const QIcon& v);
      QIcon js2cpp_QIcon(RJSApi& handler, const QJSValue& v);
      bool is_QIcon(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImage(RJSApi& handler, const QImage* v);
      QJSValue cpp2js_QImage(RJSApi& handler, const QImage& v);
      QImage js2cpp_QImage(RJSApi& handler, const QJSValue& v);
      bool is_QImage(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QItemSelection(RJSApi& handler, const QItemSelection* v);
      QJSValue cpp2js_QItemSelection(RJSApi& handler, const QItemSelection& v);
      QItemSelection js2cpp_QItemSelection(RJSApi& handler, const QJSValue& v);
      bool is_QItemSelection(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QKeyCombination(RJSApi& handler, const QKeyCombination* v);
      QJSValue cpp2js_QKeyCombination(RJSApi& handler, const QKeyCombination& v);
      QKeyCombination js2cpp_QKeyCombination(RJSApi& handler, const QJSValue& v);
      bool is_QKeyCombination(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QKeySequence(RJSApi& handler, const QKeySequence* v);
      QJSValue cpp2js_QKeySequence(RJSApi& handler, const QKeySequence& v);
      QKeySequence js2cpp_QKeySequence(RJSApi& handler, const QJSValue& v);
      bool is_QKeySequence(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLine(RJSApi& handler, const QLine* v);
      QJSValue cpp2js_QLine(RJSApi& handler, const QLine& v);
      QLine js2cpp_QLine(RJSApi& handler, const QJSValue& v);
      bool is_QLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLineF(RJSApi& handler, const QLineF* v);
      QJSValue cpp2js_QLineF(RJSApi& handler, const QLineF& v);
      QLineF js2cpp_QLineF(RJSApi& handler, const QJSValue& v);
      bool is_QLineF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLinearGradient(RJSApi& handler, const QLinearGradient* v);
      QJSValue cpp2js_QLinearGradient(RJSApi& handler, const QLinearGradient& v);
      QLinearGradient js2cpp_QLinearGradient(RJSApi& handler, const QJSValue& v);
      bool is_QLinearGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLocale(RJSApi& handler, const QLocale* v);
      QJSValue cpp2js_QLocale(RJSApi& handler, const QLocale& v);
      QLocale js2cpp_QLocale(RJSApi& handler, const QJSValue& v);
      bool is_QLocale(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEasingCurve(RJSApi& handler, const QEasingCurve* v);
      QJSValue cpp2js_QEasingCurve(RJSApi& handler, const QEasingCurve& v);
      QEasingCurve js2cpp_QEasingCurve(RJSApi& handler, const QJSValue& v);
      bool is_QEasingCurve(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMargins(RJSApi& handler, const QMargins* v);
      QJSValue cpp2js_QMargins(RJSApi& handler, const QMargins& v);
      QMargins js2cpp_QMargins(RJSApi& handler, const QJSValue& v);
      bool is_QMargins(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMarginsF(RJSApi& handler, const QMarginsF* v);
      QJSValue cpp2js_QMarginsF(RJSApi& handler, const QMarginsF& v);
      QMarginsF js2cpp_QMarginsF(RJSApi& handler, const QJSValue& v);
      bool is_QMarginsF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QModelIndex(RJSApi& handler, const QModelIndex* v);
      QJSValue cpp2js_QModelIndex(RJSApi& handler, const QModelIndex& v);
      QModelIndex js2cpp_QModelIndex(RJSApi& handler, const QJSValue& v);
      bool is_QModelIndex(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageLayout(RJSApi& handler, const QPageLayout* v);
      QJSValue cpp2js_QPageLayout(RJSApi& handler, const QPageLayout& v);
      QPageLayout js2cpp_QPageLayout(RJSApi& handler, const QJSValue& v);
      bool is_QPageLayout(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageRanges(RJSApi& handler, const QPageRanges* v);
      QJSValue cpp2js_QPageRanges(RJSApi& handler, const QPageRanges& v);
      QPageRanges js2cpp_QPageRanges(RJSApi& handler, const QJSValue& v);
      bool is_QPageRanges(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPageSize(RJSApi& handler, const QPageSize* v);
      QJSValue cpp2js_QPageSize(RJSApi& handler, const QPageSize& v);
      QPageSize js2cpp_QPageSize(RJSApi& handler, const QJSValue& v);
      bool is_QPageSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPainterPath(RJSApi& handler, const QPainterPath* v);
      QJSValue cpp2js_QPainterPath(RJSApi& handler, const QPainterPath& v);
      QPainterPath js2cpp_QPainterPath(RJSApi& handler, const QJSValue& v);
      bool is_QPainterPath(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPalette(RJSApi& handler, const QPalette* v);
      QJSValue cpp2js_QPalette(RJSApi& handler, const QPalette& v);
      QPalette js2cpp_QPalette(RJSApi& handler, const QJSValue& v);
      bool is_QPalette(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPen(RJSApi& handler, const QPen* v);
      QJSValue cpp2js_QPen(RJSApi& handler, const QPen& v);
      QPen js2cpp_QPen(RJSApi& handler, const QJSValue& v);
      bool is_QPen(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPicture(RJSApi& handler, const QPicture* v);
      QJSValue cpp2js_QPicture(RJSApi& handler, const QPicture& v);
      QPicture js2cpp_QPicture(RJSApi& handler, const QJSValue& v);
      bool is_QPicture(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPixmap(RJSApi& handler, const QPixmap* v);
      QJSValue cpp2js_QPixmap(RJSApi& handler, const QPixmap& v);
      QPixmap js2cpp_QPixmap(RJSApi& handler, const QJSValue& v);
      bool is_QPixmap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPoint(RJSApi& handler, const QPoint* v);
      QJSValue cpp2js_QPoint(RJSApi& handler, const QPoint& v);
      QPoint js2cpp_QPoint(RJSApi& handler, const QJSValue& v);
      bool is_QPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPointF(RJSApi& handler, const QPointF* v);
      QJSValue cpp2js_QPointF(RJSApi& handler, const QPointF& v);
      QPointF js2cpp_QPointF(RJSApi& handler, const QJSValue& v);
      bool is_QPointF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPolygon(RJSApi& handler, const QPolygon* v);
      QJSValue cpp2js_QPolygon(RJSApi& handler, const QPolygon& v);
      QPolygon js2cpp_QPolygon(RJSApi& handler, const QJSValue& v);
      bool is_QPolygon(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPolygonF(RJSApi& handler, const QPolygonF* v);
      QJSValue cpp2js_QPolygonF(RJSApi& handler, const QPolygonF& v);
      QPolygonF js2cpp_QPolygonF(RJSApi& handler, const QJSValue& v);
      bool is_QPolygonF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinterInfo(RJSApi& handler, const QPrinterInfo* v);
      QJSValue cpp2js_QPrinterInfo(RJSApi& handler, const QPrinterInfo& v);
      QPrinterInfo js2cpp_QPrinterInfo(RJSApi& handler, const QJSValue& v);
      bool is_QPrinterInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcessEnvironment(RJSApi& handler, const QProcessEnvironment* v);
      QJSValue cpp2js_QProcessEnvironment(RJSApi& handler, const QProcessEnvironment& v);
      QProcessEnvironment js2cpp_QProcessEnvironment(RJSApi& handler, const QJSValue& v);
      bool is_QProcessEnvironment(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRadialGradient(RJSApi& handler, const QRadialGradient* v);
      QJSValue cpp2js_QRadialGradient(RJSApi& handler, const QRadialGradient& v);
      QRadialGradient js2cpp_QRadialGradient(RJSApi& handler, const QJSValue& v);
      bool is_QRadialGradient(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRect(RJSApi& handler, const QRect* v);
      QJSValue cpp2js_QRect(RJSApi& handler, const QRect& v);
      QRect js2cpp_QRect(RJSApi& handler, const QJSValue& v);
      bool is_QRect(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRectF(RJSApi& handler, const QRectF* v);
      QJSValue cpp2js_QRectF(RJSApi& handler, const QRectF& v);
      QRectF js2cpp_QRectF(RJSApi& handler, const QJSValue& v);
      bool is_QRectF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegion(RJSApi& handler, const QRegion* v);
      QJSValue cpp2js_QRegion(RJSApi& handler, const QRegion& v);
      QRegion js2cpp_QRegion(RJSApi& handler, const QJSValue& v);
      bool is_QRegion(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegularExpression(RJSApi& handler, const QRegularExpression* v);
      QJSValue cpp2js_QRegularExpression(RJSApi& handler, const QRegularExpression& v);
      QRegularExpression js2cpp_QRegularExpression(RJSApi& handler, const QJSValue& v);
      bool is_QRegularExpression(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegularExpressionMatch(RJSApi& handler, const QRegularExpressionMatch* v);
      QJSValue cpp2js_QRegularExpressionMatch(RJSApi& handler, const QRegularExpressionMatch& v);
      QRegularExpressionMatch js2cpp_QRegularExpressionMatch(RJSApi& handler, const QJSValue& v);
      bool is_QRegularExpressionMatch(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSize(RJSApi& handler, const QSize* v);
      QJSValue cpp2js_QSize(RJSApi& handler, const QSize& v);
      QSize js2cpp_QSize(RJSApi& handler, const QJSValue& v);
      bool is_QSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSizeF(RJSApi& handler, const QSizeF* v);
      QJSValue cpp2js_QSizeF(RJSApi& handler, const QSizeF& v);
      QSizeF js2cpp_QSizeF(RJSApi& handler, const QJSValue& v);
      bool is_QSizeF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSizePolicy(RJSApi& handler, const QSizePolicy* v);
      QJSValue cpp2js_QSizePolicy(RJSApi& handler, const QSizePolicy& v);
      QSizePolicy js2cpp_QSizePolicy(RJSApi& handler, const QJSValue& v);
      bool is_QSizePolicy(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextBlockFormat(RJSApi& handler, const QTextBlockFormat* v);
      QJSValue cpp2js_QTextBlockFormat(RJSApi& handler, const QTextBlockFormat& v);
      QTextBlockFormat js2cpp_QTextBlockFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextBlockFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCharFormat(RJSApi& handler, const QTextCharFormat* v);
      QJSValue cpp2js_QTextCharFormat(RJSApi& handler, const QTextCharFormat& v);
      QTextCharFormat js2cpp_QTextCharFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextCharFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCursor(RJSApi& handler, const QTextCursor* v);
      QJSValue cpp2js_QTextCursor(RJSApi& handler, const QTextCursor& v);
      QTextCursor js2cpp_QTextCursor(RJSApi& handler, const QJSValue& v);
      bool is_QTextCursor(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextFormat(RJSApi& handler, const QTextFormat* v);
      QJSValue cpp2js_QTextFormat(RJSApi& handler, const QTextFormat& v);
      QTextFormat js2cpp_QTextFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextFrameFormat(RJSApi& handler, const QTextFrameFormat* v);
      QJSValue cpp2js_QTextFrameFormat(RJSApi& handler, const QTextFrameFormat& v);
      QTextFrameFormat js2cpp_QTextFrameFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextFrameFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextImageFormat(RJSApi& handler, const QTextImageFormat* v);
      QJSValue cpp2js_QTextImageFormat(RJSApi& handler, const QTextImageFormat& v);
      QTextImageFormat js2cpp_QTextImageFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextImageFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextLength(RJSApi& handler, const QTextLength* v);
      QJSValue cpp2js_QTextLength(RJSApi& handler, const QTextLength& v);
      QTextLength js2cpp_QTextLength(RJSApi& handler, const QJSValue& v);
      bool is_QTextLength(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextListFormat(RJSApi& handler, const QTextListFormat* v);
      QJSValue cpp2js_QTextListFormat(RJSApi& handler, const QTextListFormat& v);
      QTextListFormat js2cpp_QTextListFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextListFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextTableCellFormat(RJSApi& handler, const QTextTableCellFormat* v);
      QJSValue cpp2js_QTextTableCellFormat(RJSApi& handler, const QTextTableCellFormat& v);
      QTextTableCellFormat js2cpp_QTextTableCellFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextTableCellFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextTableFormat(RJSApi& handler, const QTextTableFormat* v);
      QJSValue cpp2js_QTextTableFormat(RJSApi& handler, const QTextTableFormat& v);
      QTextTableFormat js2cpp_QTextTableFormat(RJSApi& handler, const QJSValue& v);
      bool is_QTextTableFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTime(RJSApi& handler, const QTime* v);
      QJSValue cpp2js_QTime(RJSApi& handler, const QTime& v);
      QTime js2cpp_QTime(RJSApi& handler, const QJSValue& v);
      bool is_QTime(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTransform(RJSApi& handler, const QTransform* v);
      QJSValue cpp2js_QTransform(RJSApi& handler, const QTransform& v);
      QTransform js2cpp_QTransform(RJSApi& handler, const QJSValue& v);
      bool is_QTransform(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrl(RJSApi& handler, const QUrl* v);
      QJSValue cpp2js_QUrl(RJSApi& handler, const QUrl& v);
      QUrl js2cpp_QUrl(RJSApi& handler, const QJSValue& v);
      bool is_QUrl(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUrlQuery(RJSApi& handler, const QUrlQuery* v);
      QJSValue cpp2js_QUrlQuery(RJSApi& handler, const QUrlQuery& v);
      QUrlQuery js2cpp_QUrlQuery(RJSApi& handler, const QJSValue& v);
      bool is_QUrlQuery(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlAttributes(RJSApi& handler, const QXmlAttributes* v);
      QJSValue cpp2js_QXmlAttributes(RJSApi& handler, const QXmlAttributes& v);
      QXmlAttributes js2cpp_QXmlAttributes(RJSApi& handler, const QJSValue& v);
      bool is_QXmlAttributes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlStreamAttributes(RJSApi& handler, const QXmlStreamAttributes* v);
      QJSValue cpp2js_QXmlStreamAttributes(RJSApi& handler, const QXmlStreamAttributes& v);
      QXmlStreamAttributes js2cpp_QXmlStreamAttributes(RJSApi& handler, const QJSValue& v);
      bool is_QXmlStreamAttributes(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ----------------------
  // wrapped pointer types:
  // ----------------------
  
      QJSValue cpp2js_QAbstractFileIconProvider(RJSApi& handler, QAbstractFileIconProvider* v);
      QAbstractFileIconProvider* js2cpp_QAbstractFileIconProvider_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractFileIconProvider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractListModel(RJSApi& handler, QAbstractListModel* v);
      QAbstractListModel* js2cpp_QAbstractListModel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractListModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractTableModel(RJSApi& handler, QAbstractTableModel* v);
      QAbstractTableModel* js2cpp_QAbstractTableModel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractTableModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QCompleter(RJSApi& handler, QCompleter* v);
      QCompleter* js2cpp_QCompleter_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QCompleter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QContextMenuEvent(RJSApi& handler, QContextMenuEvent* v);
      QContextMenuEvent* js2cpp_QContextMenuEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QContextMenuEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDirIterator(RJSApi& handler, QDirIterator* v);
      QDirIterator* js2cpp_QDirIterator_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDirIterator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDragEnterEvent(RJSApi& handler, QDragEnterEvent* v);
      QDragEnterEvent* js2cpp_QDragEnterEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDragEnterEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QActionEvent(RJSApi& handler, QActionEvent* v);
      QActionEvent* js2cpp_QActionEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QActionEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDragLeaveEvent(RJSApi& handler, QDragLeaveEvent* v);
      QDragLeaveEvent* js2cpp_QDragLeaveEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDragLeaveEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDragMoveEvent(RJSApi& handler, QDragMoveEvent* v);
      QDragMoveEvent* js2cpp_QDragMoveEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDragMoveEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDropEvent(RJSApi& handler, QDropEvent* v);
      QDropEvent* js2cpp_QDropEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDropEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEvent(RJSApi& handler, QEvent* v);
      QEvent* js2cpp_QEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileIconProvider(RJSApi& handler, QFileIconProvider* v);
      QFileIconProvider* js2cpp_QFileIconProvider_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFileIconProvider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontMetrics(RJSApi& handler, QFontMetrics* v);
      QFontMetrics* js2cpp_QFontMetrics_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFontMetrics_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontMetricsF(RJSApi& handler, QFontMetricsF* v);
      QFontMetricsF* js2cpp_QFontMetricsF_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFontMetricsF_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QHelpEvent(RJSApi& handler, QHelpEvent* v);
      QHelpEvent* js2cpp_QHelpEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QHelpEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QIODeviceBase(RJSApi& handler, QIODeviceBase* v);
      QIODeviceBase* js2cpp_QIODeviceBase_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QIODeviceBase_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImageReader(RJSApi& handler, QImageReader* v);
      QImageReader* js2cpp_QImageReader_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QImageReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QImageWriter(RJSApi& handler, QImageWriter* v);
      QImageWriter* js2cpp_QImageWriter_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QImageWriter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QInputEvent(RJSApi& handler, QInputEvent* v);
      QInputEvent* js2cpp_QInputEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QInputEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QKeyEvent(RJSApi& handler, QKeyEvent* v);
      QKeyEvent* js2cpp_QKeyEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QKeyEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLayoutItem(RJSApi& handler, QLayoutItem* v);
      QLayoutItem* js2cpp_QLayoutItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QLayoutItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListWidgetItem(RJSApi& handler, QListWidgetItem* v);
      QListWidgetItem* js2cpp_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMouseEvent(RJSApi& handler, QMouseEvent* v);
      QMouseEvent* js2cpp_QMouseEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMouseEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPagedPaintDevice(RJSApi& handler, QPagedPaintDevice* v);
      QPagedPaintDevice* js2cpp_QPagedPaintDevice_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPagedPaintDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPaintDevice(RJSApi& handler, QPaintDevice* v);
      QPaintDevice* js2cpp_QPaintDevice_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPaintDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPaintEvent(RJSApi& handler, QPaintEvent* v);
      QPaintEvent* js2cpp_QPaintEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPaintEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPainter(RJSApi& handler, QPainter* v);
      QPainter* js2cpp_QPainter_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPainter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPanGesture(RJSApi& handler, QPanGesture* v);
      QPanGesture* js2cpp_QPanGesture_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPanGesture_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPinchGesture(RJSApi& handler, QPinchGesture* v);
      QPinchGesture* js2cpp_QPinchGesture_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPinchGesture_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPointerEvent(RJSApi& handler, QPointerEvent* v);
      QPointerEvent* js2cpp_QPointerEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPointerEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrinter(RJSApi& handler, QPrinter* v);
      QPrinter* js2cpp_QPrinter_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPrinter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProcess(RJSApi& handler, QProcess* v);
      QProcess* js2cpp_QProcess_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QProcess_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QResizeEvent(RJSApi& handler, QResizeEvent* v);
      QResizeEvent* js2cpp_QResizeEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QResizeEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSinglePointEvent(RJSApi& handler, QSinglePointEvent* v);
      QSinglePointEvent* js2cpp_QSinglePointEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSinglePointEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSpacerItem(RJSApi& handler, QSpacerItem* v);
      QSpacerItem* js2cpp_QSpacerItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSpacerItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStandardItem(RJSApi& handler, QStandardItem* v);
      QStandardItem* js2cpp_QStandardItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStandardItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStringConverter(RJSApi& handler, QStringConverter* v);
      QStringConverter* js2cpp_QStringConverter_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStringConverter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStringDecoder(RJSApi& handler, QStringDecoder* v);
      QStringDecoder* js2cpp_QStringDecoder_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStringDecoder_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStringEncoder(RJSApi& handler, QStringEncoder* v);
      QStringEncoder* js2cpp_QStringEncoder_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStringEncoder_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSwipeGesture(RJSApi& handler, QSwipeGesture* v);
      QSwipeGesture* js2cpp_QSwipeGesture_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSwipeGesture_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTableWidgetItem(RJSApi& handler, QTableWidgetItem* v);
      QTableWidgetItem* js2cpp_QTableWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTableWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextCursor(RJSApi& handler, QTextCursor* v);
      QTextCursor* js2cpp_QTextCursor_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTextCursor_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextLayout(RJSApi& handler, QTextLayout* v);
      QTextLayout* js2cpp_QTextLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTextLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextStream(RJSApi& handler, QTextStream* v);
      QTextStream* js2cpp_QTextStream_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTextStream_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QToolTip(RJSApi& handler, QToolTip* v);
      QToolTip* js2cpp_QToolTip_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QToolTip_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTreeWidgetItem(RJSApi& handler, QTreeWidgetItem* v);
      QTreeWidgetItem* js2cpp_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QUiLoader(RJSApi& handler, QUiLoader* v);
      QUiLoader* js2cpp_QUiLoader_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QUiLoader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWheelEvent(RJSApi& handler, QWheelEvent* v);
      QWheelEvent* js2cpp_QWheelEvent_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QWheelEvent_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWidgetItem(RJSApi& handler, QWidgetItem* v);
      QWidgetItem* js2cpp_QWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlContentHandler(RJSApi& handler, QXmlContentHandler* v);
      QXmlContentHandler* js2cpp_QXmlContentHandler_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlContentHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlDTDHandler(RJSApi& handler, QXmlDTDHandler* v);
      QXmlDTDHandler* js2cpp_QXmlDTDHandler_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlDTDHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlDeclHandler(RJSApi& handler, QXmlDeclHandler* v);
      QXmlDeclHandler* js2cpp_QXmlDeclHandler_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlDeclHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlDefaultHandler(RJSApi& handler, QXmlDefaultHandler* v);
      QXmlDefaultHandler* js2cpp_QXmlDefaultHandler_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlDefaultHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlEntityResolver(RJSApi& handler, QXmlEntityResolver* v);
      QXmlEntityResolver* js2cpp_QXmlEntityResolver_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlEntityResolver_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlErrorHandler(RJSApi& handler, QXmlErrorHandler* v);
      QXmlErrorHandler* js2cpp_QXmlErrorHandler_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlErrorHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlInputSource(RJSApi& handler, QXmlInputSource* v);
      QXmlInputSource* js2cpp_QXmlInputSource_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlInputSource_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlLexicalHandler(RJSApi& handler, QXmlLexicalHandler* v);
      QXmlLexicalHandler* js2cpp_QXmlLexicalHandler_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlLexicalHandler_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlLocator(RJSApi& handler, QXmlLocator* v);
      QXmlLocator* js2cpp_QXmlLocator_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlLocator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlParseException(RJSApi& handler, QXmlParseException* v);
      QXmlParseException* js2cpp_QXmlParseException_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlParseException_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlReader(RJSApi& handler, QXmlReader* v);
      QXmlReader* js2cpp_QXmlReader_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlSimpleReader(RJSApi& handler, QXmlSimpleReader* v);
      QXmlSimpleReader* js2cpp_QXmlSimpleReader_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlSimpleReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlStreamAttribute(RJSApi& handler, QXmlStreamAttribute* v);
      QXmlStreamAttribute* js2cpp_QXmlStreamAttribute_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlStreamAttribute_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlStreamReader(RJSApi& handler, QXmlStreamReader* v);
      QXmlStreamReader* js2cpp_QXmlStreamReader_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlStreamReader_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QXmlStreamWriter(RJSApi& handler, QXmlStreamWriter* v);
      QXmlStreamWriter* js2cpp_QXmlStreamWriter_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QXmlStreamWriter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------------------------
  // wrapped QObject pointer types:
  // ------------------------------
  
      QJSValue cpp2js_QGraphicsEffect(RJSApi& handler, QGraphicsEffect* v);
      QJSValue cpp2js_QGraphicsEffect(RJSApi& handler, const QGraphicsEffect* v);
      QGraphicsEffect* js2cpp_QGraphicsEffect_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsBlurEffect(RJSApi& handler, QGraphicsBlurEffect* v);
      QJSValue cpp2js_QGraphicsBlurEffect(RJSApi& handler, const QGraphicsBlurEffect* v);
      QGraphicsBlurEffect* js2cpp_QGraphicsBlurEffect_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsBlurEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsDropShadowEffect(RJSApi& handler, QGraphicsDropShadowEffect* v);
      QJSValue cpp2js_QGraphicsDropShadowEffect(RJSApi& handler, const QGraphicsDropShadowEffect* v);
      QGraphicsDropShadowEffect* js2cpp_QGraphicsDropShadowEffect_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsDropShadowEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsColorizeEffect(RJSApi& handler, QGraphicsColorizeEffect* v);
      QJSValue cpp2js_QGraphicsColorizeEffect(RJSApi& handler, const QGraphicsColorizeEffect* v);
      QGraphicsColorizeEffect* js2cpp_QGraphicsColorizeEffect_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsColorizeEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGraphicsOpacityEffect(RJSApi& handler, QGraphicsOpacityEffect* v);
      QJSValue cpp2js_QGraphicsOpacityEffect(RJSApi& handler, const QGraphicsOpacityEffect* v);
      QGraphicsOpacityEffect* js2cpp_QGraphicsOpacityEffect_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsOpacityEffect_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QQuickWidget(RJSApi& handler, QQuickWidget* v);
      QJSValue cpp2js_QQuickWidget(RJSApi& handler, const QQuickWidget* v);
      QQuickWidget* js2cpp_QQuickWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QQuickWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSvgRenderer(RJSApi& handler, QSvgRenderer* v);
      QJSValue cpp2js_QSvgRenderer(RJSApi& handler, const QSvgRenderer* v);
      QSvgRenderer* js2cpp_QSvgRenderer_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSvgRenderer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractButton(RJSApi& handler, QAbstractButton* v);
      QJSValue cpp2js_QAbstractButton(RJSApi& handler, const QAbstractButton* v);
      QAbstractButton* js2cpp_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemDelegate(RJSApi& handler, QAbstractItemDelegate* v);
      QJSValue cpp2js_QAbstractItemDelegate(RJSApi& handler, const QAbstractItemDelegate* v);
      QAbstractItemDelegate* js2cpp_QAbstractItemDelegate_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemDelegate_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemModel(RJSApi& handler, QAbstractItemModel* v);
      QJSValue cpp2js_QAbstractItemModel(RJSApi& handler, const QAbstractItemModel* v);
      QAbstractItemModel* js2cpp_QAbstractItemModel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractItemView(RJSApi& handler, QAbstractItemView* v);
      QJSValue cpp2js_QAbstractItemView(RJSApi& handler, const QAbstractItemView* v);
      QAbstractItemView* js2cpp_QAbstractItemView_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractItemView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractPrintDialog(RJSApi& handler, QAbstractPrintDialog* v);
      QJSValue cpp2js_QAbstractPrintDialog(RJSApi& handler, const QAbstractPrintDialog* v);
      QAbstractPrintDialog* js2cpp_QAbstractPrintDialog_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractPrintDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractScrollArea(RJSApi& handler, QAbstractScrollArea* v);
      QJSValue cpp2js_QAbstractScrollArea(RJSApi& handler, const QAbstractScrollArea* v);
      QAbstractScrollArea* js2cpp_QAbstractScrollArea_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractScrollArea_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAbstractSlider(RJSApi& handler, QAbstractSlider* v);
      QJSValue cpp2js_QAbstractSlider(RJSApi& handler, const QAbstractSlider* v);
      QAbstractSlider* js2cpp_QAbstractSlider_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAbstractSlider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QAction(RJSApi& handler, QAction* v);
      QJSValue cpp2js_QAction(RJSApi& handler, const QAction* v);
      QAction* js2cpp_QAction_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QActionGroup(RJSApi& handler, QActionGroup* v);
      QJSValue cpp2js_QActionGroup(RJSApi& handler, const QActionGroup* v);
      QActionGroup* js2cpp_QActionGroup_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QActionGroup_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QApplication(RJSApi& handler, QApplication* v);
      QJSValue cpp2js_QApplication(RJSApi& handler, const QApplication* v);
      QApplication* js2cpp_QApplication_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QApplication_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QBoxLayout(RJSApi& handler, QBoxLayout* v);
      QJSValue cpp2js_QBoxLayout(RJSApi& handler, const QBoxLayout* v);
      QBoxLayout* js2cpp_QBoxLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QBoxLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QBuffer(RJSApi& handler, QBuffer* v);
      QJSValue cpp2js_QBuffer(RJSApi& handler, const QBuffer* v);
      QBuffer* js2cpp_QBuffer_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QBuffer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QButtonGroup(RJSApi& handler, QButtonGroup* v);
      QJSValue cpp2js_QButtonGroup(RJSApi& handler, const QButtonGroup* v);
      QButtonGroup* js2cpp_QButtonGroup_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QButtonGroup_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QCheckBox(RJSApi& handler, QCheckBox* v);
      QJSValue cpp2js_QCheckBox(RJSApi& handler, const QCheckBox* v);
      QCheckBox* js2cpp_QCheckBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QCheckBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QClipboard(RJSApi& handler, QClipboard* v);
      QJSValue cpp2js_QClipboard(RJSApi& handler, const QClipboard* v);
      QClipboard* js2cpp_QClipboard_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QClipboard_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QComboBox(RJSApi& handler, QComboBox* v);
      QJSValue cpp2js_QComboBox(RJSApi& handler, const QComboBox* v);
      QComboBox* js2cpp_QComboBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QComboBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QCoreApplication(RJSApi& handler, QCoreApplication* v);
      QJSValue cpp2js_QCoreApplication(RJSApi& handler, const QCoreApplication* v);
      QCoreApplication* js2cpp_QCoreApplication_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QCoreApplication_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDialog(RJSApi& handler, QDialog* v);
      QJSValue cpp2js_QDialog(RJSApi& handler, const QDialog* v);
      QDialog* js2cpp_QDialog_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDialogButtonBox(RJSApi& handler, QDialogButtonBox* v);
      QJSValue cpp2js_QDialogButtonBox(RJSApi& handler, const QDialogButtonBox* v);
      QDialogButtonBox* js2cpp_QDialogButtonBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDialogButtonBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDockWidget(RJSApi& handler, QDockWidget* v);
      QJSValue cpp2js_QDockWidget(RJSApi& handler, const QDockWidget* v);
      QDockWidget* js2cpp_QDockWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDockWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDoubleSpinBox(RJSApi& handler, QDoubleSpinBox* v);
      QJSValue cpp2js_QDoubleSpinBox(RJSApi& handler, const QDoubleSpinBox* v);
      QDoubleSpinBox* js2cpp_QDoubleSpinBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDoubleSpinBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDoubleValidator(RJSApi& handler, QDoubleValidator* v);
      QJSValue cpp2js_QDoubleValidator(RJSApi& handler, const QDoubleValidator* v);
      QDoubleValidator* js2cpp_QDoubleValidator_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDoubleValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QDrag(RJSApi& handler, QDrag* v);
      QJSValue cpp2js_QDrag(RJSApi& handler, const QDrag* v);
      QDrag* js2cpp_QDrag_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QDrag_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QEventLoop(RJSApi& handler, QEventLoop* v);
      QJSValue cpp2js_QEventLoop(RJSApi& handler, const QEventLoop* v);
      QEventLoop* js2cpp_QEventLoop_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QEventLoop_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFile(RJSApi& handler, QFile* v);
      QJSValue cpp2js_QFile(RJSApi& handler, const QFile* v);
      QFile* js2cpp_QFile_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFile_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDevice(RJSApi& handler, QFileDevice* v);
      QJSValue cpp2js_QFileDevice(RJSApi& handler, const QFileDevice* v);
      QFileDevice* js2cpp_QFileDevice_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFileDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileDialog(RJSApi& handler, QFileDialog* v);
      QJSValue cpp2js_QFileDialog(RJSApi& handler, const QFileDialog* v);
      QFileDialog* js2cpp_QFileDialog_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFileDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFileSystemModel(RJSApi& handler, QFileSystemModel* v);
      QJSValue cpp2js_QFileSystemModel(RJSApi& handler, const QFileSystemModel* v);
      QFileSystemModel* js2cpp_QFileSystemModel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFileSystemModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFontComboBox(RJSApi& handler, QFontComboBox* v);
      QJSValue cpp2js_QFontComboBox(RJSApi& handler, const QFontComboBox* v);
      QFontComboBox* js2cpp_QFontComboBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFontComboBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFormLayout(RJSApi& handler, QFormLayout* v);
      QJSValue cpp2js_QFormLayout(RJSApi& handler, const QFormLayout* v);
      QFormLayout* js2cpp_QFormLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFormLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QFrame(RJSApi& handler, QFrame* v);
      QJSValue cpp2js_QFrame(RJSApi& handler, const QFrame* v);
      QFrame* js2cpp_QFrame_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QFrame_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGridLayout(RJSApi& handler, QGridLayout* v);
      QJSValue cpp2js_QGridLayout(RJSApi& handler, const QGridLayout* v);
      QGridLayout* js2cpp_QGridLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGridLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGroupBox(RJSApi& handler, QGroupBox* v);
      QJSValue cpp2js_QGroupBox(RJSApi& handler, const QGroupBox* v);
      QGroupBox* js2cpp_QGroupBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGroupBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QGuiApplication(RJSApi& handler, QGuiApplication* v);
      QJSValue cpp2js_QGuiApplication(RJSApi& handler, const QGuiApplication* v);
      QGuiApplication* js2cpp_QGuiApplication_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QGuiApplication_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QHBoxLayout(RJSApi& handler, QHBoxLayout* v);
      QJSValue cpp2js_QHBoxLayout(RJSApi& handler, const QHBoxLayout* v);
      QHBoxLayout* js2cpp_QHBoxLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QHBoxLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QHeaderView(RJSApi& handler, QHeaderView* v);
      QJSValue cpp2js_QHeaderView(RJSApi& handler, const QHeaderView* v);
      QHeaderView* js2cpp_QHeaderView_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QHeaderView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QIODevice(RJSApi& handler, QIODevice* v);
      QJSValue cpp2js_QIODevice(RJSApi& handler, const QIODevice* v);
      QIODevice* js2cpp_QIODevice_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QIODevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QInputDevice(RJSApi& handler, QInputDevice* v);
      QJSValue cpp2js_QInputDevice(RJSApi& handler, const QInputDevice* v);
      QInputDevice* js2cpp_QInputDevice_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QInputDevice_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QIntValidator(RJSApi& handler, QIntValidator* v);
      QJSValue cpp2js_QIntValidator(RJSApi& handler, const QIntValidator* v);
      QIntValidator* js2cpp_QIntValidator_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QIntValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QItemDelegate(RJSApi& handler, QItemDelegate* v);
      QJSValue cpp2js_QItemDelegate(RJSApi& handler, const QItemDelegate* v);
      QItemDelegate* js2cpp_QItemDelegate_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QItemDelegate_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QItemSelectionModel(RJSApi& handler, QItemSelectionModel* v);
      QJSValue cpp2js_QItemSelectionModel(RJSApi& handler, const QItemSelectionModel* v);
      QItemSelectionModel* js2cpp_QItemSelectionModel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QItemSelectionModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLabel(RJSApi& handler, QLabel* v);
      QJSValue cpp2js_QLabel(RJSApi& handler, const QLabel* v);
      QLabel* js2cpp_QLabel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QLabel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLayout(RJSApi& handler, QLayout* v);
      QJSValue cpp2js_QLayout(RJSApi& handler, const QLayout* v);
      QLayout* js2cpp_QLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QLineEdit(RJSApi& handler, QLineEdit* v);
      QJSValue cpp2js_QLineEdit(RJSApi& handler, const QLineEdit* v);
      QLineEdit* js2cpp_QLineEdit_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QLineEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListView(RJSApi& handler, QListView* v);
      QJSValue cpp2js_QListView(RJSApi& handler, const QListView* v);
      QListView* js2cpp_QListView_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QListView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QListWidget(RJSApi& handler, QListWidget* v);
      QJSValue cpp2js_QListWidget(RJSApi& handler, const QListWidget* v);
      QListWidget* js2cpp_QListWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QListWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMainWindow(RJSApi& handler, QMainWindow* v);
      QJSValue cpp2js_QMainWindow(RJSApi& handler, const QMainWindow* v);
      QMainWindow* js2cpp_QMainWindow_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMainWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMdiArea(RJSApi& handler, QMdiArea* v);
      QJSValue cpp2js_QMdiArea(RJSApi& handler, const QMdiArea* v);
      QMdiArea* js2cpp_QMdiArea_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMdiArea_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMdiSubWindow(RJSApi& handler, QMdiSubWindow* v);
      QJSValue cpp2js_QMdiSubWindow(RJSApi& handler, const QMdiSubWindow* v);
      QMdiSubWindow* js2cpp_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMenu(RJSApi& handler, QMenu* v);
      QJSValue cpp2js_QMenu(RJSApi& handler, const QMenu* v);
      QMenu* js2cpp_QMenu_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMenu_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMenuBar(RJSApi& handler, QMenuBar* v);
      QJSValue cpp2js_QMenuBar(RJSApi& handler, const QMenuBar* v);
      QMenuBar* js2cpp_QMenuBar_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMenuBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMessageBox(RJSApi& handler, QMessageBox* v);
      QJSValue cpp2js_QMessageBox(RJSApi& handler, const QMessageBox* v);
      QMessageBox* js2cpp_QMessageBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMessageBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QMimeData(RJSApi& handler, QMimeData* v);
      QJSValue cpp2js_QMimeData(RJSApi& handler, const QMimeData* v);
      QMimeData* js2cpp_QMimeData_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QMimeData_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPlainTextEdit(RJSApi& handler, QPlainTextEdit* v);
      QJSValue cpp2js_QPlainTextEdit(RJSApi& handler, const QPlainTextEdit* v);
      QPlainTextEdit* js2cpp_QPlainTextEdit_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPlainTextEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPrintDialog(RJSApi& handler, QPrintDialog* v);
      QJSValue cpp2js_QPrintDialog(RJSApi& handler, const QPrintDialog* v);
      QPrintDialog* js2cpp_QPrintDialog_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPrintDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProgressBar(RJSApi& handler, QProgressBar* v);
      QJSValue cpp2js_QProgressBar(RJSApi& handler, const QProgressBar* v);
      QProgressBar* js2cpp_QProgressBar_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QProgressBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QProgressDialog(RJSApi& handler, QProgressDialog* v);
      QJSValue cpp2js_QProgressDialog(RJSApi& handler, const QProgressDialog* v);
      QProgressDialog* js2cpp_QProgressDialog_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QProgressDialog_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPushButton(RJSApi& handler, QPushButton* v);
      QJSValue cpp2js_QPushButton(RJSApi& handler, const QPushButton* v);
      QPushButton* js2cpp_QPushButton_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QPushButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRadioButton(RJSApi& handler, QRadioButton* v);
      QJSValue cpp2js_QRadioButton(RJSApi& handler, const QRadioButton* v);
      QRadioButton* js2cpp_QRadioButton_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QRadioButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QRegularExpressionValidator(RJSApi& handler, QRegularExpressionValidator* v);
      QJSValue cpp2js_QRegularExpressionValidator(RJSApi& handler, const QRegularExpressionValidator* v);
      QRegularExpressionValidator* js2cpp_QRegularExpressionValidator_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QRegularExpressionValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QScreen(RJSApi& handler, QScreen* v);
      QJSValue cpp2js_QScreen(RJSApi& handler, const QScreen* v);
      QScreen* js2cpp_QScreen_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QScreen_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QScrollArea(RJSApi& handler, QScrollArea* v);
      QJSValue cpp2js_QScrollArea(RJSApi& handler, const QScrollArea* v);
      QScrollArea* js2cpp_QScrollArea_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QScrollArea_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QScrollBar(RJSApi& handler, QScrollBar* v);
      QJSValue cpp2js_QScrollBar(RJSApi& handler, const QScrollBar* v);
      QScrollBar* js2cpp_QScrollBar_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QScrollBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSettings(RJSApi& handler, QSettings* v);
      QJSValue cpp2js_QSettings(RJSApi& handler, const QSettings* v);
      QSettings* js2cpp_QSettings_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSettings_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QShortcut(RJSApi& handler, QShortcut* v);
      QJSValue cpp2js_QShortcut(RJSApi& handler, const QShortcut* v);
      QShortcut* js2cpp_QShortcut_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QShortcut_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSlider(RJSApi& handler, QSlider* v);
      QJSValue cpp2js_QSlider(RJSApi& handler, const QSlider* v);
      QSlider* js2cpp_QSlider_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSlider_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSortFilterProxyModel(RJSApi& handler, QSortFilterProxyModel* v);
      QJSValue cpp2js_QSortFilterProxyModel(RJSApi& handler, const QSortFilterProxyModel* v);
      QSortFilterProxyModel* js2cpp_QSortFilterProxyModel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSortFilterProxyModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSpinBox(RJSApi& handler, QSpinBox* v);
      QJSValue cpp2js_QSpinBox(RJSApi& handler, const QSpinBox* v);
      QSpinBox* js2cpp_QSpinBox_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSpinBox_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSplashScreen(RJSApi& handler, QSplashScreen* v);
      QJSValue cpp2js_QSplashScreen(RJSApi& handler, const QSplashScreen* v);
      QSplashScreen* js2cpp_QSplashScreen_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSplashScreen_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSplitter(RJSApi& handler, QSplitter* v);
      QJSValue cpp2js_QSplitter(RJSApi& handler, const QSplitter* v);
      QSplitter* js2cpp_QSplitter_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSplitter_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QSplitterHandle(RJSApi& handler, QSplitterHandle* v);
      QJSValue cpp2js_QSplitterHandle(RJSApi& handler, const QSplitterHandle* v);
      QSplitterHandle* js2cpp_QSplitterHandle_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QSplitterHandle_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStackedLayout(RJSApi& handler, QStackedLayout* v);
      QJSValue cpp2js_QStackedLayout(RJSApi& handler, const QStackedLayout* v);
      QStackedLayout* js2cpp_QStackedLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStackedLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStackedWidget(RJSApi& handler, QStackedWidget* v);
      QJSValue cpp2js_QStackedWidget(RJSApi& handler, const QStackedWidget* v);
      QStackedWidget* js2cpp_QStackedWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStackedWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStandardItemModel(RJSApi& handler, QStandardItemModel* v);
      QJSValue cpp2js_QStandardItemModel(RJSApi& handler, const QStandardItemModel* v);
      QStandardItemModel* js2cpp_QStandardItemModel_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStandardItemModel_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStatusBar(RJSApi& handler, QStatusBar* v);
      QJSValue cpp2js_QStatusBar(RJSApi& handler, const QStatusBar* v);
      QStatusBar* js2cpp_QStatusBar_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QStatusBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTabBar(RJSApi& handler, QTabBar* v);
      QJSValue cpp2js_QTabBar(RJSApi& handler, const QTabBar* v);
      QTabBar* js2cpp_QTabBar_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTabBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTabWidget(RJSApi& handler, QTabWidget* v);
      QJSValue cpp2js_QTabWidget(RJSApi& handler, const QTabWidget* v);
      QTabWidget* js2cpp_QTabWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTabWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTableView(RJSApi& handler, QTableView* v);
      QJSValue cpp2js_QTableView(RJSApi& handler, const QTableView* v);
      QTableView* js2cpp_QTableView_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTableView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTableWidget(RJSApi& handler, QTableWidget* v);
      QJSValue cpp2js_QTableWidget(RJSApi& handler, const QTableWidget* v);
      QTableWidget* js2cpp_QTableWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTableWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextBrowser(RJSApi& handler, QTextBrowser* v);
      QJSValue cpp2js_QTextBrowser(RJSApi& handler, const QTextBrowser* v);
      QTextBrowser* js2cpp_QTextBrowser_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTextBrowser_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextDocument(RJSApi& handler, QTextDocument* v);
      QJSValue cpp2js_QTextDocument(RJSApi& handler, const QTextDocument* v);
      QTextDocument* js2cpp_QTextDocument_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTextDocument_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTextEdit(RJSApi& handler, QTextEdit* v);
      QJSValue cpp2js_QTextEdit(RJSApi& handler, const QTextEdit* v);
      QTextEdit* js2cpp_QTextEdit_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTextEdit_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTimer(RJSApi& handler, QTimer* v);
      QJSValue cpp2js_QTimer(RJSApi& handler, const QTimer* v);
      QTimer* js2cpp_QTimer_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTimer_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QToolBar(RJSApi& handler, QToolBar* v);
      QJSValue cpp2js_QToolBar(RJSApi& handler, const QToolBar* v);
      QToolBar* js2cpp_QToolBar_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QToolBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QToolButton(RJSApi& handler, QToolButton* v);
      QJSValue cpp2js_QToolButton(RJSApi& handler, const QToolButton* v);
      QToolButton* js2cpp_QToolButton_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QToolButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTranslator(RJSApi& handler, QTranslator* v);
      QJSValue cpp2js_QTranslator(RJSApi& handler, const QTranslator* v);
      QTranslator* js2cpp_QTranslator_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTranslator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTreeView(RJSApi& handler, QTreeView* v);
      QJSValue cpp2js_QTreeView(RJSApi& handler, const QTreeView* v);
      QTreeView* js2cpp_QTreeView_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTreeView_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QTreeWidget(RJSApi& handler, QTreeWidget* v);
      QJSValue cpp2js_QTreeWidget(RJSApi& handler, const QTreeWidget* v);
      QTreeWidget* js2cpp_QTreeWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QTreeWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QVBoxLayout(RJSApi& handler, QVBoxLayout* v);
      QJSValue cpp2js_QVBoxLayout(RJSApi& handler, const QVBoxLayout* v);
      QVBoxLayout* js2cpp_QVBoxLayout_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QVBoxLayout_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QValidator(RJSApi& handler, QValidator* v);
      QJSValue cpp2js_QValidator(RJSApi& handler, const QValidator* v);
      QValidator* js2cpp_QValidator_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QValidator_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWidgetAction(RJSApi& handler, QWidgetAction* v);
      QJSValue cpp2js_QWidgetAction(RJSApi& handler, const QWidgetAction* v);
      QWidgetAction* js2cpp_QWidgetAction_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QWidgetAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWindow(RJSApi& handler, QWindow* v);
      QJSValue cpp2js_QWindow(RJSApi& handler, const QWindow* v);
      QWindow* js2cpp_QWindow_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // QList types:
  // ------------
  
      QJSValue cpp2js_QFileInfoList(RJSApi& handler, const QFileInfoList& v);
      QFileInfoList js2cpp_QFileInfoList(RJSApi& handler, const QJSValue& v);
      bool is_QFileInfoList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QByteArray(RJSApi& handler, const QList<QByteArray>& v);
      QList<QByteArray> js2cpp_QList_QByteArray(RJSApi& handler, const QJSValue& v);
      bool is_QList_QByteArray(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QChar(RJSApi& handler, const QList<QChar>& v);
      QList<QChar> js2cpp_QList_QChar(RJSApi& handler, const QJSValue& v);
      bool is_QList_QChar(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QFontDatabase_WritingSystem(RJSApi& handler, const QList<QFontDatabase::WritingSystem>& v);
      QList<QFontDatabase::WritingSystem> js2cpp_QList_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v);
      bool is_QList_QFontDatabase_WritingSystem(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QKeySequence(RJSApi& handler, const QList<QKeySequence>& v);
      QList<QKeySequence> js2cpp_QList_QKeySequence(RJSApi& handler, const QJSValue& v);
      bool is_QList_QKeySequence(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QLine(RJSApi& handler, const QList<QLine>& v);
      QList<QLine> js2cpp_QList_QLine(RJSApi& handler, const QJSValue& v);
      bool is_QList_QLine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QLineF(RJSApi& handler, const QList<QLineF>& v);
      QList<QLineF> js2cpp_QList_QLineF(RJSApi& handler, const QJSValue& v);
      bool is_QList_QLineF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QLocale(RJSApi& handler, const QList<QLocale>& v);
      QList<QLocale> js2cpp_QList_QLocale(RJSApi& handler, const QJSValue& v);
      bool is_QList_QLocale(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QLocale_Country(RJSApi& handler, const QList<QLocale::Country>& v);
      QList<QLocale::Country> js2cpp_QList_QLocale_Country(RJSApi& handler, const QJSValue& v);
      bool is_QList_QLocale_Country(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPageSize(RJSApi& handler, const QList<QPageSize>& v);
      QList<QPageSize> js2cpp_QList_QPageSize(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPageSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPoint(RJSApi& handler, const QList<QPoint>& v);
      QList<QPoint> js2cpp_QList_QPoint(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPoint(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPointF(RJSApi& handler, const QList<QPointF>& v);
      QList<QPointF> js2cpp_QList_QPointF(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPointF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPolygonF(RJSApi& handler, const QList<QPolygonF>& v);
      QList<QPolygonF> js2cpp_QList_QPolygonF(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPolygonF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPrinter_ColorMode(RJSApi& handler, const QList<QPrinter::ColorMode>& v);
      QList<QPrinter::ColorMode> js2cpp_QList_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPrinter_ColorMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPrinter_DuplexMode(RJSApi& handler, const QList<QPrinter::DuplexMode>& v);
      QList<QPrinter::DuplexMode> js2cpp_QList_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPrinter_DuplexMode(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPrinterInfo(RJSApi& handler, const QList<QPrinterInfo>& v);
      QList<QPrinterInfo> js2cpp_QList_QPrinterInfo(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPrinterInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QRect(RJSApi& handler, const QList<QRect>& v);
      QList<QRect> js2cpp_QList_QRect(RJSApi& handler, const QJSValue& v);
      bool is_QList_QRect(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QRectF(RJSApi& handler, const QList<QRectF>& v);
      QList<QRectF> js2cpp_QList_QRectF(RJSApi& handler, const QJSValue& v);
      bool is_QList_QRectF(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QSize(RJSApi& handler, const QList<QSize>& v);
      QList<QSize> js2cpp_QList_QSize(RJSApi& handler, const QJSValue& v);
      bool is_QList_QSize(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QString(RJSApi& handler, const QList<QString>& v);
      QList<QString> js2cpp_QList_QString(RJSApi& handler, const QJSValue& v);
      bool is_QList_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QTextFormat(RJSApi& handler, const QList<QTextFormat>& v);
      QList<QTextFormat> js2cpp_QList_QTextFormat(RJSApi& handler, const QJSValue& v);
      bool is_QList_QTextFormat(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QTextLength(RJSApi& handler, const QList<QTextLength>& v);
      QList<QTextLength> js2cpp_QList_QTextLength(RJSApi& handler, const QJSValue& v);
      bool is_QList_QTextLength(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QUrl(RJSApi& handler, const QList<QUrl>& v);
      QList<QUrl> js2cpp_QList_QUrl(RJSApi& handler, const QJSValue& v);
      bool is_QList_QUrl(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QVariant(RJSApi& handler, const QList<QVariant>& v);
      QList<QVariant> js2cpp_QList_QVariant(RJSApi& handler, const QJSValue& v);
      bool is_QList_QVariant(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_Qt_DayOfWeek(RJSApi& handler, const QList<Qt::DayOfWeek>& v);
      QList<Qt::DayOfWeek> js2cpp_QList_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v);
      bool is_QList_Qt_DayOfWeek(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_bool(RJSApi& handler, const QList<bool>& v);
      QList<bool> js2cpp_QList_bool(RJSApi& handler, const QJSValue& v);
      bool is_QList_bool(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_double(RJSApi& handler, const QList<double>& v);
      QList<double> js2cpp_QList_double(RJSApi& handler, const QJSValue& v);
      bool is_QList_double(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_int(RJSApi& handler, const QList<int>& v);
      QList<int> js2cpp_QList_int(RJSApi& handler, const QJSValue& v);
      bool is_QList_int(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_qreal(RJSApi& handler, const QList<qreal>& v);
      QList<qreal> js2cpp_QList_qreal(RJSApi& handler, const QJSValue& v);
      bool is_QList_qreal(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QPrinter_PaperSource(RJSApi& handler, const QList<QPrinter::PaperSource>& v);
      QList<QPrinter::PaperSource> js2cpp_QList_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v);
      bool is_QList_QPrinter_PaperSource(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QModelIndexList(RJSApi& handler, const QModelIndexList& v);
      QModelIndexList js2cpp_QModelIndexList(RJSApi& handler, const QJSValue& v);
      bool is_QModelIndexList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QStringList(RJSApi& handler, const QStringList& v);
      QStringList js2cpp_QStringList(RJSApi& handler, const QJSValue& v);
      bool is_QStringList(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------------
  // QList pointer types:
  // --------------------
  
      QJSValue cpp2js_QList_QAbstractButton_ptr(RJSApi& handler, const QList<QAbstractButton*>& v);
      QList<QAbstractButton*> js2cpp_QList_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QAbstractButton_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QAction_ptr(RJSApi& handler, const QList<QAction*>& v);
      QList<QAction*> js2cpp_QList_QAction_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QAction_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QDockWidget_ptr(RJSApi& handler, const QList<QDockWidget*>& v);
      QList<QDockWidget*> js2cpp_QList_QDockWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QDockWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QListWidgetItem_ptr(RJSApi& handler, const QList<QListWidgetItem*>& v);
      QList<QListWidgetItem*> js2cpp_QList_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QListWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QMdiSubWindow_ptr(RJSApi& handler, const QList<QMdiSubWindow*>& v);
      QList<QMdiSubWindow*> js2cpp_QList_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QMdiSubWindow_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QObject_ptr(RJSApi& handler, const QList<QObject*>& v);
      QList<QObject*> js2cpp_QList_QObject_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QObject_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QScreen_ptr(RJSApi& handler, const QList<QScreen*>& v);
      QList<QScreen*> js2cpp_QList_QScreen_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QScreen_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QStandardItem_ptr(RJSApi& handler, const QList<QStandardItem*>& v);
      QList<QStandardItem*> js2cpp_QList_QStandardItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QStandardItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QToolBar_ptr(RJSApi& handler, const QList<QToolBar*>& v);
      QList<QToolBar*> js2cpp_QList_QToolBar_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QToolBar_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QTreeWidgetItem_ptr(RJSApi& handler, const QList<QTreeWidgetItem*>& v);
      QList<QTreeWidgetItem*> js2cpp_QList_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QTreeWidgetItem_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QList_QWidget_ptr(RJSApi& handler, const QList<QWidget*>& v);
      QList<QWidget*> js2cpp_QList_QWidget_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QList_QWidget_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWidgetList_ptr(RJSApi& handler, const QWidgetList& v);
      QWidgetList js2cpp_QWidgetList_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QWidgetList_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QWindowList_ptr(RJSApi& handler, const QWindowList& v);
      QWindowList js2cpp_QWindowList_ptr(RJSApi& handler, const QJSValue& v);
      bool is_QWindowList_ptr(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // -----------
  // QSet types:
  // -----------
  
      QJSValue cpp2js_QSet_QString(RJSApi& handler, const QSet<QString>& v);
      QSet<QString> js2cpp_QSet_QString(RJSApi& handler, const QJSValue& v);
      bool is_QSet_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // -----------
  // QMap types:
  // -----------
  
      QJSValue cpp2js_QVariantMap(RJSApi& handler, const QVariantMap& v);
      QVariantMap js2cpp_QVariantMap(RJSApi& handler, const QJSValue& v);
      bool is_QVariantMap(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // QPair types:
  // ------------
  
      QJSValue cpp2js_QPair_QString_QString(RJSApi& handler, const QPair<QString,QString>& v);
      QPair<QString,QString> js2cpp_QPair_QString_QString(RJSApi& handler, const QJSValue& v);
      bool is_QPair_QString_QString(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      QJSValue cpp2js_QPair_int_int(RJSApi& handler, const QPair<int,int>& v);
      QPair<int,int> js2cpp_QPair_int_int(RJSApi& handler, const QJSValue& v);
      bool is_QPair_int_int(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // ------------
  // dummy types:
  // ------------
  
      #include <QCalendar>

      QJSValue cpp2js_QCalendar(RJSApi& handler, const QCalendar& v);
      QCalendar js2cpp_QCalendar(RJSApi& handler, const QJSValue& v);
      bool is_QCalendar(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      #include <QFontInfo>

      QJSValue cpp2js_QFontInfo(RJSApi& handler, const QFontInfo& v);
      QFontInfo js2cpp_QFontInfo(RJSApi& handler, const QJSValue& v);
      bool is_QFontInfo(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      #include <QTimeZone>

      QJSValue cpp2js_QTimeZone(RJSApi& handler, const QTimeZone& v);
      QTimeZone js2cpp_QTimeZone(RJSApi& handler, const QJSValue& v);
      bool is_QTimeZone(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
  // --------------------
  // dummy pointer types:
  // --------------------
  
      #include <QGraphicsProxyWidget>

      QJSValue cpp2js_QGraphicsProxyWidget(RJSApi& handler, QGraphicsProxyWidget* v);
      QGraphicsProxyWidget* js2cpp_QGraphicsProxyWidget(RJSApi& handler, const QJSValue& v);
      bool is_QGraphicsProxyWidget(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
      #include <QPaintEngine>

      QJSValue cpp2js_QPaintEngine(RJSApi& handler, QPaintEngine* v);
      QPaintEngine* js2cpp_QPaintEngine(RJSApi& handler, const QJSValue& v);
      bool is_QPaintEngine(RJSApi& handler, const QJSValue& v, bool acceptUndefined = false);
    
        // more dummy implementations
        QJSValue cpp2js_QList_QAction(RJSApi& handler, const QList<QAction*>& v);

        QList<QAction*> js2cpp_QList_QAction(RJSApi& handler, const QJSValue& v);
      

      #endif
    