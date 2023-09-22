
      // auto generated
      //var self;

      // class constructor:
      function QXmlParseException() {
        

        // should be QXmlParseException_BaseJs.call(this, engine):
        //QXmlParseException.prototype = new QXmlParseException_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QXmlParseException.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlParseException);
            //}
          }
          else {
            qWarning("QXmlParseException.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QXmlParseException_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QXmlParseException);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlParseException);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlParseException_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QXmlParseException);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlParseException);
  }

  
  else {
    
        print("QXmlParseException(): wrong number / type of arguments");
      
    console.trace();
  }
  
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

      //QXmlParseException.prototype = new QXmlParseException_BaseJs(engine);
      //QXmlParseException.prototype = new QXmlParseException_Wrapper(engine);
      QXmlParseException.prototype = new Object();

      QXmlParseException.prototype.toString = function() {
          //return "QXmlParseException [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlParseException [JS]";
        };
      QXmlParseException.getObjectType = function() {
        
            return RJSType_QXmlParseException.getIdStatic();
          
      };

      QXmlParseException.prototype.getObjectType = function() {
        
            return RJSType_QXmlParseException.getIdStatic();
          
      };

      QXmlParseException.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QXmlParseException.getIdStatic()) {
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
      //QXmlParseException.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlParseException.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    