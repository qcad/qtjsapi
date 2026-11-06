
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QImageReader.prototype.setFormat = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setFormat");
          
              return this.__PROXY__.setFormat(...args);
            
        };
    
        // function 
        QImageReader.prototype.format = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.format");
          
              return this.__PROXY__.format(...args);
            
        };
    
        // function 
        QImageReader.prototype.setAutoDetectImageFormat = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setAutoDetectImageFormat");
          
              return this.__PROXY__.setAutoDetectImageFormat(...args);
            
        };
    
        // function 
        QImageReader.prototype.autoDetectImageFormat = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.autoDetectImageFormat");
          
              return this.__PROXY__.autoDetectImageFormat(...args);
            
        };
    
        // function 
        QImageReader.prototype.setDecideFormatFromContent = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setDecideFormatFromContent");
          
              return this.__PROXY__.setDecideFormatFromContent(...args);
            
        };
    
        // function 
        QImageReader.prototype.decideFormatFromContent = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.decideFormatFromContent");
          
              return this.__PROXY__.decideFormatFromContent(...args);
            
        };
    
        // function 
        QImageReader.prototype.setDevice = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setDevice");
          
              return this.__PROXY__.setDevice(...args);
            
        };
    
        // function 
        QImageReader.prototype.device = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.device");
          
              return this.__PROXY__.device(...args);
            
        };
    
        // function 
        QImageReader.prototype.setFileName = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setFileName");
          
              return this.__PROXY__.setFileName(...args);
            
        };
    
        // function 
        QImageReader.prototype.fileName = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.fileName");
          
              return this.__PROXY__.fileName(...args);
            
        };
    
        // function 
        QImageReader.prototype.size = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QImageReader.prototype.imageFormat = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.imageFormat");
          
              return this.__PROXY__.imageFormat(...args);
            
        };
    
        // function 
        QImageReader.prototype.textKeys = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.textKeys");
          
              return this.__PROXY__.textKeys(...args);
            
        };
    
        // function 
        QImageReader.prototype.text = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.text");
          
              return this.__PROXY__.text(...args);
            
        };
    
        // function 
        QImageReader.prototype.setClipRect = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setClipRect");
          
              return this.__PROXY__.setClipRect(...args);
            
        };
    
        // function 
        QImageReader.prototype.clipRect = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.clipRect");
          
              return this.__PROXY__.clipRect(...args);
            
        };
    
        // function 
        QImageReader.prototype.setScaledSize = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setScaledSize");
          
              return this.__PROXY__.setScaledSize(...args);
            
        };
    
        // function 
        QImageReader.prototype.scaledSize = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.scaledSize");
          
              return this.__PROXY__.scaledSize(...args);
            
        };
    
        // function 
        QImageReader.prototype.setQuality = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setQuality");
          
              return this.__PROXY__.setQuality(...args);
            
        };
    
        // function 
        QImageReader.prototype.quality = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.quality");
          
              return this.__PROXY__.quality(...args);
            
        };
    
        // function 
        QImageReader.prototype.setScaledClipRect = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setScaledClipRect");
          
              return this.__PROXY__.setScaledClipRect(...args);
            
        };
    
        // function 
        QImageReader.prototype.scaledClipRect = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.scaledClipRect");
          
              return this.__PROXY__.scaledClipRect(...args);
            
        };
    
        // function 
        QImageReader.prototype.setBackgroundColor = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setBackgroundColor");
          
              return this.__PROXY__.setBackgroundColor(...args);
            
        };
    
        // function 
        QImageReader.prototype.backgroundColor = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.backgroundColor");
          
              return this.__PROXY__.backgroundColor(...args);
            
        };
    
        // function 
        QImageReader.prototype.supportsAnimation = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.supportsAnimation");
          
              return this.__PROXY__.supportsAnimation(...args);
            
        };
    
        // function 
        QImageReader.prototype.transformation = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.transformation");
          
              return this.__PROXY__.transformation(...args);
            
        };
    
        // function 
        QImageReader.prototype.setAutoTransform = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setAutoTransform");
          
              return this.__PROXY__.setAutoTransform(...args);
            
        };
    
        // function 
        QImageReader.prototype.autoTransform = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.autoTransform");
          
              return this.__PROXY__.autoTransform(...args);
            
        };
    
        // function 
        QImageReader.prototype.subType = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.subType");
          
              return this.__PROXY__.subType(...args);
            
        };
    
        // function 
        QImageReader.prototype.supportedSubTypes = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.supportedSubTypes");
          
              return this.__PROXY__.supportedSubTypes(...args);
            
        };
    
        // function 
        QImageReader.prototype.canRead = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.canRead");
          
              return this.__PROXY__.canRead(...args);
            
        };
    
        // function 
        QImageReader.prototype.read = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.read");
          
              return this.__PROXY__.read(...args);
            
        };
    
        // function 
        QImageReader.prototype.jumpToNextImage = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.jumpToNextImage");
          
              return this.__PROXY__.jumpToNextImage(...args);
            
        };
    
        // function 
        QImageReader.prototype.jumpToImage = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.jumpToImage");
          
              return this.__PROXY__.jumpToImage(...args);
            
        };
    
        // function 
        QImageReader.prototype.loopCount = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.loopCount");
          
              return this.__PROXY__.loopCount(...args);
            
        };
    
        // function 
        QImageReader.prototype.imageCount = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.imageCount");
          
              return this.__PROXY__.imageCount(...args);
            
        };
    
        // function 
        QImageReader.prototype.nextImageDelay = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.nextImageDelay");
          
              return this.__PROXY__.nextImageDelay(...args);
            
        };
    
        // function 
        QImageReader.prototype.currentImageNumber = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.currentImageNumber");
          
              return this.__PROXY__.currentImageNumber(...args);
            
        };
    
        // function 
        QImageReader.prototype.currentImageRect = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.currentImageRect");
          
              return this.__PROXY__.currentImageRect(...args);
            
        };
    
        // function 
        QImageReader.prototype.error = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.error");
          
              return this.__PROXY__.error(...args);
            
        };
    
        // function 
        QImageReader.prototype.errorString = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.errorString");
          
              return this.__PROXY__.errorString(...args);
            
        };
    
        // function 
        QImageReader.prototype.supportsOption = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.supportsOption");
          
              return this.__PROXY__.supportsOption(...args);
            
        };
    
        // function 
        QImageReader.prototype.supportedImageFormats = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.supportedImageFormats");
          
              return this.__PROXY__.supportedImageFormats(...args);
            
        };
    
        // function 
        QImageReader.prototype.supportedMimeTypes = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.supportedMimeTypes");
          
              return this.__PROXY__.supportedMimeTypes(...args);
            
        };
    
        // function 
        QImageReader.prototype.imageFormatsForMimeType = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.imageFormatsForMimeType");
          
              return this.__PROXY__.imageFormatsForMimeType(...args);
            
        };
    
        // function 
        QImageReader.prototype.allocationLimit = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.allocationLimit");
          
              return this.__PROXY__.allocationLimit(...args);
            
        };
    
        // function 
        QImageReader.prototype.setAllocationLimit = function(...args) 
          
        {
          //print("JS: QImageReader.prototype.setAllocationLimit");
          
              return this.__PROXY__.setAllocationLimit(...args);
            
        };
    

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
      QImageReader.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QImageReader.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QImageReader.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QImageReader.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      