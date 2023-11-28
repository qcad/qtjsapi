
  // Auto generated
  
    #ifndef QGRAPHICSEFFECT_H_WRAPPER
    #define QGRAPHICSEFFECT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QGraphicsItem>
      
        #include <QStyleOption>
      
        #include <QPainter>
      
        #include <QPixmap>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGraphicsEffect>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QGraphicsEffect_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QGraphicsEffect_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QGraphicsEffect
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
          //static QGraphicsEffect_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGraphicsEffect
    class QTJSAPI_EXPORT QGraphicsEffect_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )


    private:
      // disable copy constructor:
      QGraphicsEffect_Wrapper(const QGraphicsEffect_Wrapper&);

    public:
      // initialization of QGraphicsEffect:
      static void init(RJSApi& handler);

      
        static QGraphicsEffect* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QGraphicsColorizeEffect::getIdStatic()) {
                return (QGraphicsEffect*)(QGraphicsColorizeEffect*)vp;
              }
              
              if (t==RJSType_QGraphicsBlurEffect::getIdStatic()) {
                return (QGraphicsEffect*)(QGraphicsBlurEffect*)vp;
              }
              
              if (t==RJSType_QGraphicsDropShadowEffect::getIdStatic()) {
                return (QGraphicsEffect*)(QGraphicsDropShadowEffect*)vp;
              }
              
              if (t==RJSType_QGraphicsOpacityEffect::getIdStatic()) {
                return (QGraphicsEffect*)(QGraphicsOpacityEffect*)vp;
              }
              

          // hook for modules to cast from other types to base QGraphicsEffect:
          for (int i=0; i<basecasters_QGraphicsEffect.length(); i++) {
            RJSBasecaster_QGraphicsEffect* basecaster = basecasters_QGraphicsEffect[i];
            QGraphicsEffect* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QGraphicsEffect:
          if (t==RJSType_QGraphicsEffect::getIdStatic()) {
            return (QGraphicsEffect*)vp;
          }

          qWarning() << "QGraphicsEffect_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QGraphicsEffect* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGraphicsEffect*: wrapper wraps NULL";
          }

          QGraphicsEffect* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGraphicsEffect*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ChangeFlag {
    SourceAttached = QGraphicsEffect::SourceAttached,
SourceDetached = QGraphicsEffect::SourceDetached,
SourceBoundingRectChanged = QGraphicsEffect::SourceBoundingRectChanged,
SourceInvalidated = QGraphicsEffect::SourceInvalidated,

  };
  Q_ENUM(ChangeFlag)

  enum PixmapPadMode {
    NoPad = QGraphicsEffect::NoPad,
PadToTransparentBorder = QGraphicsEffect::PadToTransparentBorder,
PadToEffectiveBoundingRect = QGraphicsEffect::PadToEffectiveBoundingRect,

  };
  Q_ENUM(PixmapPadMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGraphicsEffect_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGraphicsEffect_Wrapper(RJSApi& h, QGraphicsEffect* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGraphicsEffect_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
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
            
    // Class: QGraphicsEffect
    // Function: boundingRectFor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRectFor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGraphicsEffect
    // Function: boundingRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsEffect
    // Function: isEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsEffect
    // Function: setEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsEffect
    // Function: update
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
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
          return RJSType_QGraphicsEffect::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QGraphicsEffect* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGraphicsEffect* getWrapped() const {
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
        QGraphicsEffect* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGraphicsEffect*> basecasters_QGraphicsEffect;

      public:
        static void registerBasecaster_QGraphicsEffect(RJSBasecaster_QGraphicsEffect* bc) {
          basecasters_QGraphicsEffect.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGraphicsEffect_Wrapper*)

    Q_DECLARE_INTERFACE(QGraphicsEffect_Wrapper, "org.qcad.QGraphicsEffect_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGraphicsColorizeEffect>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGraphicsColorizeEffect
    class QTJSAPI_EXPORT QGraphicsColorizeEffect_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     strength READ strength WRITE setStrength
  )


    private:
      // disable copy constructor:
      QGraphicsColorizeEffect_Wrapper(const QGraphicsColorizeEffect_Wrapper&);

    public:
      // initialization of QGraphicsColorizeEffect:
      static void init(RJSApi& handler);

      
        static QGraphicsColorizeEffect* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QGraphicsColorizeEffect:
          for (int i=0; i<basecasters_QGraphicsColorizeEffect.length(); i++) {
            RJSBasecaster_QGraphicsColorizeEffect* basecaster = basecasters_QGraphicsColorizeEffect[i];
            QGraphicsColorizeEffect* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QGraphicsColorizeEffect:
          if (t==RJSType_QGraphicsColorizeEffect::getIdStatic()) {
            return (QGraphicsColorizeEffect*)vp;
          }

          qWarning() << "QGraphicsColorizeEffect_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QGraphicsColorizeEffect* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGraphicsColorizeEffect*: wrapper wraps NULL";
          }

          QGraphicsColorizeEffect* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGraphicsColorizeEffect*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ChangeFlag {
    SourceAttached = QGraphicsColorizeEffect::SourceAttached,
SourceDetached = QGraphicsColorizeEffect::SourceDetached,
SourceBoundingRectChanged = QGraphicsColorizeEffect::SourceBoundingRectChanged,
SourceInvalidated = QGraphicsColorizeEffect::SourceInvalidated,

  };
  Q_ENUM(ChangeFlag)

  enum PixmapPadMode {
    NoPad = QGraphicsColorizeEffect::NoPad,
PadToTransparentBorder = QGraphicsColorizeEffect::PadToTransparentBorder,
PadToEffectiveBoundingRect = QGraphicsColorizeEffect::PadToEffectiveBoundingRect,

  };
  Q_ENUM(PixmapPadMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGraphicsColorizeEffect_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGraphicsColorizeEffect_Wrapper(RJSApi& h, QGraphicsColorizeEffect* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGraphicsColorizeEffect_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QGraphicsColorizeEffect
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QGraphicsColorizeEffect_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QGraphicsColorizeEffect
    // Function: boundingRectFor
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRectFor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: boundingRect
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: isEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: setEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: update
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
              )
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: color
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  color
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: strength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  strength
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsColorizeEffect
    // Function: setStrength
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setStrength
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_QGraphicsColorizeEffect::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QGraphicsColorizeEffect* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGraphicsColorizeEffect* getWrapped() const {
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
        QGraphicsColorizeEffect* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGraphicsColorizeEffect*> basecasters_QGraphicsColorizeEffect;

      public:
        static void registerBasecaster_QGraphicsColorizeEffect(RJSBasecaster_QGraphicsColorizeEffect* bc) {
          basecasters_QGraphicsColorizeEffect.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGraphicsColorizeEffect_Wrapper*)

    Q_DECLARE_INTERFACE(QGraphicsColorizeEffect_Wrapper, "org.qcad.QGraphicsColorizeEffect_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGraphicsBlurEffect>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QGraphicsBlurEffect_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QGraphicsBlurEffect_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QGraphicsBlurEffect
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
          //static QGraphicsBlurEffect_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGraphicsBlurEffect
    class QTJSAPI_EXPORT QGraphicsBlurEffect_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     objectName READ objectName WRITE setObjectName
  )

  Q_PROPERTY(
    
    QJSValue
     blurHints READ blurHints WRITE setBlurHints
  )


    private:
      // disable copy constructor:
      QGraphicsBlurEffect_Wrapper(const QGraphicsBlurEffect_Wrapper&);

    public:
      // initialization of QGraphicsBlurEffect:
      static void init(RJSApi& handler);

      
        static QGraphicsBlurEffect* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QGraphicsBlurEffect:
          for (int i=0; i<basecasters_QGraphicsBlurEffect.length(); i++) {
            RJSBasecaster_QGraphicsBlurEffect* basecaster = basecasters_QGraphicsBlurEffect[i];
            QGraphicsBlurEffect* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QGraphicsBlurEffect:
          if (t==RJSType_QGraphicsBlurEffect::getIdStatic()) {
            return (QGraphicsBlurEffect*)vp;
          }

          qWarning() << "QGraphicsBlurEffect_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QGraphicsBlurEffect* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGraphicsBlurEffect*: wrapper wraps NULL";
          }

          QGraphicsBlurEffect* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGraphicsBlurEffect*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ChangeFlag {
    SourceAttached = QGraphicsBlurEffect::SourceAttached,
SourceDetached = QGraphicsBlurEffect::SourceDetached,
SourceBoundingRectChanged = QGraphicsBlurEffect::SourceBoundingRectChanged,
SourceInvalidated = QGraphicsBlurEffect::SourceInvalidated,

  };
  Q_ENUM(ChangeFlag)

  enum PixmapPadMode {
    NoPad = QGraphicsBlurEffect::NoPad,
PadToTransparentBorder = QGraphicsBlurEffect::PadToTransparentBorder,
PadToEffectiveBoundingRect = QGraphicsBlurEffect::PadToEffectiveBoundingRect,

  };
  Q_ENUM(PixmapPadMode)

  enum BlurHint {
    PerformanceHint = QGraphicsBlurEffect::PerformanceHint,
QualityHint = QGraphicsBlurEffect::QualityHint,
AnimationHint = QGraphicsBlurEffect::AnimationHint,

  };
  Q_ENUM(BlurHint)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGraphicsBlurEffect_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGraphicsBlurEffect_Wrapper(RJSApi& h, QGraphicsBlurEffect* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGraphicsBlurEffect_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QGraphicsBlurEffect
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QGraphicsBlurEffect_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
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
            
    // Class: QGraphicsBlurEffect
    // Function: boundingRect
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: isEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: setEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: update
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
              )
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: boundingRectFor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRectFor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: blurRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blurRadius
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: blurHints
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blurHints
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: setBlurRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlurRadius
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsBlurEffect
    // Function: setBlurHints
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlurHints
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_QGraphicsBlurEffect::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QGraphicsBlurEffect* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGraphicsBlurEffect* getWrapped() const {
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
        QGraphicsBlurEffect* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGraphicsBlurEffect*> basecasters_QGraphicsBlurEffect;

      public:
        static void registerBasecaster_QGraphicsBlurEffect(RJSBasecaster_QGraphicsBlurEffect* bc) {
          basecasters_QGraphicsBlurEffect.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGraphicsBlurEffect_Wrapper*)

    Q_DECLARE_INTERFACE(QGraphicsBlurEffect_Wrapper, "org.qcad.QGraphicsBlurEffect_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGraphicsDropShadowEffect>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGraphicsDropShadowEffect
    class QTJSAPI_EXPORT QGraphicsDropShadowEffect_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     xOffset READ xOffset WRITE setXOffset
  )

  Q_PROPERTY(
    
    QJSValue
     yOffset READ yOffset WRITE setYOffset
  )

  Q_PROPERTY(
    
    QJSValue
     blurRadius READ blurRadius WRITE setBlurRadius
  )

  Q_PROPERTY(
    
    QJSValue
     color READ color WRITE setColor
  )


    private:
      // disable copy constructor:
      QGraphicsDropShadowEffect_Wrapper(const QGraphicsDropShadowEffect_Wrapper&);

    public:
      // initialization of QGraphicsDropShadowEffect:
      static void init(RJSApi& handler);

      
        static QGraphicsDropShadowEffect* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QGraphicsDropShadowEffect:
          for (int i=0; i<basecasters_QGraphicsDropShadowEffect.length(); i++) {
            RJSBasecaster_QGraphicsDropShadowEffect* basecaster = basecasters_QGraphicsDropShadowEffect[i];
            QGraphicsDropShadowEffect* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QGraphicsDropShadowEffect:
          if (t==RJSType_QGraphicsDropShadowEffect::getIdStatic()) {
            return (QGraphicsDropShadowEffect*)vp;
          }

          qWarning() << "QGraphicsDropShadowEffect_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QGraphicsDropShadowEffect* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGraphicsDropShadowEffect*: wrapper wraps NULL";
          }

          QGraphicsDropShadowEffect* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGraphicsDropShadowEffect*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ChangeFlag {
    SourceAttached = QGraphicsDropShadowEffect::SourceAttached,
SourceDetached = QGraphicsDropShadowEffect::SourceDetached,
SourceBoundingRectChanged = QGraphicsDropShadowEffect::SourceBoundingRectChanged,
SourceInvalidated = QGraphicsDropShadowEffect::SourceInvalidated,

  };
  Q_ENUM(ChangeFlag)

  enum PixmapPadMode {
    NoPad = QGraphicsDropShadowEffect::NoPad,
PadToTransparentBorder = QGraphicsDropShadowEffect::PadToTransparentBorder,
PadToEffectiveBoundingRect = QGraphicsDropShadowEffect::PadToEffectiveBoundingRect,

  };
  Q_ENUM(PixmapPadMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGraphicsDropShadowEffect_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGraphicsDropShadowEffect_Wrapper(RJSApi& h, QGraphicsDropShadowEffect* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGraphicsDropShadowEffect_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QGraphicsDropShadowEffect
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QGraphicsDropShadowEffect_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QGraphicsDropShadowEffect
    // Function: boundingRect
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: isEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: setEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: update
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
              )
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: boundingRectFor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRectFor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: offset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  offset
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: xOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  xOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: yOffset
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  yOffset
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: blurRadius
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  blurRadius
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: color
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  color
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: setOffset
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOffset
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
            
    // Class: QGraphicsDropShadowEffect
    // Function: setXOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setXOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: setYOffset
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setYOffset
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: setBlurRadius
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBlurRadius
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsDropShadowEffect
    // Function: setColor
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setColor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_QGraphicsDropShadowEffect::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QGraphicsDropShadowEffect* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGraphicsDropShadowEffect* getWrapped() const {
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
        QGraphicsDropShadowEffect* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGraphicsDropShadowEffect*> basecasters_QGraphicsDropShadowEffect;

      public:
        static void registerBasecaster_QGraphicsDropShadowEffect(RJSBasecaster_QGraphicsDropShadowEffect* bc) {
          basecasters_QGraphicsDropShadowEffect.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGraphicsDropShadowEffect_Wrapper*)

    Q_DECLARE_INTERFACE(QGraphicsDropShadowEffect_Wrapper, "org.qcad.QGraphicsDropShadowEffect_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGraphicsOpacityEffect>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGraphicsOpacityEffect
    class QTJSAPI_EXPORT QGraphicsOpacityEffect_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     opacityMask READ opacityMask WRITE setOpacityMask
  )


    private:
      // disable copy constructor:
      QGraphicsOpacityEffect_Wrapper(const QGraphicsOpacityEffect_Wrapper&);

    public:
      // initialization of QGraphicsOpacityEffect:
      static void init(RJSApi& handler);

      
        static QGraphicsOpacityEffect* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QGraphicsOpacityEffect:
          for (int i=0; i<basecasters_QGraphicsOpacityEffect.length(); i++) {
            RJSBasecaster_QGraphicsOpacityEffect* basecaster = basecasters_QGraphicsOpacityEffect[i];
            QGraphicsOpacityEffect* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QGraphicsOpacityEffect:
          if (t==RJSType_QGraphicsOpacityEffect::getIdStatic()) {
            return (QGraphicsOpacityEffect*)vp;
          }

          qWarning() << "QGraphicsOpacityEffect_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QGraphicsOpacityEffect* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGraphicsOpacityEffect*: wrapper wraps NULL";
          }

          QGraphicsOpacityEffect* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGraphicsOpacityEffect*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ChangeFlag {
    SourceAttached = QGraphicsOpacityEffect::SourceAttached,
SourceDetached = QGraphicsOpacityEffect::SourceDetached,
SourceBoundingRectChanged = QGraphicsOpacityEffect::SourceBoundingRectChanged,
SourceInvalidated = QGraphicsOpacityEffect::SourceInvalidated,

  };
  Q_ENUM(ChangeFlag)

  enum PixmapPadMode {
    NoPad = QGraphicsOpacityEffect::NoPad,
PadToTransparentBorder = QGraphicsOpacityEffect::PadToTransparentBorder,
PadToEffectiveBoundingRect = QGraphicsOpacityEffect::PadToEffectiveBoundingRect,

  };
  Q_ENUM(PixmapPadMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGraphicsOpacityEffect_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGraphicsOpacityEffect_Wrapper(RJSApi& h, QGraphicsOpacityEffect* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGraphicsOpacityEffect_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QGraphicsOpacityEffect
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QGraphicsOpacityEffect_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QGraphicsOpacityEffect
    // Function: boundingRectFor
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRectFor
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGraphicsOpacityEffect
    // Function: boundingRect
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsOpacityEffect
    // Function: isEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsOpacityEffect
    // Function: setEnabled
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGraphicsOpacityEffect
    // Function: update
    // Source: QGraphicsEffect
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  update
              (

                
              )
              
              ;
            
    // Class: QGraphicsOpacityEffect
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
            
    // Class: QGraphicsOpacityEffect
    // Function: opacityMask
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  opacityMask
              (

                
              )
              
                const
              
              ;
            
    // Class: QGraphicsOpacityEffect
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
            
    // Class: QGraphicsOpacityEffect
    // Function: setOpacityMask
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOpacityMask
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
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
          return RJSType_QGraphicsOpacityEffect::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QGraphicsOpacityEffect* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGraphicsOpacityEffect* getWrapped() const {
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
        QGraphicsOpacityEffect* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGraphicsOpacityEffect*> basecasters_QGraphicsOpacityEffect;

      public:
        static void registerBasecaster_QGraphicsOpacityEffect(RJSBasecaster_QGraphicsOpacityEffect* bc) {
          basecasters_QGraphicsOpacityEffect.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGraphicsOpacityEffect_Wrapper*)

    Q_DECLARE_INTERFACE(QGraphicsOpacityEffect_Wrapper, "org.qcad.QGraphicsOpacityEffect_Wrapper")

  
  #endif
  
