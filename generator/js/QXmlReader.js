
      // auto generated
      //var self;

      // class constructor:
      function QXmlReader() {
        

        // should be QXmlReader_BaseJs.call(this, engine):
        //QXmlReader.prototype = new QXmlReader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QXmlReader_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlReader);
            //}
          }
          else {
            qWarning("QXmlReader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlReader.js: No constructor found for class QXmlReader");
            
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

      //QXmlReader.prototype = new QXmlReader_BaseJs(engine);
      //QXmlReader.prototype = new QXmlReader_Wrapper(engine);
      QXmlReader.prototype = new Object();

      QXmlReader.prototype.toString = function() {
          //return "QXmlReader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlReader [JS]";
        };
      QXmlReader.getObjectType = function() {
        
            return RJSType.QXmlReader_Type;
          
      };

      QXmlReader.prototype.getObjectType = function() {
        
            return RJSType.QXmlReader_Type;
          
      };

      QXmlReader.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QXmlReader_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QXmlReader_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QXmlReader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlReader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    