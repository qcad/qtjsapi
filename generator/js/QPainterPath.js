
      // auto generated
      //var self;

      // class constructor:
      function QPainterPath() {
        

        // should be QPainterPath_BaseJs.call(this, engine):
        //QPainterPath.prototype = new QPainterPath_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QPainterPath_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPainterPath);
            //}
          }
          else {
            qWarning("QPainterPath.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPainterPath_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPainterPath);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPainterPath);
  }

  
  else {
    
        print("QPainterPath(): wrong number / type of arguments");
      
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

      //QPainterPath.prototype = new QPainterPath_BaseJs(engine);
      //QPainterPath.prototype = new QPainterPath_Wrapper(engine);
      QPainterPath.prototype = new Object();

      QPainterPath.prototype.toString = function() {
          //return "QPainterPath [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPainterPath [JS]";
        };
      QPainterPath.getObjectType = function() {
        
            return RJSType.QPainterPath_Type;
          
      };

      QPainterPath.prototype.getObjectType = function() {
        
            return RJSType.QPainterPath_Type;
          
      };

      QPainterPath.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QPainterPath_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QPainterPath_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: ElementType
QPainterPath.MoveToElement = QPainterPath_Wrapper.MoveToElement;
QPainterPath.LineToElement = QPainterPath_Wrapper.LineToElement;
QPainterPath.CurveToElement = QPainterPath_Wrapper.CurveToElement;
QPainterPath.CurveToDataElement = QPainterPath_Wrapper.CurveToDataElement;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPainterPath.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPainterPath.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    