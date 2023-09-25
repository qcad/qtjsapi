
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
              copyProperties(this, wrapper, QUrl);
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
          

        copyProperties(this, wrapper, QUrl);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
    