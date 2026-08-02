
  // Auto generated
  
    #ifndef QSSLSOCKET_H_WRAPPER
    #define QSSLSOCKET_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDir>
      
        #include <QSslCipher>
      
        #include <QSslCertificate>
      
        #include <QSslConfiguration>
      
        #include <QSslPreSharedKeyAuthenticator>
      
        #include <QOcspResponse>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslSocket>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QSslSocket_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QSslSocket_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      

      private:
          RJSApi& handler;
          //static QSslSocket_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslSocket
    class QTJSAPI_EXPORT QSslSocket_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslSocket_Wrapper(const QSslSocket_Wrapper&);

    public:
      // initialization of QSslSocket:
      static void init(RJSApi& handler);

      
        static QSslSocket* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslSocket:
          for (int i=0; i<basecasters_QSslSocket.length(); i++) {
            RJSBasecaster_QSslSocket* basecaster = basecasters_QSslSocket[i];
            QSslSocket* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslSocket:
          if (t==RJSType_QSslSocket::getIdStatic()) {
            return (QSslSocket*)vp;
          }

          qWarning() << "QSslSocket_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslSocket* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslSocket*: wrapper wraps NULL";
          }

          QSslSocket* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslSocket*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum PeerVerifyMode {
    VerifyNone = QSslSocket::VerifyNone,
QueryPeer = QSslSocket::QueryPeer,
VerifyPeer = QSslSocket::VerifyPeer,
AutoVerifyPeer = QSslSocket::AutoVerifyPeer,

  };
  Q_ENUM(PeerVerifyMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslSocket_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslSocket_Wrapper(RJSApi& h, QSslSocket* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslSocket_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QSslSocket
    // Function: startClientEncryption
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startClientEncryption
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: startServerEncryption
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startServerEncryption
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: ignoreSslErrors
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ignoreSslErrors
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: encrypted
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void encrypted(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void encryptedEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: peerVerifyError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void peerVerifyError(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void peerVerifyErrorEmitter(
                const QSslError& error
              );
            
    // Class: QSslSocket
    // Function: sslErrors
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void sslErrors(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void sslErrorsEmitter(
                const QList<QSslError>& errors
              );
            
    // Class: QSslSocket
    // Function: modeChanged
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void modeChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void modeChangedEmitter(
                QSslSocket::SslMode newMode
              );
            
    // Class: QSslSocket
    // Function: encryptedBytesWritten
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void encryptedBytesWritten(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void encryptedBytesWrittenEmitter(
                qint64 totalBytes
              );
            
    // Class: QSslSocket
    // Function: preSharedKeyAuthenticationRequired
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void preSharedKeyAuthenticationRequired(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void preSharedKeyAuthenticationRequiredEmitter(
                QSslPreSharedKeyAuthenticator* authenticator
              );
            
    // Class: QSslSocket
    // Function: newSessionTicketReceived
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void newSessionTicketReceived(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void newSessionTicketReceivedEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: handshakeInterruptedOnError
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void handshakeInterruptedOnError(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void handshakeInterruptedOnErrorEmitter(
                const QSslError& error
              );
            
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
          return RJSType_QSslSocket::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslSocket* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslSocket* getWrapped() const {
          
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
          QSslSocket* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslSocket*> basecasters_QSslSocket;

      public:
        static void registerBasecaster_QSslSocket(RJSBasecaster_QSslSocket* bc) {
          basecasters_QSslSocket.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslSocket_Wrapper*)

    Q_DECLARE_INTERFACE(QSslSocket_Wrapper, "org.qcad.QSslSocket_Wrapper")

  
  #endif
  
