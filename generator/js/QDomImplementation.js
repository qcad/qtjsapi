
      // auto generated
      //var self;

      // class constructor:
      function QDomImplementation() {
        

        // should be QDomImplementation_BaseJs.call(this, engine):
        //QDomImplementation.prototype = new QDomImplementation_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDomImplementation.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QDomImplementation);
                
            //}
          }
          else {
            qWarning("QDomImplementation.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDomImplementation_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDomImplementation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomImplementation);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDomImplementation_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDomImplementation);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDomImplementation);
  }

  
  else {
    
        print("QDomImplementation(): wrong number / type of arguments");
      
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

      //QDomImplementation.prototype = new QDomImplementation_BaseJs(engine);
      //QDomImplementation.prototype = new QDomImplementation_Wrapper(engine);
      QDomImplementation.prototype = new Object();

      QDomImplementation.prototype.toString = function() {
          //return "QDomImplementation [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDomImplementation [JS]";
        };
      QDomImplementation.getObjectType = function() {
        return RJSType_QDomImplementation.getIdStatic();
      };

      QDomImplementation.prototype.getObjectType = function() {
        return RJSType_QDomImplementation.getIdStatic();
      };

      QDomImplementation.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDomImplementation.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: InvalidDataPolicy
QDomImplementation.AcceptInvalidChars = QDomImplementation_Wrapper.AcceptInvalidChars;
QDomImplementation.DropInvalidChars = QDomImplementation_Wrapper.DropInvalidChars;
QDomImplementation.ReturnNullNode = QDomImplementation_Wrapper.ReturnNullNode;


      // functions:
      

      // static functions:
      

        // static function 
        QDomImplementation.invalidDataPolicy = function() 
          
        {
          //print("JS: QDomImplementation.invalidDataPolicy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDomImplementation_WrapperSingletonInstance.invalidDataPolicy(
                  
                );
              

        //copyProperties(this, wrapper, QDomImplementation);
  }

  
  else {
    
        print("QDomImplementation.invalidDataPolicy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDomImplementation.setInvalidDataPolicy = function() 
          
        {
          //print("JS: QDomImplementation.setInvalidDataPolicy");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDomImplementation_WrapperSingletonInstance.setInvalidDataPolicy(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDomImplementation);
  }

  
  else {
    
        print("QDomImplementation.setInvalidDataPolicy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDomImplementation.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDomImplementation.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      