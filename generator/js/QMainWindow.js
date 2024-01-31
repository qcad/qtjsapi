
      // auto generated
      //var self;

      // class constructor:
      function QMainWindow() {
        

        // should be QMainWindow_BaseJs.call(this, engine):
        //QMainWindow.prototype = new QMainWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMainWindow.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMainWindow);
            //}
          }
          else {
            qWarning("QMainWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QMainWindow_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMainWindow);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMainWindow);
  }

  
  else {
    
        print("QMainWindow(): wrong number / type of arguments");
      
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
  
    this["iconSizeChanged(QSize)"] = Object.getPrototypeOf(this).iconSizeChanged;
  
    this["toolButtonStyleChanged(Qt::ToolButtonStyle)"] = Object.getPrototypeOf(this).toolButtonStyleChanged;
  
    this["tabifiedDockWidgetActivated(QDockWidget*)"] = Object.getPrototypeOf(this).tabifiedDockWidgetActivated;
  
          }
        }
      }

      //QMainWindow.prototype = new QMainWindow_BaseJs(engine);
      //QMainWindow.prototype = new QMainWindow_Wrapper(engine);
      QMainWindow.prototype = new Object();

      QMainWindow.prototype.toString = function() {
          //return "QMainWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMainWindow [JS]";
        };
      QMainWindow.getObjectType = function() {
        return RJSType_QMainWindow.getIdStatic();
      };

      QMainWindow.prototype.getObjectType = function() {
        return RJSType_QMainWindow.getIdStatic();
      };

      QMainWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMainWindow.getIdStatic()) {
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
      
  // enum: DockOption
QMainWindow.AnimatedDocks = QMainWindow_Wrapper.AnimatedDocks;
QMainWindow.AllowNestedDocks = QMainWindow_Wrapper.AllowNestedDocks;
QMainWindow.AllowTabbedDocks = QMainWindow_Wrapper.AllowTabbedDocks;
QMainWindow.ForceTabbedDocks = QMainWindow_Wrapper.ForceTabbedDocks;
QMainWindow.VerticalTabs = QMainWindow_Wrapper.VerticalTabs;
QMainWindow.GroupedDragging = QMainWindow_Wrapper.GroupedDragging;


      // functions:
      

      // static functions:
      

        // static function 
        QMainWindow.tr = function() 
          
        {
          //print("JS: QMainWindow.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QMainWindow_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMainWindow);
  }

  
  else {
    
        print("QMainWindow.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMainWindow.setTabOrder = function() 
          
        {
          //print("JS: QMainWindow.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QMainWindow_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMainWindow);
  }

  
  else {
    
        print("QMainWindow.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMainWindow.mouseGrabber = function() 
          
        {
          //print("JS: QMainWindow.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMainWindow_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMainWindow);
  }

  
  else {
    
        print("QMainWindow.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMainWindow.keyboardGrabber = function() 
          
        {
          //print("JS: QMainWindow.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMainWindow_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMainWindow);
  }

  
  else {
    
        print("QMainWindow.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMainWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMainWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    