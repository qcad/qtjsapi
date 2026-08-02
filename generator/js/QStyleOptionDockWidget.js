
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionDockWidget() {
        

        // should be QStyleOptionDockWidget_BaseJs.call(this, engine):
        //QStyleOptionDockWidget.prototype = new QStyleOptionDockWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionDockWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionDockWidget);
                
            //}
          }
          else {
            qWarning("QStyleOptionDockWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionDockWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionDockWidget);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionDockWidget);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionDockWidget_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionDockWidget);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionDockWidget);
  }

  
  else {
    
        print("QStyleOptionDockWidget(): wrong number / type of arguments");
      
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

      //QStyleOptionDockWidget.prototype = new QStyleOptionDockWidget_BaseJs(engine);
      //QStyleOptionDockWidget.prototype = new QStyleOptionDockWidget_Wrapper(engine);
      QStyleOptionDockWidget.prototype = new Object();

      QStyleOptionDockWidget.prototype.toString = function() {
          //return "QStyleOptionDockWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionDockWidget [JS]";
        };
      QStyleOptionDockWidget.getObjectType = function() {
        return RJSType_QStyleOptionDockWidget.getIdStatic();
      };

      QStyleOptionDockWidget.prototype.getObjectType = function() {
        return RJSType_QStyleOptionDockWidget.getIdStatic();
      };

      QStyleOptionDockWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionDockWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionDockWidget.SO_Default = QStyleOptionDockWidget_Wrapper.SO_Default;
QStyleOptionDockWidget.SO_FocusRect = QStyleOptionDockWidget_Wrapper.SO_FocusRect;
QStyleOptionDockWidget.SO_Button = QStyleOptionDockWidget_Wrapper.SO_Button;
QStyleOptionDockWidget.SO_Tab = QStyleOptionDockWidget_Wrapper.SO_Tab;
QStyleOptionDockWidget.SO_MenuItem = QStyleOptionDockWidget_Wrapper.SO_MenuItem;
QStyleOptionDockWidget.SO_Frame = QStyleOptionDockWidget_Wrapper.SO_Frame;
QStyleOptionDockWidget.SO_ProgressBar = QStyleOptionDockWidget_Wrapper.SO_ProgressBar;
QStyleOptionDockWidget.SO_ToolBox = QStyleOptionDockWidget_Wrapper.SO_ToolBox;
QStyleOptionDockWidget.SO_Header = QStyleOptionDockWidget_Wrapper.SO_Header;
QStyleOptionDockWidget.SO_DockWidget = QStyleOptionDockWidget_Wrapper.SO_DockWidget;
QStyleOptionDockWidget.SO_ViewItem = QStyleOptionDockWidget_Wrapper.SO_ViewItem;
QStyleOptionDockWidget.SO_TabWidgetFrame = QStyleOptionDockWidget_Wrapper.SO_TabWidgetFrame;
QStyleOptionDockWidget.SO_TabBarBase = QStyleOptionDockWidget_Wrapper.SO_TabBarBase;
QStyleOptionDockWidget.SO_RubberBand = QStyleOptionDockWidget_Wrapper.SO_RubberBand;
QStyleOptionDockWidget.SO_ToolBar = QStyleOptionDockWidget_Wrapper.SO_ToolBar;
QStyleOptionDockWidget.SO_GraphicsItem = QStyleOptionDockWidget_Wrapper.SO_GraphicsItem;
QStyleOptionDockWidget.SO_Complex = QStyleOptionDockWidget_Wrapper.SO_Complex;
QStyleOptionDockWidget.SO_Slider = QStyleOptionDockWidget_Wrapper.SO_Slider;
QStyleOptionDockWidget.SO_SpinBox = QStyleOptionDockWidget_Wrapper.SO_SpinBox;
QStyleOptionDockWidget.SO_ToolButton = QStyleOptionDockWidget_Wrapper.SO_ToolButton;
QStyleOptionDockWidget.SO_ComboBox = QStyleOptionDockWidget_Wrapper.SO_ComboBox;
QStyleOptionDockWidget.SO_TitleBar = QStyleOptionDockWidget_Wrapper.SO_TitleBar;
QStyleOptionDockWidget.SO_GroupBox = QStyleOptionDockWidget_Wrapper.SO_GroupBox;
QStyleOptionDockWidget.SO_SizeGrip = QStyleOptionDockWidget_Wrapper.SO_SizeGrip;
QStyleOptionDockWidget.SO_CustomBase = QStyleOptionDockWidget_Wrapper.SO_CustomBase;
QStyleOptionDockWidget.SO_ComplexCustomBase = QStyleOptionDockWidget_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionDockWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionDockWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      