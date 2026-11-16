
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
              
                  this.__PROXY__ = wrapper;
                
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
      
        // function 
        QSslSocket.prototype.openMode = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.openMode");
          
              return this.__PROXY__.openMode(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setTextModeEnabled = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setTextModeEnabled");
          
              return this.__PROXY__.setTextModeEnabled(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isTextModeEnabled = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isTextModeEnabled");
          
              return this.__PROXY__.isTextModeEnabled(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isReadable");
          
              return this.__PROXY__.isReadable(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
        
        // function 
        QSslSocket.prototype.readChannelCount = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.readChannelCount");
          
              return this.__PROXY__.readChannelCount(...args);
            
        };
        
        // function 
        QSslSocket.prototype.writeChannelCount = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.writeChannelCount");
          
              return this.__PROXY__.writeChannelCount(...args);
            
        };
        
        // function 
        QSslSocket.prototype.currentReadChannel = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.currentReadChannel");
          
              return this.__PROXY__.currentReadChannel(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setCurrentReadChannel = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setCurrentReadChannel");
          
              return this.__PROXY__.setCurrentReadChannel(...args);
            
        };
        
        // function 
        QSslSocket.prototype.currentWriteChannel = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.currentWriteChannel");
          
              return this.__PROXY__.currentWriteChannel(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setCurrentWriteChannel = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setCurrentWriteChannel");
          
              return this.__PROXY__.setCurrentWriteChannel(...args);
            
        };
        
        // function 
        QSslSocket.prototype.open = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
        
        // function 
        QSslSocket.prototype.pos = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
        
        // function 
        QSslSocket.prototype.size = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
        
        // function 
        QSslSocket.prototype.seek = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
        
        // function 
        QSslSocket.prototype.reset = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QSslSocket.prototype.readAll = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
        
        // function 
        QSslSocket.prototype.startTransaction = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.startTransaction");
          
              return this.__PROXY__.startTransaction(...args);
            
        };
        
        // function 
        QSslSocket.prototype.commitTransaction = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.commitTransaction");
          
              return this.__PROXY__.commitTransaction(...args);
            
        };
        
        // function 
        QSslSocket.prototype.rollbackTransaction = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.rollbackTransaction");
          
              return this.__PROXY__.rollbackTransaction(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isTransactionStarted = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isTransactionStarted");
          
              return this.__PROXY__.isTransactionStarted(...args);
            
        };
        
        // function 
        QSslSocket.prototype.write = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
        
        // function 
        QSslSocket.prototype.skip = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.skip");
          
              return this.__PROXY__.skip(...args);
            
        };
        
        // function 
        QSslSocket.prototype.ungetChar = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.ungetChar");
          
              return this.__PROXY__.ungetChar(...args);
            
        };
        
        // function 
        QSslSocket.prototype.putChar = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.putChar");
          
              return this.__PROXY__.putChar(...args);
            
        };
        
        // function 
        QSslSocket.prototype.errorString = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
        
        // function 
        QSslSocket.prototype.bind = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.bind");
          
              return this.__PROXY__.bind(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isValid = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QSslSocket.prototype.localPort = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.localPort");
          
              return this.__PROXY__.localPort(...args);
            
        };
        
        // function 
        QSslSocket.prototype.localAddress = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.localAddress");
          
              return this.__PROXY__.localAddress(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerPort = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerPort");
          
              return this.__PROXY__.peerPort(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerAddress = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerAddress");
          
              return this.__PROXY__.peerAddress(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerName = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerName");
          
              return this.__PROXY__.peerName(...args);
            
        };
        
        // function 
        QSslSocket.prototype.readBufferSize = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.readBufferSize");
          
              return this.__PROXY__.readBufferSize(...args);
            
        };
        
        // function 
        QSslSocket.prototype.abort = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.abort");
          
              return this.__PROXY__.abort(...args);
            
        };
        
        // function 
        QSslSocket.prototype.socketType = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.socketType");
          
              return this.__PROXY__.socketType(...args);
            
        };
        
        // function 
        QSslSocket.prototype.state = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.state");
          
              return this.__PROXY__.state(...args);
            
        };
        
        // function 
        QSslSocket.prototype.error = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isSequential = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isSequential");
          
              return this.__PROXY__.isSequential(...args);
            
        };
        
        // function 
        QSslSocket.prototype.flush = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.flush");
          
              return this.__PROXY__.flush(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setProxy = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setProxy");
          
              return this.__PROXY__.setProxy(...args);
            
        };
        
        // function 
        QSslSocket.prototype.proxy = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.proxy");
          
              return this.__PROXY__.proxy(...args);
            
        };
        
        // function 
        QSslSocket.prototype.protocolTag = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.protocolTag");
          
              return this.__PROXY__.protocolTag(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setProtocolTag = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setProtocolTag");
          
              return this.__PROXY__.setProtocolTag(...args);
            
        };
        
        // function 
        QSslSocket.prototype.resume = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.resume");
          
              return this.__PROXY__.resume(...args);
            
        };
        
        // function 
        QSslSocket.prototype.connectToHostEncrypted = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.connectToHostEncrypted");
          
              return this.__PROXY__.connectToHostEncrypted(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setSocketDescriptor = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setSocketDescriptor");
          
              return this.__PROXY__.setSocketDescriptor(...args);
            
        };
        
        // function 
        QSslSocket.prototype.connectToHost = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.connectToHost");
          
              return this.__PROXY__.connectToHost(...args);
            
        };
        
        // function 
        QSslSocket.prototype.disconnectFromHost = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.disconnectFromHost");
          
              return this.__PROXY__.disconnectFromHost(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setSocketOption = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setSocketOption");
          
              return this.__PROXY__.setSocketOption(...args);
            
        };
        
        // function 
        QSslSocket.prototype.socketOption = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.socketOption");
          
              return this.__PROXY__.socketOption(...args);
            
        };
        
        // function 
        QSslSocket.prototype.mode = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.mode");
          
              return this.__PROXY__.mode(...args);
            
        };
        
        // function 
        QSslSocket.prototype.isEncrypted = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.isEncrypted");
          
              return this.__PROXY__.isEncrypted(...args);
            
        };
        
        // function 
        QSslSocket.prototype.protocol = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.protocol");
          
              return this.__PROXY__.protocol(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setProtocol = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setProtocol");
          
              return this.__PROXY__.setProtocol(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerVerifyMode = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerVerifyMode");
          
              return this.__PROXY__.peerVerifyMode(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setPeerVerifyMode = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setPeerVerifyMode");
          
              return this.__PROXY__.setPeerVerifyMode(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerVerifyDepth = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerVerifyDepth");
          
              return this.__PROXY__.peerVerifyDepth(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setPeerVerifyDepth = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setPeerVerifyDepth");
          
              return this.__PROXY__.setPeerVerifyDepth(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerVerifyName = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerVerifyName");
          
              return this.__PROXY__.peerVerifyName(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setPeerVerifyName = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setPeerVerifyName");
          
              return this.__PROXY__.setPeerVerifyName(...args);
            
        };
        
        // function 
        QSslSocket.prototype.bytesAvailable = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.bytesAvailable");
          
              return this.__PROXY__.bytesAvailable(...args);
            
        };
        
        // function 
        QSslSocket.prototype.bytesToWrite = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.bytesToWrite");
          
              return this.__PROXY__.bytesToWrite(...args);
            
        };
        
        // function 
        QSslSocket.prototype.canReadLine = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.canReadLine");
          
              return this.__PROXY__.canReadLine(...args);
            
        };
        
        // function 
        QSslSocket.prototype.close = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QSslSocket.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setReadBufferSize = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setReadBufferSize");
          
              return this.__PROXY__.setReadBufferSize(...args);
            
        };
        
        // function 
        QSslSocket.prototype.encryptedBytesAvailable = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.encryptedBytesAvailable");
          
              return this.__PROXY__.encryptedBytesAvailable(...args);
            
        };
        
        // function 
        QSslSocket.prototype.encryptedBytesToWrite = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.encryptedBytesToWrite");
          
              return this.__PROXY__.encryptedBytesToWrite(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sslConfiguration = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sslConfiguration");
          
              return this.__PROXY__.sslConfiguration(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setSslConfiguration = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setSslConfiguration");
          
              return this.__PROXY__.setSslConfiguration(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setLocalCertificateChain = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setLocalCertificateChain");
          
              return this.__PROXY__.setLocalCertificateChain(...args);
            
        };
        
        // function 
        QSslSocket.prototype.localCertificateChain = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.localCertificateChain");
          
              return this.__PROXY__.localCertificateChain(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setLocalCertificate = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setLocalCertificate");
          
              return this.__PROXY__.setLocalCertificate(...args);
            
        };
        
        // function 
        QSslSocket.prototype.localCertificate = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.localCertificate");
          
              return this.__PROXY__.localCertificate(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerCertificate = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerCertificate");
          
              return this.__PROXY__.peerCertificate(...args);
            
        };
        
        // function 
        QSslSocket.prototype.peerCertificateChain = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.peerCertificateChain");
          
              return this.__PROXY__.peerCertificateChain(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sessionCipher = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sessionCipher");
          
              return this.__PROXY__.sessionCipher(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sessionProtocol = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sessionProtocol");
          
              return this.__PROXY__.sessionProtocol(...args);
            
        };
        
        // function 
        QSslSocket.prototype.ocspResponses = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.ocspResponses");
          
              return this.__PROXY__.ocspResponses(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setPrivateKey = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setPrivateKey");
          
              return this.__PROXY__.setPrivateKey(...args);
            
        };
        
        // function 
        QSslSocket.prototype.privateKey = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.privateKey");
          
              return this.__PROXY__.privateKey(...args);
            
        };
        
        // function 
        QSslSocket.prototype.waitForConnected = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.waitForConnected");
          
              return this.__PROXY__.waitForConnected(...args);
            
        };
        
        // function 
        QSslSocket.prototype.waitForEncrypted = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.waitForEncrypted");
          
              return this.__PROXY__.waitForEncrypted(...args);
            
        };
        
        // function 
        QSslSocket.prototype.waitForReadyRead = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.waitForReadyRead");
          
              return this.__PROXY__.waitForReadyRead(...args);
            
        };
        
        // function 
        QSslSocket.prototype.waitForBytesWritten = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.waitForBytesWritten");
          
              return this.__PROXY__.waitForBytesWritten(...args);
            
        };
        
        // function 
        QSslSocket.prototype.waitForDisconnected = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.waitForDisconnected");
          
              return this.__PROXY__.waitForDisconnected(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sslHandshakeErrors = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sslHandshakeErrors");
          
              return this.__PROXY__.sslHandshakeErrors(...args);
            
        };
        
        // function 
        QSslSocket.prototype.supportsSsl = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.supportsSsl");
          
              return this.__PROXY__.supportsSsl(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sslLibraryVersionNumber = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sslLibraryVersionNumber");
          
              return this.__PROXY__.sslLibraryVersionNumber(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sslLibraryVersionString = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sslLibraryVersionString");
          
              return this.__PROXY__.sslLibraryVersionString(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sslLibraryBuildVersionNumber = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sslLibraryBuildVersionNumber");
          
              return this.__PROXY__.sslLibraryBuildVersionNumber(...args);
            
        };
        
        // function 
        QSslSocket.prototype.sslLibraryBuildVersionString = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.sslLibraryBuildVersionString");
          
              return this.__PROXY__.sslLibraryBuildVersionString(...args);
            
        };
        
        // function 
        QSslSocket.prototype.availableBackends = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.availableBackends");
          
              return this.__PROXY__.availableBackends(...args);
            
        };
        
        // function 
        QSslSocket.prototype.activeBackend = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.activeBackend");
          
              return this.__PROXY__.activeBackend(...args);
            
        };
        
        // function 
        QSslSocket.prototype.setActiveBackend = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.setActiveBackend");
          
              return this.__PROXY__.setActiveBackend(...args);
            
        };
        
        // function 
        QSslSocket.prototype.continueInterruptedHandshake = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.continueInterruptedHandshake");
          
              return this.__PROXY__.continueInterruptedHandshake(...args);
            
        };
        
        // function 
        QSslSocket.prototype.startClientEncryption = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.startClientEncryption");
          
              return this.__PROXY__.startClientEncryption(...args);
            
        };
        
        // function 
        QSslSocket.prototype.startServerEncryption = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.startServerEncryption");
          
              return this.__PROXY__.startServerEncryption(...args);
            
        };
        
        // function 
        QSslSocket.prototype.ignoreSslErrors = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.ignoreSslErrors");
          
              return this.__PROXY__.ignoreSslErrors(...args);
            
        };
        
        // function 
        QSslSocket.prototype.readData = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.readData");
          
              return this.__PROXY__.readDataSuper(...args);
            
        };
        QSslSocket.prototype.readData.__SUPER__ = true;
        
        // function 
        QSslSocket.prototype.skipData = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.skipData");
          
              return this.__PROXY__.skipDataSuper(...args);
            
        };
        QSslSocket.prototype.skipData.__SUPER__ = true;
        
        // function 
        QSslSocket.prototype.writeData = function(...args) 
          
        {
          //print("JS: QSslSocket.prototype.writeData");
          
              return this.__PROXY__.writeDataSuper(...args);
            
        };
        QSslSocket.prototype.writeData.__SUPER__ = true;
        

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
      
        Object.defineProperty(QSslSocket.prototype, 'readyRead', {
            get: function() { return this.__PROXY__.readyRead; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'channelReadyRead', {
            get: function() { return this.__PROXY__.channelReadyRead; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'channelReadyRead(int)', {
              get: function() { return this.__PROXY__.channelReadyRead; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'bytesWritten', {
            get: function() { return this.__PROXY__.bytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'bytesWritten(qint64)', {
              get: function() { return this.__PROXY__.bytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'channelBytesWritten', {
            get: function() { return this.__PROXY__.channelBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'channelBytesWritten(int,qint64)', {
              get: function() { return this.__PROXY__.channelBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'aboutToClose', {
            get: function() { return this.__PROXY__.aboutToClose; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'readChannelFinished', {
            get: function() { return this.__PROXY__.readChannelFinished; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'hostFound', {
            get: function() { return this.__PROXY__.hostFound; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'connected', {
            get: function() { return this.__PROXY__.connected; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'disconnected', {
            get: function() { return this.__PROXY__.disconnected; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'stateChanged', {
            get: function() { return this.__PROXY__.stateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'stateChanged(QAbstractSocket::SocketState)', {
              get: function() { return this.__PROXY__.stateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'errorOccurred', {
            get: function() { return this.__PROXY__.errorOccurred; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'errorOccurred(QAbstractSocket::SocketError)', {
              get: function() { return this.__PROXY__.errorOccurred; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'encrypted', {
            get: function() { return this.__PROXY__.encrypted; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'peerVerifyError', {
            get: function() { return this.__PROXY__.peerVerifyError; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'peerVerifyError(QSslError)', {
              get: function() { return this.__PROXY__.peerVerifyError; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'sslErrors', {
            get: function() { return this.__PROXY__.sslErrors; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'sslErrors(QList<QSslError>)', {
              get: function() { return this.__PROXY__.sslErrors; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'modeChanged', {
            get: function() { return this.__PROXY__.modeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'modeChanged(QSslSocket::SslMode)', {
              get: function() { return this.__PROXY__.modeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'encryptedBytesWritten', {
            get: function() { return this.__PROXY__.encryptedBytesWritten; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'encryptedBytesWritten(qint64)', {
              get: function() { return this.__PROXY__.encryptedBytesWritten; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'preSharedKeyAuthenticationRequired', {
            get: function() { return this.__PROXY__.preSharedKeyAuthenticationRequired; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'preSharedKeyAuthenticationRequired(QSslPreSharedKeyAuthenticator*)', {
              get: function() { return this.__PROXY__.preSharedKeyAuthenticationRequired; },
              configurable: true
          });
        
        Object.defineProperty(QSslSocket.prototype, 'newSessionTicketReceived', {
            get: function() { return this.__PROXY__.newSessionTicketReceived; },
            configurable: true
        });
        
        Object.defineProperty(QSslSocket.prototype, 'handshakeInterruptedOnError', {
            get: function() { return this.__PROXY__.handshakeInterruptedOnError; },
            configurable: true
        });
        
          Object.defineProperty(QSslSocket.prototype, 'handshakeInterruptedOnError(QSslError)', {
              get: function() { return this.__PROXY__.handshakeInterruptedOnError; },
              configurable: true
          });
        QSslSocket.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslSocket.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslSocket.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QSslSocket.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      