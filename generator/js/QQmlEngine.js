
      // auto generated
      //var self;

      // class constructor:
      function QQmlEngine() {
        

        // should be QQmlEngine_BaseJs.call(this, engine):
        //QQmlEngine.prototype = new QQmlEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQmlEngine.getIdStatic()))) {

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
            qWarning("QQmlEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QQmlEngine_Wrapper(
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

      

        //copyProperties(this, wrapper, QQmlEngine);
  }

  
  else {
    
        print("QQmlEngine(): wrong number / type of arguments");
      
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

      //QQmlEngine.prototype = new QQmlEngine_BaseJs(engine);
      //QQmlEngine.prototype = new QQmlEngine_Wrapper(engine);
      QQmlEngine.prototype = new Object();


      QQmlEngine.prototype.toString = function() {
          //return "QQmlEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQmlEngine [JS]";
        };
      QQmlEngine.getObjectType = function() {
        return RJSType_QQmlEngine.getIdStatic();
      };

      QQmlEngine.prototype.getObjectType = function() {
        return RJSType_QQmlEngine.getIdStatic();
      };

      QQmlEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQmlEngine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QJSEngine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QQmlEngine.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.findChild = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.children = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.setParent = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.property = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.parent = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.evaluate = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.evaluate");
          
              return this.__PROXY__.evaluate(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.collectGarbage = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.collectGarbage");
          
              return this.__PROXY__.collectGarbage(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.setUiLanguage = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setUiLanguage");
          
              return this.__PROXY__.setUiLanguage(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.rootContext = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.rootContext");
          
              return this.__PROXY__.rootContext(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.clearComponentCache = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.clearComponentCache");
          
              return this.__PROXY__.clearComponentCache(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.trimComponentCache = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.trimComponentCache");
          
              return this.__PROXY__.trimComponentCache(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.clearSingletons = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.clearSingletons");
          
              return this.__PROXY__.clearSingletons(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.importPathList = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.importPathList");
          
              return this.__PROXY__.importPathList(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.setImportPathList = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setImportPathList");
          
              return this.__PROXY__.setImportPathList(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.addImportPath = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.addImportPath");
          
              return this.__PROXY__.addImportPath(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.pluginPathList = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.pluginPathList");
          
              return this.__PROXY__.pluginPathList(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.setPluginPathList = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setPluginPathList");
          
              return this.__PROXY__.setPluginPathList(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.addPluginPath = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.addPluginPath");
          
              return this.__PROXY__.addPluginPath(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.addNamedBundle = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.addNamedBundle");
          
              return this.__PROXY__.addNamedBundle(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.baseUrl = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.baseUrl");
          
              return this.__PROXY__.baseUrl(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.setBaseUrl = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setBaseUrl");
          
              return this.__PROXY__.setBaseUrl(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.outputWarningsToStandardError = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.outputWarningsToStandardError");
          
              return this.__PROXY__.outputWarningsToStandardError(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.setOutputWarningsToStandardError = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.setOutputWarningsToStandardError");
          
              return this.__PROXY__.setOutputWarningsToStandardError(...args);
            
        };
        
        // function 
        QQmlEngine.prototype.retranslate = function(...args) 
          
        {
          //print("JS: QQmlEngine.prototype.retranslate");
          
              return this.__PROXY__.retranslate(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QQmlEngine.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQmlEngine.prototype, 'uiLanguage', {
              get: function() {
                  
                      return this.__PROXY__.uiLanguage;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QQmlEngine.prototype, 'uiLanguageChanged', {
            get: function() { return this.__PROXY__.uiLanguageChanged; },
            configurable: true
        });
        QQmlEngine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QQmlEngine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QQmlEngine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQmlEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQmlEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QQmlEngine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      