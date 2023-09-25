
      // auto generated
      //var self;

      // class constructor:
      function QSwipeGesture() {
        

        // should be QSwipeGesture_BaseJs.call(this, engine):
        //QSwipeGesture.prototype = new QSwipeGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSwipeGesture.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSwipeGesture);
            //}
          }
          else {
            qWarning("QSwipeGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSwipeGesture_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSwipeGesture);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSwipeGesture);
  }

  
  else {
    
        print("QSwipeGesture(): wrong number / type of arguments");
      
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

      //QSwipeGesture.prototype = new QSwipeGesture_BaseJs(engine);
      //QSwipeGesture.prototype = new QSwipeGesture_Wrapper(engine);
      QSwipeGesture.prototype = new Object();

      QSwipeGesture.prototype.toString = function() {
          //return "QSwipeGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSwipeGesture [JS]";
        };
      QSwipeGesture.getObjectType = function() {
        return RJSType_QSwipeGesture.getIdStatic();
      };

      QSwipeGesture.prototype.getObjectType = function() {
        return RJSType_QSwipeGesture.getIdStatic();
      };

      QSwipeGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSwipeGesture.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGesture.getIdStatic()) {
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
      //QSwipeGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSwipeGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    