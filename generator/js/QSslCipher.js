
      // auto generated
      //var self;

      // class constructor:
      function QSslCipher() {
        

        // should be QSslCipher_BaseJs.call(this, engine):
        //QSslCipher.prototype = new QSslCipher_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslCipher.getIdStatic()))) {

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
            qWarning("QSslCipher.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSslCipher_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslCipher);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslCipher_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslCipher);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslCipher_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslCipher);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslCipher_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslCipher);
  }

  
  else {
    
        print("QSslCipher(): wrong number / type of arguments");
      
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

      //QSslCipher.prototype = new QSslCipher_BaseJs(engine);
      //QSslCipher.prototype = new QSslCipher_Wrapper(engine);
      QSslCipher.prototype = new Object();


      QSslCipher.prototype.toString = function() {
          //return "QSslCipher [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslCipher [JS]";
        };
      QSslCipher.getObjectType = function() {
        return RJSType_QSslCipher.getIdStatic();
      };

      QSslCipher.prototype.getObjectType = function() {
        return RJSType_QSslCipher.getIdStatic();
      };

      QSslCipher.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslCipher.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSslCipher.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QSslCipher.prototype.swap = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QSslCipher.prototype.equals = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
    
        // function 
        QSslCipher.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
    
        // function 
        QSslCipher.prototype.isNull = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
    
        // function 
        QSslCipher.prototype.name = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.name");
          
              return this.__PROXY__.name(...args);
            
        };
    
        // function 
        QSslCipher.prototype.supportedBits = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.supportedBits");
          
              return this.__PROXY__.supportedBits(...args);
            
        };
    
        // function 
        QSslCipher.prototype.usedBits = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.usedBits");
          
              return this.__PROXY__.usedBits(...args);
            
        };
    
        // function 
        QSslCipher.prototype.keyExchangeMethod = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.keyExchangeMethod");
          
              return this.__PROXY__.keyExchangeMethod(...args);
            
        };
    
        // function 
        QSslCipher.prototype.authenticationMethod = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.authenticationMethod");
          
              return this.__PROXY__.authenticationMethod(...args);
            
        };
    
        // function 
        QSslCipher.prototype.encryptionMethod = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.encryptionMethod");
          
              return this.__PROXY__.encryptionMethod(...args);
            
        };
    
        // function 
        QSslCipher.prototype.protocolString = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.protocolString");
          
              return this.__PROXY__.protocolString(...args);
            
        };
    
        // function 
        QSslCipher.prototype.protocol = function(...args) 
          
        {
          //print("JS: QSslCipher.prototype.protocol");
          
              return this.__PROXY__.protocol(...args);
            
        };
    

      // static functions:
      QSslCipher.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslCipher.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslCipher.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslCipher.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslCipher.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSslCipher.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      