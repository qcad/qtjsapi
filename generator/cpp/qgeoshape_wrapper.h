
  // Auto generated
  
    #ifndef QGEOSHAPE_H_WRAPPER
    #define QGEOSHAPE_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #ifdef QT_POSITIONING_LIB
        #include <QGeoRectangle>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QGeoShape>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QGeoShape
    class QTJSAPI_EXPORT QGeoShape_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QGeoShape_Wrapper(const QGeoShape_Wrapper&);

    public:
      // initialization of QGeoShape:
      static void init(RJSApi& handler);

      
        static QGeoShape* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
                #ifdef QT_POSITIONING_LIB
              if (t==RJSType_QGeoCircle::getIdStatic()) {
                return (QGeoShape*)(QGeoCircle*)vp;
              }
              
                #endif
              
                #ifdef QT_POSITIONING_LIB
              if (t==RJSType_QGeoPath::getIdStatic()) {
                return (QGeoShape*)(QGeoPath*)vp;
              }
              
                #endif
              
                #ifdef QT_POSITIONING_LIB
              if (t==RJSType_QGeoPolygon::getIdStatic()) {
                return (QGeoShape*)(QGeoPolygon*)vp;
              }
              
                #endif
              
                #ifdef QT_POSITIONING_LIB
              if (t==RJSType_QGeoRectangle::getIdStatic()) {
                return (QGeoShape*)(QGeoRectangle*)vp;
              }
              
                #endif
              

          // hook for modules to cast from other types to base QGeoShape:
          for (int i=0; i<basecasters_QGeoShape.length(); i++) {
            RJSBasecaster_QGeoShape* basecaster = basecasters_QGeoShape[i];
            QGeoShape* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QGeoShape:
          if (t==RJSType_QGeoShape::getIdStatic()) {
            return (QGeoShape*)vp;
          }

          qWarning() << "QGeoShape_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QGeoShape* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QGeoShape*: wrapper wraps NULL";
          }

          QGeoShape* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QGeoShape*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ShapeType {
    UnknownType = QGeoShape::UnknownType,
RectangleType = QGeoShape::RectangleType,
CircleType = QGeoShape::CircleType,
PathType = QGeoShape::PathType,
PolygonType = QGeoShape::PolygonType,

  };
  Q_ENUM(ShapeType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QGeoShape_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QGeoShape_Wrapper(RJSApi& h, QGeoShape* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QGeoShape_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QGeoShape
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QGeoShape_Wrapper
                
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
    
    // Class: QGeoShape
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
            
    // Class: QGeoShape
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
            
    // Class: QGeoShape
    // Function: isEmpty
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEmpty
              (

                
              )
              
                const
              
              ;
            
    // Class: QGeoShape
    // Function: contains
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  contains
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QGeoShape
    // Function: boundingGeoRectangle
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  boundingGeoRectangle
              (

                
              )
              
                const
              
              ;
            
    // Class: QGeoShape
    // Function: center
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  center
              (

                
              )
              
                const
              
              ;
            
    // Class: QGeoShape
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  
                          // special function name for JS wrapper:
                          toStr
              (

                
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
          return RJSType_QGeoShape::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QGeoShape* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QGeoShape* getWrapped() const {
          
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
          QGeoShape* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QGeoShape*> basecasters_QGeoShape;

      public:
        static void registerBasecaster_QGeoShape(RJSBasecaster_QGeoShape* bc) {
          basecasters_QGeoShape.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QGeoShape_Wrapper*)

    Q_DECLARE_INTERFACE(QGeoShape_Wrapper, "org.qcad.QGeoShape_Wrapper")

  
    #endif
  
  #endif
  
