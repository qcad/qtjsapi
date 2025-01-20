
      // auto generated
      //var self;

      // class constructor:
      function QPinchGesture() {
        

        // should be QPinchGesture_BaseJs.call(this, engine):
        //QPinchGesture.prototype = new QPinchGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPinchGesture.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPinchGesture);
                
            //}
          }
          else {
            qWarning("QPinchGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPinchGesture_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPinchGesture);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPinchGesture);
  }

  
  else {
    
        print("QPinchGesture(): wrong number / type of arguments");
      
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

      //QPinchGesture.prototype = new QPinchGesture_BaseJs(engine);
      //QPinchGesture.prototype = new QPinchGesture_Wrapper(engine);
      QPinchGesture.prototype = new Object();

      QPinchGesture.prototype.toString = function() {
          //return "QPinchGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPinchGesture [JS]";
        };
      QPinchGesture.getObjectType = function() {
        return RJSType_QPinchGesture.getIdStatic();
      };

      QPinchGesture.prototype.getObjectType = function() {
        return RJSType_QPinchGesture.getIdStatic();
      };

      QPinchGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPinchGesture.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGesture.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QPinchGesture.ScaleFactorChanged = QPinchGesture_Wrapper.ScaleFactorChanged;
QPinchGesture.RotationAngleChanged = QPinchGesture_Wrapper.RotationAngleChanged;
QPinchGesture.CenterPointChanged = QPinchGesture_Wrapper.CenterPointChanged;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPinchGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPinchGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      