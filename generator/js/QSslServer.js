
      // auto generated
      //var self;

      // class constructor:
      function QSslServer() {
        

        // should be QSslServer_BaseJs.call(this, engine):
        //QSslServer.prototype = new QSslServer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslServer.getIdStatic()))) {

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
            qWarning("QSslServer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSslServer_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslServer);
  }

  
  else {
    
        print("QSslServer(): wrong number / type of arguments");
      
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

      //QSslServer.prototype = new QSslServer_BaseJs(engine);
      //QSslServer.prototype = new QSslServer_Wrapper(engine);
      QSslServer.prototype = new Object();


      QSslServer.prototype.toString = function() {
          //return "QSslServer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslServer [JS]";
        };
      QSslServer.getObjectType = function() {
        return RJSType_QSslServer.getIdStatic();
      };

      QSslServer.prototype.getObjectType = function() {
        return RJSType_QSslServer.getIdStatic();
      };

      QSslServer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslServer.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTcpServer.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSslServer.prototype.listen = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.listen");
          
              return this.__PROXY__.listen(...args);
            
        };
    
        // function 
        QSslServer.prototype.close = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QSslServer.prototype.isListening = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.isListening");
          
              return this.__PROXY__.isListening(...args);
            
        };
    
        // function 
        QSslServer.prototype.setMaxPendingConnections = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.setMaxPendingConnections");
          
              return this.__PROXY__.setMaxPendingConnections(...args);
            
        };
    
        // function 
        QSslServer.prototype.maxPendingConnections = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.maxPendingConnections");
          
              return this.__PROXY__.maxPendingConnections(...args);
            
        };
    
        // function 
        QSslServer.prototype.setListenBacklogSize = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.setListenBacklogSize");
          
              return this.__PROXY__.setListenBacklogSize(...args);
            
        };
    
        // function 
        QSslServer.prototype.listenBacklogSize = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.listenBacklogSize");
          
              return this.__PROXY__.listenBacklogSize(...args);
            
        };
    
        // function 
        QSslServer.prototype.serverPort = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.serverPort");
          
              return this.__PROXY__.serverPort(...args);
            
        };
    
        // function 
        QSslServer.prototype.serverAddress = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.serverAddress");
          
              return this.__PROXY__.serverAddress(...args);
            
        };
    
        // function 
        QSslServer.prototype.waitForNewConnection = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.waitForNewConnection");
          
              return this.__PROXY__.waitForNewConnection(...args);
            
        };
    
        // function 
        QSslServer.prototype.hasPendingConnections = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.hasPendingConnections");
          
              return this.__PROXY__.hasPendingConnections(...args);
            
        };
    
        // function 
        QSslServer.prototype.nextPendingConnection = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.nextPendingConnection");
          
              return this.__PROXY__.nextPendingConnection(...args);
            
        };
    
        // function 
        QSslServer.prototype.serverError = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.serverError");
          
              return this.__PROXY__.serverError(...args);
            
        };
    
        // function 
        QSslServer.prototype.errorString = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QSslServer.prototype.pauseAccepting = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.pauseAccepting");
          
              return this.__PROXY__.pauseAccepting(...args);
            
        };
    
        // function 
        QSslServer.prototype.resumeAccepting = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.resumeAccepting");
          
              return this.__PROXY__.resumeAccepting(...args);
            
        };
    
        // function 
        QSslServer.prototype.setProxy = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.setProxy");
          
              return this.__PROXY__.setProxy(...args);
            
        };
    
        // function 
        QSslServer.prototype.proxy = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.proxy");
          
              return this.__PROXY__.proxy(...args);
            
        };
    
        // function 
        QSslServer.prototype.setSslConfiguration = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.setSslConfiguration");
          
              return this.__PROXY__.setSslConfiguration(...args);
            
        };
    
        // function 
        QSslServer.prototype.sslConfiguration = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.sslConfiguration");
          
              return this.__PROXY__.sslConfiguration(...args);
            
        };
    
        // function 
        QSslServer.prototype.setHandshakeTimeout = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.setHandshakeTimeout");
          
              return this.__PROXY__.setHandshakeTimeout(...args);
            
        };
    
        // function 
        QSslServer.prototype.handshakeTimeout = function(...args) 
          
        {
          //print("JS: QSslServer.prototype.handshakeTimeout");
          
              return this.__PROXY__.handshakeTimeout(...args);
            
        };
    

      // static functions:
      
        Object.defineProperty(QSslServer.prototype, 'newConnection', {
            get: function() { return this.__PROXY__.newConnection; },
            configurable: true
        });
        
        Object.defineProperty(QSslServer.prototype, 'acceptError', {
            get: function() { return this.__PROXY__.acceptError; },
            configurable: true
        });
        
          Object.defineProperty(QSslServer.prototype, 'acceptError(QAbstractSocket::SocketError)', {
              get: function() { return this.__PROXY__.acceptError; },
              configurable: true
          });
        
        Object.defineProperty(QSslServer.prototype, 'sslErrors', {
            get: function() { return this.__PROXY__.sslErrors; },
            configurable: true
        });
        
          Object.defineProperty(QSslServer.prototype, 'sslErrors(QSslSocket*,QList<QSslError>)', {
              get: function() { return this.__PROXY__.sslErrors; },
              configurable: true
          });
        
        Object.defineProperty(QSslServer.prototype, 'peerVerifyError', {
            get: function() { return this.__PROXY__.peerVerifyError; },
            configurable: true
        });
        
          Object.defineProperty(QSslServer.prototype, 'peerVerifyError(QSslSocket*,QSslError)', {
              get: function() { return this.__PROXY__.peerVerifyError; },
              configurable: true
          });
        
        Object.defineProperty(QSslServer.prototype, 'errorOccurred', {
            get: function() { return this.__PROXY__.errorOccurred; },
            configurable: true
        });
        
          Object.defineProperty(QSslServer.prototype, 'errorOccurred(QSslSocket*,QAbstractSocket::SocketError)', {
              get: function() { return this.__PROXY__.errorOccurred; },
              configurable: true
          });
        
        Object.defineProperty(QSslServer.prototype, 'preSharedKeyAuthenticationRequired', {
            get: function() { return this.__PROXY__.preSharedKeyAuthenticationRequired; },
            configurable: true
        });
        
          Object.defineProperty(QSslServer.prototype, 'preSharedKeyAuthenticationRequired(QSslSocket*,QSslPreSharedKeyAuthenticator*)', {
              get: function() { return this.__PROXY__.preSharedKeyAuthenticationRequired; },
              configurable: true
          });
        
        Object.defineProperty(QSslServer.prototype, 'handshakeInterruptedOnError', {
            get: function() { return this.__PROXY__.handshakeInterruptedOnError; },
            configurable: true
        });
        
          Object.defineProperty(QSslServer.prototype, 'handshakeInterruptedOnError(QSslSocket*,QSslError)', {
              get: function() { return this.__PROXY__.handshakeInterruptedOnError; },
              configurable: true
          });
        
        Object.defineProperty(QSslServer.prototype, 'startedEncryptionHandshake', {
            get: function() { return this.__PROXY__.startedEncryptionHandshake; },
            configurable: true
        });
        
          Object.defineProperty(QSslServer.prototype, 'startedEncryptionHandshake(QSslSocket*)', {
              get: function() { return this.__PROXY__.startedEncryptionHandshake; },
              configurable: true
          });
        QSslServer.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslServer.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslServer.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslServer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslServer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSslServer.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      