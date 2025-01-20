
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
              
                  copyProperties(this, wrapper, QPagedPaintDevice);
                
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
      

      // static functions:
      

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

      