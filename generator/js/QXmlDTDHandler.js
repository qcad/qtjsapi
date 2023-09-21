
      // auto generated
      //var self;

      // class constructor:
      function QXmlDTDHandler() {
        

        // should be QXmlDTDHandler_BaseJs.call(this, engine):
        //QXmlDTDHandler.prototype = new QXmlDTDHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QXmlDTDHandler_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlDTDHandler);
            //}
          }
          else {
            qWarning("QXmlDTDHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlDTDHandler.js: No constructor found for class QXmlDTDHandler");
            
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

      //QXmlDTDHandler.prototype = new QXmlDTDHandler_BaseJs(engine);
      //QXmlDTDHandler.prototype = new QXmlDTDHandler_Wrapper(engine);
      QXmlDTDHandler.prototype = new Object();

      QXmlDTDHandler.prototype.toString = function() {
          //return "QXmlDTDHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlDTDHandler [JS]";
        };
      QXmlDTDHandler.getObjectType = function() {
        
            return RJSType.QXmlDTDHandler_Type;
          
      };

      QXmlDTDHandler.prototype.getObjectType = function() {
        
            return RJSType.QXmlDTDHandler_Type;
          
      };

      QXmlDTDHandler.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QXmlDTDHandler_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QXmlDTDHandler_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlDTDHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlDTDHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    