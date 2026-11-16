
      // auto generated
      //var self;

      // class constructor:
      function QTcpServer() {
        

        // should be QTcpServer_BaseJs.call(this, engine):
        //QTcpServer.prototype = new QTcpServer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTcpServer.getIdStatic()))) {

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
            qWarning("QTcpServer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTcpServer_Wrapper(
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

      

        //copyProperties(this, wrapper, QTcpServer);
  }

  
  else {
    
        print("QTcpServer(): wrong number / type of arguments");
      
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

      //QTcpServer.prototype = new QTcpServer_BaseJs(engine);
      //QTcpServer.prototype = new QTcpServer_Wrapper(engine);
      QTcpServer.prototype = new Object();


      QTcpServer.prototype.toString = function() {
          //return "QTcpServer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTcpServer [JS]";
        };
      QTcpServer.getObjectType = function() {
        return RJSType_QTcpServer.getIdStatic();
      };

      QTcpServer.prototype.getObjectType = function() {
        return RJSType_QTcpServer.getIdStatic();
      };

      QTcpServer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTcpServer.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QTcpServer.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QTcpServer.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QTcpServer.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QTcpServer.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QTcpServer.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QTcpServer.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QTcpServer.prototype.children = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QTcpServer.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QTcpServer.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QTcpServer.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QTcpServer.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QTcpServer.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QTcpServer.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTcpServer.prototype.property = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTcpServer.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QTcpServer.prototype.parent = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QTcpServer.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QTcpServer.prototype.listen = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.listen");
          
              return this.__PROXY__.listen(...args);
            
        };
        
        // function 
        QTcpServer.prototype.close = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QTcpServer.prototype.isListening = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.isListening");
          
              return this.__PROXY__.isListening(...args);
            
        };
        
        // function 
        QTcpServer.prototype.setMaxPendingConnections = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.setMaxPendingConnections");
          
              return this.__PROXY__.setMaxPendingConnections(...args);
            
        };
        
        // function 
        QTcpServer.prototype.maxPendingConnections = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.maxPendingConnections");
          
              return this.__PROXY__.maxPendingConnections(...args);
            
        };
        
        // function 
        QTcpServer.prototype.setListenBacklogSize = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.setListenBacklogSize");
          
              return this.__PROXY__.setListenBacklogSize(...args);
            
        };
        
        // function 
        QTcpServer.prototype.listenBacklogSize = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.listenBacklogSize");
          
              return this.__PROXY__.listenBacklogSize(...args);
            
        };
        
        // function 
        QTcpServer.prototype.serverPort = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.serverPort");
          
              return this.__PROXY__.serverPort(...args);
            
        };
        
        // function 
        QTcpServer.prototype.serverAddress = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.serverAddress");
          
              return this.__PROXY__.serverAddress(...args);
            
        };
        
        // function 
        QTcpServer.prototype.waitForNewConnection = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.waitForNewConnection");
          
              return this.__PROXY__.waitForNewConnection(...args);
            
        };
        
        // function 
        QTcpServer.prototype.hasPendingConnections = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.hasPendingConnections");
          
              return this.__PROXY__.hasPendingConnections(...args);
            
        };
        
        // function 
        QTcpServer.prototype.nextPendingConnection = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.nextPendingConnection");
          
              return this.__PROXY__.nextPendingConnection(...args);
            
        };
        
        // function 
        QTcpServer.prototype.serverError = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.serverError");
          
              return this.__PROXY__.serverError(...args);
            
        };
        
        // function 
        QTcpServer.prototype.errorString = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
        
        // function 
        QTcpServer.prototype.pauseAccepting = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.pauseAccepting");
          
              return this.__PROXY__.pauseAccepting(...args);
            
        };
        
        // function 
        QTcpServer.prototype.resumeAccepting = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.resumeAccepting");
          
              return this.__PROXY__.resumeAccepting(...args);
            
        };
        
        // function 
        QTcpServer.prototype.setProxy = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.setProxy");
          
              return this.__PROXY__.setProxy(...args);
            
        };
        
        // function 
        QTcpServer.prototype.proxy = function(...args) 
          
        {
          //print("JS: QTcpServer.prototype.proxy");
          
              return this.__PROXY__.proxy(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QTcpServer.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTcpServer.prototype, 'newConnection', {
            get: function() { return this.__PROXY__.newConnection; },
            configurable: true
        });
        
        Object.defineProperty(QTcpServer.prototype, 'acceptError', {
            get: function() { return this.__PROXY__.acceptError; },
            configurable: true
        });
        
          Object.defineProperty(QTcpServer.prototype, 'acceptError(QAbstractSocket::SocketError)', {
              get: function() { return this.__PROXY__.acceptError; },
              configurable: true
          });
        QTcpServer.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTcpServer.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTcpServer.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTcpServer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTcpServer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTcpServer.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      