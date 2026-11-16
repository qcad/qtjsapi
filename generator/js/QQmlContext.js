
      // auto generated
      //var self;

      // class constructor:
      function QQmlContext() {
        

        // should be QQmlContext_BaseJs.call(this, engine):
        //QQmlContext.prototype = new QQmlContext_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQmlContext.getIdStatic()))) {

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
            qWarning("QQmlContext.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QQmlContext.js: No constructor found for class QQmlContext");
            
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

      //QQmlContext.prototype = new QQmlContext_BaseJs(engine);
      //QQmlContext.prototype = new QQmlContext_Wrapper(engine);
      QQmlContext.prototype = new Object();


      QQmlContext.prototype.toString = function() {
          //return "QQmlContext [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQmlContext [JS]";
        };
      QQmlContext.getObjectType = function() {
        return RJSType_QQmlContext.getIdStatic();
      };

      QQmlContext.prototype.getObjectType = function() {
        return RJSType_QQmlContext.getIdStatic();
      };

      QQmlContext.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQmlContext.getIdStatic()) {
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
        QQmlContext.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QQmlContext.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QQmlContext.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QQmlContext.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QQmlContext.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QQmlContext.prototype.findChild = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QQmlContext.prototype.children = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QQmlContext.prototype.setParent = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QQmlContext.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QQmlContext.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QQmlContext.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QQmlContext.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QQmlContext.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QQmlContext.prototype.property = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QQmlContext.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QQmlContext.prototype.parent = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QQmlContext.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QQmlContext.prototype.isValid = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QQmlContext.prototype.engine = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.engine");
          
              return this.__PROXY__.engine(...args);
            
        };
        
        // function 
        QQmlContext.prototype.parentContext = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.parentContext");
          
              return this.__PROXY__.parentContext(...args);
            
        };
        
        // function 
        QQmlContext.prototype.contextObject = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.contextObject");
          
              return this.__PROXY__.contextObject(...args);
            
        };
        
        // function 
        QQmlContext.prototype.setContextObject = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.setContextObject");
          
              return this.__PROXY__.setContextObject(...args);
            
        };
        
        // function 
        QQmlContext.prototype.contextProperty = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.contextProperty");
          
              return this.__PROXY__.contextProperty(...args);
            
        };
        
        // function 
        QQmlContext.prototype.setContextProperty = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.setContextProperty");
          
              return this.__PROXY__.setContextProperty(...args);
            
        };
        
        // function 
        QQmlContext.prototype.nameForObject = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.nameForObject");
          
              return this.__PROXY__.nameForObject(...args);
            
        };
        
        // function 
        QQmlContext.prototype.objectForName = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.objectForName");
          
              return this.__PROXY__.objectForName(...args);
            
        };
        
        // function 
        QQmlContext.prototype.resolvedUrl = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.resolvedUrl");
          
              return this.__PROXY__.resolvedUrl(...args);
            
        };
        
        // function 
        QQmlContext.prototype.setBaseUrl = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.setBaseUrl");
          
              return this.__PROXY__.setBaseUrl(...args);
            
        };
        
        // function 
        QQmlContext.prototype.baseUrl = function(...args) 
          
        {
          //print("JS: QQmlContext.prototype.baseUrl");
          
              return this.__PROXY__.baseUrl(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QQmlContext.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QQmlContext.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QQmlContext.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QQmlContext.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQmlContext.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQmlContext.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QQmlContext.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      