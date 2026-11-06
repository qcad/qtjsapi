
      // auto generated
      //var self;

      // class constructor:
      function QEventPoint() {
        

        // should be QEventPoint_BaseJs.call(this, engine):
        //QEventPoint.prototype = new QEventPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QEventPoint.getIdStatic()))) {

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
            qWarning("QEventPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
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

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
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

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
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

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
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

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else {
    
        print("QEventPoint(): wrong number / type of arguments");
      
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

      //QEventPoint.prototype = new QEventPoint_BaseJs(engine);
      //QEventPoint.prototype = new QEventPoint_Wrapper(engine);
      QEventPoint.prototype = new Object();


      QEventPoint.prototype.toString = function() {
          //return "QEventPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QEventPoint [JS]";
        };
      QEventPoint.getObjectType = function() {
        return RJSType_QEventPoint.getIdStatic();
      };

      QEventPoint.prototype.getObjectType = function() {
        return RJSType_QEventPoint.getIdStatic();
      };

      QEventPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QEventPoint.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: State
QEventPoint.Unknown = QEventPoint_Wrapper.Unknown;
QEventPoint.Stationary = QEventPoint_Wrapper.Stationary;
QEventPoint.Pressed = QEventPoint_Wrapper.Pressed;
QEventPoint.Updated = QEventPoint_Wrapper.Updated;
QEventPoint.Released = QEventPoint_Wrapper.Released;


      // functions:
      
        // function 
        QEventPoint.prototype.swap = function(...args) 
          
        {
          //print("JS: QEventPoint.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QEventPoint.prototype.normalizedPosition = function(...args) 
          
        {
          //print("JS: QEventPoint.prototype.normalizedPosition");
          
              return this.__PROXY__.normalizedPosition(...args);
            
        };
        
        // function 
        QEventPoint.prototype.isAccepted = function(...args) 
          
        {
          //print("JS: QEventPoint.prototype.isAccepted");
          
              return this.__PROXY__.isAccepted(...args);
            
        };
        
        // function 
        QEventPoint.prototype.setAccepted = function(...args) 
          
        {
          //print("JS: QEventPoint.prototype.setAccepted");
          
              return this.__PROXY__.setAccepted(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QEventPoint.prototype, 'id', {
              get: function() {
                  
                      return this.__PROXY__.id;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'state', {
              get: function() {
                  
                      return this.__PROXY__.state;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'timestamp', {
              get: function() {
                  
                      return this.__PROXY__.timestamp;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'pressTimestamp', {
              get: function() {
                  
                      return this.__PROXY__.pressTimestamp;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'lastTimestamp', {
              get: function() {
                  
                      return this.__PROXY__.lastTimestamp;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'timeHeld', {
              get: function() {
                  
                      return this.__PROXY__.timeHeld;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'pressure', {
              get: function() {
                  
                      return this.__PROXY__.pressure;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'rotation', {
              get: function() {
                  
                      return this.__PROXY__.rotation;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'ellipseDiameters', {
              get: function() {
                  
                      return this.__PROXY__.ellipseDiameters;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'position', {
              get: function() {
                  
                      return this.__PROXY__.position;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'pressPosition', {
              get: function() {
                  
                      return this.__PROXY__.pressPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'grabPosition', {
              get: function() {
                  
                      return this.__PROXY__.grabPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'lastPosition', {
              get: function() {
                  
                      return this.__PROXY__.lastPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'scenePosition', {
              get: function() {
                  
                      return this.__PROXY__.scenePosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'scenePressPosition', {
              get: function() {
                  
                      return this.__PROXY__.scenePressPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'sceneGrabPosition', {
              get: function() {
                  
                      return this.__PROXY__.sceneGrabPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'sceneLastPosition', {
              get: function() {
                  
                      return this.__PROXY__.sceneLastPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'globalPosition', {
              get: function() {
                  
                      return this.__PROXY__.globalPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'globalPressPosition', {
              get: function() {
                  
                      return this.__PROXY__.globalPressPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'globalGrabPosition', {
              get: function() {
                  
                      return this.__PROXY__.globalGrabPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QEventPoint.prototype, 'globalLastPosition', {
              get: function() {
                  
                      return this.__PROXY__.globalLastPosition;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        QEventPoint.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QEventPoint.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QEventPoint.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QEventPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QEventPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QEventPoint.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      