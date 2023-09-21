
      // auto generated
      //var self;

      // class constructor:
      function QPageRanges() {
        

        // should be QPageRanges_BaseJs.call(this, engine):
        //QPageRanges.prototype = new QPageRanges_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QPageRanges_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPageRanges);
            //}
          }
          else {
            qWarning("QPageRanges.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPageRanges_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageRanges);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageRanges);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPageRanges_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageRanges);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageRanges);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPageRanges_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPageRanges);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageRanges);
  }

  
  else {
    
        print("QPageRanges(): wrong number / type of arguments");
      
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

      //QPageRanges.prototype = new QPageRanges_BaseJs(engine);
      //QPageRanges.prototype = new QPageRanges_Wrapper(engine);
      QPageRanges.prototype = new Object();

      QPageRanges.getObjectType = function() {
        
            return RJSType.QPageRanges_Type;
          
      };

      QPageRanges.prototype.getObjectType = function() {
        
            return RJSType.QPageRanges_Type;
          
      };

      QPageRanges.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QPageRanges_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QPageRanges_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QPageRanges.fromString = function() 
          
        {
          //print("JS: QPageRanges.fromString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPageRanges_WrapperSingletonInstance.fromString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPageRanges);
  }

  
  else {
    
        print("QPageRanges.fromString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPageRanges.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPageRanges.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    