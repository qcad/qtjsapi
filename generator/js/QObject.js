
      // auto generated
      //var self;

      // class constructor:
      function QObject() {
        

        // should be QObject_BaseJs.call(this, engine):
        //QObject.prototype = new QObject_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QObject.getIdStatic()))) {

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
            qWarning("QObject.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QObject_Wrapper(
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

      

        //copyProperties(this, wrapper, QObject);
  }

  
  else {
    
        print("QObject(): wrong number / type of arguments");
      
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

      //QObject.prototype = new QObject_BaseJs(engine);
      //QObject.prototype = new QObject_Wrapper(engine);
      QObject.prototype = new Object();


      QObject.prototype.toString = function() {
          //return "QObject [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QObject [JS]";
        };
      QObject.getObjectType = function() {
        return RJSType_QObject.getIdStatic();
      };

      QObject.prototype.getObjectType = function() {
        return RJSType_QObject.getIdStatic();
      };

      QObject.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QObject.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QObject.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QObject.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
    
        // function 
        QObject.prototype.tr = function(...args) 
          
        {
          //print("JS: QObject.prototype.tr");
          
              return this.__PROXY__.tr(...args);
            
        };
    
        // function 
        QObject.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QObject.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QObject.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QObject.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QObject.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QObject.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QObject.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QObject.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QObject.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QObject.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QObject.prototype.findChild = function(...args) 
          
        {
          //print("JS: QObject.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QObject.prototype.children = function(...args) 
          
        {
          //print("JS: QObject.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QObject.prototype.setParent = function(...args) 
          
        {
          //print("JS: QObject.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QObject.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QObject.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QObject.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QObject.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QObject.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QObject.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QObject.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QObject.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QObject.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QObject.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QObject.prototype.property = function(...args) 
          
        {
          //print("JS: QObject.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QObject.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QObject.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QObject.prototype.parent = function(...args) 
          
        {
          //print("JS: QObject.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QObject.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QObject.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    

      // static functions:
      

        // static function 
        QObject.tr = function() 
          
        {
          //print("JS: QObject.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QObject_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QObject);
  }

  
  else {
    
        print("QObject.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QObject.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QObject.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QObject.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QObject.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QObject.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QObject.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QObject.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      