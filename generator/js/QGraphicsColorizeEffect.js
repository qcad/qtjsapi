
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsColorizeEffect() {
        

        // should be QGraphicsColorizeEffect_BaseJs.call(this, engine):
        //QGraphicsColorizeEffect.prototype = new QGraphicsColorizeEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGraphicsColorizeEffect.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QGraphicsColorizeEffect);
                
            //}
          }
          else {
            qWarning("QGraphicsColorizeEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGraphicsColorizeEffect_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGraphicsColorizeEffect);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGraphicsColorizeEffect);
  }

  
  else {
    
        print("QGraphicsColorizeEffect(): wrong number / type of arguments");
      
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

      //QGraphicsColorizeEffect.prototype = new QGraphicsColorizeEffect_BaseJs(engine);
      //QGraphicsColorizeEffect.prototype = new QGraphicsColorizeEffect_Wrapper(engine);
      QGraphicsColorizeEffect.prototype = new Object();

      QGraphicsColorizeEffect.prototype.toString = function() {
          //return "QGraphicsColorizeEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsColorizeEffect [JS]";
        };
      QGraphicsColorizeEffect.getObjectType = function() {
        return RJSType_QGraphicsColorizeEffect.getIdStatic();
      };

      QGraphicsColorizeEffect.prototype.getObjectType = function() {
        return RJSType_QGraphicsColorizeEffect.getIdStatic();
      };

      QGraphicsColorizeEffect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGraphicsColorizeEffect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QGraphicsEffect.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsColorizeEffect.SourceAttached = QGraphicsColorizeEffect_Wrapper.SourceAttached;
QGraphicsColorizeEffect.SourceDetached = QGraphicsColorizeEffect_Wrapper.SourceDetached;
QGraphicsColorizeEffect.SourceBoundingRectChanged = QGraphicsColorizeEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsColorizeEffect.SourceInvalidated = QGraphicsColorizeEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsColorizeEffect.NoPad = QGraphicsColorizeEffect_Wrapper.NoPad;
QGraphicsColorizeEffect.PadToTransparentBorder = QGraphicsColorizeEffect_Wrapper.PadToTransparentBorder;
QGraphicsColorizeEffect.PadToEffectiveBoundingRect = QGraphicsColorizeEffect_Wrapper.PadToEffectiveBoundingRect;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsColorizeEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsColorizeEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      