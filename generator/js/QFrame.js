
      // auto generated
      //var self;

      // class constructor:
      function QFrame() {
        

        // should be QFrame_BaseJs.call(this, engine):
        //QFrame.prototype = new QFrame_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFrame.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QFrame);
                
            //}
          }
          else {
            qWarning("QFrame.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QFrame_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QFrame);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame(): wrong number / type of arguments");
      
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
          
            // signal aliases:
            if (Object.getPrototypeOf(this)!=null) {
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
            }
          
        }

        

      }

      //QFrame.prototype = new QFrame_BaseJs(engine);
      //QFrame.prototype = new QFrame_Wrapper(engine);
      QFrame.prototype = new Object();

      QFrame.prototype.toString = function() {
          //return "QFrame [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFrame [JS]";
        };
      QFrame.getObjectType = function() {
        return RJSType_QFrame.getIdStatic();
      };

      QFrame.prototype.getObjectType = function() {
        return RJSType_QFrame.getIdStatic();
      };

      QFrame.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFrame.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QFrame.NoFrame = QFrame_Wrapper.NoFrame;
QFrame.Box = QFrame_Wrapper.Box;
QFrame.Panel = QFrame_Wrapper.Panel;
QFrame.WinPanel = QFrame_Wrapper.WinPanel;
QFrame.HLine = QFrame_Wrapper.HLine;
QFrame.VLine = QFrame_Wrapper.VLine;
QFrame.StyledPanel = QFrame_Wrapper.StyledPanel;

  // enum: Shadow
QFrame.Plain = QFrame_Wrapper.Plain;
QFrame.Raised = QFrame_Wrapper.Raised;
QFrame.Sunken = QFrame_Wrapper.Sunken;

  // enum: StyleMask
QFrame.Shadow_Mask = QFrame_Wrapper.Shadow_Mask;
QFrame.Shape_Mask = QFrame_Wrapper.Shape_Mask;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFrame.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFrame.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      