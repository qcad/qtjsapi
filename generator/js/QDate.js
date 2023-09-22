
      // auto generated
      //var self;

      // class constructor:
      function QDate() {
        

        // should be QDate_BaseJs.call(this, engine):
        //QDate.prototype = new QDate_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QDate.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDate);
            //}
          }
          else {
            qWarning("QDate.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 3) {
    
            self = this;
            wrapper = new QDate_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDate);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDate);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QDate_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDate);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDate);
  }

  
  else {
    
        print("QDate(): wrong number / type of arguments");
      
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

      //QDate.prototype = new QDate_BaseJs(engine);
      //QDate.prototype = new QDate_Wrapper(engine);
      QDate.prototype = new Object();

      QDate.getObjectType = function() {
        
            return RJSType_QDate.getIdStatic();
          
      };

      QDate.prototype.getObjectType = function() {
        
            return RJSType_QDate.getIdStatic();
          
      };

      QDate.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QDate.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QDate.currentDate = function() 
          
        {
          //print("JS: QDate.currentDate");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDate_WrapperSingletonInstance.currentDate(
                  
                );
              

        //copyProperties(this, wrapper, QDate);
  }

  
  else {
    
        print("QDate.currentDate(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDate.fromString = function() 
          
        {
          //print("JS: QDate.fromString");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QDate_WrapperSingletonInstance.fromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDate);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDate_WrapperSingletonInstance.fromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDate);
  }

  
  else {
    
        print("QDate.fromString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDate.isLeapYear = function() 
          
        {
          //print("JS: QDate.isLeapYear");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDate_WrapperSingletonInstance.isLeapYear(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDate);
  }

  
  else {
    
        print("QDate.isLeapYear(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDate.fromJulianDay = function() 
          
        {
          //print("JS: QDate.fromJulianDay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QDate_WrapperSingletonInstance.fromJulianDay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDate);
  }

  
  else {
    
        print("QDate.fromJulianDay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDate.nullJd = function() 
          
        {
          //print("JS: QDate.nullJd");
          
        };
      

        // static function 
        QDate.minJd = function() 
          
        {
          //print("JS: QDate.minJd");
          
        };
      

        // static function 
        QDate.maxJd = function() 
          
        {
          //print("JS: QDate.maxJd");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDate.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDate.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    