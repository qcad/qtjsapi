
      // auto generated
      //var self;

      // class constructor:
      function QHelpEngine() {
        

        // should be QHelpEngine_BaseJs.call(this, engine):
        //QHelpEngine.prototype = new QHelpEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpEngine.getIdStatic()))) {

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
            qWarning("QHelpEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QHelpEngine_Wrapper(
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

      

        //copyProperties(this, wrapper, QHelpEngine);
  }

  
  else {
    
        print("QHelpEngine(): wrong number / type of arguments");
      
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

      //QHelpEngine.prototype = new QHelpEngine_BaseJs(engine);
      //QHelpEngine.prototype = new QHelpEngine_Wrapper(engine);
      QHelpEngine.prototype = new Object();


      QHelpEngine.prototype.toString = function() {
          //return "QHelpEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpEngine [JS]";
        };
      QHelpEngine.getObjectType = function() {
        return RJSType_QHelpEngine.getIdStatic();
      };

      QHelpEngine.prototype.getObjectType = function() {
        return RJSType_QHelpEngine.getIdStatic();
      };

      QHelpEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpEngine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QHelpEngineCore.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QHelpEngine.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.filterEngine = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.filterEngine");
          
              return this.__PROXY__.filterEngine(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setupData = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setupData");
          
              return this.__PROXY__.setupData(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.collectionFile = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.collectionFile");
          
              return this.__PROXY__.collectionFile(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setCollectionFile = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setCollectionFile");
          
              return this.__PROXY__.setCollectionFile(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.copyCollectionFile = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.copyCollectionFile");
          
              return this.__PROXY__.copyCollectionFile(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.registerDocumentation = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.registerDocumentation");
          
              return this.__PROXY__.registerDocumentation(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.unregisterDocumentation = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.unregisterDocumentation");
          
              return this.__PROXY__.unregisterDocumentation(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.documentationFileName = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.documentationFileName");
          
              return this.__PROXY__.documentationFileName(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.registeredDocumentations = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.registeredDocumentations");
          
              return this.__PROXY__.registeredDocumentations(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.fileData = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.fileData");
          
              return this.__PROXY__.fileData(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.customFilters = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.customFilters");
          
              return this.__PROXY__.customFilters(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.removeCustomFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.removeCustomFilter");
          
              return this.__PROXY__.removeCustomFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.addCustomFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.addCustomFilter");
          
              return this.__PROXY__.addCustomFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.filterAttributes = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.filterAttributes");
          
              return this.__PROXY__.filterAttributes(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.currentFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.currentFilter");
          
              return this.__PROXY__.currentFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setCurrentFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setCurrentFilter");
          
              return this.__PROXY__.setCurrentFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.files = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.files");
          
              return this.__PROXY__.files(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.findFile = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.findFile");
          
              return this.__PROXY__.findFile(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.documentsForIdentifier = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.documentsForIdentifier");
          
              return this.__PROXY__.documentsForIdentifier(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.documentsForKeyword = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.documentsForKeyword");
          
              return this.__PROXY__.documentsForKeyword(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.removeCustomValue = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.removeCustomValue");
          
              return this.__PROXY__.removeCustomValue(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.customValue = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.customValue");
          
              return this.__PROXY__.customValue(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setCustomValue = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setCustomValue");
          
              return this.__PROXY__.setCustomValue(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.error = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setAutoSaveFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setAutoSaveFilter");
          
              return this.__PROXY__.setAutoSaveFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.autoSaveFilter = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.autoSaveFilter");
          
              return this.__PROXY__.autoSaveFilter(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.setUsesFilterEngine = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.setUsesFilterEngine");
          
              return this.__PROXY__.setUsesFilterEngine(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.usesFilterEngine = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.usesFilterEngine");
          
              return this.__PROXY__.usesFilterEngine(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.contentModel = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.contentModel");
          
              return this.__PROXY__.contentModel(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.indexModel = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.indexModel");
          
              return this.__PROXY__.indexModel(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.contentWidget = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.contentWidget");
          
              return this.__PROXY__.contentWidget(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.indexWidget = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.indexWidget");
          
              return this.__PROXY__.indexWidget(...args);
            
        };
        
        // function 
        QHelpEngine.prototype.searchEngine = function(...args) 
          
        {
          //print("JS: QHelpEngine.prototype.searchEngine");
          
              return this.__PROXY__.searchEngine(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QHelpEngine.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpEngine.prototype, 'setupStarted', {
            get: function() { return this.__PROXY__.setupStarted; },
            configurable: true
        });
        
        Object.defineProperty(QHelpEngine.prototype, 'setupFinished', {
            get: function() { return this.__PROXY__.setupFinished; },
            configurable: true
        });
        
        Object.defineProperty(QHelpEngine.prototype, 'warning', {
            get: function() { return this.__PROXY__.warning; },
            configurable: true
        });
        
          Object.defineProperty(QHelpEngine.prototype, 'warning(QString)', {
              get: function() { return this.__PROXY__.warning; },
              configurable: true
          });
        
        Object.defineProperty(QHelpEngine.prototype, 'currentFilterChanged', {
            get: function() { return this.__PROXY__.currentFilterChanged; },
            configurable: true
        });
        
          Object.defineProperty(QHelpEngine.prototype, 'currentFilterChanged(QString)', {
              get: function() { return this.__PROXY__.currentFilterChanged; },
              configurable: true
          });
        
        Object.defineProperty(QHelpEngine.prototype, 'readersAboutToBeInvalidated', {
            get: function() { return this.__PROXY__.readersAboutToBeInvalidated; },
            configurable: true
        });
        QHelpEngine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpEngine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpEngine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpEngine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      