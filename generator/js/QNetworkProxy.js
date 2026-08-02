
      // auto generated
      //var self;

      // class constructor:
      function QNetworkProxy() {
        

        // should be QNetworkProxy_BaseJs.call(this, engine):
        //QNetworkProxy.prototype = new QNetworkProxy_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QNetworkProxy.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QNetworkProxy);
                
            //}
          }
          else {
            qWarning("QNetworkProxy.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QNetworkProxy_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QNetworkProxy);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QNetworkProxy);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QNetworkProxy_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QNetworkProxy);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QNetworkProxy);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QNetworkProxy_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QNetworkProxy);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QNetworkProxy);
  }

  
  else {
    
        print("QNetworkProxy(): wrong number / type of arguments");
      
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

      //QNetworkProxy.prototype = new QNetworkProxy_BaseJs(engine);
      //QNetworkProxy.prototype = new QNetworkProxy_Wrapper(engine);
      QNetworkProxy.prototype = new Object();

      QNetworkProxy.prototype.toString = function() {
          //return "QNetworkProxy [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QNetworkProxy [JS]";
        };
      QNetworkProxy.getObjectType = function() {
        return RJSType_QNetworkProxy.getIdStatic();
      };

      QNetworkProxy.prototype.getObjectType = function() {
        return RJSType_QNetworkProxy.getIdStatic();
      };

      QNetworkProxy.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QNetworkProxy.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: ProxyType
QNetworkProxy.DefaultProxy = QNetworkProxy_Wrapper.DefaultProxy;
QNetworkProxy.Socks5Proxy = QNetworkProxy_Wrapper.Socks5Proxy;
QNetworkProxy.NoProxy = QNetworkProxy_Wrapper.NoProxy;
QNetworkProxy.HttpProxy = QNetworkProxy_Wrapper.HttpProxy;
QNetworkProxy.HttpCachingProxy = QNetworkProxy_Wrapper.HttpCachingProxy;
QNetworkProxy.FtpCachingProxy = QNetworkProxy_Wrapper.FtpCachingProxy;

  // enum: Capability
QNetworkProxy.TunnelingCapability = QNetworkProxy_Wrapper.TunnelingCapability;
QNetworkProxy.ListeningCapability = QNetworkProxy_Wrapper.ListeningCapability;
QNetworkProxy.UdpTunnelingCapability = QNetworkProxy_Wrapper.UdpTunnelingCapability;
QNetworkProxy.CachingCapability = QNetworkProxy_Wrapper.CachingCapability;
QNetworkProxy.HostNameLookupCapability = QNetworkProxy_Wrapper.HostNameLookupCapability;
QNetworkProxy.SctpTunnelingCapability = QNetworkProxy_Wrapper.SctpTunnelingCapability;
QNetworkProxy.SctpListeningCapability = QNetworkProxy_Wrapper.SctpListeningCapability;


      // functions:
      

      // static functions:
      

        // static function 
        QNetworkProxy.setApplicationProxy = function() 
          
        {
          //print("JS: QNetworkProxy.setApplicationProxy");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QNetworkProxy_WrapperSingletonInstance.setApplicationProxy(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QNetworkProxy);
  }

  
  else {
    
        print("QNetworkProxy.setApplicationProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QNetworkProxy.applicationProxy = function() 
          
        {
          //print("JS: QNetworkProxy.applicationProxy");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QNetworkProxy_WrapperSingletonInstance.applicationProxy(
                  
                );
              

        //copyProperties(this, wrapper, QNetworkProxy);
  }

  
  else {
    
        print("QNetworkProxy.applicationProxy(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QNetworkProxy.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QNetworkProxy.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      