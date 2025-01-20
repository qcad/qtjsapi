
      // auto generated
      //var self;

      // class constructor:
      function QImage() {
        

        // should be QImage_BaseJs.call(this, engine):
        //QImage.prototype = new QImage_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QImage.getIdStatic()))) {

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
            qWarning("QImage.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QImage_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImage);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QImage_Wrapper(
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

      

        //copyProperties(this, wrapper, QImage);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QImage_Wrapper(
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

      

        //copyProperties(this, wrapper, QImage);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QImage_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QImage);
  }

  
  else {
    
        print("QImage(): wrong number / type of arguments");
      
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

      //QImage.prototype = new QImage_BaseJs(engine);
      //QImage.prototype = new QImage_Wrapper(engine);
      QImage.prototype = new Object();

      QImage.prototype.toString = function() {
          //return "QImage [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QImage [JS]";
        };
      QImage.getObjectType = function() {
        return RJSType_QImage.getIdStatic();
      };

      QImage.prototype.getObjectType = function() {
        return RJSType_QImage.getIdStatic();
      };

      QImage.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QImage.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: InvertMode
QImage.InvertRgb = QImage_Wrapper.InvertRgb;
QImage.InvertRgba = QImage_Wrapper.InvertRgba;

  // enum: Format
QImage.Format_Invalid = QImage_Wrapper.Format_Invalid;
QImage.Format_Mono = QImage_Wrapper.Format_Mono;
QImage.Format_MonoLSB = QImage_Wrapper.Format_MonoLSB;
QImage.Format_Indexed8 = QImage_Wrapper.Format_Indexed8;
QImage.Format_RGB32 = QImage_Wrapper.Format_RGB32;
QImage.Format_ARGB32 = QImage_Wrapper.Format_ARGB32;
QImage.Format_ARGB32_Premultiplied = QImage_Wrapper.Format_ARGB32_Premultiplied;
QImage.Format_RGB16 = QImage_Wrapper.Format_RGB16;
QImage.Format_ARGB8565_Premultiplied = QImage_Wrapper.Format_ARGB8565_Premultiplied;
QImage.Format_RGB666 = QImage_Wrapper.Format_RGB666;
QImage.Format_ARGB6666_Premultiplied = QImage_Wrapper.Format_ARGB6666_Premultiplied;
QImage.Format_RGB555 = QImage_Wrapper.Format_RGB555;
QImage.Format_ARGB8555_Premultiplied = QImage_Wrapper.Format_ARGB8555_Premultiplied;
QImage.Format_RGB888 = QImage_Wrapper.Format_RGB888;
QImage.Format_RGB444 = QImage_Wrapper.Format_RGB444;
QImage.Format_ARGB4444_Premultiplied = QImage_Wrapper.Format_ARGB4444_Premultiplied;
QImage.Format_RGBX8888 = QImage_Wrapper.Format_RGBX8888;
QImage.Format_RGBA8888 = QImage_Wrapper.Format_RGBA8888;
QImage.Format_RGBA8888_Premultiplied = QImage_Wrapper.Format_RGBA8888_Premultiplied;
QImage.Format_BGR30 = QImage_Wrapper.Format_BGR30;
QImage.Format_A2BGR30_Premultiplied = QImage_Wrapper.Format_A2BGR30_Premultiplied;
QImage.Format_RGB30 = QImage_Wrapper.Format_RGB30;
QImage.Format_A2RGB30_Premultiplied = QImage_Wrapper.Format_A2RGB30_Premultiplied;
QImage.Format_Alpha8 = QImage_Wrapper.Format_Alpha8;
QImage.Format_Grayscale8 = QImage_Wrapper.Format_Grayscale8;
QImage.Format_RGBX64 = QImage_Wrapper.Format_RGBX64;
QImage.Format_RGBA64 = QImage_Wrapper.Format_RGBA64;
QImage.Format_RGBA64_Premultiplied = QImage_Wrapper.Format_RGBA64_Premultiplied;
QImage.Format_Grayscale16 = QImage_Wrapper.Format_Grayscale16;
QImage.Format_BGR888 = QImage_Wrapper.Format_BGR888;
QImage.Format_RGBX16FPx4 = QImage_Wrapper.Format_RGBX16FPx4;
QImage.Format_RGBA16FPx4 = QImage_Wrapper.Format_RGBA16FPx4;
QImage.Format_RGBA16FPx4_Premultiplied = QImage_Wrapper.Format_RGBA16FPx4_Premultiplied;
QImage.Format_RGBX32FPx4 = QImage_Wrapper.Format_RGBX32FPx4;
QImage.Format_RGBA32FPx4 = QImage_Wrapper.Format_RGBA32FPx4;
QImage.Format_RGBA32FPx4_Premultiplied = QImage_Wrapper.Format_RGBA32FPx4_Premultiplied;
QImage.NImageFormats = QImage_Wrapper.NImageFormats;


      // functions:
      
        // function 
        QImage.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QImage.prototype.paintingActive");
          return this.__PROXY__.paintingActive(...args);
        };
    
        // function 
        QImage.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QImage.prototype.widthMM");
          return this.__PROXY__.widthMM(...args);
        };
    
        // function 
        QImage.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QImage.prototype.heightMM");
          return this.__PROXY__.heightMM(...args);
        };
    
        // function 
        QImage.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QImage.prototype.logicalDpiX");
          return this.__PROXY__.logicalDpiX(...args);
        };
    
        // function 
        QImage.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QImage.prototype.logicalDpiY");
          return this.__PROXY__.logicalDpiY(...args);
        };
    
        // function 
        QImage.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QImage.prototype.physicalDpiX");
          return this.__PROXY__.physicalDpiX(...args);
        };
    
        // function 
        QImage.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QImage.prototype.physicalDpiY");
          return this.__PROXY__.physicalDpiY(...args);
        };
    
        // function 
        QImage.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QImage.prototype.devicePixelRatioF");
          return this.__PROXY__.devicePixelRatioF(...args);
        };
    
        // function 
        QImage.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QImage.prototype.initPainter");
          return this.__PROXY__.initPainter(...args);
        };
    
        // function 
        QImage.prototype.redirected = function(...args) 
          
        {
          //print("JS: QImage.prototype.redirected");
          return this.__PROXY__.redirected(...args);
        };
    
        // function 
        QImage.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QImage.prototype.sharedPainter");
          return this.__PROXY__.sharedPainter(...args);
        };
    
        // function 
        QImage.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QImage.prototype.qt_paint_device_metric");
          return this.__PROXY__.qt_paint_device_metric(...args);
        };
    
        // function 
        QImage.prototype.swap = function(...args) 
          
        {
          //print("JS: QImage.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QImage.prototype.isNull = function(...args) 
          
        {
          //print("JS: QImage.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QImage.prototype.devType = function(...args) 
          
        {
          //print("JS: QImage.prototype.devType");
          return this.__PROXY__.devType(...args);
        };
    
        // function 
        QImage.prototype.detach = function(...args) 
          
        {
          //print("JS: QImage.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QImage.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QImage.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QImage.prototype.copy = function(...args) 
          
        {
          //print("JS: QImage.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        QImage.prototype.format = function(...args) 
          
        {
          //print("JS: QImage.prototype.format");
          return this.__PROXY__.format(...args);
        };
    
        // function 
        QImage.prototype.convertToFormat = function(...args) 
          
        {
          //print("JS: QImage.prototype.convertToFormat");
          return this.__PROXY__.convertToFormat(...args);
        };
    
        // function 
        QImage.prototype.reinterpretAsFormat = function(...args) 
          
        {
          //print("JS: QImage.prototype.reinterpretAsFormat");
          return this.__PROXY__.reinterpretAsFormat(...args);
        };
    
        // function 
        QImage.prototype.convertedTo = function(...args) 
          
        {
          //print("JS: QImage.prototype.convertedTo");
          return this.__PROXY__.convertedTo(...args);
        };
    
        // function 
        QImage.prototype.convertTo = function(...args) 
          
        {
          //print("JS: QImage.prototype.convertTo");
          return this.__PROXY__.convertTo(...args);
        };
    
        // function 
        QImage.prototype.width = function(...args) 
          
        {
          //print("JS: QImage.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QImage.prototype.height = function(...args) 
          
        {
          //print("JS: QImage.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QImage.prototype.size = function(...args) 
          
        {
          //print("JS: QImage.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QImage.prototype.rect = function(...args) 
          
        {
          //print("JS: QImage.prototype.rect");
          return this.__PROXY__.rect(...args);
        };
    
        // function 
        QImage.prototype.depth = function(...args) 
          
        {
          //print("JS: QImage.prototype.depth");
          return this.__PROXY__.depth(...args);
        };
    
        // function 
        QImage.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QImage.prototype.colorCount");
          return this.__PROXY__.colorCount(...args);
        };
    
        // function 
        QImage.prototype.bitPlaneCount = function(...args) 
          
        {
          //print("JS: QImage.prototype.bitPlaneCount");
          return this.__PROXY__.bitPlaneCount(...args);
        };
    
        // function 
        QImage.prototype.setColorCount = function(...args) 
          
        {
          //print("JS: QImage.prototype.setColorCount");
          return this.__PROXY__.setColorCount(...args);
        };
    
        // function 
        QImage.prototype.allGray = function(...args) 
          
        {
          //print("JS: QImage.prototype.allGray");
          return this.__PROXY__.allGray(...args);
        };
    
        // function 
        QImage.prototype.isGrayscale = function(...args) 
          
        {
          //print("JS: QImage.prototype.isGrayscale");
          return this.__PROXY__.isGrayscale(...args);
        };
    
        // function 
        QImage.prototype.sizeInBytes = function(...args) 
          
        {
          //print("JS: QImage.prototype.sizeInBytes");
          return this.__PROXY__.sizeInBytes(...args);
        };
    
        // function 
        QImage.prototype.bytesPerLine = function(...args) 
          
        {
          //print("JS: QImage.prototype.bytesPerLine");
          return this.__PROXY__.bytesPerLine(...args);
        };
    
        // function 
        QImage.prototype.valid = function(...args) 
          
        {
          //print("JS: QImage.prototype.valid");
          return this.__PROXY__.valid(...args);
        };
    
        // function 
        QImage.prototype.pixelIndex = function(...args) 
          
        {
          //print("JS: QImage.prototype.pixelIndex");
          return this.__PROXY__.pixelIndex(...args);
        };
    
        // function 
        QImage.prototype.setPixel = function(...args) 
          
        {
          //print("JS: QImage.prototype.setPixel");
          return this.__PROXY__.setPixel(...args);
        };
    
        // function 
        QImage.prototype.pixelColor = function(...args) 
          
        {
          //print("JS: QImage.prototype.pixelColor");
          return this.__PROXY__.pixelColor(...args);
        };
    
        // function 
        QImage.prototype.setPixelColor = function(...args) 
          
        {
          //print("JS: QImage.prototype.setPixelColor");
          return this.__PROXY__.setPixelColor(...args);
        };
    
        // function 
        QImage.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QImage.prototype.devicePixelRatio");
          return this.__PROXY__.devicePixelRatio(...args);
        };
    
        // function 
        QImage.prototype.setDevicePixelRatio = function(...args) 
          
        {
          //print("JS: QImage.prototype.setDevicePixelRatio");
          return this.__PROXY__.setDevicePixelRatio(...args);
        };
    
        // function 
        QImage.prototype.deviceIndependentSize = function(...args) 
          
        {
          //print("JS: QImage.prototype.deviceIndependentSize");
          return this.__PROXY__.deviceIndependentSize(...args);
        };
    
        // function 
        QImage.prototype.fill = function(...args) 
          
        {
          //print("JS: QImage.prototype.fill");
          return this.__PROXY__.fill(...args);
        };
    
        // function 
        QImage.prototype.hasAlphaChannel = function(...args) 
          
        {
          //print("JS: QImage.prototype.hasAlphaChannel");
          return this.__PROXY__.hasAlphaChannel(...args);
        };
    
        // function 
        QImage.prototype.setAlphaChannel = function(...args) 
          
        {
          //print("JS: QImage.prototype.setAlphaChannel");
          return this.__PROXY__.setAlphaChannel(...args);
        };
    
        // function 
        QImage.prototype.createAlphaMask = function(...args) 
          
        {
          //print("JS: QImage.prototype.createAlphaMask");
          return this.__PROXY__.createAlphaMask(...args);
        };
    
        // function 
        QImage.prototype.createHeuristicMask = function(...args) 
          
        {
          //print("JS: QImage.prototype.createHeuristicMask");
          return this.__PROXY__.createHeuristicMask(...args);
        };
    
        // function 
        QImage.prototype.scaled = function(...args) 
          
        {
          //print("JS: QImage.prototype.scaled");
          return this.__PROXY__.scaled(...args);
        };
    
        // function 
        QImage.prototype.scaledToWidth = function(...args) 
          
        {
          //print("JS: QImage.prototype.scaledToWidth");
          return this.__PROXY__.scaledToWidth(...args);
        };
    
        // function 
        QImage.prototype.scaledToHeight = function(...args) 
          
        {
          //print("JS: QImage.prototype.scaledToHeight");
          return this.__PROXY__.scaledToHeight(...args);
        };
    
        // function 
        QImage.prototype.transformed = function(...args) 
          
        {
          //print("JS: QImage.prototype.transformed");
          return this.__PROXY__.transformed(...args);
        };
    
        // function 
        QImage.prototype.trueMatrix = function(...args) 
          
        {
          //print("JS: QImage.prototype.trueMatrix");
          return this.__PROXY__.trueMatrix(...args);
        };
    
        // function 
        QImage.prototype.mirrored = function(...args) 
          
        {
          //print("JS: QImage.prototype.mirrored");
          return this.__PROXY__.mirrored(...args);
        };
    
        // function 
        QImage.prototype.rgbSwapped = function(...args) 
          
        {
          //print("JS: QImage.prototype.rgbSwapped");
          return this.__PROXY__.rgbSwapped(...args);
        };
    
        // function 
        QImage.prototype.mirror = function(...args) 
          
        {
          //print("JS: QImage.prototype.mirror");
          return this.__PROXY__.mirror(...args);
        };
    
        // function 
        QImage.prototype.rgbSwap = function(...args) 
          
        {
          //print("JS: QImage.prototype.rgbSwap");
          return this.__PROXY__.rgbSwap(...args);
        };
    
        // function 
        QImage.prototype.invertPixels = function(...args) 
          
        {
          //print("JS: QImage.prototype.invertPixels");
          return this.__PROXY__.invertPixels(...args);
        };
    
        // function 
        QImage.prototype.load = function(...args) 
          
        {
          //print("JS: QImage.prototype.load");
          return this.__PROXY__.load(...args);
        };
    
        // function 
        QImage.prototype.save = function(...args) 
          
        {
          //print("JS: QImage.prototype.save");
          return this.__PROXY__.save(...args);
        };
    
        // function 
        QImage.prototype.cacheKey = function(...args) 
          
        {
          //print("JS: QImage.prototype.cacheKey");
          return this.__PROXY__.cacheKey(...args);
        };
    
        // function 
        QImage.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QImage.prototype.paintEngine");
          return this.__PROXY__.paintEngine(...args);
        };
    
        // function 
        QImage.prototype.dotsPerMeterX = function(...args) 
          
        {
          //print("JS: QImage.prototype.dotsPerMeterX");
          return this.__PROXY__.dotsPerMeterX(...args);
        };
    
        // function 
        QImage.prototype.dotsPerMeterY = function(...args) 
          
        {
          //print("JS: QImage.prototype.dotsPerMeterY");
          return this.__PROXY__.dotsPerMeterY(...args);
        };
    
        // function 
        QImage.prototype.setDotsPerMeterX = function(...args) 
          
        {
          //print("JS: QImage.prototype.setDotsPerMeterX");
          return this.__PROXY__.setDotsPerMeterX(...args);
        };
    
        // function 
        QImage.prototype.setDotsPerMeterY = function(...args) 
          
        {
          //print("JS: QImage.prototype.setDotsPerMeterY");
          return this.__PROXY__.setDotsPerMeterY(...args);
        };
    
        // function 
        QImage.prototype.offset = function(...args) 
          
        {
          //print("JS: QImage.prototype.offset");
          return this.__PROXY__.offset(...args);
        };
    
        // function 
        QImage.prototype.setOffset = function(...args) 
          
        {
          //print("JS: QImage.prototype.setOffset");
          return this.__PROXY__.setOffset(...args);
        };
    
        // function 
        QImage.prototype.textKeys = function(...args) 
          
        {
          //print("JS: QImage.prototype.textKeys");
          return this.__PROXY__.textKeys(...args);
        };
    
        // function 
        QImage.prototype.text = function(...args) 
          
        {
          //print("JS: QImage.prototype.text");
          return this.__PROXY__.text(...args);
        };
    
        // function 
        QImage.prototype.setText = function(...args) 
          
        {
          //print("JS: QImage.prototype.setText");
          return this.__PROXY__.setText(...args);
        };
    
        // function 
        QImage.prototype.metric = function(...args) 
          
        {
          //print("JS: QImage.prototype.metric");
          return this.__PROXY__.metric(...args);
        };
    
        // function 
        QImage.prototype.mirrored_helper = function(...args) 
          
        {
          //print("JS: QImage.prototype.mirrored_helper");
          return this.__PROXY__.mirrored_helper(...args);
        };
    
        // function 
        QImage.prototype.rgbSwapped_helper = function(...args) 
          
        {
          //print("JS: QImage.prototype.rgbSwapped_helper");
          return this.__PROXY__.rgbSwapped_helper(...args);
        };
    
        // function 
        QImage.prototype.mirrored_inplace = function(...args) 
          
        {
          //print("JS: QImage.prototype.mirrored_inplace");
          return this.__PROXY__.mirrored_inplace(...args);
        };
    
        // function 
        QImage.prototype.rgbSwapped_inplace = function(...args) 
          
        {
          //print("JS: QImage.prototype.rgbSwapped_inplace");
          return this.__PROXY__.rgbSwapped_inplace(...args);
        };
    
        // function 
        QImage.prototype.convertToFormat_helper = function(...args) 
          
        {
          //print("JS: QImage.prototype.convertToFormat_helper");
          return this.__PROXY__.convertToFormat_helper(...args);
        };
    
        // function 
        QImage.prototype.convertToFormat_inplace = function(...args) 
          
        {
          //print("JS: QImage.prototype.convertToFormat_inplace");
          return this.__PROXY__.convertToFormat_inplace(...args);
        };
    
        // function 
        QImage.prototype.smoothScaled = function(...args) 
          
        {
          //print("JS: QImage.prototype.smoothScaled");
          return this.__PROXY__.smoothScaled(...args);
        };
    

      // static functions:
      

        // static function 
        QImage.trueMatrix = function() 
          
        {
          //print("JS: QImage.trueMatrix");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QImage_WrapperSingletonInstance.trueMatrix(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QImage);
  }

  
  else {
    
        print("QImage.trueMatrix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QImage.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QImage.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QImage.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      