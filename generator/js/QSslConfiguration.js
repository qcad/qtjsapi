
      // auto generated
      //var self;

      // class constructor:
      function QSslConfiguration() {
        

        // should be QSslConfiguration_BaseJs.call(this, engine):
        //QSslConfiguration.prototype = new QSslConfiguration_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslConfiguration.getIdStatic()))) {

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
            qWarning("QSslConfiguration.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslConfiguration_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslConfiguration_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration(): wrong number / type of arguments");
      
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

      //QSslConfiguration.prototype = new QSslConfiguration_BaseJs(engine);
      //QSslConfiguration.prototype = new QSslConfiguration_Wrapper(engine);
      QSslConfiguration.prototype = new Object();


      QSslConfiguration.prototype.toString = function() {
          //return "QSslConfiguration [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslConfiguration [JS]";
        };
      QSslConfiguration.getObjectType = function() {
        return RJSType_QSslConfiguration.getIdStatic();
      };

      QSslConfiguration.prototype.getObjectType = function() {
        return RJSType_QSslConfiguration.getIdStatic();
      };

      QSslConfiguration.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslConfiguration.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: NextProtocolNegotiationStatus
QSslConfiguration.NextProtocolNegotiationNone = QSslConfiguration_Wrapper.NextProtocolNegotiationNone;
QSslConfiguration.NextProtocolNegotiationNegotiated = QSslConfiguration_Wrapper.NextProtocolNegotiationNegotiated;
QSslConfiguration.NextProtocolNegotiationUnsupported = QSslConfiguration_Wrapper.NextProtocolNegotiationUnsupported;


      // functions:
      
        // function 
        QSslConfiguration.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.swap = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.equals = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.isNull = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.isNull");
          
              return this.__PROXY__.isNull(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.protocol = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.protocol");
          
              return this.__PROXY__.protocol(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setProtocol = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setProtocol");
          
              return this.__PROXY__.setProtocol(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.peerVerifyMode = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.peerVerifyMode");
          
              return this.__PROXY__.peerVerifyMode(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setPeerVerifyMode = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setPeerVerifyMode");
          
              return this.__PROXY__.setPeerVerifyMode(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.peerVerifyDepth = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.peerVerifyDepth");
          
              return this.__PROXY__.peerVerifyDepth(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setPeerVerifyDepth = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setPeerVerifyDepth");
          
              return this.__PROXY__.setPeerVerifyDepth(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.localCertificateChain = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.localCertificateChain");
          
              return this.__PROXY__.localCertificateChain(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setLocalCertificateChain = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setLocalCertificateChain");
          
              return this.__PROXY__.setLocalCertificateChain(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.localCertificate = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.localCertificate");
          
              return this.__PROXY__.localCertificate(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setLocalCertificate = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setLocalCertificate");
          
              return this.__PROXY__.setLocalCertificate(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.peerCertificate = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.peerCertificate");
          
              return this.__PROXY__.peerCertificate(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.peerCertificateChain = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.peerCertificateChain");
          
              return this.__PROXY__.peerCertificateChain(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.sessionCipher = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.sessionCipher");
          
              return this.__PROXY__.sessionCipher(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.sessionProtocol = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.sessionProtocol");
          
              return this.__PROXY__.sessionProtocol(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.privateKey = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.privateKey");
          
              return this.__PROXY__.privateKey(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setPrivateKey = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setPrivateKey");
          
              return this.__PROXY__.setPrivateKey(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.ciphers = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.ciphers");
          
              return this.__PROXY__.ciphers(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setCiphers = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setCiphers");
          
              return this.__PROXY__.setCiphers(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.supportedCiphers = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.supportedCiphers");
          
              return this.__PROXY__.supportedCiphers(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.caCertificates = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.caCertificates");
          
              return this.__PROXY__.caCertificates(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setCaCertificates = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setCaCertificates");
          
              return this.__PROXY__.setCaCertificates(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.addCaCertificates = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.addCaCertificates");
          
              return this.__PROXY__.addCaCertificates(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.addCaCertificate = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.addCaCertificate");
          
              return this.__PROXY__.addCaCertificate(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.systemCaCertificates = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.systemCaCertificates");
          
              return this.__PROXY__.systemCaCertificates(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setSslOption = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setSslOption");
          
              return this.__PROXY__.setSslOption(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.testSslOption = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.testSslOption");
          
              return this.__PROXY__.testSslOption(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.sessionTicket = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.sessionTicket");
          
              return this.__PROXY__.sessionTicket(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setSessionTicket = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setSessionTicket");
          
              return this.__PROXY__.setSessionTicket(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.sessionTicketLifeTimeHint = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.sessionTicketLifeTimeHint");
          
              return this.__PROXY__.sessionTicketLifeTimeHint(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.ephemeralServerKey = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.ephemeralServerKey");
          
              return this.__PROXY__.ephemeralServerKey(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.ellipticCurves = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.ellipticCurves");
          
              return this.__PROXY__.ellipticCurves(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setEllipticCurves = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setEllipticCurves");
          
              return this.__PROXY__.setEllipticCurves(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.supportedEllipticCurves = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.supportedEllipticCurves");
          
              return this.__PROXY__.supportedEllipticCurves(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.preSharedKeyIdentityHint = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.preSharedKeyIdentityHint");
          
              return this.__PROXY__.preSharedKeyIdentityHint(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setPreSharedKeyIdentityHint = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setPreSharedKeyIdentityHint");
          
              return this.__PROXY__.setPreSharedKeyIdentityHint(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.diffieHellmanParameters = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.diffieHellmanParameters");
          
              return this.__PROXY__.diffieHellmanParameters(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setDiffieHellmanParameters = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setDiffieHellmanParameters");
          
              return this.__PROXY__.setDiffieHellmanParameters(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setBackendConfigurationOption = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setBackendConfigurationOption");
          
              return this.__PROXY__.setBackendConfigurationOption(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.defaultConfiguration = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.defaultConfiguration");
          
              return this.__PROXY__.defaultConfiguration(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setDefaultConfiguration = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setDefaultConfiguration");
          
              return this.__PROXY__.setDefaultConfiguration(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.dtlsCookieVerificationEnabled = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.dtlsCookieVerificationEnabled");
          
              return this.__PROXY__.dtlsCookieVerificationEnabled(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setDtlsCookieVerificationEnabled = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setDtlsCookieVerificationEnabled");
          
              return this.__PROXY__.setDtlsCookieVerificationEnabled(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.defaultDtlsConfiguration = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.defaultDtlsConfiguration");
          
              return this.__PROXY__.defaultDtlsConfiguration(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setDefaultDtlsConfiguration = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setDefaultDtlsConfiguration");
          
              return this.__PROXY__.setDefaultDtlsConfiguration(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.handshakeMustInterruptOnError = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.handshakeMustInterruptOnError");
          
              return this.__PROXY__.handshakeMustInterruptOnError(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setHandshakeMustInterruptOnError = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setHandshakeMustInterruptOnError");
          
              return this.__PROXY__.setHandshakeMustInterruptOnError(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.missingCertificateIsFatal = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.missingCertificateIsFatal");
          
              return this.__PROXY__.missingCertificateIsFatal(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setMissingCertificateIsFatal = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setMissingCertificateIsFatal");
          
              return this.__PROXY__.setMissingCertificateIsFatal(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setOcspStaplingEnabled = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setOcspStaplingEnabled");
          
              return this.__PROXY__.setOcspStaplingEnabled(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.ocspStaplingEnabled = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.ocspStaplingEnabled");
          
              return this.__PROXY__.ocspStaplingEnabled(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.setAllowedNextProtocols = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.setAllowedNextProtocols");
          
              return this.__PROXY__.setAllowedNextProtocols(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.allowedNextProtocols = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.allowedNextProtocols");
          
              return this.__PROXY__.allowedNextProtocols(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.nextNegotiatedProtocol = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.nextNegotiatedProtocol");
          
              return this.__PROXY__.nextNegotiatedProtocol(...args);
            
        };
    
        // function 
        QSslConfiguration.prototype.nextProtocolNegotiationStatus = function(...args) 
          
        {
          //print("JS: QSslConfiguration.prototype.nextProtocolNegotiationStatus");
          
              return this.__PROXY__.nextProtocolNegotiationStatus(...args);
            
        };
    

      // static functions:
      

        // static function 
        QSslConfiguration.supportedCiphers = function() 
          
        {
          //print("JS: QSslConfiguration.supportedCiphers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSslConfiguration_WrapperSingletonInstance.supportedCiphers(
                  
                );
              

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration.supportedCiphers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslConfiguration.systemCaCertificates = function() 
          
        {
          //print("JS: QSslConfiguration.systemCaCertificates");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSslConfiguration_WrapperSingletonInstance.systemCaCertificates(
                  
                );
              

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration.systemCaCertificates(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslConfiguration.supportedEllipticCurves = function() 
          
        {
          //print("JS: QSslConfiguration.supportedEllipticCurves");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSslConfiguration_WrapperSingletonInstance.supportedEllipticCurves(
                  
                );
              

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration.supportedEllipticCurves(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslConfiguration.defaultConfiguration = function() 
          
        {
          //print("JS: QSslConfiguration.defaultConfiguration");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSslConfiguration_WrapperSingletonInstance.defaultConfiguration(
                  
                );
              

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration.defaultConfiguration(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslConfiguration.setDefaultConfiguration = function() 
          
        {
          //print("JS: QSslConfiguration.setDefaultConfiguration");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSslConfiguration_WrapperSingletonInstance.setDefaultConfiguration(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration.setDefaultConfiguration(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslConfiguration.defaultDtlsConfiguration = function() 
          
        {
          //print("JS: QSslConfiguration.defaultDtlsConfiguration");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSslConfiguration_WrapperSingletonInstance.defaultDtlsConfiguration(
                  
                );
              

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration.defaultDtlsConfiguration(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSslConfiguration.setDefaultDtlsConfiguration = function() 
          
        {
          //print("JS: QSslConfiguration.setDefaultDtlsConfiguration");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSslConfiguration_WrapperSingletonInstance.setDefaultDtlsConfiguration(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSslConfiguration);
  }

  
  else {
    
        print("QSslConfiguration.setDefaultDtlsConfiguration(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      QSslConfiguration.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslConfiguration.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslConfiguration.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslConfiguration.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslConfiguration.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSslConfiguration.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      