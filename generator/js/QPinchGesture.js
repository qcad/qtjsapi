
      // auto generated
      //var self;

      // class constructor:
      function QPinchGesture() {
        

        // should be QPinchGesture_BaseJs.call(this, engine):
        //QPinchGesture.prototype = new QPinchGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPinchGesture.getIdStatic()))) {

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
            qWarning("QPinchGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPinchGesture_Wrapper(
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

      

        //copyProperties(this, wrapper, QPinchGesture);
  }

  
  else {
    
        print("QPinchGesture(): wrong number / type of arguments");
      
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

      //QPinchGesture.prototype = new QPinchGesture_BaseJs(engine);
      //QPinchGesture.prototype = new QPinchGesture_Wrapper(engine);
      QPinchGesture.prototype = new Object();


      QPinchGesture.prototype.toString = function() {
          //return "QPinchGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPinchGesture [JS]";
        };
      QPinchGesture.getObjectType = function() {
        return RJSType_QPinchGesture.getIdStatic();
      };

      QPinchGesture.prototype.getObjectType = function() {
        return RJSType_QPinchGesture.getIdStatic();
      };

      QPinchGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPinchGesture.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGesture.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QPinchGesture.ScaleFactorChanged = QPinchGesture_Wrapper.ScaleFactorChanged;
QPinchGesture.RotationAngleChanged = QPinchGesture_Wrapper.RotationAngleChanged;
QPinchGesture.CenterPointChanged = QPinchGesture_Wrapper.CenterPointChanged;


      // functions:
      
        // function 
        QPinchGesture.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.findChild = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.children = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setParent = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.property = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.parent = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setHotSpot = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setHotSpot");
          
              return this.__PROXY__.setHotSpot(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.unsetHotSpot = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.unsetHotSpot");
          
              return this.__PROXY__.unsetHotSpot(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setGestureCancelPolicy = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setGestureCancelPolicy");
          
              return this.__PROXY__.setGestureCancelPolicy(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setTotalChangeFlags = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setTotalChangeFlags");
          
              return this.__PROXY__.setTotalChangeFlags(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setChangeFlags = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setChangeFlags");
          
              return this.__PROXY__.setChangeFlags(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setStartCenterPoint = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setStartCenterPoint");
          
              return this.__PROXY__.setStartCenterPoint(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setLastCenterPoint = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setLastCenterPoint");
          
              return this.__PROXY__.setLastCenterPoint(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setCenterPoint = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setCenterPoint");
          
              return this.__PROXY__.setCenterPoint(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setTotalScaleFactor = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setTotalScaleFactor");
          
              return this.__PROXY__.setTotalScaleFactor(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setLastScaleFactor = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setLastScaleFactor");
          
              return this.__PROXY__.setLastScaleFactor(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setScaleFactor = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setScaleFactor");
          
              return this.__PROXY__.setScaleFactor(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setTotalRotationAngle = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setTotalRotationAngle");
          
              return this.__PROXY__.setTotalRotationAngle(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setLastRotationAngle = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setLastRotationAngle");
          
              return this.__PROXY__.setLastRotationAngle(...args);
            
        };
    
        // function 
        QPinchGesture.prototype.setRotationAngle = function(...args) 
          
        {
          //print("JS: QPinchGesture.prototype.setRotationAngle");
          
              return this.__PROXY__.setRotationAngle(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QPinchGesture.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'state', {
              get: function() {
                  
                      return this.__PROXY__.state;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'gestureType', {
              get: function() {
                  
                      return this.__PROXY__.gestureType;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'gestureCancelPolicy', {
              get: function() {
                  
                      return this.__PROXY__.gestureCancelPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGestureCancelPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'hotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hotSpot;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHotSpot(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'hasHotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hasHotSpot;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'totalChangeFlags', {
              get: function() {
                  
                      return this.__PROXY__.totalChangeFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTotalChangeFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'changeFlags', {
              get: function() {
                  
                      return this.__PROXY__.changeFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChangeFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'totalScaleFactor', {
              get: function() {
                  
                      return this.__PROXY__.totalScaleFactor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTotalScaleFactor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'lastScaleFactor', {
              get: function() {
                  
                      return this.__PROXY__.lastScaleFactor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLastScaleFactor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'scaleFactor', {
              get: function() {
                  
                      return this.__PROXY__.scaleFactor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setScaleFactor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'totalRotationAngle', {
              get: function() {
                  
                      return this.__PROXY__.totalRotationAngle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTotalRotationAngle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'lastRotationAngle', {
              get: function() {
                  
                      return this.__PROXY__.lastRotationAngle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLastRotationAngle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'rotationAngle', {
              get: function() {
                  
                      return this.__PROXY__.rotationAngle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setRotationAngle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'startCenterPoint', {
              get: function() {
                  
                      return this.__PROXY__.startCenterPoint;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStartCenterPoint(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'lastCenterPoint', {
              get: function() {
                  
                      return this.__PROXY__.lastCenterPoint;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLastCenterPoint(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPinchGesture.prototype, 'centerPoint', {
              get: function() {
                  
                      return this.__PROXY__.centerPoint;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCenterPoint(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QPinchGesture.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPinchGesture.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPinchGesture.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPinchGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPinchGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPinchGesture.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      