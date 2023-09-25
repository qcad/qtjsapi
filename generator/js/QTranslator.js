
      // auto generated
      //var self;

      // class constructor:
      function QTranslator() {
        

        // should be QTranslator_BaseJs.call(this, engine):
        //QTranslator.prototype = new QTranslator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTranslator.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTranslator);
            //}
          }
          else {
            qWarning("QTranslator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTranslator_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTranslator);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTranslator);
  }

  
  else {
    
        print("QTranslator(): wrong number / type of arguments");
      
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

      //QTranslator.prototype = new QTranslator_BaseJs(engine);
      //QTranslator.prototype = new QTranslator_Wrapper(engine);
      QTranslator.prototype = new Object();

      QTranslator.prototype.toString = function() {
          //return "QTranslator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTranslator [JS]";
        };
      QTranslator.getObjectType = function() {
        return RJSType_QTranslator.getIdStatic();
      };

      QTranslator.prototype.getObjectType = function() {
        return RJSType_QTranslator.getIdStatic();
      };

      QTranslator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTranslator.getIdStatic()) {
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
        QTranslator.tr = function() 
          
        {
          //print("JS: QTranslator.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTranslator_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTranslator);
  }

  
  else {
    
        print("QTranslator.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTranslator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTranslator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    