
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
            arguments[2].getWrappedType()===RJSType_QPrinter.getIdStatic()))) {

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QPrinter.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
        
        // function 
        QPrinter.prototype.width = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.width");
          
              return this.__PROXY__.width(...args);
            
        };
        
        // function 
        QPrinter.prototype.height = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.height");
          
              return this.__PROXY__.height(...args);
            
        };
        
        // function 
        QPrinter.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
        
        // function 
        QPrinter.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
        
        // function 
        QPrinter.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
        
        // function 
        QPrinter.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
        
        // function 
        QPrinter.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
        
        // function 
        QPrinter.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
        
        // function 
        QPrinter.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
        
        // function 
        QPrinter.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
        
        // function 
        QPrinter.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
        
        // function 
        QPrinter.prototype.depth = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
        
        // function 
        QPrinter.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QPrinter.prototype.redirected = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QPrinter.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QPrinter.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPageLayout = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPageLayout");
          
              return this.__PROXY__.setPageLayout(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPageSize = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPageSize");
          
              return this.__PROXY__.setPageSize(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPageOrientation = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPageOrientation");
          
              return this.__PROXY__.setPageOrientation(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPageMargins = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPageMargins");
          
              return this.__PROXY__.setPageMargins(...args);
            
        };
        
        // function 
        QPrinter.prototype.pageLayout = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.pageLayout");
          
              return this.__PROXY__.pageLayout(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPageRanges = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPageRanges");
          
              return this.__PROXY__.setPageRanges(...args);
            
        };
        
        // function 
        QPrinter.prototype.pageRanges = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.pageRanges");
          
              return this.__PROXY__.pageRanges(...args);
            
        };
        
        // function 
        QPrinter.prototype.dd = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.dd");
          
              return this.__PROXY__.dd(...args);
            
        };
        
        // function 
        QPrinter.prototype.devType = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QPrinter.prototype.setOutputFormat = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setOutputFormat");
          
              return this.__PROXY__.setOutputFormat(...args);
            
        };
        
        // function 
        QPrinter.prototype.outputFormat = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.outputFormat");
          
              return this.__PROXY__.outputFormat(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPdfVersion = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPdfVersion");
          
              return this.__PROXY__.setPdfVersion(...args);
            
        };
        
        // function 
        QPrinter.prototype.pdfVersion = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.pdfVersion");
          
              return this.__PROXY__.pdfVersion(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPrinterName = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPrinterName");
          
              return this.__PROXY__.setPrinterName(...args);
            
        };
        
        // function 
        QPrinter.prototype.printerName = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.printerName");
          
              return this.__PROXY__.printerName(...args);
            
        };
        
        // function 
        QPrinter.prototype.isValid = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QPrinter.prototype.setOutputFileName = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setOutputFileName");
          
              return this.__PROXY__.setOutputFileName(...args);
            
        };
        
        // function 
        QPrinter.prototype.outputFileName = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.outputFileName");
          
              return this.__PROXY__.outputFileName(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPrintProgram = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPrintProgram");
          
              return this.__PROXY__.setPrintProgram(...args);
            
        };
        
        // function 
        QPrinter.prototype.printProgram = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.printProgram");
          
              return this.__PROXY__.printProgram(...args);
            
        };
        
        // function 
        QPrinter.prototype.setDocName = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setDocName");
          
              return this.__PROXY__.setDocName(...args);
            
        };
        
        // function 
        QPrinter.prototype.docName = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.docName");
          
              return this.__PROXY__.docName(...args);
            
        };
        
        // function 
        QPrinter.prototype.setCreator = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setCreator");
          
              return this.__PROXY__.setCreator(...args);
            
        };
        
        // function 
        QPrinter.prototype.creator = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.creator");
          
              return this.__PROXY__.creator(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPageOrder = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPageOrder");
          
              return this.__PROXY__.setPageOrder(...args);
            
        };
        
        // function 
        QPrinter.prototype.pageOrder = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.pageOrder");
          
              return this.__PROXY__.pageOrder(...args);
            
        };
        
        // function 
        QPrinter.prototype.setResolution = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setResolution");
          
              return this.__PROXY__.setResolution(...args);
            
        };
        
        // function 
        QPrinter.prototype.resolution = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.resolution");
          
              return this.__PROXY__.resolution(...args);
            
        };
        
        // function 
        QPrinter.prototype.setColorMode = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setColorMode");
          
              return this.__PROXY__.setColorMode(...args);
            
        };
        
        // function 
        QPrinter.prototype.colorMode = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.colorMode");
          
              return this.__PROXY__.colorMode(...args);
            
        };
        
        // function 
        QPrinter.prototype.setCollateCopies = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setCollateCopies");
          
              return this.__PROXY__.setCollateCopies(...args);
            
        };
        
        // function 
        QPrinter.prototype.collateCopies = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.collateCopies");
          
              return this.__PROXY__.collateCopies(...args);
            
        };
        
        // function 
        QPrinter.prototype.setFullPage = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setFullPage");
          
              return this.__PROXY__.setFullPage(...args);
            
        };
        
        // function 
        QPrinter.prototype.fullPage = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.fullPage");
          
              return this.__PROXY__.fullPage(...args);
            
        };
        
        // function 
        QPrinter.prototype.setCopyCount = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setCopyCount");
          
              return this.__PROXY__.setCopyCount(...args);
            
        };
        
        // function 
        QPrinter.prototype.copyCount = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.copyCount");
          
              return this.__PROXY__.copyCount(...args);
            
        };
        
        // function 
        QPrinter.prototype.supportsMultipleCopies = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.supportsMultipleCopies");
          
              return this.__PROXY__.supportsMultipleCopies(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPaperSource = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPaperSource");
          
              return this.__PROXY__.setPaperSource(...args);
            
        };
        
        // function 
        QPrinter.prototype.paperSource = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.paperSource");
          
              return this.__PROXY__.paperSource(...args);
            
        };
        
        // function 
        QPrinter.prototype.setDuplex = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setDuplex");
          
              return this.__PROXY__.setDuplex(...args);
            
        };
        
        // function 
        QPrinter.prototype.duplex = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.duplex");
          
              return this.__PROXY__.duplex(...args);
            
        };
        
        // function 
        QPrinter.prototype.supportedResolutions = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.supportedResolutions");
          
              return this.__PROXY__.supportedResolutions(...args);
            
        };
        
        // function 
        QPrinter.prototype.supportedPaperSources = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.supportedPaperSources");
          
              return this.__PROXY__.supportedPaperSources(...args);
            
        };
        
        // function 
        QPrinter.prototype.setFontEmbeddingEnabled = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setFontEmbeddingEnabled");
          
              return this.__PROXY__.setFontEmbeddingEnabled(...args);
            
        };
        
        // function 
        QPrinter.prototype.fontEmbeddingEnabled = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.fontEmbeddingEnabled");
          
              return this.__PROXY__.fontEmbeddingEnabled(...args);
            
        };
        
        // function 
        QPrinter.prototype.paperRect = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.paperRect");
          
              return this.__PROXY__.paperRect(...args);
            
        };
        
        // function 
        QPrinter.prototype.pageRect = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.pageRect");
          
              return this.__PROXY__.pageRect(...args);
            
        };
        
        // function 
        QPrinter.prototype.printerSelectionOption = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.printerSelectionOption");
          
              return this.__PROXY__.printerSelectionOption(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPrinterSelectionOption = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPrinterSelectionOption");
          
              return this.__PROXY__.setPrinterSelectionOption(...args);
            
        };
        
        // function 
        QPrinter.prototype.newPage = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.newPage");
          
              return this.__PROXY__.newPage(...args);
            
        };
        
        // function 
        QPrinter.prototype.abort = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.abort");
          
              return this.__PROXY__.abort(...args);
            
        };
        
        // function 
        QPrinter.prototype.printerState = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.printerState");
          
              return this.__PROXY__.printerState(...args);
            
        };
        
        // function 
        QPrinter.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
        
        // function 
        QPrinter.prototype.setFromTo = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setFromTo");
          
              return this.__PROXY__.setFromTo(...args);
            
        };
        
        // function 
        QPrinter.prototype.fromPage = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.fromPage");
          
              return this.__PROXY__.fromPage(...args);
            
        };
        
        // function 
        QPrinter.prototype.toPage = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.toPage");
          
              return this.__PROXY__.toPage(...args);
            
        };
        
        // function 
        QPrinter.prototype.setPrintRange = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setPrintRange");
          
              return this.__PROXY__.setPrintRange(...args);
            
        };
        
        // function 
        QPrinter.prototype.printRange = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.printRange");
          
              return this.__PROXY__.printRange(...args);
            
        };
        
        // function 
        QPrinter.prototype.metric = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QPrinter.prototype.setEngines = function(...args) 
          
        {
          //print("JS: QPrinter.prototype.setEngines");
          
              return this.__PROXY__.setEngines(...args);
            
        };
        

      // static functions:
      QPrinter.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPrinter.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPrinter.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QPrinter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      