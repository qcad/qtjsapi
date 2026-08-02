
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionToolBar() {
        

        // should be QStyleOptionToolBar_BaseJs.call(this, engine):
        //QStyleOptionToolBar.prototype = new QStyleOptionToolBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionToolBar.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionToolBar);
                
            //}
          }
          else {
            qWarning("QStyleOptionToolBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionToolBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionToolBar);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionToolBar);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionToolBar_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionToolBar);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionToolBar);
  }

  
  else {
    
        print("QStyleOptionToolBar(): wrong number / type of arguments");
      
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

      //QStyleOptionToolBar.prototype = new QStyleOptionToolBar_BaseJs(engine);
      //QStyleOptionToolBar.prototype = new QStyleOptionToolBar_Wrapper(engine);
      QStyleOptionToolBar.prototype = new Object();

      QStyleOptionToolBar.prototype.toString = function() {
          //return "QStyleOptionToolBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionToolBar [JS]";
        };
      QStyleOptionToolBar.getObjectType = function() {
        return RJSType_QStyleOptionToolBar.getIdStatic();
      };

      QStyleOptionToolBar.prototype.getObjectType = function() {
        return RJSType_QStyleOptionToolBar.getIdStatic();
      };

      QStyleOptionToolBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionToolBar.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionToolBar.SO_Default = QStyleOptionToolBar_Wrapper.SO_Default;
QStyleOptionToolBar.SO_FocusRect = QStyleOptionToolBar_Wrapper.SO_FocusRect;
QStyleOptionToolBar.SO_Button = QStyleOptionToolBar_Wrapper.SO_Button;
QStyleOptionToolBar.SO_Tab = QStyleOptionToolBar_Wrapper.SO_Tab;
QStyleOptionToolBar.SO_MenuItem = QStyleOptionToolBar_Wrapper.SO_MenuItem;
QStyleOptionToolBar.SO_Frame = QStyleOptionToolBar_Wrapper.SO_Frame;
QStyleOptionToolBar.SO_ProgressBar = QStyleOptionToolBar_Wrapper.SO_ProgressBar;
QStyleOptionToolBar.SO_ToolBox = QStyleOptionToolBar_Wrapper.SO_ToolBox;
QStyleOptionToolBar.SO_Header = QStyleOptionToolBar_Wrapper.SO_Header;
QStyleOptionToolBar.SO_DockWidget = QStyleOptionToolBar_Wrapper.SO_DockWidget;
QStyleOptionToolBar.SO_ViewItem = QStyleOptionToolBar_Wrapper.SO_ViewItem;
QStyleOptionToolBar.SO_TabWidgetFrame = QStyleOptionToolBar_Wrapper.SO_TabWidgetFrame;
QStyleOptionToolBar.SO_TabBarBase = QStyleOptionToolBar_Wrapper.SO_TabBarBase;
QStyleOptionToolBar.SO_RubberBand = QStyleOptionToolBar_Wrapper.SO_RubberBand;
QStyleOptionToolBar.SO_ToolBar = QStyleOptionToolBar_Wrapper.SO_ToolBar;
QStyleOptionToolBar.SO_GraphicsItem = QStyleOptionToolBar_Wrapper.SO_GraphicsItem;
QStyleOptionToolBar.SO_Complex = QStyleOptionToolBar_Wrapper.SO_Complex;
QStyleOptionToolBar.SO_Slider = QStyleOptionToolBar_Wrapper.SO_Slider;
QStyleOptionToolBar.SO_SpinBox = QStyleOptionToolBar_Wrapper.SO_SpinBox;
QStyleOptionToolBar.SO_ToolButton = QStyleOptionToolBar_Wrapper.SO_ToolButton;
QStyleOptionToolBar.SO_ComboBox = QStyleOptionToolBar_Wrapper.SO_ComboBox;
QStyleOptionToolBar.SO_TitleBar = QStyleOptionToolBar_Wrapper.SO_TitleBar;
QStyleOptionToolBar.SO_GroupBox = QStyleOptionToolBar_Wrapper.SO_GroupBox;
QStyleOptionToolBar.SO_SizeGrip = QStyleOptionToolBar_Wrapper.SO_SizeGrip;
QStyleOptionToolBar.SO_CustomBase = QStyleOptionToolBar_Wrapper.SO_CustomBase;
QStyleOptionToolBar.SO_ComplexCustomBase = QStyleOptionToolBar_Wrapper.SO_ComplexCustomBase;

  // enum: ToolBarPosition
QStyleOptionToolBar.Beginning = QStyleOptionToolBar_Wrapper.Beginning;
QStyleOptionToolBar.Middle = QStyleOptionToolBar_Wrapper.Middle;
QStyleOptionToolBar.End = QStyleOptionToolBar_Wrapper.End;
QStyleOptionToolBar.OnlyOne = QStyleOptionToolBar_Wrapper.OnlyOne;

  // enum: ToolBarFeature
QStyleOptionToolBar.None = QStyleOptionToolBar_Wrapper.None;
QStyleOptionToolBar.Movable = QStyleOptionToolBar_Wrapper.Movable;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionToolBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionToolBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      