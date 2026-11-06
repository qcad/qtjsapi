
      // auto generated
      //var self;

      // class constructor:
      function QGesture() {
        

        // should be QGesture_BaseJs.call(this, engine):
        //QGesture.prototype = new QGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGesture.getIdStatic()))) {

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
            qWarning("QGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGesture_Wrapper(
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

      

        //copyProperties(this, wrapper, QGesture);
  }

  
  else {
    
        print("QGesture(): wrong number / type of arguments");
      
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

      //QGesture.prototype = new QGesture_BaseJs(engine);
      //QGesture.prototype = new QGesture_Wrapper(engine);
      QGesture.prototype = new Object();


      QGesture.prototype.toString = function() {
          //return "QGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGesture [JS]";
        };
      QGesture.getObjectType = function() {
        return RJSType_QGesture.getIdStatic();
      };

      QGesture.prototype.getObjectType = function() {
        return RJSType_QGesture.getIdStatic();
      };

      QGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGesture.getIdStatic()) {
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
        QGesture.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QGesture.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QGesture.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QGesture.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QGesture.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QGesture.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QGesture.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QGesture.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QGesture.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QGesture.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QGesture.prototype.findChild = function(...args) 
          
        {
          //print("JS: QGesture.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QGesture.prototype.children = function(...args) 
          
        {
          //print("JS: QGesture.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QGesture.prototype.setParent = function(...args) 
          
        {
          //print("JS: QGesture.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QGesture.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QGesture.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QGesture.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QGesture.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QGesture.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QGesture.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QGesture.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QGesture.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QGesture.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QGesture.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QGesture.prototype.property = function(...args) 
          
        {
          //print("JS: QGesture.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QGesture.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QGesture.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QGesture.prototype.parent = function(...args) 
          
        {
          //print("JS: QGesture.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QGesture.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QGesture.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QGesture.prototype.setHotSpot = function(...args) 
          
        {
          //print("JS: QGesture.prototype.setHotSpot");
          
              return this.__PROXY__.setHotSpot(...args);
            
        };
    
        // function 
        QGesture.prototype.unsetHotSpot = function(...args) 
          
        {
          //print("JS: QGesture.prototype.unsetHotSpot");
          
              return this.__PROXY__.unsetHotSpot(...args);
            
        };
    
        // function 
        QGesture.prototype.setGestureCancelPolicy = function(...args) 
          
        {
          //print("JS: QGesture.prototype.setGestureCancelPolicy");
          
              return this.__PROXY__.setGestureCancelPolicy(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QGesture.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGesture.prototype, 'state', {
              get: function() {
                  
                      return this.__PROXY__.state;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGesture.prototype, 'gestureType', {
              get: function() {
                  
                      return this.__PROXY__.gestureType;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGesture.prototype, 'gestureCancelPolicy', {
              get: function() {
                  
                      return this.__PROXY__.gestureCancelPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGestureCancelPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGesture.prototype, 'hotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hotSpot;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHotSpot(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGesture.prototype, 'hasHotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hasHotSpot;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        QGesture.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGesture.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGesture.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGesture.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      