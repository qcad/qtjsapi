
  // Auto generated
  
    #ifndef QOBJECT_H_WRAPPER
    #define QOBJECT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QEvent>
      
        #include <QTimerEvent>
      
        #include <QChildEvent>
      
        #include <QVariant>
      
        #include <QObject>
      
        #include <QThread>
      
        #include <QWidget>
      
        #include <QAccessibleWidget>
      
        #include <QRegularExpression>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QObject>
      
      // singleton class wrapper for static functions:
      class QObject_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QObject_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
#if defined(QT_NO_TRANSLATION)||defined(Q_CLANG_QDOC)

    // Class: QObject
    // Function: tr
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  tr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    
              )
              
              ;
            
#endif

#ifdef Q_CLANG_QDOC

#else

#endif

#ifdef Q_CLANG_QDOC

#else

#endif

#if QT_VERSION<QT_VERSION_CHECK(6,0,0)

#endif

#ifndef QT_NO_PROPERTIES

#endif


      private:
          RJSApi& handler;
          //static QObject_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QObject
    class QObject_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QObject_Wrapper(const QObject_Wrapper&);

    public:
      // initialization of QObject:
      static void init(RJSApi& handler);

      
        static QObject* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QAbstractButton::getIdStatic()) {
                return (QObject*)(QAbstractButton*)vp;
              }
              
              if (t==RJSType_QAbstractItemDelegate::getIdStatic()) {
                return (QObject*)(QAbstractItemDelegate*)vp;
              }
              
              if (t==RJSType_QAbstractItemModel::getIdStatic()) {
                return (QObject*)(QAbstractItemModel*)vp;
              }
              
              if (t==RJSType_QAbstractTableModel::getIdStatic()) {
                return (QObject*)(QAbstractTableModel*)vp;
              }
              
              if (t==RJSType_QAbstractListModel::getIdStatic()) {
                return (QObject*)(QAbstractListModel*)vp;
              }
              
              if (t==RJSType_QAbstractItemView::getIdStatic()) {
                return (QObject*)(QAbstractItemView*)vp;
              }
              
              if (t==RJSType_QAbstractPrintDialog::getIdStatic()) {
                return (QObject*)(QAbstractPrintDialog*)vp;
              }
              
              if (t==RJSType_QAbstractScrollArea::getIdStatic()) {
                return (QObject*)(QAbstractScrollArea*)vp;
              }
              
              if (t==RJSType_QAbstractSlider::getIdStatic()) {
                return (QObject*)(QAbstractSlider*)vp;
              }
              
              if (t==RJSType_QAction::getIdStatic()) {
                return (QObject*)(QAction*)vp;
              }
              
              if (t==RJSType_QActionGroup::getIdStatic()) {
                return (QObject*)(QActionGroup*)vp;
              }
              
              if (t==RJSType_QApplication::getIdStatic()) {
                return (QObject*)(QApplication*)vp;
              }
              
              if (t==RJSType_QBoxLayout::getIdStatic()) {
                return (QObject*)(QBoxLayout*)vp;
              }
              
              if (t==RJSType_QHBoxLayout::getIdStatic()) {
                return (QObject*)(QHBoxLayout*)vp;
              }
              
              if (t==RJSType_QVBoxLayout::getIdStatic()) {
                return (QObject*)(QVBoxLayout*)vp;
              }
              
              if (t==RJSType_QBuffer::getIdStatic()) {
                return (QObject*)(QBuffer*)vp;
              }
              
              if (t==RJSType_QButtonGroup::getIdStatic()) {
                return (QObject*)(QButtonGroup*)vp;
              }
              
              if (t==RJSType_QCheckBox::getIdStatic()) {
                return (QObject*)(QCheckBox*)vp;
              }
              
              if (t==RJSType_QClipboard::getIdStatic()) {
                return (QObject*)(QClipboard*)vp;
              }
              
              if (t==RJSType_QComboBox::getIdStatic()) {
                return (QObject*)(QComboBox*)vp;
              }
              
              if (t==RJSType_QCompleter::getIdStatic()) {
                return (QObject*)(QCompleter*)vp;
              }
              
              if (t==RJSType_QCoreApplication::getIdStatic()) {
                return (QObject*)(QCoreApplication*)vp;
              }
              
              if (t==RJSType_QDialog::getIdStatic()) {
                return (QObject*)(QDialog*)vp;
              }
              
              if (t==RJSType_QDialogButtonBox::getIdStatic()) {
                return (QObject*)(QDialogButtonBox*)vp;
              }
              
              if (t==RJSType_QDockWidget::getIdStatic()) {
                return (QObject*)(QDockWidget*)vp;
              }
              
              if (t==RJSType_QDrag::getIdStatic()) {
                return (QObject*)(QDrag*)vp;
              }
              
              if (t==RJSType_QEventLoop::getIdStatic()) {
                return (QObject*)(QEventLoop*)vp;
              }
              
              if (t==RJSType_QFileDevice::getIdStatic()) {
                return (QObject*)(QFileDevice*)vp;
              }
              
              if (t==RJSType_QFileDialog::getIdStatic()) {
                return (QObject*)(QFileDialog*)vp;
              }
              
              if (t==RJSType_QFileSystemModel::getIdStatic()) {
                return (QObject*)(QFileSystemModel*)vp;
              }
              
              if (t==RJSType_QFontComboBox::getIdStatic()) {
                return (QObject*)(QFontComboBox*)vp;
              }
              
              if (t==RJSType_QFormLayout::getIdStatic()) {
                return (QObject*)(QFormLayout*)vp;
              }
              
              if (t==RJSType_QFrame::getIdStatic()) {
                return (QObject*)(QFrame*)vp;
              }
              
              if (t==RJSType_QGesture::getIdStatic()) {
                return (QObject*)(QGesture*)vp;
              }
              
              if (t==RJSType_QPinchGesture::getIdStatic()) {
                return (QObject*)(QPinchGesture*)vp;
              }
              
              if (t==RJSType_QGraphicsEffect::getIdStatic()) {
                return (QObject*)(QGraphicsEffect*)vp;
              }
              
              if (t==RJSType_QGraphicsBlurEffect::getIdStatic()) {
                return (QObject*)(QGraphicsBlurEffect*)vp;
              }
              
              if (t==RJSType_QGridLayout::getIdStatic()) {
                return (QObject*)(QGridLayout*)vp;
              }
              
              if (t==RJSType_QGroupBox::getIdStatic()) {
                return (QObject*)(QGroupBox*)vp;
              }
              
              if (t==RJSType_QGuiApplication::getIdStatic()) {
                return (QObject*)(QGuiApplication*)vp;
              }
              
              if (t==RJSType_QHeaderView::getIdStatic()) {
                return (QObject*)(QHeaderView*)vp;
              }
              
              if (t==RJSType_QInputDevice::getIdStatic()) {
                return (QObject*)(QInputDevice*)vp;
              }
              
              if (t==RJSType_QIODevice::getIdStatic()) {
                return (QObject*)(QIODevice*)vp;
              }
              
              if (t==RJSType_QItemDelegate::getIdStatic()) {
                return (QObject*)(QItemDelegate*)vp;
              }
              
              if (t==RJSType_QItemSelectionModel::getIdStatic()) {
                return (QObject*)(QItemSelectionModel*)vp;
              }
              
              if (t==RJSType_QLabel::getIdStatic()) {
                return (QObject*)(QLabel*)vp;
              }
              
              if (t==RJSType_QLayout::getIdStatic()) {
                return (QObject*)(QLayout*)vp;
              }
              
              if (t==RJSType_QLineEdit::getIdStatic()) {
                return (QObject*)(QLineEdit*)vp;
              }
              
              if (t==RJSType_QListView::getIdStatic()) {
                return (QObject*)(QListView*)vp;
              }
              
              if (t==RJSType_QListWidget::getIdStatic()) {
                return (QObject*)(QListWidget*)vp;
              }
              
              if (t==RJSType_QMainWindow::getIdStatic()) {
                return (QObject*)(QMainWindow*)vp;
              }
              
              if (t==RJSType_QMdiArea::getIdStatic()) {
                return (QObject*)(QMdiArea*)vp;
              }
              
              if (t==RJSType_QMdiSubWindow::getIdStatic()) {
                return (QObject*)(QMdiSubWindow*)vp;
              }
              
              if (t==RJSType_QMenu::getIdStatic()) {
                return (QObject*)(QMenu*)vp;
              }
              
              if (t==RJSType_QMenuBar::getIdStatic()) {
                return (QObject*)(QMenuBar*)vp;
              }
              
              if (t==RJSType_QMessageBox::getIdStatic()) {
                return (QObject*)(QMessageBox*)vp;
              }
              
              if (t==RJSType_QMimeData::getIdStatic()) {
                return (QObject*)(QMimeData*)vp;
              }
              
              if (t==RJSType_QPlainTextEdit::getIdStatic()) {
                return (QObject*)(QPlainTextEdit*)vp;
              }
              
              if (t==RJSType_QPrintDialog::getIdStatic()) {
                return (QObject*)(QPrintDialog*)vp;
              }
              
              if (t==RJSType_QProcess::getIdStatic()) {
                return (QObject*)(QProcess*)vp;
              }
              
              if (t==RJSType_QProgressBar::getIdStatic()) {
                return (QObject*)(QProgressBar*)vp;
              }
              
              if (t==RJSType_QProgressDialog::getIdStatic()) {
                return (QObject*)(QProgressDialog*)vp;
              }
              
              if (t==RJSType_QPushButton::getIdStatic()) {
                return (QObject*)(QPushButton*)vp;
              }
              
              if (t==RJSType_QQuickWidget::getIdStatic()) {
                return (QObject*)(QQuickWidget*)vp;
              }
              
              if (t==RJSType_QRadioButton::getIdStatic()) {
                return (QObject*)(QRadioButton*)vp;
              }
              
              if (t==RJSType_QScreen::getIdStatic()) {
                return (QObject*)(QScreen*)vp;
              }
              
              if (t==RJSType_QScrollArea::getIdStatic()) {
                return (QObject*)(QScrollArea*)vp;
              }
              
              if (t==RJSType_QScrollBar::getIdStatic()) {
                return (QObject*)(QScrollBar*)vp;
              }
              
              if (t==RJSType_QSettings::getIdStatic()) {
                return (QObject*)(QSettings*)vp;
              }
              
              if (t==RJSType_QShortcut::getIdStatic()) {
                return (QObject*)(QShortcut*)vp;
              }
              
              if (t==RJSType_QSlider::getIdStatic()) {
                return (QObject*)(QSlider*)vp;
              }
              
              if (t==RJSType_QSortFilterProxyModel::getIdStatic()) {
                return (QObject*)(QSortFilterProxyModel*)vp;
              }
              
              if (t==RJSType_QSpinBox::getIdStatic()) {
                return (QObject*)(QSpinBox*)vp;
              }
              
              if (t==RJSType_QSplashScreen::getIdStatic()) {
                return (QObject*)(QSplashScreen*)vp;
              }
              
              if (t==RJSType_QSplitter::getIdStatic()) {
                return (QObject*)(QSplitter*)vp;
              }
              
              if (t==RJSType_QStackedLayout::getIdStatic()) {
                return (QObject*)(QStackedLayout*)vp;
              }
              
              if (t==RJSType_QStackedWidget::getIdStatic()) {
                return (QObject*)(QStackedWidget*)vp;
              }
              
              if (t==RJSType_QStandardItemModel::getIdStatic()) {
                return (QObject*)(QStandardItemModel*)vp;
              }
              
              if (t==RJSType_QStatusBar::getIdStatic()) {
                return (QObject*)(QStatusBar*)vp;
              }
              
              if (t==RJSType_QSvgRenderer::getIdStatic()) {
                return (QObject*)(QSvgRenderer*)vp;
              }
              
              if (t==RJSType_QTabBar::getIdStatic()) {
                return (QObject*)(QTabBar*)vp;
              }
              
              if (t==RJSType_QTableView::getIdStatic()) {
                return (QObject*)(QTableView*)vp;
              }
              
              if (t==RJSType_QTableWidget::getIdStatic()) {
                return (QObject*)(QTableWidget*)vp;
              }
              
              if (t==RJSType_QTabWidget::getIdStatic()) {
                return (QObject*)(QTabWidget*)vp;
              }
              
              if (t==RJSType_QTextBrowser::getIdStatic()) {
                return (QObject*)(QTextBrowser*)vp;
              }
              
              if (t==RJSType_QTextDocument::getIdStatic()) {
                return (QObject*)(QTextDocument*)vp;
              }
              
              if (t==RJSType_QTextEdit::getIdStatic()) {
                return (QObject*)(QTextEdit*)vp;
              }
              
              if (t==RJSType_QTimer::getIdStatic()) {
                return (QObject*)(QTimer*)vp;
              }
              
              if (t==RJSType_QToolBar::getIdStatic()) {
                return (QObject*)(QToolBar*)vp;
              }
              
              if (t==RJSType_QToolButton::getIdStatic()) {
                return (QObject*)(QToolButton*)vp;
              }
              
              if (t==RJSType_QTranslator::getIdStatic()) {
                return (QObject*)(QTranslator*)vp;
              }
              
              if (t==RJSType_QTreeView::getIdStatic()) {
                return (QObject*)(QTreeView*)vp;
              }
              
              if (t==RJSType_QTreeWidget::getIdStatic()) {
                return (QObject*)(QTreeWidget*)vp;
              }
              
              if (t==RJSType_QUiLoader::getIdStatic()) {
                return (QObject*)(QUiLoader*)vp;
              }
              
              if (t==RJSType_QValidator::getIdStatic()) {
                return (QObject*)(QValidator*)vp;
              }
              
              if (t==RJSType_QIntValidator::getIdStatic()) {
                return (QObject*)(QIntValidator*)vp;
              }
              
              if (t==RJSType_QDoubleValidator::getIdStatic()) {
                return (QObject*)(QDoubleValidator*)vp;
              }
              
              if (t==RJSType_QRegularExpressionValidator::getIdStatic()) {
                return (QObject*)(QRegularExpressionValidator*)vp;
              }
              
              if (t==RJSType_QWidget::getIdStatic()) {
                return (QObject*)(QWidget*)vp;
              }
              
              if (t==RJSType_QWidgetAction::getIdStatic()) {
                return (QObject*)(QWidgetAction*)vp;
              }
              
              if (t==RJSType_QWindow::getIdStatic()) {
                return (QObject*)(QWindow*)vp;
              }
              

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QObject.length(); i++) {
            RJSBasecaster_QObject* basecaster = basecasters_QObject[i];
            QObject* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QObject::getIdStatic()) {
            return (QObject*)vp;
          }

          qWarning() << "QObject::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QObject* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QObject*: wrapper wraps NULL";
          }

          QObject* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QObject*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QObject_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QObject_Wrapper(RJSApi& h, QObject* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QObject_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QObject
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QObject_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if defined(QT_NO_TRANSLATION)||defined(Q_CLANG_QDOC)

#endif

#ifdef Q_CLANG_QDOC

#else

#endif

#ifdef Q_CLANG_QDOC

#else

#endif

#if QT_VERSION<QT_VERSION_CHECK(6,0,0)

#endif

#ifndef QT_NO_PROPERTIES

#endif


    // non-static functions:
    
#if defined(QT_NO_TRANSLATION)||defined(Q_CLANG_QDOC)

#endif

    // Class: QObject
    // Function: objectName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  objectName
              (

                
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: setObjectName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setObjectName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QObject
    // Function: isWidgetType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWidgetType
              (

                
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: isWindowType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWindowType
              (

                
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: signalsBlocked
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  signalsBlocked
              (

                
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: blockSignals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blockSignals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QObject
    // Function: findChild
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  findChild
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: children
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  children
              (

                
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: setParent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QObject
    // Function: installEventFilter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QObject
    // Function: removeEventFilter
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeEventFilter
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifdef Q_CLANG_QDOC

#else

#endif

#ifdef Q_CLANG_QDOC

#else

#endif

#if QT_VERSION<QT_VERSION_CHECK(6,0,0)

    // Class: QObject
    // Function: dumpObjectTree
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectTree
              (

                
              )
              
              ;
            
    // Class: QObject
    // Function: dumpObjectInfo
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dumpObjectInfo
              (

                
              )
              
              ;
            
#endif

#ifndef QT_NO_PROPERTIES

    // Class: QObject
    // Function: setProperty
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProperty
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QObject
    // Function: property
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  property
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: dynamicPropertyNames
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dynamicPropertyNames
              (

                
              )
              
                const
              
              ;
            
#endif

    // Class: QObject
    // Function: parent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
              )
              
                const
              
              ;
            
    // Class: QObject
    // Function: deleteLater
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  deleteLater
              (

                
              )
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            if (wrapped!=nullptr) {
              
                  delete wrapped;
                
              wrapped = nullptr;
            }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QObject::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QObject* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QObject* getWrapped() const {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          if (wrapped!=nullptr) {
            return (unsigned long long int)wrapped;
          }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:
        // wrapped object:
        QObject* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QObject*> basecasters_QObject;

      public:
        static void registerBasecaster_QObject(RJSBasecaster_QObject* bc) {
          basecasters_QObject.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QObject_Wrapper*)

    Q_DECLARE_INTERFACE(QObject_Wrapper, "org.qcad.QObject_Wrapper")

  
  #endif
  