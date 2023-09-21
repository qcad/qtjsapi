
      // auto generated
      //var self;

      // class constructor:
      function QAbstractSlider() {
        

        // should be QAbstractSlider_BaseJs.call(this, engine):
        //QAbstractSlider.prototype = new QAbstractSlider_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QAbstractSlider_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractSlider);
            //}
          }
          else {
            qWarning("QAbstractSlider.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QAbstractSlider_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QAbstractSlider);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider(): wrong number / type of arguments");
      
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

      //QAbstractSlider.prototype = new QAbstractSlider_BaseJs(engine);
      //QAbstractSlider.prototype = new QAbstractSlider_Wrapper(engine);
      QAbstractSlider.prototype = new Object();

      QAbstractSlider.prototype.toString = function() {
          //return "QAbstractSlider [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractSlider [JS]";
        };
      QAbstractSlider.getObjectType = function() {
        
            return RJSType.QAbstractSlider_Type;
          
      };

      QAbstractSlider.prototype.getObjectType = function() {
        
            return RJSType.QAbstractSlider_Type;
          
      };

      QAbstractSlider.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QAbstractSlider_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QAbstractSlider_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: SliderAction
QAbstractSlider.SliderNoAction = QAbstractSlider_Wrapper.SliderNoAction;
QAbstractSlider.SliderSingleStepAdd = QAbstractSlider_Wrapper.SliderSingleStepAdd;
QAbstractSlider.SliderSingleStepSub = QAbstractSlider_Wrapper.SliderSingleStepSub;
QAbstractSlider.SliderPageStepAdd = QAbstractSlider_Wrapper.SliderPageStepAdd;
QAbstractSlider.SliderPageStepSub = QAbstractSlider_Wrapper.SliderPageStepSub;
QAbstractSlider.SliderToMinimum = QAbstractSlider_Wrapper.SliderToMinimum;
QAbstractSlider.SliderToMaximum = QAbstractSlider_Wrapper.SliderToMaximum;
QAbstractSlider.SliderMove = QAbstractSlider_Wrapper.SliderMove;


      // functions:
      
        // function 
        QAbstractSlider.prototype.actionEvent = function() 
          
        {
          //print("JS: QAbstractSlider.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QAbstractSlider.tr = function() 
          
        {
          //print("JS: QAbstractSlider.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractSlider_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractSlider.setTabOrder = function() 
          
        {
          //print("JS: QAbstractSlider.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QAbstractSlider_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractSlider.mouseGrabber = function() 
          
        {
          //print("JS: QAbstractSlider.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractSlider_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractSlider.keyboardGrabber = function() 
          
        {
          //print("JS: QAbstractSlider.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractSlider_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractSlider);
  }

  
  else {
    
        print("QAbstractSlider.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractSlider.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractSlider.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    