
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QSslCertificate.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.swap = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.equals = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.isNull = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.isBlacklisted = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.isBlacklisted");
          
              return this.__PROXY__.isBlacklisted(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.isSelfSigned = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.isSelfSigned");
          
              return this.__PROXY__.isSelfSigned(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.clear = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.version = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.version");
          
              return this.__PROXY__.version(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.serialNumber = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.serialNumber");
          
              return this.__PROXY__.serialNumber(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.digest = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.digest");
          
              return this.__PROXY__.digest(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.issuerInfo = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.issuerInfo");
          
              return this.__PROXY__.issuerInfo(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.subjectInfo = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.subjectInfo");
          
              return this.__PROXY__.subjectInfo(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.issuerDisplayName = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.issuerDisplayName");
          
              return this.__PROXY__.issuerDisplayName(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.subjectDisplayName = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.subjectDisplayName");
          
              return this.__PROXY__.subjectDisplayName(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.subjectInfoAttributes = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.subjectInfoAttributes");
          
              return this.__PROXY__.subjectInfoAttributes(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.issuerInfoAttributes = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.issuerInfoAttributes");
          
              return this.__PROXY__.issuerInfoAttributes(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.effectiveDate = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.effectiveDate");
          
              return this.__PROXY__.effectiveDate(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.expiryDate = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.expiryDate");
          
              return this.__PROXY__.expiryDate(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.publicKey = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.publicKey");
          
              return this.__PROXY__.publicKey(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.extensions = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.extensions");
          
              return this.__PROXY__.extensions(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.toPem = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.toPem");
          
              return this.__PROXY__.toPem(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.toDer = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.toDer");
          
              return this.__PROXY__.toDer(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.toText = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.toText");
          
              return this.__PROXY__.toText(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.fromPath = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.fromPath");
          
              return this.__PROXY__.fromPath(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.fromDevice = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.fromDevice");
          
              return this.__PROXY__.fromDevice(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.fromData = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.fromData");
          
              return this.__PROXY__.fromData(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.fromFile = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.fromFile");
          
              return this.__PROXY__.fromFile(...args);
            
        };
    
        // function 
        QSslCertificate.prototype.verify = function(...args) 
          
        {
          //print("JS: QSslCertificate.prototype.verify");
          
              return this.__PROXY__.verify(...args);
            
        };
    

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
      QSslCertificate.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslCertificate.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslCertificate.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QSslCertificate.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      