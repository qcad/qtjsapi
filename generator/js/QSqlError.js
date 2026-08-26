
      // auto generated
      //var self;

      // class constructor:
      function QSqlError() {
        

        // should be QSqlError_BaseJs.call(this, engine):
        //QSqlError.prototype = new QSqlError_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSqlError.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSqlError);
                
            //}
          }
          else {
            qWarning("QSqlError.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSqlError_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSqlError);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSqlError);
  }

  
  else {
    
        print("QSqlError(): wrong number / type of arguments");
      
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

      //QSqlError.prototype = new QSqlError_BaseJs(engine);
      //QSqlError.prototype = new QSqlError_Wrapper(engine);
      QSqlError.prototype = new Object();

      QSqlError.prototype.toString = function() {
          //return "QSqlError [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSqlError [JS]";
        };
      QSqlError.getObjectType = function() {
        return RJSType_QSqlError.getIdStatic();
      };

      QSqlError.prototype.getObjectType = function() {
        return RJSType_QSqlError.getIdStatic();
      };

      QSqlError.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSqlError.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ErrorType
QSqlError.NoError = QSqlError_Wrapper.NoError;
QSqlError.ConnectionError = QSqlError_Wrapper.ConnectionError;
QSqlError.StatementError = QSqlError_Wrapper.StatementError;
QSqlError.TransactionError = QSqlError_Wrapper.TransactionError;
QSqlError.UnknownError = QSqlError_Wrapper.UnknownError;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSqlError.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSqlError.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      