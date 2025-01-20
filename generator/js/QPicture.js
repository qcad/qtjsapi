
      // auto generated
      //var self;

      // class constructor:
      function QPicture() {
        

        // should be QPicture_BaseJs.call(this, engine):
        //QPicture.prototype = new QPicture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPicture.getIdStatic()))) {

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
            qWarning("QPicture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPicture_Wrapper(
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

      

        //copyProperties(this, wrapper, QPicture);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPicture_Wrapper(
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

      

        //copyProperties(this, wrapper, QPicture);
  }

  
  else {
    
        print("QPicture(): wrong number / type of arguments");
      
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

      //QPicture.prototype = new QPicture_BaseJs(engine);
      //QPicture.prototype = new QPicture_Wrapper(engine);
      QPicture.prototype = new Object();

      QPicture.prototype.toString = function() {
          //return "QPicture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPicture [JS]";
        };
      QPicture.getObjectType = function() {
        return RJSType_QPicture.getIdStatic();
      };

      QPicture.prototype.getObjectType = function() {
        return RJSType_QPicture.getIdStatic();
      };

      QPicture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPicture.getIdStatic()) {
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
        QPicture.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QPicture.prototype.paintingActive");
          return this.__PROXY__.paintingActive(...args);
        };
    
        // function 
        QPicture.prototype.width = function(...args) 
          
        {
          //print("JS: QPicture.prototype.width");
          return this.__PROXY__.width(...args);
        };
    
        // function 
        QPicture.prototype.height = function(...args) 
          
        {
          //print("JS: QPicture.prototype.height");
          return this.__PROXY__.height(...args);
        };
    
        // function 
        QPicture.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QPicture.prototype.widthMM");
          return this.__PROXY__.widthMM(...args);
        };
    
        // function 
        QPicture.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QPicture.prototype.heightMM");
          return this.__PROXY__.heightMM(...args);
        };
    
        // function 
        QPicture.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QPicture.prototype.logicalDpiX");
          return this.__PROXY__.logicalDpiX(...args);
        };
    
        // function 
        QPicture.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QPicture.prototype.logicalDpiY");
          return this.__PROXY__.logicalDpiY(...args);
        };
    
        // function 
        QPicture.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QPicture.prototype.physicalDpiX");
          return this.__PROXY__.physicalDpiX(...args);
        };
    
        // function 
        QPicture.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QPicture.prototype.physicalDpiY");
          return this.__PROXY__.physicalDpiY(...args);
        };
    
        // function 
        QPicture.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QPicture.prototype.devicePixelRatio");
          return this.__PROXY__.devicePixelRatio(...args);
        };
    
        // function 
        QPicture.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QPicture.prototype.devicePixelRatioF");
          return this.__PROXY__.devicePixelRatioF(...args);
        };
    
        // function 
        QPicture.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QPicture.prototype.colorCount");
          return this.__PROXY__.colorCount(...args);
        };
    
        // function 
        QPicture.prototype.depth = function(...args) 
          
        {
          //print("JS: QPicture.prototype.depth");
          return this.__PROXY__.depth(...args);
        };
    
        // function 
        QPicture.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QPicture.prototype.initPainter");
          return this.__PROXY__.initPainter(...args);
        };
    
        // function 
        QPicture.prototype.redirected = function(...args) 
          
        {
          //print("JS: QPicture.prototype.redirected");
          return this.__PROXY__.redirected(...args);
        };
    
        // function 
        QPicture.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QPicture.prototype.sharedPainter");
          return this.__PROXY__.sharedPainter(...args);
        };
    
        // function 
        QPicture.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QPicture.prototype.qt_paint_device_metric");
          return this.__PROXY__.qt_paint_device_metric(...args);
        };
    
        // function 
        QPicture.prototype.isNull = function(...args) 
          
        {
          //print("JS: QPicture.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QPicture.prototype.devType = function(...args) 
          
        {
          //print("JS: QPicture.prototype.devType");
          return this.__PROXY__.devType(...args);
        };
    
        // function 
        QPicture.prototype.size = function(...args) 
          
        {
          //print("JS: QPicture.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QPicture.prototype.data = function(...args) 
          
        {
          //print("JS: QPicture.prototype.data");
          return this.__PROXY__.data(...args);
        };
    
        // function 
        QPicture.prototype.play = function(...args) 
          
        {
          //print("JS: QPicture.prototype.play");
          return this.__PROXY__.play(...args);
        };
    
        // function 
        QPicture.prototype.load = function(...args) 
          
        {
          //print("JS: QPicture.prototype.load");
          return this.__PROXY__.load(...args);
        };
    
        // function 
        QPicture.prototype.save = function(...args) 
          
        {
          //print("JS: QPicture.prototype.save");
          return this.__PROXY__.save(...args);
        };
    
        // function 
        QPicture.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QPicture.prototype.boundingRect");
          return this.__PROXY__.boundingRect(...args);
        };
    
        // function 
        QPicture.prototype.setBoundingRect = function(...args) 
          
        {
          //print("JS: QPicture.prototype.setBoundingRect");
          return this.__PROXY__.setBoundingRect(...args);
        };
    
        // function 
        QPicture.prototype.swap = function(...args) 
          
        {
          //print("JS: QPicture.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QPicture.prototype.detach = function(...args) 
          
        {
          //print("JS: QPicture.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QPicture.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QPicture.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QPicture.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QPicture.prototype.paintEngine");
          return this.__PROXY__.paintEngine(...args);
        };
    
        // function 
        QPicture.prototype.metric = function(...args) 
          
        {
          //print("JS: QPicture.prototype.metric");
          return this.__PROXY__.metric(...args);
        };
    
        // function 
        QPicture.prototype.exec = function(...args) 
          
        {
          //print("JS: QPicture.prototype.exec");
          return this.__PROXY__.exec(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPicture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPicture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPicture.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      