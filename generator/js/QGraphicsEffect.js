
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsEffect() {
        

        // should be QGraphicsEffect_BaseJs.call(this, engine):
        //QGraphicsEffect.prototype = new QGraphicsEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGraphicsEffect.getIdStatic()))) {

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
            qWarning("QGraphicsEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QGraphicsEffect.js: No constructor found for class QGraphicsEffect");
            
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

      //QGraphicsEffect.prototype = new QGraphicsEffect_BaseJs(engine);
      //QGraphicsEffect.prototype = new QGraphicsEffect_Wrapper(engine);
      QGraphicsEffect.prototype = new Object();


      QGraphicsEffect.prototype.toString = function() {
          //return "QGraphicsEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsEffect [JS]";
        };
      QGraphicsEffect.getObjectType = function() {
        return RJSType_QGraphicsEffect.getIdStatic();
      };

      QGraphicsEffect.prototype.getObjectType = function() {
        return RJSType_QGraphicsEffect.getIdStatic();
      };

      QGraphicsEffect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGraphicsEffect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsEffect.SourceAttached = QGraphicsEffect_Wrapper.SourceAttached;
QGraphicsEffect.SourceDetached = QGraphicsEffect_Wrapper.SourceDetached;
QGraphicsEffect.SourceBoundingRectChanged = QGraphicsEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsEffect.SourceInvalidated = QGraphicsEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsEffect.NoPad = QGraphicsEffect_Wrapper.NoPad;
QGraphicsEffect.PadToTransparentBorder = QGraphicsEffect_Wrapper.PadToTransparentBorder;
QGraphicsEffect.PadToEffectiveBoundingRect = QGraphicsEffect_Wrapper.PadToEffectiveBoundingRect;


      // functions:
      
        // function 
        QGraphicsEffect.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.findChild = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.children = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.setParent = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.property = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.parent = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.boundingRectFor = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.boundingRectFor");
          
              return this.__PROXY__.boundingRectFor(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QGraphicsEffect.prototype.update = function(...args) 
          
        {
          //print("JS: QGraphicsEffect.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QGraphicsEffect.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QGraphicsEffect.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGraphicsEffect.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGraphicsEffect.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGraphicsEffect.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      