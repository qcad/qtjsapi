
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionTabBarBase() {
        

        // should be QStyleOptionTabBarBase_BaseJs.call(this, engine):
        //QStyleOptionTabBarBase.prototype = new QStyleOptionTabBarBase_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionTabBarBase.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionTabBarBase);
                
            //}
          }
          else {
            qWarning("QStyleOptionTabBarBase.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionTabBarBase_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionTabBarBase);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionTabBarBase);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionTabBarBase_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionTabBarBase);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionTabBarBase);
  }

  
  else {
    
        print("QStyleOptionTabBarBase(): wrong number / type of arguments");
      
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

      //QStyleOptionTabBarBase.prototype = new QStyleOptionTabBarBase_BaseJs(engine);
      //QStyleOptionTabBarBase.prototype = new QStyleOptionTabBarBase_Wrapper(engine);
      QStyleOptionTabBarBase.prototype = new Object();

      QStyleOptionTabBarBase.prototype.toString = function() {
          //return "QStyleOptionTabBarBase [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionTabBarBase [JS]";
        };
      QStyleOptionTabBarBase.getObjectType = function() {
        return RJSType_QStyleOptionTabBarBase.getIdStatic();
      };

      QStyleOptionTabBarBase.prototype.getObjectType = function() {
        return RJSType_QStyleOptionTabBarBase.getIdStatic();
      };

      QStyleOptionTabBarBase.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionTabBarBase.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionTabBarBase.SO_Default = QStyleOptionTabBarBase_Wrapper.SO_Default;
QStyleOptionTabBarBase.SO_FocusRect = QStyleOptionTabBarBase_Wrapper.SO_FocusRect;
QStyleOptionTabBarBase.SO_Button = QStyleOptionTabBarBase_Wrapper.SO_Button;
QStyleOptionTabBarBase.SO_Tab = QStyleOptionTabBarBase_Wrapper.SO_Tab;
QStyleOptionTabBarBase.SO_MenuItem = QStyleOptionTabBarBase_Wrapper.SO_MenuItem;
QStyleOptionTabBarBase.SO_Frame = QStyleOptionTabBarBase_Wrapper.SO_Frame;
QStyleOptionTabBarBase.SO_ProgressBar = QStyleOptionTabBarBase_Wrapper.SO_ProgressBar;
QStyleOptionTabBarBase.SO_ToolBox = QStyleOptionTabBarBase_Wrapper.SO_ToolBox;
QStyleOptionTabBarBase.SO_Header = QStyleOptionTabBarBase_Wrapper.SO_Header;
QStyleOptionTabBarBase.SO_DockWidget = QStyleOptionTabBarBase_Wrapper.SO_DockWidget;
QStyleOptionTabBarBase.SO_ViewItem = QStyleOptionTabBarBase_Wrapper.SO_ViewItem;
QStyleOptionTabBarBase.SO_TabWidgetFrame = QStyleOptionTabBarBase_Wrapper.SO_TabWidgetFrame;
QStyleOptionTabBarBase.SO_TabBarBase = QStyleOptionTabBarBase_Wrapper.SO_TabBarBase;
QStyleOptionTabBarBase.SO_RubberBand = QStyleOptionTabBarBase_Wrapper.SO_RubberBand;
QStyleOptionTabBarBase.SO_ToolBar = QStyleOptionTabBarBase_Wrapper.SO_ToolBar;
QStyleOptionTabBarBase.SO_GraphicsItem = QStyleOptionTabBarBase_Wrapper.SO_GraphicsItem;
QStyleOptionTabBarBase.SO_Complex = QStyleOptionTabBarBase_Wrapper.SO_Complex;
QStyleOptionTabBarBase.SO_Slider = QStyleOptionTabBarBase_Wrapper.SO_Slider;
QStyleOptionTabBarBase.SO_SpinBox = QStyleOptionTabBarBase_Wrapper.SO_SpinBox;
QStyleOptionTabBarBase.SO_ToolButton = QStyleOptionTabBarBase_Wrapper.SO_ToolButton;
QStyleOptionTabBarBase.SO_ComboBox = QStyleOptionTabBarBase_Wrapper.SO_ComboBox;
QStyleOptionTabBarBase.SO_TitleBar = QStyleOptionTabBarBase_Wrapper.SO_TitleBar;
QStyleOptionTabBarBase.SO_GroupBox = QStyleOptionTabBarBase_Wrapper.SO_GroupBox;
QStyleOptionTabBarBase.SO_SizeGrip = QStyleOptionTabBarBase_Wrapper.SO_SizeGrip;
QStyleOptionTabBarBase.SO_CustomBase = QStyleOptionTabBarBase_Wrapper.SO_CustomBase;
QStyleOptionTabBarBase.SO_ComplexCustomBase = QStyleOptionTabBarBase_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionTabBarBase.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionTabBarBase.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      