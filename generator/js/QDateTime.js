
      // auto generated
      //var self;

      // class constructor:
      function QDateTime() {
        

        // should be QDateTime_BaseJs.call(this, engine):
        //QDateTime.prototype = new QDateTime_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDateTime.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDateTime);
            //}
          }
          else {
            qWarning("QDateTime.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDateTime_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDateTime);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //QDateTime.prototype = new QDateTime_BaseJs(engine);
      //QDateTime.prototype = new QDateTime_Wrapper(engine);
      QDateTime.prototype = new Object();

      QDateTime.getObjectType = function() {
        return RJSType_QDateTime.getIdStatic();
      };

      QDateTime.prototype.getObjectType = function() {
        return RJSType_QDateTime.getIdStatic();
      };

      QDateTime.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDateTime.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QDateTime.currentDateTime = function() 
          
        {
          //print("JS: QDateTime.currentDateTime");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.currentDateTime(
                  
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime.currentDateTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDateTime.currentDateTimeUtc = function() 
          
        {
          //print("JS: QDateTime.currentDateTimeUtc");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.currentDateTimeUtc(
                  
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime.currentDateTimeUtc(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDateTime.fromString = function() 
          
        {
          //print("JS: QDateTime.fromString");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.fromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.fromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime.fromString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDateTime.fromMSecsSinceEpoch = function() 
          
        {
          //print("JS: QDateTime.fromMSecsSinceEpoch");
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.fromMSecsSinceEpoch(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.fromMSecsSinceEpoch(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else 
  
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.fromMSecsSinceEpoch(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime.fromMSecsSinceEpoch(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDateTime.currentMSecsSinceEpoch = function() 
          
        {
          //print("JS: QDateTime.currentMSecsSinceEpoch");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.currentMSecsSinceEpoch(
                  
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime.currentMSecsSinceEpoch(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDateTime.currentSecsSinceEpoch = function() 
          
        {
          //print("JS: QDateTime.currentSecsSinceEpoch");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.currentSecsSinceEpoch(
                  
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime.currentSecsSinceEpoch(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDateTime.operator_lessthan = function() 
          
        {
          //print("JS: QDateTime.operator_lessthan");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDateTime_WrapperSingletonInstance.operator_lessthan(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDateTime);
  }

  
  else {
    
        print("QDateTime.operator_lessthan(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDateTime.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDateTime.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    