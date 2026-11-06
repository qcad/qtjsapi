
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QTextTableFormat.prototype.setPosition = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setPosition");
          
              return this.__PROXY__.setPosition(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.position = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setBorder = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setBorder");
          
              return this.__PROXY__.setBorder(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.border = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.border");
          
              return this.__PROXY__.border(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setBorderBrush = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setBorderBrush");
          
              return this.__PROXY__.setBorderBrush(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.borderBrush = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.borderBrush");
          
              return this.__PROXY__.borderBrush(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setBorderStyle = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setBorderStyle");
          
              return this.__PROXY__.setBorderStyle(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.borderStyle = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.borderStyle");
          
              return this.__PROXY__.borderStyle(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setMargin");
          
              return this.__PROXY__.setMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.margin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.margin");
          
              return this.__PROXY__.margin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setTopMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setTopMargin");
          
              return this.__PROXY__.setTopMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.topMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.topMargin");
          
              return this.__PROXY__.topMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setBottomMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setBottomMargin");
          
              return this.__PROXY__.setBottomMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.bottomMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.bottomMargin");
          
              return this.__PROXY__.bottomMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setLeftMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setLeftMargin");
          
              return this.__PROXY__.setLeftMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.leftMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.leftMargin");
          
              return this.__PROXY__.leftMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setRightMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setRightMargin");
          
              return this.__PROXY__.setRightMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.rightMargin = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.rightMargin");
          
              return this.__PROXY__.rightMargin(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setPadding = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setPadding");
          
              return this.__PROXY__.setPadding(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.padding = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.padding");
          
              return this.__PROXY__.padding(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.width = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.width");
          
              return this.__PROXY__.width(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setHeight");
          
              return this.__PROXY__.setHeight(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.height = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.height");
          
              return this.__PROXY__.height(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setPageBreakPolicy = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setPageBreakPolicy");
          
              return this.__PROXY__.setPageBreakPolicy(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.pageBreakPolicy = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.pageBreakPolicy");
          
              return this.__PROXY__.pageBreakPolicy(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.isValid = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.columns = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.columns");
          
              return this.__PROXY__.columns(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setColumns = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setColumns");
          
              return this.__PROXY__.setColumns(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setColumnWidthConstraints = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setColumnWidthConstraints");
          
              return this.__PROXY__.setColumnWidthConstraints(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.columnWidthConstraints = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.columnWidthConstraints");
          
              return this.__PROXY__.columnWidthConstraints(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.clearColumnWidthConstraints = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.clearColumnWidthConstraints");
          
              return this.__PROXY__.clearColumnWidthConstraints(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.cellSpacing = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.cellSpacing");
          
              return this.__PROXY__.cellSpacing(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setCellSpacing = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setCellSpacing");
          
              return this.__PROXY__.setCellSpacing(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.cellPadding = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.cellPadding");
          
              return this.__PROXY__.cellPadding(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setCellPadding = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setCellPadding");
          
              return this.__PROXY__.setCellPadding(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.alignment = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setHeaderRowCount = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setHeaderRowCount");
          
              return this.__PROXY__.setHeaderRowCount(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.headerRowCount = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.headerRowCount");
          
              return this.__PROXY__.headerRowCount(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.setBorderCollapse = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.setBorderCollapse");
          
              return this.__PROXY__.setBorderCollapse(...args);
            
        };
    
        // function 
        QTextTableFormat.prototype.borderCollapse = function(...args) 
          
        {
          //print("JS: QTextTableFormat.prototype.borderCollapse");
          
              return this.__PROXY__.borderCollapse(...args);
            
        };
    

      // static functions:
      QTextTableFormat.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextTableFormat.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextTableFormat.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QTextTableFormat.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      