
      // auto generated
      //var self;

      // class constructor:
      function QRegularExpressionValidator() {
        

        // should be QRegularExpressionValidator_BaseJs.call(this, engine):
        //QRegularExpressionValidator.prototype = new QRegularExpressionValidator_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRegularExpressionValidator.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QRegularExpressionValidator);
                
            //}
          }
          else {
            qWarning("QRegularExpressionValidator.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QRegularExpressionValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QRegularExpressionValidator);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpressionValidator);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QRegularExpressionValidator_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QRegularExpressionValidator);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpressionValidator);
  }

  
  else {
    
        print("QRegularExpressionValidator(): wrong number / type of arguments");
      
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
              
    this["regularExpressionChanged(QRegularExpression)"] = Object.getPrototypeOf(this).regularExpressionChanged;
  
            }
          
        }

        

      }

      //QRegularExpressionValidator.prototype = new QRegularExpressionValidator_BaseJs(engine);
      //QRegularExpressionValidator.prototype = new QRegularExpressionValidator_Wrapper(engine);
      QRegularExpressionValidator.prototype = new Object();

      QRegularExpressionValidator.prototype.toString = function() {
          //return "QRegularExpressionValidator [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRegularExpressionValidator [JS]";
        };
      QRegularExpressionValidator.getObjectType = function() {
        return RJSType_QRegularExpressionValidator.getIdStatic();
      };

      QRegularExpressionValidator.prototype.getObjectType = function() {
        return RJSType_QRegularExpressionValidator.getIdStatic();
      };

      QRegularExpressionValidator.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRegularExpressionValidator.getIdStatic()) {
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
QRegularExpressionValidator.Invalid = QRegularExpressionValidator_Wrapper.Invalid;
QRegularExpressionValidator.Intermediate = QRegularExpressionValidator_Wrapper.Intermediate;
QRegularExpressionValidator.Acceptable = QRegularExpressionValidator_Wrapper.Acceptable;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRegularExpressionValidator.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRegularExpressionValidator.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      