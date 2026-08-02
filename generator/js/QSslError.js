
      // auto generated
      //var self;

      // class constructor:
      function QSslError() {
        

        // should be QSslError_BaseJs.call(this, engine):
        //QSslError.prototype = new QSslError_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslError.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QSslError);
                
            //}
          }
          else {
            qWarning("QSslError.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QSslError_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslError);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslError);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslError_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslError);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslError);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslError_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslError);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslError);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslError_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QSslError);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslError);
  }

  
  else {
    
        print("QSslError(): wrong number / type of arguments");
      
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

      //QSslError.prototype = new QSslError_BaseJs(engine);
      //QSslError.prototype = new QSslError_Wrapper(engine);
      QSslError.prototype = new Object();

      QSslError.prototype.toString = function() {
          //return "QSslError [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslError [JS]";
        };
      QSslError.getObjectType = function() {
        return RJSType_QSslError.getIdStatic();
      };

      QSslError.prototype.getObjectType = function() {
        return RJSType_QSslError.getIdStatic();
      };

      QSslError.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslError.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: SslError
QSslError.NoError = QSslError_Wrapper.NoError;
QSslError.UnableToGetIssuerCertificate = QSslError_Wrapper.UnableToGetIssuerCertificate;
QSslError.UnableToDecryptCertificateSignature = QSslError_Wrapper.UnableToDecryptCertificateSignature;
QSslError.UnableToDecodeIssuerPublicKey = QSslError_Wrapper.UnableToDecodeIssuerPublicKey;
QSslError.CertificateSignatureFailed = QSslError_Wrapper.CertificateSignatureFailed;
QSslError.CertificateNotYetValid = QSslError_Wrapper.CertificateNotYetValid;
QSslError.CertificateExpired = QSslError_Wrapper.CertificateExpired;
QSslError.InvalidNotBeforeField = QSslError_Wrapper.InvalidNotBeforeField;
QSslError.InvalidNotAfterField = QSslError_Wrapper.InvalidNotAfterField;
QSslError.SelfSignedCertificate = QSslError_Wrapper.SelfSignedCertificate;
QSslError.SelfSignedCertificateInChain = QSslError_Wrapper.SelfSignedCertificateInChain;
QSslError.UnableToGetLocalIssuerCertificate = QSslError_Wrapper.UnableToGetLocalIssuerCertificate;
QSslError.UnableToVerifyFirstCertificate = QSslError_Wrapper.UnableToVerifyFirstCertificate;
QSslError.CertificateRevoked = QSslError_Wrapper.CertificateRevoked;
QSslError.InvalidCaCertificate = QSslError_Wrapper.InvalidCaCertificate;
QSslError.PathLengthExceeded = QSslError_Wrapper.PathLengthExceeded;
QSslError.InvalidPurpose = QSslError_Wrapper.InvalidPurpose;
QSslError.CertificateUntrusted = QSslError_Wrapper.CertificateUntrusted;
QSslError.CertificateRejected = QSslError_Wrapper.CertificateRejected;
QSslError.SubjectIssuerMismatch = QSslError_Wrapper.SubjectIssuerMismatch;
QSslError.AuthorityIssuerSerialNumberMismatch = QSslError_Wrapper.AuthorityIssuerSerialNumberMismatch;
QSslError.NoPeerCertificate = QSslError_Wrapper.NoPeerCertificate;
QSslError.HostNameMismatch = QSslError_Wrapper.HostNameMismatch;
QSslError.NoSslSupport = QSslError_Wrapper.NoSslSupport;
QSslError.CertificateBlacklisted = QSslError_Wrapper.CertificateBlacklisted;
QSslError.CertificateStatusUnknown = QSslError_Wrapper.CertificateStatusUnknown;
QSslError.OcspNoResponseFound = QSslError_Wrapper.OcspNoResponseFound;
QSslError.OcspMalformedRequest = QSslError_Wrapper.OcspMalformedRequest;
QSslError.OcspMalformedResponse = QSslError_Wrapper.OcspMalformedResponse;
QSslError.OcspInternalError = QSslError_Wrapper.OcspInternalError;
QSslError.OcspTryLater = QSslError_Wrapper.OcspTryLater;
QSslError.OcspSigRequred = QSslError_Wrapper.OcspSigRequred;
QSslError.OcspUnauthorized = QSslError_Wrapper.OcspUnauthorized;
QSslError.OcspResponseCannotBeTrusted = QSslError_Wrapper.OcspResponseCannotBeTrusted;
QSslError.OcspResponseCertIdUnknown = QSslError_Wrapper.OcspResponseCertIdUnknown;
QSslError.OcspResponseExpired = QSslError_Wrapper.OcspResponseExpired;
QSslError.OcspStatusUnknown = QSslError_Wrapper.OcspStatusUnknown;
QSslError.UnspecifiedError = QSslError_Wrapper.UnspecifiedError;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslError.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslError.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      