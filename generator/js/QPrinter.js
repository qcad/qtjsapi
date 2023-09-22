
      // auto generated
      //var self;

      // class constructor:
      function QPrinter() {
        

        // should be QPrinter_BaseJs.call(this, engine):
        //QPrinter.prototype = new QPrinter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QPrinter.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QPrinter);
            //}
          }
          else {
            qWarning("QPrinter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QPrinter_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPrinter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPrinter);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QPrinter_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QPrinter);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPrinter);
  }

  
  else {
    
        print("QPrinter(): wrong number / type of arguments");
      
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

      //QPrinter.prototype = new QPrinter_BaseJs(engine);
      //QPrinter.prototype = new QPrinter_Wrapper(engine);
      QPrinter.prototype = new Object();

      QPrinter.prototype.toString = function() {
          //return "QPrinter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPrinter [JS]";
        };
      QPrinter.getObjectType = function() {
        
            return RJSType_QPrinter.getIdStatic();
          
      };

      QPrinter.prototype.getObjectType = function() {
        
            return RJSType_QPrinter.getIdStatic();
          
      };

      QPrinter.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QPrinter.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPagedPaintDevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: PdfVersion
QPrinter.PdfVersion_1_4 = QPrinter_Wrapper.PdfVersion_1_4;
QPrinter.PdfVersion_A1b = QPrinter_Wrapper.PdfVersion_A1b;
QPrinter.PdfVersion_1_6 = QPrinter_Wrapper.PdfVersion_1_6;

  // enum: PrinterMode
QPrinter.ScreenResolution = QPrinter_Wrapper.ScreenResolution;
QPrinter.PrinterResolution = QPrinter_Wrapper.PrinterResolution;
QPrinter.HighResolution = QPrinter_Wrapper.HighResolution;

  // enum: PageOrder
QPrinter.FirstPageFirst = QPrinter_Wrapper.FirstPageFirst;
QPrinter.LastPageFirst = QPrinter_Wrapper.LastPageFirst;

  // enum: ColorMode
QPrinter.GrayScale = QPrinter_Wrapper.GrayScale;
QPrinter.Color = QPrinter_Wrapper.Color;

  // enum: PaperSource
QPrinter.OnlyOne = QPrinter_Wrapper.OnlyOne;
QPrinter.Lower = QPrinter_Wrapper.Lower;
QPrinter.Middle = QPrinter_Wrapper.Middle;
QPrinter.Manual = QPrinter_Wrapper.Manual;
QPrinter.Envelope = QPrinter_Wrapper.Envelope;
QPrinter.EnvelopeManual = QPrinter_Wrapper.EnvelopeManual;
QPrinter.Auto = QPrinter_Wrapper.Auto;
QPrinter.Tractor = QPrinter_Wrapper.Tractor;
QPrinter.SmallFormat = QPrinter_Wrapper.SmallFormat;
QPrinter.LargeFormat = QPrinter_Wrapper.LargeFormat;
QPrinter.LargeCapacity = QPrinter_Wrapper.LargeCapacity;
QPrinter.Cassette = QPrinter_Wrapper.Cassette;
QPrinter.FormSource = QPrinter_Wrapper.FormSource;
QPrinter.MaxPageSource = QPrinter_Wrapper.MaxPageSource;
QPrinter.CustomSource = QPrinter_Wrapper.CustomSource;
QPrinter.LastPaperSource = QPrinter_Wrapper.LastPaperSource;
QPrinter.Upper = QPrinter_Wrapper.Upper;

  // enum: PrinterState
QPrinter.Idle = QPrinter_Wrapper.Idle;
QPrinter.Active = QPrinter_Wrapper.Active;
QPrinter.Aborted = QPrinter_Wrapper.Aborted;
QPrinter.Error = QPrinter_Wrapper.Error;

  // enum: OutputFormat
QPrinter.NativeFormat = QPrinter_Wrapper.NativeFormat;
QPrinter.PdfFormat = QPrinter_Wrapper.PdfFormat;

  // enum: PrintRange
QPrinter.AllPages = QPrinter_Wrapper.AllPages;
QPrinter.Selection = QPrinter_Wrapper.Selection;
QPrinter.PageRange = QPrinter_Wrapper.PageRange;
QPrinter.CurrentPage = QPrinter_Wrapper.CurrentPage;

  // enum: Unit
QPrinter.Millimeter = QPrinter_Wrapper.Millimeter;
QPrinter.Point = QPrinter_Wrapper.Point;
QPrinter.Inch = QPrinter_Wrapper.Inch;
QPrinter.Pica = QPrinter_Wrapper.Pica;
QPrinter.Didot = QPrinter_Wrapper.Didot;
QPrinter.Cicero = QPrinter_Wrapper.Cicero;
QPrinter.DevicePixel = QPrinter_Wrapper.DevicePixel;

  // enum: DuplexMode
QPrinter.DuplexNone = QPrinter_Wrapper.DuplexNone;
QPrinter.DuplexAuto = QPrinter_Wrapper.DuplexAuto;
QPrinter.DuplexLongSide = QPrinter_Wrapper.DuplexLongSide;
QPrinter.DuplexShortSide = QPrinter_Wrapper.DuplexShortSide;


      // functions:
      

      // static functions:
      

        // static function 
        QPrinter.devicePixelRatioFScale = function() 
          
        {
          //print("JS: QPrinter.devicePixelRatioFScale");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QPrinter_WrapperSingletonInstance.devicePixelRatioFScale(
                  
                );
              

        //copyProperties(this, wrapper, QPrinter);
  }

  
  else {
    
        print("QPrinter.devicePixelRatioFScale(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPrinter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPrinter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    