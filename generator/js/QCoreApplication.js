
      // auto generated
      //var self;

      // class constructor:
      function QCoreApplication() {
        

        // should be QCoreApplication_BaseJs.call(this, engine):
        //QCoreApplication.prototype = new QCoreApplication_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QCoreApplication.getIdStatic()))) {

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
            qWarning("QCoreApplication.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QCoreApplication.js: No constructor found for class QCoreApplication");
            
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

      //QCoreApplication.prototype = new QCoreApplication_BaseJs(engine);
      //QCoreApplication.prototype = new QCoreApplication_Wrapper(engine);
      QCoreApplication.prototype = new Object();


      QCoreApplication.prototype.toString = function() {
          //return "QCoreApplication [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCoreApplication [JS]";
        };
      QCoreApplication.getObjectType = function() {
        return RJSType_QCoreApplication.getIdStatic();
      };

      QCoreApplication.prototype.getObjectType = function() {
        return RJSType_QCoreApplication.getIdStatic();
      };

      QCoreApplication.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QCoreApplication.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QCoreApplication.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.findChild = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.children = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setParent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.property = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.parent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setOrganizationDomain = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setOrganizationDomain");
          
              return this.__PROXY__.setOrganizationDomain(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setOrganizationName = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setOrganizationName");
          
              return this.__PROXY__.setOrganizationName(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setApplicationName = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setApplicationName");
          
              return this.__PROXY__.setApplicationName(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setApplicationVersion = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setApplicationVersion");
          
              return this.__PROXY__.setApplicationVersion(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setSetuidAllowed = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setSetuidAllowed");
          
              return this.__PROXY__.setSetuidAllowed(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.isSetuidAllowed = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.isSetuidAllowed");
          
              return this.__PROXY__.isSetuidAllowed(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.instance = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.instance");
          
              return this.__PROXY__.instance(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.exec = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.processEvents = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.processEvents");
          
              return this.__PROXY__.processEvents(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.exit = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.exit");
          
              return this.__PROXY__.exit(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.sendEvent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.sendEvent");
          
              return this.__PROXY__.sendEvent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.postEvent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.postEvent");
          
              return this.__PROXY__.postEvent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.sendPostedEvents = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.sendPostedEvents");
          
              return this.__PROXY__.sendPostedEvents(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.removePostedEvents = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.removePostedEvents");
          
              return this.__PROXY__.removePostedEvents(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.notify = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.notify");
          
              return this.__PROXY__.notify(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.startingUp = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.startingUp");
          
              return this.__PROXY__.startingUp(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.closingDown = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.closingDown");
          
              return this.__PROXY__.closingDown(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.applicationDirPath = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.applicationDirPath");
          
              return this.__PROXY__.applicationDirPath(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.applicationFilePath = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.applicationFilePath");
          
              return this.__PROXY__.applicationFilePath(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.applicationPid = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.applicationPid");
          
              return this.__PROXY__.applicationPid(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setLibraryPaths = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setLibraryPaths");
          
              return this.__PROXY__.setLibraryPaths(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.libraryPaths = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.libraryPaths");
          
              return this.__PROXY__.libraryPaths(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.addLibraryPath = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.addLibraryPath");
          
              return this.__PROXY__.addLibraryPath(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.removeLibraryPath = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.removeLibraryPath");
          
              return this.__PROXY__.removeLibraryPath(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.installTranslator = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.installTranslator");
          
              return this.__PROXY__.installTranslator(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.removeTranslator = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.removeTranslator");
          
              return this.__PROXY__.removeTranslator(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.isQuitLockEnabled = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.isQuitLockEnabled");
          
              return this.__PROXY__.isQuitLockEnabled(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.setQuitLockEnabled = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.setQuitLockEnabled");
          
              return this.__PROXY__.setQuitLockEnabled(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.quit = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.quit");
          
              return this.__PROXY__.quit(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.event = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.compressEvent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.compressEvent");
          
              return this.__PROXY__.compressEvent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.sendSpontaneousEvent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.sendSpontaneousEvent");
          
              return this.__PROXY__.sendSpontaneousEvent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.notifyInternal2 = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.notifyInternal2");
          
              return this.__PROXY__.notifyInternal2(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.forwardEvent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.forwardEvent");
          
              return this.__PROXY__.forwardEvent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.libraryPathsLocked = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.libraryPathsLocked");
          
              return this.__PROXY__.libraryPathsLocked(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.qt_sendSpontaneousEvent = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.qt_sendSpontaneousEvent");
          
              return this.__PROXY__.qt_sendSpontaneousEvent(...args);
            
        };
        
        // function 
        QCoreApplication.prototype.qAppName = function(...args) 
          
        {
          //print("JS: QCoreApplication.prototype.qAppName");
          
              return this.__PROXY__.qAppName(...args);
            
        };
        

      // static functions:
      

        // static function 
        QCoreApplication.setAttribute = function() 
          
        {
          //print("JS: QCoreApplication.setAttribute");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.setAttribute(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.setAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.testAttribute = function() 
          
        {
          //print("JS: QCoreApplication.testAttribute");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.testAttribute(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.testAttribute(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.setSetuidAllowed = function() 
          
        {
          //print("JS: QCoreApplication.setSetuidAllowed");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.setSetuidAllowed(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.setSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.isSetuidAllowed = function() 
          
        {
          //print("JS: QCoreApplication.isSetuidAllowed");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.isSetuidAllowed(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.isSetuidAllowed(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.instance = function() 
          
        {
          //print("JS: QCoreApplication.instance");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.instance(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.instance(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.exec = function() 
          
        {
          //print("JS: QCoreApplication.exec");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.exec(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.exec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.processEvents = function() 
          
        {
          //print("JS: QCoreApplication.processEvents");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.processEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.processEvents(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.processEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.exit = function() 
          
        {
          //print("JS: QCoreApplication.exit");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.exit(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.exit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.sendEvent = function() 
          
        {
          //print("JS: QCoreApplication.sendEvent");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.sendEvent(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.sendEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.postEvent = function() 
          
        {
          //print("JS: QCoreApplication.postEvent");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.postEvent(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.postEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.sendPostedEvents = function() 
          
        {
          //print("JS: QCoreApplication.sendPostedEvents");
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.sendPostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.sendPostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.removePostedEvents = function() 
          
        {
          //print("JS: QCoreApplication.removePostedEvents");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.removePostedEvents(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.removePostedEvents(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.startingUp = function() 
          
        {
          //print("JS: QCoreApplication.startingUp");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.startingUp(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.startingUp(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.closingDown = function() 
          
        {
          //print("JS: QCoreApplication.closingDown");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.closingDown(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.closingDown(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.applicationDirPath = function() 
          
        {
          //print("JS: QCoreApplication.applicationDirPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.applicationDirPath(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.applicationDirPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.applicationFilePath = function() 
          
        {
          //print("JS: QCoreApplication.applicationFilePath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.applicationFilePath(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.applicationFilePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.applicationPid = function() 
          
        {
          //print("JS: QCoreApplication.applicationPid");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.applicationPid(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.applicationPid(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.setLibraryPaths = function() 
          
        {
          //print("JS: QCoreApplication.setLibraryPaths");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.setLibraryPaths(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.setLibraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.libraryPaths = function() 
          
        {
          //print("JS: QCoreApplication.libraryPaths");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.libraryPaths(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.libraryPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.addLibraryPath = function() 
          
        {
          //print("JS: QCoreApplication.addLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.addLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.addLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.removeLibraryPath = function() 
          
        {
          //print("JS: QCoreApplication.removeLibraryPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.removeLibraryPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.removeLibraryPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.installTranslator = function() 
          
        {
          //print("JS: QCoreApplication.installTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.installTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.installTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.removeTranslator = function() 
          
        {
          //print("JS: QCoreApplication.removeTranslator");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.removeTranslator(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.removeTranslator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.quit = function() 
          
        {
          //print("JS: QCoreApplication.quit");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.quit(
                  
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.quit(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCoreApplication.sendSpontaneousEvent = function() 
          
        {
          //print("JS: QCoreApplication.sendSpontaneousEvent");
          
        };
      

        // static function 
        QCoreApplication.notifyInternal2 = function() 
          
        {
          //print("JS: QCoreApplication.notifyInternal2");
          
        };
      

        // static function 
        QCoreApplication.forwardEvent = function() 
          
        {
          //print("JS: QCoreApplication.forwardEvent");
          
        };
      

        // static function 
        QCoreApplication.libraryPathsLocked = function() 
          
        {
          //print("JS: QCoreApplication.libraryPathsLocked");
          
        };
      
          Object.defineProperty(QCoreApplication.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCoreApplication.prototype, 'applicationName', {
              get: function() {
                  
                      return this.__PROXY__.applicationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCoreApplication.prototype, 'applicationVersion', {
              get: function() {
                  
                      return this.__PROXY__.applicationVersion;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setApplicationVersion(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCoreApplication.prototype, 'organizationDomain', {
              get: function() {
                  
                      return this.__PROXY__.organizationDomain;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationDomain(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCoreApplication.prototype, 'organizationName', {
              get: function() {
                  
                      return this.__PROXY__.organizationName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrganizationName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCoreApplication.prototype, 'quitLockEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isQuitLockEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setQuitLockEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QCoreApplication.prototype, 'organizationNameChanged', {
            get: function() { return this.__PROXY__.organizationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QCoreApplication.prototype, 'organizationDomainChanged', {
            get: function() { return this.__PROXY__.organizationDomainChanged; },
            configurable: true
        });
        
        Object.defineProperty(QCoreApplication.prototype, 'applicationNameChanged', {
            get: function() { return this.__PROXY__.applicationNameChanged; },
            configurable: true
        });
        
        Object.defineProperty(QCoreApplication.prototype, 'applicationVersionChanged', {
            get: function() { return this.__PROXY__.applicationVersionChanged; },
            configurable: true
        });
        QCoreApplication.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QCoreApplication.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QCoreApplication.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QCoreApplication.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCoreApplication.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QCoreApplication.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      