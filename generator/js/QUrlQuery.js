
      // auto generated
      //var self;

      // class constructor:
      function QUrlQuery() {
        

        // should be QUrlQuery_BaseJs.call(this, engine):
        //QUrlQuery.prototype = new QUrlQuery_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QUrlQuery.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QUrlQuery);
            //}
          }
          else {
            qWarning("QUrlQuery.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QUrlQuery);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QUrlQuery);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QUrlQuery);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QUrlQuery_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QUrlQuery);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QUrlQuery);
  }

  
  else {
    
        print("QUrlQuery(): wrong number / type of arguments");
      
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

      //QUrlQuery.prototype = new QUrlQuery_BaseJs(engine);
      //QUrlQuery.prototype = new QUrlQuery_Wrapper(engine);
      QUrlQuery.prototype = new Object();

      QUrlQuery.getObjectType = function() {
        
            return RJSType_QUrlQuery.getIdStatic();
          
      };

      QUrlQuery.prototype.getObjectType = function() {
        
            return RJSType_QUrlQuery.getIdStatic();
          
      };

      QUrlQuery.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QUrlQuery.getIdStatic()) {
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
      //QUrlQuery.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QUrlQuery.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    