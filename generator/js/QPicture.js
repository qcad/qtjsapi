
      // auto generated
      //var self;

      // class constructor:
      function QPicture() {
        

        // should be QPicture_BaseJs.call(this, engine):
        //QPicture.prototype = new QPicture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QPicture_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPicture);
            //}
          }
          else {
            qWarning("QPicture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPicture_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPicture);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPicture);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPicture_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPicture);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPicture);
  }

  
  else {
    
        print("QPicture(): wrong number / type of arguments");
      
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

      //QPicture.prototype = new QPicture_BaseJs(engine);
      //QPicture.prototype = new QPicture_Wrapper(engine);
      QPicture.prototype = new Object();

      QPicture.prototype.toString = function() {
          //return "QPicture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPicture [JS]";
        };
      QPicture.getObjectType = function() {
        
            return RJSType.QPicture_Type;
          
      };

      QPicture.prototype.getObjectType = function() {
        
            return RJSType.QPicture_Type;
          
      };

      QPicture.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QPicture_Type:
              return true;
          
        case RJSType.QPaintDevice_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QPicture_Type, 
          
            RJSType.QPaintDevice_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QPicture.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QPicture.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPicture_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QPicture);
  }

  
  else {
    
        print("QPicture.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPicture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPicture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    