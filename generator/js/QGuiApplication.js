
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
            arguments[2].getWrappedType()===
              
                  RJSType.QGuiApplication_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QGuiApplication);
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
  
          }
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
        
            return RJSType.QGuiApplication_Type;
          
      };

      QGuiApplication.prototype.getObjectType = function() {
        
            return RJSType.QGuiApplication_Type;
          
      };

      QGuiApplication.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QGuiApplication_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QCoreApplication_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QGuiApplication_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QCoreApplication_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QGuiApplication.tr = function() 
          
        {
          //print("JS: QGuiApplication.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setAttribute = function() 
          
        {
          //print("JS: QGuiApplication.setAttribute");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setAttribute(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.testAttribute = function() 
          
        {
          //print("JS: QGuiApplication.testAttribute");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.testAttribute(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.testAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setSetuidAllowed = function() 
          
        {
          //print("JS: QGuiApplication.setSetuidAllowed");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setSetuidAllowed(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.isSetuidAllowed = function() 
          
        {
          //print("JS: QGuiApplication.isSetuidAllowed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.isSetuidAllowed(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.isSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.instance = function() 
          
        {
          //print("JS: QGuiApplication.instance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.instance(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.instance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.processEvents = function() 
          
        {
          //print("JS: QGuiApplication.processEvents");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.processEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.processEvents(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.processEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.exit = function() 
          
        {
          //print("JS: QGuiApplication.exit");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.exit(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.exit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.sendEvent = function() 
          
        {
          //print("JS: QGuiApplication.sendEvent");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.sendEvent(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.sendEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.postEvent = function() 
          
        {
          //print("JS: QGuiApplication.postEvent");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.postEvent(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.postEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.sendPostedEvents = function() 
          
        {
          //print("JS: QGuiApplication.sendPostedEvents");
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.sendPostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.sendPostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.removePostedEvents = function() 
          
        {
          //print("JS: QGuiApplication.removePostedEvents");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.removePostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.removePostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.startingUp = function() 
          
        {
          //print("JS: QGuiApplication.startingUp");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.startingUp(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.startingUp(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.closingDown = function() 
          
        {
          //print("JS: QGuiApplication.closingDown");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.closingDown(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.closingDown(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.applicationDirPath = function() 
          
        {
          //print("JS: QGuiApplication.applicationDirPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.applicationDirPath(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.applicationDirPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.applicationFilePath = function() 
          
        {
          //print("JS: QGuiApplication.applicationFilePath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.applicationFilePath(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.applicationFilePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.applicationPid = function() 
          
        {
          //print("JS: QGuiApplication.applicationPid");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.applicationPid(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.applicationPid(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.setLibraryPaths = function() 
          
        {
          //print("JS: QGuiApplication.setLibraryPaths");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.setLibraryPaths(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.setLibraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.libraryPaths = function() 
          
        {
          //print("JS: QGuiApplication.libraryPaths");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.libraryPaths(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.libraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.addLibraryPath = function() 
          
        {
          //print("JS: QGuiApplication.addLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.addLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.addLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.removeLibraryPath = function() 
          
        {
          //print("JS: QGuiApplication.removeLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.removeLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.removeLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.installTranslator = function() 
          
        {
          //print("JS: QGuiApplication.installTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.installTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.installTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.removeTranslator = function() 
          
        {
          //print("JS: QGuiApplication.removeTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.removeTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.removeTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.quit = function() 
          
        {
          //print("JS: QGuiApplication.quit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGuiApplication_WrapperSingletonInstance.quit(
                  
                );
              

        //copyProperties(this, wrapper, QGuiApplication);
  }

  
  else {
    
        print("QGuiApplication.quit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGuiApplication.sendSpontaneousEvent = function() 
          
        {
          //print("JS: QGuiApplication.sendSpontaneousEvent");
          
        };
      

        // static function 
        QGuiApplication.notifyInternal2 = function() 
          
        {
          //print("JS: QGuiApplication.notifyInternal2");
          
        };
      

        // static function 
        QGuiApplication.forwardEvent = function() 
          
        {
          //print("JS: QGuiApplication.forwardEvent");
          
        };
      

        // static function 
        QGuiApplication.libraryPathsLocked = function() 
          
        {
          //print("JS: QGuiApplication.libraryPathsLocked");
          
        };
      

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
    