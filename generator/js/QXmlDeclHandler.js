
      // auto generated
      //var self;

      // class constructor:
      function QXmlDeclHandler() {
        

        // should be QXmlDeclHandler_BaseJs.call(this, engine):
        //QXmlDeclHandler.prototype = new QXmlDeclHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlDeclHandler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlDeclHandler);
            //}
          }
          else {
            qWarning("QXmlDeclHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlDeclHandler.js: No constructor found for class QXmlDeclHandler");
            
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

      //QXmlDeclHandler.prototype = new QXmlDeclHandler_BaseJs(engine);
      //QXmlDeclHandler.prototype = new QXmlDeclHandler_Wrapper(engine);
      QXmlDeclHandler.prototype = new Object();

      QXmlDeclHandler.prototype.toString = function() {
          //return "QXmlDeclHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlDeclHandler [JS]";
        };
      QXmlDeclHandler.getObjectType = function() {
        return RJSType_QXmlDeclHandler.getIdStatic();
      };

      QXmlDeclHandler.prototype.getObjectType = function() {
        return RJSType_QXmlDeclHandler.getIdStatic();
      };

      QXmlDeclHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlDeclHandler.getIdStatic()) {
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
      //QXmlDeclHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlDeclHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    