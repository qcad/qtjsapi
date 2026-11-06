
      // auto generated
      //var self;

      // class constructor:
      function QHelpSearchEngine() {
        

        // should be QHelpSearchEngine_BaseJs.call(this, engine):
        //QHelpSearchEngine.prototype = new QHelpSearchEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpSearchEngine.getIdStatic()))) {

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
            qWarning("QHelpSearchEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QHelpSearchEngine_Wrapper(
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

      

        //copyProperties(this, wrapper, QHelpSearchEngine);
  }

  
  else {
    
        print("QHelpSearchEngine(): wrong number / type of arguments");
      
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

      //QHelpSearchEngine.prototype = new QHelpSearchEngine_BaseJs(engine);
      //QHelpSearchEngine.prototype = new QHelpSearchEngine_Wrapper(engine);
      QHelpSearchEngine.prototype = new Object();


      QHelpSearchEngine.prototype.toString = function() {
          //return "QHelpSearchEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpSearchEngine [JS]";
        };
      QHelpSearchEngine.getObjectType = function() {
        return RJSType_QHelpSearchEngine.getIdStatic();
      };

      QHelpSearchEngine.prototype.getObjectType = function() {
        return RJSType_QHelpSearchEngine.getIdStatic();
      };

      QHelpSearchEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpSearchEngine.getIdStatic()) {
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
        QHelpSearchEngine.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.children = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.property = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.parent = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.queryWidget = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.queryWidget");
          
              return this.__PROXY__.queryWidget(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.resultWidget = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.resultWidget");
          
              return this.__PROXY__.resultWidget(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.searchResultCount = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.searchResultCount");
          
              return this.__PROXY__.searchResultCount(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.searchResults = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.searchResults");
          
              return this.__PROXY__.searchResults(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.searchInput = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.searchInput");
          
              return this.__PROXY__.searchInput(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.reindexDocumentation = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.reindexDocumentation");
          
              return this.__PROXY__.reindexDocumentation(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.cancelIndexing = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.cancelIndexing");
          
              return this.__PROXY__.cancelIndexing(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.search = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.search");
          
              return this.__PROXY__.search(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.cancelSearching = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.cancelSearching");
          
              return this.__PROXY__.cancelSearching(...args);
            
        };
    
        // function 
        QHelpSearchEngine.prototype.scheduleIndexDocumentation = function(...args) 
          
        {
          //print("JS: QHelpSearchEngine.prototype.scheduleIndexDocumentation");
          
              return this.__PROXY__.scheduleIndexDocumentation(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QHelpSearchEngine.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QHelpSearchEngine.prototype, 'indexingStarted', {
            get: function() { return this.__PROXY__.indexingStarted; },
            configurable: true
        });
        
        Object.defineProperty(QHelpSearchEngine.prototype, 'indexingFinished', {
            get: function() { return this.__PROXY__.indexingFinished; },
            configurable: true
        });
        
        Object.defineProperty(QHelpSearchEngine.prototype, 'searchingStarted', {
            get: function() { return this.__PROXY__.searchingStarted; },
            configurable: true
        });
        
        Object.defineProperty(QHelpSearchEngine.prototype, 'searchingFinished', {
            get: function() { return this.__PROXY__.searchingFinished; },
            configurable: true
        });
        
          Object.defineProperty(QHelpSearchEngine.prototype, 'searchingFinished(int)', {
              get: function() { return this.__PROXY__.searchingFinished; },
              configurable: true
          });
        QHelpSearchEngine.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHelpSearchEngine.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHelpSearchEngine.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpSearchEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpSearchEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHelpSearchEngine.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      