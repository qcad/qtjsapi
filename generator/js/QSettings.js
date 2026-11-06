
      // auto generated
      //var self;

      // class constructor:
      function QSettings() {
        

        // should be QSettings_BaseJs.call(this, engine):
        //QSettings.prototype = new QSettings_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSettings.getIdStatic()))) {

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
            qWarning("QSettings.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
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

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
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

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings(): wrong number / type of arguments");
      
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

      //QSettings.prototype = new QSettings_BaseJs(engine);
      //QSettings.prototype = new QSettings_Wrapper(engine);
      QSettings.prototype = new Object();


      QSettings.prototype.toString = function() {
          //return "QSettings [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSettings [JS]";
        };
      QSettings.getObjectType = function() {
        return RJSType_QSettings.getIdStatic();
      };

      QSettings.prototype.getObjectType = function() {
        return RJSType_QSettings.getIdStatic();
      };

      QSettings.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSettings.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Status
QSettings.NoError = QSettings_Wrapper.NoError;
QSettings.AccessError = QSettings_Wrapper.AccessError;
QSettings.FormatError = QSettings_Wrapper.FormatError;

  // enum: Format
QSettings.NativeFormat = QSettings_Wrapper.NativeFormat;
QSettings.IniFormat = QSettings_Wrapper.IniFormat;
QSettings.InvalidFormat = QSettings_Wrapper.InvalidFormat;
QSettings.CustomFormat1 = QSettings_Wrapper.CustomFormat1;
QSettings.CustomFormat2 = QSettings_Wrapper.CustomFormat2;
QSettings.CustomFormat3 = QSettings_Wrapper.CustomFormat3;
QSettings.CustomFormat4 = QSettings_Wrapper.CustomFormat4;
QSettings.CustomFormat5 = QSettings_Wrapper.CustomFormat5;
QSettings.CustomFormat6 = QSettings_Wrapper.CustomFormat6;
QSettings.CustomFormat7 = QSettings_Wrapper.CustomFormat7;
QSettings.CustomFormat8 = QSettings_Wrapper.CustomFormat8;
QSettings.CustomFormat9 = QSettings_Wrapper.CustomFormat9;
QSettings.CustomFormat10 = QSettings_Wrapper.CustomFormat10;
QSettings.CustomFormat11 = QSettings_Wrapper.CustomFormat11;
QSettings.CustomFormat12 = QSettings_Wrapper.CustomFormat12;
QSettings.CustomFormat13 = QSettings_Wrapper.CustomFormat13;
QSettings.CustomFormat14 = QSettings_Wrapper.CustomFormat14;
QSettings.CustomFormat15 = QSettings_Wrapper.CustomFormat15;
QSettings.CustomFormat16 = QSettings_Wrapper.CustomFormat16;

  // enum: Scope
QSettings.UserScope = QSettings_Wrapper.UserScope;
QSettings.SystemScope = QSettings_Wrapper.SystemScope;


      // functions:
      
        // function 
        QSettings.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QSettings.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QSettings.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QSettings.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QSettings.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QSettings.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QSettings.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QSettings.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QSettings.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QSettings.prototype.findChild = function(...args) 
          
        {
          //print("JS: QSettings.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QSettings.prototype.children = function(...args) 
          
        {
          //print("JS: QSettings.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QSettings.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QSettings.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QSettings.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QSettings.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QSettings.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QSettings.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QSettings.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QSettings.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QSettings.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QSettings.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QSettings.prototype.property = function(...args) 
          
        {
          //print("JS: QSettings.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QSettings.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QSettings.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QSettings.prototype.parent = function(...args) 
          
        {
          //print("JS: QSettings.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QSettings.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QSettings.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QSettings.prototype.clear = function(...args) 
          
        {
          //print("JS: QSettings.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QSettings.prototype.sync = function(...args) 
          
        {
          //print("JS: QSettings.prototype.sync");
          
              return this.__PROXY__.sync(...args);
            
        };
    
        // function 
        QSettings.prototype.status = function(...args) 
          
        {
          //print("JS: QSettings.prototype.status");
          
              return this.__PROXY__.status(...args);
            
        };
    
        // function 
        QSettings.prototype.isAtomicSyncRequired = function(...args) 
          
        {
          //print("JS: QSettings.prototype.isAtomicSyncRequired");
          
              return this.__PROXY__.isAtomicSyncRequired(...args);
            
        };
    
        // function 
        QSettings.prototype.setAtomicSyncRequired = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setAtomicSyncRequired");
          
              return this.__PROXY__.setAtomicSyncRequired(...args);
            
        };
    
        // function 
        QSettings.prototype.beginGroup = function(...args) 
          
        {
          //print("JS: QSettings.prototype.beginGroup");
          
              return this.__PROXY__.beginGroup(...args);
            
        };
    
        // function 
        QSettings.prototype.endGroup = function(...args) 
          
        {
          //print("JS: QSettings.prototype.endGroup");
          
              return this.__PROXY__.endGroup(...args);
            
        };
    
        // function 
        QSettings.prototype.group = function(...args) 
          
        {
          //print("JS: QSettings.prototype.group");
          
              return this.__PROXY__.group(...args);
            
        };
    
        // function 
        QSettings.prototype.beginReadArray = function(...args) 
          
        {
          //print("JS: QSettings.prototype.beginReadArray");
          
              return this.__PROXY__.beginReadArray(...args);
            
        };
    
        // function 
        QSettings.prototype.beginWriteArray = function(...args) 
          
        {
          //print("JS: QSettings.prototype.beginWriteArray");
          
              return this.__PROXY__.beginWriteArray(...args);
            
        };
    
        // function 
        QSettings.prototype.endArray = function(...args) 
          
        {
          //print("JS: QSettings.prototype.endArray");
          
              return this.__PROXY__.endArray(...args);
            
        };
    
        // function 
        QSettings.prototype.setArrayIndex = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setArrayIndex");
          
              return this.__PROXY__.setArrayIndex(...args);
            
        };
    
        // function 
        QSettings.prototype.allKeys = function(...args) 
          
        {
          //print("JS: QSettings.prototype.allKeys");
          
              return this.__PROXY__.allKeys(...args);
            
        };
    
        // function 
        QSettings.prototype.childKeys = function(...args) 
          
        {
          //print("JS: QSettings.prototype.childKeys");
          
              return this.__PROXY__.childKeys(...args);
            
        };
    
        // function 
        QSettings.prototype.childGroups = function(...args) 
          
        {
          //print("JS: QSettings.prototype.childGroups");
          
              return this.__PROXY__.childGroups(...args);
            
        };
    
        // function 
        QSettings.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QSettings.prototype.isWritable");
          
              return this.__PROXY__.isWritable(...args);
            
        };
    
        // function 
        QSettings.prototype.setValue = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
    
        // function 
        QSettings.prototype.value = function(...args) 
          
        {
          //print("JS: QSettings.prototype.value");
          
              return this.__PROXY__.value(...args);
            
        };
    
        // function 
        QSettings.prototype.remove = function(...args) 
          
        {
          //print("JS: QSettings.prototype.remove");
          
              return this.__PROXY__.remove(...args);
            
        };
    
        // function 
        QSettings.prototype.contains = function(...args) 
          
        {
          //print("JS: QSettings.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
    
        // function 
        QSettings.prototype.setFallbacksEnabled = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setFallbacksEnabled");
          
              return this.__PROXY__.setFallbacksEnabled(...args);
            
        };
    
        // function 
        QSettings.prototype.fallbacksEnabled = function(...args) 
          
        {
          //print("JS: QSettings.prototype.fallbacksEnabled");
          
              return this.__PROXY__.fallbacksEnabled(...args);
            
        };
    
        // function 
        QSettings.prototype.fileName = function(...args) 
          
        {
          //print("JS: QSettings.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
    
        // function 
        QSettings.prototype.format = function(...args) 
          
        {
          //print("JS: QSettings.prototype.format");
          
              return this.__PROXY__.format(...args);
            
        };
    
        // function 
        QSettings.prototype.scope = function(...args) 
          
        {
          //print("JS: QSettings.prototype.scope");
          
              return this.__PROXY__.scope(...args);
            
        };
    
        // function 
        QSettings.prototype.organizationName = function(...args) 
          
        {
          //print("JS: QSettings.prototype.organizationName");
          
              return this.__PROXY__.organizationName(...args);
            
        };
    
        // function 
        QSettings.prototype.applicationName = function(...args) 
          
        {
          //print("JS: QSettings.prototype.applicationName");
          
              return this.__PROXY__.applicationName(...args);
            
        };
    
        // function 
        QSettings.prototype.setDefaultFormat = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setDefaultFormat");
          
              return this.__PROXY__.setDefaultFormat(...args);
            
        };
    
        // function 
        QSettings.prototype.defaultFormat = function(...args) 
          
        {
          //print("JS: QSettings.prototype.defaultFormat");
          
              return this.__PROXY__.defaultFormat(...args);
            
        };
    
        // function 
        QSettings.prototype.setPath = function(...args) 
          
        {
          //print("JS: QSettings.prototype.setPath");
          
              return this.__PROXY__.setPath(...args);
            
        };
    
        // function 
        QSettings.prototype.event = function(...args) 
          
        {
          //print("JS: QSettings.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    

      // static functions:
      

        // static function 
        QSettings.setDefaultFormat = function() 
          
        {
          //print("JS: QSettings.setDefaultFormat");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSettings_WrapperSingletonInstance.setDefaultFormat(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings.setDefaultFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSettings.defaultFormat = function() 
          
        {
          //print("JS: QSettings.defaultFormat");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSettings_WrapperSingletonInstance.defaultFormat(
                  
                );
              

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings.defaultFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSettings.setPath = function() 
          
        {
          //print("JS: QSettings.setPath");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QSettings_WrapperSingletonInstance.setPath(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings.setPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QSettings.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QSettings.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSettings.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSettings.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSettings.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSettings.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSettings.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      