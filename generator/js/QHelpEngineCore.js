
      // auto generated
      //var self;

      // class constructor:
      function QHelpEngineCore() {
        

        // should be QHelpEngineCore_BaseJs.call(this, engine):
        //QHelpEngineCore.prototype = new QHelpEngineCore_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpEngineCore.getIdStatic()))) {

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
            qWarning("QHelpEngineCore.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QHelpEngineCore_Wrapper(
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

      

        //copyProperties(this, wrapper, QHelpEngineCore);
  }

  
  else {
    
        print("QHelpEngineCore(): wrong number / type of arguments");
      
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

      //QHelpEngineCore.prototype = new QHelpEngineCore_BaseJs(engine);
      //QHelpEngineCore.prototype = new QHelpEngineCore_Wrapper(engine);
      QHelpEngineCore.prototype = new Object();


      QHelpEngineCore.prototype.toString = function() {
          //return "QHelpEngineCore [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpEngineCore [JS]";
        };
      QHelpEngineCore.getObjectType = function() {
        return RJSType_QHelpEngineCore.getIdStatic();
      };

      QHelpEngineCore.prototype.getObjectType = function() {
        return RJSType_QHelpEngineCore.getIdStatic();
      };

      QHelpEngineCore.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpEngineCore.getIdStatic()) {
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
        QHelpEngineCore.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.filterEngine = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.filterEngine");
          
              return this.__PROXY__.filterEngine(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setupData = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setupData");
          
              return this.__PROXY__.setupData(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.collectionFile = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.collectionFile");
          
              return this.__PROXY__.collectionFile(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setCollectionFile = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setCollectionFile");
          
              return this.__PROXY__.setCollectionFile(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.copyCollectionFile = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.copyCollectionFile");
          
              return this.__PROXY__.copyCollectionFile(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.namespaceName = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.namespaceName");
          
              return this.__PROXY__.namespaceName(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.registerDocumentation = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.registerDocumentation");
          
              return this.__PROXY__.registerDocumentation(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.unregisterDocumentation = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.unregisterDocumentation");
          
              return this.__PROXY__.unregisterDocumentation(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.documentationFileName = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.documentationFileName");
          
              return this.__PROXY__.documentationFileName(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.registeredDocumentations = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.registeredDocumentations");
          
              return this.__PROXY__.registeredDocumentations(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.fileData = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.fileData");
          
              return this.__PROXY__.fileData(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.customFilters = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.customFilters");
          
              return this.__PROXY__.customFilters(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.removeCustomFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.removeCustomFilter");
          
              return this.__PROXY__.removeCustomFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.addCustomFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.addCustomFilter");
          
              return this.__PROXY__.addCustomFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.filterAttributes = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.filterAttributes");
          
              return this.__PROXY__.filterAttributes(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.currentFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.currentFilter");
          
              return this.__PROXY__.currentFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setCurrentFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setCurrentFilter");
          
              return this.__PROXY__.setCurrentFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.files = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.files");
          
              return this.__PROXY__.files(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.findFile = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.findFile");
          
              return this.__PROXY__.findFile(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.documentsForIdentifier = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.documentsForIdentifier");
          
              return this.__PROXY__.documentsForIdentifier(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.documentsForKeyword = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.documentsForKeyword");
          
              return this.__PROXY__.documentsForKeyword(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.removeCustomValue = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.removeCustomValue");
          
              return this.__PROXY__.removeCustomValue(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.customValue = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.customValue");
          
              return this.__PROXY__.customValue(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setCustomValue = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setCustomValue");
          
              return this.__PROXY__.setCustomValue(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.metaData = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.metaData");
          
              return this.__PROXY__.metaData(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.error = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setAutoSaveFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setAutoSaveFilter");
          
              return this.__PROXY__.setAutoSaveFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.autoSaveFilter = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.autoSaveFilter");
          
              return this.__PROXY__.autoSaveFilter(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.setUsesFilterEngine = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.setUsesFilterEngine");
          
              return this.__PROXY__.setUsesFilterEngine(...args);
            
        };
        
        // function 
        QHelpEngineCore.prototype.usesFilterEngine = function(...args) 
          
        {
          //print("JS: QHelpEngineCore.prototype.usesFilterEngine");
          
              return this.__PROXY__.usesFilterEngine(...args);
            
        };
        

      // static functions:
      

        // static function 
        QHelpEngineCore.namespaceName = function() 
          
        {
          //print("JS: QHelpEngineCore.namespaceName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QHelpEngineCore_WrapperSingletonInstance.namespaceName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QHelpEngineCore);
  }

  
  else {
    
        print("QHelpEngineCore.namespaceName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHelpEngineCore.metaData = function() 
          
        {
          //print("JS: QHelpEngineCore.metaData");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QHelpEngineCore_WrapperSingletonInstance.metaData(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QHelpEngineCore);
  }

  
  else {
    
        print("QHelpEngineCore.metaData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QHelpEngineCore.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpEngineCore.prototype, 'setupStarted', {
            get: function() { return this.__PROXY__.setupStarted; },
            configurable: true
        });
        
        Object.defineProperty(QHelpEngineCore.prototype, 'setupFinished', {
            get: function() { return this.__PROXY__.setupFinished; },
            configurable: true
        });
        
        Object.defineProperty(QHelpEngineCore.prototype, 'warning', {
            get: function() { return this.__PROXY__.warning; },
            configurable: true
        });
        
          Object.defineProperty(QHelpEngineCore.prototype, 'warning(QString)', {
              get: function() { return this.__PROXY__.warning; },
              configurable: true
          });
        
        Object.defineProperty(QHelpEngineCore.prototype, 'currentFilterChanged', {
            get: function() { return this.__PROXY__.currentFilterChanged; },
            configurable: true
        });
        
          Object.defineProperty(QHelpEngineCore.prototype, 'currentFilterChanged(QString)', {
              get: function() { return this.__PROXY__.currentFilterChanged; },
              configurable: true
          });
        
        Object.defineProperty(QHelpEngineCore.prototype, 'readersAboutToBeInvalidated', {
            get: function() { return this.__PROXY__.readersAboutToBeInvalidated; },
            configurable: true
        });
        QHelpEngineCore.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpEngineCore.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpEngineCore.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpEngineCore.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpEngineCore.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpEngineCore.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      