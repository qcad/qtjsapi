
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsBlurEffect() {
        

        // should be QGraphicsBlurEffect_BaseJs.call(this, engine):
        //QGraphicsBlurEffect.prototype = new QGraphicsBlurEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGraphicsBlurEffect.getIdStatic()))) {

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
            qWarning("QGraphicsBlurEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGraphicsBlurEffect_Wrapper(
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

      

        //copyProperties(this, wrapper, QGraphicsBlurEffect);
  }

  
  else {
    
        print("QGraphicsBlurEffect(): wrong number / type of arguments");
      
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

      //QGraphicsBlurEffect.prototype = new QGraphicsBlurEffect_BaseJs(engine);
      //QGraphicsBlurEffect.prototype = new QGraphicsBlurEffect_Wrapper(engine);
      QGraphicsBlurEffect.prototype = new Object();


      QGraphicsBlurEffect.prototype.toString = function() {
          //return "QGraphicsBlurEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsBlurEffect [JS]";
        };
      QGraphicsBlurEffect.getObjectType = function() {
        return RJSType_QGraphicsBlurEffect.getIdStatic();
      };

      QGraphicsBlurEffect.prototype.getObjectType = function() {
        return RJSType_QGraphicsBlurEffect.getIdStatic();
      };

      QGraphicsBlurEffect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGraphicsBlurEffect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGraphicsEffect.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsBlurEffect.SourceAttached = QGraphicsBlurEffect_Wrapper.SourceAttached;
QGraphicsBlurEffect.SourceDetached = QGraphicsBlurEffect_Wrapper.SourceDetached;
QGraphicsBlurEffect.SourceBoundingRectChanged = QGraphicsBlurEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsBlurEffect.SourceInvalidated = QGraphicsBlurEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsBlurEffect.NoPad = QGraphicsBlurEffect_Wrapper.NoPad;
QGraphicsBlurEffect.PadToTransparentBorder = QGraphicsBlurEffect_Wrapper.PadToTransparentBorder;
QGraphicsBlurEffect.PadToEffectiveBoundingRect = QGraphicsBlurEffect_Wrapper.PadToEffectiveBoundingRect;

  // enum: BlurHint
QGraphicsBlurEffect.PerformanceHint = QGraphicsBlurEffect_Wrapper.PerformanceHint;
QGraphicsBlurEffect.QualityHint = QGraphicsBlurEffect_Wrapper.QualityHint;
QGraphicsBlurEffect.AnimationHint = QGraphicsBlurEffect_Wrapper.AnimationHint;


      // functions:
      
        // function 
        QGraphicsBlurEffect.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.findChild = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.children = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.setParent = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.property = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.parent = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.update = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.boundingRectFor = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.boundingRectFor");
          
              return this.__PROXY__.boundingRectFor(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.blurRadius = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.blurRadius");
          
              return this.__PROXY__.blurRadius(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.setBlurRadius = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.setBlurRadius");
          
              return this.__PROXY__.setBlurRadius(...args);
            
        };
    
        // function 
        QGraphicsBlurEffect.prototype.setBlurHints = function(...args) 
          
        {
          //print("JS: QGraphicsBlurEffect.prototype.setBlurHints");
          
              return this.__PROXY__.setBlurHints(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QGraphicsBlurEffect.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGraphicsBlurEffect.prototype, 'blurHints', {
              get: function() {
                  
                      return this.__PROXY__.blurHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBlurHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QGraphicsBlurEffect.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGraphicsBlurEffect.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGraphicsBlurEffect.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsBlurEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsBlurEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGraphicsBlurEffect.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      