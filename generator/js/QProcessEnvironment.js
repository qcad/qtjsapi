
      // auto generated
      //var self;

      // class constructor:
      function QProcessEnvironment() {
        

        // should be QProcessEnvironment_BaseJs.call(this, engine):
        //QProcessEnvironment.prototype = new QProcessEnvironment_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QProcessEnvironment.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QProcessEnvironment);
                
            //}
          }
          else {
            qWarning("QProcessEnvironment.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QProcessEnvironment_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QProcessEnvironment);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QProcessEnvironment);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QProcessEnvironment_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QProcessEnvironment);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QProcessEnvironment);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QProcessEnvironment_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QProcessEnvironment);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QProcessEnvironment);
  }

  
  else {
    
        print("QProcessEnvironment(): wrong number / type of arguments");
      
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

      //QProcessEnvironment.prototype = new QProcessEnvironment_BaseJs(engine);
      //QProcessEnvironment.prototype = new QProcessEnvironment_Wrapper(engine);
      QProcessEnvironment.prototype = new Object();

      QProcessEnvironment.prototype.toString = function() {
          //return "QProcessEnvironment [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QProcessEnvironment [JS]";
        };
      QProcessEnvironment.getObjectType = function() {
        return RJSType_QProcessEnvironment.getIdStatic();
      };

      QProcessEnvironment.prototype.getObjectType = function() {
        return RJSType_QProcessEnvironment.getIdStatic();
      };

      QProcessEnvironment.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QProcessEnvironment.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Initialization
QProcessEnvironment.InheritFromParent = QProcessEnvironment_Wrapper.InheritFromParent;


      // functions:
      

      // static functions:
      

        // static function 
        QProcessEnvironment.systemEnvironment = function() 
          
        {
          //print("JS: QProcessEnvironment.systemEnvironment");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QProcessEnvironment_WrapperSingletonInstance.systemEnvironment(
                  
                );
              

        //copyProperties(this, wrapper, QProcessEnvironment);
  }

  
  else {
    
        print("QProcessEnvironment.systemEnvironment(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QProcessEnvironment.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QProcessEnvironment.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      