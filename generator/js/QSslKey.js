
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QSslKey.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QSslKey.prototype.swap = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QSslKey.prototype.isNull = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
    
        // function 
        QSslKey.prototype.clear = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QSslKey.prototype.length = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.length");
          
              return this.__PROXY__.length(...args);
            
        };
    
        // function 
        QSslKey.prototype.type = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QSslKey.prototype.algorithm = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.algorithm");
          
              return this.__PROXY__.algorithm(...args);
            
        };
    
        // function 
        QSslKey.prototype.toPem = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.toPem");
          
              return this.__PROXY__.toPem(...args);
            
        };
    
        // function 
        QSslKey.prototype.toDer = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.toDer");
          
              return this.__PROXY__.toDer(...args);
            
        };
    
        // function 
        QSslKey.prototype.equals = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
    
        // function 
        QSslKey.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QSslKey.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
    

      // static functions:
      QSslKey.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslKey.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslKey.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QSslKey.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      