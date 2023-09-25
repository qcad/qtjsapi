
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
              copyProperties(this, wrapper, QCoreApplication);
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
      

      // static functions:
      

        // static function 
        QCoreApplication.tr = function() 
          
        {
          //print("JS: QCoreApplication.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QCoreApplication_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QCoreApplication);
  }

  
  else {
    
        print("QCoreApplication.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    