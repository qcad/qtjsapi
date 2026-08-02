
  // Auto generated
  
    #ifndef QSSLPRESHAREDKEYAUTHENTICATOR_H_WRAPPER
    #define QSSLPRESHAREDKEYAUTHENTICATOR_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslPreSharedKeyAuthenticator>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QSslPreSharedKeyAuthenticator_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSslPreSharedKeyAuthenticator_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QSslPreSharedKeyAuthenticator
    // Function: equals
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  equals
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
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: operator_not_assign
    // Source: 
    // Static: true
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_not_assign
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
            

      private:
          RJSApi& handler;
          //static QSslPreSharedKeyAuthenticator_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslPreSharedKeyAuthenticator
    class QTJSAPI_EXPORT QSslPreSharedKeyAuthenticator_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslPreSharedKeyAuthenticator_Wrapper(const QSslPreSharedKeyAuthenticator_Wrapper&);

    public:
      // initialization of QSslPreSharedKeyAuthenticator:
      static void init(RJSApi& handler);

      
        static QSslPreSharedKeyAuthenticator* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslPreSharedKeyAuthenticator:
          for (int i=0; i<basecasters_QSslPreSharedKeyAuthenticator.length(); i++) {
            RJSBasecaster_QSslPreSharedKeyAuthenticator* basecaster = basecasters_QSslPreSharedKeyAuthenticator[i];
            QSslPreSharedKeyAuthenticator* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslPreSharedKeyAuthenticator:
          if (t==RJSType_QSslPreSharedKeyAuthenticator::getIdStatic()) {
            return (QSslPreSharedKeyAuthenticator*)vp;
          }

          qWarning() << "QSslPreSharedKeyAuthenticator_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslPreSharedKeyAuthenticator* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslPreSharedKeyAuthenticator*: wrapper wraps NULL";
          }

          QSslPreSharedKeyAuthenticator* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslPreSharedKeyAuthenticator*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslPreSharedKeyAuthenticator_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslPreSharedKeyAuthenticator_Wrapper(RJSApi& h, QSslPreSharedKeyAuthenticator* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslPreSharedKeyAuthenticator_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSslPreSharedKeyAuthenticator
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSslPreSharedKeyAuthenticator_Wrapper
                
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
    
    // Class: QSslPreSharedKeyAuthenticator
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
            
    // Class: QSslPreSharedKeyAuthenticator
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
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: identityHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  identityHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: setIdentity
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setIdentity
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: identity
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  identity
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: maximumIdentityLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumIdentityLength
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: setPreSharedKey
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPreSharedKey
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: preSharedKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  preSharedKey
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslPreSharedKeyAuthenticator
    // Function: maximumPreSharedKeyLength
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maximumPreSharedKeyLength
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
          return RJSType_QSslPreSharedKeyAuthenticator::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslPreSharedKeyAuthenticator* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslPreSharedKeyAuthenticator* getWrapped() const {
          
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
          QSslPreSharedKeyAuthenticator* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslPreSharedKeyAuthenticator*> basecasters_QSslPreSharedKeyAuthenticator;

      public:
        static void registerBasecaster_QSslPreSharedKeyAuthenticator(RJSBasecaster_QSslPreSharedKeyAuthenticator* bc) {
          basecasters_QSslPreSharedKeyAuthenticator.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslPreSharedKeyAuthenticator_Wrapper*)

    Q_DECLARE_INTERFACE(QSslPreSharedKeyAuthenticator_Wrapper, "org.qcad.QSslPreSharedKeyAuthenticator_Wrapper")

  
  #endif
  
