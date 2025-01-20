
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
              
                  copyProperties(this, wrapper, QSurfaceFormat);
                
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
          
            copyProperties(this, wrapper, QSurfaceFormat);
          

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
          
            copyProperties(this, wrapper, QSurfaceFormat);
          

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
          
            copyProperties(this, wrapper, QSurfaceFormat);
          

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

      