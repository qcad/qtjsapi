
      // auto generated
      //var self;

      // class constructor:
      function QIntValidator() {
        

        // should be QIntValidator_BaseJs.call(this, engine):
        //QIntValidator.prototype = new QIntValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QIntValidator.getIdStatic()))) {

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
            qWarning("QIntValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QIntValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QIntValidator);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QIntValidator_Wrapper(
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

      

        //copyProperties(this, wrapper, QIntValidator);
  }

  
  else {
    
        print("QIntValidator(): wrong number / type of arguments");
      
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

      //QIntValidator.prototype = new QIntValidator_BaseJs(engine);
      //QIntValidator.prototype = new QIntValidator_Wrapper(engine);
      QIntValidator.prototype = new Object();


      QIntValidator.prototype.toString = function() {
          //return "QIntValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QIntValidator [JS]";
        };
      QIntValidator.getObjectType = function() {
        return RJSType_QIntValidator.getIdStatic();
      };

      QIntValidator.prototype.getObjectType = function() {
        return RJSType_QIntValidator.getIdStatic();
      };

      QIntValidator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QIntValidator.getIdStatic()) {
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
QIntValidator.Invalid = QIntValidator_Wrapper.Invalid;
QIntValidator.Intermediate = QIntValidator_Wrapper.Intermediate;
QIntValidator.Acceptable = QIntValidator_Wrapper.Acceptable;


      // functions:
      
        // function 
        QIntValidator.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QIntValidator.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QIntValidator.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QIntValidator.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QIntValidator.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QIntValidator.prototype.findChild = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QIntValidator.prototype.children = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QIntValidator.prototype.setParent = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QIntValidator.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QIntValidator.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QIntValidator.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QIntValidator.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QIntValidator.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QIntValidator.prototype.property = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QIntValidator.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QIntValidator.prototype.parent = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QIntValidator.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QIntValidator.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QIntValidator.prototype.locale = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.locale");
          
              return this.__PROXY__.locale(...args);
            
        };
        
        // function 
        QIntValidator.prototype.validate = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.validate");
          
              return this.__PROXY__.validate(...args);
            
        };
        
        // function 
        QIntValidator.prototype.fixup = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.fixup");
          
              return this.__PROXY__.fixup(...args);
            
        };
        
        // function 
        QIntValidator.prototype.setBottom = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.setBottom");
          
              return this.__PROXY__.setBottom(...args);
            
        };
        
        // function 
        QIntValidator.prototype.setTop = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.setTop");
          
              return this.__PROXY__.setTop(...args);
            
        };
        
        // function 
        QIntValidator.prototype.setRange = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
        
        // function 
        QIntValidator.prototype.bottom = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.bottom");
          
              return this.__PROXY__.bottom(...args);
            
        };
        
        // function 
        QIntValidator.prototype.top = function(...args) 
          
        {
          //print("JS: QIntValidator.prototype.top");
          
              return this.__PROXY__.top(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QIntValidator.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QIntValidator.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        
        Object.defineProperty(QIntValidator.prototype, 'bottomChanged', {
            get: function() { return this.__PROXY__.bottomChanged; },
            configurable: true
        });
        
          Object.defineProperty(QIntValidator.prototype, 'bottomChanged(int)', {
              get: function() { return this.__PROXY__.bottomChanged; },
              configurable: true
          });
        
        Object.defineProperty(QIntValidator.prototype, 'topChanged', {
            get: function() { return this.__PROXY__.topChanged; },
            configurable: true
        });
        
          Object.defineProperty(QIntValidator.prototype, 'topChanged(int)', {
              get: function() { return this.__PROXY__.topChanged; },
              configurable: true
          });
        QIntValidator.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QIntValidator.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QIntValidator.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QIntValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QIntValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QIntValidator.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      