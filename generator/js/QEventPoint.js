
      // auto generated
      //var self;

      // class constructor:
      function QEventPoint() {
        

        // should be QEventPoint_BaseJs.call(this, engine):
        //QEventPoint.prototype = new QEventPoint_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QEventPoint.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QEventPoint);
            //}
          }
          else {
            qWarning("QEventPoint.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEventPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEventPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEventPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QEventPoint_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEventPoint);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEventPoint);
  }

  
  else {
    
        print("QEventPoint(): wrong number / type of arguments");
      
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

      //QEventPoint.prototype = new QEventPoint_BaseJs(engine);
      //QEventPoint.prototype = new QEventPoint_Wrapper(engine);
      QEventPoint.prototype = new Object();

      QEventPoint.prototype.toString = function() {
          //return "QEventPoint [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QEventPoint [JS]";
        };
      QEventPoint.getObjectType = function() {
        return RJSType_QEventPoint.getIdStatic();
      };

      QEventPoint.prototype.getObjectType = function() {
        return RJSType_QEventPoint.getIdStatic();
      };

      QEventPoint.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QEventPoint.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: State
QEventPoint.Unknown = QEventPoint_Wrapper.Unknown;
QEventPoint.Stationary = QEventPoint_Wrapper.Stationary;
QEventPoint.Pressed = QEventPoint_Wrapper.Pressed;
QEventPoint.Updated = QEventPoint_Wrapper.Updated;
QEventPoint.Released = QEventPoint_Wrapper.Released;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QEventPoint.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QEventPoint.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    