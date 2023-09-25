
      // auto generated
      //var self;

      // class constructor:
      function QTextLength() {
        

        // should be QTextLength_BaseJs.call(this, engine):
        //QTextLength.prototype = new QTextLength_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextLength.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextLength);
            //}
          }
          else {
            qWarning("QTextLength.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QTextLength_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextLength);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextLength);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextLength_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextLength);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextLength);
  }

  
  else {
    
        print("QTextLength(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //QTextLength.prototype = new QTextLength_BaseJs(engine);
      //QTextLength.prototype = new QTextLength_Wrapper(engine);
      QTextLength.prototype = new Object();

      QTextLength.prototype.toString = function() {
          //return "QTextLength [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextLength [JS]";
        };
      QTextLength.getObjectType = function() {
        return RJSType_QTextLength.getIdStatic();
      };

      QTextLength.prototype.getObjectType = function() {
        return RJSType_QTextLength.getIdStatic();
      };

      QTextLength.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextLength.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Type
QTextLength.VariableLength = QTextLength_Wrapper.VariableLength;
QTextLength.FixedLength = QTextLength_Wrapper.FixedLength;
QTextLength.PercentageLength = QTextLength_Wrapper.PercentageLength;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextLength.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextLength.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    