
      // auto generated
      //var self;

      // class constructor:
      function QPainterPathStroker() {
        

        // should be QPainterPathStroker_BaseJs.call(this, engine):
        //QPainterPathStroker.prototype = new QPainterPathStroker_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QPainterPathStroker.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPainterPathStroker);
            //}
          }
          else {
            qWarning("QPainterPathStroker.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPainterPathStroker_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPainterPathStroker);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPainterPathStroker);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPainterPathStroker_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPainterPathStroker);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPainterPathStroker);
  }

  
  else {
    
        print("QPainterPathStroker(): wrong number / type of arguments");
      
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

      //QPainterPathStroker.prototype = new QPainterPathStroker_BaseJs(engine);
      //QPainterPathStroker.prototype = new QPainterPathStroker_Wrapper(engine);
      QPainterPathStroker.prototype = new Object();

      QPainterPathStroker.prototype.toString = function() {
          //return "QPainterPathStroker [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPainterPathStroker [JS]";
        };
      QPainterPathStroker.getObjectType = function() {
        
            return RJSType_QPainterPathStroker.getIdStatic();
          
      };

      QPainterPathStroker.prototype.getObjectType = function() {
        
            return RJSType_QPainterPathStroker.getIdStatic();
          
      };

      QPainterPathStroker.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QPainterPathStroker.getIdStatic()) {
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
      //QPainterPathStroker.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPainterPathStroker.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    