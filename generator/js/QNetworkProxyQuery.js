
      // auto generated
      //var self;

      // class constructor:
      function QNetworkProxyQuery() {
        

        // should be QNetworkProxyQuery_BaseJs.call(this, engine):
        //QNetworkProxyQuery.prototype = new QNetworkProxyQuery_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QNetworkProxyQuery.getIdStatic()))) {

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
            qWarning("QNetworkProxyQuery.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QNetworkProxyQuery_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QNetworkProxyQuery);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QNetworkProxyQuery_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QNetworkProxyQuery);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QNetworkProxyQuery_Wrapper(
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

      

        //copyProperties(this, wrapper, QNetworkProxyQuery);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QNetworkProxyQuery_Wrapper(
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

      

        //copyProperties(this, wrapper, QNetworkProxyQuery);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QNetworkProxyQuery_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QNetworkProxyQuery);
  }

  
  else {
    
        print("QNetworkProxyQuery(): wrong number / type of arguments");
      
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

      //QNetworkProxyQuery.prototype = new QNetworkProxyQuery_BaseJs(engine);
      //QNetworkProxyQuery.prototype = new QNetworkProxyQuery_Wrapper(engine);
      QNetworkProxyQuery.prototype = new Object();


      QNetworkProxyQuery.prototype.toString = function() {
          //return "QNetworkProxyQuery [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QNetworkProxyQuery [JS]";
        };
      QNetworkProxyQuery.getObjectType = function() {
        return RJSType_QNetworkProxyQuery.getIdStatic();
      };

      QNetworkProxyQuery.prototype.getObjectType = function() {
        return RJSType_QNetworkProxyQuery.getIdStatic();
      };

      QNetworkProxyQuery.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QNetworkProxyQuery.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: QueryType
QNetworkProxyQuery.TcpSocket = QNetworkProxyQuery_Wrapper.TcpSocket;
QNetworkProxyQuery.UdpSocket = QNetworkProxyQuery_Wrapper.UdpSocket;
QNetworkProxyQuery.SctpSocket = QNetworkProxyQuery_Wrapper.SctpSocket;
QNetworkProxyQuery.TcpServer = QNetworkProxyQuery_Wrapper.TcpServer;
QNetworkProxyQuery.UrlRequest = QNetworkProxyQuery_Wrapper.UrlRequest;
QNetworkProxyQuery.SctpServer = QNetworkProxyQuery_Wrapper.SctpServer;


      // functions:
      
        // function 
        QNetworkProxyQuery.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.operator_assign");
          
              return this.__PROXY__.operator_assign(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.swap = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.equals = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.operator_not_assign = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.operator_not_assign");
          
              return this.__PROXY__.operator_not_assign(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.queryType = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.queryType");
          
              return this.__PROXY__.queryType(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.setQueryType = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.setQueryType");
          
              return this.__PROXY__.setQueryType(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.peerPort = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.peerPort");
          
              return this.__PROXY__.peerPort(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.setPeerPort = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.setPeerPort");
          
              return this.__PROXY__.setPeerPort(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.peerHostName = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.peerHostName");
          
              return this.__PROXY__.peerHostName(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.setPeerHostName = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.setPeerHostName");
          
              return this.__PROXY__.setPeerHostName(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.localPort = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.localPort");
          
              return this.__PROXY__.localPort(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.setLocalPort = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.setLocalPort");
          
              return this.__PROXY__.setLocalPort(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.protocolTag = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.protocolTag");
          
              return this.__PROXY__.protocolTag(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.setProtocolTag = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.setProtocolTag");
          
              return this.__PROXY__.setProtocolTag(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.url = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.url");
          
              return this.__PROXY__.url(...args);
            
        };
        
        // function 
        QNetworkProxyQuery.prototype.setUrl = function(...args) 
          
        {
          //print("JS: QNetworkProxyQuery.prototype.setUrl");
          
              return this.__PROXY__.setUrl(...args);
            
        };
        

      // static functions:
      QNetworkProxyQuery.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QNetworkProxyQuery.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QNetworkProxyQuery.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QNetworkProxyQuery.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QNetworkProxyQuery.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QNetworkProxyQuery.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      