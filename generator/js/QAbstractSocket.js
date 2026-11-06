
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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

  // enum: BindFlag
QAbstractSocket.DefaultForPlatform = QAbstractSocket_Wrapper.DefaultForPlatform;
QAbstractSocket.ShareAddress = QAbstractSocket_Wrapper.ShareAddress;
QAbstractSocket.DontShareAddress = QAbstractSocket_Wrapper.DontShareAddress;
QAbstractSocket.ReuseAddressHint = QAbstractSocket_Wrapper.ReuseAddressHint;

  // enum: PauseMode
QAbstractSocket.PauseNever = QAbstractSocket_Wrapper.PauseNever;
QAbstractSocket.PauseOnSslErrors = QAbstractSocket_Wrapper.PauseOnSslErrors;


      // functions:
      
        // function 
        QAbstractSocket.prototype.openMode = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.openMode");
          
              return this.__PROXY__.openMode(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.setTextModeEnabled");
          
              return this.__PROXY__.setTextModeEnabled(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.isTextModeEnabled");
          
              return this.__PROXY__.isTextModeEnabled(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.isReadable");
          
              return this.__PROXY__.isReadable(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.readChannelCount");
          
              return this.__PROXY__.readChannelCount(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.writeChannelCount");
          
              return this.__PROXY__.writeChannelCount(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.currentReadChannel");
          
              return this.__PROXY__.currentReadChannel(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.setCurrentReadChannel");
          
              return this.__PROXY__.setCurrentReadChannel(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.currentWriteChannel");
          
              return this.__PROXY__.currentWriteChannel(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.setCurrentWriteChannel");
          
              return this.__PROXY__.setCurrentWriteChannel(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.open = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.pos = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.size = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.seek = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.reset = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.readAll = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.canReadLine");
          
              return this.__PROXY__.canReadLine(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.startTransaction");
          
              return this.__PROXY__.startTransaction(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.isTransactionStarted");
          
              return this.__PROXY__.isTransactionStarted(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.write = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.skip = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.skip");
          
              return this.__PROXY__.skip(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.ungetChar");
          
              return this.__PROXY__.ungetChar(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.putChar = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.putChar");
          
              return this.__PROXY__.putChar(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.errorString = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.resume = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.resume");
          
              return this.__PROXY__.resume(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.bind = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.bind");
          
              return this.__PROXY__.bind(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.connectToHost = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.connectToHost");
          
              return this.__PROXY__.connectToHost(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.disconnectFromHost = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.disconnectFromHost");
          
              return this.__PROXY__.disconnectFromHost(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.isValid = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.bytesAvailable");
          
              return this.__PROXY__.bytesAvailable(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.bytesToWrite");
          
              return this.__PROXY__.bytesToWrite(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.localPort = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.localPort");
          
              return this.__PROXY__.localPort(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.localAddress = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.localAddress");
          
              return this.__PROXY__.localAddress(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.peerPort = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.peerPort");
          
              return this.__PROXY__.peerPort(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.peerAddress = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.peerAddress");
          
              return this.__PROXY__.peerAddress(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.peerName = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.peerName");
          
              return this.__PROXY__.peerName(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.readBufferSize = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.readBufferSize");
          
              return this.__PROXY__.readBufferSize(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.setReadBufferSize = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.setReadBufferSize");
          
              return this.__PROXY__.setReadBufferSize(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.abort = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.abort");
          
              return this.__PROXY__.abort(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.setSocketOption = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.setSocketOption");
          
              return this.__PROXY__.setSocketOption(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.socketOption = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.socketOption");
          
              return this.__PROXY__.socketOption(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.socketType = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.socketType");
          
              return this.__PROXY__.socketType(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.state = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.state");
          
              return this.__PROXY__.state(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.error = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.close = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.isSequential");
          
              return this.__PROXY__.isSequential(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.flush = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.flush");
          
              return this.__PROXY__.flush(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.waitForConnected = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.waitForConnected");
          
              return this.__PROXY__.waitForConnected(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.waitForReadyRead");
          
              return this.__PROXY__.waitForReadyRead(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.waitForBytesWritten");
          
              return this.__PROXY__.waitForBytesWritten(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.waitForDisconnected = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.waitForDisconnected");
          
              return this.__PROXY__.waitForDisconnected(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.setProxy = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.setProxy");
          
              return this.__PROXY__.setProxy(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.proxy = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.proxy");
          
              return this.__PROXY__.proxy(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.protocolTag = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.protocolTag");
          
              return this.__PROXY__.protocolTag(...args);
            
        };
    
        // function 
        QAbstractSocket.prototype.setProtocolTag = function(...args) 
          
        {
          //print("JS: QAbstractSocket.prototype.setProtocolTag");
          
              return this.__PROXY__.setProtocolTag(...args);
            
        };
    

      // static functions:
      
        Object.defineProperty(QAbstractSocket.prototype, 'readyRead', {
            get: function() { return this.__PROXY__.readyRead; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSocket.prototype, 'channelReadyRead', {
            get: function() { return this.__PROXY__.channelReadyRead; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSocket.prototype, 'channelReadyRead(int)', {
              get: function() { return this.__PROXY__.channelReadyRead; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSocket.prototype, 'bytesWritten', {
            get: function() { return this.__PROXY__.bytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSocket.prototype, 'bytesWritten(qint64)', {
              get: function() { return this.__PROXY__.bytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSocket.prototype, 'channelBytesWritten', {
            get: function() { return this.__PROXY__.channelBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSocket.prototype, 'channelBytesWritten(int,qint64)', {
              get: function() { return this.__PROXY__.channelBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSocket.prototype, 'aboutToClose', {
            get: function() { return this.__PROXY__.aboutToClose; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSocket.prototype, 'readChannelFinished', {
            get: function() { return this.__PROXY__.readChannelFinished; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSocket.prototype, 'hostFound', {
            get: function() { return this.__PROXY__.hostFound; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSocket.prototype, 'connected', {
            get: function() { return this.__PROXY__.connected; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSocket.prototype, 'disconnected', {
            get: function() { return this.__PROXY__.disconnected; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractSocket.prototype, 'stateChanged', {
            get: function() { return this.__PROXY__.stateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSocket.prototype, 'stateChanged(QAbstractSocket::SocketState)', {
              get: function() { return this.__PROXY__.stateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractSocket.prototype, 'errorOccurred', {
            get: function() { return this.__PROXY__.errorOccurred; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSocket.prototype, 'errorOccurred(QAbstractSocket::SocketError)', {
              get: function() { return this.__PROXY__.errorOccurred; },
              configurable: true
          });
        QAbstractSocket.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractSocket.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractSocket.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QAbstractSocket.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      