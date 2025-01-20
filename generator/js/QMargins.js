
      // auto generated
      //var self;

      // class constructor:
      function QMargins() {
        

        // should be QMargins_BaseJs.call(this, engine):
        //QMargins.prototype = new QMargins_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMargins.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QMargins);
                
            //}
          }
          else {
            qWarning("QMargins.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QMargins_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QMargins);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMargins);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMargins_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QMargins);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMargins);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMargins_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QMargins);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMargins);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMargins_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QMargins);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMargins);
  }

  
  else {
    
        print("QMargins(): wrong number / type of arguments");
      
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

      //QMargins.prototype = new QMargins_BaseJs(engine);
      //QMargins.prototype = new QMargins_Wrapper(engine);
      QMargins.prototype = new Object();

      QMargins.prototype.toString = function() {
          //return "QMargins [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMargins [JS]";
        };
      QMargins.getObjectType = function() {
        return RJSType_QMargins.getIdStatic();
      };

      QMargins.prototype.getObjectType = function() {
        return RJSType_QMargins.getIdStatic();
      };

      QMargins.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMargins.getIdStatic()) {
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
      //QMargins.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMargins.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      