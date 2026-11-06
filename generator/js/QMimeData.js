
      // auto generated
      //var self;

      // class constructor:
      function QMimeData() {
        

        // should be QMimeData_BaseJs.call(this, engine):
        //QMimeData.prototype = new QMimeData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMimeData.getIdStatic()))) {

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
            qWarning("QMimeData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMimeData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMimeData);
  }

  
  else {
    
        print("QMimeData(): wrong number / type of arguments");
      
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

      //QMimeData.prototype = new QMimeData_BaseJs(engine);
      //QMimeData.prototype = new QMimeData_Wrapper(engine);
      QMimeData.prototype = new Object();


      QMimeData.prototype.toString = function() {
          //return "QMimeData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMimeData [JS]";
        };
      QMimeData.getObjectType = function() {
        return RJSType_QMimeData.getIdStatic();
      };

      QMimeData.prototype.getObjectType = function() {
        return RJSType_QMimeData.getIdStatic();
      };

      QMimeData.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMimeData.getIdStatic()) {
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
        QMimeData.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QMimeData.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QMimeData.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QMimeData.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QMimeData.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QMimeData.prototype.findChild = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QMimeData.prototype.children = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QMimeData.prototype.setParent = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QMimeData.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QMimeData.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QMimeData.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QMimeData.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QMimeData.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QMimeData.prototype.property = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QMimeData.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QMimeData.prototype.parent = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QMimeData.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QMimeData.prototype.urls = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.urls");
          
              return this.__PROXY__.urls(...args);
            
        };
    
        // function 
        QMimeData.prototype.setUrls = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setUrls");
          
              return this.__PROXY__.setUrls(...args);
            
        };
    
        // function 
        QMimeData.prototype.hasUrls = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.hasUrls");
          
              return this.__PROXY__.hasUrls(...args);
            
        };
    
        // function 
        QMimeData.prototype.text = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
    
        // function 
        QMimeData.prototype.setText = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QMimeData.prototype.hasText = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.hasText");
          
              return this.__PROXY__.hasText(...args);
            
        };
    
        // function 
        QMimeData.prototype.html = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.html");
          
              return this.__PROXY__.html(...args);
            
        };
    
        // function 
        QMimeData.prototype.setHtml = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setHtml");
          
              return this.__PROXY__.setHtml(...args);
            
        };
    
        // function 
        QMimeData.prototype.hasHtml = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.hasHtml");
          
              return this.__PROXY__.hasHtml(...args);
            
        };
    
        // function 
        QMimeData.prototype.imageData = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.imageData");
          
              return this.__PROXY__.imageData(...args);
            
        };
    
        // function 
        QMimeData.prototype.setImageData = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setImageData");
          
              return this.__PROXY__.setImageData(...args);
            
        };
    
        // function 
        QMimeData.prototype.hasImage = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.hasImage");
          
              return this.__PROXY__.hasImage(...args);
            
        };
    
        // function 
        QMimeData.prototype.colorData = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.colorData");
          
              return this.__PROXY__.colorData(...args);
            
        };
    
        // function 
        QMimeData.prototype.setColorData = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setColorData");
          
              return this.__PROXY__.setColorData(...args);
            
        };
    
        // function 
        QMimeData.prototype.hasColor = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.hasColor");
          
              return this.__PROXY__.hasColor(...args);
            
        };
    
        // function 
        QMimeData.prototype.data = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.data");
          
              return this.__PROXY__.data(...args);
            
        };
    
        // function 
        QMimeData.prototype.setData = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.setData");
          
              return this.__PROXY__.setData(...args);
            
        };
    
        // function 
        QMimeData.prototype.removeFormat = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.removeFormat");
          
              return this.__PROXY__.removeFormat(...args);
            
        };
    
        // function 
        QMimeData.prototype.hasFormat = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.hasFormat");
          
              return this.__PROXY__.hasFormat(...args);
            
        };
    
        // function 
        QMimeData.prototype.formats = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.formats");
          
              return this.__PROXY__.formats(...args);
            
        };
    
        // function 
        QMimeData.prototype.clear = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QMimeData.prototype.retrieveData = function(...args) 
          
        {
          //print("JS: QMimeData.prototype.retrieveData");
          
              return this.__PROXY__.retrieveData(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QMimeData.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QMimeData.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMimeData.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMimeData.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMimeData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMimeData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMimeData.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      