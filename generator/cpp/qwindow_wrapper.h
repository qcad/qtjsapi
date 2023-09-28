
  // Auto generated
  
    #ifndef QWINDOW_H_WRAPPER
    #define QWINDOW_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QExposeEvent>
      
        #include <QPaintEvent>
      
        #include <QFocusEvent>
      
        #include <QMoveEvent>
      
        #include <QResizeEvent>
      
        #include <QShowEvent>
      
        #include <QHideEvent>
      
        #include <QCloseEvent>
      
        #include <QKeyEvent>
      
        #include <QMouseEvent>
      
        #include <QWheelEvent>
      
        #include <QTouchEvent>
      
        #include <QTabletEvent>
      
        #include <QBackingStore>
      
        #include <QScreen>
      
        #include <QAccessibleInterface>
      
        #include <QDebug>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QWindow>
      
      // wrapped object is QWindow_Base class if new object is created: 
      #include "qwindow_base.h"
    
      // singleton class wrapper for static functions:
      class QWindow_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QWindow_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QWindow
    // Function: tr
    // Source: QObject
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
            
#ifdef Q_QDOC

#else

#endif

#ifndef QT_NO_CURSOR

#endif

#if QT_CONFIG(wheelevent)

#endif

#if QT_CONFIG(tabletevent)

