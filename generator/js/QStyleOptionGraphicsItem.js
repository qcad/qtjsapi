
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionGraphicsItem() {
        

        // should be QStyleOptionGraphicsItem_BaseJs.call(this, engine):
        //QStyleOptionGraphicsItem.prototype = new QStyleOptionGraphicsItem_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionGraphicsItem.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionGraphicsItem);
                
            //}
          }
          else {
            qWarning("QStyleOptionGraphicsItem.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionGraphicsItem_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionGraphicsItem);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionGraphicsItem);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionGraphicsItem_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionGraphicsItem);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionGraphicsItem);
  }

  
  else {
    
        print("QStyleOptionGraphicsItem(): wrong number / type of arguments");
      
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

      //QStyleOptionGraphicsItem.prototype = new QStyleOptionGraphicsItem_BaseJs(engine);
      //QStyleOptionGraphicsItem.prototype = new QStyleOptionGraphicsItem_Wrapper(engine);
      QStyleOptionGraphicsItem.prototype = new Object();

      QStyleOptionGraphicsItem.prototype.toString = function() {
          //return "QStyleOptionGraphicsItem [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionGraphicsItem [JS]";
        };
      QStyleOptionGraphicsItem.getObjectType = function() {
        return RJSType_QStyleOptionGraphicsItem.getIdStatic();
      };

      QStyleOptionGraphicsItem.prototype.getObjectType = function() {
        return RJSType_QStyleOptionGraphicsItem.getIdStatic();
      };

      QStyleOptionGraphicsItem.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionGraphicsItem.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOption.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: OptionType
QStyleOptionGraphicsItem.SO_Default = QStyleOptionGraphicsItem_Wrapper.SO_Default;
QStyleOptionGraphicsItem.SO_FocusRect = QStyleOptionGraphicsItem_Wrapper.SO_FocusRect;
QStyleOptionGraphicsItem.SO_Button = QStyleOptionGraphicsItem_Wrapper.SO_Button;
QStyleOptionGraphicsItem.SO_Tab = QStyleOptionGraphicsItem_Wrapper.SO_Tab;
QStyleOptionGraphicsItem.SO_MenuItem = QStyleOptionGraphicsItem_Wrapper.SO_MenuItem;
QStyleOptionGraphicsItem.SO_Frame = QStyleOptionGraphicsItem_Wrapper.SO_Frame;
QStyleOptionGraphicsItem.SO_ProgressBar = QStyleOptionGraphicsItem_Wrapper.SO_ProgressBar;
QStyleOptionGraphicsItem.SO_ToolBox = QStyleOptionGraphicsItem_Wrapper.SO_ToolBox;
QStyleOptionGraphicsItem.SO_Header = QStyleOptionGraphicsItem_Wrapper.SO_Header;
QStyleOptionGraphicsItem.SO_DockWidget = QStyleOptionGraphicsItem_Wrapper.SO_DockWidget;
QStyleOptionGraphicsItem.SO_ViewItem = QStyleOptionGraphicsItem_Wrapper.SO_ViewItem;
QStyleOptionGraphicsItem.SO_TabWidgetFrame = QStyleOptionGraphicsItem_Wrapper.SO_TabWidgetFrame;
QStyleOptionGraphicsItem.SO_TabBarBase = QStyleOptionGraphicsItem_Wrapper.SO_TabBarBase;
QStyleOptionGraphicsItem.SO_RubberBand = QStyleOptionGraphicsItem_Wrapper.SO_RubberBand;
QStyleOptionGraphicsItem.SO_ToolBar = QStyleOptionGraphicsItem_Wrapper.SO_ToolBar;
QStyleOptionGraphicsItem.SO_GraphicsItem = QStyleOptionGraphicsItem_Wrapper.SO_GraphicsItem;
QStyleOptionGraphicsItem.SO_Complex = QStyleOptionGraphicsItem_Wrapper.SO_Complex;
QStyleOptionGraphicsItem.SO_Slider = QStyleOptionGraphicsItem_Wrapper.SO_Slider;
QStyleOptionGraphicsItem.SO_SpinBox = QStyleOptionGraphicsItem_Wrapper.SO_SpinBox;
QStyleOptionGraphicsItem.SO_ToolButton = QStyleOptionGraphicsItem_Wrapper.SO_ToolButton;
QStyleOptionGraphicsItem.SO_ComboBox = QStyleOptionGraphicsItem_Wrapper.SO_ComboBox;
QStyleOptionGraphicsItem.SO_TitleBar = QStyleOptionGraphicsItem_Wrapper.SO_TitleBar;
QStyleOptionGraphicsItem.SO_GroupBox = QStyleOptionGraphicsItem_Wrapper.SO_GroupBox;
QStyleOptionGraphicsItem.SO_SizeGrip = QStyleOptionGraphicsItem_Wrapper.SO_SizeGrip;
QStyleOptionGraphicsItem.SO_CustomBase = QStyleOptionGraphicsItem_Wrapper.SO_CustomBase;
QStyleOptionGraphicsItem.SO_ComplexCustomBase = QStyleOptionGraphicsItem_Wrapper.SO_ComplexCustomBase;


      // functions:
      

      // static functions:
      

        // static function 
        QStyleOptionGraphicsItem.levelOfDetailFromTransform = function() 
          
        {
          //print("JS: QStyleOptionGraphicsItem.levelOfDetailFromTransform");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QStyleOptionGraphicsItem_WrapperSingletonInstance.levelOfDetailFromTransform(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QStyleOptionGraphicsItem);
  }

  
  else {
    
        print("QStyleOptionGraphicsItem.levelOfDetailFromTransform(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionGraphicsItem.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionGraphicsItem.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      