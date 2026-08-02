
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionMenuItem() {
        

        // should be QStyleOptionMenuItem_BaseJs.call(this, engine):
        //QStyleOptionMenuItem.prototype = new QStyleOptionMenuItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionMenuItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionMenuItem);
                
            //}
          }
          else {
            qWarning("QStyleOptionMenuItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionMenuItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionMenuItem);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionMenuItem);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionMenuItem_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionMenuItem);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionMenuItem);
  }

  
  else {
    
        print("QStyleOptionMenuItem(): wrong number / type of arguments");
      
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

      //QStyleOptionMenuItem.prototype = new QStyleOptionMenuItem_BaseJs(engine);
      //QStyleOptionMenuItem.prototype = new QStyleOptionMenuItem_Wrapper(engine);
      QStyleOptionMenuItem.prototype = new Object();

      QStyleOptionMenuItem.prototype.toString = function() {
          //return "QStyleOptionMenuItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionMenuItem [JS]";
        };
      QStyleOptionMenuItem.getObjectType = function() {
        return RJSType_QStyleOptionMenuItem.getIdStatic();
      };

      QStyleOptionMenuItem.prototype.getObjectType = function() {
        return RJSType_QStyleOptionMenuItem.getIdStatic();
      };

      QStyleOptionMenuItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionMenuItem.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionMenuItem.SO_Default = QStyleOptionMenuItem_Wrapper.SO_Default;
QStyleOptionMenuItem.SO_FocusRect = QStyleOptionMenuItem_Wrapper.SO_FocusRect;
QStyleOptionMenuItem.SO_Button = QStyleOptionMenuItem_Wrapper.SO_Button;
QStyleOptionMenuItem.SO_Tab = QStyleOptionMenuItem_Wrapper.SO_Tab;
QStyleOptionMenuItem.SO_MenuItem = QStyleOptionMenuItem_Wrapper.SO_MenuItem;
QStyleOptionMenuItem.SO_Frame = QStyleOptionMenuItem_Wrapper.SO_Frame;
QStyleOptionMenuItem.SO_ProgressBar = QStyleOptionMenuItem_Wrapper.SO_ProgressBar;
QStyleOptionMenuItem.SO_ToolBox = QStyleOptionMenuItem_Wrapper.SO_ToolBox;
QStyleOptionMenuItem.SO_Header = QStyleOptionMenuItem_Wrapper.SO_Header;
QStyleOptionMenuItem.SO_DockWidget = QStyleOptionMenuItem_Wrapper.SO_DockWidget;
QStyleOptionMenuItem.SO_ViewItem = QStyleOptionMenuItem_Wrapper.SO_ViewItem;
QStyleOptionMenuItem.SO_TabWidgetFrame = QStyleOptionMenuItem_Wrapper.SO_TabWidgetFrame;
QStyleOptionMenuItem.SO_TabBarBase = QStyleOptionMenuItem_Wrapper.SO_TabBarBase;
QStyleOptionMenuItem.SO_RubberBand = QStyleOptionMenuItem_Wrapper.SO_RubberBand;
QStyleOptionMenuItem.SO_ToolBar = QStyleOptionMenuItem_Wrapper.SO_ToolBar;
QStyleOptionMenuItem.SO_GraphicsItem = QStyleOptionMenuItem_Wrapper.SO_GraphicsItem;
QStyleOptionMenuItem.SO_Complex = QStyleOptionMenuItem_Wrapper.SO_Complex;
QStyleOptionMenuItem.SO_Slider = QStyleOptionMenuItem_Wrapper.SO_Slider;
QStyleOptionMenuItem.SO_SpinBox = QStyleOptionMenuItem_Wrapper.SO_SpinBox;
QStyleOptionMenuItem.SO_ToolButton = QStyleOptionMenuItem_Wrapper.SO_ToolButton;
QStyleOptionMenuItem.SO_ComboBox = QStyleOptionMenuItem_Wrapper.SO_ComboBox;
QStyleOptionMenuItem.SO_TitleBar = QStyleOptionMenuItem_Wrapper.SO_TitleBar;
QStyleOptionMenuItem.SO_GroupBox = QStyleOptionMenuItem_Wrapper.SO_GroupBox;
QStyleOptionMenuItem.SO_SizeGrip = QStyleOptionMenuItem_Wrapper.SO_SizeGrip;
QStyleOptionMenuItem.SO_CustomBase = QStyleOptionMenuItem_Wrapper.SO_CustomBase;
QStyleOptionMenuItem.SO_ComplexCustomBase = QStyleOptionMenuItem_Wrapper.SO_ComplexCustomBase;

  // enum: MenuItemType
QStyleOptionMenuItem.Normal = QStyleOptionMenuItem_Wrapper.Normal;
QStyleOptionMenuItem.DefaultItem = QStyleOptionMenuItem_Wrapper.DefaultItem;
QStyleOptionMenuItem.Separator = QStyleOptionMenuItem_Wrapper.Separator;
QStyleOptionMenuItem.SubMenu = QStyleOptionMenuItem_Wrapper.SubMenu;
QStyleOptionMenuItem.Scroller = QStyleOptionMenuItem_Wrapper.Scroller;
QStyleOptionMenuItem.TearOff = QStyleOptionMenuItem_Wrapper.TearOff;
QStyleOptionMenuItem.Margin = QStyleOptionMenuItem_Wrapper.Margin;
QStyleOptionMenuItem.EmptyArea = QStyleOptionMenuItem_Wrapper.EmptyArea;

  // enum: CheckType
QStyleOptionMenuItem.NotCheckable = QStyleOptionMenuItem_Wrapper.NotCheckable;
QStyleOptionMenuItem.Exclusive = QStyleOptionMenuItem_Wrapper.Exclusive;
QStyleOptionMenuItem.NonExclusive = QStyleOptionMenuItem_Wrapper.NonExclusive;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionMenuItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionMenuItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      