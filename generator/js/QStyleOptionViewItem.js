
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionViewItem() {
        

        // should be QStyleOptionViewItem_BaseJs.call(this, engine):
        //QStyleOptionViewItem.prototype = new QStyleOptionViewItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionViewItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionViewItem);
                
            //}
          }
          else {
            qWarning("QStyleOptionViewItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionViewItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionViewItem);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionViewItem);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionViewItem_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionViewItem);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionViewItem);
  }

  
  else {
    
        print("QStyleOptionViewItem(): wrong number / type of arguments");
      
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

      //QStyleOptionViewItem.prototype = new QStyleOptionViewItem_BaseJs(engine);
      //QStyleOptionViewItem.prototype = new QStyleOptionViewItem_Wrapper(engine);
      QStyleOptionViewItem.prototype = new Object();

      QStyleOptionViewItem.prototype.toString = function() {
          //return "QStyleOptionViewItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionViewItem [JS]";
        };
      QStyleOptionViewItem.getObjectType = function() {
        return RJSType_QStyleOptionViewItem.getIdStatic();
      };

      QStyleOptionViewItem.prototype.getObjectType = function() {
        return RJSType_QStyleOptionViewItem.getIdStatic();
      };

      QStyleOptionViewItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionViewItem.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionViewItem.SO_Default = QStyleOptionViewItem_Wrapper.SO_Default;
QStyleOptionViewItem.SO_FocusRect = QStyleOptionViewItem_Wrapper.SO_FocusRect;
QStyleOptionViewItem.SO_Button = QStyleOptionViewItem_Wrapper.SO_Button;
QStyleOptionViewItem.SO_Tab = QStyleOptionViewItem_Wrapper.SO_Tab;
QStyleOptionViewItem.SO_MenuItem = QStyleOptionViewItem_Wrapper.SO_MenuItem;
QStyleOptionViewItem.SO_Frame = QStyleOptionViewItem_Wrapper.SO_Frame;
QStyleOptionViewItem.SO_ProgressBar = QStyleOptionViewItem_Wrapper.SO_ProgressBar;
QStyleOptionViewItem.SO_ToolBox = QStyleOptionViewItem_Wrapper.SO_ToolBox;
QStyleOptionViewItem.SO_Header = QStyleOptionViewItem_Wrapper.SO_Header;
QStyleOptionViewItem.SO_DockWidget = QStyleOptionViewItem_Wrapper.SO_DockWidget;
QStyleOptionViewItem.SO_ViewItem = QStyleOptionViewItem_Wrapper.SO_ViewItem;
QStyleOptionViewItem.SO_TabWidgetFrame = QStyleOptionViewItem_Wrapper.SO_TabWidgetFrame;
QStyleOptionViewItem.SO_TabBarBase = QStyleOptionViewItem_Wrapper.SO_TabBarBase;
QStyleOptionViewItem.SO_RubberBand = QStyleOptionViewItem_Wrapper.SO_RubberBand;
QStyleOptionViewItem.SO_ToolBar = QStyleOptionViewItem_Wrapper.SO_ToolBar;
QStyleOptionViewItem.SO_GraphicsItem = QStyleOptionViewItem_Wrapper.SO_GraphicsItem;
QStyleOptionViewItem.SO_Complex = QStyleOptionViewItem_Wrapper.SO_Complex;
QStyleOptionViewItem.SO_Slider = QStyleOptionViewItem_Wrapper.SO_Slider;
QStyleOptionViewItem.SO_SpinBox = QStyleOptionViewItem_Wrapper.SO_SpinBox;
QStyleOptionViewItem.SO_ToolButton = QStyleOptionViewItem_Wrapper.SO_ToolButton;
QStyleOptionViewItem.SO_ComboBox = QStyleOptionViewItem_Wrapper.SO_ComboBox;
QStyleOptionViewItem.SO_TitleBar = QStyleOptionViewItem_Wrapper.SO_TitleBar;
QStyleOptionViewItem.SO_GroupBox = QStyleOptionViewItem_Wrapper.SO_GroupBox;
QStyleOptionViewItem.SO_SizeGrip = QStyleOptionViewItem_Wrapper.SO_SizeGrip;
QStyleOptionViewItem.SO_CustomBase = QStyleOptionViewItem_Wrapper.SO_CustomBase;
QStyleOptionViewItem.SO_ComplexCustomBase = QStyleOptionViewItem_Wrapper.SO_ComplexCustomBase;

  // enum: Position
QStyleOptionViewItem.Left = QStyleOptionViewItem_Wrapper.Left;
QStyleOptionViewItem.Right = QStyleOptionViewItem_Wrapper.Right;
QStyleOptionViewItem.Top = QStyleOptionViewItem_Wrapper.Top;
QStyleOptionViewItem.Bottom = QStyleOptionViewItem_Wrapper.Bottom;

  // enum: ViewItemFeature
QStyleOptionViewItem.None = QStyleOptionViewItem_Wrapper.None;
QStyleOptionViewItem.WrapText = QStyleOptionViewItem_Wrapper.WrapText;
QStyleOptionViewItem.Alternate = QStyleOptionViewItem_Wrapper.Alternate;
QStyleOptionViewItem.HasCheckIndicator = QStyleOptionViewItem_Wrapper.HasCheckIndicator;
QStyleOptionViewItem.HasDisplay = QStyleOptionViewItem_Wrapper.HasDisplay;
QStyleOptionViewItem.HasDecoration = QStyleOptionViewItem_Wrapper.HasDecoration;
QStyleOptionViewItem.IsDecoratedRootColumn = QStyleOptionViewItem_Wrapper.IsDecoratedRootColumn;
QStyleOptionViewItem.IsDecorationForRootColumn = QStyleOptionViewItem_Wrapper.IsDecorationForRootColumn;

  // enum: ViewItemPosition
QStyleOptionViewItem.Invalid = QStyleOptionViewItem_Wrapper.Invalid;
QStyleOptionViewItem.Beginning = QStyleOptionViewItem_Wrapper.Beginning;
QStyleOptionViewItem.Middle = QStyleOptionViewItem_Wrapper.Middle;
QStyleOptionViewItem.End = QStyleOptionViewItem_Wrapper.End;
QStyleOptionViewItem.OnlyOne = QStyleOptionViewItem_Wrapper.OnlyOne;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionViewItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionViewItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      