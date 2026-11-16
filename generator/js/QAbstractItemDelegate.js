
      // auto generated
      //var self;

      // class constructor:
      function QAbstractItemDelegate() {
        

        // should be QAbstractItemDelegate_BaseJs.call(this, engine):
        //QAbstractItemDelegate.prototype = new QAbstractItemDelegate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractItemDelegate.getIdStatic()))) {

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
            qWarning("QAbstractItemDelegate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractItemDelegate.js: No constructor found for class QAbstractItemDelegate");
            
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

      //QAbstractItemDelegate.prototype = new QAbstractItemDelegate_BaseJs(engine);
      //QAbstractItemDelegate.prototype = new QAbstractItemDelegate_Wrapper(engine);
      QAbstractItemDelegate.prototype = new Object();


      QAbstractItemDelegate.prototype.toString = function() {
          //return "QAbstractItemDelegate [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractItemDelegate [JS]";
        };
      QAbstractItemDelegate.getObjectType = function() {
        return RJSType_QAbstractItemDelegate.getIdStatic();
      };

      QAbstractItemDelegate.prototype.getObjectType = function() {
        return RJSType_QAbstractItemDelegate.getIdStatic();
      };

      QAbstractItemDelegate.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractItemDelegate.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: EndEditHint
QAbstractItemDelegate.NoHint = QAbstractItemDelegate_Wrapper.NoHint;
QAbstractItemDelegate.EditNextItem = QAbstractItemDelegate_Wrapper.EditNextItem;
QAbstractItemDelegate.EditPreviousItem = QAbstractItemDelegate_Wrapper.EditPreviousItem;
QAbstractItemDelegate.SubmitModelCache = QAbstractItemDelegate_Wrapper.SubmitModelCache;
QAbstractItemDelegate.RevertModelCache = QAbstractItemDelegate_Wrapper.RevertModelCache;


      // functions:
      
        // function 
        QAbstractItemDelegate.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.destroyEditor = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.destroyEditor");
          
              return this.__PROXY__.destroyEditor(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.setEditorData = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.setEditorData");
          
              return this.__PROXY__.setEditorData(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.setModelData = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.setModelData");
          
              return this.__PROXY__.setModelData(...args);
            
        };
        
        // function 
        QAbstractItemDelegate.prototype.paintingRoles = function(...args) 
          
        {
          //print("JS: QAbstractItemDelegate.prototype.paintingRoles");
          
              return this.__PROXY__.paintingRoles(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QAbstractItemDelegate.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemDelegate.prototype, 'commitData', {
            get: function() { return this.__PROXY__.commitData; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemDelegate.prototype, 'commitData(QWidget*)', {
              get: function() { return this.__PROXY__.commitData; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemDelegate.prototype, 'closeEditor', {
            get: function() { return this.__PROXY__.closeEditor; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemDelegate.prototype, 'closeEditor(QWidget*,QAbstractItemDelegate::EndEditHint)', {
              get: function() { return this.__PROXY__.closeEditor; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractItemDelegate.prototype, 'sizeHintChanged', {
            get: function() { return this.__PROXY__.sizeHintChanged; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractItemDelegate.prototype, 'sizeHintChanged(QModelIndex)', {
              get: function() { return this.__PROXY__.sizeHintChanged; },
              configurable: true
          });
        QAbstractItemDelegate.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractItemDelegate.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractItemDelegate.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractItemDelegate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractItemDelegate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractItemDelegate.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      