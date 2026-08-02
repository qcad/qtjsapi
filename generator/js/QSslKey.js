
      // auto generated
      //var self;

      // class constructor:
      function QSslKey() {
        

        // should be QSslKey_BaseJs.call(this, engine):
        //QSslKey.prototype = new QSslKey_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslKey.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslKey);
                
            //}
          }
          else {
            qWarning("QSslKey.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QSslKey_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKey);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKey);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QSslKey_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKey);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKey);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslKey_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKey);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKey);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslKey_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKey);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKey);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslKey_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKey);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKey);
  }

  
  else {
    
        print("QSslKey(): wrong number / type of arguments");
      
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

      //QSslKey.prototype = new QSslKey_BaseJs(engine);
      //QSslKey.prototype = new QSslKey_Wrapper(engine);
      QSslKey.prototype = new Object();

      QSslKey.prototype.toString = function() {
          //return "QSslKey [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslKey [JS]";
        };
      QSslKey.getObjectType = function() {
        return RJSType_QSslKey.getIdStatic();
      };

      QSslKey.prototype.getObjectType = function() {
        return RJSType_QSslKey.getIdStatic();
      };

      QSslKey.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslKey.getIdStatic()) {
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
      //QSslKey.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslKey.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      