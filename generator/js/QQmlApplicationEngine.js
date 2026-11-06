
      // auto generated
      //var self;

      // class constructor:
      function QQmlApplicationEngine() {
        

        // should be QQmlApplicationEngine_BaseJs.call(this, engine):
        //QQmlApplicationEngine.prototype = new QQmlApplicationEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQmlApplicationEngine.getIdStatic()))) {

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
            qWarning("QQmlApplicationEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QQmlApplicationEngine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQmlApplicationEngine);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QQmlApplicationEngine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQmlApplicationEngine);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QQmlApplicationEngine_Wrapper(
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

      

        //copyProperties(this, wrapper, QQmlApplicationEngine);
  }

  
  else {
    
        print("QQmlApplicationEngine(): wrong number / type of arguments");
      
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

      //QQmlApplicationEngine.prototype = new QQmlApplicationEngine_BaseJs(engine);
      //QQmlApplicationEngine.prototype = new QQmlApplicationEngine_Wrapper(engine);
      QQmlApplicationEngine.prototype = new Object();


      QQmlApplicationEngine.prototype.toString = function() {
          //return "QQmlApplicationEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQmlApplicationEngine [JS]";
        };
      QQmlApplicationEngine.getObjectType = function() {
        return RJSType_QQmlApplicationEngine.getIdStatic();
      };

      QQmlApplicationEngine.prototype.getObjectType = function() {
        return RJSType_QQmlApplicationEngine.getIdStatic();
      };

      QQmlApplicationEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQmlApplicationEngine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QJSEngine.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QQmlEngine.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QQmlApplicationEngine.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.findChild = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.children = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setParent = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.property = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.parent = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.evaluate = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.evaluate");
          
              return this.__PROXY__.evaluate(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.collectGarbage = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.collectGarbage");
          
              return this.__PROXY__.collectGarbage(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setUiLanguage = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setUiLanguage");
          
              return this.__PROXY__.setUiLanguage(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.rootContext = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.rootContext");
          
              return this.__PROXY__.rootContext(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.clearComponentCache = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.clearComponentCache");
          
              return this.__PROXY__.clearComponentCache(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.trimComponentCache = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.trimComponentCache");
          
              return this.__PROXY__.trimComponentCache(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.clearSingletons = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.clearSingletons");
          
              return this.__PROXY__.clearSingletons(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.importPathList = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.importPathList");
          
              return this.__PROXY__.importPathList(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setImportPathList = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setImportPathList");
          
              return this.__PROXY__.setImportPathList(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.addImportPath = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.addImportPath");
          
              return this.__PROXY__.addImportPath(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.pluginPathList = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.pluginPathList");
          
              return this.__PROXY__.pluginPathList(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setPluginPathList = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setPluginPathList");
          
              return this.__PROXY__.setPluginPathList(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.addPluginPath = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.addPluginPath");
          
              return this.__PROXY__.addPluginPath(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.addNamedBundle = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.addNamedBundle");
          
              return this.__PROXY__.addNamedBundle(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.baseUrl = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.baseUrl");
          
              return this.__PROXY__.baseUrl(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setBaseUrl = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setBaseUrl");
          
              return this.__PROXY__.setBaseUrl(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.outputWarningsToStandardError = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.outputWarningsToStandardError");
          
              return this.__PROXY__.outputWarningsToStandardError(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setOutputWarningsToStandardError = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setOutputWarningsToStandardError");
          
              return this.__PROXY__.setOutputWarningsToStandardError(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.retranslate = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.retranslate");
          
              return this.__PROXY__.retranslate(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.rootObjects = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.rootObjects");
          
              return this.__PROXY__.rootObjects(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.load = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.load");
          
              return this.__PROXY__.load(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setInitialProperties = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setInitialProperties");
          
              return this.__PROXY__.setInitialProperties(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.setExtraFileSelectors = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.setExtraFileSelectors");
          
              return this.__PROXY__.setExtraFileSelectors(...args);
            
        };
    
        // function 
        QQmlApplicationEngine.prototype.loadData = function(...args) 
          
        {
          //print("JS: QQmlApplicationEngine.prototype.loadData");
          
              return this.__PROXY__.loadData(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QQmlApplicationEngine.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQmlApplicationEngine.prototype, 'uiLanguage', {
              get: function() {
                  
                      return this.__PROXY__.uiLanguage;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QQmlApplicationEngine.prototype, 'uiLanguageChanged', {
            get: function() { return this.__PROXY__.uiLanguageChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQmlApplicationEngine.prototype, 'objectCreated', {
            get: function() { return this.__PROXY__.objectCreated; },
            configurable: true
        });
        
          Object.defineProperty(QQmlApplicationEngine.prototype, 'objectCreated(QObject*,QUrl)', {
              get: function() { return this.__PROXY__.objectCreated; },
              configurable: true
          });
        
        Object.defineProperty(QQmlApplicationEngine.prototype, 'objectCreationFailed', {
            get: function() { return this.__PROXY__.objectCreationFailed; },
            configurable: true
        });
        
          Object.defineProperty(QQmlApplicationEngine.prototype, 'objectCreationFailed(QUrl)', {
              get: function() { return this.__PROXY__.objectCreationFailed; },
              configurable: true
          });
        QQmlApplicationEngine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QQmlApplicationEngine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QQmlApplicationEngine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQmlApplicationEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQmlApplicationEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QQmlApplicationEngine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      