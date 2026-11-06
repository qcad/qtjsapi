
      // auto generated
      //var self;

      // class constructor:
      function QStringDecoder() {
        

        // should be QStringDecoder_BaseJs.call(this, engine):
        //QStringDecoder.prototype = new QStringDecoder_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStringDecoder.getIdStatic()))) {

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
            qWarning("QStringDecoder.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStringDecoder_Wrapper(
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

      

        //copyProperties(this, wrapper, QStringDecoder);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStringDecoder_Wrapper(
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

      

        //copyProperties(this, wrapper, QStringDecoder);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStringDecoder_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStringDecoder);
  }

  
  else {
    
        print("QStringDecoder(): wrong number / type of arguments");
      
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

      //QStringDecoder.prototype = new QStringDecoder_BaseJs(engine);
      //QStringDecoder.prototype = new QStringDecoder_Wrapper(engine);
      QStringDecoder.prototype = new Object();


      QStringDecoder.prototype.toString = function() {
          //return "QStringDecoder [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStringDecoder [JS]";
        };
      QStringDecoder.getObjectType = function() {
        return RJSType_QStringDecoder.getIdStatic();
      };

      QStringDecoder.prototype.getObjectType = function() {
        return RJSType_QStringDecoder.getIdStatic();
      };

      QStringDecoder.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStringDecoder.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStringConverter.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Encoding
QStringDecoder.Utf8 = QStringDecoder_Wrapper.Utf8;
QStringDecoder.Utf16 = QStringDecoder_Wrapper.Utf16;
QStringDecoder.Utf16LE = QStringDecoder_Wrapper.Utf16LE;
QStringDecoder.Utf16BE = QStringDecoder_Wrapper.Utf16BE;
QStringDecoder.Utf32 = QStringDecoder_Wrapper.Utf32;
QStringDecoder.Utf32LE = QStringDecoder_Wrapper.Utf32LE;
QStringDecoder.Utf32BE = QStringDecoder_Wrapper.Utf32BE;
QStringDecoder.Latin1 = QStringDecoder_Wrapper.Latin1;
QStringDecoder.System = QStringDecoder_Wrapper.System;
QStringDecoder.LastEncoding = QStringDecoder_Wrapper.LastEncoding;


      // functions:
      
        // function 
        QStringDecoder.prototype.isValid = function(...args) 
          
        {
          //print("JS: QStringDecoder.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QStringDecoder.prototype.resetState = function(...args) 
          
        {
          //print("JS: QStringDecoder.prototype.resetState");
          
              return this.__PROXY__.resetState(...args);
            
        };
    
        // function 
        QStringDecoder.prototype.hasError = function(...args) 
          
        {
          //print("JS: QStringDecoder.prototype.hasError");
          
              return this.__PROXY__.hasError(...args);
            
        };
    
        // function 
        QStringDecoder.prototype.name = function(...args) 
          
        {
          //print("JS: QStringDecoder.prototype.name");
          
              return this.__PROXY__.name(...args);
            
        };
    
        // function 
        QStringDecoder.prototype.decode = function(...args) 
          
        {
          //print("JS: QStringDecoder.prototype.decode");
          
              return this.__PROXY__.decode(...args);
            
        };
    
        // function 
        QStringDecoder.prototype.requiredSpace = function(...args) 
          
        {
          //print("JS: QStringDecoder.prototype.requiredSpace");
          
              return this.__PROXY__.requiredSpace(...args);
            
        };
    

      // static functions:
      QStringDecoder.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStringDecoder.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStringDecoder.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStringDecoder.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStringDecoder.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStringDecoder.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      