
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsOpacityEffect() {
        

        // should be QGraphicsOpacityEffect_BaseJs.call(this, engine):
        //QGraphicsOpacityEffect.prototype = new QGraphicsOpacityEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QGraphicsOpacityEffect_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QGraphicsOpacityEffect);
            //}
          }
          else {
            qWarning("QGraphicsOpacityEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGraphicsOpacityEffect_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QGraphicsOpacityEffect);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGraphicsOpacityEffect);
  }

  
  else {
    
        print("QGraphicsOpacityEffect(): wrong number / type of arguments");
      
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

      //QGraphicsOpacityEffect.prototype = new QGraphicsOpacityEffect_BaseJs(engine);
      //QGraphicsOpacityEffect.prototype = new QGraphicsOpacityEffect_Wrapper(engine);
      QGraphicsOpacityEffect.prototype = new Object();

      QGraphicsOpacityEffect.prototype.toString = function() {
          //return "QGraphicsOpacityEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsOpacityEffect [JS]";
        };
      QGraphicsOpacityEffect.getObjectType = function() {
        
            return RJSType.QGraphicsOpacityEffect_Type;
          
      };

      QGraphicsOpacityEffect.prototype.getObjectType = function() {
        
            return RJSType.QGraphicsOpacityEffect_Type;
          
      };

      QGraphicsOpacityEffect.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QGraphicsOpacityEffect_Type:
              return true;
          
        case RJSType.QGraphicsEffect_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QGraphicsOpacityEffect_Type, 
          
            RJSType.QGraphicsEffect_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsOpacityEffect.SourceAttached = QGraphicsOpacityEffect_Wrapper.SourceAttached;
QGraphicsOpacityEffect.SourceDetached = QGraphicsOpacityEffect_Wrapper.SourceDetached;
QGraphicsOpacityEffect.SourceBoundingRectChanged = QGraphicsOpacityEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsOpacityEffect.SourceInvalidated = QGraphicsOpacityEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsOpacityEffect.NoPad = QGraphicsOpacityEffect_Wrapper.NoPad;
QGraphicsOpacityEffect.PadToTransparentBorder = QGraphicsOpacityEffect_Wrapper.PadToTransparentBorder;
QGraphicsOpacityEffect.PadToEffectiveBoundingRect = QGraphicsOpacityEffect_Wrapper.PadToEffectiveBoundingRect;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsOpacityEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsOpacityEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    