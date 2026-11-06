
      // auto generated
      //var self;

      // class constructor:
      function QSqlDatabase() {
        

        // should be QSqlDatabase_BaseJs.call(this, engine):
        //QSqlDatabase.prototype = new QSqlDatabase_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSqlDatabase.getIdStatic()))) {

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
            qWarning("QSqlDatabase.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QSqlDatabase_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase(): wrong number / type of arguments");
      
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

      //QSqlDatabase.prototype = new QSqlDatabase_BaseJs(engine);
      //QSqlDatabase.prototype = new QSqlDatabase_Wrapper(engine);
      QSqlDatabase.prototype = new Object();


      QSqlDatabase.prototype.toString = function() {
          //return "QSqlDatabase [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSqlDatabase [JS]";
        };
      QSqlDatabase.getObjectType = function() {
        return RJSType_QSqlDatabase.getIdStatic();
      };

      QSqlDatabase.prototype.getObjectType = function() {
        return RJSType_QSqlDatabase.getIdStatic();
      };

      QSqlDatabase.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSqlDatabase.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSqlDatabase.prototype.open = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.open");
          
              return this.__PROXY__.open(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.close = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.isOpen = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.isOpen");
          
              return this.__PROXY__.isOpen(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.isOpenError = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.isOpenError");
          
              return this.__PROXY__.isOpenError(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.tables = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.tables");
          
              return this.__PROXY__.tables(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.record = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.record");
          
              return this.__PROXY__.record(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.lastError = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.lastError");
          
              return this.__PROXY__.lastError(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.isValid = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.transaction = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.transaction");
          
              return this.__PROXY__.transaction(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.commit = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.commit");
          
              return this.__PROXY__.commit(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.rollback = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.rollback");
          
              return this.__PROXY__.rollback(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.setDatabaseName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.setDatabaseName");
          
              return this.__PROXY__.setDatabaseName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.setUserName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.setUserName");
          
              return this.__PROXY__.setUserName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.setPassword = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.setPassword");
          
              return this.__PROXY__.setPassword(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.setHostName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.setHostName");
          
              return this.__PROXY__.setHostName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.setPort = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.setPort");
          
              return this.__PROXY__.setPort(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.setConnectOptions = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.setConnectOptions");
          
              return this.__PROXY__.setConnectOptions(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.databaseName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.databaseName");
          
              return this.__PROXY__.databaseName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.userName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.userName");
          
              return this.__PROXY__.userName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.password = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.password");
          
              return this.__PROXY__.password(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.hostName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.hostName");
          
              return this.__PROXY__.hostName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.driverName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.driverName");
          
              return this.__PROXY__.driverName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.port = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.port");
          
              return this.__PROXY__.port(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.connectOptions = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.connectOptions");
          
              return this.__PROXY__.connectOptions(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.connectionName = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.connectionName");
          
              return this.__PROXY__.connectionName(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.addDatabase = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.addDatabase");
          
              return this.__PROXY__.addDatabase(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.database = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.database");
          
              return this.__PROXY__.database(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.removeDatabase = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.removeDatabase");
          
              return this.__PROXY__.removeDatabase(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.contains = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.contains");
          
              return this.__PROXY__.contains(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.drivers = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.drivers");
          
              return this.__PROXY__.drivers(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.connectionNames = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.connectionNames");
          
              return this.__PROXY__.connectionNames(...args);
            
        };
    
        // function 
        QSqlDatabase.prototype.isDriverAvailable = function(...args) 
          
        {
          //print("JS: QSqlDatabase.prototype.isDriverAvailable");
          
              return this.__PROXY__.isDriverAvailable(...args);
            
        };
    

      // static functions:
      

        // static function 
        QSqlDatabase.addDatabase = function() 
          
        {
          //print("JS: QSqlDatabase.addDatabase");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.addDatabase(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.addDatabase(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase.addDatabase(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSqlDatabase.database = function() 
          
        {
          //print("JS: QSqlDatabase.database");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.database(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else 
  
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.database(
                  
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase.database(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSqlDatabase.removeDatabase = function() 
          
        {
          //print("JS: QSqlDatabase.removeDatabase");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.removeDatabase(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase.removeDatabase(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSqlDatabase.contains = function() 
          
        {
          //print("JS: QSqlDatabase.contains");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.contains(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase.contains(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSqlDatabase.drivers = function() 
          
        {
          //print("JS: QSqlDatabase.drivers");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.drivers(
                  
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase.drivers(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSqlDatabase.connectionNames = function() 
          
        {
          //print("JS: QSqlDatabase.connectionNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.connectionNames(
                  
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase.connectionNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSqlDatabase.isDriverAvailable = function() 
          
        {
          //print("JS: QSqlDatabase.isDriverAvailable");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QSqlDatabase_WrapperSingletonInstance.isDriverAvailable(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSqlDatabase);
  }

  
  else {
    
        print("QSqlDatabase.isDriverAvailable(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      QSqlDatabase.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSqlDatabase.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSqlDatabase.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSqlDatabase.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSqlDatabase.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSqlDatabase.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      