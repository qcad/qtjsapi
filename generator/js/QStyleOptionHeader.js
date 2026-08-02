
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionHeader() {
        

        // should be QStyleOptionHeader_BaseJs.call(this, engine):
        //QStyleOptionHeader.prototype = new QStyleOptionHeader_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionHeader.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionHeader);
                
            //}
          }
          else {
            qWarning("QStyleOptionHeader.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionHeader_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionHeader);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionHeader);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionHeader_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionHeader);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionHeader);
  }

  
  else {
    
        print("QStyleOptionHeader(): wrong number / type of arguments");
      
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

      //QStyleOptionHeader.prototype = new QStyleOptionHeader_BaseJs(engine);
      //QStyleOptionHeader.prototype = new QStyleOptionHeader_Wrapper(engine);
      QStyleOptionHeader.prototype = new Object();

      QStyleOptionHeader.prototype.toString = function() {
          //return "QStyleOptionHeader [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionHeader [JS]";
        };
      QStyleOptionHeader.getObjectType = function() {
        return RJSType_QStyleOptionHeader.getIdStatic();
      };

      QStyleOptionHeader.prototype.getObjectType = function() {
        return RJSType_QStyleOptionHeader.getIdStatic();
      };

      QStyleOptionHeader.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionHeader.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionHeader.SO_Default = QStyleOptionHeader_Wrapper.SO_Default;
QStyleOptionHeader.SO_FocusRect = QStyleOptionHeader_Wrapper.SO_FocusRect;
QStyleOptionHeader.SO_Button = QStyleOptionHeader_Wrapper.SO_Button;
QStyleOptionHeader.SO_Tab = QStyleOptionHeader_Wrapper.SO_Tab;
QStyleOptionHeader.SO_MenuItem = QStyleOptionHeader_Wrapper.SO_MenuItem;
QStyleOptionHeader.SO_Frame = QStyleOptionHeader_Wrapper.SO_Frame;
QStyleOptionHeader.SO_ProgressBar = QStyleOptionHeader_Wrapper.SO_ProgressBar;
QStyleOptionHeader.SO_ToolBox = QStyleOptionHeader_Wrapper.SO_ToolBox;
QStyleOptionHeader.SO_Header = QStyleOptionHeader_Wrapper.SO_Header;
QStyleOptionHeader.SO_DockWidget = QStyleOptionHeader_Wrapper.SO_DockWidget;
QStyleOptionHeader.SO_ViewItem = QStyleOptionHeader_Wrapper.SO_ViewItem;
QStyleOptionHeader.SO_TabWidgetFrame = QStyleOptionHeader_Wrapper.SO_TabWidgetFrame;
QStyleOptionHeader.SO_TabBarBase = QStyleOptionHeader_Wrapper.SO_TabBarBase;
QStyleOptionHeader.SO_RubberBand = QStyleOptionHeader_Wrapper.SO_RubberBand;
QStyleOptionHeader.SO_ToolBar = QStyleOptionHeader_Wrapper.SO_ToolBar;
QStyleOptionHeader.SO_GraphicsItem = QStyleOptionHeader_Wrapper.SO_GraphicsItem;
QStyleOptionHeader.SO_Complex = QStyleOptionHeader_Wrapper.SO_Complex;
QStyleOptionHeader.SO_Slider = QStyleOptionHeader_Wrapper.SO_Slider;
QStyleOptionHeader.SO_SpinBox = QStyleOptionHeader_Wrapper.SO_SpinBox;
QStyleOptionHeader.SO_ToolButton = QStyleOptionHeader_Wrapper.SO_ToolButton;
QStyleOptionHeader.SO_ComboBox = QStyleOptionHeader_Wrapper.SO_ComboBox;
QStyleOptionHeader.SO_TitleBar = QStyleOptionHeader_Wrapper.SO_TitleBar;
QStyleOptionHeader.SO_GroupBox = QStyleOptionHeader_Wrapper.SO_GroupBox;
QStyleOptionHeader.SO_SizeGrip = QStyleOptionHeader_Wrapper.SO_SizeGrip;
QStyleOptionHeader.SO_CustomBase = QStyleOptionHeader_Wrapper.SO_CustomBase;
QStyleOptionHeader.SO_ComplexCustomBase = QStyleOptionHeader_Wrapper.SO_ComplexCustomBase;

  // enum: SectionPosition
QStyleOptionHeader.Beginning = QStyleOptionHeader_Wrapper.Beginning;
QStyleOptionHeader.Middle = QStyleOptionHeader_Wrapper.Middle;
QStyleOptionHeader.End = QStyleOptionHeader_Wrapper.End;
QStyleOptionHeader.OnlyOneSection = QStyleOptionHeader_Wrapper.OnlyOneSection;

  // enum: SelectedPosition
QStyleOptionHeader.NotAdjacent = QStyleOptionHeader_Wrapper.NotAdjacent;
QStyleOptionHeader.NextIsSelected = QStyleOptionHeader_Wrapper.NextIsSelected;
QStyleOptionHeader.PreviousIsSelected = QStyleOptionHeader_Wrapper.PreviousIsSelected;
QStyleOptionHeader.NextAndPreviousAreSelected = QStyleOptionHeader_Wrapper.NextAndPreviousAreSelected;

  // enum: SortIndicator
QStyleOptionHeader.None = QStyleOptionHeader_Wrapper.None;
QStyleOptionHeader.SortUp = QStyleOptionHeader_Wrapper.SortUp;
QStyleOptionHeader.SortDown = QStyleOptionHeader_Wrapper.SortDown;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionHeader.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionHeader.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      