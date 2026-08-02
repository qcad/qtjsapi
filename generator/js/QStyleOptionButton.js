
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionButton() {
        

        // should be QStyleOptionButton_BaseJs.call(this, engine):
        //QStyleOptionButton.prototype = new QStyleOptionButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionButton.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionButton);
                
            //}
          }
          else {
            qWarning("QStyleOptionButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionButton);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionButton);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionButton_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionButton);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionButton);
  }

  
  else {
    
        print("QStyleOptionButton(): wrong number / type of arguments");
      
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

      //QStyleOptionButton.prototype = new QStyleOptionButton_BaseJs(engine);
      //QStyleOptionButton.prototype = new QStyleOptionButton_Wrapper(engine);
      QStyleOptionButton.prototype = new Object();

      QStyleOptionButton.prototype.toString = function() {
          //return "QStyleOptionButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionButton [JS]";
        };
      QStyleOptionButton.getObjectType = function() {
        return RJSType_QStyleOptionButton.getIdStatic();
      };

      QStyleOptionButton.prototype.getObjectType = function() {
        return RJSType_QStyleOptionButton.getIdStatic();
      };

      QStyleOptionButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionButton.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionButton.SO_Default = QStyleOptionButton_Wrapper.SO_Default;
QStyleOptionButton.SO_FocusRect = QStyleOptionButton_Wrapper.SO_FocusRect;
QStyleOptionButton.SO_Button = QStyleOptionButton_Wrapper.SO_Button;
QStyleOptionButton.SO_Tab = QStyleOptionButton_Wrapper.SO_Tab;
QStyleOptionButton.SO_MenuItem = QStyleOptionButton_Wrapper.SO_MenuItem;
QStyleOptionButton.SO_Frame = QStyleOptionButton_Wrapper.SO_Frame;
QStyleOptionButton.SO_ProgressBar = QStyleOptionButton_Wrapper.SO_ProgressBar;
QStyleOptionButton.SO_ToolBox = QStyleOptionButton_Wrapper.SO_ToolBox;
QStyleOptionButton.SO_Header = QStyleOptionButton_Wrapper.SO_Header;
QStyleOptionButton.SO_DockWidget = QStyleOptionButton_Wrapper.SO_DockWidget;
QStyleOptionButton.SO_ViewItem = QStyleOptionButton_Wrapper.SO_ViewItem;
QStyleOptionButton.SO_TabWidgetFrame = QStyleOptionButton_Wrapper.SO_TabWidgetFrame;
QStyleOptionButton.SO_TabBarBase = QStyleOptionButton_Wrapper.SO_TabBarBase;
QStyleOptionButton.SO_RubberBand = QStyleOptionButton_Wrapper.SO_RubberBand;
QStyleOptionButton.SO_ToolBar = QStyleOptionButton_Wrapper.SO_ToolBar;
QStyleOptionButton.SO_GraphicsItem = QStyleOptionButton_Wrapper.SO_GraphicsItem;
QStyleOptionButton.SO_Complex = QStyleOptionButton_Wrapper.SO_Complex;
QStyleOptionButton.SO_Slider = QStyleOptionButton_Wrapper.SO_Slider;
QStyleOptionButton.SO_SpinBox = QStyleOptionButton_Wrapper.SO_SpinBox;
QStyleOptionButton.SO_ToolButton = QStyleOptionButton_Wrapper.SO_ToolButton;
QStyleOptionButton.SO_ComboBox = QStyleOptionButton_Wrapper.SO_ComboBox;
QStyleOptionButton.SO_TitleBar = QStyleOptionButton_Wrapper.SO_TitleBar;
QStyleOptionButton.SO_GroupBox = QStyleOptionButton_Wrapper.SO_GroupBox;
QStyleOptionButton.SO_SizeGrip = QStyleOptionButton_Wrapper.SO_SizeGrip;
QStyleOptionButton.SO_CustomBase = QStyleOptionButton_Wrapper.SO_CustomBase;
QStyleOptionButton.SO_ComplexCustomBase = QStyleOptionButton_Wrapper.SO_ComplexCustomBase;

  // enum: ButtonFeature
QStyleOptionButton.None = QStyleOptionButton_Wrapper.None;
QStyleOptionButton.Flat = QStyleOptionButton_Wrapper.Flat;
QStyleOptionButton.HasMenu = QStyleOptionButton_Wrapper.HasMenu;
QStyleOptionButton.DefaultButton = QStyleOptionButton_Wrapper.DefaultButton;
QStyleOptionButton.AutoDefaultButton = QStyleOptionButton_Wrapper.AutoDefaultButton;
QStyleOptionButton.CommandLinkButton = QStyleOptionButton_Wrapper.CommandLinkButton;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      