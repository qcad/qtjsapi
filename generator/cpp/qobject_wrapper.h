
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
          
          {
      }

      

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

      
        static QObject* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QAbstractButton_Type:
              return (QObject*)(QAbstractButton*)vp;
          
            case RJSType::QAbstractItemDelegate_Type:
              return (QObject*)(QAbstractItemDelegate*)vp;
          
            case RJSType::QAbstractItemModel_Type:
              return (QObject*)(QAbstractItemModel*)vp;
          
            case RJSType::QAbstractTableModel_Type:
              return (QObject*)(QAbstractTableModel*)vp;
          
            case RJSType::QAbstractListModel_Type:
              return (QObject*)(QAbstractListModel*)vp;
          
            case RJSType::QAbstractItemView_Type:
              return (QObject*)(QAbstractItemView*)vp;
          
            case RJSType::QAbstractPrintDialog_Type:
              return (QObject*)(QAbstractPrintDialog*)vp;
          
            case RJSType::QAbstractScrollArea_Type:
              return (QObject*)(QAbstractScrollArea*)vp;
          
            case RJSType::QAbstractSlider_Type:
              return (QObject*)(QAbstractSlider*)vp;
          
            case RJSType::QAction_Type:
              return (QObject*)(QAction*)vp;
          
            case RJSType::QActionGroup_Type:
              return (QObject*)(QActionGroup*)vp;
          
            case RJSType::QApplication_Type:
              return (QObject*)(QApplication*)vp;
          
            case RJSType::QBoxLayout_Type:
              return (QObject*)(QBoxLayout*)vp;
          
            case RJSType::QHBoxLayout_Type:
              return (QObject*)(QHBoxLayout*)vp;
          
            case RJSType::QVBoxLayout_Type:
              return (QObject*)(QVBoxLayout*)vp;
          
            case RJSType::QBuffer_Type:
              return (QObject*)(QBuffer*)vp;
          
            case RJSType::QButtonGroup_Type:
              return (QObject*)(QButtonGroup*)vp;
          
            case RJSType::QCheckBox_Type:
              return (QObject*)(QCheckBox*)vp;
          
            case RJSType::QClipboard_Type:
              return (QObject*)(QClipboard*)vp;
          
            case RJSType::QComboBox_Type:
              return (QObject*)(QComboBox*)vp;
          
            case RJSType::QCompleter_Type:
              return (QObject*)(QCompleter*)vp;
          
            case RJSType::QCoreApplication_Type:
              return (QObject*)(QCoreApplication*)vp;
          
            case RJSType::QDialog_Type:
              return (QObject*)(QDialog*)vp;
          
            case RJSType::QDialogButtonBox_Type:
              return (QObject*)(QDialogButtonBox*)vp;
          
            case RJSType::QDockWidget_Type:
              return (QObject*)(QDockWidget*)vp;
          
            case RJSType::QDrag_Type:
              return (QObject*)(QDrag*)vp;
          
            case RJSType::QEventLoop_Type:
              return (QObject*)(QEventLoop*)vp;
          
            case RJSType::QFileDevice_Type:
              return (QObject*)(QFileDevice*)vp;
          
            case RJSType::QFileDialog_Type:
              return (QObject*)(QFileDialog*)vp;
          
            case RJSType::QFileSystemModel_Type:
              return (QObject*)(QFileSystemModel*)vp;
          
            case RJSType::QFontComboBox_Type:
              return (QObject*)(QFontComboBox*)vp;
          
            case RJSType::QFormLayout_Type:
              return (QObject*)(QFormLayout*)vp;
          
            case RJSType::QFrame_Type:
              return (QObject*)(QFrame*)vp;
          
            case RJSType::QGesture_Type:
              return (QObject*)(QGesture*)vp;
          
            case RJSType::QPinchGesture_Type:
              return (QObject*)(QPinchGesture*)vp;
          
            case RJSType::QGraphicsEffect_Type:
              return (QObject*)(QGraphicsEffect*)vp;
          
            case RJSType::QGraphicsBlurEffect_Type:
              return (QObject*)(QGraphicsBlurEffect*)vp;
          
            case RJSType::QGridLayout_Type:
              return (QObject*)(QGridLayout*)vp;
          
            case RJSType::QGroupBox_Type:
              return (QObject*)(QGroupBox*)vp;
          
            case RJSType::QGuiApplication_Type:
              return (QObject*)(QGuiApplication*)vp;
          
            case RJSType::QHeaderView_Type:
              return (QObject*)(QHeaderView*)vp;
          
            case RJSType::QInputDevice_Type:
              return (QObject*)(QInputDevice*)vp;
          
            case RJSType::QIODevice_Type:
              return (QObject*)(QIODevice*)vp;
          
            case RJSType::QItemDelegate_Type:
              return (QObject*)(QItemDelegate*)vp;
          
            case RJSType::QItemSelectionModel_Type:
              return (QObject*)(QItemSelectionModel*)vp;
          
            case RJSType::QLabel_Type:
              return (QObject*)(QLabel*)vp;
          
            case RJSType::QLayout_Type:
              return (QObject*)(QLayout*)vp;
          
            case RJSType::QLineEdit_Type:
              return (QObject*)(QLineEdit*)vp;
          
            case RJSType::QListView_Type:
              return (QObject*)(QListView*)vp;
          
            case RJSType::QListWidget_Type:
              return (QObject*)(QListWidget*)vp;
          
            case RJSType::QMainWindow_Type:
              return (QObject*)(QMainWindow*)vp;
          
            case RJSType::QMdiArea_Type:
              return (QObject*)(QMdiArea*)vp;
          
            case RJSType::QMdiSubWindow_Type:
              return (QObject*)(QMdiSubWindow*)vp;
          
            case RJSType::QMenu_Type:
              return (QObject*)(QMenu*)vp;
          
            case RJSType::QMenuBar_Type:
              return (QObject*)(QMenuBar*)vp;
          
            case RJSType::QMessageBox_Type:
              return (QObject*)(QMessageBox*)vp;
          
            case RJSType::QMimeData_Type:
              return (QObject*)(QMimeData*)vp;
          
            case RJSType::QPlainTextEdit_Type:
              return (QObject*)(QPlainTextEdit*)vp;
          
            case RJSType::QPrintDialog_Type:
              return (QObject*)(QPrintDialog*)vp;
          
            case RJSType::QProcess_Type:
              return (QObject*)(QProcess*)vp;
          
            case RJSType::QProgressBar_Type:
              return (QObject*)(QProgressBar*)vp;
          
            case RJSType::QProgressDialog_Type:
              return (QObject*)(QProgressDialog*)vp;
          
            case RJSType::QPushButton_Type:
              return (QObject*)(QPushButton*)vp;
          
            case RJSType::QQuickWidget_Type:
              return (QObject*)(QQuickWidget*)vp;
          
            case RJSType::QRadioButton_Type:
              return (QObject*)(QRadioButton*)vp;
          
            case RJSType::QScreen_Type:
              return (QObject*)(QScreen*)vp;
          
            case RJSType::QScrollArea_Type:
              return (QObject*)(QScrollArea*)vp;
          
            case RJSType::QScrollBar_Type:
              return (QObject*)(QScrollBar*)vp;
          
            case RJSType::QSettings_Type:
              return (QObject*)(QSettings*)vp;
          
            case RJSType::QShortcut_Type:
              return (QObject*)(QShortcut*)vp;
          
            case RJSType::QSlider_Type:
              return (QObject*)(QSlider*)vp;
          
            case RJSType::QSortFilterProxyModel_Type:
              return (QObject*)(QSortFilterProxyModel*)vp;
          
            case RJSType::QSpinBox_Type:
              return (QObject*)(QSpinBox*)vp;
          
            case RJSType::QSplashScreen_Type:
              return (QObject*)(QSplashScreen*)vp;
          
            case RJSType::QSplitter_Type:
              return (QObject*)(QSplitter*)vp;
          
            case RJSType::QStackedLayout_Type:
              return (QObject*)(QStackedLayout*)vp;
          
            case RJSType::QStackedWidget_Type:
              return (QObject*)(QStackedWidget*)vp;
          
            case RJSType::QStandardItemModel_Type:
              return (QObject*)(QStandardItemModel*)vp;
          
            case RJSType::QStatusBar_Type:
              return (QObject*)(QStatusBar*)vp;
          
            case RJSType::QSvgRenderer_Type:
              return (QObject*)(QSvgRenderer*)vp;
          
            case RJSType::QTabBar_Type:
              return (QObject*)(QTabBar*)vp;
          
            case RJSType::QTableView_Type:
              return (QObject*)(QTableView*)vp;
          
            case RJSType::QTableWidget_Type:
              return (QObject*)(QTableWidget*)vp;
          
            case RJSType::QTabWidget_Type:
              return (QObject*)(QTabWidget*)vp;
          
            case RJSType::QTextBrowser_Type:
              return (QObject*)(QTextBrowser*)vp;
          
            case RJSType::QTextDocument_Type:
              return (QObject*)(QTextDocument*)vp;
          
            case RJSType::QTextEdit_Type:
              return (QObject*)(QTextEdit*)vp;
          
            case RJSType::QTimer_Type:
              return (QObject*)(QTimer*)vp;
          
            case RJSType::QToolBar_Type:
              return (QObject*)(QToolBar*)vp;
          
            case RJSType::QToolButton_Type:
              return (QObject*)(QToolButton*)vp;
          
            case RJSType::QTranslator_Type:
              return (QObject*)(QTranslator*)vp;
          
            case RJSType::QTreeView_Type:
              return (QObject*)(QTreeView*)vp;
          
            case RJSType::QTreeWidget_Type:
              return (QObject*)(QTreeWidget*)vp;
          
            case RJSType::QUiLoader_Type:
              return (QObject*)(QUiLoader*)vp;
          
            case RJSType::QValidator_Type:
              return (QObject*)(QValidator*)vp;
          
            case RJSType::QIntValidator_Type:
              return (QObject*)(QIntValidator*)vp;
          
            case RJSType::QDoubleValidator_Type:
              return (QObject*)(QDoubleValidator*)vp;
          
            case RJSType::QRegularExpressionValidator_Type:
              return (QObject*)(QRegularExpressionValidator*)vp;
          
            case RJSType::QWidget_Type:
              return (QObject*)(QWidget*)vp;
          
            case RJSType::QWidgetAction_Type:
              return (QObject*)(QWidgetAction*)vp;
          
            case RJSType::QWindow_Type:
              return (QObject*)(QWindow*)vp;
          

          // pointer to desired type:
          
              case RJSType::QObject_Type:
                return (QObject*)vp;
            

          default:
            return nullptr;
          }
        }

        static QObject* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
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
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QObject_Type;
            
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
      
    };

    Q_DECLARE_METATYPE(QObject_Wrapper*)

    Q_DECLARE_INTERFACE(QObject_Wrapper, "org.qcad.QObject_Wrapper")

  
  #endif
  