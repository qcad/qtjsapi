
      // auto generated
      //var self;

      // class constructor:
      function QScrollArea() {
        

        // should be QScrollArea_BaseJs.call(this, engine):
        //QScrollArea.prototype = new QScrollArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QScrollArea.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QScrollArea);
                
            //}
          }
          else {
            qWarning("QScrollArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QScrollArea_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QScrollArea);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QScrollArea);
  }

  
  else {
    
        print("QScrollArea(): wrong number / type of arguments");
      
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

      //QScrollArea.prototype = new QScrollArea_BaseJs(engine);
      //QScrollArea.prototype = new QScrollArea_Wrapper(engine);
      QScrollArea.prototype = new Object();

      QScrollArea.prototype.toString = function() {
          //return "QScrollArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QScrollArea [JS]";
        };
      QScrollArea.getObjectType = function() {
        return RJSType_QScrollArea.getIdStatic();
      };

      QScrollArea.prototype.getObjectType = function() {
        return RJSType_QScrollArea.getIdStatic();
      };

      QScrollArea.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QScrollArea.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QScrollArea.NoFrame = QScrollArea_Wrapper.NoFrame;
QScrollArea.Box = QScrollArea_Wrapper.Box;
QScrollArea.Panel = QScrollArea_Wrapper.Panel;
QScrollArea.WinPanel = QScrollArea_Wrapper.WinPanel;
QScrollArea.HLine = QScrollArea_Wrapper.HLine;
QScrollArea.VLine = QScrollArea_Wrapper.VLine;
QScrollArea.StyledPanel = QScrollArea_Wrapper.StyledPanel;

  // enum: Shadow
QScrollArea.Plain = QScrollArea_Wrapper.Plain;
QScrollArea.Raised = QScrollArea_Wrapper.Raised;
QScrollArea.Sunken = QScrollArea_Wrapper.Sunken;

  // enum: StyleMask
QScrollArea.Shadow_Mask = QScrollArea_Wrapper.Shadow_Mask;
QScrollArea.Shape_Mask = QScrollArea_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QScrollArea.AdjustIgnored = QScrollArea_Wrapper.AdjustIgnored;
QScrollArea.AdjustToContentsOnFirstShow = QScrollArea_Wrapper.AdjustToContentsOnFirstShow;
QScrollArea.AdjustToContents = QScrollArea_Wrapper.AdjustToContents;


      // functions:
      
      // function 
      QScrollArea.prototype.actionEvent = function() 
        
      {
        //print("JS: QScrollArea.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QScrollArea);
  }

  
  else {
    
        print("QScrollArea.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QScrollArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QScrollArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      