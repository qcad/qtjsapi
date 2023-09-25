
      // auto generated
      //var self;

      // class constructor:
      function QMarginsF() {
        

        // should be QMarginsF_BaseJs.call(this, engine):
        //QMarginsF.prototype = new QMarginsF_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMarginsF.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMarginsF);
            //}
          }
          else {
            qWarning("QMarginsF.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMarginsF);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMarginsF);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMarginsF);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMarginsF);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMarginsF_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMarginsF);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMarginsF);
  }

  
  else {
    
        print("QMarginsF(): wrong number / type of arguments");
      
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

      //QMarginsF.prototype = new QMarginsF_BaseJs(engine);
      //QMarginsF.prototype = new QMarginsF_Wrapper(engine);
      QMarginsF.prototype = new Object();

      QMarginsF.prototype.toString = function() {
          //return "QMarginsF [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMarginsF [JS]";
        };
      QMarginsF.getObjectType = function() {
        return RJSType_QMarginsF.getIdStatic();
      };

      QMarginsF.prototype.getObjectType = function() {
        return RJSType_QMarginsF.getIdStatic();
      };

      QMarginsF.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMarginsF.getIdStatic()) {
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
      //QMarginsF.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMarginsF.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    