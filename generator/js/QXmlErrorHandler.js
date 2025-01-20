
      // auto generated
      //var self;

      // class constructor:
      function QXmlErrorHandler() {
        

        // should be QXmlErrorHandler_BaseJs.call(this, engine):
        //QXmlErrorHandler.prototype = new QXmlErrorHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlErrorHandler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QXmlErrorHandler);
                
            //}
          }
          else {
            qWarning("QXmlErrorHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlErrorHandler.js: No constructor found for class QXmlErrorHandler");
            
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

      //QXmlErrorHandler.prototype = new QXmlErrorHandler_BaseJs(engine);
      //QXmlErrorHandler.prototype = new QXmlErrorHandler_Wrapper(engine);
      QXmlErrorHandler.prototype = new Object();

      QXmlErrorHandler.prototype.toString = function() {
          //return "QXmlErrorHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlErrorHandler [JS]";
        };
      QXmlErrorHandler.getObjectType = function() {
        return RJSType_QXmlErrorHandler.getIdStatic();
      };

      QXmlErrorHandler.prototype.getObjectType = function() {
        return RJSType_QXmlErrorHandler.getIdStatic();
      };

      QXmlErrorHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlErrorHandler.getIdStatic()) {
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
      //QXmlErrorHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlErrorHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      