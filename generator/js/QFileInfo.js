
      // auto generated
      //var self;

      // class constructor:
      function QFileInfo() {
        

        // should be QFileInfo_BaseJs.call(this, engine):
        //QFileInfo.prototype = new QFileInfo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileInfo.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFileInfo);
            //}
          }
          else {
            qWarning("QFileInfo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFileInfo);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFileInfo);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFileInfo);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFileInfo);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else {
    
        print("QFileInfo(): wrong number / type of arguments");
      
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

      //QFileInfo.prototype = new QFileInfo_BaseJs(engine);
      //QFileInfo.prototype = new QFileInfo_Wrapper(engine);
      QFileInfo.prototype = new Object();

      QFileInfo.prototype.toString = function() {
          //return "QFileInfo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileInfo [JS]";
        };
      QFileInfo.getObjectType = function() {
        return RJSType_QFileInfo.getIdStatic();
      };

      QFileInfo.prototype.getObjectType = function() {
        return RJSType_QFileInfo.getIdStatic();
      };

      QFileInfo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileInfo.getIdStatic()) {
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
      //QFileInfo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileInfo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    