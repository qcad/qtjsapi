
      // auto generated
      //var self;

      // class constructor:
      function QJSEngine() {
        

        // should be QJSEngine_BaseJs.call(this, engine):
        //QJSEngine.prototype = new QJSEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QJSEngine.getIdStatic()))) {

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
            qWarning("QJSEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QJSEngine_Wrapper(
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

      

        //copyProperties(this, wrapper, QJSEngine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QJSEngine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QJSEngine);
  }

  
  else {
    
        print("QJSEngine(): wrong number / type of arguments");
      
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

      //QJSEngine.prototype = new QJSEngine_BaseJs(engine);
      //QJSEngine.prototype = new QJSEngine_Wrapper(engine);
      QJSEngine.prototype = new Object();


      QJSEngine.prototype.toString = function() {
          //return "QJSEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QJSEngine [JS]";
        };
      QJSEngine.getObjectType = function() {
        return RJSType_QJSEngine.getIdStatic();
      };

      QJSEngine.prototype.getObjectType = function() {
        return RJSType_QJSEngine.getIdStatic();
      };

      QJSEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QJSEngine.getIdStatic()) {
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
        QJSEngine.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QJSEngine.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QJSEngine.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QJSEngine.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QJSEngine.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QJSEngine.prototype.findChild = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QJSEngine.prototype.children = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QJSEngine.prototype.setParent = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QJSEngine.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QJSEngine.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QJSEngine.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QJSEngine.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QJSEngine.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QJSEngine.prototype.property = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QJSEngine.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QJSEngine.prototype.parent = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QJSEngine.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QJSEngine.prototype.evaluate = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.evaluate");
          
              return this.__PROXY__.evaluate(...args);
            
        };
    
        // function 
        QJSEngine.prototype.collectGarbage = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.collectGarbage");
          
              return this.__PROXY__.collectGarbage(...args);
            
        };
    
        // function 
        QJSEngine.prototype.setUiLanguage = function(...args) 
          
        {
          //print("JS: QJSEngine.prototype.setUiLanguage");
          
              return this.__PROXY__.setUiLanguage(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QJSEngine.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QJSEngine.prototype, 'uiLanguage', {
              get: function() {
                  
                      return this.__PROXY__.uiLanguage;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QJSEngine.prototype, 'uiLanguageChanged', {
            get: function() { return this.__PROXY__.uiLanguageChanged; },
            configurable: true
        });
        QJSEngine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QJSEngine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QJSEngine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QJSEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QJSEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QJSEngine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      