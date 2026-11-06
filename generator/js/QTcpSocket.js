
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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

        
          if (t===RJSType_QIODevice.getIdStatic()) {
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

  // enum: BindFlag
QTcpSocket.DefaultForPlatform = QTcpSocket_Wrapper.DefaultForPlatform;
QTcpSocket.ShareAddress = QTcpSocket_Wrapper.ShareAddress;
QTcpSocket.DontShareAddress = QTcpSocket_Wrapper.DontShareAddress;
QTcpSocket.ReuseAddressHint = QTcpSocket_Wrapper.ReuseAddressHint;

  // enum: PauseMode
QTcpSocket.PauseNever = QTcpSocket_Wrapper.PauseNever;
QTcpSocket.PauseOnSslErrors = QTcpSocket_Wrapper.PauseOnSslErrors;


      // functions:
      
        // function 
        QTcpSocket.prototype.openMode = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.openMode");
          
              return this.__PROXY__.openMode(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.setTextModeEnabled");
          
              return this.__PROXY__.setTextModeEnabled(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.isTextModeEnabled");
          
              return this.__PROXY__.isTextModeEnabled(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.isReadable");
          
              return this.__PROXY__.isReadable(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.readChannelCount");
          
              return this.__PROXY__.readChannelCount(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.writeChannelCount");
          
              return this.__PROXY__.writeChannelCount(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.currentReadChannel");
          
              return this.__PROXY__.currentReadChannel(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.setCurrentReadChannel");
          
              return this.__PROXY__.setCurrentReadChannel(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.currentWriteChannel");
          
              return this.__PROXY__.currentWriteChannel(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.setCurrentWriteChannel");
          
              return this.__PROXY__.setCurrentWriteChannel(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.open = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.pos = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.size = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.seek = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.reset = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.readAll = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.canReadLine");
          
              return this.__PROXY__.canReadLine(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.startTransaction");
          
              return this.__PROXY__.startTransaction(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.isTransactionStarted");
          
              return this.__PROXY__.isTransactionStarted(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.write = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.skip = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.skip");
          
              return this.__PROXY__.skip(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.ungetChar");
          
              return this.__PROXY__.ungetChar(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.putChar = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.putChar");
          
              return this.__PROXY__.putChar(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.errorString = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.resume = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.resume");
          
              return this.__PROXY__.resume(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.bind = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.bind");
          
              return this.__PROXY__.bind(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.connectToHost = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.connectToHost");
          
              return this.__PROXY__.connectToHost(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.disconnectFromHost = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.disconnectFromHost");
          
              return this.__PROXY__.disconnectFromHost(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.bytesAvailable");
          
              return this.__PROXY__.bytesAvailable(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.bytesToWrite");
          
              return this.__PROXY__.bytesToWrite(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.localPort = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.localPort");
          
              return this.__PROXY__.localPort(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.localAddress = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.localAddress");
          
              return this.__PROXY__.localAddress(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.peerPort = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.peerPort");
          
              return this.__PROXY__.peerPort(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.peerAddress = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.peerAddress");
          
              return this.__PROXY__.peerAddress(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.peerName = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.peerName");
          
              return this.__PROXY__.peerName(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.readBufferSize = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.readBufferSize");
          
              return this.__PROXY__.readBufferSize(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.setReadBufferSize = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.setReadBufferSize");
          
              return this.__PROXY__.setReadBufferSize(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.abort = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.abort");
          
              return this.__PROXY__.abort(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.setSocketOption = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.setSocketOption");
          
              return this.__PROXY__.setSocketOption(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.socketOption = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.socketOption");
          
              return this.__PROXY__.socketOption(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.socketType = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.socketType");
          
              return this.__PROXY__.socketType(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.state = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.state");
          
              return this.__PROXY__.state(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.error = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.close = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.isSequential");
          
              return this.__PROXY__.isSequential(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.flush = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.flush");
          
              return this.__PROXY__.flush(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.waitForConnected = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.waitForConnected");
          
              return this.__PROXY__.waitForConnected(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.waitForReadyRead");
          
              return this.__PROXY__.waitForReadyRead(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.waitForBytesWritten");
          
              return this.__PROXY__.waitForBytesWritten(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.waitForDisconnected = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.waitForDisconnected");
          
              return this.__PROXY__.waitForDisconnected(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.setProxy = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.setProxy");
          
              return this.__PROXY__.setProxy(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.proxy = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.proxy");
          
              return this.__PROXY__.proxy(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.protocolTag = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.protocolTag");
          
              return this.__PROXY__.protocolTag(...args);
            
        };
    
        // function 
        QTcpSocket.prototype.setProtocolTag = function(...args) 
          
        {
          //print("JS: QTcpSocket.prototype.setProtocolTag");
          
              return this.__PROXY__.setProtocolTag(...args);
            
        };
    

      // static functions:
      
        Object.defineProperty(QTcpSocket.prototype, 'readyRead', {
            get: function() { return this.__PROXY__.readyRead; },
            configurable: true
        });
        
        Object.defineProperty(QTcpSocket.prototype, 'channelReadyRead', {
            get: function() { return this.__PROXY__.channelReadyRead; },
            configurable: true
        });
        
          Object.defineProperty(QTcpSocket.prototype, 'channelReadyRead(int)', {
              get: function() { return this.__PROXY__.channelReadyRead; },
              configurable: true
          });
        
        Object.defineProperty(QTcpSocket.prototype, 'bytesWritten', {
            get: function() { return this.__PROXY__.bytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QTcpSocket.prototype, 'bytesWritten(qint64)', {
              get: function() { return this.__PROXY__.bytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QTcpSocket.prototype, 'channelBytesWritten', {
            get: function() { return this.__PROXY__.channelBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QTcpSocket.prototype, 'channelBytesWritten(int,qint64)', {
              get: function() { return this.__PROXY__.channelBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QTcpSocket.prototype, 'aboutToClose', {
            get: function() { return this.__PROXY__.aboutToClose; },
            configurable: true
        });
        
        Object.defineProperty(QTcpSocket.prototype, 'readChannelFinished', {
            get: function() { return this.__PROXY__.readChannelFinished; },
            configurable: true
        });
        
        Object.defineProperty(QTcpSocket.prototype, 'hostFound', {
            get: function() { return this.__PROXY__.hostFound; },
            configurable: true
        });
        
        Object.defineProperty(QTcpSocket.prototype, 'connected', {
            get: function() { return this.__PROXY__.connected; },
            configurable: true
        });
        
        Object.defineProperty(QTcpSocket.prototype, 'disconnected', {
            get: function() { return this.__PROXY__.disconnected; },
            configurable: true
        });
        
        Object.defineProperty(QTcpSocket.prototype, 'stateChanged', {
            get: function() { return this.__PROXY__.stateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTcpSocket.prototype, 'stateChanged(QAbstractSocket::SocketState)', {
              get: function() { return this.__PROXY__.stateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTcpSocket.prototype, 'errorOccurred', {
            get: function() { return this.__PROXY__.errorOccurred; },
            configurable: true
        });
        
          Object.defineProperty(QTcpSocket.prototype, 'errorOccurred(QAbstractSocket::SocketError)', {
              get: function() { return this.__PROXY__.errorOccurred; },
              configurable: true
          });
        QTcpSocket.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTcpSocket.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTcpSocket.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QTcpSocket.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      