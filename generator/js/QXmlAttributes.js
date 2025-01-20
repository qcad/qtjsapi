
      // auto generated
      //var self;

      // class constructor:
      function QXmlAttributes() {
        

        // should be QXmlAttributes_BaseJs.call(this, engine):
        //QXmlAttributes.prototype = new QXmlAttributes_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QXmlAttributes.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QXmlAttributes);
                
            //}
          }
          else {
            qWarning("QXmlAttributes.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlAttributes_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QXmlAttributes);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlAttributes);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QXmlAttributes_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QXmlAttributes);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlAttributes);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QXmlAttributes_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QXmlAttributes);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QXmlAttributes);
  }

  
  else {
    
        print("QXmlAttributes(): wrong number / type of arguments");
      
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

      //QXmlAttributes.prototype = new QXmlAttributes_BaseJs(engine);
      //QXmlAttributes.prototype = new QXmlAttributes_Wrapper(engine);
      QXmlAttributes.prototype = new Object();

      QXmlAttributes.prototype.toString = function() {
          //return "QXmlAttributes [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QXmlAttributes [JS]";
        };
      QXmlAttributes.getObjectType = function() {
        return RJSType_QXmlAttributes.getIdStatic();
      };

      QXmlAttributes.prototype.getObjectType = function() {
        return RJSType_QXmlAttributes.getIdStatic();
      };

      QXmlAttributes.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QXmlAttributes.getIdStatic()) {
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
      //QXmlAttributes.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QXmlAttributes.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      