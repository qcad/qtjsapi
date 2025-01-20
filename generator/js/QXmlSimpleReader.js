
      // auto generated
      //var self;

      // class constructor:
      function QXmlSimpleReader() {
        

        // should be QXmlSimpleReader_BaseJs.call(this, engine):
        //QXmlSimpleReader.prototype = new QXmlSimpleReader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlSimpleReader.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QXmlSimpleReader);
                
            //}
          }
          else {
            qWarning("QXmlSimpleReader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlSimpleReader_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QXmlSimpleReader);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlSimpleReader);
  }

  
  else {
    
        print("QXmlSimpleReader(): wrong number / type of arguments");
      
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

      //QXmlSimpleReader.prototype = new QXmlSimpleReader_BaseJs(engine);
      //QXmlSimpleReader.prototype = new QXmlSimpleReader_Wrapper(engine);
      QXmlSimpleReader.prototype = new Object();

      QXmlSimpleReader.prototype.toString = function() {
          //return "QXmlSimpleReader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlSimpleReader [JS]";
        };
      QXmlSimpleReader.getObjectType = function() {
        return RJSType_QXmlSimpleReader.getIdStatic();
      };

      QXmlSimpleReader.prototype.getObjectType = function() {
        return RJSType_QXmlSimpleReader.getIdStatic();
      };

      QXmlSimpleReader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlSimpleReader.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QXmlReader.getIdStatic()) {
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
      //QXmlSimpleReader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlSimpleReader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      