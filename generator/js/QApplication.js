
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QApplication.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QApplication.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QApplication.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QApplication.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QApplication.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QApplication.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QApplication.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QApplication.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QApplication.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QApplication.prototype.findChild = function(...args) 
          
        {
          //print("JS: QApplication.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QApplication.prototype.children = function(...args) 
          
        {
          //print("JS: QApplication.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QApplication.prototype.setParent = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QApplication.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QApplication.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QApplication.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QApplication.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QApplication.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QApplication.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QApplication.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QApplication.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QApplication.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QApplication.prototype.property = function(...args) 
          
        {
          //print("JS: QApplication.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QApplication.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QApplication.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QApplication.prototype.parent = function(...args) 
          
        {
          //print("JS: QApplication.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QApplication.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QApplication.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QApplication.prototype.setOrganizationDomain = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setOrganizationDomain");
          
              return this.__PROXY__.setOrganizationDomain(...args);
            
        };
    
        // function 
        QApplication.prototype.setOrganizationName = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setOrganizationName");
          
              return this.__PROXY__.setOrganizationName(...args);
            
        };
    
        // function 
        QApplication.prototype.setApplicationName = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setApplicationName");
          
              return this.__PROXY__.setApplicationName(...args);
            
        };
    
        // function 
        QApplication.prototype.setApplicationVersion = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setApplicationVersion");
          
              return this.__PROXY__.setApplicationVersion(...args);
            
        };
    
        // function 
        QApplication.prototype.isQuitLockEnabled = function(...args) 
          
        {
          //print("JS: QApplication.prototype.isQuitLockEnabled");
          
              return this.__PROXY__.isQuitLockEnabled(...args);
            
        };
    
        // function 
        QApplication.prototype.setQuitLockEnabled = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setQuitLockEnabled");
          
              return this.__PROXY__.setQuitLockEnabled(...args);
            
        };
    
        // function 
        QApplication.prototype.qt_sendSpontaneousEvent = function(...args) 
          
        {
          //print("JS: QApplication.prototype.qt_sendSpontaneousEvent");
          
              return this.__PROXY__.qt_sendSpontaneousEvent(...args);
            
        };
    
        // function 
        QApplication.prototype.qAppName = function(...args) 
          
        {
          //print("JS: QApplication.prototype.qAppName");
          
              return this.__PROXY__.qAppName(...args);
            
        };
    
        // function 
        QApplication.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QApplication.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        QApplication.prototype.isSessionRestored = function(...args) 
          
        {
          //print("JS: QApplication.prototype.isSessionRestored");
          
              return this.__PROXY__.isSessionRestored(...args);
            
        };
    
        // function 
        QApplication.prototype.sessionId = function(...args) 
          
        {
          //print("JS: QApplication.prototype.sessionId");
          
              return this.__PROXY__.sessionId(...args);
            
        };
    
        // function 
        QApplication.prototype.sessionKey = function(...args) 
          
        {
          //print("JS: QApplication.prototype.sessionKey");
          
              return this.__PROXY__.sessionKey(...args);
            
        };
    
        // function 
        QApplication.prototype.isSavingSession = function(...args) 
          
        {
          //print("JS: QApplication.prototype.isSavingSession");
          
              return this.__PROXY__.isSavingSession(...args);
            
        };
    
        // function 
        QApplication.prototype.event = function(...args) 
          
        {
          //print("JS: QApplication.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QApplication.prototype.compressEvent = function(...args) 
          
        {
          //print("JS: QApplication.prototype.compressEvent");
          
              return this.__PROXY__.compressEvent(...args);
            
        };
    
        // function 
        QApplication.prototype.palette = function(...args) 
          
        {
          //print("JS: QApplication.prototype.palette");
          
              return this.__PROXY__.palette(...args);
            
        };
    
        // function 
        QApplication.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QApplication.prototype.font = function(...args) 
          
        {
          //print("JS: QApplication.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
    
        // function 
        QApplication.prototype.setFont = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QApplication.prototype.topLevelWidgets = function(...args) 
          
        {
          //print("JS: QApplication.prototype.topLevelWidgets");
          
              return this.__PROXY__.topLevelWidgets(...args);
            
        };
    
        // function 
        QApplication.prototype.activePopupWidget = function(...args) 
          
        {
          //print("JS: QApplication.prototype.activePopupWidget");
          
              return this.__PROXY__.activePopupWidget(...args);
            
        };
    
        // function 
        QApplication.prototype.activeModalWidget = function(...args) 
          
        {
          //print("JS: QApplication.prototype.activeModalWidget");
          
              return this.__PROXY__.activeModalWidget(...args);
            
        };
    
        // function 
        QApplication.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QApplication.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QApplication.prototype.activeWindow = function(...args) 
          
        {
          //print("JS: QApplication.prototype.activeWindow");
          
              return this.__PROXY__.activeWindow(...args);
            
        };
    
        // function 
        QApplication.prototype.widgetAt = function(...args) 
          
        {
          //print("JS: QApplication.prototype.widgetAt");
          
              return this.__PROXY__.widgetAt(...args);
            
        };
    
        // function 
        QApplication.prototype.topLevelAt = function(...args) 
          
        {
          //print("JS: QApplication.prototype.topLevelAt");
          
              return this.__PROXY__.topLevelAt(...args);
            
        };
    
        // function 
        QApplication.prototype.beep = function(...args) 
          
        {
          //print("JS: QApplication.prototype.beep");
          
              return this.__PROXY__.beep(...args);
            
        };
    
        // function 
        QApplication.prototype.alert = function(...args) 
          
        {
          //print("JS: QApplication.prototype.alert");
          
              return this.__PROXY__.alert(...args);
            
        };
    
        // function 
        QApplication.prototype.setCursorFlashTime = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setCursorFlashTime");
          
              return this.__PROXY__.setCursorFlashTime(...args);
            
        };
    
        // function 
        QApplication.prototype.cursorFlashTime = function(...args) 
          
        {
          //print("JS: QApplication.prototype.cursorFlashTime");
          
              return this.__PROXY__.cursorFlashTime(...args);
            
        };
    
        // function 
        QApplication.prototype.setDoubleClickInterval = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setDoubleClickInterval");
          
              return this.__PROXY__.setDoubleClickInterval(...args);
            
        };
    
        // function 
        QApplication.prototype.setKeyboardInputInterval = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setKeyboardInputInterval");
          
              return this.__PROXY__.setKeyboardInputInterval(...args);
            
        };
    
        // function 
        QApplication.prototype.setWheelScrollLines = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setWheelScrollLines");
          
              return this.__PROXY__.setWheelScrollLines(...args);
            
        };
    
        // function 
        QApplication.prototype.setStartDragTime = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setStartDragTime");
          
              return this.__PROXY__.setStartDragTime(...args);
            
        };
    
        // function 
        QApplication.prototype.setStartDragDistance = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setStartDragDistance");
          
              return this.__PROXY__.setStartDragDistance(...args);
            
        };
    
        // function 
        QApplication.prototype.exec = function(...args) 
          
        {
          //print("JS: QApplication.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
    
        // function 
        QApplication.prototype.notify = function(...args) 
          
        {
          //print("JS: QApplication.prototype.notify");
          
              return this.__PROXY__.notify(...args);
            
        };
    
        // function 
        QApplication.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QApplication.prototype.setAutoSipEnabled = function(...args) 
          
        {
          //print("JS: QApplication.prototype.setAutoSipEnabled");
          
              return this.__PROXY__.setAutoSipEnabled(...args);
            
        };
    
        // function 
        QApplication.prototype.closeAllWindows = function(...args) 
          
        {
          //print("JS: QApplication.prototype.closeAllWindows");
          
              return this.__PROXY__.closeAllWindows(...args);
            
        };
    
        // function 
        QApplication.prototype.aboutQt = function(...args) 
          
        {
          //print("JS: QApplication.prototype.aboutQt");
          
              return this.__PROXY__.aboutQt(...args);
            
        };
    

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
      
          Object.defineProperty(QApplication.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'applicationName', {
              get: function() {
                  
                      return this.__PROXY__.applicationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'applicationVersion', {
              get: function() {
                  
                      return this.__PROXY__.applicationVersion;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationVersion(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'organizationDomain', {
              get: function() {
                  
                      return this.__PROXY__.organizationDomain;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationDomain(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'organizationName', {
              get: function() {
                  
                      return this.__PROXY__.organizationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'quitLockEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isQuitLockEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setQuitLockEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'doubleClickInterval', {
              get: function() {
                  
                      return this.__PROXY__.doubleClickInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDoubleClickInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'keyboardInputInterval', {
              get: function() {
                  
                      return this.__PROXY__.keyboardInputInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setKeyboardInputInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'wheelScrollLines', {
              get: function() {
                  
                      return this.__PROXY__.wheelScrollLines;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWheelScrollLines(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'startDragTime', {
              get: function() {
                  
                      return this.__PROXY__.startDragTime;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStartDragTime(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'startDragDistance', {
              get: function() {
                  
                      return this.__PROXY__.startDragDistance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStartDragDistance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QApplication.prototype, 'autoSipEnabled', {
              get: function() {
                  
                      return this.__PROXY__.autoSipEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoSipEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'organizationNameChanged', {
            get: function() { return this.__PROXY__.organizationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QApplication.prototype, 'organizationDomainChanged', {
            get: function() { return this.__PROXY__.organizationDomainChanged; },
            configurable: true
        });
        
        Object.defineProperty(QApplication.prototype, 'applicationNameChanged', {
            get: function() { return this.__PROXY__.applicationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QApplication.prototype, 'applicationVersionChanged', {
            get: function() { return this.__PROXY__.applicationVersionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QApplication.prototype, 'fontDatabaseChanged', {
            get: function() { return this.__PROXY__.fontDatabaseChanged; },
            configurable: true
        });
        
        Object.defineProperty(QApplication.prototype, 'screenAdded', {
            get: function() { return this.__PROXY__.screenAdded; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'screenAdded(QScreen*)', {
              get: function() { return this.__PROXY__.screenAdded; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'screenRemoved', {
            get: function() { return this.__PROXY__.screenRemoved; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'screenRemoved(QScreen*)', {
              get: function() { return this.__PROXY__.screenRemoved; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'primaryScreenChanged', {
            get: function() { return this.__PROXY__.primaryScreenChanged; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'primaryScreenChanged(QScreen*)', {
              get: function() { return this.__PROXY__.primaryScreenChanged; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'lastWindowClosed', {
            get: function() { return this.__PROXY__.lastWindowClosed; },
            configurable: true
        });
        
        Object.defineProperty(QApplication.prototype, 'focusObjectChanged', {
            get: function() { return this.__PROXY__.focusObjectChanged; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'focusObjectChanged(QObject*)', {
              get: function() { return this.__PROXY__.focusObjectChanged; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'applicationStateChanged', {
            get: function() { return this.__PROXY__.applicationStateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'applicationStateChanged(Qt::ApplicationState)', {
              get: function() { return this.__PROXY__.applicationStateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'layoutDirectionChanged', {
            get: function() { return this.__PROXY__.layoutDirectionChanged; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'layoutDirectionChanged(Qt::LayoutDirection)', {
              get: function() { return this.__PROXY__.layoutDirectionChanged; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'applicationDisplayNameChanged', {
            get: function() { return this.__PROXY__.applicationDisplayNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QApplication.prototype, 'paletteChanged', {
            get: function() { return this.__PROXY__.paletteChanged; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'paletteChanged(QPalette)', {
              get: function() { return this.__PROXY__.paletteChanged; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'fontChanged', {
            get: function() { return this.__PROXY__.fontChanged; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'fontChanged(QFont)', {
              get: function() { return this.__PROXY__.fontChanged; },
              configurable: true
          });
        
        Object.defineProperty(QApplication.prototype, 'focusChanged', {
            get: function() { return this.__PROXY__.focusChanged; },
            configurable: true
        });
        
          Object.defineProperty(QApplication.prototype, 'focusChanged(QWidget*,QWidget*)', {
              get: function() { return this.__PROXY__.focusChanged; },
              configurable: true
          });
        QApplication.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QApplication.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QApplication.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QApplication.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      