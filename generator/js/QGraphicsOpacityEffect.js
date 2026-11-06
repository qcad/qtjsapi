
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsOpacityEffect() {
        

        // should be QGraphicsOpacityEffect_BaseJs.call(this, engine):
        //QGraphicsOpacityEffect.prototype = new QGraphicsOpacityEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGraphicsOpacityEffect.getIdStatic()))) {

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
            qWarning("QGraphicsOpacityEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGraphicsOpacityEffect_Wrapper(
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

      

        //copyProperties(this, wrapper, QGraphicsOpacityEffect);
  }

  
  else {
    
        print("QGraphicsOpacityEffect(): wrong number / type of arguments");
      
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

      //QGraphicsOpacityEffect.prototype = new QGraphicsOpacityEffect_BaseJs(engine);
      //QGraphicsOpacityEffect.prototype = new QGraphicsOpacityEffect_Wrapper(engine);
      QGraphicsOpacityEffect.prototype = new Object();


      QGraphicsOpacityEffect.prototype.toString = function() {
          //return "QGraphicsOpacityEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsOpacityEffect [JS]";
        };
      QGraphicsOpacityEffect.getObjectType = function() {
        return RJSType_QGraphicsOpacityEffect.getIdStatic();
      };

      QGraphicsOpacityEffect.prototype.getObjectType = function() {
        return RJSType_QGraphicsOpacityEffect.getIdStatic();
      };

      QGraphicsOpacityEffect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGraphicsOpacityEffect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGraphicsEffect.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsOpacityEffect.SourceAttached = QGraphicsOpacityEffect_Wrapper.SourceAttached;
QGraphicsOpacityEffect.SourceDetached = QGraphicsOpacityEffect_Wrapper.SourceDetached;
QGraphicsOpacityEffect.SourceBoundingRectChanged = QGraphicsOpacityEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsOpacityEffect.SourceInvalidated = QGraphicsOpacityEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsOpacityEffect.NoPad = QGraphicsOpacityEffect_Wrapper.NoPad;
QGraphicsOpacityEffect.PadToTransparentBorder = QGraphicsOpacityEffect_Wrapper.PadToTransparentBorder;
QGraphicsOpacityEffect.PadToEffectiveBoundingRect = QGraphicsOpacityEffect_Wrapper.PadToEffectiveBoundingRect;


      // functions:
      
        // function 
        QGraphicsOpacityEffect.prototype.boundingRectFor = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.boundingRectFor");
          
              return this.__PROXY__.boundingRectFor(...args);
            
        };
    
        // function 
        QGraphicsOpacityEffect.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
    
        // function 
        QGraphicsOpacityEffect.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QGraphicsOpacityEffect.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QGraphicsOpacityEffect.prototype.update = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QGraphicsOpacityEffect.prototype.opacity = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.opacity");
          
              return this.__PROXY__.opacity(...args);
            
        };
    
        // function 
        QGraphicsOpacityEffect.prototype.setOpacity = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.setOpacity");
          
              return this.__PROXY__.setOpacity(...args);
            
        };
    
        // function 
        QGraphicsOpacityEffect.prototype.setOpacityMask = function(...args) 
          
        {
          //print("JS: QGraphicsOpacityEffect.prototype.setOpacityMask");
          
              return this.__PROXY__.setOpacityMask(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QGraphicsOpacityEffect.prototype, 'opacityMask', {
              get: function() {
                  
                      return this.__PROXY__.opacityMask;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpacityMask(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QGraphicsOpacityEffect.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGraphicsOpacityEffect.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGraphicsOpacityEffect.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsOpacityEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsOpacityEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGraphicsOpacityEffect.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      