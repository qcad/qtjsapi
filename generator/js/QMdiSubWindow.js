
      // auto generated
      //var self;

      // class constructor:
      function QMdiSubWindow() {
        

        // should be QMdiSubWindow_BaseJs.call(this, engine):
        //QMdiSubWindow.prototype = new QMdiSubWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMdiSubWindow.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMdiSubWindow);
            //}
          }
          else {
            qWarning("QMdiSubWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QMdiSubWindow_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMdiSubWindow);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMdiSubWindow);
  }

  
  else {
    
        print("QMdiSubWindow(): wrong number / type of arguments");
      
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
  
    this["windowStateChanged(Qt::WindowStates,Qt::WindowStates)"] = Object.getPrototypeOf(this).windowStateChanged;
  
          }
        }
      }

      //QMdiSubWindow.prototype = new QMdiSubWindow_BaseJs(engine);
      //QMdiSubWindow.prototype = new QMdiSubWindow_Wrapper(engine);
      QMdiSubWindow.prototype = new Object();

      QMdiSubWindow.prototype.toString = function() {
          //return "QMdiSubWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMdiSubWindow [JS]";
        };
      QMdiSubWindow.getObjectType = function() {
        return RJSType_QMdiSubWindow.getIdStatic();
      };

      QMdiSubWindow.prototype.getObjectType = function() {
        return RJSType_QMdiSubWindow.getIdStatic();
      };

      QMdiSubWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMdiSubWindow.getIdStatic()) {
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
      

      // functions:
      
        // function 
        QMdiSubWindow.prototype.actionEvent = function() 
          
        {
          //print("JS: QMdiSubWindow.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QMdiSubWindow);
  }

  
  else {
    
        print("QMdiSubWindow.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QMdiSubWindow.tr = function() 
          
        {
          //print("JS: QMdiSubWindow.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QMdiSubWindow_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMdiSubWindow);
  }

  
  else {
    
        print("QMdiSubWindow.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMdiSubWindow.setTabOrder = function() 
          
        {
          //print("JS: QMdiSubWindow.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QMdiSubWindow_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMdiSubWindow);
  }

  
  else {
    
        print("QMdiSubWindow.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMdiSubWindow.mouseGrabber = function() 
          
        {
          //print("JS: QMdiSubWindow.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMdiSubWindow_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMdiSubWindow);
  }

  
  else {
    
        print("QMdiSubWindow.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMdiSubWindow.keyboardGrabber = function() 
          
        {
          //print("JS: QMdiSubWindow.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMdiSubWindow_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMdiSubWindow);
  }

  
  else {
    
        print("QMdiSubWindow.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMdiSubWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMdiSubWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    