
  // Auto generated
  
    #ifndef QEASINGCURVE_H_WRAPPER
    #define QEASINGCURVE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QPointF>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QEasingCurve>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QEasingCurve
    class QTJSAPI_EXPORT QEasingCurve_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QEasingCurve_Wrapper(const QEasingCurve_Wrapper&);

    public:
      // initialization of QEasingCurve:
      static void init(RJSApi& handler);

      
        static QEasingCurve* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QEasingCurve:
          for (int i=0; i<basecasters_QEasingCurve.length(); i++) {
            RJSBasecaster_QEasingCurve* basecaster = basecasters_QEasingCurve[i];
            QEasingCurve* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QEasingCurve:
          if (t==RJSType_QEasingCurve::getIdStatic()) {
            return (QEasingCurve*)vp;
          }

          qWarning() << "QEasingCurve_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QEasingCurve* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QEasingCurve*: wrapper wraps NULL";
          }

          QEasingCurve* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QEasingCurve*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum Type {
    Linear = QEasingCurve::Linear,
InQuad = QEasingCurve::InQuad,
OutQuad = QEasingCurve::OutQuad,
InOutQuad = QEasingCurve::InOutQuad,
OutInQuad = QEasingCurve::OutInQuad,
InCubic = QEasingCurve::InCubic,
OutCubic = QEasingCurve::OutCubic,
InOutCubic = QEasingCurve::InOutCubic,
OutInCubic = QEasingCurve::OutInCubic,
InQuart = QEasingCurve::InQuart,
OutQuart = QEasingCurve::OutQuart,
InOutQuart = QEasingCurve::InOutQuart,
OutInQuart = QEasingCurve::OutInQuart,
InQuint = QEasingCurve::InQuint,
OutQuint = QEasingCurve::OutQuint,
InOutQuint = QEasingCurve::InOutQuint,
OutInQuint = QEasingCurve::OutInQuint,
InSine = QEasingCurve::InSine,
OutSine = QEasingCurve::OutSine,
InOutSine = QEasingCurve::InOutSine,
OutInSine = QEasingCurve::OutInSine,
InExpo = QEasingCurve::InExpo,
OutExpo = QEasingCurve::OutExpo,
InOutExpo = QEasingCurve::InOutExpo,
OutInExpo = QEasingCurve::OutInExpo,
InCirc = QEasingCurve::InCirc,
OutCirc = QEasingCurve::OutCirc,
InOutCirc = QEasingCurve::InOutCirc,
OutInCirc = QEasingCurve::OutInCirc,
InElastic = QEasingCurve::InElastic,
OutElastic = QEasingCurve::OutElastic,
InOutElastic = QEasingCurve::InOutElastic,
OutInElastic = QEasingCurve::OutInElastic,
InBack = QEasingCurve::InBack,
OutBack = QEasingCurve::OutBack,
InOutBack = QEasingCurve::InOutBack,
OutInBack = QEasingCurve::OutInBack,
InBounce = QEasingCurve::InBounce,
OutBounce = QEasingCurve::OutBounce,
InOutBounce = QEasingCurve::InOutBounce,
OutInBounce = QEasingCurve::OutInBounce,
InCurve = QEasingCurve::InCurve,
OutCurve = QEasingCurve::OutCurve,
SineCurve = QEasingCurve::SineCurve,
CosineCurve = QEasingCurve::CosineCurve,
BezierSpline = QEasingCurve::BezierSpline,
TCBSpline = QEasingCurve::TCBSpline,
Custom = QEasingCurve::Custom,
NCurveTypes = QEasingCurve::NCurveTypes,

  };
  Q_ENUM(Type)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QEasingCurve_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QEasingCurve_Wrapper(RJSApi& h, QEasingCurve* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QEasingCurve_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QEasingCurve
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QEasingCurve_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif

#ifndef QT_NO_DATASTREAM

#endif


    // non-static functions:
    
    // Class: QEasingCurve
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QEasingCurve
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
            
    // Class: QEasingCurve
    // Function: amplitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  amplitude
              (

                
              )
              
                const
              
              ;
            
    // Class: QEasingCurve
    // Function: setAmplitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAmplitude
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QEasingCurve
    // Function: period
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  period
              (

                
              )
              
                const
              
              ;
            
    // Class: QEasingCurve
    // Function: setPeriod
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPeriod
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QEasingCurve
    // Function: overshoot
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  overshoot
              (

                
              )
              
                const
              
              ;
            
    // Class: QEasingCurve
    // Function: setOvershoot
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOvershoot
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QEasingCurve
    // Function: addCubicBezierSegment
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addCubicBezierSegment
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
            
    // Class: QEasingCurve
    // Function: addTCBSegment
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addTCBSegment
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
            
    // Class: QEasingCurve
    // Function: toCubicSpline
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toCubicSpline
              (

                
              )
              
                const
              
              ;
            
    // Class: QEasingCurve
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
            
    // Class: QEasingCurve
    // Function: setType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QEasingCurve
    // Function: valueForProgress
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  valueForProgress
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif

#ifndef QT_NO_DATASTREAM

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
          return RJSType_QEasingCurve::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QEasingCurve* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QEasingCurve* getWrapped() const {
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
        QEasingCurve* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QEasingCurve*> basecasters_QEasingCurve;

      public:
        static void registerBasecaster_QEasingCurve(RJSBasecaster_QEasingCurve* bc) {
          basecasters_QEasingCurve.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QEasingCurve_Wrapper*)

    Q_DECLARE_INTERFACE(QEasingCurve_Wrapper, "org.qcad.QEasingCurve_Wrapper")

  
  #endif
  
