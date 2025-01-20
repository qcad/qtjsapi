
      // auto generated
      //var self;

      // class constructor:
      function QXmlStreamWriter() {
        

        // should be QXmlStreamWriter_BaseJs.call(this, engine):
        //QXmlStreamWriter.prototype = new QXmlStreamWriter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlStreamWriter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QXmlStreamWriter);
                
            //}
          }
          else {
            qWarning("QXmlStreamWriter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlStreamWriter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QXmlStreamWriter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlStreamWriter);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlStreamWriter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QXmlStreamWriter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlStreamWriter);
  }

  
  else {
    
        print("QXmlStreamWriter(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //QXmlStreamWriter.prototype = new QXmlStreamWriter_BaseJs(engine);
      //QXmlStreamWriter.prototype = new QXmlStreamWriter_Wrapper(engine);
      QXmlStreamWriter.prototype = new Object();

      QXmlStreamWriter.prototype.toString = function() {
          //return "QXmlStreamWriter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlStreamWriter [JS]";
        };
      QXmlStreamWriter.getObjectType = function() {
        return RJSType_QXmlStreamWriter.getIdStatic();
      };

      QXmlStreamWriter.prototype.getObjectType = function() {
        return RJSType_QXmlStreamWriter.getIdStatic();
      };

      QXmlStreamWriter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlStreamWriter.getIdStatic()) {
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
      //QXmlStreamWriter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlStreamWriter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      