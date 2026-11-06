
      // auto generated
      //var self;

      // class constructor:
      function QUiLoader() {
        

        // should be QUiLoader_BaseJs.call(this, engine):
        //QUiLoader.prototype = new QUiLoader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QUiLoader.getIdStatic()))) {

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
            qWarning("QUiLoader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QUiLoader_Wrapper(
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

      

        //copyProperties(this, wrapper, QUiLoader);
  }

  
  else {
    
        print("QUiLoader(): wrong number / type of arguments");
      
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

      //QUiLoader.prototype = new QUiLoader_BaseJs(engine);
      //QUiLoader.prototype = new QUiLoader_Wrapper(engine);
      QUiLoader.prototype = new Object();


      QUiLoader.prototype.toString = function() {
          //return "QUiLoader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QUiLoader [JS]";
        };
      QUiLoader.getObjectType = function() {
        return RJSType_QUiLoader.getIdStatic();
      };

      QUiLoader.prototype.getObjectType = function() {
        return RJSType_QUiLoader.getIdStatic();
      };

      QUiLoader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QUiLoader.getIdStatic()) {
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
        QUiLoader.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QUiLoader.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QUiLoader.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QUiLoader.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QUiLoader.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QUiLoader.prototype.findChild = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QUiLoader.prototype.children = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QUiLoader.prototype.setParent = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QUiLoader.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QUiLoader.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QUiLoader.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QUiLoader.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QUiLoader.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QUiLoader.prototype.property = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QUiLoader.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QUiLoader.prototype.parent = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QUiLoader.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QUiLoader.prototype.pluginPaths = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.pluginPaths");
          
              return this.__PROXY__.pluginPaths(...args);
            
        };
        
        // function 
        QUiLoader.prototype.clearPluginPaths = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.clearPluginPaths");
          
              return this.__PROXY__.clearPluginPaths(...args);
            
        };
        
        // function 
        QUiLoader.prototype.addPluginPath = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.addPluginPath");
          
              return this.__PROXY__.addPluginPath(...args);
            
        };
        
        // function 
        QUiLoader.prototype.load = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.load");
          
              return this.__PROXY__.load(...args);
            
        };
        
        // function 
        QUiLoader.prototype.availableWidgets = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.availableWidgets");
          
              return this.__PROXY__.availableWidgets(...args);
            
        };
        
        // function 
        QUiLoader.prototype.availableLayouts = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.availableLayouts");
          
              return this.__PROXY__.availableLayouts(...args);
            
        };
        
        // function 
        QUiLoader.prototype.createWidget = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.createWidget");
          
              return this.__PROXY__.createWidget(...args);
            
        };
        
        // function 
        QUiLoader.prototype.createLayout = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.createLayout");
          
              return this.__PROXY__.createLayout(...args);
            
        };
        
        // function 
        QUiLoader.prototype.createActionGroup = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.createActionGroup");
          
              return this.__PROXY__.createActionGroup(...args);
            
        };
        
        // function 
        QUiLoader.prototype.createAction = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.createAction");
          
              return this.__PROXY__.createAction(...args);
            
        };
        
        // function 
        QUiLoader.prototype.setWorkingDirectory = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.setWorkingDirectory");
          
              return this.__PROXY__.setWorkingDirectory(...args);
            
        };
        
        // function 
        QUiLoader.prototype.workingDirectory = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.workingDirectory");
          
              return this.__PROXY__.workingDirectory(...args);
            
        };
        
        // function 
        QUiLoader.prototype.setLanguageChangeEnabled = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.setLanguageChangeEnabled");
          
              return this.__PROXY__.setLanguageChangeEnabled(...args);
            
        };
        
        // function 
        QUiLoader.prototype.isLanguageChangeEnabled = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.isLanguageChangeEnabled");
          
              return this.__PROXY__.isLanguageChangeEnabled(...args);
            
        };
        
        // function 
        QUiLoader.prototype.setTranslationEnabled = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.setTranslationEnabled");
          
              return this.__PROXY__.setTranslationEnabled(...args);
            
        };
        
        // function 
        QUiLoader.prototype.isTranslationEnabled = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.isTranslationEnabled");
          
              return this.__PROXY__.isTranslationEnabled(...args);
            
        };
        
        // function 
        QUiLoader.prototype.errorString = function(...args) 
          
        {
          //print("JS: QUiLoader.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QUiLoader.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QUiLoader.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QUiLoader.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QUiLoader.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QUiLoader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QUiLoader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QUiLoader.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      