
      // auto generated
      //var self;

      // class constructor:
      function QStringConverter() {
        

        // should be QStringConverter_BaseJs.call(this, engine):
        //QStringConverter.prototype = new QStringConverter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStringConverter.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStringConverter);
                
            //}
          }
          else {
            qWarning("QStringConverter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QStringConverter.js: No constructor found for class QStringConverter");
            
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

      //QStringConverter.prototype = new QStringConverter_BaseJs(engine);
      //QStringConverter.prototype = new QStringConverter_Wrapper(engine);
      QStringConverter.prototype = new Object();

      QStringConverter.prototype.toString = function() {
          //return "QStringConverter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStringConverter [JS]";
        };
      QStringConverter.getObjectType = function() {
        return RJSType_QStringConverter.getIdStatic();
      };

      QStringConverter.prototype.getObjectType = function() {
        return RJSType_QStringConverter.getIdStatic();
      };

      QStringConverter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStringConverter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStringConverterBase.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Encoding
QStringConverter.Utf8 = QStringConverter_Wrapper.Utf8;
QStringConverter.Utf16 = QStringConverter_Wrapper.Utf16;
QStringConverter.Utf16LE = QStringConverter_Wrapper.Utf16LE;
QStringConverter.Utf16BE = QStringConverter_Wrapper.Utf16BE;
QStringConverter.Utf32 = QStringConverter_Wrapper.Utf32;
QStringConverter.Utf32LE = QStringConverter_Wrapper.Utf32LE;
QStringConverter.Utf32BE = QStringConverter_Wrapper.Utf32BE;
QStringConverter.Latin1 = QStringConverter_Wrapper.Latin1;
QStringConverter.System = QStringConverter_Wrapper.System;
QStringConverter.LastEncoding = QStringConverter_Wrapper.LastEncoding;


      // functions:
      

      // static functions:
      

        // static function 
        QStringConverter.nameForEncoding = function() 
          
        {
          //print("JS: QStringConverter.nameForEncoding");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QStringConverter_WrapperSingletonInstance.nameForEncoding(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QStringConverter);
  }

  
  else {
    
        print("QStringConverter.nameForEncoding(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStringConverter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStringConverter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      