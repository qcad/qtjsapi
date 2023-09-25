
      // auto generated
      //var self;

      // class constructor:
      function QImageWriter() {
        

        // should be QImageWriter_BaseJs.call(this, engine):
        //QImageWriter.prototype = new QImageWriter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QImageWriter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QImageWriter);
            //}
          }
          else {
            qWarning("QImageWriter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QImageWriter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QImageWriter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImageWriter);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QImageWriter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QImageWriter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImageWriter);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QImageWriter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QImageWriter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImageWriter);
  }

  
  else {
    
        print("QImageWriter(): wrong number / type of arguments");
      
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

      //QImageWriter.prototype = new QImageWriter_BaseJs(engine);
      //QImageWriter.prototype = new QImageWriter_Wrapper(engine);
      QImageWriter.prototype = new Object();

      QImageWriter.prototype.toString = function() {
          //return "QImageWriter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QImageWriter [JS]";
        };
      QImageWriter.getObjectType = function() {
        return RJSType_QImageWriter.getIdStatic();
      };

      QImageWriter.prototype.getObjectType = function() {
        return RJSType_QImageWriter.getIdStatic();
      };

      QImageWriter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QImageWriter.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ImageWriterError
QImageWriter.UnknownError = QImageWriter_Wrapper.UnknownError;
QImageWriter.DeviceError = QImageWriter_Wrapper.DeviceError;
QImageWriter.UnsupportedFormatError = QImageWriter_Wrapper.UnsupportedFormatError;
QImageWriter.InvalidImageError = QImageWriter_Wrapper.InvalidImageError;


      // functions:
      

      // static functions:
      

        // static function 
        QImageWriter.supportedImageFormats = function() 
          
        {
          //print("JS: QImageWriter.supportedImageFormats");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QImageWriter_WrapperSingletonInstance.supportedImageFormats(
                  
                );
              

        //copyProperties(this, wrapper, QImageWriter);
  }

  
  else {
    
        print("QImageWriter.supportedImageFormats(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QImageWriter.supportedMimeTypes = function() 
          
        {
          //print("JS: QImageWriter.supportedMimeTypes");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QImageWriter_WrapperSingletonInstance.supportedMimeTypes(
                  
                );
              

        //copyProperties(this, wrapper, QImageWriter);
  }

  
  else {
    
        print("QImageWriter.supportedMimeTypes(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QImageWriter.imageFormatsForMimeType = function() 
          
        {
          //print("JS: QImageWriter.imageFormatsForMimeType");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QImageWriter_WrapperSingletonInstance.imageFormatsForMimeType(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QImageWriter);
  }

  
  else {
    
        print("QImageWriter.imageFormatsForMimeType(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QImageWriter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QImageWriter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    