
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
            arguments[2].getWrappedType()===
              
                  RJSType_QEventLoop.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QEventLoop);
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
          

        copyProperties(this, wrapper, QEventLoop);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
      

      // static functions:
      

        // static function 
        QEventLoop.tr = function() 
          
        {
          //print("JS: QEventLoop.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QEventLoop_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QEventLoop);
  }

  
  else {
    
        print("QEventLoop.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
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
    