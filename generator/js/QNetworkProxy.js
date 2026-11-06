
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QNetworkProxy.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.swap = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.equals = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setType = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setType");
          
              return this.__PROXY__.setType(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.type = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setCapabilities = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setCapabilities");
          
              return this.__PROXY__.setCapabilities(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.capabilities = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.capabilities");
          
              return this.__PROXY__.capabilities(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.isCachingProxy = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.isCachingProxy");
          
              return this.__PROXY__.isCachingProxy(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.isTransparentProxy = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.isTransparentProxy");
          
              return this.__PROXY__.isTransparentProxy(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setUser = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setUser");
          
              return this.__PROXY__.setUser(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.user = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.user");
          
              return this.__PROXY__.user(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setPassword = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setPassword");
          
              return this.__PROXY__.setPassword(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.password = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.password");
          
              return this.__PROXY__.password(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setHostName = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setHostName");
          
              return this.__PROXY__.setHostName(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.hostName = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.hostName");
          
              return this.__PROXY__.hostName(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setPort = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setPort");
          
              return this.__PROXY__.setPort(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.port = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.port");
          
              return this.__PROXY__.port(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setApplicationProxy = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setApplicationProxy");
          
              return this.__PROXY__.setApplicationProxy(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.applicationProxy = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.applicationProxy");
          
              return this.__PROXY__.applicationProxy(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.hasRawHeader = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.hasRawHeader");
          
              return this.__PROXY__.hasRawHeader(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.rawHeaderList = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.rawHeaderList");
          
              return this.__PROXY__.rawHeaderList(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.rawHeader = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.rawHeader");
          
              return this.__PROXY__.rawHeader(...args);
            
        };
        
        // function 
        QNetworkProxy.prototype.setRawHeader = function(...args) 
          
        {
          //print("JS: QNetworkProxy.prototype.setRawHeader");
          
              return this.__PROXY__.setRawHeader(...args);
            
        };
        

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
      QNetworkProxy.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QNetworkProxy.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QNetworkProxy.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
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

      QNetworkProxy.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      