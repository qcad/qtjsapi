
      // auto generated
      //var self;

      // class constructor:
      function QFontMetrics() {
        

        // should be QFontMetrics_BaseJs.call(this, engine):
        //QFontMetrics.prototype = new QFontMetrics_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QFontMetrics_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFontMetrics);
            //}
          }
          else {
            qWarning("QFontMetrics.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFontMetrics_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFontMetrics);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFontMetrics);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFontMetrics_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFontMetrics);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFontMetrics);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFontMetrics_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFontMetrics);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFontMetrics);
  }

  
  else {
    
        print("QFontMetrics(): wrong number / type of arguments");
      
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

      //QFontMetrics.prototype = new QFontMetrics_BaseJs(engine);
      //QFontMetrics.prototype = new QFontMetrics_Wrapper(engine);
      QFontMetrics.prototype = new Object();

      QFontMetrics.prototype.toString = function() {
          //return "QFontMetrics [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFontMetrics [JS]";
        };
      QFontMetrics.getObjectType = function() {
        
            return RJSType.QFontMetrics_Type;
          
      };

      QFontMetrics.prototype.getObjectType = function() {
        
            return RJSType.QFontMetrics_Type;
          
      };

      QFontMetrics.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QFontMetrics_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QFontMetrics_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFontMetrics.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFontMetrics.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    