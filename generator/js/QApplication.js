
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
        QApplication.tr = function() 
          
        {
          //print("JS: QApplication.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setAttribute = function() 
          
        {
          //print("JS: QApplication.setAttribute");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setAttribute(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.testAttribute = function() 
          
        {
          //print("JS: QApplication.testAttribute");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.testAttribute(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.testAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setSetuidAllowed = function() 
          
        {
          //print("JS: QApplication.setSetuidAllowed");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setSetuidAllowed(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.isSetuidAllowed = function() 
          
        {
          //print("JS: QApplication.isSetuidAllowed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.isSetuidAllowed(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.isSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.instance = function() 
          
        {
          //print("JS: QApplication.instance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.instance(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.instance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.processEvents = function() 
          
        {
          //print("JS: QApplication.processEvents");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.processEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.processEvents(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.processEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.exit = function() 
          
        {
          //print("JS: QApplication.exit");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.exit(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.exit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.sendEvent = function() 
          
        {
          //print("JS: QApplication.sendEvent");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.sendEvent(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.sendEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.postEvent = function() 
          
        {
          //print("JS: QApplication.postEvent");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.postEvent(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.postEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.sendPostedEvents = function() 
          
        {
          //print("JS: QApplication.sendPostedEvents");
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.sendPostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.sendPostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.removePostedEvents = function() 
          
        {
          //print("JS: QApplication.removePostedEvents");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.removePostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.removePostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.startingUp = function() 
          
        {
          //print("JS: QApplication.startingUp");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.startingUp(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.startingUp(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.closingDown = function() 
          
        {
          //print("JS: QApplication.closingDown");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.closingDown(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.closingDown(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.applicationDirPath = function() 
          
        {
          //print("JS: QApplication.applicationDirPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.applicationDirPath(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.applicationDirPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.applicationFilePath = function() 
          
        {
          //print("JS: QApplication.applicationFilePath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.applicationFilePath(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.applicationFilePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.applicationPid = function() 
          
        {
          //print("JS: QApplication.applicationPid");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.applicationPid(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.applicationPid(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setLibraryPaths = function() 
          
        {
          //print("JS: QApplication.setLibraryPaths");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setLibraryPaths(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setLibraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.libraryPaths = function() 
          
        {
          //print("JS: QApplication.libraryPaths");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.libraryPaths(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.libraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.addLibraryPath = function() 
          
        {
          //print("JS: QApplication.addLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.addLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.addLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.removeLibraryPath = function() 
          
        {
          //print("JS: QApplication.removeLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.removeLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.removeLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.installTranslator = function() 
          
        {
          //print("JS: QApplication.installTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.installTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.installTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.removeTranslator = function() 
          
        {
          //print("JS: QApplication.removeTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.removeTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.removeTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.quit = function() 
          
        {
          //print("JS: QApplication.quit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.quit(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.quit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.sendSpontaneousEvent = function() 
          
        {
          //print("JS: QApplication.sendSpontaneousEvent");
          
        };
      

        // static function 
        QApplication.notifyInternal2 = function() 
          
        {
          //print("JS: QApplication.notifyInternal2");
          
        };
      

        // static function 
        QApplication.forwardEvent = function() 
          
        {
          //print("JS: QApplication.forwardEvent");
          
        };
      

        // static function 
        QApplication.libraryPathsLocked = function() 
          
        {
          //print("JS: QApplication.libraryPathsLocked");
          
        };
      

        // static function 
        QApplication.setApplicationDisplayName = function() 
          
        {
          //print("JS: QApplication.setApplicationDisplayName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setApplicationDisplayName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setApplicationDisplayName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.applicationDisplayName = function() 
          
        {
          //print("JS: QApplication.applicationDisplayName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.applicationDisplayName(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.applicationDisplayName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setDesktopFileName = function() 
          
        {
          //print("JS: QApplication.setDesktopFileName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setDesktopFileName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setDesktopFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.desktopFileName = function() 
          
        {
          //print("JS: QApplication.desktopFileName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.desktopFileName(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.desktopFileName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setWindowIcon = function() 
          
        {
          //print("JS: QApplication.setWindowIcon");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setWindowIcon(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setWindowIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.windowIcon = function() 
          
        {
          //print("JS: QApplication.windowIcon");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.windowIcon(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.windowIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.platformName = function() 
          
        {
          //print("JS: QApplication.platformName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.platformName(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.platformName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.focusObject = function() 
          
        {
          //print("JS: QApplication.focusObject");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.focusObject(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.focusObject(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.primaryScreen = function() 
          
        {
          //print("JS: QApplication.primaryScreen");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.primaryScreen(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.primaryScreen(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.screens = function() 
          
        {
          //print("JS: QApplication.screens");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.screens(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.screens(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.screenAt = function() 
          
        {
          //print("JS: QApplication.screenAt");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.screenAt(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.screenAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.overrideCursor = function() 
          
        {
          //print("JS: QApplication.overrideCursor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.overrideCursor(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.overrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setOverrideCursor = function() 
          
        {
          //print("JS: QApplication.setOverrideCursor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setOverrideCursor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.changeOverrideCursor = function() 
          
        {
          //print("JS: QApplication.changeOverrideCursor");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.changeOverrideCursor(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.changeOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.restoreOverrideCursor = function() 
          
        {
          //print("JS: QApplication.restoreOverrideCursor");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.restoreOverrideCursor(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.restoreOverrideCursor(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.clipboard = function() 
          
        {
          //print("JS: QApplication.clipboard");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.clipboard(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.clipboard(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.keyboardModifiers = function() 
          
        {
          //print("JS: QApplication.keyboardModifiers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.keyboardModifiers(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.keyboardModifiers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.queryKeyboardModifiers = function() 
          
        {
          //print("JS: QApplication.queryKeyboardModifiers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.queryKeyboardModifiers(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.queryKeyboardModifiers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.mouseButtons = function() 
          
        {
          //print("JS: QApplication.mouseButtons");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.mouseButtons(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.mouseButtons(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setLayoutDirection = function() 
          
        {
          //print("JS: QApplication.setLayoutDirection");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setLayoutDirection(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setLayoutDirection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.layoutDirection = function() 
          
        {
          //print("JS: QApplication.layoutDirection");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.layoutDirection(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.layoutDirection(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.isRightToLeft = function() 
          
        {
          //print("JS: QApplication.isRightToLeft");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.isRightToLeft(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.isRightToLeft(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.isLeftToRight = function() 
          
        {
          //print("JS: QApplication.isLeftToRight");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.isLeftToRight(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.isLeftToRight(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setDesktopSettingsAware = function() 
          
        {
          //print("JS: QApplication.setDesktopSettingsAware");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setDesktopSettingsAware(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setDesktopSettingsAware(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.desktopSettingsAware = function() 
          
        {
          //print("JS: QApplication.desktopSettingsAware");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.desktopSettingsAware(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.desktopSettingsAware(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.setQuitOnLastWindowClosed = function() 
          
        {
          //print("JS: QApplication.setQuitOnLastWindowClosed");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setQuitOnLastWindowClosed(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setQuitOnLastWindowClosed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.quitOnLastWindowClosed = function() 
          
        {
          //print("JS: QApplication.quitOnLastWindowClosed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.quitOnLastWindowClosed(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.quitOnLastWindowClosed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.applicationState = function() 
          
        {
          //print("JS: QApplication.applicationState");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.applicationState(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.applicationState(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QApplication.sync = function() 
          
        {
          //print("JS: QApplication.sync");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.sync(
                  
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.sync(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
        QApplication.setActiveWindow = function() 
          
        {
          //print("JS: QApplication.setActiveWindow");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QApplication_WrapperSingletonInstance.setActiveWindow(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QApplication);
  }

  
  else {
    
        print("QApplication.setActiveWindow(): wrong number / type of arguments");
      
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
    