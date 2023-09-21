
  // Auto generated
  
  #ifndef QCOREAPPLICATION_H_WRAPPER
  #define QCOREAPPLICATION_H_WRAPPER

  // include header:
  //#include "header_h.h"
  
      #include "../RJSHelper.h"
    

  #include "RJSWrapperObj.h"
  
        #include <QTranslator>
      
        #include <QStringList>
      
        #include <QAbstractEventDispatcher>
      
        #include <QAbstractNativeEventFilter>
      
    #include <QQmlEngine>
    #include "RJSType.h"

    
        #include <QCoreApplication>
      
      // singleton class wrapper for static functions:
      class QCoreApplication_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QCoreApplication_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {
      }

      

      // static functions:
      
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
    // Function: arguments
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  arguments
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: setAttribute
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAttribute
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
            
    // Class: QCoreApplication
    // Function: testAttribute
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  testAttribute
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: setSetuidAllowed
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSetuidAllowed
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: isSetuidAllowed
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSetuidAllowed
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: instance
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  instance
              (

                
              )
              
              ;
            
#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: exec
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exec
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: processEvents
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  processEvents
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
            
    // Class: QCoreApplication
    // Function: exit
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  exit
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: sendEvent
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sendEvent
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
            
    // Class: QCoreApplication
    // Function: postEvent
    // Source: 
    // Static: true
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  postEvent
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
            
    // Class: QCoreApplication
    // Function: sendPostedEvents
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sendPostedEvents
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
            
    // Class: QCoreApplication
    // Function: removePostedEvents
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removePostedEvents
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
            
    // Class: QCoreApplication
    // Function: startingUp
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startingUp
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: closingDown
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  closingDown
              (

                
              )
              
              ;
            
#endif

    // Class: QCoreApplication
    // Function: applicationDirPath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationDirPath
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: applicationFilePath
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationFilePath
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: applicationPid
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationPid
              (

                
              )
              
              ;
            
#if QT_CONFIG(library)

    // Class: QCoreApplication
    // Function: setLibraryPaths
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLibraryPaths
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: libraryPaths
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  libraryPaths
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: addLibraryPath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addLibraryPath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: removeLibraryPath
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeLibraryPath
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

#ifndef QT_NO_TRANSLATION

    // Class: QCoreApplication
    // Function: installTranslator
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  installTranslator
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: removeTranslator
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  removeTranslator
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: quit
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  quit
              (

                
              )
              
              ;
            
#endif

#ifdef QT_NO_QOBJECT

#endif

#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_QOBJECT

#endif


      private:
          RJSApi& handler;
          //static QCoreApplication_WrapperSingleton* _singleInstance;

          // constants:
          
      };

    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QCoreApplication
    class QCoreApplication_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     applicationName READ applicationName WRITE setApplicationName
  )

  Q_PROPERTY(
    
    QJSValue
     applicationVersion READ applicationVersion WRITE setApplicationVersion
  )

  Q_PROPERTY(
    
    QJSValue
     organizationDomain READ organizationDomain WRITE setOrganizationDomain
  )

  Q_PROPERTY(
    
    QJSValue
     organizationName READ organizationName WRITE setOrganizationName
  )

  Q_PROPERTY(
    
    QJSValue
     quitLockEnabled READ isQuitLockEnabled WRITE setQuitLockEnabled
  )


    private:
      // disable copy constructor:
      QCoreApplication_Wrapper(const QCoreApplication_Wrapper&);

    public:
      // initialization of QCoreApplication:
      static void init(RJSApi& handler);

      
        static QCoreApplication* castToBase(void* vp, /*RJSType::WrappedType*/ int t) {
          switch (t) {
          // check if pointer points to derrived type:
          
            case RJSType::QApplication_Type:
              return (QCoreApplication*)(QApplication*)vp;
          
            case RJSType::QGuiApplication_Type:
              return (QCoreApplication*)(QGuiApplication*)vp;
          

          // pointer to desired type:
          
              case RJSType::QCoreApplication_Type:
                return (QCoreApplication*)vp;
            

          default:
            return nullptr;
          }
        }

        static QCoreApplication* getWrappedBase(RJSWrapper* wrapper) {
          RJSType::WrappedType t = (RJSType::WrappedType)wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QCoreApplication*: wrapper wraps NULL";
          }

          QCoreApplication* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QCoreApplication*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QCoreApplication_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QCoreApplication_Wrapper(RJSApi& h, QCoreApplication* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QCoreApplication_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_TRANSLATION

#endif

#ifndef QT_NO_QOBJECT

#endif

#ifdef QT_NO_QOBJECT

#endif

#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_QOBJECT

#endif


    // non-static functions:
    
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
    // Function: setParent
    // Source: QObject
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
    // Function: parent
    // Source: QObject
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
            
    // Class: QCoreApplication
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
            
    // Class: QCoreApplication
    // Function: setOrganizationDomain
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOrganizationDomain
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: organizationDomain
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  organizationDomain
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: setOrganizationName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOrganizationName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: organizationName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  organizationName
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: setApplicationName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: applicationName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationName
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: setApplicationVersion
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationVersion
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: applicationVersion
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationVersion
              (

                
              )
              
              ;
            
#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: notify
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  notify
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
            
#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_TRANSLATION

#endif

#ifndef QT_NO_QOBJECT

    // Class: QCoreApplication
    // Function: isQuitLockEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isQuitLockEnabled
              (

                
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: setQuitLockEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setQuitLockEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QCoreApplication
    // Function: organizationNameChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void organizationNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void organizationNameChangedEmitter(
                
              );
            
    // Class: QCoreApplication
    // Function: organizationDomainChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void organizationDomainChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void organizationDomainChangedEmitter(
                
              );
            
    // Class: QCoreApplication
    // Function: applicationNameChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationNameChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationNameChangedEmitter(
                
              );
            
    // Class: QCoreApplication
    // Function: applicationVersionChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void applicationVersionChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void applicationVersionChangedEmitter(
                
              );
            
#endif

#ifdef QT_NO_QOBJECT

#endif

#ifndef QT_NO_QOBJECT

#endif

#if QT_CONFIG(library)

#endif

#ifndef QT_NO_QOBJECT

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
        virtual /*RJSType::WrappedType*/ int getWrappedType() const {
          
              return RJSType::QCoreApplication_Type;
            
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QCoreApplication* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QCoreApplication* getWrapped() const {
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
        QCoreApplication* wrapped;

        

        bool wrappedCreated;
      
    };

    Q_DECLARE_METATYPE(QCoreApplication_Wrapper*)

    Q_DECLARE_INTERFACE(QCoreApplication_Wrapper, "org.qcad.QCoreApplication_Wrapper")

  
  #endif
  