
      // auto generated
      //var self;

      // class constructor:
      function QXmlContentHandler() {
        

        // should be QXmlContentHandler_BaseJs.call(this, engine):
        //QXmlContentHandler.prototype = new QXmlContentHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlContentHandler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlContentHandler);
            //}
          }
          else {
            qWarning("QXmlContentHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlContentHandler.js: No constructor found for class QXmlContentHandler");
            
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

      //QXmlContentHandler.prototype = new QXmlContentHandler_BaseJs(engine);
      //QXmlContentHandler.prototype = new QXmlContentHandler_Wrapper(engine);
      QXmlContentHandler.prototype = new Object();

      QXmlContentHandler.prototype.toString = function() {
          //return "QXmlContentHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlContentHandler [JS]";
        };
      QXmlContentHandler.getObjectType = function() {
        return RJSType_QXmlContentHandler.getIdStatic();
      };

      QXmlContentHandler.prototype.getObjectType = function() {
        return RJSType_QXmlContentHandler.getIdStatic();
      };

      QXmlContentHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlContentHandler.getIdStatic()) {
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
      //QXmlContentHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlContentHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    