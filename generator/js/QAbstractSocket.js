
      // auto generated
      //var self;

      // class constructor:
      function QAbstractSocket() {
        

        // should be QAbstractSocket_BaseJs.call(this, engine):
        //QAbstractSocket.prototype = new QAbstractSocket_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractSocket.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QAbstractSocket);
                
            //}
          }
          else {
            qWarning("QAbstractSocket.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QAbstractSocket_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QAbstractSocket);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAbstractSocket);
  }

  
  else {
    
        print("QAbstractSocket(): wrong number / type of arguments");
      
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
              
    this["channelReadyRead(int)"] = Object.getPrototypeOf(this).channelReadyRead;
  
    this["bytesWritten(qint64)"] = Object.getPrototypeOf(this).bytesWritten;
  
    this["channelBytesWritten(int,qint64)"] = Object.getPrototypeOf(this).channelBytesWritten;
  
    this["stateChanged(QAbstractSocket::SocketState)"] = Object.getPrototypeOf(this).stateChanged;
  
    this["errorOccurred(QAbstractSocket::SocketError)"] = Object.getPrototypeOf(this).errorOccurred;
  
            }
          
        }

        

      }

      //QAbstractSocket.prototype = new QAbstractSocket_BaseJs(engine);
      //QAbstractSocket.prototype = new QAbstractSocket_Wrapper(engine);
      QAbstractSocket.prototype = new Object();

      QAbstractSocket.prototype.toString = function() {
          //return "QAbstractSocket [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractSocket [JS]";
        };
      QAbstractSocket.getObjectType = function() {
        return RJSType_QAbstractSocket.getIdStatic();
      };

      QAbstractSocket.prototype.getObjectType = function() {
        return RJSType_QAbstractSocket.getIdStatic();
      };

      QAbstractSocket.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractSocket.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QIODevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SocketType
QAbstractSocket.TcpSocket = QAbstractSocket_Wrapper.TcpSocket;
QAbstractSocket.UdpSocket = QAbstractSocket_Wrapper.UdpSocket;
QAbstractSocket.SctpSocket = QAbstractSocket_Wrapper.SctpSocket;
QAbstractSocket.UnknownSocketType = QAbstractSocket_Wrapper.UnknownSocketType;

  // enum: NetworkLayerProtocol
QAbstractSocket.IPv4Protocol = QAbstractSocket_Wrapper.IPv4Protocol;
QAbstractSocket.IPv6Protocol = QAbstractSocket_Wrapper.IPv6Protocol;
QAbstractSocket.AnyIPProtocol = QAbstractSocket_Wrapper.AnyIPProtocol;
QAbstractSocket.UnknownNetworkLayerProtocol = QAbstractSocket_Wrapper.UnknownNetworkLayerProtocol;

  // enum: SocketError
