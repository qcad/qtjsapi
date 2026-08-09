
  // Auto generated
  
    #ifndef QABSTRACTSOCKET_H_WRAPPER
    #define QABSTRACTSOCKET_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QDebug>
      
        #include <QHostAddress>
      
        #include <QNetworkProxy>
      
        #include <QAuthenticator>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QAbstractSocket>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QAbstractSocket
    class QTJSAPI_EXPORT QAbstractSocket_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QAbstractSocket_Wrapper(const QAbstractSocket_Wrapper&);

    public:
      // initialization of QAbstractSocket:
      static void init(RJSApi& handler);

      
        static QAbstractSocket* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            
              if (t==RJSType_QSslSocket::getIdStatic()) {
                return (QAbstractSocket*)(QSslSocket*)vp;
              }
              
              if (t==RJSType_QTcpSocket::getIdStatic()) {
                return (QAbstractSocket*)(QTcpSocket*)vp;
              }
              

          // hook for modules to cast from other types to base QAbstractSocket:
          for (int i=0; i<basecasters_QAbstractSocket.length(); i++) {
            RJSBasecaster_QAbstractSocket* basecaster = basecasters_QAbstractSocket[i];
            QAbstractSocket* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QAbstractSocket:
          if (t==RJSType_QAbstractSocket::getIdStatic()) {
            return (QAbstractSocket*)vp;
          }

          qWarning() << "QAbstractSocket_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QAbstractSocket* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QAbstractSocket*: wrapper wraps NULL";
          }

          QAbstractSocket* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QAbstractSocket*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SocketType {
    TcpSocket = QAbstractSocket::TcpSocket,
UdpSocket = QAbstractSocket::UdpSocket,
SctpSocket = QAbstractSocket::SctpSocket,
UnknownSocketType = QAbstractSocket::UnknownSocketType,

  };
  Q_ENUM(SocketType)

  enum NetworkLayerProtocol {
    IPv4Protocol = QAbstractSocket::IPv4Protocol,
IPv6Protocol = QAbstractSocket::IPv6Protocol,
AnyIPProtocol = QAbstractSocket::AnyIPProtocol,
UnknownNetworkLayerProtocol = QAbstractSocket::UnknownNetworkLayerProtocol,

  };
  Q_ENUM(NetworkLayerProtocol)

  enum SocketError {
    ConnectionRefusedError = QAbstractSocket::ConnectionRefusedError,
RemoteHostClosedError = QAbstractSocket::RemoteHostClosedError,
HostNotFoundError = QAbstractSocket::HostNotFoundError,
SocketAccessError = QAbstractSocket::SocketAccessError,
SocketResourceError = QAbstractSocket::SocketResourceError,
SocketTimeoutError = QAbstractSocket::SocketTimeoutError,
DatagramTooLargeError = QAbstractSocket::DatagramTooLargeError,
NetworkError = QAbstractSocket::NetworkError,
AddressInUseError = QAbstractSocket::AddressInUseError,
SocketAddressNotAvailableError = QAbstractSocket::SocketAddressNotAvailableError,
UnsupportedSocketOperationError = QAbstractSocket::UnsupportedSocketOperationError,
UnfinishedSocketOperationError = QAbstractSocket::UnfinishedSocketOperationError,
ProxyAuthenticationRequiredError = QAbstractSocket::ProxyAuthenticationRequiredError,
SslHandshakeFailedError = QAbstractSocket::SslHandshakeFailedError,
ProxyConnectionRefusedError = QAbstractSocket::ProxyConnectionRefusedError,
ProxyConnectionClosedError = QAbstractSocket::ProxyConnectionClosedError,
ProxyConnectionTimeoutError = QAbstractSocket::ProxyConnectionTimeoutError,
ProxyNotFoundError = QAbstractSocket::ProxyNotFoundError,
ProxyProtocolError = QAbstractSocket::ProxyProtocolError,
OperationError = QAbstractSocket::OperationError,
SslInternalError = QAbstractSocket::SslInternalError,
SslInvalidUserDataError = QAbstractSocket::SslInvalidUserDataError,
TemporaryError = QAbstractSocket::TemporaryError,
UnknownSocketError = QAbstractSocket::UnknownSocketError,

  };
  Q_ENUM(SocketError)

  enum SocketState {
    UnconnectedState = QAbstractSocket::UnconnectedState,
HostLookupState = QAbstractSocket::HostLookupState,
ConnectingState = QAbstractSocket::ConnectingState,
ConnectedState = QAbstractSocket::ConnectedState,
BoundState = QAbstractSocket::BoundState,
ListeningState = QAbstractSocket::ListeningState,
ClosingState = QAbstractSocket::ClosingState,

  };
  Q_ENUM(SocketState)

  enum SocketOption {
    LowDelayOption = QAbstractSocket::LowDelayOption,
KeepAliveOption = QAbstractSocket::KeepAliveOption,
MulticastTtlOption = QAbstractSocket::MulticastTtlOption,
MulticastLoopbackOption = QAbstractSocket::MulticastLoopbackOption,
TypeOfServiceOption = QAbstractSocket::TypeOfServiceOption,
SendBufferSizeSocketOption = QAbstractSocket::SendBufferSizeSocketOption,
ReceiveBufferSizeSocketOption = QAbstractSocket::ReceiveBufferSizeSocketOption,
PathMtuSocketOption = QAbstractSocket::PathMtuSocketOption,

  };
  Q_ENUM(SocketOption)

  enum BindFlag {
    DefaultForPlatform = QAbstractSocket::DefaultForPlatform,
ShareAddress = QAbstractSocket::ShareAddress,
DontShareAddress = QAbstractSocket::DontShareAddress,
ReuseAddressHint = QAbstractSocket::ReuseAddressHint,

  };
  Q_ENUM(BindFlag)

  enum PauseMode {
    PauseNever = QAbstractSocket::PauseNever,
PauseOnSslErrors = QAbstractSocket::PauseOnSslErrors,

  };
  Q_ENUM(PauseMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QAbstractSocket_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QAbstractSocket_Wrapper(RJSApi& h, QAbstractSocket* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QAbstractSocket_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

    // Class: QAbstractSocket
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QAbstractSocket_Wrapper
                
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
            
#if QT_VERSION>=QT_VERSION_CHECK(7,0,0)||defined(Q_QDOC)

#else

#endif

#ifndef QT_NO_NETWORKPROXY

#endif

#ifndef QT_NO_NETWORKPROXY

#endif


    // non-static functions:
    
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
    // Function: atEnd
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  atEnd
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
    // Function: canReadLine
    // Source: QIODevice
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  canReadLine
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
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
            
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

    // Class: QAbstractSocket
    // Function: resume
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  resume
              (

                
              )
              
              ;
            
    // Class: QAbstractSocket
    // Function: bind
    // Source: 
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
            
#if QT_VERSION>=QT_VERSION_CHECK(7,0,0)||defined(Q_QDOC)

#else

#endif

    // Class: QAbstractSocket
    // Function: connectToHost
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  connectToHost
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
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractSocket
    // Function: disconnectFromHost
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  disconnectFromHost
              (

                
              )
              
              ;
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
    // Function: bytesAvailable
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bytesAvailable
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractSocket
    // Function: bytesToWrite
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  bytesToWrite
              (

                
              )
              
                const
              
              ;
            
    // Class: QAbstractSocket
    // Function: localPort
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: localAddress
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: peerPort
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: peerAddress
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: peerName
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: readBufferSize
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: setReadBufferSize
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setReadBufferSize
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractSocket
    // Function: abort
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: setSocketOption
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setSocketOption
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
            
    // Class: QAbstractSocket
    // Function: socketOption
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  socketOption
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractSocket
    // Function: socketType
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: state
    // Source: 
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
            
    // Class: QAbstractSocket
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
            
    // Class: QAbstractSocket
    // Function: close
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: isSequential
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: flush
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: waitForConnected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  waitForConnected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractSocket
    // Function: waitForReadyRead
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  waitForReadyRead
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractSocket
    // Function: waitForBytesWritten
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  waitForBytesWritten
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QAbstractSocket
    // Function: waitForDisconnected
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  waitForDisconnected
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
#ifndef QT_NO_NETWORKPROXY

    // Class: QAbstractSocket
    // Function: setProxy
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: proxy
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: protocolTag
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: setProtocolTag
    // Source: 
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
            
#endif

    // Class: QAbstractSocket
    // Function: hostFound
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: connected
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: disconnected
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: stateChanged
    // Source: 
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
            
    // Class: QAbstractSocket
    // Function: errorOccurred
    // Source: 
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
            
#ifndef QT_NO_NETWORKPROXY

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
          return RJSType_QAbstractSocket::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QAbstractSocket* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QAbstractSocket* getWrapped() const {
          
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
          QAbstractSocket* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QAbstractSocket*> basecasters_QAbstractSocket;

      public:
        static void registerBasecaster_QAbstractSocket(RJSBasecaster_QAbstractSocket* bc) {
          basecasters_QAbstractSocket.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QAbstractSocket_Wrapper*)

    Q_DECLARE_INTERFACE(QAbstractSocket_Wrapper, "org.qcad.QAbstractSocket_Wrapper")

  
  #endif
  
