
      // auto generated
      //var self;

      // class constructor:
      function QXmlEntityResolver() {
        

        // should be QXmlEntityResolver_BaseJs.call(this, engine):
        //QXmlEntityResolver.prototype = new QXmlEntityResolver_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QXmlEntityResolver.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlEntityResolver);
            //}
          }
          else {
            qWarning("QXmlEntityResolver.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlEntityResolver.js: No constructor found for class QXmlEntityResolver");
            
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

      //QXmlEntityResolver.prototype = new QXmlEntityResolver_BaseJs(engine);
      //QXmlEntityResolver.prototype = new QXmlEntityResolver_Wrapper(engine);
      QXmlEntityResolver.prototype = new Object();

      QXmlEntityResolver.prototype.toString = function() {
          //return "QXmlEntityResolver [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlEntityResolver [JS]";
        };
      QXmlEntityResolver.getObjectType = function() {
        
            return RJSType_QXmlEntityResolver.getIdStatic();
          
      };

      QXmlEntityResolver.prototype.getObjectType = function() {
        
            return RJSType_QXmlEntityResolver.getIdStatic();
          
      };

      QXmlEntityResolver.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QXmlEntityResolver.getIdStatic()) {
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
      //QXmlEntityResolver.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlEntityResolver.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    