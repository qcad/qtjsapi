
      // auto generated
      //var self;

      // class constructor:
      function QButtonGroup() {
        

        // should be QButtonGroup_BaseJs.call(this, engine):
        //QButtonGroup.prototype = new QButtonGroup_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QButtonGroup.getIdStatic()))) {

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
            qWarning("QButtonGroup.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QButtonGroup_Wrapper(
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

      

        //copyProperties(this, wrapper, QButtonGroup);
  }

  
  else {
    
        print("QButtonGroup(): wrong number / type of arguments");
      
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

      //QButtonGroup.prototype = new QButtonGroup_BaseJs(engine);
      //QButtonGroup.prototype = new QButtonGroup_Wrapper(engine);
      QButtonGroup.prototype = new Object();


      QButtonGroup.prototype.toString = function() {
          //return "QButtonGroup [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QButtonGroup [JS]";
        };
      QButtonGroup.getObjectType = function() {
        return RJSType_QButtonGroup.getIdStatic();
      };

      QButtonGroup.prototype.getObjectType = function() {
        return RJSType_QButtonGroup.getIdStatic();
      };

      QButtonGroup.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QButtonGroup.getIdStatic()) {
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
        QButtonGroup.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.findChild = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.children = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.setParent = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.property = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.parent = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.setExclusive = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.setExclusive");
          
              return this.__PROXY__.setExclusive(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.exclusive = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.exclusive");
          
              return this.__PROXY__.exclusive(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.addButton = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.addButton");
          
              return this.__PROXY__.addButton(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.removeButton = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.removeButton");
          
              return this.__PROXY__.removeButton(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.buttons = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.buttons");
          
              return this.__PROXY__.buttons(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.checkedButton = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.checkedButton");
          
              return this.__PROXY__.checkedButton(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.button = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.button");
          
              return this.__PROXY__.button(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.setId = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.setId");
          
              return this.__PROXY__.setId(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.id = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.id");
          
              return this.__PROXY__.id(...args);
            
        };
        
        // function 
        QButtonGroup.prototype.checkedId = function(...args) 
          
        {
          //print("JS: QButtonGroup.prototype.checkedId");
          
              return this.__PROXY__.checkedId(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QButtonGroup.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'buttonClicked', {
            get: function() { return this.__PROXY__.buttonClicked; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'buttonClicked(QAbstractButton*)', {
              get: function() { return this.__PROXY__.buttonClicked; },
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'buttonPressed', {
            get: function() { return this.__PROXY__.buttonPressed; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'buttonPressed(QAbstractButton*)', {
              get: function() { return this.__PROXY__.buttonPressed; },
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'buttonReleased', {
            get: function() { return this.__PROXY__.buttonReleased; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'buttonReleased(QAbstractButton*)', {
              get: function() { return this.__PROXY__.buttonReleased; },
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'buttonToggled', {
            get: function() { return this.__PROXY__.buttonToggled; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'buttonToggled(QAbstractButton*,bool)', {
              get: function() { return this.__PROXY__.buttonToggled; },
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'idClicked', {
            get: function() { return this.__PROXY__.idClicked; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'idClicked(int)', {
              get: function() { return this.__PROXY__.idClicked; },
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'idPressed', {
            get: function() { return this.__PROXY__.idPressed; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'idPressed(int)', {
              get: function() { return this.__PROXY__.idPressed; },
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'idReleased', {
            get: function() { return this.__PROXY__.idReleased; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'idReleased(int)', {
              get: function() { return this.__PROXY__.idReleased; },
              configurable: true
          });
        
        Object.defineProperty(QButtonGroup.prototype, 'idToggled', {
            get: function() { return this.__PROXY__.idToggled; },
            configurable: true
        });
        
          Object.defineProperty(QButtonGroup.prototype, 'idToggled(int,bool)', {
              get: function() { return this.__PROXY__.idToggled; },
              configurable: true
          });
        QButtonGroup.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QButtonGroup.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QButtonGroup.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QButtonGroup.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QButtonGroup.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QButtonGroup.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      