
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QPrinterInfo.prototype.printerName = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.printerName");
          
              return this.__PROXY__.printerName(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.description = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.description");
          
              return this.__PROXY__.description(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.location = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.location");
          
              return this.__PROXY__.location(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.makeAndModel = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.makeAndModel");
          
              return this.__PROXY__.makeAndModel(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.isNull = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.isDefault = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.isDefault");
          
              return this.__PROXY__.isDefault(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.isRemote = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.isRemote");
          
              return this.__PROXY__.isRemote(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.state = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.state");
          
              return this.__PROXY__.state(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.supportedPageSizes = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.supportedPageSizes");
          
              return this.__PROXY__.supportedPageSizes(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.defaultPageSize = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.defaultPageSize");
          
              return this.__PROXY__.defaultPageSize(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.supportsCustomPageSizes = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.supportsCustomPageSizes");
          
              return this.__PROXY__.supportsCustomPageSizes(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.minimumPhysicalPageSize = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.minimumPhysicalPageSize");
          
              return this.__PROXY__.minimumPhysicalPageSize(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.maximumPhysicalPageSize = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.maximumPhysicalPageSize");
          
              return this.__PROXY__.maximumPhysicalPageSize(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.supportedResolutions = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.supportedResolutions");
          
              return this.__PROXY__.supportedResolutions(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.defaultDuplexMode = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.defaultDuplexMode");
          
              return this.__PROXY__.defaultDuplexMode(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.supportedDuplexModes = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.supportedDuplexModes");
          
              return this.__PROXY__.supportedDuplexModes(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.defaultColorMode = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.defaultColorMode");
          
              return this.__PROXY__.defaultColorMode(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.supportedColorModes = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.supportedColorModes");
          
              return this.__PROXY__.supportedColorModes(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.availablePrinterNames = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.availablePrinterNames");
          
              return this.__PROXY__.availablePrinterNames(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.availablePrinters = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.availablePrinters");
          
              return this.__PROXY__.availablePrinters(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.defaultPrinterName = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.defaultPrinterName");
          
              return this.__PROXY__.defaultPrinterName(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.defaultPrinter = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.defaultPrinter");
          
              return this.__PROXY__.defaultPrinter(...args);
            
        };
        
        // function 
        QPrinterInfo.prototype.printerInfo = function(...args) 
          
        {
          //print("JS: QPrinterInfo.prototype.printerInfo");
          
              return this.__PROXY__.printerInfo(...args);
            
        };
        

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
      QPrinterInfo.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPrinterInfo.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPrinterInfo.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QPrinterInfo.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      