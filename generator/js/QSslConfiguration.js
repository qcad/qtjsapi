
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
              
                  copyProperties(this, wrapper, QSslConfiguration);
                
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
          
            copyProperties(this, wrapper, QSslConfiguration);
          

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
          
            copyProperties(this, wrapper, QSslConfiguration);
          

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

      