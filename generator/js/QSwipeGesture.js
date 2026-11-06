
      // auto generated
      //var self;

      // class constructor:
      function QSwipeGesture() {
        

        // should be QSwipeGesture_BaseJs.call(this, engine):
        //QSwipeGesture.prototype = new QSwipeGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSwipeGesture.getIdStatic()))) {

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
            qWarning("QSwipeGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSwipeGesture_Wrapper(
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

      

        //copyProperties(this, wrapper, QSwipeGesture);
  }

  
  else {
    
        print("QSwipeGesture(): wrong number / type of arguments");
      
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

      //QSwipeGesture.prototype = new QSwipeGesture_BaseJs(engine);
      //QSwipeGesture.prototype = new QSwipeGesture_Wrapper(engine);
      QSwipeGesture.prototype = new Object();


      QSwipeGesture.prototype.toString = function() {
          //return "QSwipeGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSwipeGesture [JS]";
        };
      QSwipeGesture.getObjectType = function() {
        return RJSType_QSwipeGesture.getIdStatic();
      };

      QSwipeGesture.prototype.getObjectType = function() {
        return RJSType_QSwipeGesture.getIdStatic();
      };

      QSwipeGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSwipeGesture.getIdStatic()) {
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
        QSwipeGesture.prototype.setHotSpot = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.setHotSpot");
          
              return this.__PROXY__.setHotSpot(...args);
            
        };
    
        // function 
        QSwipeGesture.prototype.unsetHotSpot = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.unsetHotSpot");
          
              return this.__PROXY__.unsetHotSpot(...args);
            
        };
    
        // function 
        QSwipeGesture.prototype.setGestureCancelPolicy = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.setGestureCancelPolicy");
          
              return this.__PROXY__.setGestureCancelPolicy(...args);
            
        };
    
        // function 
        QSwipeGesture.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
    
        // function 
        QSwipeGesture.prototype.horizontalDirection = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.horizontalDirection");
          
              return this.__PROXY__.horizontalDirection(...args);
            
        };
    
        // function 
        QSwipeGesture.prototype.verticalDirection = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.verticalDirection");
          
              return this.__PROXY__.verticalDirection(...args);
            
        };
    
        // function 
        QSwipeGesture.prototype.swipeAngle = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.swipeAngle");
          
              return this.__PROXY__.swipeAngle(...args);
            
        };
    
        // function 
        QSwipeGesture.prototype.setSwipeAngle = function(...args) 
          
        {
          //print("JS: QSwipeGesture.prototype.setSwipeAngle");
          
              return this.__PROXY__.setSwipeAngle(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QSwipeGesture.prototype, 'state', {
              get: function() {
                  
                      return this.__PROXY__.state;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSwipeGesture.prototype, 'gestureType', {
              get: function() {
                  
                      return this.__PROXY__.gestureType;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSwipeGesture.prototype, 'gestureCancelPolicy', {
              get: function() {
                  
                      return this.__PROXY__.gestureCancelPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGestureCancelPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSwipeGesture.prototype, 'hotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hotSpot;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHotSpot(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSwipeGesture.prototype, 'hasHotSpot', {
              get: function() {
                  
                      return this.__PROXY__.hasHotSpot;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        QSwipeGesture.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSwipeGesture.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSwipeGesture.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSwipeGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSwipeGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSwipeGesture.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      