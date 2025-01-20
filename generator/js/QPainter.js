
      // auto generated
      //var self;

      // class constructor:
      function QPainter() {
        

        // should be QPainter_BaseJs.call(this, engine):
        //QPainter.prototype = new QPainter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPainter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPainter);
                
            //}
          }
          else {
            qWarning("QPainter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPainter_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPainter);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPainter);
  }

  
  else {
    
        print("QPainter(): wrong number / type of arguments");
      
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

      //QPainter.prototype = new QPainter_BaseJs(engine);
      //QPainter.prototype = new QPainter_Wrapper(engine);
      QPainter.prototype = new Object();

      QPainter.prototype.toString = function() {
          //return "QPainter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPainter [JS]";
        };
      QPainter.getObjectType = function() {
        return RJSType_QPainter.getIdStatic();
      };

      QPainter.prototype.getObjectType = function() {
        return RJSType_QPainter.getIdStatic();
      };

      QPainter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPainter.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: RenderHint
QPainter.Antialiasing = QPainter_Wrapper.Antialiasing;
QPainter.TextAntialiasing = QPainter_Wrapper.TextAntialiasing;
QPainter.SmoothPixmapTransform = QPainter_Wrapper.SmoothPixmapTransform;
QPainter.VerticalSubpixelPositioning = QPainter_Wrapper.VerticalSubpixelPositioning;
QPainter.LosslessImageRendering = QPainter_Wrapper.LosslessImageRendering;

  // enum: PixmapFragmentHint
QPainter.OpaqueHint = QPainter_Wrapper.OpaqueHint;

  // enum: CompositionMode
QPainter.CompositionMode_SourceOver = QPainter_Wrapper.CompositionMode_SourceOver;
QPainter.CompositionMode_DestinationOver = QPainter_Wrapper.CompositionMode_DestinationOver;
QPainter.CompositionMode_Clear = QPainter_Wrapper.CompositionMode_Clear;
QPainter.CompositionMode_Source = QPainter_Wrapper.CompositionMode_Source;
QPainter.CompositionMode_Destination = QPainter_Wrapper.CompositionMode_Destination;
QPainter.CompositionMode_SourceIn = QPainter_Wrapper.CompositionMode_SourceIn;
QPainter.CompositionMode_DestinationIn = QPainter_Wrapper.CompositionMode_DestinationIn;
QPainter.CompositionMode_SourceOut = QPainter_Wrapper.CompositionMode_SourceOut;
QPainter.CompositionMode_DestinationOut = QPainter_Wrapper.CompositionMode_DestinationOut;
QPainter.CompositionMode_SourceAtop = QPainter_Wrapper.CompositionMode_SourceAtop;
QPainter.CompositionMode_DestinationAtop = QPainter_Wrapper.CompositionMode_DestinationAtop;
QPainter.CompositionMode_Xor = QPainter_Wrapper.CompositionMode_Xor;
QPainter.CompositionMode_Plus = QPainter_Wrapper.CompositionMode_Plus;
QPainter.CompositionMode_Multiply = QPainter_Wrapper.CompositionMode_Multiply;
QPainter.CompositionMode_Screen = QPainter_Wrapper.CompositionMode_Screen;
QPainter.CompositionMode_Overlay = QPainter_Wrapper.CompositionMode_Overlay;
QPainter.CompositionMode_Darken = QPainter_Wrapper.CompositionMode_Darken;
QPainter.CompositionMode_Lighten = QPainter_Wrapper.CompositionMode_Lighten;
QPainter.CompositionMode_ColorDodge = QPainter_Wrapper.CompositionMode_ColorDodge;
QPainter.CompositionMode_ColorBurn = QPainter_Wrapper.CompositionMode_ColorBurn;
QPainter.CompositionMode_HardLight = QPainter_Wrapper.CompositionMode_HardLight;
QPainter.CompositionMode_SoftLight = QPainter_Wrapper.CompositionMode_SoftLight;
QPainter.CompositionMode_Difference = QPainter_Wrapper.CompositionMode_Difference;
QPainter.CompositionMode_Exclusion = QPainter_Wrapper.CompositionMode_Exclusion;
QPainter.RasterOp_SourceOrDestination = QPainter_Wrapper.RasterOp_SourceOrDestination;
QPainter.RasterOp_SourceAndDestination = QPainter_Wrapper.RasterOp_SourceAndDestination;
QPainter.RasterOp_SourceXorDestination = QPainter_Wrapper.RasterOp_SourceXorDestination;
QPainter.RasterOp_NotSourceAndNotDestination = QPainter_Wrapper.RasterOp_NotSourceAndNotDestination;
QPainter.RasterOp_NotSourceOrNotDestination = QPainter_Wrapper.RasterOp_NotSourceOrNotDestination;
QPainter.RasterOp_NotSourceXorDestination = QPainter_Wrapper.RasterOp_NotSourceXorDestination;
QPainter.RasterOp_NotSource = QPainter_Wrapper.RasterOp_NotSource;
QPainter.RasterOp_NotSourceAndDestination = QPainter_Wrapper.RasterOp_NotSourceAndDestination;
QPainter.RasterOp_SourceAndNotDestination = QPainter_Wrapper.RasterOp_SourceAndNotDestination;
QPainter.RasterOp_NotSourceOrDestination = QPainter_Wrapper.RasterOp_NotSourceOrDestination;
QPainter.RasterOp_SourceOrNotDestination = QPainter_Wrapper.RasterOp_SourceOrNotDestination;
QPainter.RasterOp_ClearDestination = QPainter_Wrapper.RasterOp_ClearDestination;
QPainter.RasterOp_SetDestination = QPainter_Wrapper.RasterOp_SetDestination;
QPainter.RasterOp_NotDestination = QPainter_Wrapper.RasterOp_NotDestination;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPainter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPainter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      