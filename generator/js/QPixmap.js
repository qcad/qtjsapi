
      // auto generated
      //var self;

      // class constructor:
      function QPixmap() {
        

        // should be QPixmap_BaseJs.call(this, engine):
        //QPixmap.prototype = new QPixmap_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPixmap.getIdStatic()))) {

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
            qWarning("QPixmap.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPixmap_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap(): wrong number / type of arguments");
      
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

      //QPixmap.prototype = new QPixmap_BaseJs(engine);
      //QPixmap.prototype = new QPixmap_Wrapper(engine);
      QPixmap.prototype = new Object();

      QPixmap.prototype.toString = function() {
          //return "QPixmap [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPixmap [JS]";
        };
      QPixmap.getObjectType = function() {
        return RJSType_QPixmap.getIdStatic();
      };

      QPixmap.prototype.getObjectType = function() {
        return RJSType_QPixmap.getIdStatic();
      };

      QPixmap.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPixmap.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QPixmap.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.paintingActive");
          return this.__PROXY__.paintingActive(...args);
        };
    
        // function 
        QPixmap.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.widthMM");
          return this.__PROXY__.widthMM(...args);
        };
    
        // function 
        QPixmap.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.heightMM");
          return this.__PROXY__.heightMM(...args);
        };
    
        // function 
        QPixmap.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.logicalDpiX");
          return this.__PROXY__.logicalDpiX(...args);
        };
    
        // function 
        QPixmap.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.logicalDpiY");
          return this.__PROXY__.logicalDpiY(...args);
        };
    
        // function 
        QPixmap.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.physicalDpiX");
          return this.__PROXY__.physicalDpiX(...args);
        };
    
        // function 
        QPixmap.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.physicalDpiY");
          return this.__PROXY__.physicalDpiY(...args);
        };
    
        // function 
        QPixmap.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.devicePixelRatioF");
          return this.__PROXY__.devicePixelRatioF(...args);
        };
    
        // function 
        QPixmap.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.colorCount");
          return this.__PROXY__.colorCount(...args);
        };
    
        // function 
        QPixmap.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.initPainter");
          return this.__PROXY__.initPainter(...args);
        };
    
        // function 
        QPixmap.prototype.redirected = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.redirected");
          return this.__PROXY__.redirected(...args);
        };
    
        // function 
        QPixmap.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.sharedPainter");
          return this.__PROXY__.sharedPainter(...args);
        };
    
        // function 
        QPixmap.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.qt_paint_device_metric");
          return this.__PROXY__.qt_paint_device_metric(...args);
        };
    
        // function 
        QPixmap.prototype.swap = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QPixmap.prototype.isNull = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QPixmap.prototype.devType = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.devType");
          return this.__PROXY__.devType(...args);
        };
    
        // function 
        QPixmap.prototype.width = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QPixmap.prototype.height = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QPixmap.prototype.size = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QPixmap.prototype.rect = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.rect");
          return this.__PROXY__.rect(...args);
        };
    
        // function 
        QPixmap.prototype.depth = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.depth");
          return this.__PROXY__.depth(...args);
        };
    
        // function 
        QPixmap.prototype.defaultDepth = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.defaultDepth");
          return this.__PROXY__.defaultDepth(...args);
        };
    
        // function 
        QPixmap.prototype.fill = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.fill");
          return this.__PROXY__.fill(...args);
        };
    
        // function 
        QPixmap.prototype.mask = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.mask");
          return this.__PROXY__.mask(...args);
        };
    
        // function 
        QPixmap.prototype.setMask = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.setMask");
          return this.__PROXY__.setMask(...args);
        };
    
        // function 
        QPixmap.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.devicePixelRatio");
          return this.__PROXY__.devicePixelRatio(...args);
        };
    
        // function 
        QPixmap.prototype.setDevicePixelRatio = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.setDevicePixelRatio");
          return this.__PROXY__.setDevicePixelRatio(...args);
        };
    
        // function 
        QPixmap.prototype.deviceIndependentSize = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.deviceIndependentSize");
          return this.__PROXY__.deviceIndependentSize(...args);
        };
    
        // function 
        QPixmap.prototype.hasAlpha = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.hasAlpha");
          return this.__PROXY__.hasAlpha(...args);
        };
    
        // function 
        QPixmap.prototype.hasAlphaChannel = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.hasAlphaChannel");
          return this.__PROXY__.hasAlphaChannel(...args);
        };
    
        // function 
        QPixmap.prototype.createHeuristicMask = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.createHeuristicMask");
          return this.__PROXY__.createHeuristicMask(...args);
        };
    
        // function 
        QPixmap.prototype.createMaskFromColor = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.createMaskFromColor");
          return this.__PROXY__.createMaskFromColor(...args);
        };
    
        // function 
        QPixmap.prototype.scaled = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.scaled");
          return this.__PROXY__.scaled(...args);
        };
    
        // function 
        QPixmap.prototype.scaledToWidth = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.scaledToWidth");
          return this.__PROXY__.scaledToWidth(...args);
        };
    
        // function 
        QPixmap.prototype.scaledToHeight = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.scaledToHeight");
          return this.__PROXY__.scaledToHeight(...args);
        };
    
        // function 
        QPixmap.prototype.transformed = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.transformed");
          return this.__PROXY__.transformed(...args);
        };
    
        // function 
        QPixmap.prototype.trueMatrix = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.trueMatrix");
          return this.__PROXY__.trueMatrix(...args);
        };
    
        // function 
        QPixmap.prototype.toImage = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.toImage");
          return this.__PROXY__.toImage(...args);
        };
    
        // function 
        QPixmap.prototype.fromImage = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.fromImage");
          return this.__PROXY__.fromImage(...args);
        };
    
        // function 
        QPixmap.prototype.fromImageReader = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.fromImageReader");
          return this.__PROXY__.fromImageReader(...args);
        };
    
        // function 
        QPixmap.prototype.load = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.load");
          return this.__PROXY__.load(...args);
        };
    
        // function 
        QPixmap.prototype.loadFromData = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.loadFromData");
          return this.__PROXY__.loadFromData(...args);
        };
    
        // function 
        QPixmap.prototype.save = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.save");
          return this.__PROXY__.save(...args);
        };
    
        // function 
        QPixmap.prototype.convertFromImage = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.convertFromImage");
          return this.__PROXY__.convertFromImage(...args);
        };
    
        // function 
        QPixmap.prototype.copy = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        QPixmap.prototype.scroll = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.scroll");
          return this.__PROXY__.scroll(...args);
        };
    
        // function 
        QPixmap.prototype.cacheKey = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.cacheKey");
          return this.__PROXY__.cacheKey(...args);
        };
    
        // function 
        QPixmap.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QPixmap.prototype.detach = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QPixmap.prototype.isQBitmap = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.isQBitmap");
          return this.__PROXY__.isQBitmap(...args);
        };
    
        // function 
        QPixmap.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.paintEngine");
          return this.__PROXY__.paintEngine(...args);
        };
    
        // function 
        QPixmap.prototype.metric = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.metric");
          return this.__PROXY__.metric(...args);
        };
    
        // function 
        QPixmap.prototype.fromImageInPlace = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.fromImageInPlace");
          return this.__PROXY__.fromImageInPlace(...args);
        };
    
        // function 
        QPixmap.prototype.doImageIO = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.doImageIO");
          return this.__PROXY__.doImageIO(...args);
        };
    
        // function 
        QPixmap.prototype.doInit = function(...args) 
          
        {
          //print("JS: QPixmap.prototype.doInit");
          return this.__PROXY__.doInit(...args);
        };
    

      // static functions:
      

        // static function 
        QPixmap.defaultDepth = function() 
          
        {
          //print("JS: QPixmap.defaultDepth");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.defaultDepth(
                  
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.defaultDepth(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.trueMatrix = function() 
          
        {
          //print("JS: QPixmap.trueMatrix");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.trueMatrix(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.trueMatrix(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.fromImage = function() 
          
        {
          //print("JS: QPixmap.fromImage");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.fromImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.fromImageReader = function() 
          
        {
          //print("JS: QPixmap.fromImageReader");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QPixmap_WrapperSingletonInstance.fromImageReader(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QPixmap);
  }

  
  else {
    
        print("QPixmap.fromImageReader(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QPixmap.fromImageInPlace = function() 
          
        {
          //print("JS: QPixmap.fromImageInPlace");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPixmap.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPixmap.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPixmap.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      