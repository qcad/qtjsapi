
      // auto generated
      //var self;

      // class constructor:
      function QTextStream() {
        

        // should be QTextStream_BaseJs.call(this, engine):
        //QTextStream.prototype = new QTextStream_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextStream.getIdStatic()))) {

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
            qWarning("QTextStream.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QTextStream_Wrapper(
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

      

        //copyProperties(this, wrapper, QTextStream);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QTextStream_Wrapper(
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

      

        //copyProperties(this, wrapper, QTextStream);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextStream_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextStream);
  }

  
  else {
    
        print("QTextStream(): wrong number / type of arguments");
      
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

      //QTextStream.prototype = new QTextStream_BaseJs(engine);
      //QTextStream.prototype = new QTextStream_Wrapper(engine);
      QTextStream.prototype = new Object();


      QTextStream.prototype.toString = function() {
          //return "QTextStream [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextStream [JS]";
        };
      QTextStream.getObjectType = function() {
        return RJSType_QTextStream.getIdStatic();
      };

      QTextStream.prototype.getObjectType = function() {
        return RJSType_QTextStream.getIdStatic();
      };

      QTextStream.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextStream.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QIODeviceBase.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OpenModeFlag
QTextStream.NotOpen = QTextStream_Wrapper.NotOpen;
QTextStream.ReadOnly = QTextStream_Wrapper.ReadOnly;
QTextStream.WriteOnly = QTextStream_Wrapper.WriteOnly;
QTextStream.ReadWrite = QTextStream_Wrapper.ReadWrite;
QTextStream.Append = QTextStream_Wrapper.Append;
QTextStream.Truncate = QTextStream_Wrapper.Truncate;
QTextStream.Text = QTextStream_Wrapper.Text;
QTextStream.Unbuffered = QTextStream_Wrapper.Unbuffered;
QTextStream.NewOnly = QTextStream_Wrapper.NewOnly;
QTextStream.ExistingOnly = QTextStream_Wrapper.ExistingOnly;

  // enum: RealNumberNotation
QTextStream.SmartNotation = QTextStream_Wrapper.SmartNotation;
QTextStream.FixedNotation = QTextStream_Wrapper.FixedNotation;
QTextStream.ScientificNotation = QTextStream_Wrapper.ScientificNotation;

  // enum: FieldAlignment
QTextStream.AlignLeft = QTextStream_Wrapper.AlignLeft;
QTextStream.AlignRight = QTextStream_Wrapper.AlignRight;
QTextStream.AlignCenter = QTextStream_Wrapper.AlignCenter;
QTextStream.AlignAccountingStyle = QTextStream_Wrapper.AlignAccountingStyle;

  // enum: Status
QTextStream.Ok = QTextStream_Wrapper.Ok;
QTextStream.ReadPastEnd = QTextStream_Wrapper.ReadPastEnd;
QTextStream.ReadCorruptData = QTextStream_Wrapper.ReadCorruptData;
QTextStream.WriteFailed = QTextStream_Wrapper.WriteFailed;

  // enum: NumberFlag
QTextStream.ShowBase = QTextStream_Wrapper.ShowBase;
QTextStream.ForcePoint = QTextStream_Wrapper.ForcePoint;
QTextStream.ForceSign = QTextStream_Wrapper.ForceSign;
QTextStream.UppercaseBase = QTextStream_Wrapper.UppercaseBase;
QTextStream.UppercaseDigits = QTextStream_Wrapper.UppercaseDigits;


      // functions:
      
        // function 
        QTextStream.prototype.setEncoding = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setEncoding");
          
              return this.__PROXY__.setEncoding(...args);
            
        };
        
        // function 
        QTextStream.prototype.encoding = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.encoding");
          
              return this.__PROXY__.encoding(...args);
            
        };
        
        // function 
        QTextStream.prototype.setAutoDetectUnicode = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setAutoDetectUnicode");
          
              return this.__PROXY__.setAutoDetectUnicode(...args);
            
        };
        
        // function 
        QTextStream.prototype.autoDetectUnicode = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.autoDetectUnicode");
          
              return this.__PROXY__.autoDetectUnicode(...args);
            
        };
        
        // function 
        QTextStream.prototype.setGenerateByteOrderMark = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setGenerateByteOrderMark");
          
              return this.__PROXY__.setGenerateByteOrderMark(...args);
            
        };
        
        // function 
        QTextStream.prototype.generateByteOrderMark = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.generateByteOrderMark");
          
              return this.__PROXY__.generateByteOrderMark(...args);
            
        };
        
        // function 
        QTextStream.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QTextStream.prototype.locale = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.locale");
          
              return this.__PROXY__.locale(...args);
            
        };
        
        // function 
        QTextStream.prototype.setDevice = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setDevice");
          
              return this.__PROXY__.setDevice(...args);
            
        };
        
        // function 
        QTextStream.prototype.device = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.device");
          
              return this.__PROXY__.device(...args);
            
        };
        
        // function 
        QTextStream.prototype.status = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.status");
          
              return this.__PROXY__.status(...args);
            
        };
        
        // function 
        QTextStream.prototype.setStatus = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setStatus");
          
              return this.__PROXY__.setStatus(...args);
            
        };
        
        // function 
        QTextStream.prototype.resetStatus = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.resetStatus");
          
              return this.__PROXY__.resetStatus(...args);
            
        };
        
        // function 
        QTextStream.prototype.atEnd = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.atEnd");
          
              return this.__PROXY__.atEnd(...args);
            
        };
        
        // function 
        QTextStream.prototype.reset = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QTextStream.prototype.flush = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.flush");
          
              return this.__PROXY__.flush(...args);
            
        };
        
        // function 
        QTextStream.prototype.seek = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.seek");
          
              return this.__PROXY__.seek(...args);
            
        };
        
        // function 
        QTextStream.prototype.pos = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.pos");
          
              return this.__PROXY__.pos(...args);
            
        };
        
        // function 
        QTextStream.prototype.skipWhiteSpace = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.skipWhiteSpace");
          
              return this.__PROXY__.skipWhiteSpace(...args);
            
        };
        
        // function 
        QTextStream.prototype.readLine = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.readLine");
          
              return this.__PROXY__.readLine(...args);
            
        };
        
        // function 
        QTextStream.prototype.readAll = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.readAll");
          
              return this.__PROXY__.readAll(...args);
            
        };
        
        // function 
        QTextStream.prototype.read = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.read");
          
              return this.__PROXY__.read(...args);
            
        };
        
        // function 
        QTextStream.prototype.setFieldAlignment = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setFieldAlignment");
          
              return this.__PROXY__.setFieldAlignment(...args);
            
        };
        
        // function 
        QTextStream.prototype.fieldAlignment = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.fieldAlignment");
          
              return this.__PROXY__.fieldAlignment(...args);
            
        };
        
        // function 
        QTextStream.prototype.setPadChar = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setPadChar");
          
              return this.__PROXY__.setPadChar(...args);
            
        };
        
        // function 
        QTextStream.prototype.padChar = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.padChar");
          
              return this.__PROXY__.padChar(...args);
            
        };
        
        // function 
        QTextStream.prototype.setFieldWidth = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setFieldWidth");
          
              return this.__PROXY__.setFieldWidth(...args);
            
        };
        
        // function 
        QTextStream.prototype.fieldWidth = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.fieldWidth");
          
              return this.__PROXY__.fieldWidth(...args);
            
        };
        
        // function 
        QTextStream.prototype.setNumberFlags = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setNumberFlags");
          
              return this.__PROXY__.setNumberFlags(...args);
            
        };
        
        // function 
        QTextStream.prototype.numberFlags = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.numberFlags");
          
              return this.__PROXY__.numberFlags(...args);
            
        };
        
        // function 
        QTextStream.prototype.setIntegerBase = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setIntegerBase");
          
              return this.__PROXY__.setIntegerBase(...args);
            
        };
        
        // function 
        QTextStream.prototype.integerBase = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.integerBase");
          
              return this.__PROXY__.integerBase(...args);
            
        };
        
        // function 
        QTextStream.prototype.setRealNumberNotation = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setRealNumberNotation");
          
              return this.__PROXY__.setRealNumberNotation(...args);
            
        };
        
        // function 
        QTextStream.prototype.realNumberNotation = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.realNumberNotation");
          
              return this.__PROXY__.realNumberNotation(...args);
            
        };
        
        // function 
        QTextStream.prototype.setRealNumberPrecision = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.setRealNumberPrecision");
          
              return this.__PROXY__.setRealNumberPrecision(...args);
            
        };
        
        // function 
        QTextStream.prototype.realNumberPrecision = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.realNumberPrecision");
          
              return this.__PROXY__.realNumberPrecision(...args);
            
        };
        
        // function 
        QTextStream.prototype.writeString = function(...args) 
          
        {
          //print("JS: QTextStream.prototype.writeString");
          
              return this.__PROXY__.writeString(...args);
            
        };
        

      // static functions:
      QTextStream.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextStream.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextStream.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextStream.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextStream.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextStream.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      