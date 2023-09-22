
      // auto generated
      //var self;

      // class constructor:
      function QXmlStreamAttribute() {
        

        // should be QXmlStreamAttribute_BaseJs.call(this, engine):
        //QXmlStreamAttribute.prototype = new QXmlStreamAttribute_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QXmlStreamAttribute.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlStreamAttribute);
            //}
          }
          else {
            qWarning("QXmlStreamAttribute.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlStreamAttribute.js: No constructor found for class QXmlStreamAttribute");
            
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

      //QXmlStreamAttribute.prototype = new QXmlStreamAttribute_BaseJs(engine);
      //QXmlStreamAttribute.prototype = new QXmlStreamAttribute_Wrapper(engine);
      QXmlStreamAttribute.prototype = new Object();

      QXmlStreamAttribute.prototype.toString = function() {
          //return "QXmlStreamAttribute [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlStreamAttribute [JS]";
        };
      QXmlStreamAttribute.getObjectType = function() {
        
            return RJSType_QXmlStreamAttribute.getIdStatic();
          
      };

      QXmlStreamAttribute.prototype.getObjectType = function() {
        
            return RJSType_QXmlStreamAttribute.getIdStatic();
          
      };

      QXmlStreamAttribute.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QXmlStreamAttribute.getIdStatic()) {
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
      //QXmlStreamAttribute.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlStreamAttribute.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    