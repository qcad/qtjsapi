
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionTabWidgetFrame() {
        

        // should be QStyleOptionTabWidgetFrame_BaseJs.call(this, engine):
        //QStyleOptionTabWidgetFrame.prototype = new QStyleOptionTabWidgetFrame_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionTabWidgetFrame.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionTabWidgetFrame);
                
            //}
          }
          else {
            qWarning("QStyleOptionTabWidgetFrame.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionTabWidgetFrame_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionTabWidgetFrame);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionTabWidgetFrame);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionTabWidgetFrame_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionTabWidgetFrame);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionTabWidgetFrame);
  }

  
  else {
    
        print("QStyleOptionTabWidgetFrame(): wrong number / type of arguments");
      
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

      //QStyleOptionTabWidgetFrame.prototype = new QStyleOptionTabWidgetFrame_BaseJs(engine);
      //QStyleOptionTabWidgetFrame.prototype = new QStyleOptionTabWidgetFrame_Wrapper(engine);
      QStyleOptionTabWidgetFrame.prototype = new Object();

      QStyleOptionTabWidgetFrame.prototype.toString = function() {
          //return "QStyleOptionTabWidgetFrame [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionTabWidgetFrame [JS]";
        };
      QStyleOptionTabWidgetFrame.getObjectType = function() {
        return RJSType_QStyleOptionTabWidgetFrame.getIdStatic();
      };

      QStyleOptionTabWidgetFrame.prototype.getObjectType = function() {
        return RJSType_QStyleOptionTabWidgetFrame.getIdStatic();
      };

      QStyleOptionTabWidgetFrame.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionTabWidgetFrame.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionTabWidgetFrame.SO_Default = QStyleOptionTabWidgetFrame_Wrapper.SO_Default;
QStyleOptionTabWidgetFrame.SO_FocusRect = QStyleOptionTabWidgetFrame_Wrapper.SO_FocusRect;
QStyleOptionTabWidgetFrame.SO_Button = QStyleOptionTabWidgetFrame_Wrapper.SO_Button;
QStyleOptionTabWidgetFrame.SO_Tab = QStyleOptionTabWidgetFrame_Wrapper.SO_Tab;
QStyleOptionTabWidgetFrame.SO_MenuItem = QStyleOptionTabWidgetFrame_Wrapper.SO_MenuItem;
QStyleOptionTabWidgetFrame.SO_Frame = QStyleOptionTabWidgetFrame_Wrapper.SO_Frame;
QStyleOptionTabWidgetFrame.SO_ProgressBar = QStyleOptionTabWidgetFrame_Wrapper.SO_ProgressBar;
QStyleOptionTabWidgetFrame.SO_ToolBox = QStyleOptionTabWidgetFrame_Wrapper.SO_ToolBox;
QStyleOptionTabWidgetFrame.SO_Header = QStyleOptionTabWidgetFrame_Wrapper.SO_Header;
QStyleOptionTabWidgetFrame.SO_DockWidget = QStyleOptionTabWidgetFrame_Wrapper.SO_DockWidget;
QStyleOptionTabWidgetFrame.SO_ViewItem = QStyleOptionTabWidgetFrame_Wrapper.SO_ViewItem;
QStyleOptionTabWidgetFrame.SO_TabWidgetFrame = QStyleOptionTabWidgetFrame_Wrapper.SO_TabWidgetFrame;
QStyleOptionTabWidgetFrame.SO_TabBarBase = QStyleOptionTabWidgetFrame_Wrapper.SO_TabBarBase;
QStyleOptionTabWidgetFrame.SO_RubberBand = QStyleOptionTabWidgetFrame_Wrapper.SO_RubberBand;
QStyleOptionTabWidgetFrame.SO_ToolBar = QStyleOptionTabWidgetFrame_Wrapper.SO_ToolBar;
QStyleOptionTabWidgetFrame.SO_GraphicsItem = QStyleOptionTabWidgetFrame_Wrapper.SO_GraphicsItem;
QStyleOptionTabWidgetFrame.SO_Complex = QStyleOptionTabWidgetFrame_Wrapper.SO_Complex;
QStyleOptionTabWidgetFrame.SO_Slider = QStyleOptionTabWidgetFrame_Wrapper.SO_Slider;
QStyleOptionTabWidgetFrame.SO_SpinBox = QStyleOptionTabWidgetFrame_Wrapper.SO_SpinBox;
QStyleOptionTabWidgetFrame.SO_ToolButton = QStyleOptionTabWidgetFrame_Wrapper.SO_ToolButton;
QStyleOptionTabWidgetFrame.SO_ComboBox = QStyleOptionTabWidgetFrame_Wrapper.SO_ComboBox;
QStyleOptionTabWidgetFrame.SO_TitleBar = QStyleOptionTabWidgetFrame_Wrapper.SO_TitleBar;
QStyleOptionTabWidgetFrame.SO_GroupBox = QStyleOptionTabWidgetFrame_Wrapper.SO_GroupBox;
QStyleOptionTabWidgetFrame.SO_SizeGrip = QStyleOptionTabWidgetFrame_Wrapper.SO_SizeGrip;
QStyleOptionTabWidgetFrame.SO_CustomBase = QStyleOptionTabWidgetFrame_Wrapper.SO_CustomBase;
QStyleOptionTabWidgetFrame.SO_ComplexCustomBase = QStyleOptionTabWidgetFrame_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionTabWidgetFrame.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionTabWidgetFrame.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      