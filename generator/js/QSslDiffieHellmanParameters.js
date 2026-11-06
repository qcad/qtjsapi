
      // auto generated
      //var self;

      // class constructor:
      function QSslDiffieHellmanParameters() {
        

        // should be QSslDiffieHellmanParameters_BaseJs.call(this, engine):
        //QSslDiffieHellmanParameters.prototype = new QSslDiffieHellmanParameters_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslDiffieHellmanParameters.getIdStatic()))) {

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
            qWarning("QSslDiffieHellmanParameters.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslDiffieHellmanParameters_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslDiffieHellmanParameters_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslDiffieHellmanParameters_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else {
    
        print("QSslDiffieHellmanParameters(): wrong number / type of arguments");
      
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

      //QSslDiffieHellmanParameters.prototype = new QSslDiffieHellmanParameters_BaseJs(engine);
      //QSslDiffieHellmanParameters.prototype = new QSslDiffieHellmanParameters_Wrapper(engine);
      QSslDiffieHellmanParameters.prototype = new Object();


      QSslDiffieHellmanParameters.prototype.toString = function() {
          //return "QSslDiffieHellmanParameters [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslDiffieHellmanParameters [JS]";
        };
      QSslDiffieHellmanParameters.getObjectType = function() {
        return RJSType_QSslDiffieHellmanParameters.getIdStatic();
      };

      QSslDiffieHellmanParameters.prototype.getObjectType = function() {
        return RJSType_QSslDiffieHellmanParameters.getIdStatic();
      };

      QSslDiffieHellmanParameters.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslDiffieHellmanParameters.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Error
QSslDiffieHellmanParameters.NoError = QSslDiffieHellmanParameters_Wrapper.NoError;
QSslDiffieHellmanParameters.InvalidInputDataError = QSslDiffieHellmanParameters_Wrapper.InvalidInputDataError;
QSslDiffieHellmanParameters.UnsafeParametersError = QSslDiffieHellmanParameters_Wrapper.UnsafeParametersError;


      // functions:
      
        // function 
        QSslDiffieHellmanParameters.prototype.defaultParameters = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.defaultParameters");
          
              return this.__PROXY__.defaultParameters(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.swap = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.fromEncoded = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.fromEncoded");
          
              return this.__PROXY__.fromEncoded(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.isValid = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.error = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.errorString = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.isEqual = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.isEqual");
          
              return this.__PROXY__.isEqual(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.equals = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
    
        // function 
        QSslDiffieHellmanParameters.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QSslDiffieHellmanParameters.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
    

      // static functions:
      

        // static function 
        QSslDiffieHellmanParameters.defaultParameters = function() 
          
        {
          //print("JS: QSslDiffieHellmanParameters.defaultParameters");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSslDiffieHellmanParameters_WrapperSingletonInstance.defaultParameters(
                  
                );
              

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else {
    
        print("QSslDiffieHellmanParameters.defaultParameters(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslDiffieHellmanParameters.fromEncoded = function() 
          
        {
          //print("JS: QSslDiffieHellmanParameters.fromEncoded");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QSslDiffieHellmanParameters_WrapperSingletonInstance.fromEncoded(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QSslDiffieHellmanParameters_WrapperSingletonInstance.fromEncoded(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else {
    
        print("QSslDiffieHellmanParameters.fromEncoded(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslDiffieHellmanParameters.equals = function() 
          
        {
          //print("JS: QSslDiffieHellmanParameters.equals");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSslDiffieHellmanParameters_WrapperSingletonInstance.equals(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else {
    
        print("QSslDiffieHellmanParameters.equals(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslDiffieHellmanParameters.operator_not_assign = function() 
          
        {
          //print("JS: QSslDiffieHellmanParameters.operator_not_assign");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSslDiffieHellmanParameters_WrapperSingletonInstance.operator_not_assign(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslDiffieHellmanParameters);
  }

  
  else {
    
        print("QSslDiffieHellmanParameters.operator_not_assign(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      QSslDiffieHellmanParameters.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslDiffieHellmanParameters.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslDiffieHellmanParameters.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslDiffieHellmanParameters.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslDiffieHellmanParameters.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSslDiffieHellmanParameters.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      