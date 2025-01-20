
      // auto generated
      //var self;

      // class constructor:
      function QIcon() {
        

        // should be QIcon_BaseJs.call(this, engine):
        //QIcon.prototype = new QIcon_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QIcon.getIdStatic()))) {

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
            qWarning("QIcon.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QIcon_Wrapper(
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

      

        //copyProperties(this, wrapper, QIcon);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QIcon_Wrapper(
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

      

        //copyProperties(this, wrapper, QIcon);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QIcon_Wrapper(
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

      

        //copyProperties(this, wrapper, QIcon);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QIcon_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon(): wrong number / type of arguments");
      
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

      //QIcon.prototype = new QIcon_BaseJs(engine);
      //QIcon.prototype = new QIcon_Wrapper(engine);
      QIcon.prototype = new Object();

      QIcon.prototype.toString = function() {
          //return "QIcon [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QIcon [JS]";
        };
      QIcon.getObjectType = function() {
        return RJSType_QIcon.getIdStatic();
      };

      QIcon.prototype.getObjectType = function() {
        return RJSType_QIcon.getIdStatic();
      };

      QIcon.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QIcon.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Mode
QIcon.Normal = QIcon_Wrapper.Normal;
QIcon.Disabled = QIcon_Wrapper.Disabled;
QIcon.Active = QIcon_Wrapper.Active;
QIcon.Selected = QIcon_Wrapper.Selected;

  // enum: State
QIcon.On = QIcon_Wrapper.On;
QIcon.Off = QIcon_Wrapper.Off;


      // functions:
      
        // function 
        QIcon.prototype.swap = function(...args) 
          
        {
          //print("JS: QIcon.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QIcon.prototype.pixmap = function(...args) 
          
        {
          //print("JS: QIcon.prototype.pixmap");
          return this.__PROXY__.pixmap(...args);
        };
    
        // function 
        QIcon.prototype.actualSize = function(...args) 
          
        {
          //print("JS: QIcon.prototype.actualSize");
          return this.__PROXY__.actualSize(...args);
        };
    
        // function 
        QIcon.prototype.name = function(...args) 
          
        {
          //print("JS: QIcon.prototype.name");
          return this.__PROXY__.name(...args);
        };
    
        // function 
        QIcon.prototype.paint = function(...args) 
          
        {
          //print("JS: QIcon.prototype.paint");
          return this.__PROXY__.paint(...args);
        };
    
        // function 
        QIcon.prototype.isNull = function(...args) 
          
        {
          //print("JS: QIcon.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QIcon.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QIcon.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QIcon.prototype.detach = function(...args) 
          
        {
          //print("JS: QIcon.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QIcon.prototype.cacheKey = function(...args) 
          
        {
          //print("JS: QIcon.prototype.cacheKey");
          return this.__PROXY__.cacheKey(...args);
        };
    
        // function 
        QIcon.prototype.addPixmap = function(...args) 
          
        {
          //print("JS: QIcon.prototype.addPixmap");
          return this.__PROXY__.addPixmap(...args);
        };
    
        // function 
        QIcon.prototype.addFile = function(...args) 
          
        {
          //print("JS: QIcon.prototype.addFile");
          return this.__PROXY__.addFile(...args);
        };
    
        // function 
        QIcon.prototype.availableSizes = function(...args) 
          
        {
          //print("JS: QIcon.prototype.availableSizes");
          return this.__PROXY__.availableSizes(...args);
        };
    
        // function 
        QIcon.prototype.setIsMask = function(...args) 
          
        {
          //print("JS: QIcon.prototype.setIsMask");
          return this.__PROXY__.setIsMask(...args);
        };
    
        // function 
        QIcon.prototype.isMask = function(...args) 
          
        {
          //print("JS: QIcon.prototype.isMask");
          return this.__PROXY__.isMask(...args);
        };
    
        // function 
        QIcon.prototype.fromTheme = function(...args) 
          
        {
          //print("JS: QIcon.prototype.fromTheme");
          return this.__PROXY__.fromTheme(...args);
        };
    
        // function 
        QIcon.prototype.hasThemeIcon = function(...args) 
          
        {
          //print("JS: QIcon.prototype.hasThemeIcon");
          return this.__PROXY__.hasThemeIcon(...args);
        };
    
        // function 
        QIcon.prototype.themeSearchPaths = function(...args) 
          
        {
          //print("JS: QIcon.prototype.themeSearchPaths");
          return this.__PROXY__.themeSearchPaths(...args);
        };
    
        // function 
        QIcon.prototype.setThemeSearchPaths = function(...args) 
          
        {
          //print("JS: QIcon.prototype.setThemeSearchPaths");
          return this.__PROXY__.setThemeSearchPaths(...args);
        };
    
        // function 
        QIcon.prototype.fallbackSearchPaths = function(...args) 
          
        {
          //print("JS: QIcon.prototype.fallbackSearchPaths");
          return this.__PROXY__.fallbackSearchPaths(...args);
        };
    
        // function 
        QIcon.prototype.setFallbackSearchPaths = function(...args) 
          
        {
          //print("JS: QIcon.prototype.setFallbackSearchPaths");
          return this.__PROXY__.setFallbackSearchPaths(...args);
        };
    
        // function 
        QIcon.prototype.themeName = function(...args) 
          
        {
          //print("JS: QIcon.prototype.themeName");
          return this.__PROXY__.themeName(...args);
        };
    
        // function 
        QIcon.prototype.setThemeName = function(...args) 
          
        {
          //print("JS: QIcon.prototype.setThemeName");
          return this.__PROXY__.setThemeName(...args);
        };
    
        // function 
        QIcon.prototype.fallbackThemeName = function(...args) 
          
        {
          //print("JS: QIcon.prototype.fallbackThemeName");
          return this.__PROXY__.fallbackThemeName(...args);
        };
    
        // function 
        QIcon.prototype.setFallbackThemeName = function(...args) 
          
        {
          //print("JS: QIcon.prototype.setFallbackThemeName");
          return this.__PROXY__.setFallbackThemeName(...args);
        };
    

      // static functions:
      

        // static function 
        QIcon.fromTheme = function() 
          
        {
          //print("JS: QIcon.fromTheme");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.fromTheme(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.fromTheme(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.fromTheme(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.hasThemeIcon = function() 
          
        {
          //print("JS: QIcon.hasThemeIcon");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.hasThemeIcon(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.hasThemeIcon(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.themeSearchPaths = function() 
          
        {
          //print("JS: QIcon.themeSearchPaths");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.themeSearchPaths(
                  
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.themeSearchPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.setThemeSearchPaths = function() 
          
        {
          //print("JS: QIcon.setThemeSearchPaths");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.setThemeSearchPaths(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.setThemeSearchPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.fallbackSearchPaths = function() 
          
        {
          //print("JS: QIcon.fallbackSearchPaths");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.fallbackSearchPaths(
                  
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.fallbackSearchPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.setFallbackSearchPaths = function() 
          
        {
          //print("JS: QIcon.setFallbackSearchPaths");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.setFallbackSearchPaths(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.setFallbackSearchPaths(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.themeName = function() 
          
        {
          //print("JS: QIcon.themeName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.themeName(
                  
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.themeName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.setThemeName = function() 
          
        {
          //print("JS: QIcon.setThemeName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.setThemeName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.setThemeName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.fallbackThemeName = function() 
          
        {
          //print("JS: QIcon.fallbackThemeName");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.fallbackThemeName(
                  
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.fallbackThemeName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QIcon.setFallbackThemeName = function() 
          
        {
          //print("JS: QIcon.setFallbackThemeName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QIcon_WrapperSingletonInstance.setFallbackThemeName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QIcon);
  }

  
  else {
    
        print("QIcon.setFallbackThemeName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QIcon.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QIcon.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QIcon.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      