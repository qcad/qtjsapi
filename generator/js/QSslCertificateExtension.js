
      // auto generated
      //var self;

      // class constructor:
      function QSslCertificateExtension() {
        

        // should be QSslCertificateExtension_BaseJs.call(this, engine):
        //QSslCertificateExtension.prototype = new QSslCertificateExtension_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSslCertificateExtension.getIdStatic()))) {

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
            qWarning("QSslCertificateExtension.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QSslCertificateExtension_Wrapper(
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

      

        //copyProperties(this, wrapper, QSslCertificateExtension);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSslCertificateExtension_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSslCertificateExtension);
  }

  
  else {
    
        print("QSslCertificateExtension(): wrong number / type of arguments");
      
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

      //QSslCertificateExtension.prototype = new QSslCertificateExtension_BaseJs(engine);
      //QSslCertificateExtension.prototype = new QSslCertificateExtension_Wrapper(engine);
      QSslCertificateExtension.prototype = new Object();


      QSslCertificateExtension.prototype.toString = function() {
          //return "QSslCertificateExtension [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSslCertificateExtension [JS]";
        };
      QSslCertificateExtension.getObjectType = function() {
        return RJSType_QSslCertificateExtension.getIdStatic();
      };

      QSslCertificateExtension.prototype.getObjectType = function() {
        return RJSType_QSslCertificateExtension.getIdStatic();
      };

      QSslCertificateExtension.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSslCertificateExtension.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSslCertificateExtension.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QSslCertificateExtension.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
    
        // function 
        QSslCertificateExtension.prototype.swap = function(...args) 
          
        {
          //print("JS: QSslCertificateExtension.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
    
        // function 
        QSslCertificateExtension.prototype.oid = function(...args) 
          
        {
          //print("JS: QSslCertificateExtension.prototype.oid");
          
              return this.__PROXY__.oid(...args);
            
        };
    
        // function 
        QSslCertificateExtension.prototype.name = function(...args) 
          
        {
          //print("JS: QSslCertificateExtension.prototype.name");
          
              return this.__PROXY__.name(...args);
            
        };
    
        // function 
        QSslCertificateExtension.prototype.value = function(...args) 
          
        {
          //print("JS: QSslCertificateExtension.prototype.value");
          
              return this.__PROXY__.value(...args);
            
        };
    
        // function 
        QSslCertificateExtension.prototype.isCritical = function(...args) 
          
        {
          //print("JS: QSslCertificateExtension.prototype.isCritical");
          
              return this.__PROXY__.isCritical(...args);
            
        };
    
        // function 
        QSslCertificateExtension.prototype.isSupported = function(...args) 
          
        {
          //print("JS: QSslCertificateExtension.prototype.isSupported");
          
              return this.__PROXY__.isSupported(...args);
            
        };
    

      // static functions:
      QSslCertificateExtension.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSslCertificateExtension.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSslCertificateExtension.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSslCertificateExtension.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSslCertificateExtension.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSslCertificateExtension.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      