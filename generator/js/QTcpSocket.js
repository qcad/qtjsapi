
      // auto generated
      //var self;

      // class constructor:
      function QTcpSocket() {
        

        // should be QTcpSocket_BaseJs.call(this, engine):
        //QTcpSocket.prototype = new QTcpSocket_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTcpSocket.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTcpSocket);
                
            //}
          }
          else {
            qWarning("QTcpSocket.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTcpSocket_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTcpSocket);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTcpSocket);
  }

  
  else {
    
        print("QTcpSocket(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
              
    this["stateChanged(QAbstractSocket::SocketState)"] = Object.getPrototypeOf(this).stateChanged;
  
    this["errorOccurred(QAbstractSocket::SocketError)"] = Object.getPrototypeOf(this).errorOccurred;
  
    this["proxyAuthenticationRequired(QNetworkProxy,QAuthenticator*)"] = Object.getPrototypeOf(this).proxyAuthenticationRequired;
  
            }
          
        }

        

      }

      //QTcpSocket.prototype = new QTcpSocket_BaseJs(engine);
      //QTcpSocket.prototype = new QTcpSocket_Wrapper(engine);
      QTcpSocket.prototype = new Object();

      QTcpSocket.prototype.toString = function() {
          //return "QTcpSocket [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTcpSocket [JS]";
        };
      QTcpSocket.getObjectType = function() {
        return RJSType_QTcpSocket.getIdStatic();
      };

      QTcpSocket.prototype.getObjectType = function() {
        return RJSType_QTcpSocket.getIdStatic();
      };

      QTcpSocket.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTcpSocket.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QAbstractSocket.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SocketType
QTcpSocket.TcpSocket = QTcpSocket_Wrapper.TcpSocket;
QTcpSocket.UdpSocket = QTcpSocket_Wrapper.UdpSocket;
QTcpSocket.SctpSocket = QTcpSocket_Wrapper.SctpSocket;
QTcpSocket.UnknownSocketType = QTcpSocket_Wrapper.UnknownSocketType;

  // enum: NetworkLayerProtocol
QTcpSocket.IPv4Protocol = QTcpSocket_Wrapper.IPv4Protocol;
QTcpSocket.IPv6Protocol = QTcpSocket_Wrapper.IPv6Protocol;
QTcpSocket.AnyIPProtocol = QTcpSocket_Wrapper.AnyIPProtocol;
QTcpSocket.UnknownNetworkLayerProtocol = QTcpSocket_Wrapper.UnknownNetworkLayerProtocol;

  // enum: SocketError
QTcpSocket.ConnectionRefusedError = QTcpSocket_Wrapper.ConnectionRefusedError;
QTcpSocket.RemoteHostClosedError = QTcpSocket_Wrapper.RemoteHostClosedError;
QTcpSocket.HostNotFoundError = QTcpSocket_Wrapper.HostNotFoundError;
QTcpSocket.SocketAccessError = QTcpSocket_Wrapper.SocketAccessError;
QTcpSocket.SocketResourceError = QTcpSocket_Wrapper.SocketResourceError;
QTcpSocket.SocketTimeoutError = QTcpSocket_Wrapper.SocketTimeoutError;
QTcpSocket.DatagramTooLargeError = QTcpSocket_Wrapper.DatagramTooLargeError;
QTcpSocket.NetworkError = QTcpSocket_Wrapper.NetworkError;
QTcpSocket.AddressInUseError = QTcpSocket_Wrapper.AddressInUseError;
QTcpSocket.SocketAddressNotAvailableError = QTcpSocket_Wrapper.SocketAddressNotAvailableError;
QTcpSocket.UnsupportedSocketOperationError = QTcpSocket_Wrapper.UnsupportedSocketOperationError;
QTcpSocket.UnfinishedSocketOperationError = QTcpSocket_Wrapper.UnfinishedSocketOperationError;
QTcpSocket.ProxyAuthenticationRequiredError = QTcpSocket_Wrapper.ProxyAuthenticationRequiredError;
QTcpSocket.SslHandshakeFailedError = QTcpSocket_Wrapper.SslHandshakeFailedError;
QTcpSocket.ProxyConnectionRefusedError = QTcpSocket_Wrapper.ProxyConnectionRefusedError;
QTcpSocket.ProxyConnectionClosedError = QTcpSocket_Wrapper.ProxyConnectionClosedError;
QTcpSocket.ProxyConnectionTimeoutError = QTcpSocket_Wrapper.ProxyConnectionTimeoutError;
QTcpSocket.ProxyNotFoundError = QTcpSocket_Wrapper.ProxyNotFoundError;
QTcpSocket.ProxyProtocolError = QTcpSocket_Wrapper.ProxyProtocolError;
QTcpSocket.OperationError = QTcpSocket_Wrapper.OperationError;
QTcpSocket.SslInternalError = QTcpSocket_Wrapper.SslInternalError;
QTcpSocket.SslInvalidUserDataError = QTcpSocket_Wrapper.SslInvalidUserDataError;
QTcpSocket.TemporaryError = QTcpSocket_Wrapper.TemporaryError;
QTcpSocket.UnknownSocketError = QTcpSocket_Wrapper.UnknownSocketError;

  // enum: SocketState
