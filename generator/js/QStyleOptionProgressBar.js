
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionProgressBar() {
        

        // should be QStyleOptionProgressBar_BaseJs.call(this, engine):
        //QStyleOptionProgressBar.prototype = new QStyleOptionProgressBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionProgressBar.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionProgressBar);
                
            //}
          }
          else {
            qWarning("QStyleOptionProgressBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionProgressBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionProgressBar);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionProgressBar);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionProgressBar_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionProgressBar);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionProgressBar);
  }

  
  else {
    
        print("QStyleOptionProgressBar(): wrong number / type of arguments");
      
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

      //QStyleOptionProgressBar.prototype = new QStyleOptionProgressBar_BaseJs(engine);
      //QStyleOptionProgressBar.prototype = new QStyleOptionProgressBar_Wrapper(engine);
      QStyleOptionProgressBar.prototype = new Object();

      QStyleOptionProgressBar.prototype.toString = function() {
          //return "QStyleOptionProgressBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionProgressBar [JS]";
        };
      QStyleOptionProgressBar.getObjectType = function() {
        return RJSType_QStyleOptionProgressBar.getIdStatic();
      };

      QStyleOptionProgressBar.prototype.getObjectType = function() {
        return RJSType_QStyleOptionProgressBar.getIdStatic();
      };

      QStyleOptionProgressBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionProgressBar.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionProgressBar.SO_Default = QStyleOptionProgressBar_Wrapper.SO_Default;
QStyleOptionProgressBar.SO_FocusRect = QStyleOptionProgressBar_Wrapper.SO_FocusRect;
QStyleOptionProgressBar.SO_Button = QStyleOptionProgressBar_Wrapper.SO_Button;
QStyleOptionProgressBar.SO_Tab = QStyleOptionProgressBar_Wrapper.SO_Tab;
QStyleOptionProgressBar.SO_MenuItem = QStyleOptionProgressBar_Wrapper.SO_MenuItem;
QStyleOptionProgressBar.SO_Frame = QStyleOptionProgressBar_Wrapper.SO_Frame;
QStyleOptionProgressBar.SO_ProgressBar = QStyleOptionProgressBar_Wrapper.SO_ProgressBar;
QStyleOptionProgressBar.SO_ToolBox = QStyleOptionProgressBar_Wrapper.SO_ToolBox;
QStyleOptionProgressBar.SO_Header = QStyleOptionProgressBar_Wrapper.SO_Header;
QStyleOptionProgressBar.SO_DockWidget = QStyleOptionProgressBar_Wrapper.SO_DockWidget;
QStyleOptionProgressBar.SO_ViewItem = QStyleOptionProgressBar_Wrapper.SO_ViewItem;
QStyleOptionProgressBar.SO_TabWidgetFrame = QStyleOptionProgressBar_Wrapper.SO_TabWidgetFrame;
QStyleOptionProgressBar.SO_TabBarBase = QStyleOptionProgressBar_Wrapper.SO_TabBarBase;
QStyleOptionProgressBar.SO_RubberBand = QStyleOptionProgressBar_Wrapper.SO_RubberBand;
QStyleOptionProgressBar.SO_ToolBar = QStyleOptionProgressBar_Wrapper.SO_ToolBar;
QStyleOptionProgressBar.SO_GraphicsItem = QStyleOptionProgressBar_Wrapper.SO_GraphicsItem;
QStyleOptionProgressBar.SO_Complex = QStyleOptionProgressBar_Wrapper.SO_Complex;
QStyleOptionProgressBar.SO_Slider = QStyleOptionProgressBar_Wrapper.SO_Slider;
QStyleOptionProgressBar.SO_SpinBox = QStyleOptionProgressBar_Wrapper.SO_SpinBox;
QStyleOptionProgressBar.SO_ToolButton = QStyleOptionProgressBar_Wrapper.SO_ToolButton;
QStyleOptionProgressBar.SO_ComboBox = QStyleOptionProgressBar_Wrapper.SO_ComboBox;
QStyleOptionProgressBar.SO_TitleBar = QStyleOptionProgressBar_Wrapper.SO_TitleBar;
QStyleOptionProgressBar.SO_GroupBox = QStyleOptionProgressBar_Wrapper.SO_GroupBox;
QStyleOptionProgressBar.SO_SizeGrip = QStyleOptionProgressBar_Wrapper.SO_SizeGrip;
QStyleOptionProgressBar.SO_CustomBase = QStyleOptionProgressBar_Wrapper.SO_CustomBase;
QStyleOptionProgressBar.SO_ComplexCustomBase = QStyleOptionProgressBar_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionProgressBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionProgressBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      