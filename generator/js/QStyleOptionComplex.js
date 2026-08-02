
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionComplex() {
        

        // should be QStyleOptionComplex_BaseJs.call(this, engine):
        //QStyleOptionComplex.prototype = new QStyleOptionComplex_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionComplex.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionComplex);
                
            //}
          }
          else {
            qWarning("QStyleOptionComplex.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QStyleOptionComplex_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionComplex);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionComplex);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionComplex_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionComplex);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionComplex);
  }

  
  else {
    
        print("QStyleOptionComplex(): wrong number / type of arguments");
      
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

      //QStyleOptionComplex.prototype = new QStyleOptionComplex_BaseJs(engine);
      //QStyleOptionComplex.prototype = new QStyleOptionComplex_Wrapper(engine);
      QStyleOptionComplex.prototype = new Object();

      QStyleOptionComplex.prototype.toString = function() {
          //return "QStyleOptionComplex [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionComplex [JS]";
        };
      QStyleOptionComplex.getObjectType = function() {
        return RJSType_QStyleOptionComplex.getIdStatic();
      };

      QStyleOptionComplex.prototype.getObjectType = function() {
        return RJSType_QStyleOptionComplex.getIdStatic();
      };

      QStyleOptionComplex.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionComplex.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionComplex.SO_Default = QStyleOptionComplex_Wrapper.SO_Default;
QStyleOptionComplex.SO_FocusRect = QStyleOptionComplex_Wrapper.SO_FocusRect;
QStyleOptionComplex.SO_Button = QStyleOptionComplex_Wrapper.SO_Button;
QStyleOptionComplex.SO_Tab = QStyleOptionComplex_Wrapper.SO_Tab;
QStyleOptionComplex.SO_MenuItem = QStyleOptionComplex_Wrapper.SO_MenuItem;
QStyleOptionComplex.SO_Frame = QStyleOptionComplex_Wrapper.SO_Frame;
QStyleOptionComplex.SO_ProgressBar = QStyleOptionComplex_Wrapper.SO_ProgressBar;
QStyleOptionComplex.SO_ToolBox = QStyleOptionComplex_Wrapper.SO_ToolBox;
QStyleOptionComplex.SO_Header = QStyleOptionComplex_Wrapper.SO_Header;
QStyleOptionComplex.SO_DockWidget = QStyleOptionComplex_Wrapper.SO_DockWidget;
QStyleOptionComplex.SO_ViewItem = QStyleOptionComplex_Wrapper.SO_ViewItem;
QStyleOptionComplex.SO_TabWidgetFrame = QStyleOptionComplex_Wrapper.SO_TabWidgetFrame;
QStyleOptionComplex.SO_TabBarBase = QStyleOptionComplex_Wrapper.SO_TabBarBase;
QStyleOptionComplex.SO_RubberBand = QStyleOptionComplex_Wrapper.SO_RubberBand;
QStyleOptionComplex.SO_ToolBar = QStyleOptionComplex_Wrapper.SO_ToolBar;
QStyleOptionComplex.SO_GraphicsItem = QStyleOptionComplex_Wrapper.SO_GraphicsItem;
QStyleOptionComplex.SO_Complex = QStyleOptionComplex_Wrapper.SO_Complex;
QStyleOptionComplex.SO_Slider = QStyleOptionComplex_Wrapper.SO_Slider;
QStyleOptionComplex.SO_SpinBox = QStyleOptionComplex_Wrapper.SO_SpinBox;
QStyleOptionComplex.SO_ToolButton = QStyleOptionComplex_Wrapper.SO_ToolButton;
QStyleOptionComplex.SO_ComboBox = QStyleOptionComplex_Wrapper.SO_ComboBox;
QStyleOptionComplex.SO_TitleBar = QStyleOptionComplex_Wrapper.SO_TitleBar;
QStyleOptionComplex.SO_GroupBox = QStyleOptionComplex_Wrapper.SO_GroupBox;
QStyleOptionComplex.SO_SizeGrip = QStyleOptionComplex_Wrapper.SO_SizeGrip;
QStyleOptionComplex.SO_CustomBase = QStyleOptionComplex_Wrapper.SO_CustomBase;
QStyleOptionComplex.SO_ComplexCustomBase = QStyleOptionComplex_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionComplex.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionComplex.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      