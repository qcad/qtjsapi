
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
            arguments[2].getWrappedType()===RJSType_QDir.getIdStatic()))) {

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
        return RJSType_QDir.getIdStatic();
      };

      QDir.prototype.getObjectType = function() {
        return RJSType_QDir.getIdStatic();
      };

      QDir.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDir.getIdStatic()) {
          return true;
        }

        

        return false;


        
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
      
        // function 
        QDir.prototype.swap = function(...args) 
          
        {
          //print("JS: QDir.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QDir.prototype.setPath = function(...args) 
          
        {
          //print("JS: QDir.prototype.setPath");
          return this.__PROXY__.setPath(...args);
        };
    
        // function 
        QDir.prototype.path = function(...args) 
          
        {
          //print("JS: QDir.prototype.path");
          return this.__PROXY__.path(...args);
        };
    
        // function 
        QDir.prototype.absolutePath = function(...args) 
          
        {
          //print("JS: QDir.prototype.absolutePath");
          return this.__PROXY__.absolutePath(...args);
        };
    
        // function 
        QDir.prototype.canonicalPath = function(...args) 
          
        {
          //print("JS: QDir.prototype.canonicalPath");
          return this.__PROXY__.canonicalPath(...args);
        };
    
        // function 
        QDir.prototype.setSearchPaths = function(...args) 
          
        {
          //print("JS: QDir.prototype.setSearchPaths");
          return this.__PROXY__.setSearchPaths(...args);
        };
    
        // function 
        QDir.prototype.addSearchPath = function(...args) 
          
        {
          //print("JS: QDir.prototype.addSearchPath");
          return this.__PROXY__.addSearchPath(...args);
        };
    
        // function 
        QDir.prototype.searchPaths = function(...args) 
          
        {
          //print("JS: QDir.prototype.searchPaths");
          return this.__PROXY__.searchPaths(...args);
        };
    
        // function 
        QDir.prototype.dirName = function(...args) 
          
        {
          //print("JS: QDir.prototype.dirName");
          return this.__PROXY__.dirName(...args);
        };
    
        // function 
        QDir.prototype.filePath = function(...args) 
          
        {
          //print("JS: QDir.prototype.filePath");
          return this.__PROXY__.filePath(...args);
        };
    
        // function 
        QDir.prototype.absoluteFilePath = function(...args) 
          
        {
          //print("JS: QDir.prototype.absoluteFilePath");
          return this.__PROXY__.absoluteFilePath(...args);
        };
    
        // function 
        QDir.prototype.relativeFilePath = function(...args) 
          
        {
          //print("JS: QDir.prototype.relativeFilePath");
          return this.__PROXY__.relativeFilePath(...args);
        };
    
        // function 
        QDir.prototype.toNativeSeparators = function(...args) 
          
        {
          //print("JS: QDir.prototype.toNativeSeparators");
          return this.__PROXY__.toNativeSeparators(...args);
        };
    
        // function 
        QDir.prototype.fromNativeSeparators = function(...args) 
          
        {
          //print("JS: QDir.prototype.fromNativeSeparators");
          return this.__PROXY__.fromNativeSeparators(...args);
        };
    
        // function 
        QDir.prototype.cd = function(...args) 
          
        {
          //print("JS: QDir.prototype.cd");
          return this.__PROXY__.cd(...args);
        };
    
        // function 
        QDir.prototype.cdUp = function(...args) 
          
        {
          //print("JS: QDir.prototype.cdUp");
          return this.__PROXY__.cdUp(...args);
        };
    
        // function 
        QDir.prototype.nameFilters = function(...args) 
          
        {
          //print("JS: QDir.prototype.nameFilters");
          return this.__PROXY__.nameFilters(...args);
        };
    
        // function 
        QDir.prototype.setNameFilters = function(...args) 
          
        {
          //print("JS: QDir.prototype.setNameFilters");
          return this.__PROXY__.setNameFilters(...args);
        };
    
        // function 
        QDir.prototype.filter = function(...args) 
          
        {
          //print("JS: QDir.prototype.filter");
          return this.__PROXY__.filter(...args);
        };
    
        // function 
        QDir.prototype.setFilter = function(...args) 
          
        {
          //print("JS: QDir.prototype.setFilter");
          return this.__PROXY__.setFilter(...args);
        };
    
        // function 
        QDir.prototype.sorting = function(...args) 
          
        {
          //print("JS: QDir.prototype.sorting");
          return this.__PROXY__.sorting(...args);
        };
    
        // function 
        QDir.prototype.setSorting = function(...args) 
          
        {
          //print("JS: QDir.prototype.setSorting");
          return this.__PROXY__.setSorting(...args);
        };
    
        // function 
        QDir.prototype.count = function(...args) 
          
        {
          //print("JS: QDir.prototype.count");
          return this.__PROXY__.count(...args);
        };
    
        // function 
        QDir.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QDir.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QDir.prototype.nameFiltersFromString = function(...args) 
          
        {
          //print("JS: QDir.prototype.nameFiltersFromString");
          return this.__PROXY__.nameFiltersFromString(...args);
        };
    
        // function 
        QDir.prototype.entryList = function(...args) 
          
        {
          //print("JS: QDir.prototype.entryList");
          return this.__PROXY__.entryList(...args);
        };
    
        // function 
        QDir.prototype.entryInfoList = function(...args) 
          
        {
          //print("JS: QDir.prototype.entryInfoList");
          return this.__PROXY__.entryInfoList(...args);
        };
    
        // function 
        QDir.prototype.mkdir = function(...args) 
          
        {
          //print("JS: QDir.prototype.mkdir");
          return this.__PROXY__.mkdir(...args);
        };
    
        // function 
        QDir.prototype.rmdir = function(...args) 
          
        {
          //print("JS: QDir.prototype.rmdir");
          return this.__PROXY__.rmdir(...args);
        };
    
        // function 
        QDir.prototype.mkpath = function(...args) 
          
        {
          //print("JS: QDir.prototype.mkpath");
          return this.__PROXY__.mkpath(...args);
        };
    
        // function 
        QDir.prototype.rmpath = function(...args) 
          
        {
          //print("JS: QDir.prototype.rmpath");
          return this.__PROXY__.rmpath(...args);
        };
    
        // function 
        QDir.prototype.removeRecursively = function(...args) 
          
        {
          //print("JS: QDir.prototype.removeRecursively");
          return this.__PROXY__.removeRecursively(...args);
        };
    
        // function 
        QDir.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QDir.prototype.isReadable");
          return this.__PROXY__.isReadable(...args);
        };
    
        // function 
        QDir.prototype.exists = function(...args) 
          
        {
          //print("JS: QDir.prototype.exists");
          return this.__PROXY__.exists(...args);
        };
    
        // function 
        QDir.prototype.isRoot = function(...args) 
          
        {
          //print("JS: QDir.prototype.isRoot");
          return this.__PROXY__.isRoot(...args);
        };
    
        // function 
        QDir.prototype.isRelativePath = function(...args) 
          
        {
          //print("JS: QDir.prototype.isRelativePath");
          return this.__PROXY__.isRelativePath(...args);
        };
    
        // function 
        QDir.prototype.isAbsolutePath = function(...args) 
          
        {
          //print("JS: QDir.prototype.isAbsolutePath");
          return this.__PROXY__.isAbsolutePath(...args);
        };
    
        // function 
        QDir.prototype.isRelative = function(...args) 
          
        {
          //print("JS: QDir.prototype.isRelative");
          return this.__PROXY__.isRelative(...args);
        };
    
        // function 
        QDir.prototype.isAbsolute = function(...args) 
          
        {
          //print("JS: QDir.prototype.isAbsolute");
          return this.__PROXY__.isAbsolute(...args);
        };
    
        // function 
        QDir.prototype.makeAbsolute = function(...args) 
          
        {
          //print("JS: QDir.prototype.makeAbsolute");
          return this.__PROXY__.makeAbsolute(...args);
        };
    
        // function 
        QDir.prototype.remove = function(...args) 
          
        {
          //print("JS: QDir.prototype.remove");
          return this.__PROXY__.remove(...args);
        };
    
        // function 
        QDir.prototype.rename = function(...args) 
          
        {
          //print("JS: QDir.prototype.rename");
          return this.__PROXY__.rename(...args);
        };
    
        // function 
        QDir.prototype.drives = function(...args) 
          
        {
          //print("JS: QDir.prototype.drives");
          return this.__PROXY__.drives(...args);
        };
    
        // function 
        QDir.prototype.listSeparator = function(...args) 
          
        {
          //print("JS: QDir.prototype.listSeparator");
          return this.__PROXY__.listSeparator(...args);
        };
    
        // function 
        QDir.prototype.sep = function(...args) 
          
        {
          //print("JS: QDir.prototype.separator");
          return this.__PROXY__.separator(...args);
        };
    
        // function 
        QDir.prototype.setCurrent = function(...args) 
          
        {
          //print("JS: QDir.prototype.setCurrent");
          return this.__PROXY__.setCurrent(...args);
        };
    
        // function 
        QDir.prototype.current = function(...args) 
          
        {
          //print("JS: QDir.prototype.current");
          return this.__PROXY__.current(...args);
        };
    
        // function 
        QDir.prototype.currentPath = function(...args) 
          
        {
          //print("JS: QDir.prototype.currentPath");
          return this.__PROXY__.currentPath(...args);
        };
    
        // function 
        QDir.prototype.home = function(...args) 
          
        {
          //print("JS: QDir.prototype.home");
          return this.__PROXY__.home(...args);
        };
    
        // function 
        QDir.prototype.homePath = function(...args) 
          
        {
          //print("JS: QDir.prototype.homePath");
          return this.__PROXY__.homePath(...args);
        };
    
        // function 
        QDir.prototype.root = function(...args) 
          
        {
          //print("JS: QDir.prototype.root");
          return this.__PROXY__.root(...args);
        };
    
        // function 
        QDir.prototype.rootPath = function(...args) 
          
        {
          //print("JS: QDir.prototype.rootPath");
          return this.__PROXY__.rootPath(...args);
        };
    
        // function 
        QDir.prototype.temp = function(...args) 
          
        {
          //print("JS: QDir.prototype.temp");
          return this.__PROXY__.temp(...args);
        };
    
        // function 
        QDir.prototype.tempPath = function(...args) 
          
        {
          //print("JS: QDir.prototype.tempPath");
          return this.__PROXY__.tempPath(...args);
        };
    
        // function 
        QDir.prototype.match = function(...args) 
          
        {
          //print("JS: QDir.prototype.match");
          return this.__PROXY__.match(...args);
        };
    
        // function 
        QDir.prototype.cleanPath = function(...args) 
          
        {
          //print("JS: QDir.prototype.cleanPath");
          return this.__PROXY__.cleanPath(...args);
        };
    
        // function 
        QDir.prototype.refresh = function(...args) 
          
        {
          //print("JS: QDir.prototype.refresh");
          return this.__PROXY__.refresh(...args);
        };
    
        // function 
        QDir.prototype.d_func = function(...args) 
          
        {
          //print("JS: QDir.prototype.d_func");
          return this.__PROXY__.d_func(...args);
        };
    

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

      QDir.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      