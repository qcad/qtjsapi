
      // auto generated
      //var self;

      // class constructor:
      function QRegularExpressionValidator() {
        

        // should be QRegularExpressionValidator_BaseJs.call(this, engine):
        //QRegularExpressionValidator.prototype = new QRegularExpressionValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRegularExpressionValidator.getIdStatic()))) {

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
            qWarning("QRegularExpressionValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QRegularExpressionValidator_Wrapper(
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

      

        //copyProperties(this, wrapper, QRegularExpressionValidator);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QRegularExpressionValidator_Wrapper(
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

      

        //copyProperties(this, wrapper, QRegularExpressionValidator);
  }

  
  else {
    
        print("QRegularExpressionValidator(): wrong number / type of arguments");
      
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

      //QRegularExpressionValidator.prototype = new QRegularExpressionValidator_BaseJs(engine);
      //QRegularExpressionValidator.prototype = new QRegularExpressionValidator_Wrapper(engine);
      QRegularExpressionValidator.prototype = new Object();


      QRegularExpressionValidator.prototype.toString = function() {
          //return "QRegularExpressionValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRegularExpressionValidator [JS]";
        };
      QRegularExpressionValidator.getObjectType = function() {
        return RJSType_QRegularExpressionValidator.getIdStatic();
      };

      QRegularExpressionValidator.prototype.getObjectType = function() {
        return RJSType_QRegularExpressionValidator.getIdStatic();
      };

      QRegularExpressionValidator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRegularExpressionValidator.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QValidator.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: State
QRegularExpressionValidator.Invalid = QRegularExpressionValidator_Wrapper.Invalid;
QRegularExpressionValidator.Intermediate = QRegularExpressionValidator_Wrapper.Intermediate;
QRegularExpressionValidator.Acceptable = QRegularExpressionValidator_Wrapper.Acceptable;


      // functions:
      
        // function 
        QRegularExpressionValidator.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.findChild = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.children = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.setParent = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.property = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.parent = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.locale = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.locale");
          
              return this.__PROXY__.locale(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.fixup = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.fixup");
          
              return this.__PROXY__.fixup(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.validate = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.validate");
          
              return this.__PROXY__.validate(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.regularExpression = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.regularExpression");
          
              return this.__PROXY__.regularExpression(...args);
            
        };
        
        // function 
        QRegularExpressionValidator.prototype.setRegularExpression = function(...args) 
          
        {
          //print("JS: QRegularExpressionValidator.prototype.setRegularExpression");
          
              return this.__PROXY__.setRegularExpression(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QRegularExpressionValidator.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QRegularExpressionValidator.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        
        Object.defineProperty(QRegularExpressionValidator.prototype, 'regularExpressionChanged', {
            get: function() { return this.__PROXY__.regularExpressionChanged; },
            configurable: true
        });
        
          Object.defineProperty(QRegularExpressionValidator.prototype, 'regularExpressionChanged(QRegularExpression)', {
              get: function() { return this.__PROXY__.regularExpressionChanged; },
              configurable: true
          });
        QRegularExpressionValidator.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QRegularExpressionValidator.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QRegularExpressionValidator.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRegularExpressionValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRegularExpressionValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QRegularExpressionValidator.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      