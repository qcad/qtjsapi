
      // auto generated
      //var self;

      // class constructor:
      function QUiLoader() {
        

        // should be QUiLoader_BaseJs.call(this, engine):
        //QUiLoader.prototype = new QUiLoader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QUiLoader.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QUiLoader);
            //}
          }
          else {
            qWarning("QUiLoader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QUiLoader_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QUiLoader);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QUiLoader);
  }

  
  else {
    
        print("QUiLoader(): wrong number / type of arguments");
      
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

      //QUiLoader.prototype = new QUiLoader_BaseJs(engine);
      //QUiLoader.prototype = new QUiLoader_Wrapper(engine);
      QUiLoader.prototype = new Object();

      QUiLoader.prototype.toString = function() {
          //return "QUiLoader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QUiLoader [JS]";
        };
      QUiLoader.getObjectType = function() {
        return RJSType_QUiLoader.getIdStatic();
      };

      QUiLoader.prototype.getObjectType = function() {
        return RJSType_QUiLoader.getIdStatic();
      };

      QUiLoader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QUiLoader.getIdStatic()) {
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
        QUiLoader.tr = function() 
          
        {
          //print("JS: QUiLoader.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QUiLoader_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QUiLoader);
  }

  
  else {
    
        print("QUiLoader.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QUiLoader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QUiLoader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    