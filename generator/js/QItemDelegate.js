
      // auto generated
      //var self;

      // class constructor:
      function QItemDelegate() {
        

        // should be QItemDelegate_BaseJs.call(this, engine):
        //QItemDelegate.prototype = new QItemDelegate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QItemDelegate.getIdStatic()))) {

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
            qWarning("QItemDelegate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QItemDelegate_Wrapper(
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

      

        //copyProperties(this, wrapper, QItemDelegate);
  }

  
  else {
    
        print("QItemDelegate(): wrong number / type of arguments");
      
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

      //QItemDelegate.prototype = new QItemDelegate_BaseJs(engine);
      //QItemDelegate.prototype = new QItemDelegate_Wrapper(engine);
      QItemDelegate.prototype = new Object();


      QItemDelegate.prototype.toString = function() {
          //return "QItemDelegate [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QItemDelegate [JS]";
        };
      QItemDelegate.getObjectType = function() {
        return RJSType_QItemDelegate.getIdStatic();
      };

      QItemDelegate.prototype.getObjectType = function() {
        return RJSType_QItemDelegate.getIdStatic();
      };

      QItemDelegate.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QItemDelegate.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractItemDelegate.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: EndEditHint
QItemDelegate.NoHint = QItemDelegate_Wrapper.NoHint;
QItemDelegate.EditNextItem = QItemDelegate_Wrapper.EditNextItem;
QItemDelegate.EditPreviousItem = QItemDelegate_Wrapper.EditPreviousItem;
QItemDelegate.SubmitModelCache = QItemDelegate_Wrapper.SubmitModelCache;
QItemDelegate.RevertModelCache = QItemDelegate_Wrapper.RevertModelCache;


      // functions:
      
        // function 
        QItemDelegate.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.findChild = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.children = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.setParent = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.property = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.parent = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.destroyEditor = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.destroyEditor");
          
              return this.__PROXY__.destroyEditor(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.paintingRoles = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.paintingRoles");
          
              return this.__PROXY__.paintingRoles(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.hasClipping = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.hasClipping");
          
              return this.__PROXY__.hasClipping(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.setClipping = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.createEditor = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.createEditor");
          
              return this.__PROXY__.createEditorSuper(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.setEditorData = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.setEditorData");
          
              return this.__PROXY__.setEditorData(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.setModelData = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.setModelData");
          
              return this.__PROXY__.setModelData(...args);
            
        };
    
        // function 
        QItemDelegate.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QItemDelegate.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QItemDelegate.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QItemDelegate.prototype, 'commitData', {
            get: function() { return this.__PROXY__.commitData; },
            configurable: true
        });
        
          Object.defineProperty(QItemDelegate.prototype, 'commitData(QWidget*)', {
              get: function() { return this.__PROXY__.commitData; },
              configurable: true
          });
        
        Object.defineProperty(QItemDelegate.prototype, 'closeEditor', {
            get: function() { return this.__PROXY__.closeEditor; },
            configurable: true
        });
        
          Object.defineProperty(QItemDelegate.prototype, 'closeEditor(QWidget*,QAbstractItemDelegate::EndEditHint)', {
              get: function() { return this.__PROXY__.closeEditor; },
              configurable: true
          });
        
        Object.defineProperty(QItemDelegate.prototype, 'sizeHintChanged', {
            get: function() { return this.__PROXY__.sizeHintChanged; },
            configurable: true
        });
        
          Object.defineProperty(QItemDelegate.prototype, 'sizeHintChanged(QModelIndex)', {
              get: function() { return this.__PROXY__.sizeHintChanged; },
              configurable: true
          });
        QItemDelegate.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QItemDelegate.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QItemDelegate.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QItemDelegate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QItemDelegate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QItemDelegate.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      