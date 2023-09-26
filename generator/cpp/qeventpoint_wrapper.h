
  // Auto generated
  
    #ifndef QEVENTPOINT_H_WRAPPER
    #define QEVENTPOINT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QEventPoint>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QEventPoint
    class QEventPoint_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    
  Q_PROPERTY(
    
    QJSValue
     id READ id
  )

  Q_PROPERTY(
    
    QJSValue
     state READ state
  )

  Q_PROPERTY(
    
    QJSValue
     timestamp READ timestamp
  )

  Q_PROPERTY(
    
    QJSValue
     pressTimestamp READ pressTimestamp
  )

  Q_PROPERTY(
    
    QJSValue
     lastTimestamp READ lastTimestamp
  )

  Q_PROPERTY(
    
    QJSValue
     timeHeld READ timeHeld
  )

  Q_PROPERTY(
    
    QJSValue
     pressure READ pressure
  )

  Q_PROPERTY(
    
    QJSValue
     rotation READ rotation
  )

  Q_PROPERTY(
    
    QJSValue
     ellipseDiameters READ ellipseDiameters
  )

  Q_PROPERTY(
    
    QJSValue
     position READ position
  )

  Q_PROPERTY(
    
    QJSValue
     pressPosition READ pressPosition
  )

  Q_PROPERTY(
    
    QJSValue
     grabPosition READ grabPosition
  )

  Q_PROPERTY(
    
    QJSValue
     lastPosition READ lastPosition
  )

  Q_PROPERTY(
    
    QJSValue
     scenePosition READ scenePosition
  )

  Q_PROPERTY(
    
    QJSValue
     scenePressPosition READ scenePressPosition
  )

  Q_PROPERTY(
    
    QJSValue
     sceneGrabPosition READ sceneGrabPosition
  )

  Q_PROPERTY(
    
    QJSValue
     sceneLastPosition READ sceneLastPosition
  )

  Q_PROPERTY(
    
    QJSValue
     globalPosition READ globalPosition
  )

  Q_PROPERTY(
    
    QJSValue
     globalPressPosition READ globalPressPosition
  )

  Q_PROPERTY(
    
    QJSValue
     globalGrabPosition READ globalGrabPosition
  )

  Q_PROPERTY(
    
    QJSValue
     globalLastPosition READ globalLastPosition
  )


    private:
      // disable copy constructor:
      QEventPoint_Wrapper(const QEventPoint_Wrapper&);

    public:
      // initialization of QEventPoint:
      static void init(RJSApi& handler);

      
        static QEventPoint* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QEventPoint.length(); i++) {
            RJSBasecaster_QEventPoint* basecaster = basecasters_QEventPoint[i];
            QEventPoint* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QEventPoint::getIdStatic()) {
            return (QEventPoint*)vp;
          }

          qWarning() << "QEventPoint::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QEventPoint* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QEventPoint*: wrapper wraps NULL";
          }

          QEventPoint* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QEventPoint*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum State {
    Unknown = QEventPoint::Unknown,
Stationary = QEventPoint::Stationary,
Pressed = QEventPoint::Pressed,
Updated = QEventPoint::Updated,
Released = QEventPoint::Released,

  };
  Q_ENUM(State)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QEventPoint_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QEventPoint_Wrapper(RJSApi& h, QEventPoint* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QEventPoint_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QEventPoint
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QEventPoint_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
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
            

    // non-static functions:
    
    // Class: QEventPoint
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QEventPoint
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
            
    // Class: QEventPoint
    // Function: pressPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pressPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: grabPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  grabPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: lastPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: scenePosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scenePosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: scenePressPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scenePressPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: sceneGrabPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sceneGrabPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: sceneLastPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sceneLastPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: globalPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: globalPressPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalPressPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: globalGrabPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalGrabPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: globalLastPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  globalLastPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: normalizedPosition
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  normalizedPosition
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: state
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  state
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: id
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  id
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: timestamp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: lastTimestamp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  lastTimestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: pressTimestamp
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pressTimestamp
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: timeHeld
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  timeHeld
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: pressure
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pressure
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: rotation
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rotation
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: ellipseDiameters
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ellipseDiameters
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: isAccepted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isAccepted
              (

                
              )
              
                const
              
              ;
            
    // Class: QEventPoint
    // Function: setAccepted
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAccepted
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

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
          return RJSType_QEventPoint::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QEventPoint* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QEventPoint* getWrapped() const {
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
        QEventPoint* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QEventPoint*> basecasters_QEventPoint;

      public:
        static void registerBasecaster_QEventPoint(RJSBasecaster_QEventPoint* bc) {
          basecasters_QEventPoint.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QEventPoint_Wrapper*)

    Q_DECLARE_INTERFACE(QEventPoint_Wrapper, "org.qcad.QEventPoint_Wrapper")

  
  #endif
  