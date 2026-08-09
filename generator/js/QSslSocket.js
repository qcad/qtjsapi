
      // auto generated
      //var self;

      // class constructor:
      function QSslSocket() {
        

        // should be QSslSocket_BaseJs.call(this, engine):
        //QSslSocket.prototype = new QSslSocket_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslSocket.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslSocket);
                
            //}
          }
          else {
            qWarning("QSslSocket.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QSslSocket.js: No constructor found for class QSslSocket");
            
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["channelReadyRead(int)"] = Object.getPrototypeOf(this).channelReadyRead;
  
    this["bytesWritten(qint64)"] = Object.getPrototypeOf(this).bytesWritten;
  
    this["channelBytesWritten(int,qint64)"] = Object.getPrototypeOf(this).channelBytesWritten;
  
    this["stateChanged(QAbstractSocket::SocketState)"] = Object.getPrototypeOf(this).stateChanged;
  
    this["errorOccurred(QAbstractSocket::SocketError)"] = Object.getPrototypeOf(this).errorOccurred;
  
    this["peerVerifyError(QSslError)"] = Object.getPrototypeOf(this).peerVerifyError;
  
    this["sslErrors(QList<QSslError>)"] = Object.getPrototypeOf(this).sslErrors;
  
    this["modeChanged(QSslSocket::SslMode)"] = Object.getPrototypeOf(this).modeChanged;
  
    this["encryptedBytesWritten(qint64)"] = Object.getPrototypeOf(this).encryptedBytesWritten;
  
    this["preSharedKeyAuthenticationRequired(QSslPreSharedKeyAuthenticator*)"] = Object.getPrototypeOf(this).preSharedKeyAuthenticationRequired;
  
    this["handshakeInterruptedOnError(QSslError)"] = Object.getPrototypeOf(this).handshakeInterruptedOnError;
  
            }
          
        }

        

      }

      //QSslSocket.prototype = new QSslSocket_BaseJs(engine);
      //QSslSocket.prototype = new QSslSocket_Wrapper(engine);
      QSslSocket.prototype = new Object();

      QSslSocket.prototype.toString = function() {
          //return "QSslSocket [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslSocket [JS]";
        };
      QSslSocket.getObjectType = function() {
        return RJSType_QSslSocket.getIdStatic();
      };

      QSslSocket.prototype.getObjectType = function() {
        return RJSType_QSslSocket.getIdStatic();
      };

      QSslSocket.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslSocket.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QIODevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractSocket.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QTcpSocket.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SocketType
QSslSocket.TcpSocket = QSslSocket_Wrapper.TcpSocket;
QSslSocket.UdpSocket = QSslSocket_Wrapper.UdpSocket;
QSslSocket.SctpSocket = QSslSocket_Wrapper.SctpSocket;
QSslSocket.UnknownSocketType = QSslSocket_Wrapper.UnknownSocketType;

  // enum: NetworkLayerProtocol
QSslSocket.IPv4Protocol = QSslSocket_Wrapper.IPv4Protocol;
QSslSocket.IPv6Protocol = QSslSocket_Wrapper.IPv6Protocol;
QSslSocket.AnyIPProtocol = QSslSocket_Wrapper.AnyIPProtocol;
QSslSocket.UnknownNetworkLayerProtocol = QSslSocket_Wrapper.UnknownNetworkLayerProtocol;

  // enum: SocketError
QSslSocket.ConnectionRefusedError = QSslSocket_Wrapper.ConnectionRefusedError;
QSslSocket.RemoteHostClosedError = QSslSocket_Wrapper.RemoteHostClosedError;
QSslSocket.HostNotFoundError = QSslSocket_Wrapper.HostNotFoundError;
QSslSocket.SocketAccessError = QSslSocket_Wrapper.SocketAccessError;
QSslSocket.SocketResourceError = QSslSocket_Wrapper.SocketResourceError;
QSslSocket.SocketTimeoutError = QSslSocket_Wrapper.SocketTimeoutError;
QSslSocket.DatagramTooLargeError = QSslSocket_Wrapper.DatagramTooLargeError;
QSslSocket.NetworkError = QSslSocket_Wrapper.NetworkError;
QSslSocket.AddressInUseError = QSslSocket_Wrapper.AddressInUseError;
QSslSocket.SocketAddressNotAvailableError = QSslSocket_Wrapper.SocketAddressNotAvailableError;
QSslSocket.UnsupportedSocketOperationError = QSslSocket_Wrapper.UnsupportedSocketOperationError;
QSslSocket.UnfinishedSocketOperationError = QSslSocket_Wrapper.UnfinishedSocketOperationError;
QSslSocket.ProxyAuthenticationRequiredError = QSslSocket_Wrapper.ProxyAuthenticationRequiredError;
QSslSocket.SslHandshakeFailedError = QSslSocket_Wrapper.SslHandshakeFailedError;
QSslSocket.ProxyConnectionRefusedError = QSslSocket_Wrapper.ProxyConnectionRefusedError;
QSslSocket.ProxyConnectionClosedError = QSslSocket_Wrapper.ProxyConnectionClosedError;
QSslSocket.ProxyConnectionTimeoutError = QSslSocket_Wrapper.ProxyConnectionTimeoutError;
QSslSocket.ProxyNotFoundError = QSslSocket_Wrapper.ProxyNotFoundError;
QSslSocket.ProxyProtocolError = QSslSocket_Wrapper.ProxyProtocolError;
QSslSocket.OperationError = QSslSocket_Wrapper.OperationError;
QSslSocket.SslInternalError = QSslSocket_Wrapper.SslInternalError;
QSslSocket.SslInvalidUserDataError = QSslSocket_Wrapper.SslInvalidUserDataError;
QSslSocket.TemporaryError = QSslSocket_Wrapper.TemporaryError;
QSslSocket.UnknownSocketError = QSslSocket_Wrapper.UnknownSocketError;

  // enum: SocketState
