
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsDropShadowEffect() {
        

        // should be QGraphicsDropShadowEffect_BaseJs.call(this, engine):
        //QGraphicsDropShadowEffect.prototype = new QGraphicsDropShadowEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGraphicsDropShadowEffect.getIdStatic()))) {

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
            qWarning("QGraphicsDropShadowEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGraphicsDropShadowEffect_Wrapper(
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

      

        //copyProperties(this, wrapper, QGraphicsDropShadowEffect);
  }

  
  else {
    
        print("QGraphicsDropShadowEffect(): wrong number / type of arguments");
      
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

      //QGraphicsDropShadowEffect.prototype = new QGraphicsDropShadowEffect_BaseJs(engine);
      //QGraphicsDropShadowEffect.prototype = new QGraphicsDropShadowEffect_Wrapper(engine);
      QGraphicsDropShadowEffect.prototype = new Object();


      QGraphicsDropShadowEffect.prototype.toString = function() {
          //return "QGraphicsDropShadowEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsDropShadowEffect [JS]";
        };
      QGraphicsDropShadowEffect.getObjectType = function() {
        return RJSType_QGraphicsDropShadowEffect.getIdStatic();
      };

      QGraphicsDropShadowEffect.prototype.getObjectType = function() {
        return RJSType_QGraphicsDropShadowEffect.getIdStatic();
      };

      QGraphicsDropShadowEffect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGraphicsDropShadowEffect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGraphicsEffect.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsDropShadowEffect.SourceAttached = QGraphicsDropShadowEffect_Wrapper.SourceAttached;
QGraphicsDropShadowEffect.SourceDetached = QGraphicsDropShadowEffect_Wrapper.SourceDetached;
QGraphicsDropShadowEffect.SourceBoundingRectChanged = QGraphicsDropShadowEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsDropShadowEffect.SourceInvalidated = QGraphicsDropShadowEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsDropShadowEffect.NoPad = QGraphicsDropShadowEffect_Wrapper.NoPad;
QGraphicsDropShadowEffect.PadToTransparentBorder = QGraphicsDropShadowEffect_Wrapper.PadToTransparentBorder;
QGraphicsDropShadowEffect.PadToEffectiveBoundingRect = QGraphicsDropShadowEffect_Wrapper.PadToEffectiveBoundingRect;


      // functions:
      
        // function 
        QGraphicsDropShadowEffect.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.update = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.boundingRectFor = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.boundingRectFor");
          
              return this.__PROXY__.boundingRectFor(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.offset = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.offset");
          
              return this.__PROXY__.offset(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.setOffset = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.setOffset");
          
              return this.__PROXY__.setOffset(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.setXOffset = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.setXOffset");
          
              return this.__PROXY__.setXOffset(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.setYOffset = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.setYOffset");
          
              return this.__PROXY__.setYOffset(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.setBlurRadius = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.setBlurRadius");
          
              return this.__PROXY__.setBlurRadius(...args);
            
        };
        
        // function 
        QGraphicsDropShadowEffect.prototype.setColor = function(...args) 
          
        {
          //print("JS: QGraphicsDropShadowEffect.prototype.setColor");
          
              return this.__PROXY__.setColor(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QGraphicsDropShadowEffect.prototype, 'xOffset', {
              get: function() {
                  
                      return this.__PROXY__.xOffset;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setXOffset(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGraphicsDropShadowEffect.prototype, 'yOffset', {
              get: function() {
                  
                      return this.__PROXY__.yOffset;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setYOffset(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGraphicsDropShadowEffect.prototype, 'blurRadius', {
              get: function() {
                  
                      return this.__PROXY__.blurRadius;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBlurRadius(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGraphicsDropShadowEffect.prototype, 'color', {
              get: function() {
                  
                      return this.__PROXY__.color;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setColor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QGraphicsDropShadowEffect.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGraphicsDropShadowEffect.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGraphicsDropShadowEffect.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsDropShadowEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsDropShadowEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGraphicsDropShadowEffect.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      