#endif


      private:
          RJSApi& handler;
          //static QWindow_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QWindow
    class QWindow_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     title READ title WRITE setTitle
  )

  Q_PROPERTY(
    
    QJSValue
     modality READ modality WRITE setModality
  )

  Q_PROPERTY(
    
    QJSValue
     flags READ flags WRITE setFlags
  )

  Q_PROPERTY(
    
    QJSValue
     x READ x WRITE setX
  )

  Q_PROPERTY(
    
    QJSValue
     y READ y WRITE setY
  )

  Q_PROPERTY(
    
    QJSValue
     width READ width WRITE setWidth
  )

  Q_PROPERTY(
    
    QJSValue
     height READ height WRITE setHeight
  )

  Q_PROPERTY(
    
    QJSValue
     minimumWidth READ minimumWidth WRITE setMinimumWidth
  )

  Q_PROPERTY(
    
    QJSValue
     minimumHeight READ minimumHeight WRITE setMinimumHeight
  )

  Q_PROPERTY(
    
    QJSValue
     maximumWidth READ maximumWidth WRITE setMaximumWidth
  )

  Q_PROPERTY(
    
    QJSValue
     maximumHeight READ maximumHeight WRITE setMaximumHeight
  )

  Q_PROPERTY(
    
    QJSValue
     visible READ isVisible WRITE setVisible
  )

  Q_PROPERTY(
    
    QJSValue
     active READ isActive
  )

  Q_PROPERTY(
    
    QJSValue
     visibility READ visibility WRITE setVisibility
  )

  Q_PROPERTY(
    
    QJSValue
     contentOrientation READ contentOrientation WRITE reportContentOrientationChange
  )

  Q_PROPERTY(
    
    QJSValue
     opacity READ opacity WRITE setOpacity
  )

  Q_PROPERTY(
    
    QJSValue
     transientParent READ transientParent WRITE setTransientParent
  )


    private:
      // disable copy constructor:
      QWindow_Wrapper(const QWindow_Wrapper&);

    public:
      // initialization of QWindow:
      static void init(RJSApi& handler);

      
        static QWindow* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QWindow:
          for (int i=0; i<basecasters_QWindow.length(); i++) {
            RJSBasecaster_QWindow* basecaster = basecasters_QWindow[i];
            QWindow* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QWindow:
          if (t==RJSType_QWindow::getIdStatic()) {
            return (QWindow*)vp;
          }

          qWarning() << "QWindow_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QWindow* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QWindow*: wrapper wraps NULL";
          }

          QWindow* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QWindow*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Visibility {
    Hidden = QWindow::Hidden,
AutomaticVisibility = QWindow::AutomaticVisibility,
Windowed = QWindow::Windowed,
Minimized = QWindow::Minimized,
Maximized = QWindow::Maximized,
FullScreen = QWindow::FullScreen,

  };
  Q_ENUM(Visibility)

  enum AncestorMode {
    ExcludeTransients = QWindow::ExcludeTransients,
IncludeTransients = QWindow::IncludeTransients,

  };
  Q_ENUM(AncestorMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QWindow_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QWindow_Wrapper(RJSApi& h, QWindow* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QWindow_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#ifdef Q_QDOC

#else

#endif

    // Class: QWindow
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QWindow_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_CURSOR

#endif

#if QT_CONFIG(wheelevent)

#endif

#if QT_CONFIG(tabletevent)

#endif


    // non-static functions:
    
    // Class: QWindow
    // Function: objectName
    // Source: QObject
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
            
    // Class: QWindow
    // Function: setObjectName
    // Source: QObject
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
            
    // Class: QWindow
    // Function: isWidgetType
    // Source: QObject
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
            
    // Class: QWindow
    // Function: isWindowType
    // Source: QObject
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
            
    // Class: QWindow
    // Function: signalsBlocked
    // Source: QObject
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
            
    // Class: QWindow
    // Function: blockSignals
    // Source: QObject
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
            
    // Class: QWindow
    // Function: findChild
    // Source: QObject
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
            
    // Class: QWindow
    // Function: children
    // Source: QObject
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
            
    // Class: QWindow
    // Function: installEventFilter
    // Source: QObject
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
            
    // Class: QWindow
    // Function: removeEventFilter
    // Source: QObject
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
            
    // Class: QWindow
    // Function: dumpObjectTree
    // Source: QObject
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
            
    // Class: QWindow
    // Function: dumpObjectInfo
    // Source: QObject
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
            
    // Class: QWindow
    // Function: setProperty
    // Source: QObject
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
            
    // Class: QWindow
    // Function: property
    // Source: QObject
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
            
    // Class: QWindow
    // Function: dynamicPropertyNames
    // Source: QObject
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
            
    // Class: QWindow
    // Function: deleteLater
    // Source: QObject
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
            
#ifdef Q_QDOC

#else

#endif

    // Class: QWindow
    // Function: isVisible
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isVisible
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: visibility
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  visibility
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setVisibility
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVisibility
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: create
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  create
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: parent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  parent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QWindow
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
            
    // Class: QWindow
    // Function: isTopLevel
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTopLevel
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: isModal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isModal
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: modality
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  modality
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setModality
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setModality
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setFlags
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFlags
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: flags
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flags
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setFlag
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFlag
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
            
    // Class: QWindow
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: title
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  title
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setOpacity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOpacity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: opacity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  opacity
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: mask
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mask
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: isActive
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isActive
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: reportContentOrientationChange
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reportContentOrientationChange
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: contentOrientation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contentOrientation
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: devicePixelRatio
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  devicePixelRatio
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: windowState
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowState
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: windowStates
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  windowStates
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setWindowState
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowState
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setWindowStates
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWindowStates
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setTransientParent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTransientParent
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: transientParent
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  transientParent
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: isAncestorOf
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAncestorOf
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
            
    // Class: QWindow
    // Function: isExposed
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isExposed
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: minimumWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: minimumHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: maximumWidth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumWidth
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: maximumHeight
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumHeight
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: minimumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  minimumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: maximumSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: baseSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  baseSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: sizeIncrement
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sizeIncrement
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setMinimumSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setMaximumSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setBaseSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBaseSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setSizeIncrement
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSizeIncrement
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: geometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  geometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: frameMargins
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameMargins
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: frameGeometry
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  frameGeometry
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: framePosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  framePosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setFramePosition
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFramePosition
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: width
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  width
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: height
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  height
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: x
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  x
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: y
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  y
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: size
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: position
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  position
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setPosition
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPosition
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
            
    // Class: QWindow
    // Function: resize
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resize
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
            
    // Class: QWindow
    // Function: setFilePath
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setFilePath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: filePath
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  filePath
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setIcon
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIcon
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: icon
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  icon
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: destroy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  destroy
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: setKeyboardGrabEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeyboardGrabEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setMouseGrabEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMouseGrabEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: screen
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  screen
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setScreen
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setScreen
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: focusObject
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  focusObject
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: mapToGlobal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapToGlobal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: mapFromGlobal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mapFromGlobal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#ifndef QT_NO_CURSOR

    // Class: QWindow
    // Function: cursor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  cursor
              (

                
              )
              
                const
              
              ;
            
    // Class: QWindow
    // Function: setCursor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCursor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: unsetCursor
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  unsetCursor
              (

                
              )
              
              ;
            
#endif

    // Class: QWindow
    // Function: requestActivate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  requestActivate
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: setVisible
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setVisible
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: show
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  show
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: hide
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hide
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: showMinimized
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showMinimized
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: showMaximized
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showMaximized
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: showFullScreen
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showFullScreen
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: showNormal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  showNormal
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: close
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  close
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: raise
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  raise
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: lower
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lower
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: startSystemResize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startSystemResize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: startSystemMove
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startSystemMove
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: setTitle
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTitle
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setX
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setX
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setY
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setY
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setGeometry
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setGeometry
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setMinimumWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setMinimumHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMinimumHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setMaximumWidth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumWidth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: setMaximumHeight
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaximumHeight
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: alert
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  alert
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: requestUpdate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  requestUpdate
              (

                
              )
              
              ;
            
    // Class: QWindow
    // Function: screenChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void screenChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void screenChangedEmitter(
                QScreen* screen
              );
            
    // Class: QWindow
    // Function: modalityChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void modalityChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void modalityChangedEmitter(
                Qt::WindowModality modality
              );
            
    // Class: QWindow
    // Function: windowStateChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void windowStateChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void windowStateChangedEmitter(
                Qt::WindowState windowState
              );
            
    // Class: QWindow
    // Function: windowTitleChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void windowTitleChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void windowTitleChangedEmitter(
                const QString& title
              );
            
    // Class: QWindow
    // Function: xChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void xChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void xChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: yChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void yChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void yChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: widthChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void widthChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void widthChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: heightChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void heightChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void heightChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: minimumWidthChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void minimumWidthChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void minimumWidthChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: minimumHeightChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void minimumHeightChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void minimumHeightChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: maximumWidthChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void maximumWidthChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void maximumWidthChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: maximumHeightChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void maximumHeightChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void maximumHeightChangedEmitter(
                int arg
              );
            
    // Class: QWindow
    // Function: visibleChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void visibleChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void visibleChangedEmitter(
                bool arg
              );
            
    // Class: QWindow
    // Function: visibilityChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void visibilityChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void visibilityChangedEmitter(
                QWindow::Visibility visibility
              );
            
    // Class: QWindow
    // Function: activeChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void activeChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void activeChangedEmitter(
                
              );
            
    // Class: QWindow
    // Function: contentOrientationChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void contentOrientationChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void contentOrientationChangedEmitter(
                Qt::ScreenOrientation orientation
              );
            
    // Class: QWindow
    // Function: focusObjectChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void focusObjectChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void focusObjectChangedEmitter(
                QObject* object
              );
            
    // Class: QWindow
    // Function: opacityChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void opacityChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void opacityChangedEmitter(
                qreal opacity
              );
            
    // Class: QWindow
    // Function: transientParentChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void transientParentChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void transientParentChangedEmitter(
                QWindow* transientParent
              );
            
    // Class: QWindow
    // Function: resizeEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      resizeEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: paintEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      paintEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QWindow
    // Function: mouseMoveEvent
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                   
                      // function is protected, this function can be called from JS implementation to call implementation of super class: 
                      mouseMoveEventSuper
                    
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_CONFIG(wheelevent)

#endif

#if QT_CONFIG(tabletevent)

#endif

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
          return RJSType_QWindow::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QWindow* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QWindow* getWrapped() const {
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

        
          // get wrapped base object or nullptr:
          QWindow_Base* getWrappedBase() {
            QWindow* w = getWrapped();
            return dynamic_cast<QWindow_Base*>(w);
          }

          QWindow_Base* getWrappedBase() const {
            QWindow* w = getWrapped();
            return dynamic_cast<QWindow_Base*>(w);
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

        
          //void setRecFlag(bool on) const {
          //  QWindow_Base* wb = getWrappedBase();
          //  if (wb) {
          //    wb->setRecFlag(on);
          //  }
          //}
        

        private:
        // wrapped object:
        QWindow* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QWindow*> basecasters_QWindow;

      public:
        static void registerBasecaster_QWindow(RJSBasecaster_QWindow* bc) {
          basecasters_QWindow.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QWindow_Wrapper*)

    Q_DECLARE_INTERFACE(QWindow_Wrapper, "org.qcad.QWindow_Wrapper")

  
  #endif
  
