
      // auto generated
      //var self;

      // class constructor:
      function QStringEncoder() {
        

        // should be QStringEncoder_BaseJs.call(this, engine):
        //QStringEncoder.prototype = new QStringEncoder_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStringEncoder.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStringEncoder);
                
            //}
          }
          else {
            qWarning("QStringEncoder.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStringEncoder_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStringEncoder);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStringEncoder);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStringEncoder_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStringEncoder);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStringEncoder);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStringEncoder_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStringEncoder);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStringEncoder);
  }

  
  else {
    
        print("QStringEncoder(): wrong number / type of arguments");
      
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

      //QStringEncoder.prototype = new QStringEncoder_BaseJs(engine);
      //QStringEncoder.prototype = new QStringEncoder_Wrapper(engine);
      QStringEncoder.prototype = new Object();

      QStringEncoder.prototype.toString = function() {
          //return "QStringEncoder [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStringEncoder [JS]";
        };
      QStringEncoder.getObjectType = function() {
        return RJSType_QStringEncoder.getIdStatic();
      };

      QStringEncoder.prototype.getObjectType = function() {
        return RJSType_QStringEncoder.getIdStatic();
      };

      QStringEncoder.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStringEncoder.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStringConverter.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Encoding
QStringEncoder.Utf8 = QStringEncoder_Wrapper.Utf8;
QStringEncoder.Utf16 = QStringEncoder_Wrapper.Utf16;
QStringEncoder.Utf16LE = QStringEncoder_Wrapper.Utf16LE;
QStringEncoder.Utf16BE = QStringEncoder_Wrapper.Utf16BE;
QStringEncoder.Utf32 = QStringEncoder_Wrapper.Utf32;
QStringEncoder.Utf32LE = QStringEncoder_Wrapper.Utf32LE;
QStringEncoder.Utf32BE = QStringEncoder_Wrapper.Utf32BE;
QStringEncoder.Latin1 = QStringEncoder_Wrapper.Latin1;
QStringEncoder.System = QStringEncoder_Wrapper.System;
QStringEncoder.LastEncoding = QStringEncoder_Wrapper.LastEncoding;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStringEncoder.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStringEncoder.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      