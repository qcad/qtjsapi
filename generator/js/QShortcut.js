
      // auto generated
      //var self;

      // class constructor:
      function QShortcut() {
        

        // should be QShortcut_BaseJs.call(this, engine):
        //QShortcut.prototype = new QShortcut_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QShortcut.getIdStatic()))) {

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
            qWarning("QShortcut.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QShortcut_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QShortcut);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QShortcut_Wrapper(
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

      

        //copyProperties(this, wrapper, QShortcut);
  }

  
  else {
    
        print("QShortcut(): wrong number / type of arguments");
      
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

      //QShortcut.prototype = new QShortcut_BaseJs(engine);
      //QShortcut.prototype = new QShortcut_Wrapper(engine);
      QShortcut.prototype = new Object();


      QShortcut.prototype.toString = function() {
          //return "QShortcut [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QShortcut [JS]";
        };
      QShortcut.getObjectType = function() {
        return RJSType_QShortcut.getIdStatic();
      };

      QShortcut.prototype.getObjectType = function() {
        return RJSType_QShortcut.getIdStatic();
      };

      QShortcut.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QShortcut.getIdStatic()) {
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
        QShortcut.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        QShortcut.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        QShortcut.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QShortcut.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QShortcut.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QShortcut.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QShortcut.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QShortcut.prototype.findChild = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QShortcut.prototype.children = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QShortcut.prototype.setParent = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QShortcut.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QShortcut.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QShortcut.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QShortcut.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QShortcut.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QShortcut.prototype.property = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QShortcut.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QShortcut.prototype.parent = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QShortcut.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QShortcut.prototype.setKey = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setKey");
          
              return this.__PROXY__.setKey(...args);
            
        };
        
        // function 
        QShortcut.prototype.setKeys = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setKeys");
          
              return this.__PROXY__.setKeys(...args);
            
        };
        
        // function 
        QShortcut.prototype.keys = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.keys");
          
              return this.__PROXY__.keys(...args);
            
        };
        
        // function 
        QShortcut.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QShortcut.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QShortcut.prototype.setContext = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setContext");
          
              return this.__PROXY__.setContext(...args);
            
        };
        
        // function 
        QShortcut.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
        
        // function 
        QShortcut.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QShortcut.prototype.whatsThis = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.whatsThis");
          
              return this.__PROXY__.whatsThis(...args);
            
        };
        
        // function 
        QShortcut.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QShortcut.prototype.event = function(...args) 
          
        {
          //print("JS: QShortcut.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
        QShortcut.prototype.event.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QShortcut.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QShortcut.prototype, 'key', {
              get: function() {
                  
                      return this.__PROXY__.key;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setKey(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QShortcut.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QShortcut.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QShortcut.prototype, 'context', {
              get: function() {
                  
                      return this.__PROXY__.context;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContext(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QShortcut.prototype, 'activated', {
            get: function() { return this.__PROXY__.activated; },
            configurable: true
        });
        
        Object.defineProperty(QShortcut.prototype, 'activatedAmbiguously', {
            get: function() { return this.__PROXY__.activatedAmbiguously; },
            configurable: true
        });
        QShortcut.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QShortcut.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QShortcut.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QShortcut.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QShortcut.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QShortcut.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      