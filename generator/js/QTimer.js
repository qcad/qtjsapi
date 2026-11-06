
      // auto generated
      //var self;

      // class constructor:
      function QTimer() {
        

        // should be QTimer_BaseJs.call(this, engine):
        //QTimer.prototype = new QTimer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTimer.getIdStatic()))) {

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
            qWarning("QTimer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTimer_Wrapper(
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

      

        //copyProperties(this, wrapper, QTimer);
  }

  
  else {
    
        print("QTimer(): wrong number / type of arguments");
      
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

      //QTimer.prototype = new QTimer_BaseJs(engine);
      //QTimer.prototype = new QTimer_Wrapper(engine);
      QTimer.prototype = new Object();


      QTimer.prototype.toString = function() {
          //return "QTimer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTimer [JS]";
        };
      QTimer.getObjectType = function() {
        return RJSType_QTimer.getIdStatic();
      };

      QTimer.prototype.getObjectType = function() {
        return RJSType_QTimer.getIdStatic();
      };

      QTimer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTimer.getIdStatic()) {
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
        QTimer.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTimer.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QTimer.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTimer.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QTimer.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTimer.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QTimer.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTimer.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QTimer.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTimer.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QTimer.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTimer.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QTimer.prototype.children = function(...args) 
          
        {
          //print("JS: QTimer.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QTimer.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTimer.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QTimer.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTimer.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QTimer.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTimer.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QTimer.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTimer.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QTimer.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTimer.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QTimer.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTimer.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QTimer.prototype.property = function(...args) 
          
        {
          //print("JS: QTimer.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QTimer.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTimer.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QTimer.prototype.parent = function(...args) 
          
        {
          //print("JS: QTimer.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QTimer.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTimer.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QTimer.prototype.isActive = function(...args) 
          
        {
          //print("JS: QTimer.prototype.isActive");
          
              return this.__PROXY__.isActive(...args);
            
        };
    
        // function 
        QTimer.prototype.timerId = function(...args) 
          
        {
          //print("JS: QTimer.prototype.timerId");
          
              return this.__PROXY__.timerId(...args);
            
        };
    
        // function 
        QTimer.prototype.setInterval = function(...args) 
          
        {
          //print("JS: QTimer.prototype.setInterval");
          
              return this.__PROXY__.setInterval(...args);
            
        };
    
        // function 
        QTimer.prototype.setTimerType = function(...args) 
          
        {
          //print("JS: QTimer.prototype.setTimerType");
          
              return this.__PROXY__.setTimerType(...args);
            
        };
    
        // function 
        QTimer.prototype.setSingleShot = function(...args) 
          
        {
          //print("JS: QTimer.prototype.setSingleShot");
          
              return this.__PROXY__.setSingleShot(...args);
            
        };
    
        // function 
        QTimer.prototype.isSingleShot = function(...args) 
          
        {
          //print("JS: QTimer.prototype.isSingleShot");
          
              return this.__PROXY__.isSingleShot(...args);
            
        };
    
        // function 
        QTimer.prototype.start = function(...args) 
          
        {
          //print("JS: QTimer.prototype.start");
          
              return this.__PROXY__.start(...args);
            
        };
    
        // function 
        QTimer.prototype.stop = function(...args) 
          
        {
          //print("JS: QTimer.prototype.stop");
          
              return this.__PROXY__.stop(...args);
            
        };
    
        // function 
        QTimer.prototype.timerEvent = function(...args) 
          
        {
          //print("JS: QTimer.prototype.timerEvent");
          
              return this.__PROXY__.timerEvent(...args);
            
        };
    
        // function 
        QTimer.prototype.startTimer = function(...args) 
          
        {
          //print("JS: QTimer.prototype.startTimer");
          
              return this.__PROXY__.startTimer(...args);
            
        };
    
        // function 
        QTimer.prototype.killTimer = function(...args) 
          
        {
          //print("JS: QTimer.prototype.killTimer");
          
              return this.__PROXY__.killTimer(...args);
            
        };
    
        // function 
        QTimer.prototype.defaultTypeFor = function(...args) 
          
        {
          //print("JS: QTimer.prototype.defaultTypeFor");
          
              return this.__PROXY__.defaultTypeFor(...args);
            
        };
    
        // function 
        QTimer.prototype.singleShotImpl = function(...args) 
          
        {
          //print("JS: QTimer.prototype.singleShotImpl");
          
              return this.__PROXY__.singleShotImpl(...args);
            
        };
    

      // static functions:
      

        // static function 
        QTimer.defaultTypeFor = function() 
          
        {
          //print("JS: QTimer.defaultTypeFor");
          
        };
      

        // static function 
        QTimer.singleShotImpl = function() 
          
        {
          //print("JS: QTimer.singleShotImpl");
          
        };
      
          Object.defineProperty(QTimer.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTimer.prototype, 'interval', {
              get: function() {
                  
                      return this.__PROXY__.interval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTimer.prototype, 'remainingTime', {
              get: function() {
                  
                      return this.__PROXY__.remainingTime;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTimer.prototype, 'timerType', {
              get: function() {
                  
                      return this.__PROXY__.timerType;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTimerType(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTimer.prototype, 'active', {
              get: function() {
                  
                      return this.__PROXY__.isActive();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTimer.prototype, 'singleShot', {
              get: function() {
                  
                      return this.__PROXY__.isSingleShot();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSingleShot(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTimer.prototype, 'timeout', {
            get: function() { return this.__PROXY__.timeout; },
            configurable: true
        });
        QTimer.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTimer.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTimer.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTimer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTimer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTimer.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      