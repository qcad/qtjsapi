
      // auto generated
      //var self;

      // class constructor:
      function QPanGesture() {
        

        // should be QPanGesture_BaseJs.call(this, engine):
        //QPanGesture.prototype = new QPanGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPanGesture.getIdStatic()))) {

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
            qWarning("QPanGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPanGesture_Wrapper(
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

      

        //copyProperties(this, wrapper, QPanGesture);
  }

  
  else {
    
        print("QPanGesture(): wrong number / type of arguments");
      
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

      //QPanGesture.prototype = new QPanGesture_BaseJs(engine);
      //QPanGesture.prototype = new QPanGesture_Wrapper(engine);
      QPanGesture.prototype = new Object();


      QPanGesture.prototype.toString = function() {
          //return "QPanGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPanGesture [JS]";
        };
      QPanGesture.getObjectType = function() {
        return RJSType_QPanGesture.getIdStatic();
      };

      QPanGesture.prototype.getObjectType = function() {
        return RJSType_QPanGesture.getIdStatic();
      };

      QPanGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPanGesture.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGesture.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPanGesture.prototype.setHotSpot = function(...args) 
          
        {
          //print("JS: QPanGesture.prototype.setHotSpot");
          
              return this.__PROXY__.setHotSpot(...args);
            
        };
        
        // function 
        QPanGesture.prototype.unsetHotSpot = function(...args) 
          
        {
          //print("JS: QPanGesture.prototype.unsetHotSpot");
          
              return this.__PROXY__.unsetHotSpot(...args);
            
        };
        
        // function 
        QPanGesture.prototype.setGestureCancelPolicy = function(...args) 
          
        {
          //print("JS: QPanGesture.prototype.setGestureCancelPolicy");
          
              return this.__PROXY__.setGestureCancelPolicy(...args);
            
        };
        
        // function 
        QPanGesture.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QPanGesture.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
        
        // function 
        QPanGesture.prototype.setLastOffset = function(...args) 
          
        {
          //print("JS: QPanGesture.prototype.setLastOffset");
          
              return this.__PROXY__.setLastOffset(...args);
            
        };
        
        // function 
        QPanGesture.prototype.setOffset = function(...args) 
          
        {
          //print("JS: QPanGesture.prototype.setOffset");
          
              return this.__PROXY__.setOffset(...args);
            
        };
        
        // function 
        QPanGesture.prototype.setAcceleration = function(...args) 
          
        {
          //print("JS: QPanGesture.prototype.setAcceleration");
          
              return this.__PROXY__.setAcceleration(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QPanGesture.prototype, 'state', {
              get: function() {
                  
                      return this.__PROXY__.state;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'gestureType', {
              get: function() {
                  
                      return this.__PROXY__.gestureType;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'gestureCancelPolicy', {
              get: function() {
                  
                      return this.__PROXY__.gestureCancelPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGestureCancelPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'hotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hotSpot;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHotSpot(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'hasHotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hasHotSpot;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'lastOffset', {
              get: function() {
                  
                      return this.__PROXY__.lastOffset;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLastOffset(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'offset', {
              get: function() {
                  
                      return this.__PROXY__.offset;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOffset(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'delta', {
              get: function() {
                  
                      return this.__PROXY__.delta;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QPanGesture.prototype, 'acceleration', {
              get: function() {
                  
                      return this.__PROXY__.acceleration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceleration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QPanGesture.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPanGesture.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPanGesture.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPanGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPanGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPanGesture.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      