QTcpSocket.UnconnectedState = QTcpSocket_Wrapper.UnconnectedState;
QTcpSocket.HostLookupState = QTcpSocket_Wrapper.HostLookupState;
QTcpSocket.ConnectingState = QTcpSocket_Wrapper.ConnectingState;
QTcpSocket.ConnectedState = QTcpSocket_Wrapper.ConnectedState;
QTcpSocket.BoundState = QTcpSocket_Wrapper.BoundState;
QTcpSocket.ListeningState = QTcpSocket_Wrapper.ListeningState;
QTcpSocket.ClosingState = QTcpSocket_Wrapper.ClosingState;

  // enum: SocketOption
QTcpSocket.LowDelayOption = QTcpSocket_Wrapper.LowDelayOption;
QTcpSocket.KeepAliveOption = QTcpSocket_Wrapper.KeepAliveOption;
QTcpSocket.MulticastTtlOption = QTcpSocket_Wrapper.MulticastTtlOption;
QTcpSocket.MulticastLoopbackOption = QTcpSocket_Wrapper.MulticastLoopbackOption;
QTcpSocket.TypeOfServiceOption = QTcpSocket_Wrapper.TypeOfServiceOption;
QTcpSocket.SendBufferSizeSocketOption = QTcpSocket_Wrapper.SendBufferSizeSocketOption;
QTcpSocket.ReceiveBufferSizeSocketOption = QTcpSocket_Wrapper.ReceiveBufferSizeSocketOption;
QTcpSocket.PathMtuSocketOption = QTcpSocket_Wrapper.PathMtuSocketOption;
QTcpSocket.KeepAliveIdleOption = QTcpSocket_Wrapper.KeepAliveIdleOption;
QTcpSocket.KeepAliveIntervalOption = QTcpSocket_Wrapper.KeepAliveIntervalOption;
QTcpSocket.KeepAliveCountOption = QTcpSocket_Wrapper.KeepAliveCountOption;

  // enum: BindFlag
QTcpSocket.DefaultForPlatform = QTcpSocket_Wrapper.DefaultForPlatform;
QTcpSocket.ShareAddress = QTcpSocket_Wrapper.ShareAddress;
QTcpSocket.DontShareAddress = QTcpSocket_Wrapper.DontShareAddress;
QTcpSocket.ReuseAddressHint = QTcpSocket_Wrapper.ReuseAddressHint;

  // enum: PauseMode
QTcpSocket.PauseNever = QTcpSocket_Wrapper.PauseNever;
QTcpSocket.PauseOnSslErrors = QTcpSocket_Wrapper.PauseOnSslErrors;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTcpSocket.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTcpSocket.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      