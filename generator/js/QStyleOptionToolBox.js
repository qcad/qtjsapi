
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionToolBox() {
        

        // should be QStyleOptionToolBox_BaseJs.call(this, engine):
        //QStyleOptionToolBox.prototype = new QStyleOptionToolBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionToolBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionToolBox);
                
            //}
          }
          else {
            qWarning("QStyleOptionToolBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionToolBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionToolBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionToolBox);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionToolBox_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionToolBox);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionToolBox);
  }

  
  else {
    
        print("QStyleOptionToolBox(): wrong number / type of arguments");
      
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

      //QStyleOptionToolBox.prototype = new QStyleOptionToolBox_BaseJs(engine);
      //QStyleOptionToolBox.prototype = new QStyleOptionToolBox_Wrapper(engine);
      QStyleOptionToolBox.prototype = new Object();

      QStyleOptionToolBox.prototype.toString = function() {
          //return "QStyleOptionToolBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionToolBox [JS]";
        };
      QStyleOptionToolBox.getObjectType = function() {
        return RJSType_QStyleOptionToolBox.getIdStatic();
      };

      QStyleOptionToolBox.prototype.getObjectType = function() {
        return RJSType_QStyleOptionToolBox.getIdStatic();
      };

      QStyleOptionToolBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionToolBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionToolBox.SO_Default = QStyleOptionToolBox_Wrapper.SO_Default;
QStyleOptionToolBox.SO_FocusRect = QStyleOptionToolBox_Wrapper.SO_FocusRect;
QStyleOptionToolBox.SO_Button = QStyleOptionToolBox_Wrapper.SO_Button;
QStyleOptionToolBox.SO_Tab = QStyleOptionToolBox_Wrapper.SO_Tab;
QStyleOptionToolBox.SO_MenuItem = QStyleOptionToolBox_Wrapper.SO_MenuItem;
QStyleOptionToolBox.SO_Frame = QStyleOptionToolBox_Wrapper.SO_Frame;
QStyleOptionToolBox.SO_ProgressBar = QStyleOptionToolBox_Wrapper.SO_ProgressBar;
QStyleOptionToolBox.SO_ToolBox = QStyleOptionToolBox_Wrapper.SO_ToolBox;
QStyleOptionToolBox.SO_Header = QStyleOptionToolBox_Wrapper.SO_Header;
QStyleOptionToolBox.SO_DockWidget = QStyleOptionToolBox_Wrapper.SO_DockWidget;
QStyleOptionToolBox.SO_ViewItem = QStyleOptionToolBox_Wrapper.SO_ViewItem;
QStyleOptionToolBox.SO_TabWidgetFrame = QStyleOptionToolBox_Wrapper.SO_TabWidgetFrame;
QStyleOptionToolBox.SO_TabBarBase = QStyleOptionToolBox_Wrapper.SO_TabBarBase;
QStyleOptionToolBox.SO_RubberBand = QStyleOptionToolBox_Wrapper.SO_RubberBand;
QStyleOptionToolBox.SO_ToolBar = QStyleOptionToolBox_Wrapper.SO_ToolBar;
QStyleOptionToolBox.SO_GraphicsItem = QStyleOptionToolBox_Wrapper.SO_GraphicsItem;
QStyleOptionToolBox.SO_Complex = QStyleOptionToolBox_Wrapper.SO_Complex;
QStyleOptionToolBox.SO_Slider = QStyleOptionToolBox_Wrapper.SO_Slider;
QStyleOptionToolBox.SO_SpinBox = QStyleOptionToolBox_Wrapper.SO_SpinBox;
QStyleOptionToolBox.SO_ToolButton = QStyleOptionToolBox_Wrapper.SO_ToolButton;
QStyleOptionToolBox.SO_ComboBox = QStyleOptionToolBox_Wrapper.SO_ComboBox;
QStyleOptionToolBox.SO_TitleBar = QStyleOptionToolBox_Wrapper.SO_TitleBar;
QStyleOptionToolBox.SO_GroupBox = QStyleOptionToolBox_Wrapper.SO_GroupBox;
QStyleOptionToolBox.SO_SizeGrip = QStyleOptionToolBox_Wrapper.SO_SizeGrip;
QStyleOptionToolBox.SO_CustomBase = QStyleOptionToolBox_Wrapper.SO_CustomBase;
QStyleOptionToolBox.SO_ComplexCustomBase = QStyleOptionToolBox_Wrapper.SO_ComplexCustomBase;

  // enum: TabPosition
QStyleOptionToolBox.Beginning = QStyleOptionToolBox_Wrapper.Beginning;
QStyleOptionToolBox.Middle = QStyleOptionToolBox_Wrapper.Middle;
QStyleOptionToolBox.End = QStyleOptionToolBox_Wrapper.End;
QStyleOptionToolBox.OnlyOneTab = QStyleOptionToolBox_Wrapper.OnlyOneTab;

  // enum: SelectedPosition
QStyleOptionToolBox.NotAdjacent = QStyleOptionToolBox_Wrapper.NotAdjacent;
QStyleOptionToolBox.NextIsSelected = QStyleOptionToolBox_Wrapper.NextIsSelected;
QStyleOptionToolBox.PreviousIsSelected = QStyleOptionToolBox_Wrapper.PreviousIsSelected;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionToolBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionToolBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      