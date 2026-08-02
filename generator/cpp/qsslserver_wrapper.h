
  // Auto generated
  
    #ifndef QSSLSERVER_H_WRAPPER
    #define QSSLSERVER_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QSslSocket>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QSslServer>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QSslServer
    class QTJSAPI_EXPORT QSslServer_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QSslServer_Wrapper(const QSslServer_Wrapper&);

    public:
      // initialization of QSslServer:
      static void init(RJSApi& handler);

      
        static QSslServer* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QSslServer:
          for (int i=0; i<basecasters_QSslServer.length(); i++) {
            RJSBasecaster_QSslServer* basecaster = basecasters_QSslServer[i];
            QSslServer* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QSslServer:
          if (t==RJSType_QSslServer::getIdStatic()) {
            return (QSslServer*)vp;
          }

          qWarning() << "QSslServer_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QSslServer* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QSslServer*: wrapper wraps NULL";
          }

          QSslServer* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QSslServer*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QSslServer_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QSslServer_Wrapper(RJSApi& h, QSslServer* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QSslServer_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QSslServer
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QSslServer_Wrapper
                
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
    
    // Class: QSslServer
    // Function: listen
    // Source: QTcpServer
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  listen
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
            
    // Class: QSslServer
    // Function: close
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  close
              (

                
              )
              
              ;
            
    // Class: QSslServer
    // Function: isListening
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isListening
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: setMaxPendingConnections
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setMaxPendingConnections
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslServer
    // Function: maxPendingConnections
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  maxPendingConnections
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: setListenBacklogSize
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setListenBacklogSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslServer
    // Function: listenBacklogSize
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  listenBacklogSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: serverPort
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  serverPort
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: serverAddress
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  serverAddress
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: waitForNewConnection
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  waitForNewConnection
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslServer
    // Function: hasPendingConnections
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasPendingConnections
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: nextPendingConnection
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  nextPendingConnection
              (

                
              )
              
              ;
            
    // Class: QSslServer
    // Function: serverError
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  serverError
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: errorString
    // Source: QTcpServer
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
            
    // Class: QSslServer
    // Function: pauseAccepting
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pauseAccepting
              (

                
              )
              
              ;
            
    // Class: QSslServer
    // Function: resumeAccepting
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resumeAccepting
              (

                
              )
              
              ;
            
    // Class: QSslServer
    // Function: setProxy
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProxy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslServer
    // Function: proxy
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  proxy
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: newConnection
    // Source: QTcpServer
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void newConnection(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void newConnectionEmitter(
                
              );
            
    // Class: QSslServer
    // Function: acceptError
    // Source: QTcpServer
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void acceptError(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void acceptErrorEmitter(
                QAbstractSocket::SocketError socketError
              );
            
    // Class: QSslServer
    // Function: setSslConfiguration
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSslConfiguration
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslServer
    // Function: sslConfiguration
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  sslConfiguration
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: setHandshakeTimeout
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHandshakeTimeout
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslServer
    // Function: handshakeTimeout
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  handshakeTimeout
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslServer
    // Function: sslErrors
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void sslErrors(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void sslErrorsEmitter(
                QSslSocket* socket, const QList<QSslError>& errors
              );
            
    // Class: QSslServer
    // Function: peerVerifyError
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void peerVerifyError(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void peerVerifyErrorEmitter(
                QSslSocket* socket, const QSslError& error
              );
            
    // Class: QSslServer
    // Function: errorOccurred
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void errorOccurred(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void errorOccurredEmitter(
                QSslSocket* socket, QAbstractSocket::SocketError error
              );
            
    // Class: QSslServer
    // Function: preSharedKeyAuthenticationRequired
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void preSharedKeyAuthenticationRequired(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void preSharedKeyAuthenticationRequiredEmitter(
                QSslSocket* socket, QSslPreSharedKeyAuthenticator* authenticator
              );
            
    // Class: QSslServer
    // Function: handshakeInterruptedOnError
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void handshakeInterruptedOnError(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void handshakeInterruptedOnErrorEmitter(
                QSslSocket* socket, const QSslError& error
              );
            
    // Class: QSslServer
    // Function: startedEncryptionHandshake
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void startedEncryptionHandshake(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void startedEncryptionHandshakeEmitter(
                QSslSocket* socket
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
          return RJSType_QSslServer::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QSslServer* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QSslServer* getWrapped() const {
          
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
          QSslServer* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QSslServer*> basecasters_QSslServer;

      public:
        static void registerBasecaster_QSslServer(RJSBasecaster_QSslServer* bc) {
          basecasters_QSslServer.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QSslServer_Wrapper*)

    Q_DECLARE_INTERFACE(QSslServer_Wrapper, "org.qcad.QSslServer_Wrapper")

  
  #endif
  
