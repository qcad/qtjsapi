
      // auto generated
      //var self;

      // class constructor:
      function QSslPreSharedKeyAuthenticator() {
        

        // should be QSslPreSharedKeyAuthenticator_BaseJs.call(this, engine):
        //QSslPreSharedKeyAuthenticator.prototype = new QSslPreSharedKeyAuthenticator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslPreSharedKeyAuthenticator.getIdStatic()))) {

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
            qWarning("QSslPreSharedKeyAuthenticator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslPreSharedKeyAuthenticator_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslPreSharedKeyAuthenticator);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslPreSharedKeyAuthenticator_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslPreSharedKeyAuthenticator);
  }

  
  else {
    
        print("QSslPreSharedKeyAuthenticator(): wrong number / type of arguments");
      
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

      //QSslPreSharedKeyAuthenticator.prototype = new QSslPreSharedKeyAuthenticator_BaseJs(engine);
      //QSslPreSharedKeyAuthenticator.prototype = new QSslPreSharedKeyAuthenticator_Wrapper(engine);
      QSslPreSharedKeyAuthenticator.prototype = new Object();


      QSslPreSharedKeyAuthenticator.prototype.toString = function() {
          //return "QSslPreSharedKeyAuthenticator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslPreSharedKeyAuthenticator [JS]";
        };
      QSslPreSharedKeyAuthenticator.getObjectType = function() {
        return RJSType_QSslPreSharedKeyAuthenticator.getIdStatic();
      };

      QSslPreSharedKeyAuthenticator.prototype.getObjectType = function() {
        return RJSType_QSslPreSharedKeyAuthenticator.getIdStatic();
      };

      QSslPreSharedKeyAuthenticator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslPreSharedKeyAuthenticator.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSslPreSharedKeyAuthenticator.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.swap = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.identityHint = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.identityHint");
          
              return this.__PROXY__.identityHint(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.setIdentity = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.setIdentity");
          
              return this.__PROXY__.setIdentity(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.identity = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.identity");
          
              return this.__PROXY__.identity(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.maximumIdentityLength = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.maximumIdentityLength");
          
              return this.__PROXY__.maximumIdentityLength(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.setPreSharedKey = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.setPreSharedKey");
          
              return this.__PROXY__.setPreSharedKey(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.preSharedKey = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.preSharedKey");
          
              return this.__PROXY__.preSharedKey(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.maximumPreSharedKeyLength = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.maximumPreSharedKeyLength");
          
              return this.__PROXY__.maximumPreSharedKeyLength(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.isEqual = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.isEqual");
          
              return this.__PROXY__.isEqual(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.equals = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
    
        // function 
        QSslPreSharedKeyAuthenticator.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
    

      // static functions:
      

        // static function 
        QSslPreSharedKeyAuthenticator.equals = function() 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.equals");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSslPreSharedKeyAuthenticator_WrapperSingletonInstance.equals(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslPreSharedKeyAuthenticator);
  }

  
  else {
    
        print("QSslPreSharedKeyAuthenticator.equals(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslPreSharedKeyAuthenticator.operator_not_assign = function() 
          
        {
          //print("JS: QSslPreSharedKeyAuthenticator.operator_not_assign");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSslPreSharedKeyAuthenticator_WrapperSingletonInstance.operator_not_assign(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslPreSharedKeyAuthenticator);
  }

  
  else {
    
        print("QSslPreSharedKeyAuthenticator.operator_not_assign(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      QSslPreSharedKeyAuthenticator.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslPreSharedKeyAuthenticator.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslPreSharedKeyAuthenticator.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslPreSharedKeyAuthenticator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslPreSharedKeyAuthenticator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSslPreSharedKeyAuthenticator.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      