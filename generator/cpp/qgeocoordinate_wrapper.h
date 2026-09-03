
  // Auto generated
  
    #ifndef QGEOCOORDINATE_H_WRAPPER
    #define QGEOCOORDINATE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #ifdef QT_POSITIONING_LIB
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGeoCoordinate>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGeoCoordinate
    class QTJSAPI_EXPORT QGeoCoordinate_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QGeoCoordinate_Wrapper(const QGeoCoordinate_Wrapper&);

    public:
      // initialization of QGeoCoordinate:
      static void init(RJSApi& handler);

      
        static QGeoCoordinate* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QGeoCoordinate:
          for (int i=0; i<basecasters_QGeoCoordinate.length(); i++) {
            RJSBasecaster_QGeoCoordinate* basecaster = basecasters_QGeoCoordinate[i];
            QGeoCoordinate* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QGeoCoordinate:
          if (t==RJSType_QGeoCoordinate::getIdStatic()) {
            return (QGeoCoordinate*)vp;
          }

          qWarning() << "QGeoCoordinate_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QGeoCoordinate* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGeoCoordinate*: wrapper wraps NULL";
          }

          QGeoCoordinate* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGeoCoordinate*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum CoordinateType {
    InvalidCoordinate = QGeoCoordinate::InvalidCoordinate,
Coordinate2D = QGeoCoordinate::Coordinate2D,
Coordinate3D = QGeoCoordinate::Coordinate3D,

  };
  Q_ENUM(CoordinateType)

  enum CoordinateFormat {
    Degrees = QGeoCoordinate::Degrees,
DegreesWithHemisphere = QGeoCoordinate::DegreesWithHemisphere,
DegreesMinutes = QGeoCoordinate::DegreesMinutes,
DegreesMinutesWithHemisphere = QGeoCoordinate::DegreesMinutesWithHemisphere,
DegreesMinutesSeconds = QGeoCoordinate::DegreesMinutesSeconds,
DegreesMinutesSecondsWithHemisphere = QGeoCoordinate::DegreesMinutesSecondsWithHemisphere,

  };
  Q_ENUM(CoordinateFormat)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGeoCoordinate_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGeoCoordinate_Wrapper(RJSApi& h, QGeoCoordinate* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGeoCoordinate_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QGeoCoordinate
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QGeoCoordinate_Wrapper
                
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
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QGeoCoordinate
    // Function: isValid
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isValid
              (

                
              )
              
                const
              
              ;
            
    // Class: QGeoCoordinate
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
            
    // Class: QGeoCoordinate
    // Function: setLatitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLatitude
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGeoCoordinate
    // Function: latitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  latitude
              (

                
              )
              
                const
              
              ;
            
    // Class: QGeoCoordinate
    // Function: setLongitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLongitude
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGeoCoordinate
    // Function: longitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  longitude
              (

                
              )
              
                const
              
              ;
            
    // Class: QGeoCoordinate
    // Function: setAltitude
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAltitude
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QGeoCoordinate
    // Function: altitude
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  altitude
              (

                
              )
              
                const
              
              ;
            
    // Class: QGeoCoordinate
    // Function: distanceTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  distanceTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGeoCoordinate
    // Function: azimuthTo
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  azimuthTo
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGeoCoordinate
    // Function: atDistanceAndAzimuth
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atDistanceAndAzimuth
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
              
                const
              
              ;
            
    // Class: QGeoCoordinate
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  
                          // special function name for JS wrapper:
                          toStr
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
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
          return RJSType_QGeoCoordinate::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QGeoCoordinate* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGeoCoordinate* getWrapped() const {
          
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
          QGeoCoordinate* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGeoCoordinate*> basecasters_QGeoCoordinate;

      public:
        static void registerBasecaster_QGeoCoordinate(RJSBasecaster_QGeoCoordinate* bc) {
          basecasters_QGeoCoordinate.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGeoCoordinate_Wrapper*)

    Q_DECLARE_INTERFACE(QGeoCoordinate_Wrapper, "org.qcad.QGeoCoordinate_Wrapper")

  
    #endif
  
  #endif
  
