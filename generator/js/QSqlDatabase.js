
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
              
                  copyProperties(this, wrapper, QSqlDatabase);
                
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
          
            copyProperties(this, wrapper, QSqlDatabase);
          

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

      