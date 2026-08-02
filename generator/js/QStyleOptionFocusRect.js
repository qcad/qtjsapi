
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionFocusRect() {
        

        // should be QStyleOptionFocusRect_BaseJs.call(this, engine):
        //QStyleOptionFocusRect.prototype = new QStyleOptionFocusRect_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionFocusRect.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionFocusRect);
                
            //}
          }
          else {
            qWarning("QStyleOptionFocusRect.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionFocusRect_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionFocusRect);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionFocusRect);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionFocusRect_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionFocusRect);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionFocusRect);
  }

  
  else {
    
        print("QStyleOptionFocusRect(): wrong number / type of arguments");
      
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

      //QStyleOptionFocusRect.prototype = new QStyleOptionFocusRect_BaseJs(engine);
      //QStyleOptionFocusRect.prototype = new QStyleOptionFocusRect_Wrapper(engine);
      QStyleOptionFocusRect.prototype = new Object();

      QStyleOptionFocusRect.prototype.toString = function() {
          //return "QStyleOptionFocusRect [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionFocusRect [JS]";
        };
      QStyleOptionFocusRect.getObjectType = function() {
        return RJSType_QStyleOptionFocusRect.getIdStatic();
      };

      QStyleOptionFocusRect.prototype.getObjectType = function() {
        return RJSType_QStyleOptionFocusRect.getIdStatic();
      };

      QStyleOptionFocusRect.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionFocusRect.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionFocusRect.SO_Default = QStyleOptionFocusRect_Wrapper.SO_Default;
QStyleOptionFocusRect.SO_FocusRect = QStyleOptionFocusRect_Wrapper.SO_FocusRect;
QStyleOptionFocusRect.SO_Button = QStyleOptionFocusRect_Wrapper.SO_Button;
QStyleOptionFocusRect.SO_Tab = QStyleOptionFocusRect_Wrapper.SO_Tab;
QStyleOptionFocusRect.SO_MenuItem = QStyleOptionFocusRect_Wrapper.SO_MenuItem;
QStyleOptionFocusRect.SO_Frame = QStyleOptionFocusRect_Wrapper.SO_Frame;
QStyleOptionFocusRect.SO_ProgressBar = QStyleOptionFocusRect_Wrapper.SO_ProgressBar;
QStyleOptionFocusRect.SO_ToolBox = QStyleOptionFocusRect_Wrapper.SO_ToolBox;
QStyleOptionFocusRect.SO_Header = QStyleOptionFocusRect_Wrapper.SO_Header;
QStyleOptionFocusRect.SO_DockWidget = QStyleOptionFocusRect_Wrapper.SO_DockWidget;
QStyleOptionFocusRect.SO_ViewItem = QStyleOptionFocusRect_Wrapper.SO_ViewItem;
QStyleOptionFocusRect.SO_TabWidgetFrame = QStyleOptionFocusRect_Wrapper.SO_TabWidgetFrame;
QStyleOptionFocusRect.SO_TabBarBase = QStyleOptionFocusRect_Wrapper.SO_TabBarBase;
QStyleOptionFocusRect.SO_RubberBand = QStyleOptionFocusRect_Wrapper.SO_RubberBand;
QStyleOptionFocusRect.SO_ToolBar = QStyleOptionFocusRect_Wrapper.SO_ToolBar;
QStyleOptionFocusRect.SO_GraphicsItem = QStyleOptionFocusRect_Wrapper.SO_GraphicsItem;
QStyleOptionFocusRect.SO_Complex = QStyleOptionFocusRect_Wrapper.SO_Complex;
QStyleOptionFocusRect.SO_Slider = QStyleOptionFocusRect_Wrapper.SO_Slider;
QStyleOptionFocusRect.SO_SpinBox = QStyleOptionFocusRect_Wrapper.SO_SpinBox;
QStyleOptionFocusRect.SO_ToolButton = QStyleOptionFocusRect_Wrapper.SO_ToolButton;
QStyleOptionFocusRect.SO_ComboBox = QStyleOptionFocusRect_Wrapper.SO_ComboBox;
QStyleOptionFocusRect.SO_TitleBar = QStyleOptionFocusRect_Wrapper.SO_TitleBar;
QStyleOptionFocusRect.SO_GroupBox = QStyleOptionFocusRect_Wrapper.SO_GroupBox;
QStyleOptionFocusRect.SO_SizeGrip = QStyleOptionFocusRect_Wrapper.SO_SizeGrip;
QStyleOptionFocusRect.SO_CustomBase = QStyleOptionFocusRect_Wrapper.SO_CustomBase;
QStyleOptionFocusRect.SO_ComplexCustomBase = QStyleOptionFocusRect_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionFocusRect.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionFocusRect.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      