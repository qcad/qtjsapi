
      // auto generated
      //var self;

      // class constructor:
      function QSslCertificate() {
        

        // should be QSslCertificate_BaseJs.call(this, engine):
        //QSslCertificate.prototype = new QSslCertificate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslCertificate.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslCertificate);
                
            //}
          }
          else {
            qWarning("QSslCertificate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSslCertificate_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslCertificate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSslCertificate_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslCertificate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslCertificate_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslCertificate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslCertificate_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslCertificate);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else {
    
        print("QSslCertificate(): wrong number / type of arguments");
      
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

      //QSslCertificate.prototype = new QSslCertificate_BaseJs(engine);
      //QSslCertificate.prototype = new QSslCertificate_Wrapper(engine);
      QSslCertificate.prototype = new Object();

      QSslCertificate.prototype.toString = function() {
          //return "QSslCertificate [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslCertificate [JS]";
        };
      QSslCertificate.getObjectType = function() {
        return RJSType_QSslCertificate.getIdStatic();
      };

      QSslCertificate.prototype.getObjectType = function() {
        return RJSType_QSslCertificate.getIdStatic();
      };

      QSslCertificate.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslCertificate.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: SubjectInfo
QSslCertificate.Organization = QSslCertificate_Wrapper.Organization;
QSslCertificate.CommonName = QSslCertificate_Wrapper.CommonName;
QSslCertificate.LocalityName = QSslCertificate_Wrapper.LocalityName;
QSslCertificate.OrganizationalUnitName = QSslCertificate_Wrapper.OrganizationalUnitName;
QSslCertificate.CountryName = QSslCertificate_Wrapper.CountryName;
QSslCertificate.StateOrProvinceName = QSslCertificate_Wrapper.StateOrProvinceName;
QSslCertificate.DistinguishedNameQualifier = QSslCertificate_Wrapper.DistinguishedNameQualifier;
QSslCertificate.SerialNumber = QSslCertificate_Wrapper.SerialNumber;
QSslCertificate.EmailAddress = QSslCertificate_Wrapper.EmailAddress;


      // functions:
      

      // static functions:
      

        // static function 
        QSslCertificate.fromPath = function() 
          
        {
          //print("JS: QSslCertificate.fromPath");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QSslCertificate_WrapperSingletonInstance.fromPath(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else {
    
        print("QSslCertificate.fromPath(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslCertificate.fromDevice = function() 
          
        {
          //print("JS: QSslCertificate.fromDevice");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QSslCertificate_WrapperSingletonInstance.fromDevice(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else {
    
        print("QSslCertificate.fromDevice(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslCertificate.fromData = function() 
          
        {
          //print("JS: QSslCertificate.fromData");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QSslCertificate_WrapperSingletonInstance.fromData(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else {
    
        print("QSslCertificate.fromData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslCertificate.fromFile = function() 
          
        {
          //print("JS: QSslCertificate.fromFile");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QSslCertificate_WrapperSingletonInstance.fromFile(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else {
    
        print("QSslCertificate.fromFile(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslCertificate.verify = function() 
          
        {
          //print("JS: QSslCertificate.verify");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QSslCertificate_WrapperSingletonInstance.verify(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSslCertificate);
  }

  
  else {
    
        print("QSslCertificate.verify(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslCertificate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslCertificate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      