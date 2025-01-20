
      // auto generated
      //var self;

      // class constructor:
      function QPrinterInfo() {
        

        // should be QPrinterInfo_BaseJs.call(this, engine):
        //QPrinterInfo.prototype = new QPrinterInfo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPrinterInfo.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPrinterInfo);
                
            //}
          }
          else {
            qWarning("QPrinterInfo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPrinterInfo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPrinterInfo);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPrinterInfo_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPrinterInfo);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPrinterInfo_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPrinterInfo);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else {
    
        print("QPrinterInfo(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //QPrinterInfo.prototype = new QPrinterInfo_BaseJs(engine);
      //QPrinterInfo.prototype = new QPrinterInfo_Wrapper(engine);
      QPrinterInfo.prototype = new Object();

      QPrinterInfo.prototype.toString = function() {
          //return "QPrinterInfo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPrinterInfo [JS]";
        };
      QPrinterInfo.getObjectType = function() {
        return RJSType_QPrinterInfo.getIdStatic();
      };

      QPrinterInfo.prototype.getObjectType = function() {
        return RJSType_QPrinterInfo.getIdStatic();
      };

      QPrinterInfo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPrinterInfo.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QPrinterInfo.availablePrinterNames = function() 
          
        {
          //print("JS: QPrinterInfo.availablePrinterNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPrinterInfo_WrapperSingletonInstance.availablePrinterNames(
                  
                );
              

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else {
    
        print("QPrinterInfo.availablePrinterNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPrinterInfo.availablePrinters = function() 
          
        {
          //print("JS: QPrinterInfo.availablePrinters");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPrinterInfo_WrapperSingletonInstance.availablePrinters(
                  
                );
              

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else {
    
        print("QPrinterInfo.availablePrinters(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPrinterInfo.defaultPrinterName = function() 
          
        {
          //print("JS: QPrinterInfo.defaultPrinterName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPrinterInfo_WrapperSingletonInstance.defaultPrinterName(
                  
                );
              

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else {
    
        print("QPrinterInfo.defaultPrinterName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPrinterInfo.defaultPrinter = function() 
          
        {
          //print("JS: QPrinterInfo.defaultPrinter");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPrinterInfo_WrapperSingletonInstance.defaultPrinter(
                  
                );
              

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else {
    
        print("QPrinterInfo.defaultPrinter(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPrinterInfo.printerInfo = function() 
          
        {
          //print("JS: QPrinterInfo.printerInfo");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QPrinterInfo_WrapperSingletonInstance.printerInfo(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QPrinterInfo);
  }

  
  else {
    
        print("QPrinterInfo.printerInfo(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPrinterInfo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPrinterInfo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      