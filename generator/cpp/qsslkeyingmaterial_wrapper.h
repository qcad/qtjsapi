
  // Auto generated
  
    #ifndef QSSLKEYINGMATERIAL_H_WRAPPER
    #define QSSLKEYINGMATERIAL_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDebug>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslKeyingMaterial>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslKeyingMaterial
    class QTJSAPI_EXPORT QSslKeyingMaterial_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslKeyingMaterial_Wrapper(const QSslKeyingMaterial_Wrapper&);

    public:
      // initialization of QSslKeyingMaterial:
      static void init(RJSApi& handler);

      
        static QSslKeyingMaterial* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslKeyingMaterial:
          for (int i=0; i<basecasters_QSslKeyingMaterial.length(); i++) {
            RJSBasecaster_QSslKeyingMaterial* basecaster = basecasters_QSslKeyingMaterial[i];
            QSslKeyingMaterial* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslKeyingMaterial:
          if (t==RJSType_QSslKeyingMaterial::getIdStatic()) {
            return (QSslKeyingMaterial*)vp;
          }

          qWarning() << "QSslKeyingMaterial_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslKeyingMaterial* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslKeyingMaterial*: wrapper wraps NULL";
          }

          QSslKeyingMaterial* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslKeyingMaterial*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslKeyingMaterial_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslKeyingMaterial_Wrapper(RJSApi& h, QSslKeyingMaterial* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslKeyingMaterial_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSslKeyingMaterial
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSslKeyingMaterial_Wrapper
                
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
            
#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
    // Class: QSslKeyingMaterial
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
            
    // Class: QSslKeyingMaterial
    // Function: label
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  label
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslKeyingMaterial
    // Function: context
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  context
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslKeyingMaterial
    // Function: value
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  value
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslKeyingMaterial
    // Function: requestedSize
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  requestedSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslKeyingMaterial
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
            
#ifndef QT_NO_DEBUG_STREAM

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
          return RJSType_QSslKeyingMaterial::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslKeyingMaterial* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslKeyingMaterial* getWrapped() const {
          
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
          QSslKeyingMaterial* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslKeyingMaterial*> basecasters_QSslKeyingMaterial;

      public:
        static void registerBasecaster_QSslKeyingMaterial(RJSBasecaster_QSslKeyingMaterial* bc) {
          basecasters_QSslKeyingMaterial.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslKeyingMaterial_Wrapper*)

    Q_DECLARE_INTERFACE(QSslKeyingMaterial_Wrapper, "org.qcad.QSslKeyingMaterial_Wrapper")

  
  #endif
  
