
      // auto generated
      //var self;

      // class constructor:
      function QIntValidator() {
        

        // should be QIntValidator_BaseJs.call(this, engine):
        //QIntValidator.prototype = new QIntValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QIntValidator_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QIntValidator);
            //}
          }
          else {
            qWarning("QIntValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QIntValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QIntValidator);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QIntValidator);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QIntValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QIntValidator);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QIntValidator);
  }

  
  else {
    
        print("QIntValidator(): wrong number / type of arguments");
      
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
            
    this["bottomChanged(int)"] = Object.getPrototypeOf(this).bottomChanged;
  
    this["topChanged(int)"] = Object.getPrototypeOf(this).topChanged;
  
          }
        }
      }

      //QIntValidator.prototype = new QIntValidator_BaseJs(engine);
      //QIntValidator.prototype = new QIntValidator_Wrapper(engine);
      QIntValidator.prototype = new Object();

      QIntValidator.prototype.toString = function() {
          //return "QIntValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QIntValidator [JS]";
        };
      QIntValidator.getObjectType = function() {
        
            return RJSType.QIntValidator_Type;
          
      };

      QIntValidator.prototype.getObjectType = function() {
        
            return RJSType.QIntValidator_Type;
          
      };

      QIntValidator.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QIntValidator_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QValidator_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QIntValidator_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QValidator_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: State
QIntValidator.Invalid = QIntValidator_Wrapper.Invalid;
QIntValidator.Intermediate = QIntValidator_Wrapper.Intermediate;
QIntValidator.Acceptable = QIntValidator_Wrapper.Acceptable;


      // functions:
      

      // static functions:
      

        // static function 
        QIntValidator.tr = function() 
          
        {
          //print("JS: QIntValidator.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QIntValidator_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QIntValidator);
  }

  
  else {
    
        print("QIntValidator.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QIntValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QIntValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    