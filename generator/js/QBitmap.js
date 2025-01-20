
      // auto generated
      //var self;

      // class constructor:
      function QBitmap() {
        

        // should be QBitmap_BaseJs.call(this, engine):
        //QBitmap.prototype = new QBitmap_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QBitmap.getIdStatic()))) {

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
            qWarning("QBitmap.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
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

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QBitmap_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap(): wrong number / type of arguments");
      
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

      //QBitmap.prototype = new QBitmap_BaseJs(engine);
      //QBitmap.prototype = new QBitmap_Wrapper(engine);
      QBitmap.prototype = new Object();

      QBitmap.prototype.toString = function() {
          //return "QBitmap [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QBitmap [JS]";
        };
      QBitmap.getObjectType = function() {
        return RJSType_QBitmap.getIdStatic();
      };

      QBitmap.prototype.getObjectType = function() {
        return RJSType_QBitmap.getIdStatic();
      };

      QBitmap.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QBitmap.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPixmap.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QBitmap.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.paintingActive");
          return this.__PROXY__.paintingActive(...args);
        };
    
        // function 
        QBitmap.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.widthMM");
          return this.__PROXY__.widthMM(...args);
        };
    
        // function 
        QBitmap.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.heightMM");
          return this.__PROXY__.heightMM(...args);
        };
    
        // function 
        QBitmap.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.logicalDpiX");
          return this.__PROXY__.logicalDpiX(...args);
        };
    
        // function 
        QBitmap.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.logicalDpiY");
          return this.__PROXY__.logicalDpiY(...args);
        };
    
        // function 
        QBitmap.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.physicalDpiX");
          return this.__PROXY__.physicalDpiX(...args);
        };
    
        // function 
        QBitmap.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.physicalDpiY");
          return this.__PROXY__.physicalDpiY(...args);
        };
    
        // function 
        QBitmap.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.devicePixelRatioF");
          return this.__PROXY__.devicePixelRatioF(...args);
        };
    
        // function 
        QBitmap.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.colorCount");
          return this.__PROXY__.colorCount(...args);
        };
    
        // function 
        QBitmap.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.initPainter");
          return this.__PROXY__.initPainter(...args);
        };
    
        // function 
        QBitmap.prototype.redirected = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.redirected");
          return this.__PROXY__.redirected(...args);
        };
    
        // function 
        QBitmap.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.sharedPainter");
          return this.__PROXY__.sharedPainter(...args);
        };
    
        // function 
        QBitmap.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.qt_paint_device_metric");
          return this.__PROXY__.qt_paint_device_metric(...args);
        };
    
        // function 
        QBitmap.prototype.isNull = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QBitmap.prototype.devType = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.devType");
          return this.__PROXY__.devType(...args);
        };
    
        // function 
        QBitmap.prototype.width = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QBitmap.prototype.height = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QBitmap.prototype.size = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QBitmap.prototype.rect = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.rect");
          return this.__PROXY__.rect(...args);
        };
    
        // function 
        QBitmap.prototype.depth = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.depth");
          return this.__PROXY__.depth(...args);
        };
    
        // function 
        QBitmap.prototype.fill = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.fill");
          return this.__PROXY__.fill(...args);
        };
    
        // function 
        QBitmap.prototype.mask = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.mask");
          return this.__PROXY__.mask(...args);
        };
    
        // function 
        QBitmap.prototype.setMask = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.setMask");
          return this.__PROXY__.setMask(...args);
        };
    
        // function 
        QBitmap.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.devicePixelRatio");
          return this.__PROXY__.devicePixelRatio(...args);
        };
    
        // function 
        QBitmap.prototype.setDevicePixelRatio = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.setDevicePixelRatio");
          return this.__PROXY__.setDevicePixelRatio(...args);
        };
    
        // function 
        QBitmap.prototype.deviceIndependentSize = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.deviceIndependentSize");
          return this.__PROXY__.deviceIndependentSize(...args);
        };
    
        // function 
        QBitmap.prototype.hasAlpha = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.hasAlpha");
          return this.__PROXY__.hasAlpha(...args);
        };
    
        // function 
        QBitmap.prototype.hasAlphaChannel = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.hasAlphaChannel");
          return this.__PROXY__.hasAlphaChannel(...args);
        };
    
        // function 
        QBitmap.prototype.createHeuristicMask = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.createHeuristicMask");
          return this.__PROXY__.createHeuristicMask(...args);
        };
    
        // function 
        QBitmap.prototype.createMaskFromColor = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.createMaskFromColor");
          return this.__PROXY__.createMaskFromColor(...args);
        };
    
        // function 
        QBitmap.prototype.scaled = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.scaled");
          return this.__PROXY__.scaled(...args);
        };
    
        // function 
        QBitmap.prototype.scaledToWidth = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.scaledToWidth");
          return this.__PROXY__.scaledToWidth(...args);
        };
    
        // function 
        QBitmap.prototype.scaledToHeight = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.scaledToHeight");
          return this.__PROXY__.scaledToHeight(...args);
        };
    
        // function 
        QBitmap.prototype.toImage = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.toImage");
          return this.__PROXY__.toImage(...args);
        };
    
        // function 
        QBitmap.prototype.load = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.load");
          return this.__PROXY__.load(...args);
        };
    
        // function 
        QBitmap.prototype.loadFromData = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.loadFromData");
          return this.__PROXY__.loadFromData(...args);
        };
    
        // function 
        QBitmap.prototype.save = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.save");
          return this.__PROXY__.save(...args);
        };
    
        // function 
        QBitmap.prototype.convertFromImage = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.convertFromImage");
          return this.__PROXY__.convertFromImage(...args);
        };
    
        // function 
        QBitmap.prototype.copy = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.copy");
          return this.__PROXY__.copy(...args);
        };
    
        // function 
        QBitmap.prototype.scroll = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.scroll");
          return this.__PROXY__.scroll(...args);
        };
    
        // function 
        QBitmap.prototype.cacheKey = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.cacheKey");
          return this.__PROXY__.cacheKey(...args);
        };
    
        // function 
        QBitmap.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QBitmap.prototype.detach = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QBitmap.prototype.isQBitmap = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.isQBitmap");
          return this.__PROXY__.isQBitmap(...args);
        };
    
        // function 
        QBitmap.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.paintEngine");
          return this.__PROXY__.paintEngine(...args);
        };
    
        // function 
        QBitmap.prototype.metric = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.metric");
          return this.__PROXY__.metric(...args);
        };
    
        // function 
        QBitmap.prototype.doImageIO = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.doImageIO");
          return this.__PROXY__.doImageIO(...args);
        };
    
        // function 
        QBitmap.prototype.doInit = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.doInit");
          return this.__PROXY__.doInit(...args);
        };
    
        // function 
        QBitmap.prototype.swap = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QBitmap.prototype.clear = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QBitmap.prototype.fromImage = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.fromImage");
          return this.__PROXY__.fromImage(...args);
        };
    
        // function 
        QBitmap.prototype.fromPixmap = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.fromPixmap");
          return this.__PROXY__.fromPixmap(...args);
        };
    
        // function 
        QBitmap.prototype.transformed = function(...args) 
          
        {
          //print("JS: QBitmap.prototype.transformed");
          return this.__PROXY__.transformed(...args);
        };
    

      // static functions:
      

        // static function 
        QBitmap.fromImage = function() 
          
        {
          //print("JS: QBitmap.fromImage");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.fromImage(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.fromImage(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QBitmap.fromPixmap = function() 
          
        {
          //print("JS: QBitmap.fromPixmap");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QBitmap_WrapperSingletonInstance.fromPixmap(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QBitmap);
  }

  
  else {
    
        print("QBitmap.fromPixmap(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QBitmap.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QBitmap.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QBitmap.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      