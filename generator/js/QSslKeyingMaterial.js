
      // auto generated
      //var self;

      // class constructor:
      function QSslKeyingMaterial() {
        

        // should be QSslKeyingMaterial_BaseJs.call(this, engine):
        //QSslKeyingMaterial.prototype = new QSslKeyingMaterial_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslKeyingMaterial.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslKeyingMaterial);
                
            //}
          }
          else {
            qWarning("QSslKeyingMaterial.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QSslKeyingMaterial_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKeyingMaterial);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKeyingMaterial);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSslKeyingMaterial_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKeyingMaterial);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKeyingMaterial);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslKeyingMaterial_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslKeyingMaterial);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslKeyingMaterial);
  }

  
  else {
    
        print("QSslKeyingMaterial(): wrong number / type of arguments");
      
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

      //QSslKeyingMaterial.prototype = new QSslKeyingMaterial_BaseJs(engine);
      //QSslKeyingMaterial.prototype = new QSslKeyingMaterial_Wrapper(engine);
      QSslKeyingMaterial.prototype = new Object();

      QSslKeyingMaterial.prototype.toString = function() {
          //return "QSslKeyingMaterial [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslKeyingMaterial [JS]";
        };
      QSslKeyingMaterial.getObjectType = function() {
        return RJSType_QSslKeyingMaterial.getIdStatic();
      };

      QSslKeyingMaterial.prototype.getObjectType = function() {
        return RJSType_QSslKeyingMaterial.getIdStatic();
      };

      QSslKeyingMaterial.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslKeyingMaterial.getIdStatic()) {
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
      //QSslKeyingMaterial.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslKeyingMaterial.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      