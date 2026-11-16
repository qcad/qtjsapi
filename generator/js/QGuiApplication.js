
      // auto generated
      //var self;

      // class constructor:
      function QGuiApplication() {
        

        // should be QGuiApplication_BaseJs.call(this, engine):
        //QGuiApplication.prototype = new QGuiApplication_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGuiApplication.getIdStatic()))) {

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
            qWarning("QGuiApplication.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QGuiApplication.js: No constructor found for class QGuiApplication");
            
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

      //QGuiApplication.prototype = new QGuiApplication_BaseJs(engine);
      //QGuiApplication.prototype = new QGuiApplication_Wrapper(engine);
      QGuiApplication.prototype = new Object();


      QGuiApplication.prototype.toString = function() {
          //return "QGuiApplication [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGuiApplication [JS]";
        };
      QGuiApplication.getObjectType = function() {
        return RJSType_QGuiApplication.getIdStatic();
      };

      QGuiApplication.prototype.getObjectType = function() {
        return RJSType_QGuiApplication.getIdStatic();
      };

      QGuiApplication.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGuiApplication.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QCoreApplication.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QGuiApplication.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.findChild = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.children = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setParent = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.property = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.parent = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setOrganizationDomain = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setOrganizationDomain");
          
              return this.__PROXY__.setOrganizationDomain(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setOrganizationName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setOrganizationName");
          
              return this.__PROXY__.setOrganizationName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setApplicationName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setApplicationName");
          
              return this.__PROXY__.setApplicationName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setApplicationVersion = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setApplicationVersion");
          
              return this.__PROXY__.setApplicationVersion(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.isQuitLockEnabled = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.isQuitLockEnabled");
          
              return this.__PROXY__.isQuitLockEnabled(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setQuitLockEnabled = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setQuitLockEnabled");
          
              return this.__PROXY__.setQuitLockEnabled(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.qt_sendSpontaneousEvent = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.qt_sendSpontaneousEvent");
          
              return this.__PROXY__.qt_sendSpontaneousEvent(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.qAppName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.qAppName");
          
              return this.__PROXY__.qAppName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setApplicationDisplayName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setApplicationDisplayName");
          
              return this.__PROXY__.setApplicationDisplayName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.applicationDisplayName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.applicationDisplayName");
          
              return this.__PROXY__.applicationDisplayName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setDesktopFileName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setDesktopFileName");
          
              return this.__PROXY__.setDesktopFileName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.desktopFileName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.desktopFileName");
          
              return this.__PROXY__.desktopFileName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.windowIcon = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.windowIcon");
          
              return this.__PROXY__.windowIcon(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.platformName = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.platformName");
          
              return this.__PROXY__.platformName(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.focusObject = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.focusObject");
          
              return this.__PROXY__.focusObject(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.primaryScreen = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.primaryScreen");
          
              return this.__PROXY__.primaryScreen(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.screens = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.screens");
          
              return this.__PROXY__.screens(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.screenAt = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.screenAt");
          
              return this.__PROXY__.screenAt(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.overrideCursor = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.overrideCursor");
          
              return this.__PROXY__.overrideCursor(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setOverrideCursor = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setOverrideCursor");
          
              return this.__PROXY__.setOverrideCursor(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.changeOverrideCursor = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.changeOverrideCursor");
          
              return this.__PROXY__.changeOverrideCursor(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.restoreOverrideCursor = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.restoreOverrideCursor");
          
              return this.__PROXY__.restoreOverrideCursor(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.font = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.font");
          
              return this.__PROXY__.font(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setFont = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.clipboard = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.clipboard");
          
              return this.__PROXY__.clipboard(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.palette = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.palette");
          
              return this.__PROXY__.palette(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.keyboardModifiers = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.keyboardModifiers");
          
              return this.__PROXY__.keyboardModifiers(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.queryKeyboardModifiers = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.queryKeyboardModifiers");
          
              return this.__PROXY__.queryKeyboardModifiers(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.mouseButtons = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.mouseButtons");
          
              return this.__PROXY__.mouseButtons(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.layoutDirection = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.layoutDirection");
          
              return this.__PROXY__.layoutDirection(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setDesktopSettingsAware = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setDesktopSettingsAware");
          
              return this.__PROXY__.setDesktopSettingsAware(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.desktopSettingsAware = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.desktopSettingsAware");
          
              return this.__PROXY__.desktopSettingsAware(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.setQuitOnLastWindowClosed = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.setQuitOnLastWindowClosed");
          
              return this.__PROXY__.setQuitOnLastWindowClosed(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.quitOnLastWindowClosed = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.quitOnLastWindowClosed");
          
              return this.__PROXY__.quitOnLastWindowClosed(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.applicationState = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.applicationState");
          
              return this.__PROXY__.applicationState(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.exec = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.notify = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.notify");
          
              return this.__PROXY__.notify(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.isSessionRestored = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.isSessionRestored");
          
              return this.__PROXY__.isSessionRestored(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.sessionId = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.sessionId");
          
              return this.__PROXY__.sessionId(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.sessionKey = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.sessionKey");
          
              return this.__PROXY__.sessionKey(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.isSavingSession = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.isSavingSession");
          
              return this.__PROXY__.isSavingSession(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.sync = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.sync");
          
              return this.__PROXY__.sync(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.event = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QGuiApplication.prototype.compressEvent = function(...args) 
          
        {
          //print("JS: QGuiApplication.prototype.compressEvent");
          
              return this.__PROXY__.compressEvent(...args);
            
        };
        

      // static functions:
      

        // static function 
        QGuiApplication.setApplicationDisplayName = function() 
          
        {
          //print("JS: QGuiApplication.setApplicationDisplayName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setApplicationDisplayName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setApplicationDisplayName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.applicationDisplayName = function() 
          
        {
          //print("JS: QGuiApplication.applicationDisplayName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.applicationDisplayName(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.applicationDisplayName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setDesktopFileName = function() 
          
        {
          //print("JS: QGuiApplication.setDesktopFileName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setDesktopFileName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setDesktopFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.desktopFileName = function() 
          
        {
          //print("JS: QGuiApplication.desktopFileName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.desktopFileName(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.desktopFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setWindowIcon = function() 
          
        {
          //print("JS: QGuiApplication.setWindowIcon");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setWindowIcon(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setWindowIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.windowIcon = function() 
          
        {
          //print("JS: QGuiApplication.windowIcon");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.windowIcon(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.windowIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.platformName = function() 
          
        {
          //print("JS: QGuiApplication.platformName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.platformName(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.platformName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.focusObject = function() 
          
        {
          //print("JS: QGuiApplication.focusObject");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.focusObject(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.focusObject(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.primaryScreen = function() 
          
        {
          //print("JS: QGuiApplication.primaryScreen");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.primaryScreen(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.primaryScreen(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.screens = function() 
          
        {
          //print("JS: QGuiApplication.screens");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.screens(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.screens(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.screenAt = function() 
          
        {
          //print("JS: QGuiApplication.screenAt");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.screenAt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.screenAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.overrideCursor = function() 
          
        {
          //print("JS: QGuiApplication.overrideCursor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.overrideCursor(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.overrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setOverrideCursor = function() 
          
        {
          //print("JS: QGuiApplication.setOverrideCursor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setOverrideCursor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.changeOverrideCursor = function() 
          
        {
          //print("JS: QGuiApplication.changeOverrideCursor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.changeOverrideCursor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.changeOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.restoreOverrideCursor = function() 
          
        {
          //print("JS: QGuiApplication.restoreOverrideCursor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.restoreOverrideCursor(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.restoreOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.font = function() 
          
        {
          //print("JS: QGuiApplication.font");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.font(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.font(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setFont = function() 
          
        {
          //print("JS: QGuiApplication.setFont");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setFont(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setFont(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.clipboard = function() 
          
        {
          //print("JS: QGuiApplication.clipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.clipboard(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.clipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.palette = function() 
          
        {
          //print("JS: QGuiApplication.palette");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.palette(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.palette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setPalette = function() 
          
        {
          //print("JS: QGuiApplication.setPalette");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setPalette(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setPalette(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.keyboardModifiers = function() 
          
        {
          //print("JS: QGuiApplication.keyboardModifiers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.keyboardModifiers(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.keyboardModifiers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.queryKeyboardModifiers = function() 
          
        {
          //print("JS: QGuiApplication.queryKeyboardModifiers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.queryKeyboardModifiers(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.queryKeyboardModifiers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.mouseButtons = function() 
          
        {
          //print("JS: QGuiApplication.mouseButtons");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.mouseButtons(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.mouseButtons(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setLayoutDirection = function() 
          
        {
          //print("JS: QGuiApplication.setLayoutDirection");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setLayoutDirection(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setLayoutDirection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.layoutDirection = function() 
          
        {
          //print("JS: QGuiApplication.layoutDirection");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.layoutDirection(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.layoutDirection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.isRightToLeft = function() 
          
        {
          //print("JS: QGuiApplication.isRightToLeft");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.isRightToLeft(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.isRightToLeft(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.isLeftToRight = function() 
          
        {
          //print("JS: QGuiApplication.isLeftToRight");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.isLeftToRight(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.isLeftToRight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setDesktopSettingsAware = function() 
          
        {
          //print("JS: QGuiApplication.setDesktopSettingsAware");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setDesktopSettingsAware(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setDesktopSettingsAware(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.desktopSettingsAware = function() 
          
        {
          //print("JS: QGuiApplication.desktopSettingsAware");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.desktopSettingsAware(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.desktopSettingsAware(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setQuitOnLastWindowClosed = function() 
          
        {
          //print("JS: QGuiApplication.setQuitOnLastWindowClosed");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setQuitOnLastWindowClosed(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setQuitOnLastWindowClosed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.quitOnLastWindowClosed = function() 
          
        {
          //print("JS: QGuiApplication.quitOnLastWindowClosed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.quitOnLastWindowClosed(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.quitOnLastWindowClosed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.applicationState = function() 
          
        {
          //print("JS: QGuiApplication.applicationState");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.applicationState(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.applicationState(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.exec = function() 
          
        {
          //print("JS: QGuiApplication.exec");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.exec(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.exec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.sync = function() 
          
        {
          //print("JS: QGuiApplication.sync");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.sync(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.sync(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QGuiApplication.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGuiApplication.prototype, 'applicationName', {
              get: function() {
                  
                      return this.__PROXY__.applicationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGuiApplication.prototype, 'applicationVersion', {
              get: function() {
                  
                      return this.__PROXY__.applicationVersion;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationVersion(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGuiApplication.prototype, 'organizationDomain', {
              get: function() {
                  
                      return this.__PROXY__.organizationDomain;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationDomain(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGuiApplication.prototype, 'organizationName', {
              get: function() {
                  
                      return this.__PROXY__.organizationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGuiApplication.prototype, 'quitLockEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isQuitLockEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setQuitLockEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'organizationNameChanged', {
            get: function() { return this.__PROXY__.organizationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QGuiApplication.prototype, 'organizationDomainChanged', {
            get: function() { return this.__PROXY__.organizationDomainChanged; },
            configurable: true
        });
        
        Object.defineProperty(QGuiApplication.prototype, 'applicationNameChanged', {
            get: function() { return this.__PROXY__.applicationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QGuiApplication.prototype, 'applicationVersionChanged', {
            get: function() { return this.__PROXY__.applicationVersionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QGuiApplication.prototype, 'fontDatabaseChanged', {
            get: function() { return this.__PROXY__.fontDatabaseChanged; },
            configurable: true
        });
        
        Object.defineProperty(QGuiApplication.prototype, 'screenAdded', {
            get: function() { return this.__PROXY__.screenAdded; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'screenAdded(QScreen*)', {
              get: function() { return this.__PROXY__.screenAdded; },
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'screenRemoved', {
            get: function() { return this.__PROXY__.screenRemoved; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'screenRemoved(QScreen*)', {
              get: function() { return this.__PROXY__.screenRemoved; },
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'primaryScreenChanged', {
            get: function() { return this.__PROXY__.primaryScreenChanged; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'primaryScreenChanged(QScreen*)', {
              get: function() { return this.__PROXY__.primaryScreenChanged; },
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'lastWindowClosed', {
            get: function() { return this.__PROXY__.lastWindowClosed; },
            configurable: true
        });
        
        Object.defineProperty(QGuiApplication.prototype, 'focusObjectChanged', {
            get: function() { return this.__PROXY__.focusObjectChanged; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'focusObjectChanged(QObject*)', {
              get: function() { return this.__PROXY__.focusObjectChanged; },
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'applicationStateChanged', {
            get: function() { return this.__PROXY__.applicationStateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'applicationStateChanged(Qt::ApplicationState)', {
              get: function() { return this.__PROXY__.applicationStateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'layoutDirectionChanged', {
            get: function() { return this.__PROXY__.layoutDirectionChanged; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'layoutDirectionChanged(Qt::LayoutDirection)', {
              get: function() { return this.__PROXY__.layoutDirectionChanged; },
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'applicationDisplayNameChanged', {
            get: function() { return this.__PROXY__.applicationDisplayNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QGuiApplication.prototype, 'paletteChanged', {
            get: function() { return this.__PROXY__.paletteChanged; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'paletteChanged(QPalette)', {
              get: function() { return this.__PROXY__.paletteChanged; },
              configurable: true
          });
        
        Object.defineProperty(QGuiApplication.prototype, 'fontChanged', {
            get: function() { return this.__PROXY__.fontChanged; },
            configurable: true
        });
        
          Object.defineProperty(QGuiApplication.prototype, 'fontChanged(QFont)', {
              get: function() { return this.__PROXY__.fontChanged; },
              configurable: true
          });
        QGuiApplication.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGuiApplication.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGuiApplication.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGuiApplication.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGuiApplication.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGuiApplication.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      