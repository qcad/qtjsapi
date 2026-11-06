
      // auto generated
      //var self;

      // class constructor:
      function QDoubleValidator() {
        

        // should be QDoubleValidator_BaseJs.call(this, engine):
        //QDoubleValidator.prototype = new QDoubleValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDoubleValidator.getIdStatic()))) {

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
            qWarning("QDoubleValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QDoubleValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDoubleValidator);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QDoubleValidator_Wrapper(
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

      

        //copyProperties(this, wrapper, QDoubleValidator);
  }

  
  else {
    
        print("QDoubleValidator(): wrong number / type of arguments");
      
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

      //QDoubleValidator.prototype = new QDoubleValidator_BaseJs(engine);
      //QDoubleValidator.prototype = new QDoubleValidator_Wrapper(engine);
      QDoubleValidator.prototype = new Object();


      QDoubleValidator.prototype.toString = function() {
          //return "QDoubleValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDoubleValidator [JS]";
        };
      QDoubleValidator.getObjectType = function() {
        return RJSType_QDoubleValidator.getIdStatic();
      };

      QDoubleValidator.prototype.getObjectType = function() {
        return RJSType_QDoubleValidator.getIdStatic();
      };

      QDoubleValidator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDoubleValidator.getIdStatic()) {
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
QDoubleValidator.Invalid = QDoubleValidator_Wrapper.Invalid;
QDoubleValidator.Intermediate = QDoubleValidator_Wrapper.Intermediate;
QDoubleValidator.Acceptable = QDoubleValidator_Wrapper.Acceptable;

  // enum: Notation
QDoubleValidator.StandardNotation = QDoubleValidator_Wrapper.StandardNotation;
QDoubleValidator.ScientificNotation = QDoubleValidator_Wrapper.ScientificNotation;


      // functions:
      
        // function 
        QDoubleValidator.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.findChild = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.children = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setParent = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.property = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.parent = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.locale = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.locale");
          
              return this.__PROXY__.locale(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.fixup = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.fixup");
          
              return this.__PROXY__.fixup(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.validate = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.validate");
          
              return this.__PROXY__.validate(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setRange = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setBottom = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setBottom");
          
              return this.__PROXY__.setBottom(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setTop = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setTop");
          
              return this.__PROXY__.setTop(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setDecimals = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setDecimals");
          
              return this.__PROXY__.setDecimals(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.setNotation = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.setNotation");
          
              return this.__PROXY__.setNotation(...args);
            
        };
    
        // function 
        QDoubleValidator.prototype.bottom = function(...args) 
          
        {
          //print("JS: QDoubleValidator.prototype.bottom");
          
              return this.__PROXY__.bottom(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QDoubleValidator.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleValidator.prototype, 'top', {
              get: function() {
                  
                      return this.__PROXY__.top;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTop(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleValidator.prototype, 'decimals', {
              get: function() {
                  
                      return this.__PROXY__.decimals;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDecimals(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDoubleValidator.prototype, 'notation', {
              get: function() {
                  
                      return this.__PROXY__.notation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setNotation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QDoubleValidator.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        
        Object.defineProperty(QDoubleValidator.prototype, 'bottomChanged', {
            get: function() { return this.__PROXY__.bottomChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDoubleValidator.prototype, 'bottomChanged(double)', {
              get: function() { return this.__PROXY__.bottomChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDoubleValidator.prototype, 'topChanged', {
            get: function() { return this.__PROXY__.topChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDoubleValidator.prototype, 'topChanged(double)', {
              get: function() { return this.__PROXY__.topChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDoubleValidator.prototype, 'decimalsChanged', {
            get: function() { return this.__PROXY__.decimalsChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDoubleValidator.prototype, 'decimalsChanged(int)', {
              get: function() { return this.__PROXY__.decimalsChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDoubleValidator.prototype, 'notationChanged', {
            get: function() { return this.__PROXY__.notationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDoubleValidator.prototype, 'notationChanged(QDoubleValidator::Notation)', {
              get: function() { return this.__PROXY__.notationChanged; },
              configurable: true
          });
        QDoubleValidator.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QDoubleValidator.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QDoubleValidator.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDoubleValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDoubleValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDoubleValidator.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      