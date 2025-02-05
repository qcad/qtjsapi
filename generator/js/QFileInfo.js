
      // auto generated
      //var self;

      // class constructor:
      function QFileInfo() {
        

        // should be QFileInfo_BaseJs.call(this, engine):
        //QFileInfo.prototype = new QFileInfo_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFileInfo.getIdStatic()))) {

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
            qWarning("QFileInfo.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
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

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
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

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
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

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QFileInfo_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFileInfo);
  }

  
  else {
    
        print("QFileInfo(): wrong number / type of arguments");
      
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

      //QFileInfo.prototype = new QFileInfo_BaseJs(engine);
      //QFileInfo.prototype = new QFileInfo_Wrapper(engine);
      QFileInfo.prototype = new Object();

      QFileInfo.prototype.toString = function() {
          //return "QFileInfo [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFileInfo [JS]";
        };
      QFileInfo.getObjectType = function() {
        return RJSType_QFileInfo.getIdStatic();
      };

      QFileInfo.prototype.getObjectType = function() {
        return RJSType_QFileInfo.getIdStatic();
      };

      QFileInfo.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFileInfo.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QFileInfo.prototype.swap = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QFileInfo.prototype.setFile = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.setFile");
          return this.__PROXY__.setFile(...args);
        };
    
        // function 
        QFileInfo.prototype.exists = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.exists");
          return this.__PROXY__.exists(...args);
        };
    
        // function 
        QFileInfo.prototype.refresh = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.refresh");
          return this.__PROXY__.refresh(...args);
        };
    
        // function 
        QFileInfo.prototype.filePath = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.filePath");
          return this.__PROXY__.filePath(...args);
        };
    
        // function 
        QFileInfo.prototype.absoluteFilePath = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.absoluteFilePath");
          return this.__PROXY__.absoluteFilePath(...args);
        };
    
        // function 
        QFileInfo.prototype.canonicalFilePath = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.canonicalFilePath");
          return this.__PROXY__.canonicalFilePath(...args);
        };
    
        // function 
        QFileInfo.prototype.fileName = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.fileName");
          return this.__PROXY__.fileName(...args);
        };
    
        // function 
        QFileInfo.prototype.baseName = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.baseName");
          return this.__PROXY__.baseName(...args);
        };
    
        // function 
        QFileInfo.prototype.completeBaseName = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.completeBaseName");
          return this.__PROXY__.completeBaseName(...args);
        };
    
        // function 
        QFileInfo.prototype.suffix = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.suffix");
          return this.__PROXY__.suffix(...args);
        };
    
        // function 
        QFileInfo.prototype.bundleName = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.bundleName");
          return this.__PROXY__.bundleName(...args);
        };
    
        // function 
        QFileInfo.prototype.completeSuffix = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.completeSuffix");
          return this.__PROXY__.completeSuffix(...args);
        };
    
        // function 
        QFileInfo.prototype.path = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.path");
          return this.__PROXY__.path(...args);
        };
    
        // function 
        QFileInfo.prototype.absolutePath = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.absolutePath");
          return this.__PROXY__.absolutePath(...args);
        };
    
        // function 
        QFileInfo.prototype.canonicalPath = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.canonicalPath");
          return this.__PROXY__.canonicalPath(...args);
        };
    
        // function 
        QFileInfo.prototype.dir = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.dir");
          return this.__PROXY__.dir(...args);
        };
    
        // function 
        QFileInfo.prototype.absoluteDir = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.absoluteDir");
          return this.__PROXY__.absoluteDir(...args);
        };
    
        // function 
        QFileInfo.prototype.isReadable = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isReadable");
          return this.__PROXY__.isReadable(...args);
        };
    
        // function 
        QFileInfo.prototype.isWritable = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isWritable");
          return this.__PROXY__.isWritable(...args);
        };
    
        // function 
        QFileInfo.prototype.isExecutable = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isExecutable");
          return this.__PROXY__.isExecutable(...args);
        };
    
        // function 
        QFileInfo.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isHidden");
          return this.__PROXY__.isHidden(...args);
        };
    
        // function 
        QFileInfo.prototype.isNativePath = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isNativePath");
          return this.__PROXY__.isNativePath(...args);
        };
    
        // function 
        QFileInfo.prototype.isRelative = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isRelative");
          return this.__PROXY__.isRelative(...args);
        };
    
        // function 
        QFileInfo.prototype.isAbsolute = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isAbsolute");
          return this.__PROXY__.isAbsolute(...args);
        };
    
        // function 
        QFileInfo.prototype.makeAbsolute = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.makeAbsolute");
          return this.__PROXY__.makeAbsolute(...args);
        };
    
        // function 
        QFileInfo.prototype.isFile = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isFile");
          return this.__PROXY__.isFile(...args);
        };
    
        // function 
        QFileInfo.prototype.isDir = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isDir");
          return this.__PROXY__.isDir(...args);
        };
    
        // function 
        QFileInfo.prototype.isSymLink = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isSymLink");
          return this.__PROXY__.isSymLink(...args);
        };
    
        // function 
        QFileInfo.prototype.isSymbolicLink = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isSymbolicLink");
          return this.__PROXY__.isSymbolicLink(...args);
        };
    
        // function 
        QFileInfo.prototype.isShortcut = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isShortcut");
          return this.__PROXY__.isShortcut(...args);
        };
    
        // function 
        QFileInfo.prototype.isJunction = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isJunction");
          return this.__PROXY__.isJunction(...args);
        };
    
        // function 
        QFileInfo.prototype.isRoot = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isRoot");
          return this.__PROXY__.isRoot(...args);
        };
    
        // function 
        QFileInfo.prototype.isBundle = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.isBundle");
          return this.__PROXY__.isBundle(...args);
        };
    
        // function 
        QFileInfo.prototype.symLinkTarget = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.symLinkTarget");
          return this.__PROXY__.symLinkTarget(...args);
        };
    
        // function 
        QFileInfo.prototype.owner = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.owner");
          return this.__PROXY__.owner(...args);
        };
    
        // function 
        QFileInfo.prototype.ownerId = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.ownerId");
          return this.__PROXY__.ownerId(...args);
        };
    
        // function 
        QFileInfo.prototype.group = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.group");
          return this.__PROXY__.group(...args);
        };
    
        // function 
        QFileInfo.prototype.groupId = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.groupId");
          return this.__PROXY__.groupId(...args);
        };
    
        // function 
        QFileInfo.prototype.permission = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.permission");
          return this.__PROXY__.permission(...args);
        };
    
        // function 
        QFileInfo.prototype.permissions = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.permissions");
          return this.__PROXY__.permissions(...args);
        };
    
        // function 
        QFileInfo.prototype.size = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.size");
          return this.__PROXY__.size(...args);
        };
    
        // function 
        QFileInfo.prototype.birthTime = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.birthTime");
          return this.__PROXY__.birthTime(...args);
        };
    
        // function 
        QFileInfo.prototype.metadataChangeTime = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.metadataChangeTime");
          return this.__PROXY__.metadataChangeTime(...args);
        };
    
        // function 
        QFileInfo.prototype.lastModified = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.lastModified");
          return this.__PROXY__.lastModified(...args);
        };
    
        // function 
        QFileInfo.prototype.lastRead = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.lastRead");
          return this.__PROXY__.lastRead(...args);
        };
    
        // function 
        QFileInfo.prototype.fileTime = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.fileTime");
          return this.__PROXY__.fileTime(...args);
        };
    
        // function 
        QFileInfo.prototype.caching = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.caching");
          return this.__PROXY__.caching(...args);
        };
    
        // function 
        QFileInfo.prototype.setCaching = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.setCaching");
          return this.__PROXY__.setCaching(...args);
        };
    
        // function 
        QFileInfo.prototype.stat = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.stat");
          return this.__PROXY__.stat(...args);
        };
    
        // function 
        QFileInfo.prototype.d_func = function(...args) 
          
        {
          //print("JS: QFileInfo.prototype.d_func");
          return this.__PROXY__.d_func(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFileInfo.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFileInfo.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFileInfo.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      