
      // auto generated
      //var self;

      // class constructor:
      function QSizePolicy() {
        

        // should be QSizePolicy_BaseJs.call(this, engine):
        //QSizePolicy.prototype = new QSizePolicy_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSizePolicy.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSizePolicy);
                
            //}
          }
          else {
            qWarning("QSizePolicy.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSizePolicy_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSizePolicy);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSizePolicy);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSizePolicy_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSizePolicy);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSizePolicy);
  }

  
  else {
    
        print("QSizePolicy(): wrong number / type of arguments");
      
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

      //QSizePolicy.prototype = new QSizePolicy_BaseJs(engine);
      //QSizePolicy.prototype = new QSizePolicy_Wrapper(engine);
      QSizePolicy.prototype = new Object();

      QSizePolicy.prototype.toString = function() {
          //return "QSizePolicy [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSizePolicy [JS]";
        };
      QSizePolicy.getObjectType = function() {
        return RJSType_QSizePolicy.getIdStatic();
      };

      QSizePolicy.prototype.getObjectType = function() {
        return RJSType_QSizePolicy.getIdStatic();
      };

      QSizePolicy.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSizePolicy.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: PolicyFlag
QSizePolicy.GrowFlag = QSizePolicy_Wrapper.GrowFlag;
QSizePolicy.ExpandFlag = QSizePolicy_Wrapper.ExpandFlag;
QSizePolicy.ShrinkFlag = QSizePolicy_Wrapper.ShrinkFlag;
QSizePolicy.IgnoreFlag = QSizePolicy_Wrapper.IgnoreFlag;

  // enum: Policy
QSizePolicy.Fixed = QSizePolicy_Wrapper.Fixed;
QSizePolicy.Minimum = QSizePolicy_Wrapper.Minimum;
QSizePolicy.Maximum = QSizePolicy_Wrapper.Maximum;
QSizePolicy.Preferred = QSizePolicy_Wrapper.Preferred;
QSizePolicy.MinimumExpanding = QSizePolicy_Wrapper.MinimumExpanding;
QSizePolicy.Expanding = QSizePolicy_Wrapper.Expanding;
QSizePolicy.Ignored = QSizePolicy_Wrapper.Ignored;

  // enum: ControlType
QSizePolicy.DefaultType = QSizePolicy_Wrapper.DefaultType;
QSizePolicy.ButtonBox = QSizePolicy_Wrapper.ButtonBox;
QSizePolicy.CheckBox = QSizePolicy_Wrapper.CheckBox;
QSizePolicy.ComboBox = QSizePolicy_Wrapper.ComboBox;
QSizePolicy.Frame = QSizePolicy_Wrapper.Frame;
QSizePolicy.GroupBox = QSizePolicy_Wrapper.GroupBox;
QSizePolicy.Label = QSizePolicy_Wrapper.Label;
QSizePolicy.Line = QSizePolicy_Wrapper.Line;
QSizePolicy.LineEdit = QSizePolicy_Wrapper.LineEdit;
QSizePolicy.PushButton = QSizePolicy_Wrapper.PushButton;
QSizePolicy.RadioButton = QSizePolicy_Wrapper.RadioButton;
QSizePolicy.Slider = QSizePolicy_Wrapper.Slider;
QSizePolicy.SpinBox = QSizePolicy_Wrapper.SpinBox;
QSizePolicy.TabWidget = QSizePolicy_Wrapper.TabWidget;
QSizePolicy.ToolButton = QSizePolicy_Wrapper.ToolButton;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSizePolicy.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSizePolicy.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      