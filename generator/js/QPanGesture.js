
      // auto generated
      //var self;

      // class constructor:
      function QPanGesture() {
        

        // should be QPanGesture_BaseJs.call(this, engine):
        //QPanGesture.prototype = new QPanGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPanGesture.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPanGesture);
                
            //}
          }
          else {
            qWarning("QPanGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPanGesture_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPanGesture);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPanGesture);
  }

  
  else {
    
        print("QPanGesture(): wrong number / type of arguments");
      
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

      //QPanGesture.prototype = new QPanGesture_BaseJs(engine);
      //QPanGesture.prototype = new QPanGesture_Wrapper(engine);
      QPanGesture.prototype = new Object();

      QPanGesture.prototype.toString = function() {
          //return "QPanGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPanGesture [JS]";
        };
      QPanGesture.getObjectType = function() {
        return RJSType_QPanGesture.getIdStatic();
      };

      QPanGesture.prototype.getObjectType = function() {
        return RJSType_QPanGesture.getIdStatic();
      };

      QPanGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPanGesture.getIdStatic()) {
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
      //QPanGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPanGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      