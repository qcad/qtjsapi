
      // auto generated
      //var self;

      // class constructor:
      function QSize() {
        

        // should be QSize_BaseJs.call(this, engine):
        //QSize.prototype = new QSize_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSize.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSize);
            //}
          }
          else {
            qWarning("QSize.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSize_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSize);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSize);
  }

  
  else {
    
        print("QSize(): wrong number / type of arguments");
      
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

      //QSize.prototype = new QSize_BaseJs(engine);
      //QSize.prototype = new QSize_Wrapper(engine);
      QSize.prototype = new Object();

      QSize.prototype.toString = function() {
          //return "QSize [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSize [JS]";
        };
      QSize.getObjectType = function() {
        return RJSType_QSize.getIdStatic();
      };

      QSize.prototype.getObjectType = function() {
        return RJSType_QSize.getIdStatic();
      };

      QSize.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSize.getIdStatic()) {
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
      //QSize.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSize.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    