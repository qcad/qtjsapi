
      // auto generated
      //var self;

      // class constructor:
      function QValidator() {
        

        // should be QValidator_BaseJs.call(this, engine):
        //QValidator.prototype = new QValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QValidator.getIdStatic()))) {

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
            qWarning("QValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QValidator.js: No constructor found for class QValidator");
            
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

      //QValidator.prototype = new QValidator_BaseJs(engine);
      //QValidator.prototype = new QValidator_Wrapper(engine);
      QValidator.prototype = new Object();


      QValidator.prototype.toString = function() {
          //return "QValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QValidator [JS]";
        };
      QValidator.getObjectType = function() {
        return RJSType_QValidator.getIdStatic();
      };

      QValidator.prototype.getObjectType = function() {
        return RJSType_QValidator.getIdStatic();
      };

      QValidator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QValidator.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: State
QValidator.Invalid = QValidator_Wrapper.Invalid;
QValidator.Intermediate = QValidator_Wrapper.Intermediate;
QValidator.Acceptable = QValidator_Wrapper.Acceptable;


      // functions:
      
        // function 
        QValidator.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QValidator.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QValidator.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QValidator.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QValidator.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QValidator.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QValidator.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QValidator.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QValidator.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QValidator.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QValidator.prototype.findChild = function(...args) 
          
        {
          //print("JS: QValidator.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QValidator.prototype.children = function(...args) 
          
        {
          //print("JS: QValidator.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QValidator.prototype.setParent = function(...args) 
          
        {
          //print("JS: QValidator.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QValidator.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QValidator.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QValidator.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QValidator.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QValidator.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QValidator.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QValidator.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QValidator.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QValidator.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QValidator.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QValidator.prototype.property = function(...args) 
          
        {
          //print("JS: QValidator.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QValidator.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QValidator.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QValidator.prototype.parent = function(...args) 
          
        {
          //print("JS: QValidator.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QValidator.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QValidator.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QValidator.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QValidator.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QValidator.prototype.locale = function(...args) 
          
        {
          //print("JS: QValidator.prototype.locale");
          
              return this.__PROXY__.locale(...args);
            
        };
        
        // function 
        QValidator.prototype.validate = function(...args) 
          
        {
          //print("JS: QValidator.prototype.validate");
          
              return this.__PROXY__.validate(...args);
            
        };
        
        // function 
        QValidator.prototype.fixup = function(...args) 
          
        {
          //print("JS: QValidator.prototype.fixup");
          
              return this.__PROXY__.fixup(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QValidator.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QValidator.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        QValidator.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QValidator.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QValidator.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QValidator.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      