
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
        
  enum SocketType {
    TcpSocket = QSslSocket::TcpSocket,
UdpSocket = QSslSocket::UdpSocket,
SctpSocket = QSslSocket::SctpSocket,
UnknownSocketType = QSslSocket::UnknownSocketType,

  };
  Q_ENUM(SocketType)

  enum NetworkLayerProtocol {
    IPv4Protocol = QSslSocket::IPv4Protocol,
IPv6Protocol = QSslSocket::IPv6Protocol,
AnyIPProtocol = QSslSocket::AnyIPProtocol,
UnknownNetworkLayerProtocol = QSslSocket::UnknownNetworkLayerProtocol,

  };
  Q_ENUM(NetworkLayerProtocol)

  enum SocketError {
    ConnectionRefusedError = QSslSocket::ConnectionRefusedError,
RemoteHostClosedError = QSslSocket::RemoteHostClosedError,
HostNotFoundError = QSslSocket::HostNotFoundError,
SocketAccessError = QSslSocket::SocketAccessError,
SocketResourceError = QSslSocket::SocketResourceError,
SocketTimeoutError = QSslSocket::SocketTimeoutError,
DatagramTooLargeError = QSslSocket::DatagramTooLargeError,
NetworkError = QSslSocket::NetworkError,
AddressInUseError = QSslSocket::AddressInUseError,
SocketAddressNotAvailableError = QSslSocket::SocketAddressNotAvailableError,
UnsupportedSocketOperationError = QSslSocket::UnsupportedSocketOperationError,
UnfinishedSocketOperationError = QSslSocket::UnfinishedSocketOperationError,
ProxyAuthenticationRequiredError = QSslSocket::ProxyAuthenticationRequiredError,
SslHandshakeFailedError = QSslSocket::SslHandshakeFailedError,
ProxyConnectionRefusedError = QSslSocket::ProxyConnectionRefusedError,
ProxyConnectionClosedError = QSslSocket::ProxyConnectionClosedError,
ProxyConnectionTimeoutError = QSslSocket::ProxyConnectionTimeoutError,
ProxyNotFoundError = QSslSocket::ProxyNotFoundError,
ProxyProtocolError = QSslSocket::ProxyProtocolError,
OperationError = QSslSocket::OperationError,
SslInternalError = QSslSocket::SslInternalError,
SslInvalidUserDataError = QSslSocket::SslInvalidUserDataError,
TemporaryError = QSslSocket::TemporaryError,
UnknownSocketError = QSslSocket::UnknownSocketError,

  };
  Q_ENUM(SocketError)

  enum SocketState {
    UnconnectedState = QSslSocket::UnconnectedState,
HostLookupState = QSslSocket::HostLookupState,
ConnectingState = QSslSocket::ConnectingState,
ConnectedState = QSslSocket::ConnectedState,
BoundState = QSslSocket::BoundState,
ListeningState = QSslSocket::ListeningState,
ClosingState = QSslSocket::ClosingState,

  };
  Q_ENUM(SocketState)

  enum SocketOption {
    LowDelayOption = QSslSocket::LowDelayOption,
KeepAliveOption = QSslSocket::KeepAliveOption,
MulticastTtlOption = QSslSocket::MulticastTtlOption,
MulticastLoopbackOption = QSslSocket::MulticastLoopbackOption,
TypeOfServiceOption = QSslSocket::TypeOfServiceOption,
SendBufferSizeSocketOption = QSslSocket::SendBufferSizeSocketOption,
ReceiveBufferSizeSocketOption = QSslSocket::ReceiveBufferSizeSocketOption,
PathMtuSocketOption = QSslSocket::PathMtuSocketOption,

  };
  Q_ENUM(SocketOption)

  enum BindFlag {
    DefaultForPlatform = QSslSocket::DefaultForPlatform,
ShareAddress = QSslSocket::ShareAddress,
DontShareAddress = QSslSocket::DontShareAddress,
ReuseAddressHint = QSslSocket::ReuseAddressHint,

  };
  Q_ENUM(BindFlag)

  enum PauseMode {
    PauseNever = QSslSocket::PauseNever,
PauseOnSslErrors = QSslSocket::PauseOnSslErrors,

  };
  Q_ENUM(PauseMode)

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
    // Function: openMode
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  openMode
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: setTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setTextModeEnabled
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: isTextModeEnabled
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTextModeEnabled
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: isOpen
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isOpen
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: isReadable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isReadable
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: isWritable
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isWritable
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: readChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readChannelCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: writeChannelCount
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  writeChannelCount
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: currentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentReadChannel
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: setCurrentReadChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentReadChannel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: currentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  currentWriteChannel
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: setCurrentWriteChannel
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCurrentWriteChannel
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: open
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  open
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: pos
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  pos
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: size
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  size
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: seek
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  seek
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: reset
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  reset
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: readAll
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readAll
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: startTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  startTransaction
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: commitTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  commitTransaction
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: rollbackTransaction
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rollbackTransaction
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: isTransactionStarted
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTransactionStarted
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: write
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  write
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
            
    // Class: QSslSocket
    // Function: skip
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  skip
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: ungetChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  ungetChar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: putChar
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  putChar
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: errorString
    // Source: QIODevice
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
            
    // Class: QSslSocket
    // Function: readyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void readyRead(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void readyReadEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: channelReadyRead
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void channelReadyRead(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void channelReadyReadEmitter(
                int channel
              );
            
    // Class: QSslSocket
    // Function: bytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void bytesWritten(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void bytesWrittenEmitter(
                qint64 bytes
              );
            
    // Class: QSslSocket
    // Function: channelBytesWritten
    // Source: QIODevice
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void channelBytesWritten(
                
  const QJSValue& 
  a1, 
  const QJSValue& 
  a2
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void channelBytesWrittenEmitter(
                int channel, qint64 bytes
              );
            
    // Class: QSslSocket
    // Function: aboutToClose
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void aboutToClose(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void aboutToCloseEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: readChannelFinished
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void readChannelFinished(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void readChannelFinishedEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: bind
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 3
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bind
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
            
    // Class: QSslSocket
    // Function: isValid
    // Source: QAbstractSocket
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
            
    // Class: QSslSocket
    // Function: localPort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localPort
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: localAddress
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localAddress
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: peerPort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerPort
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: peerAddress
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerAddress
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: peerName
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerName
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: readBufferSize
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  readBufferSize
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: abort
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  abort
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: socketType
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  socketType
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: state
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  state
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: error
    // Source: QAbstractSocket
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
            
    // Class: QSslSocket
    // Function: isSequential
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSequential
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: flush
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  flush
              (

                
              )
              
              ;
            
    // Class: QSslSocket
    // Function: setProxy
    // Source: QAbstractSocket
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
            
    // Class: QSslSocket
    // Function: proxy
    // Source: QAbstractSocket
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
            
    // Class: QSslSocket
    // Function: protocolTag
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  protocolTag
              (

                
              )
              
                const
              
              ;
            
    // Class: QSslSocket
    // Function: setProtocolTag
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProtocolTag
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QSslSocket
    // Function: hostFound
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void hostFound(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void hostFoundEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: connected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void connected(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void connectedEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: disconnected
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void disconnected(
                
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void disconnectedEmitter(
                
              );
            
    // Class: QSslSocket
    // Function: stateChanged
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void stateChanged(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void stateChangedEmitter(
                QAbstractSocket::SocketState a1
              );
            
    // Class: QSslSocket
    // Function: errorOccurred
    // Source: QAbstractSocket
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              // signal forwarded from wrapped class:
              signals:
              void errorOccurred(
                
  const QJSValue& 
  a1
              );

              // called when signal is emitted from wrapped class:
              public slots:
              void errorOccurredEmitter(
                QAbstractSocket::SocketError a1
              );
            
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
  
