
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
              copyProperties(this, wrapper, QImage);
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
          

        copyProperties(this, wrapper, QImage);

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
          

        copyProperties(this, wrapper, QImage);

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
          

        copyProperties(this, wrapper, QImage);

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
          

        copyProperties(this, wrapper, QImage);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
      

      // static functions:
      

        // static function 
        QImage.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QImage.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QImage_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QImage);
  }

  
  else {
    
        print("QImage.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    