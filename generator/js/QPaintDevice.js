
      // auto generated
      //var self;

      // class constructor:
      function QPaintDevice() {
        

        // should be QPaintDevice_BaseJs.call(this, engine):
        //QPaintDevice.prototype = new QPaintDevice_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QPaintDevice.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPaintDevice);
            //}
          }
          else {
            qWarning("QPaintDevice.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QPaintDevice.js: No constructor found for class QPaintDevice");
            
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

      //QPaintDevice.prototype = new QPaintDevice_BaseJs(engine);
      //QPaintDevice.prototype = new QPaintDevice_Wrapper(engine);
      QPaintDevice.prototype = new Object();

      QPaintDevice.prototype.toString = function() {
          //return "QPaintDevice [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPaintDevice [JS]";
        };
      QPaintDevice.getObjectType = function() {
        
            return RJSType_QPaintDevice.getIdStatic();
          
      };

      QPaintDevice.prototype.getObjectType = function() {
        
            return RJSType_QPaintDevice.getIdStatic();
          
      };

      QPaintDevice.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QPaintDevice.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QPaintDevice.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QPaintDevice.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPaintDevice_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QPaintDevice);
  }

  
  else {
    
        print("QPaintDevice.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPaintDevice.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPaintDevice.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    