
  // Auto generated
  
    #ifndef QVARIANT_H_WRAPPER
    #define QVARIANT_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDate>
      
        #include <QDateTime>
      
        #include <QLocale>
      
        #include <QTransform>
      
        #include <QTime>
      
        #include <QPoint>
      
        #include <QPointF>
      
        #include <QSize>
      
        #include <QSizeF>
      
        #include <QRect>
      
        #include <QRectF>
      
        #include <QUrl>
      
        #include <QVariant>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QVariant>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QVariant
    class QVariant_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QVariant_Wrapper(const QVariant_Wrapper&);

    public:
      // initialization of QVariant:
      static void init(RJSApi& handler);

      
        static QVariant* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast to other base types:
          for (int i=0; i<basecasters_QVariant.length(); i++) {
            RJSBasecaster_QVariant* basecaster = basecasters_QVariant[i];
            QVariant* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // pointer to desired type:
          if (t==RJSType_QVariant::getIdStatic()) {
            return (QVariant*)vp;
          }

          qWarning() << "QVariant_Wrapper::castToBase: type not found: " << getTypeName(t);

          return nullptr;
          
        }

        static QVariant* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QVariant*: wrapper wraps NULL";
          }

          QVariant* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QVariant*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QVariant_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QVariant_Wrapper(RJSApi& h, QVariant* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QVariant_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QVariant
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QVariant_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_GEOM_VARIANT

#endif

#if QT_CONFIG(regularexpression)

#endif

#if QT_CONFIG(easingcurve)

#endif

#ifndef QT_BOOTSTRAPPED

#endif

#if QT_CONFIG(itemmodel)

#endif

#ifndef QT_NO_DATASTREAM

#endif


    // non-static functions:
    
    // Class: QVariant
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
            
    // Class: QVariant
    // Function: userType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  userType
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: typeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  typeId
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
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
            
    // Class: QVariant
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QVariant
    // Function: detach
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  detach
              (

                
              )
              
              ;
            
    // Class: QVariant
    // Function: isDetached
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isDetached
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toInt
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toInt
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toUInt
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toUInt
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toBool
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toBool
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toDouble
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDouble
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toFloat
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toFloat
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toReal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toReal
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toByteArray
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toByteArray
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toString
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toStringList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toStringList
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toChar
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toChar
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toDate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDate
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toTime
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toDateTime
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toDateTime
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toList
              (

                
              )
              
                const
              
              ;
            
#ifndef QT_NO_GEOM_VARIANT

    // Class: QVariant
    // Function: toPoint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toPoint
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toPointF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toPointF
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toRect
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toRect
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toSizeF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toSizeF
              (

                
              )
              
                const
              
              ;
            
    // Class: QVariant
    // Function: toRectF
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toRectF
              (

                
              )
              
                const
              
              ;
            
#endif

    // Class: QVariant
    // Function: toLocale
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toLocale
              (

                
              )
              
                const
              
              ;
            
#if QT_CONFIG(regularexpression)

#endif

#if QT_CONFIG(easingcurve)

#endif

#ifndef QT_BOOTSTRAPPED

    // Class: QVariant
    // Function: toUrl
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toUrl
              (

                
              )
              
                const
              
              ;
            
#endif

#if QT_CONFIG(itemmodel)

#endif

#ifndef QT_NO_DATASTREAM

#endif

    // Class: QVariant
    // Function: setValue
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setValue
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
          return RJSType_QVariant::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QVariant* getWrapped() {
          if (wrapped!=nullptr) {
            return wrapped;
          }
          
          return nullptr;
        }

        // get wrapped object (const):
        QVariant* getWrapped() const {
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
        QVariant* wrapped;

        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QVariant*> basecasters_QVariant;

      public:
        static void registerBasecaster_QVariant(RJSBasecaster_QVariant* bc) {
          basecasters_QVariant.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QVariant_Wrapper*)

    Q_DECLARE_INTERFACE(QVariant_Wrapper, "org.qcad.QVariant_Wrapper")

  
  #endif
  
