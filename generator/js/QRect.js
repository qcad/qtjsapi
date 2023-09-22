
      // auto generated
      //var self;

      // class constructor:
      function QRect() {
        

        // should be QRect_BaseJs.call(this, engine):
        //QRect.prototype = new QRect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QRect.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QRect);
            //}
          }
          else {
            qWarning("QRect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRect_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRect_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QRect_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QRect_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QRect_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QRect_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QRect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QRect);
  }

  
  else {
    
        print("QRect(): wrong number / type of arguments");
      
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

      //QRect.prototype = new QRect_BaseJs(engine);
      //QRect.prototype = new QRect_Wrapper(engine);
      QRect.prototype = new Object();

      QRect.prototype.toString = function() {
          //return "QRect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRect [JS]";
        };
      QRect.getObjectType = function() {
        
            return RJSType_QRect.getIdStatic();
          
      };

      QRect.prototype.getObjectType = function() {
        
            return RJSType_QRect.getIdStatic();
          
      };

      QRect.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QRect.getIdStatic()) {
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
      //QRect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    