
      // auto generated
      //var self;

      // class constructor:
      function QTextImageFormat() {
        

        // should be QTextImageFormat_BaseJs.call(this, engine):
        //QTextImageFormat.prototype = new QTextImageFormat_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QTextImageFormat.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTextImageFormat);
            //}
          }
          else {
            qWarning("QTextImageFormat.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTextImageFormat_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTextImageFormat);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextImageFormat);
  }

  
  else {
    
        print("QTextImageFormat(): wrong number / type of arguments");
      
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

      //QTextImageFormat.prototype = new QTextImageFormat_BaseJs(engine);
      //QTextImageFormat.prototype = new QTextImageFormat_Wrapper(engine);
      QTextImageFormat.prototype = new Object();

      QTextImageFormat.prototype.toString = function() {
          //return "QTextImageFormat [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextImageFormat [JS]";
        };
      QTextImageFormat.getObjectType = function() {
        
            return RJSType_QTextImageFormat.getIdStatic();
          
      };

      QTextImageFormat.prototype.getObjectType = function() {
        
            return RJSType_QTextImageFormat.getIdStatic();
          
      };

      QTextImageFormat.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QTextImageFormat.getIdStatic()) {
              return true;
            }
          
          if (t===RJSType_QTextCharFormat.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: VerticalAlignment
QTextImageFormat.AlignNormal = QTextImageFormat_Wrapper.AlignNormal;
QTextImageFormat.AlignSuperScript = QTextImageFormat_Wrapper.AlignSuperScript;
QTextImageFormat.AlignSubScript = QTextImageFormat_Wrapper.AlignSubScript;
QTextImageFormat.AlignMiddle = QTextImageFormat_Wrapper.AlignMiddle;
QTextImageFormat.AlignTop = QTextImageFormat_Wrapper.AlignTop;
QTextImageFormat.AlignBottom = QTextImageFormat_Wrapper.AlignBottom;
QTextImageFormat.AlignBaseline = QTextImageFormat_Wrapper.AlignBaseline;

  // enum: UnderlineStyle
QTextImageFormat.NoUnderline = QTextImageFormat_Wrapper.NoUnderline;
QTextImageFormat.SingleUnderline = QTextImageFormat_Wrapper.SingleUnderline;
QTextImageFormat.DashUnderline = QTextImageFormat_Wrapper.DashUnderline;
QTextImageFormat.DotLine = QTextImageFormat_Wrapper.DotLine;
QTextImageFormat.DashDotLine = QTextImageFormat_Wrapper.DashDotLine;
QTextImageFormat.DashDotDotLine = QTextImageFormat_Wrapper.DashDotDotLine;
QTextImageFormat.WaveUnderline = QTextImageFormat_Wrapper.WaveUnderline;
QTextImageFormat.SpellCheckUnderline = QTextImageFormat_Wrapper.SpellCheckUnderline;

  // enum: FontPropertiesInheritanceBehavior
QTextImageFormat.FontPropertiesSpecifiedOnly = QTextImageFormat_Wrapper.FontPropertiesSpecifiedOnly;
QTextImageFormat.FontPropertiesAll = QTextImageFormat_Wrapper.FontPropertiesAll;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextImageFormat.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextImageFormat.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    