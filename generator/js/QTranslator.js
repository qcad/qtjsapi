
      // auto generated
      //var self;

      // class constructor:
      function QTranslator() {
        

        // should be QTranslator_BaseJs.call(this, engine):
        //QTranslator.prototype = new QTranslator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTranslator.getIdStatic()))) {

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
            qWarning("QTranslator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTranslator_Wrapper(
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

      

        //copyProperties(this, wrapper, QTranslator);
  }

  
  else {
    
        print("QTranslator(): wrong number / type of arguments");
      
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

      //QTranslator.prototype = new QTranslator_BaseJs(engine);
      //QTranslator.prototype = new QTranslator_Wrapper(engine);
      QTranslator.prototype = new Object();


      QTranslator.prototype.toString = function() {
          //return "QTranslator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTranslator [JS]";
        };
      QTranslator.getObjectType = function() {
        return RJSType_QTranslator.getIdStatic();
      };

      QTranslator.prototype.getObjectType = function() {
        return RJSType_QTranslator.getIdStatic();
      };

      QTranslator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTranslator.getIdStatic()) {
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
        QTranslator.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QTranslator.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QTranslator.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QTranslator.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QTranslator.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QTranslator.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QTranslator.prototype.children = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QTranslator.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QTranslator.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QTranslator.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QTranslator.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QTranslator.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QTranslator.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QTranslator.prototype.property = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QTranslator.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QTranslator.prototype.parent = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QTranslator.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QTranslator.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QTranslator.prototype.language = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.language");
          
              return this.__PROXY__.language(...args);
            
        };
    
        // function 
        QTranslator.prototype.filePath = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.filePath");
          
              return this.__PROXY__.filePath(...args);
            
        };
    
        // function 
        QTranslator.prototype.load = function(...args) 
          
        {
          //print("JS: QTranslator.prototype.load");
          
              return this.__PROXY__.load(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QTranslator.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QTranslator.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTranslator.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTranslator.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTranslator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTranslator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTranslator.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      