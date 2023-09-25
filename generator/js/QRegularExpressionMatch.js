
      // auto generated
      //var self;

      // class constructor:
      function QRegularExpressionMatch() {
        

        // should be QRegularExpressionMatch_BaseJs.call(this, engine):
        //QRegularExpressionMatch.prototype = new QRegularExpressionMatch_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRegularExpressionMatch.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QRegularExpressionMatch);
            //}
          }
          else {
            qWarning("QRegularExpressionMatch.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRegularExpressionMatch_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRegularExpressionMatch);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpressionMatch);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QRegularExpressionMatch_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRegularExpressionMatch);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpressionMatch);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QRegularExpressionMatch_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRegularExpressionMatch);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRegularExpressionMatch);
  }

  
  else {
    
        print("QRegularExpressionMatch(): wrong number / type of arguments");
      
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

      //QRegularExpressionMatch.prototype = new QRegularExpressionMatch_BaseJs(engine);
      //QRegularExpressionMatch.prototype = new QRegularExpressionMatch_Wrapper(engine);
      QRegularExpressionMatch.prototype = new Object();

      QRegularExpressionMatch.prototype.toString = function() {
          //return "QRegularExpressionMatch [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRegularExpressionMatch [JS]";
        };
      QRegularExpressionMatch.getObjectType = function() {
        return RJSType_QRegularExpressionMatch.getIdStatic();
      };

      QRegularExpressionMatch.prototype.getObjectType = function() {
        return RJSType_QRegularExpressionMatch.getIdStatic();
      };

      QRegularExpressionMatch.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRegularExpressionMatch.getIdStatic()) {
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
      //QRegularExpressionMatch.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRegularExpressionMatch.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    