
      // auto generated
      //var self;

      // class constructor:
      function QScreen() {
        

        // should be QScreen_BaseJs.call(this, engine):
        //QScreen.prototype = new QScreen_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QScreen.getIdStatic()))) {

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
            qWarning("QScreen.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QScreen.js: No constructor found for class QScreen");
            
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

      //QScreen.prototype = new QScreen_BaseJs(engine);
      //QScreen.prototype = new QScreen_Wrapper(engine);
      QScreen.prototype = new Object();


      QScreen.prototype.toString = function() {
          //return "QScreen [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QScreen [JS]";
        };
      QScreen.getObjectType = function() {
        return RJSType_QScreen.getIdStatic();
      };

      QScreen.prototype.getObjectType = function() {
        return RJSType_QScreen.getIdStatic();
      };

      QScreen.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QScreen.getIdStatic()) {
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
        QScreen.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QScreen.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QScreen.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QScreen.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QScreen.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QScreen.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QScreen.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QScreen.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QScreen.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QScreen.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QScreen.prototype.findChild = function(...args) 
          
        {
          //print("JS: QScreen.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QScreen.prototype.children = function(...args) 
          
        {
          //print("JS: QScreen.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QScreen.prototype.setParent = function(...args) 
          
        {
          //print("JS: QScreen.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QScreen.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QScreen.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QScreen.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QScreen.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QScreen.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QScreen.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QScreen.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QScreen.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QScreen.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QScreen.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QScreen.prototype.property = function(...args) 
          
        {
          //print("JS: QScreen.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QScreen.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QScreen.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QScreen.prototype.parent = function(...args) 
          
        {
          //print("JS: QScreen.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QScreen.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QScreen.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QScreen.prototype.name = function(...args) 
          
        {
          //print("JS: QScreen.prototype.name");
          
              return this.__PROXY__.name(...args);
            
        };
    
        // function 
        QScreen.prototype.manufacturer = function(...args) 
          
        {
          //print("JS: QScreen.prototype.manufacturer");
          
              return this.__PROXY__.manufacturer(...args);
            
        };
    
        // function 
        QScreen.prototype.model = function(...args) 
          
        {
          //print("JS: QScreen.prototype.model");
          
              return this.__PROXY__.model(...args);
            
        };
    
        // function 
        QScreen.prototype.serialNumber = function(...args) 
          
        {
          //print("JS: QScreen.prototype.serialNumber");
          
              return this.__PROXY__.serialNumber(...args);
            
        };
    
        // function 
        QScreen.prototype.depth = function(...args) 
          
        {
          //print("JS: QScreen.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
    
        // function 
        QScreen.prototype.size = function(...args) 
          
        {
          //print("JS: QScreen.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QScreen.prototype.geometry = function(...args) 
          
        {
          //print("JS: QScreen.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
    
        // function 
        QScreen.prototype.physicalSize = function(...args) 
          
        {
          //print("JS: QScreen.prototype.physicalSize");
          
              return this.__PROXY__.physicalSize(...args);
            
        };
    
        // function 
        QScreen.prototype.physicalDotsPerInchX = function(...args) 
          
        {
          //print("JS: QScreen.prototype.physicalDotsPerInchX");
          
              return this.__PROXY__.physicalDotsPerInchX(...args);
            
        };
    
        // function 
        QScreen.prototype.physicalDotsPerInchY = function(...args) 
          
        {
          //print("JS: QScreen.prototype.physicalDotsPerInchY");
          
              return this.__PROXY__.physicalDotsPerInchY(...args);
            
        };
    
        // function 
        QScreen.prototype.physicalDotsPerInch = function(...args) 
          
        {
          //print("JS: QScreen.prototype.physicalDotsPerInch");
          
              return this.__PROXY__.physicalDotsPerInch(...args);
            
        };
    
        // function 
        QScreen.prototype.logicalDotsPerInchX = function(...args) 
          
        {
          //print("JS: QScreen.prototype.logicalDotsPerInchX");
          
              return this.__PROXY__.logicalDotsPerInchX(...args);
            
        };
    
        // function 
        QScreen.prototype.logicalDotsPerInchY = function(...args) 
          
        {
          //print("JS: QScreen.prototype.logicalDotsPerInchY");
          
              return this.__PROXY__.logicalDotsPerInchY(...args);
            
        };
    
        // function 
        QScreen.prototype.logicalDotsPerInch = function(...args) 
          
        {
          //print("JS: QScreen.prototype.logicalDotsPerInch");
          
              return this.__PROXY__.logicalDotsPerInch(...args);
            
        };
    
        // function 
        QScreen.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QScreen.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        QScreen.prototype.availableSize = function(...args) 
          
        {
          //print("JS: QScreen.prototype.availableSize");
          
              return this.__PROXY__.availableSize(...args);
            
        };
    
        // function 
        QScreen.prototype.availableGeometry = function(...args) 
          
        {
          //print("JS: QScreen.prototype.availableGeometry");
          
              return this.__PROXY__.availableGeometry(...args);
            
        };
    
        // function 
        QScreen.prototype.virtualSiblings = function(...args) 
          
        {
          //print("JS: QScreen.prototype.virtualSiblings");
          
              return this.__PROXY__.virtualSiblings(...args);
            
        };
    
        // function 
        QScreen.prototype.virtualSiblingAt = function(...args) 
          
        {
          //print("JS: QScreen.prototype.virtualSiblingAt");
          
              return this.__PROXY__.virtualSiblingAt(...args);
            
        };
    
        // function 
        QScreen.prototype.virtualSize = function(...args) 
          
        {
          //print("JS: QScreen.prototype.virtualSize");
          
              return this.__PROXY__.virtualSize(...args);
            
        };
    
        // function 
        QScreen.prototype.virtualGeometry = function(...args) 
          
        {
          //print("JS: QScreen.prototype.virtualGeometry");
          
              return this.__PROXY__.virtualGeometry(...args);
            
        };
    
        // function 
        QScreen.prototype.availableVirtualSize = function(...args) 
          
        {
          //print("JS: QScreen.prototype.availableVirtualSize");
          
              return this.__PROXY__.availableVirtualSize(...args);
            
        };
    
        // function 
        QScreen.prototype.availableVirtualGeometry = function(...args) 
          
        {
          //print("JS: QScreen.prototype.availableVirtualGeometry");
          
              return this.__PROXY__.availableVirtualGeometry(...args);
            
        };
    
        // function 
        QScreen.prototype.primaryOrientation = function(...args) 
          
        {
          //print("JS: QScreen.prototype.primaryOrientation");
          
              return this.__PROXY__.primaryOrientation(...args);
            
        };
    
        // function 
        QScreen.prototype.orientation = function(...args) 
          
        {
          //print("JS: QScreen.prototype.orientation");
          
              return this.__PROXY__.orientation(...args);
            
        };
    
        // function 
        QScreen.prototype.nativeOrientation = function(...args) 
          
        {
          //print("JS: QScreen.prototype.nativeOrientation");
          
              return this.__PROXY__.nativeOrientation(...args);
            
        };
    
        // function 
        QScreen.prototype.angleBetween = function(...args) 
          
        {
          //print("JS: QScreen.prototype.angleBetween");
          
              return this.__PROXY__.angleBetween(...args);
            
        };
    
        // function 
        QScreen.prototype.transformBetween = function(...args) 
          
        {
          //print("JS: QScreen.prototype.transformBetween");
          
              return this.__PROXY__.transformBetween(...args);
            
        };
    
        // function 
        QScreen.prototype.mapBetween = function(...args) 
          
        {
          //print("JS: QScreen.prototype.mapBetween");
          
              return this.__PROXY__.mapBetween(...args);
            
        };
    
        // function 
        QScreen.prototype.isPortrait = function(...args) 
          
        {
          //print("JS: QScreen.prototype.isPortrait");
          
              return this.__PROXY__.isPortrait(...args);
            
        };
    
        // function 
        QScreen.prototype.isLandscape = function(...args) 
          
        {
          //print("JS: QScreen.prototype.isLandscape");
          
              return this.__PROXY__.isLandscape(...args);
            
        };
    
        // function 
        QScreen.prototype.grabWindow = function(...args) 
          
        {
          //print("JS: QScreen.prototype.grabWindow");
          
              return this.__PROXY__.grabWindow(...args);
            
        };
    
        // function 
        QScreen.prototype.refreshRate = function(...args) 
          
        {
          //print("JS: QScreen.prototype.refreshRate");
          
              return this.__PROXY__.refreshRate(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QScreen.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'geometryChanged', {
            get: function() { return this.__PROXY__.geometryChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'geometryChanged(QRect)', {
              get: function() { return this.__PROXY__.geometryChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'availableGeometryChanged', {
            get: function() { return this.__PROXY__.availableGeometryChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'availableGeometryChanged(QRect)', {
              get: function() { return this.__PROXY__.availableGeometryChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'physicalSizeChanged', {
            get: function() { return this.__PROXY__.physicalSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'physicalSizeChanged(QSizeF)', {
              get: function() { return this.__PROXY__.physicalSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'physicalDotsPerInchChanged', {
            get: function() { return this.__PROXY__.physicalDotsPerInchChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'physicalDotsPerInchChanged(qreal)', {
              get: function() { return this.__PROXY__.physicalDotsPerInchChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'logicalDotsPerInchChanged', {
            get: function() { return this.__PROXY__.logicalDotsPerInchChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'logicalDotsPerInchChanged(qreal)', {
              get: function() { return this.__PROXY__.logicalDotsPerInchChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'virtualGeometryChanged', {
            get: function() { return this.__PROXY__.virtualGeometryChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'virtualGeometryChanged(QRect)', {
              get: function() { return this.__PROXY__.virtualGeometryChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'primaryOrientationChanged', {
            get: function() { return this.__PROXY__.primaryOrientationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'primaryOrientationChanged(Qt::ScreenOrientation)', {
              get: function() { return this.__PROXY__.primaryOrientationChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'orientationChanged', {
            get: function() { return this.__PROXY__.orientationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'orientationChanged(Qt::ScreenOrientation)', {
              get: function() { return this.__PROXY__.orientationChanged; },
              configurable: true
          });
        
        Object.defineProperty(QScreen.prototype, 'refreshRateChanged', {
            get: function() { return this.__PROXY__.refreshRateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QScreen.prototype, 'refreshRateChanged(qreal)', {
              get: function() { return this.__PROXY__.refreshRateChanged; },
              configurable: true
          });
        QScreen.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QScreen.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QScreen.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QScreen.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QScreen.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QScreen.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      