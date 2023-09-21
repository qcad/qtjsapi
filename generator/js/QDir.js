
      // auto generated
      //var self;

      // class constructor:
      function QDir() {
        

        // should be QDir_BaseJs.call(this, engine):
        //QDir.prototype = new QDir_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDir_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDir);
            //}
          }
          else {
            qWarning("QDir.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QDir_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDir);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDir);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QDir_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDir);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir(): wrong number / type of arguments");
      
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
            
          }
        }
      }

      //QDir.prototype = new QDir_BaseJs(engine);
      //QDir.prototype = new QDir_Wrapper(engine);
      QDir.prototype = new Object();

      QDir.prototype.toString = function() {
          //return "QDir [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDir [JS]";
        };
      QDir.getObjectType = function() {
        
            return RJSType.QDir_Type;
          
      };

      QDir.prototype.getObjectType = function() {
        
            return RJSType.QDir_Type;
          
      };

      QDir.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDir_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QDir_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Filter
QDir.Dirs = QDir_Wrapper.Dirs;
QDir.Files = QDir_Wrapper.Files;
QDir.Drives = QDir_Wrapper.Drives;
QDir.NoSymLinks = QDir_Wrapper.NoSymLinks;
QDir.AllEntries = QDir_Wrapper.AllEntries;
QDir.TypeMask = QDir_Wrapper.TypeMask;
QDir.Readable = QDir_Wrapper.Readable;
QDir.Writable = QDir_Wrapper.Writable;
QDir.Executable = QDir_Wrapper.Executable;
QDir.PermissionMask = QDir_Wrapper.PermissionMask;
QDir.Modified = QDir_Wrapper.Modified;
QDir.Hidden = QDir_Wrapper.Hidden;
QDir.System = QDir_Wrapper.System;
QDir.AccessMask = QDir_Wrapper.AccessMask;
QDir.AllDirs = QDir_Wrapper.AllDirs;
QDir.CaseSensitive = QDir_Wrapper.CaseSensitive;
QDir.NoDot = QDir_Wrapper.NoDot;
QDir.NoDotDot = QDir_Wrapper.NoDotDot;
QDir.NoDotAndDotDot = QDir_Wrapper.NoDotAndDotDot;
QDir.NoFilter = QDir_Wrapper.NoFilter;

  // enum: SortFlag
QDir.Name = QDir_Wrapper.Name;
QDir.Time = QDir_Wrapper.Time;
QDir.Size = QDir_Wrapper.Size;
QDir.Unsorted = QDir_Wrapper.Unsorted;
QDir.SortByMask = QDir_Wrapper.SortByMask;
QDir.DirsFirst = QDir_Wrapper.DirsFirst;
QDir.Reversed = QDir_Wrapper.Reversed;
QDir.IgnoreCase = QDir_Wrapper.IgnoreCase;
QDir.DirsLast = QDir_Wrapper.DirsLast;
QDir.LocaleAware = QDir_Wrapper.LocaleAware;
QDir.Type = QDir_Wrapper.Type;
QDir.NoSort = QDir_Wrapper.NoSort;


      // functions:
      

      // static functions:
      

        // static function 
        QDir.setSearchPaths = function() 
          
        {
          //print("JS: QDir.setSearchPaths");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.setSearchPaths(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.setSearchPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.addSearchPath = function() 
          
        {
          //print("JS: QDir.addSearchPath");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.addSearchPath(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.addSearchPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.searchPaths = function() 
          
        {
          //print("JS: QDir.searchPaths");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.searchPaths(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.searchPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.toNativeSeparators = function() 
          
        {
          //print("JS: QDir.toNativeSeparators");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.toNativeSeparators(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.toNativeSeparators(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.fromNativeSeparators = function() 
          
        {
          //print("JS: QDir.fromNativeSeparators");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.fromNativeSeparators(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.fromNativeSeparators(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.nameFiltersFromString = function() 
          
        {
          //print("JS: QDir.nameFiltersFromString");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.nameFiltersFromString(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.nameFiltersFromString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.isRelativePath = function() 
          
        {
          //print("JS: QDir.isRelativePath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.isRelativePath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.isRelativePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.isAbsolutePath = function() 
          
        {
          //print("JS: QDir.isAbsolutePath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.isAbsolutePath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.isAbsolutePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.drives = function() 
          
        {
          //print("JS: QDir.drives");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.drives(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.drives(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.listSeparator = function() 
          
        {
          //print("JS: QDir.listSeparator");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.listSeparator(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.listSeparator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.sep = function() 
          
        {
          //print("JS: QDir.separator");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.separator(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.separator(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.setCurrent = function() 
          
        {
          //print("JS: QDir.setCurrent");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.setCurrent(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.setCurrent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.current = function() 
          
        {
          //print("JS: QDir.current");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.current(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.current(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.currentPath = function() 
          
        {
          //print("JS: QDir.currentPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.currentPath(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.currentPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.home = function() 
          
        {
          //print("JS: QDir.home");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.home(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.home(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.homePath = function() 
          
        {
          //print("JS: QDir.homePath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.homePath(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.homePath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.root = function() 
          
        {
          //print("JS: QDir.root");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.root(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.root(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.rootPath = function() 
          
        {
          //print("JS: QDir.rootPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.rootPath(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.rootPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.temp = function() 
          
        {
          //print("JS: QDir.temp");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.temp(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.temp(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.tempPath = function() 
          
        {
          //print("JS: QDir.tempPath");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.tempPath(
                  
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.tempPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.match = function() 
          
        {
          //print("JS: QDir.match");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.match(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.match(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.match(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDir.cleanPath = function() 
          
        {
          //print("JS: QDir.cleanPath");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDir_WrapperSingletonInstance.cleanPath(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDir);
  }

  
  else {
    
        print("QDir.cleanPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDir.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDir.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    