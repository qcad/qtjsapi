
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionFrame() {
        

        // should be QStyleOptionFrame_BaseJs.call(this, engine):
        //QStyleOptionFrame.prototype = new QStyleOptionFrame_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionFrame.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionFrame);
                
            //}
          }
          else {
            qWarning("QStyleOptionFrame.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionFrame_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionFrame);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionFrame);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionFrame_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionFrame);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionFrame);
  }

  
  else {
    
        print("QStyleOptionFrame(): wrong number / type of arguments");
      
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

      //QStyleOptionFrame.prototype = new QStyleOptionFrame_BaseJs(engine);
      //QStyleOptionFrame.prototype = new QStyleOptionFrame_Wrapper(engine);
      QStyleOptionFrame.prototype = new Object();

      QStyleOptionFrame.prototype.toString = function() {
          //return "QStyleOptionFrame [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionFrame [JS]";
        };
      QStyleOptionFrame.getObjectType = function() {
        return RJSType_QStyleOptionFrame.getIdStatic();
      };

      QStyleOptionFrame.prototype.getObjectType = function() {
        return RJSType_QStyleOptionFrame.getIdStatic();
      };

      QStyleOptionFrame.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionFrame.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionFrame.SO_Default = QStyleOptionFrame_Wrapper.SO_Default;
QStyleOptionFrame.SO_FocusRect = QStyleOptionFrame_Wrapper.SO_FocusRect;
QStyleOptionFrame.SO_Button = QStyleOptionFrame_Wrapper.SO_Button;
QStyleOptionFrame.SO_Tab = QStyleOptionFrame_Wrapper.SO_Tab;
QStyleOptionFrame.SO_MenuItem = QStyleOptionFrame_Wrapper.SO_MenuItem;
QStyleOptionFrame.SO_Frame = QStyleOptionFrame_Wrapper.SO_Frame;
QStyleOptionFrame.SO_ProgressBar = QStyleOptionFrame_Wrapper.SO_ProgressBar;
QStyleOptionFrame.SO_ToolBox = QStyleOptionFrame_Wrapper.SO_ToolBox;
QStyleOptionFrame.SO_Header = QStyleOptionFrame_Wrapper.SO_Header;
QStyleOptionFrame.SO_DockWidget = QStyleOptionFrame_Wrapper.SO_DockWidget;
QStyleOptionFrame.SO_ViewItem = QStyleOptionFrame_Wrapper.SO_ViewItem;
QStyleOptionFrame.SO_TabWidgetFrame = QStyleOptionFrame_Wrapper.SO_TabWidgetFrame;
QStyleOptionFrame.SO_TabBarBase = QStyleOptionFrame_Wrapper.SO_TabBarBase;
QStyleOptionFrame.SO_RubberBand = QStyleOptionFrame_Wrapper.SO_RubberBand;
QStyleOptionFrame.SO_ToolBar = QStyleOptionFrame_Wrapper.SO_ToolBar;
QStyleOptionFrame.SO_GraphicsItem = QStyleOptionFrame_Wrapper.SO_GraphicsItem;
QStyleOptionFrame.SO_Complex = QStyleOptionFrame_Wrapper.SO_Complex;
QStyleOptionFrame.SO_Slider = QStyleOptionFrame_Wrapper.SO_Slider;
QStyleOptionFrame.SO_SpinBox = QStyleOptionFrame_Wrapper.SO_SpinBox;
QStyleOptionFrame.SO_ToolButton = QStyleOptionFrame_Wrapper.SO_ToolButton;
QStyleOptionFrame.SO_ComboBox = QStyleOptionFrame_Wrapper.SO_ComboBox;
QStyleOptionFrame.SO_TitleBar = QStyleOptionFrame_Wrapper.SO_TitleBar;
QStyleOptionFrame.SO_GroupBox = QStyleOptionFrame_Wrapper.SO_GroupBox;
QStyleOptionFrame.SO_SizeGrip = QStyleOptionFrame_Wrapper.SO_SizeGrip;
QStyleOptionFrame.SO_CustomBase = QStyleOptionFrame_Wrapper.SO_CustomBase;
QStyleOptionFrame.SO_ComplexCustomBase = QStyleOptionFrame_Wrapper.SO_ComplexCustomBase;

  // enum: FrameFeature
QStyleOptionFrame.None = QStyleOptionFrame_Wrapper.None;
QStyleOptionFrame.Flat = QStyleOptionFrame_Wrapper.Flat;
QStyleOptionFrame.Rounded = QStyleOptionFrame_Wrapper.Rounded;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionFrame.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionFrame.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      