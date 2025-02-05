
      // auto generated
      //var self;

      // class constructor:
      function QPainterPath() {
        

        // should be QPainterPath_BaseJs.call(this, engine):
        //QPainterPath.prototype = new QPainterPath_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPainterPath.getIdStatic()))) {

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
            qWarning("QPainterPath.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPainterPath_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPainterPath);
  }

  
  else {
    
        print("QPainterPath(): wrong number / type of arguments");
      
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

      //QPainterPath.prototype = new QPainterPath_BaseJs(engine);
      //QPainterPath.prototype = new QPainterPath_Wrapper(engine);
      QPainterPath.prototype = new Object();

      QPainterPath.prototype.toString = function() {
          //return "QPainterPath [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPainterPath [JS]";
        };
      QPainterPath.getObjectType = function() {
        return RJSType_QPainterPath.getIdStatic();
      };

      QPainterPath.prototype.getObjectType = function() {
        return RJSType_QPainterPath.getIdStatic();
      };

      QPainterPath.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPainterPath.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ElementType
QPainterPath.MoveToElement = QPainterPath_Wrapper.MoveToElement;
QPainterPath.LineToElement = QPainterPath_Wrapper.LineToElement;
QPainterPath.CurveToElement = QPainterPath_Wrapper.CurveToElement;
QPainterPath.CurveToDataElement = QPainterPath_Wrapper.CurveToDataElement;


      // functions:
      
        // function 
        QPainterPath.prototype.swap = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QPainterPath.prototype.clear = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QPainterPath.prototype.reserve = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.reserve");
          return this.__PROXY__.reserve(...args);
        };
    
        // function 
        QPainterPath.prototype.capacity = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.capacity");
          return this.__PROXY__.capacity(...args);
        };
    
        // function 
        QPainterPath.prototype.closeSubpath = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.closeSubpath");
          return this.__PROXY__.closeSubpath(...args);
        };
    
        // function 
        QPainterPath.prototype.moveTo = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.moveTo");
          return this.__PROXY__.moveTo(...args);
        };
    
        // function 
        QPainterPath.prototype.lineTo = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.lineTo");
          return this.__PROXY__.lineTo(...args);
        };
    
        // function 
        QPainterPath.prototype.arcMoveTo = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.arcMoveTo");
          return this.__PROXY__.arcMoveTo(...args);
        };
    
        // function 
        QPainterPath.prototype.arcTo = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.arcTo");
          return this.__PROXY__.arcTo(...args);
        };
    
        // function 
        QPainterPath.prototype.cubicTo = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.cubicTo");
          return this.__PROXY__.cubicTo(...args);
        };
    
        // function 
        QPainterPath.prototype.quadTo = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.quadTo");
          return this.__PROXY__.quadTo(...args);
        };
    
        // function 
        QPainterPath.prototype.currentPosition = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.currentPosition");
          return this.__PROXY__.currentPosition(...args);
        };
    
        // function 
        QPainterPath.prototype.addRect = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.addRect");
          return this.__PROXY__.addRect(...args);
        };
    
        // function 
        QPainterPath.prototype.addEllipse = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.addEllipse");
          return this.__PROXY__.addEllipse(...args);
        };
    
        // function 
        QPainterPath.prototype.addPolygon = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.addPolygon");
          return this.__PROXY__.addPolygon(...args);
        };
    
        // function 
        QPainterPath.prototype.addText = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.addText");
          return this.__PROXY__.addText(...args);
        };
    
        // function 
        QPainterPath.prototype.addPath = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.addPath");
          return this.__PROXY__.addPath(...args);
        };
    
        // function 
        QPainterPath.prototype.addRegion = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.addRegion");
          return this.__PROXY__.addRegion(...args);
        };
    
        // function 
        QPainterPath.prototype.addRoundedRect = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.addRoundedRect");
          return this.__PROXY__.addRoundedRect(...args);
        };
    
        // function 
        QPainterPath.prototype.connectPath = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.connectPath");
          return this.__PROXY__.connectPath(...args);
        };
    
        // function 
        QPainterPath.prototype.contains = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.contains");
          return this.__PROXY__.contains(...args);
        };
    
        // function 
        QPainterPath.prototype.intersects = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.intersects");
          return this.__PROXY__.intersects(...args);
        };
    
        // function 
        QPainterPath.prototype.translate = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.translate");
          return this.__PROXY__.translate(...args);
        };
    
        // function 
        QPainterPath.prototype.translated = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.translated");
          return this.__PROXY__.translated(...args);
        };
    
        // function 
        QPainterPath.prototype.boundingRect = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.boundingRect");
          return this.__PROXY__.boundingRect(...args);
        };
    
        // function 
        QPainterPath.prototype.controlPointRect = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.controlPointRect");
          return this.__PROXY__.controlPointRect(...args);
        };
    
        // function 
        QPainterPath.prototype.fillRule = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.fillRule");
          return this.__PROXY__.fillRule(...args);
        };
    
        // function 
        QPainterPath.prototype.setFillRule = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.setFillRule");
          return this.__PROXY__.setFillRule(...args);
        };
    
        // function 
        QPainterPath.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QPainterPath.prototype.toReversed = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.toReversed");
          return this.__PROXY__.toReversed(...args);
        };
    
        // function 
        QPainterPath.prototype.toSubpathPolygons = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.toSubpathPolygons");
          return this.__PROXY__.toSubpathPolygons(...args);
        };
    
        // function 
        QPainterPath.prototype.toFillPolygons = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.toFillPolygons");
          return this.__PROXY__.toFillPolygons(...args);
        };
    
        // function 
        QPainterPath.prototype.toFillPolygon = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.toFillPolygon");
          return this.__PROXY__.toFillPolygon(...args);
        };
    
        // function 
        QPainterPath.prototype.elementCount = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.elementCount");
          return this.__PROXY__.elementCount(...args);
        };
    
        // function 
        QPainterPath.prototype.setElementPositionAt = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.setElementPositionAt");
          return this.__PROXY__.setElementPositionAt(...args);
        };
    
        // function 
        QPainterPath.prototype.length = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.length");
          return this.__PROXY__.length(...args);
        };
    
        // function 
        QPainterPath.prototype.percentAtLength = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.percentAtLength");
          return this.__PROXY__.percentAtLength(...args);
        };
    
        // function 
        QPainterPath.prototype.pointAtPercent = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.pointAtPercent");
          return this.__PROXY__.pointAtPercent(...args);
        };
    
        // function 
        QPainterPath.prototype.angleAtPercent = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.angleAtPercent");
          return this.__PROXY__.angleAtPercent(...args);
        };
    
        // function 
        QPainterPath.prototype.slopeAtPercent = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.slopeAtPercent");
          return this.__PROXY__.slopeAtPercent(...args);
        };
    
        // function 
        QPainterPath.prototype.united = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.united");
          return this.__PROXY__.united(...args);
        };
    
        // function 
        QPainterPath.prototype.intersected = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.intersected");
          return this.__PROXY__.intersected(...args);
        };
    
        // function 
        QPainterPath.prototype.subtracted = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.subtracted");
          return this.__PROXY__.subtracted(...args);
        };
    
        // function 
        QPainterPath.prototype.simplified = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.simplified");
          return this.__PROXY__.simplified(...args);
        };
    
        // function 
        QPainterPath.prototype.ensureData = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.ensureData");
          return this.__PROXY__.ensureData(...args);
        };
    
        // function 
        QPainterPath.prototype.ensureData_helper = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.ensureData_helper");
          return this.__PROXY__.ensureData_helper(...args);
        };
    
        // function 
        QPainterPath.prototype.detach = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QPainterPath.prototype.setDirty = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.setDirty");
          return this.__PROXY__.setDirty(...args);
        };
    
        // function 
        QPainterPath.prototype.computeBoundingRect = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.computeBoundingRect");
          return this.__PROXY__.computeBoundingRect(...args);
        };
    
        // function 
        QPainterPath.prototype.computeControlPointRect = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.computeControlPointRect");
          return this.__PROXY__.computeControlPointRect(...args);
        };
    
        // function 
        QPainterPath.prototype.d_func = function(...args) 
          
        {
          //print("JS: QPainterPath.prototype.d_func");
          return this.__PROXY__.d_func(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPainterPath.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPainterPath.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPainterPath.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      