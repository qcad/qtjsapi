
      // auto generated
      //var self;

      // class constructor:
      function QXmlLocator() {
        

        // should be QXmlLocator_BaseJs.call(this, engine):
        //QXmlLocator.prototype = new QXmlLocator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlLocator.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QXmlLocator);
                
            //}
          }
          else {
            qWarning("QXmlLocator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlLocator.js: No constructor found for class QXmlLocator");
            
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

      //QXmlLocator.prototype = new QXmlLocator_BaseJs(engine);
      //QXmlLocator.prototype = new QXmlLocator_Wrapper(engine);
      QXmlLocator.prototype = new Object();

      QXmlLocator.prototype.toString = function() {
          //return "QXmlLocator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlLocator [JS]";
        };
      QXmlLocator.getObjectType = function() {
        return RJSType_QXmlLocator.getIdStatic();
      };

      QXmlLocator.prototype.getObjectType = function() {
        return RJSType_QXmlLocator.getIdStatic();
      };

      QXmlLocator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlLocator.getIdStatic()) {
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
      //QXmlLocator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlLocator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      