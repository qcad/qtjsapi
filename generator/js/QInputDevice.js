
      // auto generated
      //var self;

      // class constructor:
      function QInputDevice() {
        

        // should be QInputDevice_BaseJs.call(this, engine):
        //QInputDevice.prototype = new QInputDevice_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QInputDevice.getIdStatic()))) {

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
            qWarning("QInputDevice.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QInputDevice_Wrapper(
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

      

        //copyProperties(this, wrapper, QInputDevice);
  }

  
  else {
    
        print("QInputDevice(): wrong number / type of arguments");
      
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

      //QInputDevice.prototype = new QInputDevice_BaseJs(engine);
      //QInputDevice.prototype = new QInputDevice_Wrapper(engine);
      QInputDevice.prototype = new Object();


      QInputDevice.prototype.toString = function() {
          //return "QInputDevice [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QInputDevice [JS]";
        };
      QInputDevice.getObjectType = function() {
        return RJSType_QInputDevice.getIdStatic();
      };

      QInputDevice.prototype.getObjectType = function() {
        return RJSType_QInputDevice.getIdStatic();
      };

      QInputDevice.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QInputDevice.getIdStatic()) {
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
        QInputDevice.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QInputDevice.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QInputDevice.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QInputDevice.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QInputDevice.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QInputDevice.prototype.findChild = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QInputDevice.prototype.children = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QInputDevice.prototype.setParent = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QInputDevice.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QInputDevice.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QInputDevice.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QInputDevice.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QInputDevice.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QInputDevice.prototype.property = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QInputDevice.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QInputDevice.prototype.parent = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QInputDevice.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QInputDevice.prototype.seatNames = function(...args) 
          
        {
          //print("JS: QInputDevice.prototype.seatNames");
          
              return this.__PROXY__.seatNames(...args);
            
        };
        

      // static functions:
      

        // static function 
        QInputDevice.seatNames = function() 
          
        {
          //print("JS: QInputDevice.seatNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QInputDevice_WrapperSingletonInstance.seatNames(
                  
                );
              

        //copyProperties(this, wrapper, QInputDevice);
  }

  
  else {
    
        print("QInputDevice.seatNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QInputDevice.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDevice.prototype, 'name', {
              get: function() {
                  
                      return this.__PROXY__.name;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDevice.prototype, 'systemId', {
              get: function() {
                  
                      return this.__PROXY__.systemId;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDevice.prototype, 'seatName', {
              get: function() {
                  
                      return this.__PROXY__.seatName;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QInputDevice.prototype, 'availableVirtualGeometry', {
              get: function() {
                  
                      return this.__PROXY__.availableVirtualGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QInputDevice.prototype, 'availableVirtualGeometryChanged', {
            get: function() { return this.__PROXY__.availableVirtualGeometryChanged; },
            configurable: true
        });
        
          Object.defineProperty(QInputDevice.prototype, 'availableVirtualGeometryChanged(QRect)', {
              get: function() { return this.__PROXY__.availableVirtualGeometryChanged; },
              configurable: true
          });
        QInputDevice.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QInputDevice.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QInputDevice.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QInputDevice.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QInputDevice.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QInputDevice.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      