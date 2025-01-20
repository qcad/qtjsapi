
      // auto generated
      //var self;

      // class constructor:
      function QUrl() {
        

        // should be QUrl_BaseJs.call(this, engine):
        //QUrl.prototype = new QUrl_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QUrl.getIdStatic()))) {

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
            qWarning("QUrl.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QUrl_Wrapper(
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

      

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl(): wrong number / type of arguments");
      
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

      //QUrl.prototype = new QUrl_BaseJs(engine);
      //QUrl.prototype = new QUrl_Wrapper(engine);
      QUrl.prototype = new Object();

      QUrl.getObjectType = function() {
        return RJSType_QUrl.getIdStatic();
      };

      QUrl.prototype.getObjectType = function() {
        return RJSType_QUrl.getIdStatic();
      };

      QUrl.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QUrl.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ParsingMode
QUrl.TolerantMode = QUrl_Wrapper.TolerantMode;
QUrl.StrictMode = QUrl_Wrapper.StrictMode;
QUrl.DecodedMode = QUrl_Wrapper.DecodedMode;

  // enum: UrlFormattingOption
QUrl.None = QUrl_Wrapper.None;
QUrl.RemoveScheme = QUrl_Wrapper.RemoveScheme;
QUrl.RemovePassword = QUrl_Wrapper.RemovePassword;
QUrl.RemoveUserInfo = QUrl_Wrapper.RemoveUserInfo;
QUrl.RemovePort = QUrl_Wrapper.RemovePort;
QUrl.RemoveAuthority = QUrl_Wrapper.RemoveAuthority;
QUrl.RemovePath = QUrl_Wrapper.RemovePath;
QUrl.RemoveQuery = QUrl_Wrapper.RemoveQuery;
QUrl.RemoveFragment = QUrl_Wrapper.RemoveFragment;
QUrl.PreferLocalFile = QUrl_Wrapper.PreferLocalFile;
QUrl.StripTrailingSlash = QUrl_Wrapper.StripTrailingSlash;
QUrl.RemoveFilename = QUrl_Wrapper.RemoveFilename;
QUrl.NormalizePathSegments = QUrl_Wrapper.NormalizePathSegments;

  // enum: ComponentFormattingOption
QUrl.PrettyDecoded = QUrl_Wrapper.PrettyDecoded;
QUrl.EncodeSpaces = QUrl_Wrapper.EncodeSpaces;
QUrl.EncodeUnicode = QUrl_Wrapper.EncodeUnicode;
QUrl.EncodeDelimiters = QUrl_Wrapper.EncodeDelimiters;
QUrl.EncodeReserved = QUrl_Wrapper.EncodeReserved;
QUrl.DecodeReserved = QUrl_Wrapper.DecodeReserved;
QUrl.FullyEncoded = QUrl_Wrapper.FullyEncoded;
QUrl.FullyDecoded = QUrl_Wrapper.FullyDecoded;

  // enum: UserInputResolutionOption
QUrl.DefaultResolution = QUrl_Wrapper.DefaultResolution;
QUrl.AssumeLocalFile = QUrl_Wrapper.AssumeLocalFile;


      // functions:
      
        // function 
        QUrl.prototype.setUrl = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setUrl");
          return this.__PROXY__.setUrl(...args);
        };
    
        // function 
        QUrl.prototype.url = function(...args) 
          
        {
          //print("JS: QUrl.prototype.url");
          return this.__PROXY__.url(...args);
        };
    
        // function 
        QUrl.prototype.toString = function(...args) 
          
        {
          //print("JS: QUrl.prototype.toString");
          return this.__PROXY__.toString(...args);
        };
    
        // function 
        QUrl.prototype.toDisplayString = function(...args) 
          
        {
          //print("JS: QUrl.prototype.toDisplayString");
          return this.__PROXY__.toDisplayString(...args);
        };
    
        // function 
        QUrl.prototype.adjusted = function(...args) 
          
        {
          //print("JS: QUrl.prototype.adjusted");
          return this.__PROXY__.adjusted(...args);
        };
    
        // function 
        QUrl.prototype.toEncoded = function(...args) 
          
        {
          //print("JS: QUrl.prototype.toEncoded");
          return this.__PROXY__.toEncoded(...args);
        };
    
        // function 
        QUrl.prototype.fromEncoded = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fromEncoded");
          return this.__PROXY__.fromEncoded(...args);
        };
    
        // function 
        QUrl.prototype.fromUserInput = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fromUserInput");
          return this.__PROXY__.fromUserInput(...args);
        };
    
        // function 
        QUrl.prototype.isValid = function(...args) 
          
        {
          //print("JS: QUrl.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QUrl.prototype.errorString = function(...args) 
          
        {
          //print("JS: QUrl.prototype.errorString");
          return this.__PROXY__.errorString(...args);
        };
    
        // function 
        QUrl.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QUrl.prototype.isEmpty");
          return this.__PROXY__.isEmpty(...args);
        };
    
        // function 
        QUrl.prototype.clear = function(...args) 
          
        {
          //print("JS: QUrl.prototype.clear");
          return this.__PROXY__.clear(...args);
        };
    
        // function 
        QUrl.prototype.setScheme = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setScheme");
          return this.__PROXY__.setScheme(...args);
        };
    
        // function 
        QUrl.prototype.scheme = function(...args) 
          
        {
          //print("JS: QUrl.prototype.scheme");
          return this.__PROXY__.scheme(...args);
        };
    
        // function 
        QUrl.prototype.setAuthority = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setAuthority");
          return this.__PROXY__.setAuthority(...args);
        };
    
        // function 
        QUrl.prototype.authority = function(...args) 
          
        {
          //print("JS: QUrl.prototype.authority");
          return this.__PROXY__.authority(...args);
        };
    
        // function 
        QUrl.prototype.setUserInfo = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setUserInfo");
          return this.__PROXY__.setUserInfo(...args);
        };
    
        // function 
        QUrl.prototype.userInfo = function(...args) 
          
        {
          //print("JS: QUrl.prototype.userInfo");
          return this.__PROXY__.userInfo(...args);
        };
    
        // function 
        QUrl.prototype.setUserName = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setUserName");
          return this.__PROXY__.setUserName(...args);
        };
    
        // function 
        QUrl.prototype.userName = function(...args) 
          
        {
          //print("JS: QUrl.prototype.userName");
          return this.__PROXY__.userName(...args);
        };
    
        // function 
        QUrl.prototype.setPassword = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setPassword");
          return this.__PROXY__.setPassword(...args);
        };
    
        // function 
        QUrl.prototype.password = function(...args) 
          
        {
          //print("JS: QUrl.prototype.password");
          return this.__PROXY__.password(...args);
        };
    
        // function 
        QUrl.prototype.setHost = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setHost");
          return this.__PROXY__.setHost(...args);
        };
    
        // function 
        QUrl.prototype.host = function(...args) 
          
        {
          //print("JS: QUrl.prototype.host");
          return this.__PROXY__.host(...args);
        };
    
        // function 
        QUrl.prototype.setPort = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setPort");
          return this.__PROXY__.setPort(...args);
        };
    
        // function 
        QUrl.prototype.port = function(...args) 
          
        {
          //print("JS: QUrl.prototype.port");
          return this.__PROXY__.port(...args);
        };
    
        // function 
        QUrl.prototype.setPath = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setPath");
          return this.__PROXY__.setPath(...args);
        };
    
        // function 
        QUrl.prototype.path = function(...args) 
          
        {
          //print("JS: QUrl.prototype.path");
          return this.__PROXY__.path(...args);
        };
    
        // function 
        QUrl.prototype.fileName = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fileName");
          return this.__PROXY__.fileName(...args);
        };
    
        // function 
        QUrl.prototype.hasQuery = function(...args) 
          
        {
          //print("JS: QUrl.prototype.hasQuery");
          return this.__PROXY__.hasQuery(...args);
        };
    
        // function 
        QUrl.prototype.setQuery = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setQuery");
          return this.__PROXY__.setQuery(...args);
        };
    
        // function 
        QUrl.prototype.query = function(...args) 
          
        {
          //print("JS: QUrl.prototype.query");
          return this.__PROXY__.query(...args);
        };
    
        // function 
        QUrl.prototype.hasFragment = function(...args) 
          
        {
          //print("JS: QUrl.prototype.hasFragment");
          return this.__PROXY__.hasFragment(...args);
        };
    
        // function 
        QUrl.prototype.fragment = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fragment");
          return this.__PROXY__.fragment(...args);
        };
    
        // function 
        QUrl.prototype.setFragment = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setFragment");
          return this.__PROXY__.setFragment(...args);
        };
    
        // function 
        QUrl.prototype.resolved = function(...args) 
          
        {
          //print("JS: QUrl.prototype.resolved");
          return this.__PROXY__.resolved(...args);
        };
    
        // function 
        QUrl.prototype.isRelative = function(...args) 
          
        {
          //print("JS: QUrl.prototype.isRelative");
          return this.__PROXY__.isRelative(...args);
        };
    
        // function 
        QUrl.prototype.isParentOf = function(...args) 
          
        {
          //print("JS: QUrl.prototype.isParentOf");
          return this.__PROXY__.isParentOf(...args);
        };
    
        // function 
        QUrl.prototype.isLocalFile = function(...args) 
          
        {
          //print("JS: QUrl.prototype.isLocalFile");
          return this.__PROXY__.isLocalFile(...args);
        };
    
        // function 
        QUrl.prototype.fromLocalFile = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fromLocalFile");
          return this.__PROXY__.fromLocalFile(...args);
        };
    
        // function 
        QUrl.prototype.toLocalFile = function(...args) 
          
        {
          //print("JS: QUrl.prototype.toLocalFile");
          return this.__PROXY__.toLocalFile(...args);
        };
    
        // function 
        QUrl.prototype.detach = function(...args) 
          
        {
          //print("JS: QUrl.prototype.detach");
          return this.__PROXY__.detach(...args);
        };
    
        // function 
        QUrl.prototype.isDetached = function(...args) 
          
        {
          //print("JS: QUrl.prototype.isDetached");
          return this.__PROXY__.isDetached(...args);
        };
    
        // function 
        QUrl.prototype.matches = function(...args) 
          
        {
          //print("JS: QUrl.prototype.matches");
          return this.__PROXY__.matches(...args);
        };
    
        // function 
        QUrl.prototype.fromPercentEncoding = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fromPercentEncoding");
          return this.__PROXY__.fromPercentEncoding(...args);
        };
    
        // function 
        QUrl.prototype.toPercentEncoding = function(...args) 
          
        {
          //print("JS: QUrl.prototype.toPercentEncoding");
          return this.__PROXY__.toPercentEncoding(...args);
        };
    
        // function 
        QUrl.prototype.fromAce = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fromAce");
          return this.__PROXY__.fromAce(...args);
        };
    
        // function 
        QUrl.prototype.toAce = function(...args) 
          
        {
          //print("JS: QUrl.prototype.toAce");
          return this.__PROXY__.toAce(...args);
        };
    
        // function 
        QUrl.prototype.idnWhitelist = function(...args) 
          
        {
          //print("JS: QUrl.prototype.idnWhitelist");
          return this.__PROXY__.idnWhitelist(...args);
        };
    
        // function 
        QUrl.prototype.toStringList = function(...args) 
          
        {
          //print("JS: QUrl.prototype.toStringList");
          return this.__PROXY__.toStringList(...args);
        };
    
        // function 
        QUrl.prototype.fromStringList = function(...args) 
          
        {
          //print("JS: QUrl.prototype.fromStringList");
          return this.__PROXY__.fromStringList(...args);
        };
    
        // function 
        QUrl.prototype.setIdnWhitelist = function(...args) 
          
        {
          //print("JS: QUrl.prototype.setIdnWhitelist");
          return this.__PROXY__.setIdnWhitelist(...args);
        };
    

      // static functions:
      

        // static function 
        QUrl.fromEncoded = function() 
          
        {
          //print("JS: QUrl.fromEncoded");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.fromEncoded(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.fromEncoded(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.fromUserInput = function() 
          
        {
          //print("JS: QUrl.fromUserInput");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.fromUserInput(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.fromUserInput(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.fromLocalFile = function() 
          
        {
          //print("JS: QUrl.fromLocalFile");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.fromLocalFile(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.fromLocalFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.fromPercentEncoding = function() 
          
        {
          //print("JS: QUrl.fromPercentEncoding");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.fromPercentEncoding(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.fromPercentEncoding(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.toPercentEncoding = function() 
          
        {
          //print("JS: QUrl.toPercentEncoding");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.toPercentEncoding(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.toPercentEncoding(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.fromAce = function() 
          
        {
          //print("JS: QUrl.fromAce");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.fromAce(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.fromAce(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.toAce = function() 
          
        {
          //print("JS: QUrl.toAce");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.toAce(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.toAce(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.idnWhitelist = function() 
          
        {
          //print("JS: QUrl.idnWhitelist");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.idnWhitelist(
                  
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.idnWhitelist(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.toStringList = function() 
          
        {
          //print("JS: QUrl.toStringList");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.toStringList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.toStringList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.fromStringList = function() 
          
        {
          //print("JS: QUrl.fromStringList");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.fromStringList(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.fromStringList(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QUrl.setIdnWhitelist = function() 
          
        {
          //print("JS: QUrl.setIdnWhitelist");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QUrl_WrapperSingletonInstance.setIdnWhitelist(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QUrl);
  }

  
  else {
    
        print("QUrl.setIdnWhitelist(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QUrl.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QUrl.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QUrl.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      