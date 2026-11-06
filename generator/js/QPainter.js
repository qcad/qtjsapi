
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QPainter.prototype.device = function(...args) 
          
        {
          //print("JS: QPainter.prototype.device");
          
              return this.__PROXY__.device(...args);
            
        };
    
        // function 
        QPainter.prototype.begin = function(...args) 
          
        {
          //print("JS: QPainter.prototype.begin");
          
              return this.__PROXY__.begin(...args);
            
        };
    
        // function 
        QPainter.prototype.end = function(...args) 
          
        {
          //print("JS: QPainter.prototype.end");
          
              return this.__PROXY__.end(...args);
            
        };
    
        // function 
        QPainter.prototype.isActive = function(...args) 
          
        {
          //print("JS: QPainter.prototype.isActive");
          
              return this.__PROXY__.isActive(...args);
            
        };
    
        // function 
        QPainter.prototype.setCompositionMode = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setCompositionMode");
          
              return this.__PROXY__.setCompositionMode(...args);
            
        };
    
        // function 
        QPainter.prototype.compositionMode = function(...args) 
          
        {
          //print("JS: QPainter.prototype.compositionMode");
          
              return this.__PROXY__.compositionMode(...args);
            
        };
    
        // function 
        QPainter.prototype.font = function(...args) 
          
        {
          //print("JS: QPainter.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
    
        // function 
        QPainter.prototype.setFont = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QPainter.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QPainter.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QPainter.prototype.setPen = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setPen");
          
              return this.__PROXY__.setPen(...args);
            
        };
    
        // function 
        QPainter.prototype.pen = function(...args) 
          
        {
          //print("JS: QPainter.prototype.pen");
          
              return this.__PROXY__.pen(...args);
            
        };
    
        // function 
        QPainter.prototype.setBrush = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setBrush");
          
              return this.__PROXY__.setBrush(...args);
            
        };
    
        // function 
        QPainter.prototype.brush = function(...args) 
          
        {
          //print("JS: QPainter.prototype.brush");
          
              return this.__PROXY__.brush(...args);
            
        };
    
        // function 
        QPainter.prototype.setBackgroundMode = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setBackgroundMode");
          
              return this.__PROXY__.setBackgroundMode(...args);
            
        };
    
        // function 
        QPainter.prototype.backgroundMode = function(...args) 
          
        {
          //print("JS: QPainter.prototype.backgroundMode");
          
              return this.__PROXY__.backgroundMode(...args);
            
        };
    
        // function 
        QPainter.prototype.brushOrigin = function(...args) 
          
        {
          //print("JS: QPainter.prototype.brushOrigin");
          
              return this.__PROXY__.brushOrigin(...args);
            
        };
    
        // function 
        QPainter.prototype.setBrushOrigin = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setBrushOrigin");
          
              return this.__PROXY__.setBrushOrigin(...args);
            
        };
    
        // function 
        QPainter.prototype.setBackground = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setBackground");
          
              return this.__PROXY__.setBackground(...args);
            
        };
    
        // function 
        QPainter.prototype.background = function(...args) 
          
        {
          //print("JS: QPainter.prototype.background");
          
              return this.__PROXY__.background(...args);
            
        };
    
        // function 
        QPainter.prototype.opacity = function(...args) 
          
        {
          //print("JS: QPainter.prototype.opacity");
          
              return this.__PROXY__.opacity(...args);
            
        };
    
        // function 
        QPainter.prototype.setOpacity = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setOpacity");
          
              return this.__PROXY__.setOpacity(...args);
            
        };
    
        // function 
        QPainter.prototype.clipRegion = function(...args) 
          
        {
          //print("JS: QPainter.prototype.clipRegion");
          
              return this.__PROXY__.clipRegion(...args);
            
        };
    
        // function 
        QPainter.prototype.clipPath = function(...args) 
          
        {
          //print("JS: QPainter.prototype.clipPath");
          
              return this.__PROXY__.clipPath(...args);
            
        };
    
        // function 
        QPainter.prototype.setClipRect = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setClipRect");
          
              return this.__PROXY__.setClipRect(...args);
            
        };
    
        // function 
        QPainter.prototype.setClipRegion = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setClipRegion");
          
              return this.__PROXY__.setClipRegion(...args);
            
        };
    
        // function 
        QPainter.prototype.setClipPath = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setClipPath");
          
              return this.__PROXY__.setClipPath(...args);
            
        };
    
        // function 
        QPainter.prototype.setClipping = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setClipping");
          
              return this.__PROXY__.setClipping(...args);
            
        };
    
        // function 
        QPainter.prototype.hasClipping = function(...args) 
          
        {
          //print("JS: QPainter.prototype.hasClipping");
          
              return this.__PROXY__.hasClipping(...args);
            
        };
    
        // function 
        QPainter.prototype.clipBoundingRect = function(...args) 
          
        {
          //print("JS: QPainter.prototype.clipBoundingRect");
          
              return this.__PROXY__.clipBoundingRect(...args);
            
        };
    
        // function 
        QPainter.prototype.save = function(...args) 
          
        {
          //print("JS: QPainter.prototype.save");
          
              return this.__PROXY__.save(...args);
            
        };
    
        // function 
        QPainter.prototype.restore = function(...args) 
          
        {
          //print("JS: QPainter.prototype.restore");
          
              return this.__PROXY__.restore(...args);
            
        };
    
        // function 
        QPainter.prototype.setTransform = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setTransform");
          
              return this.__PROXY__.setTransform(...args);
            
        };
    
        // function 
        QPainter.prototype.transform = function(...args) 
          
        {
          //print("JS: QPainter.prototype.transform");
          
              return this.__PROXY__.transform(...args);
            
        };
    
        // function 
        QPainter.prototype.deviceTransform = function(...args) 
          
        {
          //print("JS: QPainter.prototype.deviceTransform");
          
              return this.__PROXY__.deviceTransform(...args);
            
        };
    
        // function 
        QPainter.prototype.resetTransform = function(...args) 
          
        {
          //print("JS: QPainter.prototype.resetTransform");
          
              return this.__PROXY__.resetTransform(...args);
            
        };
    
        // function 
        QPainter.prototype.setWorldTransform = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setWorldTransform");
          
              return this.__PROXY__.setWorldTransform(...args);
            
        };
    
        // function 
        QPainter.prototype.worldTransform = function(...args) 
          
        {
          //print("JS: QPainter.prototype.worldTransform");
          
              return this.__PROXY__.worldTransform(...args);
            
        };
    
        // function 
        QPainter.prototype.combinedTransform = function(...args) 
          
        {
          //print("JS: QPainter.prototype.combinedTransform");
          
              return this.__PROXY__.combinedTransform(...args);
            
        };
    
        // function 
        QPainter.prototype.setWorldMatrixEnabled = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setWorldMatrixEnabled");
          
              return this.__PROXY__.setWorldMatrixEnabled(...args);
            
        };
    
        // function 
        QPainter.prototype.worldMatrixEnabled = function(...args) 
          
        {
          //print("JS: QPainter.prototype.worldMatrixEnabled");
          
              return this.__PROXY__.worldMatrixEnabled(...args);
            
        };
    
        // function 
        QPainter.prototype.scale = function(...args) 
          
        {
          //print("JS: QPainter.prototype.scale");
          
              return this.__PROXY__.scale(...args);
            
        };
    
        // function 
        QPainter.prototype.shear = function(...args) 
          
        {
          //print("JS: QPainter.prototype.shear");
          
              return this.__PROXY__.shear(...args);
            
        };
    
        // function 
        QPainter.prototype.rotate = function(...args) 
          
        {
          //print("JS: QPainter.prototype.rotate");
          
              return this.__PROXY__.rotate(...args);
            
        };
    
        // function 
        QPainter.prototype.translate = function(...args) 
          
        {
          //print("JS: QPainter.prototype.translate");
          
              return this.__PROXY__.translate(...args);
            
        };
    
        // function 
        QPainter.prototype.window = function(...args) 
          
        {
          //print("JS: QPainter.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QPainter.prototype.setWindow = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setWindow");
          
              return this.__PROXY__.setWindow(...args);
            
        };
    
        // function 
        QPainter.prototype.viewport = function(...args) 
          
        {
          //print("JS: QPainter.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QPainter.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QPainter.prototype.setViewTransformEnabled = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setViewTransformEnabled");
          
              return this.__PROXY__.setViewTransformEnabled(...args);
            
        };
    
        // function 
        QPainter.prototype.viewTransformEnabled = function(...args) 
          
        {
          //print("JS: QPainter.prototype.viewTransformEnabled");
          
              return this.__PROXY__.viewTransformEnabled(...args);
            
        };
    
        // function 
        QPainter.prototype.strokePath = function(...args) 
          
        {
          //print("JS: QPainter.prototype.strokePath");
          
              return this.__PROXY__.strokePath(...args);
            
        };
    
        // function 
        QPainter.prototype.fillPath = function(...args) 
          
        {
          //print("JS: QPainter.prototype.fillPath");
          
              return this.__PROXY__.fillPath(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPath = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPath");
          
              return this.__PROXY__.drawPath(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPoint = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPoint");
          
              return this.__PROXY__.drawPoint(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPoints = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPoints");
          
              return this.__PROXY__.drawPoints(...args);
            
        };
    
        // function 
        QPainter.prototype.drawLine = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawLine");
          
              return this.__PROXY__.drawLine(...args);
            
        };
    
        // function 
        QPainter.prototype.drawLines = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawLines");
          
              return this.__PROXY__.drawLines(...args);
            
        };
    
        // function 
        QPainter.prototype.drawRect = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawRect");
          
              return this.__PROXY__.drawRect(...args);
            
        };
    
        // function 
        QPainter.prototype.drawRects = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawRects");
          
              return this.__PROXY__.drawRects(...args);
            
        };
    
        // function 
        QPainter.prototype.drawEllipse = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawEllipse");
          
              return this.__PROXY__.drawEllipse(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPolyline = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPolyline");
          
              return this.__PROXY__.drawPolyline(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPolygon = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPolygon");
          
              return this.__PROXY__.drawPolygon(...args);
            
        };
    
        // function 
        QPainter.prototype.drawConvexPolygon = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawConvexPolygon");
          
              return this.__PROXY__.drawConvexPolygon(...args);
            
        };
    
        // function 
        QPainter.prototype.drawArc = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawArc");
          
              return this.__PROXY__.drawArc(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPie = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPie");
          
              return this.__PROXY__.drawPie(...args);
            
        };
    
        // function 
        QPainter.prototype.drawChord = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawChord");
          
              return this.__PROXY__.drawChord(...args);
            
        };
    
        // function 
        QPainter.prototype.drawRoundedRect = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawRoundedRect");
          
              return this.__PROXY__.drawRoundedRect(...args);
            
        };
    
        // function 
        QPainter.prototype.drawTiledPixmap = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawTiledPixmap");
          
              return this.__PROXY__.drawTiledPixmap(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPicture = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPicture");
          
              return this.__PROXY__.drawPicture(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPixmap = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPixmap");
          
              return this.__PROXY__.drawPixmap(...args);
            
        };
    
        // function 
        QPainter.prototype.drawPixmapFragments = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawPixmapFragments");
          
              return this.__PROXY__.drawPixmapFragments(...args);
            
        };
    
        // function 
        QPainter.prototype.drawImage = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawImage");
          
              return this.__PROXY__.drawImage(...args);
            
        };
    
        // function 
        QPainter.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QPainter.prototype.layoutDirection = function(...args) 
          
        {
          //print("JS: QPainter.prototype.layoutDirection");
          
              return this.__PROXY__.layoutDirection(...args);
            
        };
    
        // function 
        QPainter.prototype.drawText = function(...args) 
          
        {
          //print("JS: QPainter.prototype.drawText");
          
              return this.__PROXY__.drawText(...args);
            
        };
    
        // function 
        QPainter.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QPainter.prototype.boundingRect");
          
              return this.__PROXY__.boundingRect(...args);
            
        };
    
        // function 
        QPainter.prototype.fillRect = function(...args) 
          
        {
          //print("JS: QPainter.prototype.fillRect");
          
              return this.__PROXY__.fillRect(...args);
            
        };
    
        // function 
        QPainter.prototype.eraseRect = function(...args) 
          
        {
          //print("JS: QPainter.prototype.eraseRect");
          
              return this.__PROXY__.eraseRect(...args);
            
        };
    
        // function 
        QPainter.prototype.setRenderHint = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setRenderHint");
          
              return this.__PROXY__.setRenderHint(...args);
            
        };
    
        // function 
        QPainter.prototype.setRenderHints = function(...args) 
          
        {
          //print("JS: QPainter.prototype.setRenderHints");
          
              return this.__PROXY__.setRenderHints(...args);
            
        };
    
        // function 
        QPainter.prototype.renderHints = function(...args) 
          
        {
          //print("JS: QPainter.prototype.renderHints");
          
              return this.__PROXY__.renderHints(...args);
            
        };
    
        // function 
        QPainter.prototype.testRenderHint = function(...args) 
          
        {
          //print("JS: QPainter.prototype.testRenderHint");
          
              return this.__PROXY__.testRenderHint(...args);
            
        };
    
        // function 
        QPainter.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QPainter.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
    
        // function 
        QPainter.prototype.beginNativePainting = function(...args) 
          
        {
          //print("JS: QPainter.prototype.beginNativePainting");
          
              return this.__PROXY__.beginNativePainting(...args);
            
        };
    
        // function 
        QPainter.prototype.endNativePainting = function(...args) 
          
        {
          //print("JS: QPainter.prototype.endNativePainting");
          
              return this.__PROXY__.endNativePainting(...args);
            
        };
    

      // static functions:
      QPainter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPainter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPainter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QPainter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      