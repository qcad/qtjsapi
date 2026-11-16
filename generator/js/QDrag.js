
      // auto generated
      //var self;

      // class constructor:
      function QDrag() {
        

        // should be QDrag_BaseJs.call(this, engine):
        //QDrag.prototype = new QDrag_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDrag.getIdStatic()))) {

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
            qWarning("QDrag.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDrag_Wrapper(
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

      

        //copyProperties(this, wrapper, QDrag);
  }

  
  else {
    
        print("QDrag(): wrong number / type of arguments");
      
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

      //QDrag.prototype = new QDrag_BaseJs(engine);
      //QDrag.prototype = new QDrag_Wrapper(engine);
      QDrag.prototype = new Object();


      QDrag.prototype.toString = function() {
          //return "QDrag [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDrag [JS]";
        };
      QDrag.getObjectType = function() {
        return RJSType_QDrag.getIdStatic();
      };

      QDrag.prototype.getObjectType = function() {
        return RJSType_QDrag.getIdStatic();
      };

      QDrag.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDrag.getIdStatic()) {
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
        QDrag.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QDrag.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QDrag.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QDrag.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QDrag.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QDrag.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QDrag.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QDrag.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QDrag.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QDrag.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QDrag.prototype.findChild = function(...args) 
          
        {
          //print("JS: QDrag.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QDrag.prototype.children = function(...args) 
          
        {
          //print("JS: QDrag.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QDrag.prototype.setParent = function(...args) 
          
        {
          //print("JS: QDrag.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QDrag.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QDrag.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QDrag.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QDrag.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QDrag.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QDrag.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QDrag.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QDrag.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QDrag.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QDrag.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QDrag.prototype.property = function(...args) 
          
        {
          //print("JS: QDrag.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QDrag.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QDrag.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QDrag.prototype.parent = function(...args) 
          
        {
          //print("JS: QDrag.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QDrag.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QDrag.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QDrag.prototype.setMimeData = function(...args) 
          
        {
          //print("JS: QDrag.prototype.setMimeData");
          
              return this.__PROXY__.setMimeData(...args);
            
        };
        
        // function 
        QDrag.prototype.mimeData = function(...args) 
          
        {
          //print("JS: QDrag.prototype.mimeData");
          
              return this.__PROXY__.mimeData(...args);
            
        };
        
        // function 
        QDrag.prototype.setPixmap = function(...args) 
          
        {
          //print("JS: QDrag.prototype.setPixmap");
          
              return this.__PROXY__.setPixmap(...args);
            
        };
        
        // function 
        QDrag.prototype.pixmap = function(...args) 
          
        {
          //print("JS: QDrag.prototype.pixmap");
          
              return this.__PROXY__.pixmap(...args);
            
        };
        
        // function 
        QDrag.prototype.setHotSpot = function(...args) 
          
        {
          //print("JS: QDrag.prototype.setHotSpot");
          
              return this.__PROXY__.setHotSpot(...args);
            
        };
        
        // function 
        QDrag.prototype.hotSpot = function(...args) 
          
        {
          //print("JS: QDrag.prototype.hotSpot");
          
              return this.__PROXY__.hotSpot(...args);
            
        };
        
        // function 
        QDrag.prototype.source = function(...args) 
          
        {
          //print("JS: QDrag.prototype.source");
          
              return this.__PROXY__.source(...args);
            
        };
        
        // function 
        QDrag.prototype.target = function(...args) 
          
        {
          //print("JS: QDrag.prototype.target");
          
              return this.__PROXY__.target(...args);
            
        };
        
        // function 
        QDrag.prototype.exec = function(...args) 
          
        {
          //print("JS: QDrag.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QDrag.prototype.setDragCursor = function(...args) 
          
        {
          //print("JS: QDrag.prototype.setDragCursor");
          
              return this.__PROXY__.setDragCursor(...args);
            
        };
        
        // function 
        QDrag.prototype.dragCursor = function(...args) 
          
        {
          //print("JS: QDrag.prototype.dragCursor");
          
              return this.__PROXY__.dragCursor(...args);
            
        };
        
        // function 
        QDrag.prototype.supportedActions = function(...args) 
          
        {
          //print("JS: QDrag.prototype.supportedActions");
          
              return this.__PROXY__.supportedActions(...args);
            
        };
        
        // function 
        QDrag.prototype.defaultAction = function(...args) 
          
        {
          //print("JS: QDrag.prototype.defaultAction");
          
              return this.__PROXY__.defaultAction(...args);
            
        };
        
        // function 
        QDrag.prototype.cancel = function(...args) 
          
        {
          //print("JS: QDrag.prototype.cancel");
          
              return this.__PROXY__.cancel(...args);
            
        };
        

      // static functions:
      

        // static function 
        QDrag.cancel = function() 
          
        {
          //print("JS: QDrag.cancel");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDrag_WrapperSingletonInstance.cancel(
                  
                );
              

        //copyProperties(this, wrapper, QDrag);
  }

  
  else {
    
        print("QDrag.cancel(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QDrag.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QDrag.prototype, 'actionChanged', {
            get: function() { return this.__PROXY__.actionChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDrag.prototype, 'actionChanged(Qt::DropAction)', {
              get: function() { return this.__PROXY__.actionChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDrag.prototype, 'targetChanged', {
            get: function() { return this.__PROXY__.targetChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDrag.prototype, 'targetChanged(QObject*)', {
              get: function() { return this.__PROXY__.targetChanged; },
              configurable: true
          });
        QDrag.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QDrag.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QDrag.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDrag.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDrag.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDrag.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      