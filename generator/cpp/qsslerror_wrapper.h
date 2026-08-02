
  // Auto generated
  
    #ifndef QSSLERROR_H_WRAPPER
    #define QSSLERROR_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDebug>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslError>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslError
    class QTJSAPI_EXPORT QSslError_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslError_Wrapper(const QSslError_Wrapper&);

    public:
      // initialization of QSslError:
      static void init(RJSApi& handler);

      
        static QSslError* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslError:
          for (int i=0; i<basecasters_QSslError.length(); i++) {
            RJSBasecaster_QSslError* basecaster = basecasters_QSslError[i];
            QSslError* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslError:
          if (t==RJSType_QSslError::getIdStatic()) {
            return (QSslError*)vp;
          }

          qWarning() << "QSslError_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslError* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslError*: wrapper wraps NULL";
          }

          QSslError* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslError*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SslError {
    NoError = QSslError::NoError,
UnableToGetIssuerCertificate = QSslError::UnableToGetIssuerCertificate,
UnableToDecryptCertificateSignature = QSslError::UnableToDecryptCertificateSignature,
UnableToDecodeIssuerPublicKey = QSslError::UnableToDecodeIssuerPublicKey,
CertificateSignatureFailed = QSslError::CertificateSignatureFailed,
CertificateNotYetValid = QSslError::CertificateNotYetValid,
CertificateExpired = QSslError::CertificateExpired,
InvalidNotBeforeField = QSslError::InvalidNotBeforeField,
InvalidNotAfterField = QSslError::InvalidNotAfterField,
SelfSignedCertificate = QSslError::SelfSignedCertificate,
SelfSignedCertificateInChain = QSslError::SelfSignedCertificateInChain,
UnableToGetLocalIssuerCertificate = QSslError::UnableToGetLocalIssuerCertificate,
UnableToVerifyFirstCertificate = QSslError::UnableToVerifyFirstCertificate,
CertificateRevoked = QSslError::CertificateRevoked,
InvalidCaCertificate = QSslError::InvalidCaCertificate,
PathLengthExceeded = QSslError::PathLengthExceeded,
InvalidPurpose = QSslError::InvalidPurpose,
CertificateUntrusted = QSslError::CertificateUntrusted,
CertificateRejected = QSslError::CertificateRejected,
SubjectIssuerMismatch = QSslError::SubjectIssuerMismatch,
AuthorityIssuerSerialNumberMismatch = QSslError::AuthorityIssuerSerialNumberMismatch,
NoPeerCertificate = QSslError::NoPeerCertificate,
HostNameMismatch = QSslError::HostNameMismatch,
NoSslSupport = QSslError::NoSslSupport,
CertificateBlacklisted = QSslError::CertificateBlacklisted,
CertificateStatusUnknown = QSslError::CertificateStatusUnknown,
OcspNoResponseFound = QSslError::OcspNoResponseFound,
OcspMalformedRequest = QSslError::OcspMalformedRequest,
OcspMalformedResponse = QSslError::OcspMalformedResponse,
OcspInternalError = QSslError::OcspInternalError,
OcspTryLater = QSslError::OcspTryLater,
OcspSigRequred = QSslError::OcspSigRequred,
OcspUnauthorized = QSslError::OcspUnauthorized,
OcspResponseCannotBeTrusted = QSslError::OcspResponseCannotBeTrusted,
OcspResponseCertIdUnknown = QSslError::OcspResponseCertIdUnknown,
OcspResponseExpired = QSslError::OcspResponseExpired,
OcspStatusUnknown = QSslError::OcspStatusUnknown,
UnspecifiedError = QSslError::UnspecifiedError,

  };
  Q_ENUM(SslError)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslError_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslError_Wrapper(RJSApi& h, QSslError* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslError_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSslError
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSslError_Wrapper
                
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
    
              )
              
              ;
            
#ifndef QT_NO_DEBUG_STREAM

#endif


    // non-static functions:
    
    // Class: QSslError
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
            
    // Class: QSslError
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
            
    // Class: QSslError
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  equals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslError
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_not_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslError
    // Function: error
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  error
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslError
    // Function: errorString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  errorString
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslError
    // Function: certificate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  certificate
              (

                
              )
              
                const
              
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
          return RJSType_QSslError::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslError* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslError* getWrapped() const {
          
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
          QSslError* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslError*> basecasters_QSslError;

      public:
        static void registerBasecaster_QSslError(RJSBasecaster_QSslError* bc) {
          basecasters_QSslError.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslError_Wrapper*)

    Q_DECLARE_INTERFACE(QSslError_Wrapper, "org.qcad.QSslError_Wrapper")

  
  #endif
  
