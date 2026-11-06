
      // auto generated
      //var self;

      // class constructor:
      function QSurfaceFormat() {
        

        // should be QSurfaceFormat_BaseJs.call(this, engine):
        //QSurfaceFormat.prototype = new QSurfaceFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSurfaceFormat.getIdStatic()))) {

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
            qWarning("QSurfaceFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSurfaceFormat_Wrapper(
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

      

        //copyProperties(this, wrapper, QSurfaceFormat);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSurfaceFormat_Wrapper(
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

      

        //copyProperties(this, wrapper, QSurfaceFormat);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSurfaceFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSurfaceFormat);
  }

  
  else {
    
        print("QSurfaceFormat(): wrong number / type of arguments");
      
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

      //QSurfaceFormat.prototype = new QSurfaceFormat_BaseJs(engine);
      //QSurfaceFormat.prototype = new QSurfaceFormat_Wrapper(engine);
      QSurfaceFormat.prototype = new Object();


      QSurfaceFormat.prototype.toString = function() {
          //return "QSurfaceFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSurfaceFormat [JS]";
        };
      QSurfaceFormat.getObjectType = function() {
        return RJSType_QSurfaceFormat.getIdStatic();
      };

      QSurfaceFormat.prototype.getObjectType = function() {
        return RJSType_QSurfaceFormat.getIdStatic();
      };

      QSurfaceFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSurfaceFormat.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: FormatOption
QSurfaceFormat.StereoBuffers = QSurfaceFormat_Wrapper.StereoBuffers;
QSurfaceFormat.DebugContext = QSurfaceFormat_Wrapper.DebugContext;
QSurfaceFormat.DeprecatedFunctions = QSurfaceFormat_Wrapper.DeprecatedFunctions;
QSurfaceFormat.ResetNotification = QSurfaceFormat_Wrapper.ResetNotification;
QSurfaceFormat.ProtectedContent = QSurfaceFormat_Wrapper.ProtectedContent;

  // enum: SwapBehavior
QSurfaceFormat.DefaultSwapBehavior = QSurfaceFormat_Wrapper.DefaultSwapBehavior;
QSurfaceFormat.SingleBuffer = QSurfaceFormat_Wrapper.SingleBuffer;
QSurfaceFormat.DoubleBuffer = QSurfaceFormat_Wrapper.DoubleBuffer;
QSurfaceFormat.TripleBuffer = QSurfaceFormat_Wrapper.TripleBuffer;

  // enum: RenderableType
QSurfaceFormat.DefaultRenderableType = QSurfaceFormat_Wrapper.DefaultRenderableType;
QSurfaceFormat.OpenGL = QSurfaceFormat_Wrapper.OpenGL;
QSurfaceFormat.OpenGLES = QSurfaceFormat_Wrapper.OpenGLES;
QSurfaceFormat.OpenVG = QSurfaceFormat_Wrapper.OpenVG;

  // enum: OpenGLContextProfile
QSurfaceFormat.NoProfile = QSurfaceFormat_Wrapper.NoProfile;
QSurfaceFormat.CoreProfile = QSurfaceFormat_Wrapper.CoreProfile;
QSurfaceFormat.CompatibilityProfile = QSurfaceFormat_Wrapper.CompatibilityProfile;

  // enum: ColorSpace
QSurfaceFormat.DefaultColorSpace = QSurfaceFormat_Wrapper.DefaultColorSpace;
QSurfaceFormat.sRGBColorSpace = QSurfaceFormat_Wrapper.sRGBColorSpace;


      // functions:
      
        // function 
        QSurfaceFormat.prototype.setDepthBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setDepthBufferSize");
          
              return this.__PROXY__.setDepthBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.depthBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.depthBufferSize");
          
              return this.__PROXY__.depthBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setStencilBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setStencilBufferSize");
          
              return this.__PROXY__.setStencilBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.stencilBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.stencilBufferSize");
          
              return this.__PROXY__.stencilBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setRedBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setRedBufferSize");
          
              return this.__PROXY__.setRedBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.redBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.redBufferSize");
          
              return this.__PROXY__.redBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setGreenBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setGreenBufferSize");
          
              return this.__PROXY__.setGreenBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.greenBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.greenBufferSize");
          
              return this.__PROXY__.greenBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setBlueBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setBlueBufferSize");
          
              return this.__PROXY__.setBlueBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.blueBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.blueBufferSize");
          
              return this.__PROXY__.blueBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setAlphaBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setAlphaBufferSize");
          
              return this.__PROXY__.setAlphaBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.alphaBufferSize = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.alphaBufferSize");
          
              return this.__PROXY__.alphaBufferSize(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setSamples = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setSamples");
          
              return this.__PROXY__.setSamples(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.samples = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.samples");
          
              return this.__PROXY__.samples(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setSwapBehavior = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setSwapBehavior");
          
              return this.__PROXY__.setSwapBehavior(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.swapBehavior = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.swapBehavior");
          
              return this.__PROXY__.swapBehavior(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.hasAlpha = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.hasAlpha");
          
              return this.__PROXY__.hasAlpha(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setProfile = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setProfile");
          
              return this.__PROXY__.setProfile(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.profile = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.profile");
          
              return this.__PROXY__.profile(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setRenderableType = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setRenderableType");
          
              return this.__PROXY__.setRenderableType(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.renderableType = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.renderableType");
          
              return this.__PROXY__.renderableType(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setMajorVersion = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setMajorVersion");
          
              return this.__PROXY__.setMajorVersion(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.majorVersion = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.majorVersion");
          
              return this.__PROXY__.majorVersion(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setMinorVersion = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setMinorVersion");
          
              return this.__PROXY__.setMinorVersion(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.minorVersion = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.minorVersion");
          
              return this.__PROXY__.minorVersion(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setVersion = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setVersion");
          
              return this.__PROXY__.setVersion(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.stereo = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.stereo");
          
              return this.__PROXY__.stereo(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setStereo = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setStereo");
          
              return this.__PROXY__.setStereo(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setOptions = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setOptions");
          
              return this.__PROXY__.setOptions(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setOption = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.testOption = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.options = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.options");
          
              return this.__PROXY__.options(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.swapInterval = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.swapInterval");
          
              return this.__PROXY__.swapInterval(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setSwapInterval = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setSwapInterval");
          
              return this.__PROXY__.setSwapInterval(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.setDefaultFormat = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.setDefaultFormat");
          
              return this.__PROXY__.setDefaultFormat(...args);
            
        };
        
        // function 
        QSurfaceFormat.prototype.defaultFormat = function(...args) 
          
        {
          //print("JS: QSurfaceFormat.prototype.defaultFormat");
          
              return this.__PROXY__.defaultFormat(...args);
            
        };
        

      // static functions:
      

        // static function 
        QSurfaceFormat.setDefaultFormat = function() 
          
        {
          //print("JS: QSurfaceFormat.setDefaultFormat");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSurfaceFormat_WrapperSingletonInstance.setDefaultFormat(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSurfaceFormat);
  }

  
  else {
    
        print("QSurfaceFormat.setDefaultFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSurfaceFormat.defaultFormat = function() 
          
        {
          //print("JS: QSurfaceFormat.defaultFormat");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSurfaceFormat_WrapperSingletonInstance.defaultFormat(
                  
                );
              

        //copyProperties(this, wrapper, QSurfaceFormat);
  }

  
  else {
    
        print("QSurfaceFormat.defaultFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      QSurfaceFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSurfaceFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSurfaceFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSurfaceFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSurfaceFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSurfaceFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      