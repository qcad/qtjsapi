
      // auto generated
      //var self;

      // class constructor:
      function QStyleOption() {
        

        // should be QStyleOption_BaseJs.call(this, engine):
        //QStyleOption.prototype = new QStyleOption_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOption.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOption);
                
            //}
          }
          else {
            qWarning("QStyleOption.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QStyleOption_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOption);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOption);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOption_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOption);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOption);
  }

  
  else {
    
        print("QStyleOption(): wrong number / type of arguments");
      
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

      //QStyleOption.prototype = new QStyleOption_BaseJs(engine);
      //QStyleOption.prototype = new QStyleOption_Wrapper(engine);
      QStyleOption.prototype = new Object();

      QStyleOption.prototype.toString = function() {
          //return "QStyleOption [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOption [JS]";
        };
      QStyleOption.getObjectType = function() {
        return RJSType_QStyleOption.getIdStatic();
      };

      QStyleOption.prototype.getObjectType = function() {
        return RJSType_QStyleOption.getIdStatic();
      };

      QStyleOption.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOption.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOption.SO_Default = QStyleOption_Wrapper.SO_Default;
QStyleOption.SO_FocusRect = QStyleOption_Wrapper.SO_FocusRect;
QStyleOption.SO_Button = QStyleOption_Wrapper.SO_Button;
QStyleOption.SO_Tab = QStyleOption_Wrapper.SO_Tab;
QStyleOption.SO_MenuItem = QStyleOption_Wrapper.SO_MenuItem;
QStyleOption.SO_Frame = QStyleOption_Wrapper.SO_Frame;
QStyleOption.SO_ProgressBar = QStyleOption_Wrapper.SO_ProgressBar;
QStyleOption.SO_ToolBox = QStyleOption_Wrapper.SO_ToolBox;
QStyleOption.SO_Header = QStyleOption_Wrapper.SO_Header;
QStyleOption.SO_DockWidget = QStyleOption_Wrapper.SO_DockWidget;
QStyleOption.SO_ViewItem = QStyleOption_Wrapper.SO_ViewItem;
QStyleOption.SO_TabWidgetFrame = QStyleOption_Wrapper.SO_TabWidgetFrame;
QStyleOption.SO_TabBarBase = QStyleOption_Wrapper.SO_TabBarBase;
QStyleOption.SO_RubberBand = QStyleOption_Wrapper.SO_RubberBand;
QStyleOption.SO_ToolBar = QStyleOption_Wrapper.SO_ToolBar;
QStyleOption.SO_GraphicsItem = QStyleOption_Wrapper.SO_GraphicsItem;
QStyleOption.SO_Complex = QStyleOption_Wrapper.SO_Complex;
QStyleOption.SO_Slider = QStyleOption_Wrapper.SO_Slider;
QStyleOption.SO_SpinBox = QStyleOption_Wrapper.SO_SpinBox;
QStyleOption.SO_ToolButton = QStyleOption_Wrapper.SO_ToolButton;
QStyleOption.SO_ComboBox = QStyleOption_Wrapper.SO_ComboBox;
QStyleOption.SO_TitleBar = QStyleOption_Wrapper.SO_TitleBar;
QStyleOption.SO_GroupBox = QStyleOption_Wrapper.SO_GroupBox;
QStyleOption.SO_SizeGrip = QStyleOption_Wrapper.SO_SizeGrip;
QStyleOption.SO_CustomBase = QStyleOption_Wrapper.SO_CustomBase;
QStyleOption.SO_ComplexCustomBase = QStyleOption_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOption.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOption.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      