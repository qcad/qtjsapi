
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionTab() {
        

        // should be QStyleOptionTab_BaseJs.call(this, engine):
        //QStyleOptionTab.prototype = new QStyleOptionTab_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionTab.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionTab);
                
            //}
          }
          else {
            qWarning("QStyleOptionTab.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionTab_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionTab);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionTab);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionTab_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionTab);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionTab);
  }

  
  else {
    
        print("QStyleOptionTab(): wrong number / type of arguments");
      
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

      //QStyleOptionTab.prototype = new QStyleOptionTab_BaseJs(engine);
      //QStyleOptionTab.prototype = new QStyleOptionTab_Wrapper(engine);
      QStyleOptionTab.prototype = new Object();

      QStyleOptionTab.prototype.toString = function() {
          //return "QStyleOptionTab [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionTab [JS]";
        };
      QStyleOptionTab.getObjectType = function() {
        return RJSType_QStyleOptionTab.getIdStatic();
      };

      QStyleOptionTab.prototype.getObjectType = function() {
        return RJSType_QStyleOptionTab.getIdStatic();
      };

      QStyleOptionTab.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionTab.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionTab.SO_Default = QStyleOptionTab_Wrapper.SO_Default;
QStyleOptionTab.SO_FocusRect = QStyleOptionTab_Wrapper.SO_FocusRect;
QStyleOptionTab.SO_Button = QStyleOptionTab_Wrapper.SO_Button;
QStyleOptionTab.SO_Tab = QStyleOptionTab_Wrapper.SO_Tab;
QStyleOptionTab.SO_MenuItem = QStyleOptionTab_Wrapper.SO_MenuItem;
QStyleOptionTab.SO_Frame = QStyleOptionTab_Wrapper.SO_Frame;
QStyleOptionTab.SO_ProgressBar = QStyleOptionTab_Wrapper.SO_ProgressBar;
QStyleOptionTab.SO_ToolBox = QStyleOptionTab_Wrapper.SO_ToolBox;
QStyleOptionTab.SO_Header = QStyleOptionTab_Wrapper.SO_Header;
QStyleOptionTab.SO_DockWidget = QStyleOptionTab_Wrapper.SO_DockWidget;
QStyleOptionTab.SO_ViewItem = QStyleOptionTab_Wrapper.SO_ViewItem;
QStyleOptionTab.SO_TabWidgetFrame = QStyleOptionTab_Wrapper.SO_TabWidgetFrame;
QStyleOptionTab.SO_TabBarBase = QStyleOptionTab_Wrapper.SO_TabBarBase;
QStyleOptionTab.SO_RubberBand = QStyleOptionTab_Wrapper.SO_RubberBand;
QStyleOptionTab.SO_ToolBar = QStyleOptionTab_Wrapper.SO_ToolBar;
QStyleOptionTab.SO_GraphicsItem = QStyleOptionTab_Wrapper.SO_GraphicsItem;
QStyleOptionTab.SO_Complex = QStyleOptionTab_Wrapper.SO_Complex;
QStyleOptionTab.SO_Slider = QStyleOptionTab_Wrapper.SO_Slider;
QStyleOptionTab.SO_SpinBox = QStyleOptionTab_Wrapper.SO_SpinBox;
QStyleOptionTab.SO_ToolButton = QStyleOptionTab_Wrapper.SO_ToolButton;
QStyleOptionTab.SO_ComboBox = QStyleOptionTab_Wrapper.SO_ComboBox;
QStyleOptionTab.SO_TitleBar = QStyleOptionTab_Wrapper.SO_TitleBar;
QStyleOptionTab.SO_GroupBox = QStyleOptionTab_Wrapper.SO_GroupBox;
QStyleOptionTab.SO_SizeGrip = QStyleOptionTab_Wrapper.SO_SizeGrip;
QStyleOptionTab.SO_CustomBase = QStyleOptionTab_Wrapper.SO_CustomBase;
QStyleOptionTab.SO_ComplexCustomBase = QStyleOptionTab_Wrapper.SO_ComplexCustomBase;

  // enum: TabPosition
QStyleOptionTab.Beginning = QStyleOptionTab_Wrapper.Beginning;
QStyleOptionTab.Middle = QStyleOptionTab_Wrapper.Middle;
QStyleOptionTab.End = QStyleOptionTab_Wrapper.End;
QStyleOptionTab.OnlyOneTab = QStyleOptionTab_Wrapper.OnlyOneTab;
QStyleOptionTab.Moving = QStyleOptionTab_Wrapper.Moving;

  // enum: SelectedPosition
QStyleOptionTab.NotAdjacent = QStyleOptionTab_Wrapper.NotAdjacent;
QStyleOptionTab.NextIsSelected = QStyleOptionTab_Wrapper.NextIsSelected;
QStyleOptionTab.PreviousIsSelected = QStyleOptionTab_Wrapper.PreviousIsSelected;

  // enum: CornerWidget
QStyleOptionTab.NoCornerWidgets = QStyleOptionTab_Wrapper.NoCornerWidgets;
QStyleOptionTab.LeftCornerWidget = QStyleOptionTab_Wrapper.LeftCornerWidget;
QStyleOptionTab.RightCornerWidget = QStyleOptionTab_Wrapper.RightCornerWidget;

  // enum: TabFeature
QStyleOptionTab.None = QStyleOptionTab_Wrapper.None;
QStyleOptionTab.HasFrame = QStyleOptionTab_Wrapper.HasFrame;
QStyleOptionTab.MinimumSizeHint = QStyleOptionTab_Wrapper.MinimumSizeHint;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionTab.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionTab.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      