
      // auto generated
      //var self;

      // class constructor:
      function QNetworkProxyFactory() {
        

        // should be QNetworkProxyFactory_BaseJs.call(this, engine):
        //QNetworkProxyFactory.prototype = new QNetworkProxyFactory_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QNetworkProxyFactory.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QNetworkProxyFactory);
                
            //}
          }
          else {
            qWarning("QNetworkProxyFactory.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QNetworkProxyFactory.js: No constructor found for class QNetworkProxyFactory");
            
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

      //QNetworkProxyFactory.prototype = new QNetworkProxyFactory_BaseJs(engine);
      //QNetworkProxyFactory.prototype = new QNetworkProxyFactory_Wrapper(engine);
      QNetworkProxyFactory.prototype = new Object();

      QNetworkProxyFactory.prototype.toString = function() {
          //return "QNetworkProxyFactory [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QNetworkProxyFactory [JS]";
        };
      QNetworkProxyFactory.getObjectType = function() {
        return RJSType_QNetworkProxyFactory.getIdStatic();
      };

      QNetworkProxyFactory.prototype.getObjectType = function() {
        return RJSType_QNetworkProxyFactory.getIdStatic();
      };

      QNetworkProxyFactory.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QNetworkProxyFactory.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QNetworkProxyFactory.usesSystemConfiguration = function() 
          
        {
          //print("JS: QNetworkProxyFactory.usesSystemConfiguration");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QNetworkProxyFactory_WrapperSingletonInstance.usesSystemConfiguration(
                  
                );
              

        //copyProperties(this, wrapper, QNetworkProxyFactory);
  }

  
  else {
    
        print("QNetworkProxyFactory.usesSystemConfiguration(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QNetworkProxyFactory.setUseSystemConfiguration = function() 
          
        {
          //print("JS: QNetworkProxyFactory.setUseSystemConfiguration");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QNetworkProxyFactory_WrapperSingletonInstance.setUseSystemConfiguration(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QNetworkProxyFactory);
  }

  
  else {
    
        print("QNetworkProxyFactory.setUseSystemConfiguration(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QNetworkProxyFactory.setApplicationProxyFactory = function() 
          
        {
          //print("JS: QNetworkProxyFactory.setApplicationProxyFactory");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QNetworkProxyFactory_WrapperSingletonInstance.setApplicationProxyFactory(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QNetworkProxyFactory);
  }

  
  else {
    
        print("QNetworkProxyFactory.setApplicationProxyFactory(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QNetworkProxyFactory.proxyForQuery = function() 
          
        {
          //print("JS: QNetworkProxyFactory.proxyForQuery");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QNetworkProxyFactory_WrapperSingletonInstance.proxyForQuery(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QNetworkProxyFactory);
  }

  
  else {
    
        print("QNetworkProxyFactory.proxyForQuery(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QNetworkProxyFactory.systemProxyForQuery = function() 
          
        {
          //print("JS: QNetworkProxyFactory.systemProxyForQuery");
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
                // calling static wrapper:
                return QNetworkProxyFactory_WrapperSingletonInstance.systemProxyForQuery(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QNetworkProxyFactory);
  }

  
  else {
    
        print("QNetworkProxyFactory.systemProxyForQuery(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QNetworkProxyFactory.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QNetworkProxyFactory.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      