
      // auto generated
      //var self;

      // class constructor:
      function QValidator() {
        

        // should be QValidator_BaseJs.call(this, engine):
        //QValidator.prototype = new QValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QValidator_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QValidator);
            //}
          }
          else {
            qWarning("QValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QValidator.js: No constructor found for class QValidator");
            
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

      //QValidator.prototype = new QValidator_BaseJs(engine);
      //QValidator.prototype = new QValidator_Wrapper(engine);
      QValidator.prototype = new Object();

      QValidator.prototype.toString = function() {
          //return "QValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QValidator [JS]";
        };
      QValidator.getObjectType = function() {
        
            return RJSType.QValidator_Type;
          
      };

      QValidator.prototype.getObjectType = function() {
        
            return RJSType.QValidator_Type;
          
      };

      QValidator.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QValidator_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QValidator_Type, 
          
            RJSType.QObject_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: State
QValidator.Invalid = QValidator_Wrapper.Invalid;
QValidator.Intermediate = QValidator_Wrapper.Intermediate;
QValidator.Acceptable = QValidator_Wrapper.Acceptable;


      // functions:
      

      // static functions:
      

        // static function 
        QValidator.tr = function() 
          
        {
          //print("JS: QValidator.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QValidator_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QValidator);
  }

  
  else {
    
        print("QValidator.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    