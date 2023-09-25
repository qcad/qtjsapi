
      // auto generated
      //var self;

      // class constructor:
      function QShortcut() {
        

        // should be QShortcut_BaseJs.call(this, engine):
        //QShortcut.prototype = new QShortcut_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QShortcut.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QShortcut);
            //}
          }
          else {
            qWarning("QShortcut.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QShortcut_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QShortcut);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QShortcut);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QShortcut_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QShortcut);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QShortcut);
  }

  
  else {
    
        print("QShortcut(): wrong number / type of arguments");
      
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

      //QShortcut.prototype = new QShortcut_BaseJs(engine);
      //QShortcut.prototype = new QShortcut_Wrapper(engine);
      QShortcut.prototype = new Object();

      QShortcut.prototype.toString = function() {
          //return "QShortcut [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QShortcut [JS]";
        };
      QShortcut.getObjectType = function() {
        return RJSType_QShortcut.getIdStatic();
      };

      QShortcut.prototype.getObjectType = function() {
        return RJSType_QShortcut.getIdStatic();
      };

      QShortcut.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QShortcut.getIdStatic()) {
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
      

        // static function 
        QShortcut.tr = function() 
          
        {
          //print("JS: QShortcut.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QShortcut_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QShortcut);
  }

  
  else {
    
        print("QShortcut.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QShortcut.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QShortcut.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    