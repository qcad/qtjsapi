
      // auto generated
      //var self;

      // class constructor:
      function QXmlLexicalHandler() {
        

        // should be QXmlLexicalHandler_BaseJs.call(this, engine):
        //QXmlLexicalHandler.prototype = new QXmlLexicalHandler_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlLexicalHandler.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QXmlLexicalHandler);
                
            //}
          }
          else {
            qWarning("QXmlLexicalHandler.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QXmlLexicalHandler.js: No constructor found for class QXmlLexicalHandler");
            
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

      //QXmlLexicalHandler.prototype = new QXmlLexicalHandler_BaseJs(engine);
      //QXmlLexicalHandler.prototype = new QXmlLexicalHandler_Wrapper(engine);
      QXmlLexicalHandler.prototype = new Object();

      QXmlLexicalHandler.prototype.toString = function() {
          //return "QXmlLexicalHandler [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlLexicalHandler [JS]";
        };
      QXmlLexicalHandler.getObjectType = function() {
        return RJSType_QXmlLexicalHandler.getIdStatic();
      };

      QXmlLexicalHandler.prototype.getObjectType = function() {
        return RJSType_QXmlLexicalHandler.getIdStatic();
      };

      QXmlLexicalHandler.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlLexicalHandler.getIdStatic()) {
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
      //QXmlLexicalHandler.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlLexicalHandler.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      