QAbstractSocket.ConnectionRefusedError = QAbstractSocket_Wrapper.ConnectionRefusedError;
QAbstractSocket.RemoteHostClosedError = QAbstractSocket_Wrapper.RemoteHostClosedError;
QAbstractSocket.HostNotFoundError = QAbstractSocket_Wrapper.HostNotFoundError;
QAbstractSocket.SocketAccessError = QAbstractSocket_Wrapper.SocketAccessError;
QAbstractSocket.SocketResourceError = QAbstractSocket_Wrapper.SocketResourceError;
QAbstractSocket.SocketTimeoutError = QAbstractSocket_Wrapper.SocketTimeoutError;
QAbstractSocket.DatagramTooLargeError = QAbstractSocket_Wrapper.DatagramTooLargeError;
QAbstractSocket.NetworkError = QAbstractSocket_Wrapper.NetworkError;
QAbstractSocket.AddressInUseError = QAbstractSocket_Wrapper.AddressInUseError;
QAbstractSocket.SocketAddressNotAvailableError = QAbstractSocket_Wrapper.SocketAddressNotAvailableError;
QAbstractSocket.UnsupportedSocketOperationError = QAbstractSocket_Wrapper.UnsupportedSocketOperationError;
QAbstractSocket.UnfinishedSocketOperationError = QAbstractSocket_Wrapper.UnfinishedSocketOperationError;
QAbstractSocket.ProxyAuthenticationRequiredError = QAbstractSocket_Wrapper.ProxyAuthenticationRequiredError;
QAbstractSocket.SslHandshakeFailedError = QAbstractSocket_Wrapper.SslHandshakeFailedError;
QAbstractSocket.ProxyConnectionRefusedError = QAbstractSocket_Wrapper.ProxyConnectionRefusedError;
QAbstractSocket.ProxyConnectionClosedError = QAbstractSocket_Wrapper.ProxyConnectionClosedError;
QAbstractSocket.ProxyConnectionTimeoutError = QAbstractSocket_Wrapper.ProxyConnectionTimeoutError;
QAbstractSocket.ProxyNotFoundError = QAbstractSocket_Wrapper.ProxyNotFoundError;
QAbstractSocket.ProxyProtocolError = QAbstractSocket_Wrapper.ProxyProtocolError;
QAbstractSocket.OperationError = QAbstractSocket_Wrapper.OperationError;
QAbstractSocket.SslInternalError = QAbstractSocket_Wrapper.SslInternalError;
QAbstractSocket.SslInvalidUserDataError = QAbstractSocket_Wrapper.SslInvalidUserDataError;
QAbstractSocket.TemporaryError = QAbstractSocket_Wrapper.TemporaryError;
QAbstractSocket.UnknownSocketError = QAbstractSocket_Wrapper.UnknownSocketError;

  // enum: SocketState
QAbstractSocket.UnconnectedState = QAbstractSocket_Wrapper.UnconnectedState;
QAbstractSocket.HostLookupState = QAbstractSocket_Wrapper.HostLookupState;
QAbstractSocket.ConnectingState = QAbstractSocket_Wrapper.ConnectingState;
QAbstractSocket.ConnectedState = QAbstractSocket_Wrapper.ConnectedState;
QAbstractSocket.BoundState = QAbstractSocket_Wrapper.BoundState;
QAbstractSocket.ListeningState = QAbstractSocket_Wrapper.ListeningState;
QAbstractSocket.ClosingState = QAbstractSocket_Wrapper.ClosingState;

  // enum: SocketOption
QAbstractSocket.LowDelayOption = QAbstractSocket_Wrapper.LowDelayOption;
QAbstractSocket.KeepAliveOption = QAbstractSocket_Wrapper.KeepAliveOption;
QAbstractSocket.MulticastTtlOption = QAbstractSocket_Wrapper.MulticastTtlOption;
QAbstractSocket.MulticastLoopbackOption = QAbstractSocket_Wrapper.MulticastLoopbackOption;
QAbstractSocket.TypeOfServiceOption = QAbstractSocket_Wrapper.TypeOfServiceOption;
QAbstractSocket.SendBufferSizeSocketOption = QAbstractSocket_Wrapper.SendBufferSizeSocketOption;
QAbstractSocket.ReceiveBufferSizeSocketOption = QAbstractSocket_Wrapper.ReceiveBufferSizeSocketOption;
QAbstractSocket.PathMtuSocketOption = QAbstractSocket_Wrapper.PathMtuSocketOption;
QAbstractSocket.KeepAliveIdleOption = QAbstractSocket_Wrapper.KeepAliveIdleOption;
QAbstractSocket.KeepAliveIntervalOption = QAbstractSocket_Wrapper.KeepAliveIntervalOption;
QAbstractSocket.KeepAliveCountOption = QAbstractSocket_Wrapper.KeepAliveCountOption;

  // enum: BindFlag
QAbstractSocket.DefaultForPlatform = QAbstractSocket_Wrapper.DefaultForPlatform;
QAbstractSocket.ShareAddress = QAbstractSocket_Wrapper.ShareAddress;
QAbstractSocket.DontShareAddress = QAbstractSocket_Wrapper.DontShareAddress;
QAbstractSocket.ReuseAddressHint = QAbstractSocket_Wrapper.ReuseAddressHint;

  // enum: PauseMode
QAbstractSocket.PauseNever = QAbstractSocket_Wrapper.PauseNever;
QAbstractSocket.PauseOnSslErrors = QAbstractSocket_Wrapper.PauseOnSslErrors;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractSocket.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractSocket.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      