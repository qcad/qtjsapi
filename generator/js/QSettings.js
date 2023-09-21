
      // auto generated
      //var self;

      // class constructor:
      function QSettings() {
        

        // should be QSettings_BaseJs.call(this, engine):
        //QSettings.prototype = new QSettings_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QSettings_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSettings);
            //}
          }
          else {
            qWarning("QSettings.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSettings);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSettings);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSettings);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSettings);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSettings);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSettings_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSettings);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings(): wrong number / type of arguments");
      
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

      //QSettings.prototype = new QSettings_BaseJs(engine);
      //QSettings.prototype = new QSettings_Wrapper(engine);
      QSettings.prototype = new Object();

      QSettings.prototype.toString = function() {
          //return "QSettings [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSettings [JS]";
        };
      QSettings.getObjectType = function() {
        
            return RJSType.QSettings_Type;
          
      };

      QSettings.prototype.getObjectType = function() {
        
            return RJSType.QSettings_Type;
          
      };

      QSettings.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QSettings_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QSettings_Type, 
          
            RJSType.QObject_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Status
QSettings.NoError = QSettings_Wrapper.NoError;
QSettings.AccessError = QSettings_Wrapper.AccessError;
QSettings.FormatError = QSettings_Wrapper.FormatError;

  // enum: Format
QSettings.NativeFormat = QSettings_Wrapper.NativeFormat;
QSettings.IniFormat = QSettings_Wrapper.IniFormat;
QSettings.InvalidFormat = QSettings_Wrapper.InvalidFormat;
QSettings.CustomFormat1 = QSettings_Wrapper.CustomFormat1;
QSettings.CustomFormat2 = QSettings_Wrapper.CustomFormat2;
QSettings.CustomFormat3 = QSettings_Wrapper.CustomFormat3;
QSettings.CustomFormat4 = QSettings_Wrapper.CustomFormat4;
QSettings.CustomFormat5 = QSettings_Wrapper.CustomFormat5;
QSettings.CustomFormat6 = QSettings_Wrapper.CustomFormat6;
QSettings.CustomFormat7 = QSettings_Wrapper.CustomFormat7;
QSettings.CustomFormat8 = QSettings_Wrapper.CustomFormat8;
QSettings.CustomFormat9 = QSettings_Wrapper.CustomFormat9;
QSettings.CustomFormat10 = QSettings_Wrapper.CustomFormat10;
QSettings.CustomFormat11 = QSettings_Wrapper.CustomFormat11;
QSettings.CustomFormat12 = QSettings_Wrapper.CustomFormat12;
QSettings.CustomFormat13 = QSettings_Wrapper.CustomFormat13;
QSettings.CustomFormat14 = QSettings_Wrapper.CustomFormat14;
QSettings.CustomFormat15 = QSettings_Wrapper.CustomFormat15;
QSettings.CustomFormat16 = QSettings_Wrapper.CustomFormat16;

  // enum: Scope
QSettings.UserScope = QSettings_Wrapper.UserScope;
QSettings.SystemScope = QSettings_Wrapper.SystemScope;


      // functions:
      

      // static functions:
      

        // static function 
        QSettings.tr = function() 
          
        {
          //print("JS: QSettings.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QSettings_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSettings.setDefaultFormat = function() 
          
        {
          //print("JS: QSettings.setDefaultFormat");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSettings_WrapperSingletonInstance.setDefaultFormat(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings.setDefaultFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSettings.defaultFormat = function() 
          
        {
          //print("JS: QSettings.defaultFormat");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSettings_WrapperSingletonInstance.defaultFormat(
                  
                );
              

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings.defaultFormat(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSettings.setPath = function() 
          
        {
          //print("JS: QSettings.setPath");
          
      if (arguments.length == 3) {
    
                // calling static wrapper:
                return QSettings_WrapperSingletonInstance.setPath(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSettings);
  }

  
  else {
    
        print("QSettings.setPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSettings.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSettings.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    