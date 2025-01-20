
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
              
                  copyProperties(this, wrapper, QFileSystemWatcher);
                
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
          
            copyProperties(this, wrapper, QFileSystemWatcher);
          

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
          
            copyProperties(this, wrapper, QFileSystemWatcher);
          

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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["fileChanged(QString)"] = Object.getPrototypeOf(this).fileChanged;
  
    this["directoryChanged(QString)"] = Object.getPrototypeOf(this).directoryChanged;
  
            }
          
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
      

      // static functions:
      

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

      