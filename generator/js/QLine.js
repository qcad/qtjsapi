
      // auto generated
      //var self;

      // class constructor:
      function QLine() {
        

        // should be QLine_BaseJs.call(this, engine):
        //QLine.prototype = new QLine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QLine_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QLine);
            //}
          }
          else {
            qWarning("QLine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else 
  
      if (arguments.length == 4) {
    
            self = this;
            wrapper = new QLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QLine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QLine_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLine);
  }

  
  else {
    
        print("QLine(): wrong number / type of arguments");
      
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

      //QLine.prototype = new QLine_BaseJs(engine);
      //QLine.prototype = new QLine_Wrapper(engine);
      QLine.prototype = new Object();

      QLine.prototype.toString = function() {
          //return "QLine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLine [JS]";
        };
      QLine.getObjectType = function() {
        
            return RJSType.QLine_Type;
          
      };

      QLine.prototype.getObjectType = function() {
        
            return RJSType.QLine_Type;
          
      };

      QLine.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QLine_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QLine_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    