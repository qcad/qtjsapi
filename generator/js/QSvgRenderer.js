
      // auto generated
      //var self;

      // class constructor:
      function QSvgRenderer() {
        

        // should be QSvgRenderer_BaseJs.call(this, engine):
        //QSvgRenderer.prototype = new QSvgRenderer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSvgRenderer.getIdStatic()))) {

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
            qWarning("QSvgRenderer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSvgRenderer_Wrapper(
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

      

        //copyProperties(this, wrapper, QSvgRenderer);
  }

  
  else {
    
        print("QSvgRenderer(): wrong number / type of arguments");
      
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

      //QSvgRenderer.prototype = new QSvgRenderer_BaseJs(engine);
      //QSvgRenderer.prototype = new QSvgRenderer_Wrapper(engine);
      QSvgRenderer.prototype = new Object();


      QSvgRenderer.prototype.toString = function() {
          //return "QSvgRenderer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSvgRenderer [JS]";
        };
      QSvgRenderer.getObjectType = function() {
        return RJSType_QSvgRenderer.getIdStatic();
      };

      QSvgRenderer.prototype.getObjectType = function() {
        return RJSType_QSvgRenderer.getIdStatic();
      };

      QSvgRenderer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSvgRenderer.getIdStatic()) {
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
        QSvgRenderer.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.findChild = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.children = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.property = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.parent = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.isValid = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.defaultSize = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.defaultSize");
          
              return this.__PROXY__.defaultSize(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.viewBox = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.viewBox");
          
              return this.__PROXY__.viewBox(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.viewBoxF = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.viewBoxF");
          
              return this.__PROXY__.viewBoxF(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.setViewBox = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.setViewBox");
          
              return this.__PROXY__.setViewBox(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.setAspectRatioMode = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.setAspectRatioMode");
          
              return this.__PROXY__.setAspectRatioMode(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.animated = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.animated");
          
              return this.__PROXY__.animated(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.setFramesPerSecond = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.setFramesPerSecond");
          
              return this.__PROXY__.setFramesPerSecond(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.setCurrentFrame = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.setCurrentFrame");
          
              return this.__PROXY__.setCurrentFrame(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.animationDuration = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.animationDuration");
          
              return this.__PROXY__.animationDuration(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.boundsOnElement = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.boundsOnElement");
          
              return this.__PROXY__.boundsOnElement(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.elementExists = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.elementExists");
          
              return this.__PROXY__.elementExists(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.transformForElement = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.transformForElement");
          
              return this.__PROXY__.transformForElement(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.load = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.load");
          
              return this.__PROXY__.load(...args);
            
        };
        
        // function 
        QSvgRenderer.prototype.render = function(...args) 
          
        {
          //print("JS: QSvgRenderer.prototype.render");
          
              return this.__PROXY__.render(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QSvgRenderer.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSvgRenderer.prototype, 'framesPerSecond', {
              get: function() {
                  
                      return this.__PROXY__.framesPerSecond;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFramesPerSecond(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSvgRenderer.prototype, 'currentFrame', {
              get: function() {
                  
                      return this.__PROXY__.currentFrame;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSvgRenderer.prototype, 'aspectRatioMode', {
              get: function() {
                  
                      return this.__PROXY__.aspectRatioMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAspectRatioMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QSvgRenderer.prototype, 'repaintNeeded', {
            get: function() { return this.__PROXY__.repaintNeeded; },
            configurable: true
        });
        QSvgRenderer.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSvgRenderer.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSvgRenderer.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSvgRenderer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSvgRenderer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSvgRenderer.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      