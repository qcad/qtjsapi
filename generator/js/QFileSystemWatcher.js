
      // auto generated
      //var self;

      // class constructor:
      function QFileSystemWatcher() {
        

        // should be QFileSystemWatcher_BaseJs.call(this, engine):
        //QFileSystemWatcher.prototype = new QFileSystemWatcher_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileSystemWatcher.getIdStatic()))) {

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
            qWarning("QFileSystemWatcher.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QFileSystemWatcher_Wrapper(
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

      

        //copyProperties(this, wrapper, QFileSystemWatcher);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QFileSystemWatcher_Wrapper(
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

      

        //copyProperties(this, wrapper, QFileSystemWatcher);
  }

  
  else {
    
        print("QFileSystemWatcher(): wrong number / type of arguments");
      
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

      //QFileSystemWatcher.prototype = new QFileSystemWatcher_BaseJs(engine);
      //QFileSystemWatcher.prototype = new QFileSystemWatcher_Wrapper(engine);
      QFileSystemWatcher.prototype = new Object();


      QFileSystemWatcher.prototype.toString = function() {
          //return "QFileSystemWatcher [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileSystemWatcher [JS]";
        };
      QFileSystemWatcher.getObjectType = function() {
        return RJSType_QFileSystemWatcher.getIdStatic();
      };

      QFileSystemWatcher.prototype.getObjectType = function() {
        return RJSType_QFileSystemWatcher.getIdStatic();
      };

      QFileSystemWatcher.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileSystemWatcher.getIdStatic()) {
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
        QFileSystemWatcher.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.findChild = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.children = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.setParent = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.property = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.parent = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.addPath = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.addPath");
          
              return this.__PROXY__.addPath(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.addPaths = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.addPaths");
          
              return this.__PROXY__.addPaths(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.removePath = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.removePath");
          
              return this.__PROXY__.removePath(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.removePaths = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.removePaths");
          
              return this.__PROXY__.removePaths(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.files = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.files");
          
              return this.__PROXY__.files(...args);
            
        };
        
        // function 
        QFileSystemWatcher.prototype.directories = function(...args) 
          
        {
          //print("JS: QFileSystemWatcher.prototype.directories");
          
              return this.__PROXY__.directories(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QFileSystemWatcher.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QFileSystemWatcher.prototype, 'fileChanged', {
            get: function() { return this.__PROXY__.fileChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFileSystemWatcher.prototype, 'fileChanged(QString)', {
              get: function() { return this.__PROXY__.fileChanged; },
              configurable: true
          });
        
        Object.defineProperty(QFileSystemWatcher.prototype, 'directoryChanged', {
            get: function() { return this.__PROXY__.directoryChanged; },
            configurable: true
        });
        
          Object.defineProperty(QFileSystemWatcher.prototype, 'directoryChanged(QString)', {
              get: function() { return this.__PROXY__.directoryChanged; },
              configurable: true
          });
        QFileSystemWatcher.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFileSystemWatcher.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFileSystemWatcher.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileSystemWatcher.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileSystemWatcher.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFileSystemWatcher.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      