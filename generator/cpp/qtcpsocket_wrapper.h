
  // Auto generated
  
    #ifndef QTCPSOCKET_H_WRAPPER
    #define QTCPSOCKET_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QTcpSocket>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QTcpSocket
    class QTJSAPI_EXPORT QTcpSocket_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QTcpSocket_Wrapper(const QTcpSocket_Wrapper&);

    public:
      // initialization of QTcpSocket:
      static void init(RJSApi& handler);

      
        static QTcpSocket* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QTcpSocket:
          for (int i=0; i<basecasters_QTcpSocket.length(); i++) {
            RJSBasecaster_QTcpSocket* basecaster = basecasters_QTcpSocket[i];
            QTcpSocket* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QTcpSocket:
          if (t==RJSType_QTcpSocket::getIdStatic()) {
            return (QTcpSocket*)vp;
          }

          qWarning() << "QTcpSocket_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QTcpSocket* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QTcpSocket*: wrapper wraps NULL";
          }

          QTcpSocket* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QTcpSocket*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SocketType {
    TcpSocket = QTcpSocket::TcpSocket,
UdpSocket = QTcpSocket::UdpSocket,
SctpSocket = QTcpSocket::SctpSocket,
UnknownSocketType = QTcpSocket::UnknownSocketType,

  };
  Q_ENUM(SocketType)

  enum NetworkLayerProtocol {
    IPv4Protocol = QTcpSocket::IPv4Protocol,
IPv6Protocol = QTcpSocket::IPv6Protocol,
AnyIPProtocol = QTcpSocket::AnyIPProtocol,
UnknownNetworkLayerProtocol = QTcpSocket::UnknownNetworkLayerProtocol,

  };
  Q_ENUM(NetworkLayerProtocol)

  enum SocketError {
    ConnectionRefusedError = QTcpSocket::ConnectionRefusedError,
RemoteHostClosedError = QTcpSocket::RemoteHostClosedError,
HostNotFoundError = QTcpSocket::HostNotFoundError,
SocketAccessError = QTcpSocket::SocketAccessError,
SocketResourceError = QTcpSocket::SocketResourceError,
SocketTimeoutError = QTcpSocket::SocketTimeoutError,
DatagramTooLargeError = QTcpSocket::DatagramTooLargeError,
NetworkError = QTcpSocket::NetworkError,
AddressInUseError = QTcpSocket::AddressInUseError,
SocketAddressNotAvailableError = QTcpSocket::SocketAddressNotAvailableError,
UnsupportedSocketOperationError = QTcpSocket::UnsupportedSocketOperationError,
UnfinishedSocketOperationError = QTcpSocket::UnfinishedSocketOperationError,
ProxyAuthenticationRequiredError = QTcpSocket::ProxyAuthenticationRequiredError,
SslHandshakeFailedError = QTcpSocket::SslHandshakeFailedError,
ProxyConnectionRefusedError = QTcpSocket::ProxyConnectionRefusedError,
ProxyConnectionClosedError = QTcpSocket::ProxyConnectionClosedError,
ProxyConnectionTimeoutError = QTcpSocket::ProxyConnectionTimeoutError,
ProxyNotFoundError = QTcpSocket::ProxyNotFoundError,
ProxyProtocolError = QTcpSocket::ProxyProtocolError,
OperationError = QTcpSocket::OperationError,
SslInternalError = QTcpSocket::SslInternalError,
SslInvalidUserDataError = QTcpSocket::SslInvalidUserDataError,
TemporaryError = QTcpSocket::TemporaryError,
UnknownSocketError = QTcpSocket::UnknownSocketError,

  };
  Q_ENUM(SocketError)

  enum SocketState {
    UnconnectedState = QTcpSocket::UnconnectedState,
HostLookupState = QTcpSocket::HostLookupState,
ConnectingState = QTcpSocket::ConnectingState,
ConnectedState = QTcpSocket::ConnectedState,
BoundState = QTcpSocket::BoundState,
ListeningState = QTcpSocket::ListeningState,
ClosingState = QTcpSocket::ClosingState,

  };
  Q_ENUM(SocketState)

  enum SocketOption {
    LowDelayOption = QTcpSocket::LowDelayOption,
KeepAliveOption = QTcpSocket::KeepAliveOption,
MulticastTtlOption = QTcpSocket::MulticastTtlOption,
MulticastLoopbackOption = QTcpSocket::MulticastLoopbackOption,
TypeOfServiceOption = QTcpSocket::TypeOfServiceOption,
SendBufferSizeSocketOption = QTcpSocket::SendBufferSizeSocketOption,
ReceiveBufferSizeSocketOption = QTcpSocket::ReceiveBufferSizeSocketOption,
PathMtuSocketOption = QTcpSocket::PathMtuSocketOption,
KeepAliveIdleOption = QTcpSocket::KeepAliveIdleOption,
KeepAliveIntervalOption = QTcpSocket::KeepAliveIntervalOption,
KeepAliveCountOption = QTcpSocket::KeepAliveCountOption,

  };
  Q_ENUM(SocketOption)

  enum BindFlag {
    DefaultForPlatform = QTcpSocket::DefaultForPlatform,
ShareAddress = QTcpSocket::ShareAddress,
DontShareAddress = QTcpSocket::DontShareAddress,
ReuseAddressHint = QTcpSocket::ReuseAddressHint,

  };
  Q_ENUM(BindFlag)

  enum PauseMode {
    PauseNever = QTcpSocket::PauseNever,
PauseOnSslErrors = QTcpSocket::PauseOnSslErrors,

  };
  Q_ENUM(PauseMode)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QTcpSocket_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QTcpSocket_Wrapper(RJSApi& h, QTcpSocket* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QTcpSocket_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QTcpSocket
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QTcpSocket_Wrapper
                
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
    
    // Class: QTcpSocket
    // Function: resume
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: connectToHost
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
    // Function: disconnectFromHost
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: setReadBufferSize
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: setSocketOption
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
    // Function: socketOption
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: waitForConnected
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
    // Function: waitForDisconnected
    // Source: QAbstractSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: isSequential
    // Source: QIODevice
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: close
    // Source: QIODevice
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: bytesAvailable
    // Source: QIODevice
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
            
    // Class: QTcpSocket
    // Function: bytesToWrite
    // Source: QIODevice
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
    // Function: waitForReadyRead
    // Source: QIODevice
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
            
    // Class: QTcpSocket
    // Function: waitForBytesWritten
    // Source: QIODevice
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
            
    // Class: QTcpSocket
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
          return RJSType_QTcpSocket::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return true;
            
        }

        // get wrapped object:
        QTcpSocket* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QTcpSocket* getWrapped() const {
          
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
          QTcpSocket* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QTcpSocket*> basecasters_QTcpSocket;

      public:
        static void registerBasecaster_QTcpSocket(RJSBasecaster_QTcpSocket* bc) {
          basecasters_QTcpSocket.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QTcpSocket_Wrapper*)

    Q_DECLARE_INTERFACE(QTcpSocket_Wrapper, "org.qcad.QTcpSocket_Wrapper")

  
  #endif
  
