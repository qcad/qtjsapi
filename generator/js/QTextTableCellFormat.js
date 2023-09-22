
      // auto generated
      //var self;

      // class constructor:
      function QTextTableCellFormat() {
        

        // should be QTextTableCellFormat_BaseJs.call(this, engine):
        //QTextTableCellFormat.prototype = new QTextTableCellFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QTextTableCellFormat.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextTableCellFormat);
            //}
          }
          else {
            qWarning("QTextTableCellFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextTableCellFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextTableCellFormat);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextTableCellFormat);
  }

  
  else {
    
        print("QTextTableCellFormat(): wrong number / type of arguments");
      
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

      //QTextTableCellFormat.prototype = new QTextTableCellFormat_BaseJs(engine);
      //QTextTableCellFormat.prototype = new QTextTableCellFormat_Wrapper(engine);
      QTextTableCellFormat.prototype = new Object();

      QTextTableCellFormat.prototype.toString = function() {
          //return "QTextTableCellFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextTableCellFormat [JS]";
        };
      QTextTableCellFormat.getObjectType = function() {
        
            return RJSType_QTextTableCellFormat.getIdStatic();
          
      };

      QTextTableCellFormat.prototype.getObjectType = function() {
        
            return RJSType_QTextTableCellFormat.getIdStatic();
          
      };

      QTextTableCellFormat.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QTextTableCellFormat.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QTextCharFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: VerticalAlignment
QTextTableCellFormat.AlignNormal = QTextTableCellFormat_Wrapper.AlignNormal;
QTextTableCellFormat.AlignSuperScript = QTextTableCellFormat_Wrapper.AlignSuperScript;
QTextTableCellFormat.AlignSubScript = QTextTableCellFormat_Wrapper.AlignSubScript;
QTextTableCellFormat.AlignMiddle = QTextTableCellFormat_Wrapper.AlignMiddle;
QTextTableCellFormat.AlignTop = QTextTableCellFormat_Wrapper.AlignTop;
QTextTableCellFormat.AlignBottom = QTextTableCellFormat_Wrapper.AlignBottom;
QTextTableCellFormat.AlignBaseline = QTextTableCellFormat_Wrapper.AlignBaseline;

  // enum: UnderlineStyle
QTextTableCellFormat.NoUnderline = QTextTableCellFormat_Wrapper.NoUnderline;
QTextTableCellFormat.SingleUnderline = QTextTableCellFormat_Wrapper.SingleUnderline;
QTextTableCellFormat.DashUnderline = QTextTableCellFormat_Wrapper.DashUnderline;
QTextTableCellFormat.DotLine = QTextTableCellFormat_Wrapper.DotLine;
QTextTableCellFormat.DashDotLine = QTextTableCellFormat_Wrapper.DashDotLine;
QTextTableCellFormat.DashDotDotLine = QTextTableCellFormat_Wrapper.DashDotDotLine;
QTextTableCellFormat.WaveUnderline = QTextTableCellFormat_Wrapper.WaveUnderline;
QTextTableCellFormat.SpellCheckUnderline = QTextTableCellFormat_Wrapper.SpellCheckUnderline;

  // enum: FontPropertiesInheritanceBehavior
QTextTableCellFormat.FontPropertiesSpecifiedOnly = QTextTableCellFormat_Wrapper.FontPropertiesSpecifiedOnly;
QTextTableCellFormat.FontPropertiesAll = QTextTableCellFormat_Wrapper.FontPropertiesAll;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextTableCellFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextTableCellFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    