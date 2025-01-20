
      // auto generated
      //var self;

      // class constructor:
      function QImageReader() {
        

        // should be QImageReader_BaseJs.call(this, engine):
        //QImageReader.prototype = new QImageReader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QImageReader.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QImageReader);
                
            //}
          }
          else {
            qWarning("QImageReader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QImageReader_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QImageReader);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QImageReader_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QImageReader);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QImageReader_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QImageReader);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else {
    
        print("QImageReader(): wrong number / type of arguments");
      
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

      //QImageReader.prototype = new QImageReader_BaseJs(engine);
      //QImageReader.prototype = new QImageReader_Wrapper(engine);
      QImageReader.prototype = new Object();

      QImageReader.prototype.toString = function() {
          //return "QImageReader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QImageReader [JS]";
        };
      QImageReader.getObjectType = function() {
        return RJSType_QImageReader.getIdStatic();
      };

      QImageReader.prototype.getObjectType = function() {
        return RJSType_QImageReader.getIdStatic();
      };

      QImageReader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QImageReader.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QImageReader.supportedImageFormats = function() 
          
        {
          //print("JS: QImageReader.supportedImageFormats");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QImageReader_WrapperSingletonInstance.supportedImageFormats(
                  
                );
              

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else {
    
        print("QImageReader.supportedImageFormats(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QImageReader.supportedMimeTypes = function() 
          
        {
          //print("JS: QImageReader.supportedMimeTypes");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QImageReader_WrapperSingletonInstance.supportedMimeTypes(
                  
                );
              

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else {
    
        print("QImageReader.supportedMimeTypes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QImageReader.imageFormatsForMimeType = function() 
          
        {
          //print("JS: QImageReader.imageFormatsForMimeType");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QImageReader_WrapperSingletonInstance.imageFormatsForMimeType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else {
    
        print("QImageReader.imageFormatsForMimeType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QImageReader.allocationLimit = function() 
          
        {
          //print("JS: QImageReader.allocationLimit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QImageReader_WrapperSingletonInstance.allocationLimit(
                  
                );
              

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else {
    
        print("QImageReader.allocationLimit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QImageReader.setAllocationLimit = function() 
          
        {
          //print("JS: QImageReader.setAllocationLimit");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QImageReader_WrapperSingletonInstance.setAllocationLimit(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QImageReader);
  }

  
  else {
    
        print("QImageReader.setAllocationLimit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QImageReader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QImageReader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      