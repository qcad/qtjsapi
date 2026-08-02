
  // Auto generated
  
    #ifndef QSSLCONFIGURATION_H_WRAPPER
    #define QSSLCONFIGURATION_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QSslCertificate>
      
        #include <QSslCipher>
      
        #include <QSslKey>
      
        #include <QSslKeyingMaterial>
      
        #include <QSslEllipticCurve>
      
        #include <QSslDiffieHellmanParameters>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslConfiguration>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QSslConfiguration_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSslConfiguration_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QSslConfiguration
    // Function: supportedCiphers
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedCiphers
              (

                
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: systemCaCertificates
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  systemCaCertificates
              (

                
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: supportedEllipticCurves
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  supportedEllipticCurves
              (

                
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: defaultConfiguration
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultConfiguration
              (

                
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: setDefaultConfiguration
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultConfiguration
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_CONFIG(dtls)||defined(Q_QDOC)

    // Class: QSslConfiguration
    // Function: defaultDtlsConfiguration
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  defaultDtlsConfiguration
              (

                
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: setDefaultDtlsConfiguration
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDefaultDtlsConfiguration
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif


      private:
          RJSApi& handler;
          //static QSslConfiguration_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslConfiguration
    class QTJSAPI_EXPORT QSslConfiguration_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslConfiguration_Wrapper(const QSslConfiguration_Wrapper&);

    public:
      // initialization of QSslConfiguration:
      static void init(RJSApi& handler);

      
        static QSslConfiguration* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslConfiguration:
          for (int i=0; i<basecasters_QSslConfiguration.length(); i++) {
            RJSBasecaster_QSslConfiguration* basecaster = basecasters_QSslConfiguration[i];
            QSslConfiguration* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslConfiguration:
          if (t==RJSType_QSslConfiguration::getIdStatic()) {
            return (QSslConfiguration*)vp;
          }

          qWarning() << "QSslConfiguration_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslConfiguration* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslConfiguration*: wrapper wraps NULL";
          }

          QSslConfiguration* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslConfiguration*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum NextProtocolNegotiationStatus {
    NextProtocolNegotiationNone = QSslConfiguration::NextProtocolNegotiationNone,
NextProtocolNegotiationNegotiated = QSslConfiguration::NextProtocolNegotiationNegotiated,
NextProtocolNegotiationUnsupported = QSslConfiguration::NextProtocolNegotiationUnsupported,

  };
  Q_ENUM(NextProtocolNegotiationStatus)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslConfiguration_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslConfiguration_Wrapper(RJSApi& h, QSslConfiguration* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslConfiguration_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSslConfiguration
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSslConfiguration_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#if QT_CONFIG(dtls)||defined(Q_QDOC)

#endif


    // non-static functions:
    
    // Class: QSslConfiguration
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
            
    // Class: QSslConfiguration
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
            
    // Class: QSslConfiguration
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
            
    // Class: QSslConfiguration
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
            
    // Class: QSslConfiguration
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
            
    // Class: QSslConfiguration
    // Function: protocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  protocol
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setProtocol
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProtocol
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: peerVerifyMode
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerVerifyMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setPeerVerifyMode
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPeerVerifyMode
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: peerVerifyDepth
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerVerifyDepth
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setPeerVerifyDepth
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPeerVerifyDepth
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: localCertificateChain
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localCertificateChain
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setLocalCertificateChain
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLocalCertificateChain
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: localCertificate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localCertificate
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setLocalCertificate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLocalCertificate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: peerCertificate
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerCertificate
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: peerCertificateChain
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerCertificateChain
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: sessionCipher
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionCipher
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: sessionProtocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionProtocol
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: privateKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  privateKey
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setPrivateKey
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPrivateKey
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: ciphers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ciphers
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setCiphers
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCiphers
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: caCertificates
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  caCertificates
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setCaCertificates
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCaCertificates
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: addCaCertificates
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addCaCertificates
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
            
    // Class: QSslConfiguration
    // Function: addCaCertificate
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  addCaCertificate
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: setSslOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSslOption
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
            
    // Class: QSslConfiguration
    // Function: testSslOption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  testSslOption
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: sessionTicket
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionTicket
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setSessionTicket
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSessionTicket
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: sessionTicketLifeTimeHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sessionTicketLifeTimeHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: ephemeralServerKey
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ephemeralServerKey
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: ellipticCurves
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ellipticCurves
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setEllipticCurves
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setEllipticCurves
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: preSharedKeyIdentityHint
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  preSharedKeyIdentityHint
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setPreSharedKeyIdentityHint
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPreSharedKeyIdentityHint
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: diffieHellmanParameters
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  diffieHellmanParameters
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setDiffieHellmanParameters
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDiffieHellmanParameters
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: setBackendConfigurationOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setBackendConfigurationOption
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
            
#if QT_CONFIG(dtls)||defined(Q_QDOC)

    // Class: QSslConfiguration
    // Function: dtlsCookieVerificationEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  dtlsCookieVerificationEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setDtlsCookieVerificationEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setDtlsCookieVerificationEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#endif

    // Class: QSslConfiguration
    // Function: handshakeMustInterruptOnError
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handshakeMustInterruptOnError
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setHandshakeMustInterruptOnError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHandshakeMustInterruptOnError
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: missingCertificateIsFatal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  missingCertificateIsFatal
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setMissingCertificateIsFatal
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMissingCertificateIsFatal
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: setOcspStaplingEnabled
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setOcspStaplingEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: ocspStaplingEnabled
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ocspStaplingEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setAllowedNextProtocols
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAllowedNextProtocols
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslConfiguration
    // Function: allowedNextProtocols
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  allowedNextProtocols
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: nextNegotiatedProtocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextNegotiatedProtocol
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: nextProtocolNegotiationStatus
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextProtocolNegotiationStatus
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: keyingMaterial
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  keyingMaterial
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslConfiguration
    // Function: setKeyingMaterial
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setKeyingMaterial
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
          return RJSType_QSslConfiguration::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslConfiguration* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslConfiguration* getWrapped() const {
          
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
          QSslConfiguration* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslConfiguration*> basecasters_QSslConfiguration;

      public:
        static void registerBasecaster_QSslConfiguration(RJSBasecaster_QSslConfiguration* bc) {
          basecasters_QSslConfiguration.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslConfiguration_Wrapper*)

    Q_DECLARE_INTERFACE(QSslConfiguration_Wrapper, "org.qcad.QSslConfiguration_Wrapper")

  
  #endif
  
