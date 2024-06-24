
      // auto generated
      //var self;

      // class constructor:
      function QQmlContext() {
        

        // should be QQmlContext_BaseJs.call(this, engine):
        //QQmlContext.prototype = new QQmlContext_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQmlContext.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QQmlContext);
            //}
          }
          else {
            qWarning("QQmlContext.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QQmlContext.js: No constructor found for class QQmlContext");
            
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

      //QQmlContext.prototype = new QQmlContext_BaseJs(engine);
      //QQmlContext.prototype = new QQmlContext_Wrapper(engine);
      QQmlContext.prototype = new Object();

      QQmlContext.prototype.toString = function() {
          //return "QQmlContext [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQmlContext [JS]";
        };
      QQmlContext.getObjectType = function() {
        return RJSType_QQmlContext.getIdStatic();
      };

      QQmlContext.prototype.getObjectType = function() {
        return RJSType_QQmlContext.getIdStatic();
      };

      QQmlContext.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQmlContext.getIdStatic()) {
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
        QQmlContext.tr = function() 
          
        {
          //print("JS: QQmlContext.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QQmlContext_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QQmlContext);
  }

  
  else {
    
        print("QQmlContext.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQmlContext.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQmlContext.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    