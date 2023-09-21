
      // auto generated
      //var self;

      // class constructor:
      function QMdiArea() {
        

        // should be QMdiArea_BaseJs.call(this, engine):
        //QMdiArea.prototype = new QMdiArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QMdiArea_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMdiArea);
            //}
          }
          else {
            qWarning("QMdiArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMdiArea_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMdiArea);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMdiArea);
  }

  
  else {
    
        print("QMdiArea(): wrong number / type of arguments");
      
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
  
    this["subWindowActivated(QMdiSubWindow*)"] = Object.getPrototypeOf(this).subWindowActivated;
  
          }
        }
      }

      //QMdiArea.prototype = new QMdiArea_BaseJs(engine);
      //QMdiArea.prototype = new QMdiArea_Wrapper(engine);
      QMdiArea.prototype = new Object();

      QMdiArea.prototype.toString = function() {
          //return "QMdiArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMdiArea [JS]";
        };
      QMdiArea.getObjectType = function() {
        
            return RJSType.QMdiArea_Type;
          
      };

      QMdiArea.prototype.getObjectType = function() {
        
            return RJSType.QMdiArea_Type;
          
      };

      QMdiArea.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QMdiArea_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        case RJSType.QFrame_Type:
          return true;
        
        case RJSType.QAbstractScrollArea_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QMdiArea_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            ,
            RJSType.QFrame_Type
            ,
            RJSType.QAbstractScrollArea_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: SizeAdjustPolicy
QMdiArea.AdjustIgnored = QMdiArea_Wrapper.AdjustIgnored;
QMdiArea.AdjustToContentsOnFirstShow = QMdiArea_Wrapper.AdjustToContentsOnFirstShow;
QMdiArea.AdjustToContents = QMdiArea_Wrapper.AdjustToContents;

  // enum: AreaOption
QMdiArea.DontMaximizeSubWindowOnActivation = QMdiArea_Wrapper.DontMaximizeSubWindowOnActivation;

  // enum: WindowOrder
QMdiArea.CreationOrder = QMdiArea_Wrapper.CreationOrder;
QMdiArea.StackingOrder = QMdiArea_Wrapper.StackingOrder;
QMdiArea.ActivationHistoryOrder = QMdiArea_Wrapper.ActivationHistoryOrder;

  // enum: ViewMode
QMdiArea.SubWindowView = QMdiArea_Wrapper.SubWindowView;
QMdiArea.TabbedView = QMdiArea_Wrapper.TabbedView;


      // functions:
      
        // function 
        QMdiArea.prototype.actionEvent = function() 
          
        {
          //print("JS: QMdiArea.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QMdiArea);
  }

  
  else {
    
        print("QMdiArea.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QMdiArea.tr = function() 
          
        {
          //print("JS: QMdiArea.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QMdiArea_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMdiArea);
  }

  
  else {
    
        print("QMdiArea.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMdiArea.setTabOrder = function() 
          
        {
          //print("JS: QMdiArea.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QMdiArea_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMdiArea);
  }

  
  else {
    
        print("QMdiArea.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMdiArea.mouseGrabber = function() 
          
        {
          //print("JS: QMdiArea.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMdiArea_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMdiArea);
  }

  
  else {
    
        print("QMdiArea.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMdiArea.keyboardGrabber = function() 
          
        {
          //print("JS: QMdiArea.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMdiArea_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMdiArea);
  }

  
  else {
    
        print("QMdiArea.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMdiArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMdiArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    