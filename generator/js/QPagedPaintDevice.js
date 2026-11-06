
      // auto generated
      //var self;

      // class constructor:
      function QPagedPaintDevice() {
        

        // should be QPagedPaintDevice_BaseJs.call(this, engine):
        //QPagedPaintDevice.prototype = new QPagedPaintDevice_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPagedPaintDevice.getIdStatic()))) {

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
            qWarning("QPagedPaintDevice.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QPagedPaintDevice.js: No constructor found for class QPagedPaintDevice");
            
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

      //QPagedPaintDevice.prototype = new QPagedPaintDevice_BaseJs(engine);
      //QPagedPaintDevice.prototype = new QPagedPaintDevice_Wrapper(engine);
      QPagedPaintDevice.prototype = new Object();


      QPagedPaintDevice.prototype.toString = function() {
          //return "QPagedPaintDevice [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPagedPaintDevice [JS]";
        };
      QPagedPaintDevice.getObjectType = function() {
        return RJSType_QPagedPaintDevice.getIdStatic();
      };

      QPagedPaintDevice.prototype.getObjectType = function() {
        return RJSType_QPagedPaintDevice.getIdStatic();
      };

      QPagedPaintDevice.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPagedPaintDevice.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: PdfVersion
QPagedPaintDevice.PdfVersion_1_4 = QPagedPaintDevice_Wrapper.PdfVersion_1_4;
QPagedPaintDevice.PdfVersion_A1b = QPagedPaintDevice_Wrapper.PdfVersion_A1b;
QPagedPaintDevice.PdfVersion_1_6 = QPagedPaintDevice_Wrapper.PdfVersion_1_6;


      // functions:
      
        // function 
        QPagedPaintDevice.prototype.devType = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.width = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.width");
          
              return this.__PROXY__.width(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.height = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.height");
          
              return this.__PROXY__.height(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.depth = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.metric = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.redirected = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.newPage = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.newPage");
          
              return this.__PROXY__.newPage(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.setPageLayout = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.setPageLayout");
          
              return this.__PROXY__.setPageLayout(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.setPageSize = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.setPageSize");
          
              return this.__PROXY__.setPageSize(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.setPageOrientation = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.setPageOrientation");
          
              return this.__PROXY__.setPageOrientation(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.setPageMargins = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.setPageMargins");
          
              return this.__PROXY__.setPageMargins(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.pageLayout = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.pageLayout");
          
              return this.__PROXY__.pageLayout(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.setPageRanges = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.setPageRanges");
          
              return this.__PROXY__.setPageRanges(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.pageRanges = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.pageRanges");
          
              return this.__PROXY__.pageRanges(...args);
            
        };
    
        // function 
        QPagedPaintDevice.prototype.dd = function(...args) 
          
        {
          //print("JS: QPagedPaintDevice.prototype.dd");
          
              return this.__PROXY__.dd(...args);
            
        };
    

      // static functions:
      QPagedPaintDevice.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPagedPaintDevice.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPagedPaintDevice.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPagedPaintDevice.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPagedPaintDevice.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QPagedPaintDevice.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      