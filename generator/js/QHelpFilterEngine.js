
      // auto generated
      //var self;

      // class constructor:
      function QHelpFilterEngine() {
        

        // should be QHelpFilterEngine_BaseJs.call(this, engine):
        //QHelpFilterEngine.prototype = new QHelpFilterEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpFilterEngine.getIdStatic()))) {

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
            qWarning("QHelpFilterEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QHelpFilterEngine.js: No constructor found for class QHelpFilterEngine");
            
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

      //QHelpFilterEngine.prototype = new QHelpFilterEngine_BaseJs(engine);
      //QHelpFilterEngine.prototype = new QHelpFilterEngine_Wrapper(engine);
      QHelpFilterEngine.prototype = new Object();


      QHelpFilterEngine.prototype.toString = function() {
          //return "QHelpFilterEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpFilterEngine [JS]";
        };
      QHelpFilterEngine.getObjectType = function() {
        return RJSType_QHelpFilterEngine.getIdStatic();
      };

      QHelpFilterEngine.prototype.getObjectType = function() {
        return RJSType_QHelpFilterEngine.getIdStatic();
      };

      QHelpFilterEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpFilterEngine.getIdStatic()) {
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
        QHelpFilterEngine.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.filters = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.filters");
          
              return this.__PROXY__.filters(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.activeFilter = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.activeFilter");
          
              return this.__PROXY__.activeFilter(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.setActiveFilter = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.setActiveFilter");
          
              return this.__PROXY__.setActiveFilter(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.availableComponents = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.availableComponents");
          
              return this.__PROXY__.availableComponents(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.removeFilter = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.removeFilter");
          
              return this.__PROXY__.removeFilter(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.namespacesForFilter = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.namespacesForFilter");
          
              return this.__PROXY__.namespacesForFilter(...args);
            
        };
        
        // function 
        QHelpFilterEngine.prototype.indices = function(...args) 
          
        {
          //print("JS: QHelpFilterEngine.prototype.indices");
          
              return this.__PROXY__.indices(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QHelpFilterEngine.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpFilterEngine.prototype, 'filterActivated', {
            get: function() { return this.__PROXY__.filterActivated; },
            configurable: true
        });
        
          Object.defineProperty(QHelpFilterEngine.prototype, 'filterActivated(QString)', {
              get: function() { return this.__PROXY__.filterActivated; },
              configurable: true
          });
        QHelpFilterEngine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpFilterEngine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpFilterEngine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpFilterEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpFilterEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpFilterEngine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      