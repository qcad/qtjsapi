
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsBlurEffect() {
        

        // should be QGraphicsBlurEffect_BaseJs.call(this, engine):
        //QGraphicsBlurEffect.prototype = new QGraphicsBlurEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGraphicsBlurEffect.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QGraphicsBlurEffect);
            //}
          }
          else {
            qWarning("QGraphicsBlurEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGraphicsBlurEffect_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QGraphicsBlurEffect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGraphicsBlurEffect);
  }

  
  else {
    
        print("QGraphicsBlurEffect(): wrong number / type of arguments");
      
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

      //QGraphicsBlurEffect.prototype = new QGraphicsBlurEffect_BaseJs(engine);
      //QGraphicsBlurEffect.prototype = new QGraphicsBlurEffect_Wrapper(engine);
      QGraphicsBlurEffect.prototype = new Object();

      QGraphicsBlurEffect.prototype.toString = function() {
          //return "QGraphicsBlurEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsBlurEffect [JS]";
        };
      QGraphicsBlurEffect.getObjectType = function() {
        return RJSType_QGraphicsBlurEffect.getIdStatic();
      };

      QGraphicsBlurEffect.prototype.getObjectType = function() {
        return RJSType_QGraphicsBlurEffect.getIdStatic();
      };

      QGraphicsBlurEffect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGraphicsBlurEffect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGraphicsEffect.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsBlurEffect.SourceAttached = QGraphicsBlurEffect_Wrapper.SourceAttached;
QGraphicsBlurEffect.SourceDetached = QGraphicsBlurEffect_Wrapper.SourceDetached;
QGraphicsBlurEffect.SourceBoundingRectChanged = QGraphicsBlurEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsBlurEffect.SourceInvalidated = QGraphicsBlurEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsBlurEffect.NoPad = QGraphicsBlurEffect_Wrapper.NoPad;
QGraphicsBlurEffect.PadToTransparentBorder = QGraphicsBlurEffect_Wrapper.PadToTransparentBorder;
QGraphicsBlurEffect.PadToEffectiveBoundingRect = QGraphicsBlurEffect_Wrapper.PadToEffectiveBoundingRect;

  // enum: BlurHint
QGraphicsBlurEffect.PerformanceHint = QGraphicsBlurEffect_Wrapper.PerformanceHint;
QGraphicsBlurEffect.QualityHint = QGraphicsBlurEffect_Wrapper.QualityHint;
QGraphicsBlurEffect.AnimationHint = QGraphicsBlurEffect_Wrapper.AnimationHint;


      // functions:
      

      // static functions:
      

        // static function 
        QGraphicsBlurEffect.tr = function() 
          
        {
          //print("JS: QGraphicsBlurEffect.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QGraphicsBlurEffect_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QGraphicsBlurEffect);
  }

  
  else {
    
        print("QGraphicsBlurEffect.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsBlurEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsBlurEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    