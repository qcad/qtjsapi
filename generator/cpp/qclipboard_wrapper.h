
  // Auto generated
  
    #ifndef QCLIPBOARD_H_WRAPPER
    #define QCLIPBOARD_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QMimeData>
      
        #include <QImage>
      
        #include <QPixmap>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QClipboard>
      
      // singleton class wrapper for static functions:
      class QClipboard_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QClipboard_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QClipboard
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
            

      private:
          RJSApi& handler;
          //static QClipboard_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QClipboard
    class QClipboard_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QClipboard_Wrapper(const QClipboard_Wrapper&);

    public:
      // initialization of QClipboard:
      static void init(RJSApi& handler);

      
        static QClipboard* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QClipboard.length(); i++) {
            RJSBasecaster_QClipboard* basecaster = basecasters_QClipboard[i];
            QClipboard* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QClipboard::getIdStatic()) {
            return (QClipboard*)vp;
          }

          qWarning() << "QClipboard::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QClipboard* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QClipboard*: wrapper wraps NULL";
          }

          QClipboard* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QClipboard*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Mode {
    Clipboard = QClipboard::Clipboard,
Selection = QClipboard::Selection,
FindBuffer = QClipboard::FindBuffer,
LastMode = QClipboard::LastMode,

  };
  Q_ENUM(Mode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QClipboard_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QClipboard_Wrapper(RJSApi& h, QClipboard* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QClipboard_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
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
            
    // Class: QClipboard
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QClipboard
    // Function: supportsSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportsSelection
              (

                
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: supportsFindBuffer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportsFindBuffer
              (

                
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: ownsSelection
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownsSelection
              (

                
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: ownsClipboard
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownsClipboard
              (

                
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: ownsFindBuffer
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ownsFindBuffer
              (

                
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: text
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  text
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
            
    // Class: QClipboard
    // Function: setText
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setText
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
            
    // Class: QClipboard
    // Function: mimeData
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  mimeData
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: setMimeData
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMimeData
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
            
    // Class: QClipboard
    // Function: image
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  image
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: pixmap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pixmap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QClipboard
    // Function: setImage
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setImage
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
            
    // Class: QClipboard
    // Function: setPixmap
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPixmap
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
            
    // Class: QClipboard
    // Function: changed
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void changed(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void changedEmitter(
                QClipboard::Mode mode
              );
            
    // Class: QClipboard
    // Function: selectionChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void selectionChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void selectionChangedEmitter(
                
              );
            
    // Class: QClipboard
    // Function: findBufferChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void findBufferChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void findBufferChangedEmitter(
                
              );
            
    // Class: QClipboard
    // Function: dataChanged
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void dataChanged(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void dataChangedEmitter(
                
              );
            

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
          return RJSType_QClipboard::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QClipboard* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QClipboard* getWrapped() const {
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
        QClipboard* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QClipboard*> basecasters_QClipboard;

      public:
        static void registerBasecaster_QClipboard(RJSBasecaster_QClipboard* bc) {
          basecasters_QClipboard.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QClipboard_Wrapper*)

    Q_DECLARE_INTERFACE(QClipboard_Wrapper, "org.qcad.QClipboard_Wrapper")

  
  #endif
  