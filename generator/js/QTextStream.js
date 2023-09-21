
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
            arguments[2].getWrappedType()===
              
                  RJSType.QTextStream_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextStream);
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
          

        copyProperties(this, wrapper, QTextStream);

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
          

        copyProperties(this, wrapper, QTextStream);

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
          

        copyProperties(this, wrapper, QTextStream);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
        
            return RJSType.QTextStream_Type;
          
      };

      QTextStream.prototype.getObjectType = function() {
        
            return RJSType.QTextStream_Type;
          
      };

      QTextStream.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QTextStream_Type:
              return true;
          
        case RJSType.QIODeviceBase_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QTextStream_Type, 
          
            RJSType.QIODeviceBase_Type
            
        ].includes(t);
        */
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
      

      // static functions:
      

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
    