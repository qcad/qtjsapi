
      // auto generated
      //var self;

      // class constructor:
      function QDoubleValidator() {
        

        // should be QDoubleValidator_BaseJs.call(this, engine):
        //QDoubleValidator.prototype = new QDoubleValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDoubleValidator.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QDoubleValidator);
                
            //}
          }
          else {
            qWarning("QDoubleValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QDoubleValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDoubleValidator);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDoubleValidator);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QDoubleValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QDoubleValidator);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDoubleValidator);
  }

  
  else {
    
        print("QDoubleValidator(): wrong number / type of arguments");
      
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
              
    this["bottomChanged(double)"] = Object.getPrototypeOf(this).bottomChanged;
  
    this["topChanged(double)"] = Object.getPrototypeOf(this).topChanged;
  
    this["decimalsChanged(int)"] = Object.getPrototypeOf(this).decimalsChanged;
  
    this["notationChanged(QDoubleValidator::Notation)"] = Object.getPrototypeOf(this).notationChanged;
  
            }
          
        }

        

      }

      //QDoubleValidator.prototype = new QDoubleValidator_BaseJs(engine);
      //QDoubleValidator.prototype = new QDoubleValidator_Wrapper(engine);
      QDoubleValidator.prototype = new Object();

      QDoubleValidator.prototype.toString = function() {
          //return "QDoubleValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDoubleValidator [JS]";
        };
      QDoubleValidator.getObjectType = function() {
        return RJSType_QDoubleValidator.getIdStatic();
      };

      QDoubleValidator.prototype.getObjectType = function() {
        return RJSType_QDoubleValidator.getIdStatic();
      };

      QDoubleValidator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDoubleValidator.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QValidator.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: State
QDoubleValidator.Invalid = QDoubleValidator_Wrapper.Invalid;
QDoubleValidator.Intermediate = QDoubleValidator_Wrapper.Intermediate;
QDoubleValidator.Acceptable = QDoubleValidator_Wrapper.Acceptable;

  // enum: Notation
QDoubleValidator.StandardNotation = QDoubleValidator_Wrapper.StandardNotation;
QDoubleValidator.ScientificNotation = QDoubleValidator_Wrapper.ScientificNotation;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDoubleValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDoubleValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      