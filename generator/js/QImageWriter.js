
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QImageWriter.prototype.setFormat = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setFormat");
          
              return this.__PROXY__.setFormat(...args);
            
        };
    
        // function 
        QImageWriter.prototype.format = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.format");
          
              return this.__PROXY__.format(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setDevice = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setDevice");
          
              return this.__PROXY__.setDevice(...args);
            
        };
    
        // function 
        QImageWriter.prototype.device = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.device");
          
              return this.__PROXY__.device(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setFileName = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setFileName");
          
              return this.__PROXY__.setFileName(...args);
            
        };
    
        // function 
        QImageWriter.prototype.fileName = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setQuality = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setQuality");
          
              return this.__PROXY__.setQuality(...args);
            
        };
    
        // function 
        QImageWriter.prototype.quality = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.quality");
          
              return this.__PROXY__.quality(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setCompression = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setCompression");
          
              return this.__PROXY__.setCompression(...args);
            
        };
    
        // function 
        QImageWriter.prototype.compression = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.compression");
          
              return this.__PROXY__.compression(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setSubType = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setSubType");
          
              return this.__PROXY__.setSubType(...args);
            
        };
    
        // function 
        QImageWriter.prototype.subType = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.subType");
          
              return this.__PROXY__.subType(...args);
            
        };
    
        // function 
        QImageWriter.prototype.supportedSubTypes = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.supportedSubTypes");
          
              return this.__PROXY__.supportedSubTypes(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setOptimizedWrite = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setOptimizedWrite");
          
              return this.__PROXY__.setOptimizedWrite(...args);
            
        };
    
        // function 
        QImageWriter.prototype.optimizedWrite = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.optimizedWrite");
          
              return this.__PROXY__.optimizedWrite(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setProgressiveScanWrite = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setProgressiveScanWrite");
          
              return this.__PROXY__.setProgressiveScanWrite(...args);
            
        };
    
        // function 
        QImageWriter.prototype.progressiveScanWrite = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.progressiveScanWrite");
          
              return this.__PROXY__.progressiveScanWrite(...args);
            
        };
    
        // function 
        QImageWriter.prototype.transformation = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.transformation");
          
              return this.__PROXY__.transformation(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setTransformation = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setTransformation");
          
              return this.__PROXY__.setTransformation(...args);
            
        };
    
        // function 
        QImageWriter.prototype.setText = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QImageWriter.prototype.canWrite = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.canWrite");
          
              return this.__PROXY__.canWrite(...args);
            
        };
    
        // function 
        QImageWriter.prototype.write = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.write");
          
              return this.__PROXY__.write(...args);
            
        };
    
        // function 
        QImageWriter.prototype.error = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
    
        // function 
        QImageWriter.prototype.errorString = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QImageWriter.prototype.supportsOption = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.supportsOption");
          
              return this.__PROXY__.supportsOption(...args);
            
        };
    
        // function 
        QImageWriter.prototype.supportedImageFormats = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.supportedImageFormats");
          
              return this.__PROXY__.supportedImageFormats(...args);
            
        };
    
        // function 
        QImageWriter.prototype.supportedMimeTypes = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.supportedMimeTypes");
          
              return this.__PROXY__.supportedMimeTypes(...args);
            
        };
    
        // function 
        QImageWriter.prototype.imageFormatsForMimeType = function(...args) 
          
        {
          //print("JS: QImageWriter.prototype.imageFormatsForMimeType");
          
              return this.__PROXY__.imageFormatsForMimeType(...args);
            
        };
    

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
      QImageWriter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QImageWriter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QImageWriter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QImageWriter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      