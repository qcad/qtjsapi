
      // auto generated
      //var self;

      // class constructor:
      function QEventLoop() {
        

        // should be QEventLoop_BaseJs.call(this, engine):
        //QEventLoop.prototype = new QEventLoop_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QEventLoop.getIdStatic()))) {

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
            qWarning("QEventLoop.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QEventLoop_Wrapper(
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

      

        //copyProperties(this, wrapper, QEventLoop);
  }

  
  else {
    
        print("QEventLoop(): wrong number / type of arguments");
      
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

      //QEventLoop.prototype = new QEventLoop_BaseJs(engine);
      //QEventLoop.prototype = new QEventLoop_Wrapper(engine);
      QEventLoop.prototype = new Object();


      QEventLoop.prototype.toString = function() {
          //return "QEventLoop [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QEventLoop [JS]";
        };
      QEventLoop.getObjectType = function() {
        return RJSType_QEventLoop.getIdStatic();
      };

      QEventLoop.prototype.getObjectType = function() {
        return RJSType_QEventLoop.getIdStatic();
      };

      QEventLoop.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QEventLoop.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ProcessEventsFlag
QEventLoop.AllEvents = QEventLoop_Wrapper.AllEvents;
QEventLoop.ExcludeUserInputEvents = QEventLoop_Wrapper.ExcludeUserInputEvents;
QEventLoop.ExcludeSocketNotifiers = QEventLoop_Wrapper.ExcludeSocketNotifiers;
QEventLoop.WaitForMoreEvents = QEventLoop_Wrapper.WaitForMoreEvents;
QEventLoop.X11ExcludeTimers = QEventLoop_Wrapper.X11ExcludeTimers;
QEventLoop.EventLoopExec = QEventLoop_Wrapper.EventLoopExec;
QEventLoop.DialogExec = QEventLoop_Wrapper.DialogExec;
QEventLoop.ApplicationExec = QEventLoop_Wrapper.ApplicationExec;


      // functions:
      
        // function 
        QEventLoop.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QEventLoop.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QEventLoop.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QEventLoop.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QEventLoop.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QEventLoop.prototype.findChild = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QEventLoop.prototype.children = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QEventLoop.prototype.setParent = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QEventLoop.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QEventLoop.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QEventLoop.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QEventLoop.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QEventLoop.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QEventLoop.prototype.property = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QEventLoop.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QEventLoop.prototype.parent = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QEventLoop.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QEventLoop.prototype.processEvents = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.processEvents");
          
              return this.__PROXY__.processEvents(...args);
            
        };
    
        // function 
        QEventLoop.prototype.exec = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
    
        // function 
        QEventLoop.prototype.isRunning = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.isRunning");
          
              return this.__PROXY__.isRunning(...args);
            
        };
    
        // function 
        QEventLoop.prototype.wakeUp = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.wakeUp");
          
              return this.__PROXY__.wakeUp(...args);
            
        };
    
        // function 
        QEventLoop.prototype.event = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QEventLoop.prototype.exit = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.exit");
          
              return this.__PROXY__.exit(...args);
            
        };
    
        // function 
        QEventLoop.prototype.quit = function(...args) 
          
        {
          //print("JS: QEventLoop.prototype.quit");
          
              return this.__PROXY__.quit(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QEventLoop.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QEventLoop.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QEventLoop.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QEventLoop.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QEventLoop.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QEventLoop.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QEventLoop.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      