
      // auto generated
      //var self;

      // class constructor:
      function QGraphicsEffect() {
        

        // should be QGraphicsEffect_BaseJs.call(this, engine):
        //QGraphicsEffect.prototype = new QGraphicsEffect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGraphicsEffect.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QGraphicsEffect);
                
            //}
          }
          else {
            qWarning("QGraphicsEffect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QGraphicsEffect.js: No constructor found for class QGraphicsEffect");
            
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

      //QGraphicsEffect.prototype = new QGraphicsEffect_BaseJs(engine);
      //QGraphicsEffect.prototype = new QGraphicsEffect_Wrapper(engine);
      QGraphicsEffect.prototype = new Object();

      QGraphicsEffect.prototype.toString = function() {
          //return "QGraphicsEffect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGraphicsEffect [JS]";
        };
      QGraphicsEffect.getObjectType = function() {
        return RJSType_QGraphicsEffect.getIdStatic();
      };

      QGraphicsEffect.prototype.getObjectType = function() {
        return RJSType_QGraphicsEffect.getIdStatic();
      };

      QGraphicsEffect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGraphicsEffect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ChangeFlag
QGraphicsEffect.SourceAttached = QGraphicsEffect_Wrapper.SourceAttached;
QGraphicsEffect.SourceDetached = QGraphicsEffect_Wrapper.SourceDetached;
QGraphicsEffect.SourceBoundingRectChanged = QGraphicsEffect_Wrapper.SourceBoundingRectChanged;
QGraphicsEffect.SourceInvalidated = QGraphicsEffect_Wrapper.SourceInvalidated;

  // enum: PixmapPadMode
QGraphicsEffect.NoPad = QGraphicsEffect_Wrapper.NoPad;
QGraphicsEffect.PadToTransparentBorder = QGraphicsEffect_Wrapper.PadToTransparentBorder;
QGraphicsEffect.PadToEffectiveBoundingRect = QGraphicsEffect_Wrapper.PadToEffectiveBoundingRect;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGraphicsEffect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGraphicsEffect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      