QSslSocket.UnconnectedState = QSslSocket_Wrapper.UnconnectedState;
QSslSocket.HostLookupState = QSslSocket_Wrapper.HostLookupState;
QSslSocket.ConnectingState = QSslSocket_Wrapper.ConnectingState;
QSslSocket.ConnectedState = QSslSocket_Wrapper.ConnectedState;
QSslSocket.BoundState = QSslSocket_Wrapper.BoundState;
QSslSocket.ListeningState = QSslSocket_Wrapper.ListeningState;
QSslSocket.ClosingState = QSslSocket_Wrapper.ClosingState;

  // enum: SocketOption
QSslSocket.LowDelayOption = QSslSocket_Wrapper.LowDelayOption;
QSslSocket.KeepAliveOption = QSslSocket_Wrapper.KeepAliveOption;
QSslSocket.MulticastTtlOption = QSslSocket_Wrapper.MulticastTtlOption;
QSslSocket.MulticastLoopbackOption = QSslSocket_Wrapper.MulticastLoopbackOption;
QSslSocket.TypeOfServiceOption = QSslSocket_Wrapper.TypeOfServiceOption;
QSslSocket.SendBufferSizeSocketOption = QSslSocket_Wrapper.SendBufferSizeSocketOption;
QSslSocket.ReceiveBufferSizeSocketOption = QSslSocket_Wrapper.ReceiveBufferSizeSocketOption;
QSslSocket.PathMtuSocketOption = QSslSocket_Wrapper.PathMtuSocketOption;

  // enum: BindFlag
QSslSocket.DefaultForPlatform = QSslSocket_Wrapper.DefaultForPlatform;
QSslSocket.ShareAddress = QSslSocket_Wrapper.ShareAddress;
QSslSocket.DontShareAddress = QSslSocket_Wrapper.DontShareAddress;
QSslSocket.ReuseAddressHint = QSslSocket_Wrapper.ReuseAddressHint;

  // enum: PauseMode
QSslSocket.PauseNever = QSslSocket_Wrapper.PauseNever;
QSslSocket.PauseOnSslErrors = QSslSocket_Wrapper.PauseOnSslErrors;

  // enum: PeerVerifyMode
QSslSocket.VerifyNone = QSslSocket_Wrapper.VerifyNone;
QSslSocket.QueryPeer = QSslSocket_Wrapper.QueryPeer;
QSslSocket.VerifyPeer = QSslSocket_Wrapper.VerifyPeer;
QSslSocket.AutoVerifyPeer = QSslSocket_Wrapper.AutoVerifyPeer;


      // functions:
      

      // static functions:
      

        // static function 
        QSslSocket.supportsSsl = function() 
          
        {
          //print("JS: QSslSocket.supportsSsl");
          
        };
      

        // static function 
        QSslSocket.sslLibraryVersionNumber = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryVersionNumber");
          
        };
      

        // static function 
        QSslSocket.sslLibraryVersionString = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryVersionString");
          
        };
      

        // static function 
        QSslSocket.sslLibraryBuildVersionNumber = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryBuildVersionNumber");
          
        };
      

        // static function 
        QSslSocket.sslLibraryBuildVersionString = function() 
          
        {
          //print("JS: QSslSocket.sslLibraryBuildVersionString");
          
        };
      

        // static function 
        QSslSocket.availableBackends = function() 
          
        {
          //print("JS: QSslSocket.availableBackends");
          
        };
      

        // static function 
        QSslSocket.activeBackend = function() 
          
        {
          //print("JS: QSslSocket.activeBackend");
          
        };
      

        // static function 
        QSslSocket.setActiveBackend = function() 
          
        {
          //print("JS: QSslSocket.setActiveBackend");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslSocket.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslSocket.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      