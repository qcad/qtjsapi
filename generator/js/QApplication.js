
      // auto generated
      //var self;

      // class constructor:
      function QApplication() {
        

        // should be QApplication_BaseJs.call(this, engine):
        //QApplication.prototype = new QApplication_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QApplication.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QApplication);
                
            //}
          }
          else {
            qWarning("QApplication.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QApplication_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QApplication);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QApplication);
  }

  
  else 
  
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QApplication_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QApplication);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication(): wrong number / type of arguments");
      
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
              
    this["screenAdded(QScreen*)"] = Object.getPrototypeOf(this).screenAdded;
  
    this["screenRemoved(QScreen*)"] = Object.getPrototypeOf(this).screenRemoved;
  
    this["primaryScreenChanged(QScreen*)"] = Object.getPrototypeOf(this).primaryScreenChanged;
  
    this["focusObjectChanged(QObject*)"] = Object.getPrototypeOf(this).focusObjectChanged;
  
    this["applicationStateChanged(Qt::ApplicationState)"] = Object.getPrototypeOf(this).applicationStateChanged;
  
    this["layoutDirectionChanged(Qt::LayoutDirection)"] = Object.getPrototypeOf(this).layoutDirectionChanged;
  
    this["paletteChanged(QPalette)"] = Object.getPrototypeOf(this).paletteChanged;
  
    this["fontChanged(QFont)"] = Object.getPrototypeOf(this).fontChanged;
  
    this["focusChanged(QWidget*,QWidget*)"] = Object.getPrototypeOf(this).focusChanged;
  
            }
          
        }

        

      }

      //QApplication.prototype = new QApplication_BaseJs(engine);
      //QApplication.prototype = new QApplication_Wrapper(engine);
      QApplication.prototype = new Object();

      QApplication.prototype.toString = function() {
          //return "QApplication [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QApplication [JS]";
        };
      QApplication.getObjectType = function() {
        return RJSType_QApplication.getIdStatic();
      };

      QApplication.prototype.getObjectType = function() {
        return RJSType_QApplication.getIdStatic();
      };

      QApplication.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QApplication.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QCoreApplication.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QGuiApplication.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QApplication.palette = function() 
          
        {
          //print("JS: QApplication.palette");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.palette(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.palette(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.palette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setPalette = function() 
          
        {
          //print("JS: QApplication.setPalette");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setPalette(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setPalette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.font = function() 
          
        {
          //print("JS: QApplication.font");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.font(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.font(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else 
  
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.font(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.font(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setFont = function() 
          
        {
          //print("JS: QApplication.setFont");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setFont(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.topLevelWidgets = function() 
          
        {
          //print("JS: QApplication.topLevelWidgets");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.topLevelWidgets(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.topLevelWidgets(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.activePopupWidget = function() 
          
        {
          //print("JS: QApplication.activePopupWidget");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.activePopupWidget(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.activePopupWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.activeModalWidget = function() 
          
        {
          //print("JS: QApplication.activeModalWidget");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.activeModalWidget(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.activeModalWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.focusWidget = function() 
          
        {
          //print("JS: QApplication.focusWidget");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.focusWidget(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.focusWidget(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.activeWindow = function() 
          
        {
          //print("JS: QApplication.activeWindow");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.activeWindow(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.activeWindow(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.widgetAt = function() 
          
        {
          //print("JS: QApplication.widgetAt");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.widgetAt(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.widgetAt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.widgetAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.topLevelAt = function() 
          
        {
          //print("JS: QApplication.topLevelAt");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.topLevelAt(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.topLevelAt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.topLevelAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.beep = function() 
          
        {
          //print("JS: QApplication.beep");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.beep(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.beep(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.alert = function() 
          
        {
          //print("JS: QApplication.alert");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.alert(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.alert(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setCursorFlashTime = function() 
          
        {
          //print("JS: QApplication.setCursorFlashTime");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setCursorFlashTime(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setCursorFlashTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.cursorFlashTime = function() 
          
        {
          //print("JS: QApplication.cursorFlashTime");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.cursorFlashTime(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.cursorFlashTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setDoubleClickInterval = function() 
          
        {
          //print("JS: QApplication.setDoubleClickInterval");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setDoubleClickInterval(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setDoubleClickInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.doubleClickInterval = function() 
          
        {
          //print("JS: QApplication.doubleClickInterval");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.doubleClickInterval(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.doubleClickInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setKeyboardInputInterval = function() 
          
        {
          //print("JS: QApplication.setKeyboardInputInterval");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setKeyboardInputInterval(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setKeyboardInputInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.keyboardInputInterval = function() 
          
        {
          //print("JS: QApplication.keyboardInputInterval");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.keyboardInputInterval(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.keyboardInputInterval(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setWheelScrollLines = function() 
          
        {
          //print("JS: QApplication.setWheelScrollLines");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setWheelScrollLines(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setWheelScrollLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.wheelScrollLines = function() 
          
        {
          //print("JS: QApplication.wheelScrollLines");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.wheelScrollLines(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.wheelScrollLines(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setStartDragTime = function() 
          
        {
          //print("JS: QApplication.setStartDragTime");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setStartDragTime(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setStartDragTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.startDragTime = function() 
          
        {
          //print("JS: QApplication.startDragTime");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.startDragTime(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.startDragTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setStartDragDistance = function() 
          
        {
          //print("JS: QApplication.setStartDragDistance");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setStartDragDistance(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setStartDragDistance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.startDragDistance = function() 
          
        {
          //print("JS: QApplication.startDragDistance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.startDragDistance(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.startDragDistance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.exec = function() 
          
        {
          //print("JS: QApplication.exec");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.exec(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.exec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.closeAllWindows = function() 
          
        {
          //print("JS: QApplication.closeAllWindows");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.closeAllWindows(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.closeAllWindows(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.aboutQt = function() 
          
        {
          //print("JS: QApplication.aboutQt");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.aboutQt(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.aboutQt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QApplication.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QApplication.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      