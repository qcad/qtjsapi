
      // auto generated
      //var self;

      // class constructor:
      function QTextTableFormat() {
        

        // should be QTextTableFormat_BaseJs.call(this, engine):
        //QTextTableFormat.prototype = new QTextTableFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextTableFormat.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextTableFormat);
            //}
          }
          else {
            qWarning("QTextTableFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextTableFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextTableFormat);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextTableFormat);
  }

  
  else {
    
        print("QTextTableFormat(): wrong number / type of arguments");
      
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

      //QTextTableFormat.prototype = new QTextTableFormat_BaseJs(engine);
      //QTextTableFormat.prototype = new QTextTableFormat_Wrapper(engine);
      QTextTableFormat.prototype = new Object();

      QTextTableFormat.prototype.toString = function() {
          //return "QTextTableFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextTableFormat [JS]";
        };
      QTextTableFormat.getObjectType = function() {
        return RJSType_QTextTableFormat.getIdStatic();
      };

      QTextTableFormat.prototype.getObjectType = function() {
        return RJSType_QTextTableFormat.getIdStatic();
      };

      QTextTableFormat.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextTableFormat.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QTextFrameFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Position
QTextTableFormat.InFlow = QTextTableFormat_Wrapper.InFlow;
QTextTableFormat.FloatLeft = QTextTableFormat_Wrapper.FloatLeft;
QTextTableFormat.FloatRight = QTextTableFormat_Wrapper.FloatRight;

  // enum: BorderStyle
QTextTableFormat.BorderStyle_None = QTextTableFormat_Wrapper.BorderStyle_None;
QTextTableFormat.BorderStyle_Dotted = QTextTableFormat_Wrapper.BorderStyle_Dotted;
QTextTableFormat.BorderStyle_Dashed = QTextTableFormat_Wrapper.BorderStyle_Dashed;
QTextTableFormat.BorderStyle_Solid = QTextTableFormat_Wrapper.BorderStyle_Solid;
QTextTableFormat.BorderStyle_Double = QTextTableFormat_Wrapper.BorderStyle_Double;
QTextTableFormat.BorderStyle_DotDash = QTextTableFormat_Wrapper.BorderStyle_DotDash;
QTextTableFormat.BorderStyle_DotDotDash = QTextTableFormat_Wrapper.BorderStyle_DotDotDash;
QTextTableFormat.BorderStyle_Groove = QTextTableFormat_Wrapper.BorderStyle_Groove;
QTextTableFormat.BorderStyle_Ridge = QTextTableFormat_Wrapper.BorderStyle_Ridge;
QTextTableFormat.BorderStyle_Inset = QTextTableFormat_Wrapper.BorderStyle_Inset;
QTextTableFormat.BorderStyle_Outset = QTextTableFormat_Wrapper.BorderStyle_Outset;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextTableFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextTableFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    