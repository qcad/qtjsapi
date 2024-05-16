
      // auto generated
      //var self;

      // class constructor:
      function QAbstractScrollArea() {
        

        // should be QAbstractScrollArea_BaseJs.call(this, engine):
        //QAbstractScrollArea.prototype = new QAbstractScrollArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractScrollArea.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractScrollArea);
            //}
          }
          else {
            qWarning("QAbstractScrollArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QAbstractScrollArea_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QAbstractScrollArea);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea(): wrong number / type of arguments");
      
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

      //QAbstractScrollArea.prototype = new QAbstractScrollArea_BaseJs(engine);
      //QAbstractScrollArea.prototype = new QAbstractScrollArea_Wrapper(engine);
      QAbstractScrollArea.prototype = new Object();

      QAbstractScrollArea.prototype.toString = function() {
          //return "QAbstractScrollArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractScrollArea [JS]";
        };
      QAbstractScrollArea.getObjectType = function() {
        return RJSType_QAbstractScrollArea.getIdStatic();
      };

      QAbstractScrollArea.prototype.getObjectType = function() {
        return RJSType_QAbstractScrollArea.getIdStatic();
      };

      QAbstractScrollArea.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
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
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QAbstractScrollArea.NoFrame = QAbstractScrollArea_Wrapper.NoFrame;
QAbstractScrollArea.Box = QAbstractScrollArea_Wrapper.Box;
QAbstractScrollArea.Panel = QAbstractScrollArea_Wrapper.Panel;
QAbstractScrollArea.WinPanel = QAbstractScrollArea_Wrapper.WinPanel;
QAbstractScrollArea.HLine = QAbstractScrollArea_Wrapper.HLine;
QAbstractScrollArea.VLine = QAbstractScrollArea_Wrapper.VLine;
QAbstractScrollArea.StyledPanel = QAbstractScrollArea_Wrapper.StyledPanel;

  // enum: Shadow
QAbstractScrollArea.Plain = QAbstractScrollArea_Wrapper.Plain;
QAbstractScrollArea.Raised = QAbstractScrollArea_Wrapper.Raised;
QAbstractScrollArea.Sunken = QAbstractScrollArea_Wrapper.Sunken;

  // enum: StyleMask
QAbstractScrollArea.Shadow_Mask = QAbstractScrollArea_Wrapper.Shadow_Mask;
QAbstractScrollArea.Shape_Mask = QAbstractScrollArea_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QAbstractScrollArea.AdjustIgnored = QAbstractScrollArea_Wrapper.AdjustIgnored;
QAbstractScrollArea.AdjustToContentsOnFirstShow = QAbstractScrollArea_Wrapper.AdjustToContentsOnFirstShow;
QAbstractScrollArea.AdjustToContents = QAbstractScrollArea_Wrapper.AdjustToContents;


      // functions:
      
        // function 
        QAbstractScrollArea.prototype.actionEvent = function() 
          
        {
          //print("JS: QAbstractScrollArea.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QAbstractScrollArea.tr = function() 
          
        {
          //print("JS: QAbstractScrollArea.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractScrollArea_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractScrollArea.setTabOrder = function() 
          
        {
          //print("JS: QAbstractScrollArea.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QAbstractScrollArea_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractScrollArea.mouseGrabber = function() 
          
        {
          //print("JS: QAbstractScrollArea.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractScrollArea_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractScrollArea.keyboardGrabber = function() 
          
        {
          //print("JS: QAbstractScrollArea.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractScrollArea_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractScrollArea);
  }

  
  else {
    
        print("QAbstractScrollArea.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractScrollArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractScrollArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    