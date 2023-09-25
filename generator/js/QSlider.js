
      // auto generated
      //var self;

      // class constructor:
      function QSlider() {
        

        // should be QSlider_BaseJs.call(this, engine):
        //QSlider.prototype = new QSlider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSlider.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSlider);
            //}
          }
          else {
            qWarning("QSlider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSlider_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSlider);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSlider);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSlider_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSlider);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider(): wrong number / type of arguments");
      
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

      //QSlider.prototype = new QSlider_BaseJs(engine);
      //QSlider.prototype = new QSlider_Wrapper(engine);
      QSlider.prototype = new Object();

      QSlider.prototype.toString = function() {
          //return "QSlider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSlider [JS]";
        };
      QSlider.getObjectType = function() {
        return RJSType_QSlider.getIdStatic();
      };

      QSlider.prototype.getObjectType = function() {
        return RJSType_QSlider.getIdStatic();
      };

      QSlider.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSlider.getIdStatic()) {
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
QSlider.SliderNoAction = QSlider_Wrapper.SliderNoAction;
QSlider.SliderSingleStepAdd = QSlider_Wrapper.SliderSingleStepAdd;
QSlider.SliderSingleStepSub = QSlider_Wrapper.SliderSingleStepSub;
QSlider.SliderPageStepAdd = QSlider_Wrapper.SliderPageStepAdd;
QSlider.SliderPageStepSub = QSlider_Wrapper.SliderPageStepSub;
QSlider.SliderToMinimum = QSlider_Wrapper.SliderToMinimum;
QSlider.SliderToMaximum = QSlider_Wrapper.SliderToMaximum;
QSlider.SliderMove = QSlider_Wrapper.SliderMove;

  // enum: TickPosition
QSlider.NoTicks = QSlider_Wrapper.NoTicks;
QSlider.TicksAbove = QSlider_Wrapper.TicksAbove;
QSlider.TicksLeft = QSlider_Wrapper.TicksLeft;
QSlider.TicksBelow = QSlider_Wrapper.TicksBelow;
QSlider.TicksRight = QSlider_Wrapper.TicksRight;
QSlider.TicksBothSides = QSlider_Wrapper.TicksBothSides;


      // functions:
      
        // function 
        QSlider.prototype.actionEvent = function() 
          
        {
          //print("JS: QSlider.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QSlider.tr = function() 
          
        {
          //print("JS: QSlider.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QSlider_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSlider.setTabOrder = function() 
          
        {
          //print("JS: QSlider.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSlider_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSlider.mouseGrabber = function() 
          
        {
          //print("JS: QSlider.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSlider_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSlider.keyboardGrabber = function() 
          
        {
          //print("JS: QSlider.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSlider_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSlider);
  }

  
  else {
    
        print("QSlider.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSlider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSlider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    