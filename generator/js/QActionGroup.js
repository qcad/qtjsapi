
      // auto generated
      //var self;

      // class constructor:
      function QActionGroup() {
        

        // should be QActionGroup_BaseJs.call(this, engine):
        //QActionGroup.prototype = new QActionGroup_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QActionGroup.getIdStatic()))) {

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
            qWarning("QActionGroup.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QActionGroup_Wrapper(
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

      

        //copyProperties(this, wrapper, QActionGroup);
  }

  
  else {
    
        print("QActionGroup(): wrong number / type of arguments");
      
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

      //QActionGroup.prototype = new QActionGroup_BaseJs(engine);
      //QActionGroup.prototype = new QActionGroup_Wrapper(engine);
      QActionGroup.prototype = new Object();


      QActionGroup.prototype.toString = function() {
          //return "QActionGroup [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QActionGroup [JS]";
        };
      QActionGroup.getObjectType = function() {
        return RJSType_QActionGroup.getIdStatic();
      };

      QActionGroup.prototype.getObjectType = function() {
        return RJSType_QActionGroup.getIdStatic();
      };

      QActionGroup.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QActionGroup.getIdStatic()) {
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
        QActionGroup.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QActionGroup.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QActionGroup.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QActionGroup.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QActionGroup.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QActionGroup.prototype.findChild = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QActionGroup.prototype.children = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QActionGroup.prototype.setParent = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QActionGroup.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QActionGroup.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QActionGroup.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QActionGroup.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QActionGroup.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QActionGroup.prototype.property = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QActionGroup.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QActionGroup.prototype.parent = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QActionGroup.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QActionGroup.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
    
        // function 
        QActionGroup.prototype.addAction = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QActionGroup.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QActionGroup.prototype.actions = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QActionGroup.prototype.checkedAction = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.checkedAction");
          
              return this.__PROXY__.checkedAction(...args);
            
        };
    
        // function 
        QActionGroup.prototype.isExclusive = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.isExclusive");
          
              return this.__PROXY__.isExclusive(...args);
            
        };
    
        // function 
        QActionGroup.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QActionGroup.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QActionGroup.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QActionGroup.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QActionGroup.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QActionGroup.prototype.setExclusive = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype.setExclusive");
          
              return this.__PROXY__.setExclusive(...args);
            
        };
    
        // function 
        QActionGroup.prototype._q_actionTriggered = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype._q_actionTriggered");
          
              return this.__PROXY__._q_actionTriggered(...args);
            
        };
    
        // function 
        QActionGroup.prototype._q_actionHovered = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype._q_actionHovered");
          
              return this.__PROXY__._q_actionHovered(...args);
            
        };
    
        // function 
        QActionGroup.prototype._q_actionChanged = function(...args) 
          
        {
          //print("JS: QActionGroup.prototype._q_actionChanged");
          
              return this.__PROXY__._q_actionChanged(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QActionGroup.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QActionGroup.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(QActionGroup.prototype, 'triggered(QAction*)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        
        Object.defineProperty(QActionGroup.prototype, 'hovered', {
            get: function() { return this.__PROXY__.hovered; },
            configurable: true
        });
        
          Object.defineProperty(QActionGroup.prototype, 'hovered(QAction*)', {
              get: function() { return this.__PROXY__.hovered; },
              configurable: true
          });
        QActionGroup.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QActionGroup.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QActionGroup.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QActionGroup.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QActionGroup.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QActionGroup.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      