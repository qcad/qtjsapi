
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionRubberBand() {
        

        // should be QStyleOptionRubberBand_BaseJs.call(this, engine):
        //QStyleOptionRubberBand.prototype = new QStyleOptionRubberBand_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionRubberBand.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionRubberBand);
                
            //}
          }
          else {
            qWarning("QStyleOptionRubberBand.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionRubberBand_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionRubberBand);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionRubberBand);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionRubberBand_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionRubberBand);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionRubberBand);
  }

  
  else {
    
        print("QStyleOptionRubberBand(): wrong number / type of arguments");
      
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

      //QStyleOptionRubberBand.prototype = new QStyleOptionRubberBand_BaseJs(engine);
      //QStyleOptionRubberBand.prototype = new QStyleOptionRubberBand_Wrapper(engine);
      QStyleOptionRubberBand.prototype = new Object();

      QStyleOptionRubberBand.prototype.toString = function() {
          //return "QStyleOptionRubberBand [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionRubberBand [JS]";
        };
      QStyleOptionRubberBand.getObjectType = function() {
        return RJSType_QStyleOptionRubberBand.getIdStatic();
      };

      QStyleOptionRubberBand.prototype.getObjectType = function() {
        return RJSType_QStyleOptionRubberBand.getIdStatic();
      };

      QStyleOptionRubberBand.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionRubberBand.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionRubberBand.SO_Default = QStyleOptionRubberBand_Wrapper.SO_Default;
QStyleOptionRubberBand.SO_FocusRect = QStyleOptionRubberBand_Wrapper.SO_FocusRect;
QStyleOptionRubberBand.SO_Button = QStyleOptionRubberBand_Wrapper.SO_Button;
QStyleOptionRubberBand.SO_Tab = QStyleOptionRubberBand_Wrapper.SO_Tab;
QStyleOptionRubberBand.SO_MenuItem = QStyleOptionRubberBand_Wrapper.SO_MenuItem;
QStyleOptionRubberBand.SO_Frame = QStyleOptionRubberBand_Wrapper.SO_Frame;
QStyleOptionRubberBand.SO_ProgressBar = QStyleOptionRubberBand_Wrapper.SO_ProgressBar;
QStyleOptionRubberBand.SO_ToolBox = QStyleOptionRubberBand_Wrapper.SO_ToolBox;
QStyleOptionRubberBand.SO_Header = QStyleOptionRubberBand_Wrapper.SO_Header;
QStyleOptionRubberBand.SO_DockWidget = QStyleOptionRubberBand_Wrapper.SO_DockWidget;
QStyleOptionRubberBand.SO_ViewItem = QStyleOptionRubberBand_Wrapper.SO_ViewItem;
QStyleOptionRubberBand.SO_TabWidgetFrame = QStyleOptionRubberBand_Wrapper.SO_TabWidgetFrame;
QStyleOptionRubberBand.SO_TabBarBase = QStyleOptionRubberBand_Wrapper.SO_TabBarBase;
QStyleOptionRubberBand.SO_RubberBand = QStyleOptionRubberBand_Wrapper.SO_RubberBand;
QStyleOptionRubberBand.SO_ToolBar = QStyleOptionRubberBand_Wrapper.SO_ToolBar;
QStyleOptionRubberBand.SO_GraphicsItem = QStyleOptionRubberBand_Wrapper.SO_GraphicsItem;
QStyleOptionRubberBand.SO_Complex = QStyleOptionRubberBand_Wrapper.SO_Complex;
QStyleOptionRubberBand.SO_Slider = QStyleOptionRubberBand_Wrapper.SO_Slider;
QStyleOptionRubberBand.SO_SpinBox = QStyleOptionRubberBand_Wrapper.SO_SpinBox;
QStyleOptionRubberBand.SO_ToolButton = QStyleOptionRubberBand_Wrapper.SO_ToolButton;
QStyleOptionRubberBand.SO_ComboBox = QStyleOptionRubberBand_Wrapper.SO_ComboBox;
QStyleOptionRubberBand.SO_TitleBar = QStyleOptionRubberBand_Wrapper.SO_TitleBar;
QStyleOptionRubberBand.SO_GroupBox = QStyleOptionRubberBand_Wrapper.SO_GroupBox;
QStyleOptionRubberBand.SO_SizeGrip = QStyleOptionRubberBand_Wrapper.SO_SizeGrip;
QStyleOptionRubberBand.SO_CustomBase = QStyleOptionRubberBand_Wrapper.SO_CustomBase;
QStyleOptionRubberBand.SO_ComplexCustomBase = QStyleOptionRubberBand_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionRubberBand.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionRubberBand.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      