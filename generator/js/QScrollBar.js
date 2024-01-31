
      // auto generated
      //var self;

      // class constructor:
      function QScrollBar() {
        

        // should be QScrollBar_BaseJs.call(this, engine):
        //QScrollBar.prototype = new QScrollBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QScrollBar.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QScrollBar);
            //}
          }
          else {
            qWarning("QScrollBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QScrollBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QScrollBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QScrollBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QScrollBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else {
    
        print("QScrollBar(): wrong number / type of arguments");
      
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
  
    this["valueChanged(int)"] = Object.getPrototypeOf(this).valueChanged;
  
    this["sliderMoved(int)"] = Object.getPrototypeOf(this).sliderMoved;
  
    this["rangeChanged(int,int)"] = Object.getPrototypeOf(this).rangeChanged;
  
    this["actionTriggered(int)"] = Object.getPrototypeOf(this).actionTriggered;
  
          }
        }
      }

      //QScrollBar.prototype = new QScrollBar_BaseJs(engine);
      //QScrollBar.prototype = new QScrollBar_Wrapper(engine);
      QScrollBar.prototype = new Object();

      QScrollBar.prototype.toString = function() {
          //return "QScrollBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QScrollBar [JS]";
        };
      QScrollBar.getObjectType = function() {
        return RJSType_QScrollBar.getIdStatic();
      };

      QScrollBar.prototype.getObjectType = function() {
        return RJSType_QScrollBar.getIdStatic();
      };

      QScrollBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QScrollBar.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractSlider.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: SliderAction
QScrollBar.SliderNoAction = QScrollBar_Wrapper.SliderNoAction;
QScrollBar.SliderSingleStepAdd = QScrollBar_Wrapper.SliderSingleStepAdd;
QScrollBar.SliderSingleStepSub = QScrollBar_Wrapper.SliderSingleStepSub;
QScrollBar.SliderPageStepAdd = QScrollBar_Wrapper.SliderPageStepAdd;
QScrollBar.SliderPageStepSub = QScrollBar_Wrapper.SliderPageStepSub;
QScrollBar.SliderToMinimum = QScrollBar_Wrapper.SliderToMinimum;
QScrollBar.SliderToMaximum = QScrollBar_Wrapper.SliderToMaximum;
QScrollBar.SliderMove = QScrollBar_Wrapper.SliderMove;


      // functions:
      

      // static functions:
      

        // static function 
        QScrollBar.tr = function() 
          
        {
          //print("JS: QScrollBar.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QScrollBar_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else {
    
        print("QScrollBar.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QScrollBar.setTabOrder = function() 
          
        {
          //print("JS: QScrollBar.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QScrollBar_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else {
    
        print("QScrollBar.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QScrollBar.mouseGrabber = function() 
          
        {
          //print("JS: QScrollBar.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QScrollBar_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else {
    
        print("QScrollBar.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QScrollBar.keyboardGrabber = function() 
          
        {
          //print("JS: QScrollBar.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QScrollBar_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QScrollBar);
  }

  
  else {
    
        print("QScrollBar.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QScrollBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QScrollBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    