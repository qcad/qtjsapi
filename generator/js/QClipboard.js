
      // auto generated
      //var self;

      // class constructor:
      function QClipboard() {
        

        // should be QClipboard_BaseJs.call(this, engine):
        //QClipboard.prototype = new QClipboard_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QClipboard.getIdStatic()))) {

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
            qWarning("QClipboard.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QClipboard.js: No constructor found for class QClipboard");
            
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

      //QClipboard.prototype = new QClipboard_BaseJs(engine);
      //QClipboard.prototype = new QClipboard_Wrapper(engine);
      QClipboard.prototype = new Object();


      QClipboard.prototype.toString = function() {
          //return "QClipboard [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QClipboard [JS]";
        };
      QClipboard.getObjectType = function() {
        return RJSType_QClipboard.getIdStatic();
      };

      QClipboard.prototype.getObjectType = function() {
        return RJSType_QClipboard.getIdStatic();
      };

      QClipboard.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QClipboard.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Mode
QClipboard.Clipboard = QClipboard_Wrapper.Clipboard;
QClipboard.Selection = QClipboard_Wrapper.Selection;
QClipboard.FindBuffer = QClipboard_Wrapper.FindBuffer;
QClipboard.LastMode = QClipboard_Wrapper.LastMode;


      // functions:
      
        // function 
        QClipboard.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QClipboard.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QClipboard.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QClipboard.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QClipboard.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QClipboard.prototype.findChild = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QClipboard.prototype.children = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QClipboard.prototype.setParent = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QClipboard.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QClipboard.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QClipboard.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QClipboard.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QClipboard.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QClipboard.prototype.property = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QClipboard.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QClipboard.prototype.parent = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QClipboard.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QClipboard.prototype.clear = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QClipboard.prototype.supportsSelection = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.supportsSelection");
          
              return this.__PROXY__.supportsSelection(...args);
            
        };
    
        // function 
        QClipboard.prototype.supportsFindBuffer = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.supportsFindBuffer");
          
              return this.__PROXY__.supportsFindBuffer(...args);
            
        };
    
        // function 
        QClipboard.prototype.ownsSelection = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.ownsSelection");
          
              return this.__PROXY__.ownsSelection(...args);
            
        };
    
        // function 
        QClipboard.prototype.ownsClipboard = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.ownsClipboard");
          
              return this.__PROXY__.ownsClipboard(...args);
            
        };
    
        // function 
        QClipboard.prototype.ownsFindBuffer = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.ownsFindBuffer");
          
              return this.__PROXY__.ownsFindBuffer(...args);
            
        };
    
        // function 
        QClipboard.prototype.text = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
    
        // function 
        QClipboard.prototype.setText = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QClipboard.prototype.mimeData = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.mimeData");
          
              return this.__PROXY__.mimeData(...args);
            
        };
    
        // function 
        QClipboard.prototype.setMimeData = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.setMimeData");
          
              return this.__PROXY__.setMimeData(...args);
            
        };
    
        // function 
        QClipboard.prototype.image = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.image");
          
              return this.__PROXY__.image(...args);
            
        };
    
        // function 
        QClipboard.prototype.pixmap = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.pixmap");
          
              return this.__PROXY__.pixmap(...args);
            
        };
    
        // function 
        QClipboard.prototype.setImage = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.setImage");
          
              return this.__PROXY__.setImage(...args);
            
        };
    
        // function 
        QClipboard.prototype.setPixmap = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.setPixmap");
          
              return this.__PROXY__.setPixmap(...args);
            
        };
    
        // function 
        QClipboard.prototype.supportsMode = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.supportsMode");
          
              return this.__PROXY__.supportsMode(...args);
            
        };
    
        // function 
        QClipboard.prototype.ownsMode = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.ownsMode");
          
              return this.__PROXY__.ownsMode(...args);
            
        };
    
        // function 
        QClipboard.prototype.emitChanged = function(...args) 
          
        {
          //print("JS: QClipboard.prototype.emitChanged");
          
              return this.__PROXY__.emitChanged(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QClipboard.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QClipboard.prototype, 'changed', {
            get: function() { return this.__PROXY__.changed; },
            configurable: true
        });
        
          Object.defineProperty(QClipboard.prototype, 'changed(QClipboard::Mode)', {
              get: function() { return this.__PROXY__.changed; },
              configurable: true
          });
        
        Object.defineProperty(QClipboard.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QClipboard.prototype, 'findBufferChanged', {
            get: function() { return this.__PROXY__.findBufferChanged; },
            configurable: true
        });
        
        Object.defineProperty(QClipboard.prototype, 'dataChanged', {
            get: function() { return this.__PROXY__.dataChanged; },
            configurable: true
        });
        QClipboard.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QClipboard.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QClipboard.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QClipboard.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QClipboard.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QClipboard.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      