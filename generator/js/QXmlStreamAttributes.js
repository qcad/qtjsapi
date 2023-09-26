
      // auto generated
      //var self;

      // class constructor:
      function QXmlStreamAttributes() {
        

        // should be QXmlStreamAttributes_BaseJs.call(this, engine):
        //QXmlStreamAttributes.prototype = new QXmlStreamAttributes_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlStreamAttributes.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QXmlStreamAttributes);
            //}
          }
          else {
            qWarning("QXmlStreamAttributes.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlStreamAttributes_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QXmlStreamAttributes);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlStreamAttributes);
  }

  
  else {
    
        print("QXmlStreamAttributes(): wrong number / type of arguments");
      
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

      //QXmlStreamAttributes.prototype = new QXmlStreamAttributes_BaseJs(engine);
      //QXmlStreamAttributes.prototype = new QXmlStreamAttributes_Wrapper(engine);
      QXmlStreamAttributes.prototype = new Object();

      QXmlStreamAttributes.prototype.toString = function() {
          //return "QXmlStreamAttributes [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlStreamAttributes [JS]";
        };
      QXmlStreamAttributes.getObjectType = function() {
        return RJSType_QXmlStreamAttributes.getIdStatic();
      };

      QXmlStreamAttributes.prototype.getObjectType = function() {
        return RJSType_QXmlStreamAttributes.getIdStatic();
      };

      QXmlStreamAttributes.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlStreamAttributes.getIdStatic()) {
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
      //QXmlStreamAttributes.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlStreamAttributes.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    