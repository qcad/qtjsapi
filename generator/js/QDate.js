
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
            arguments[2].getWrappedType()===RJSType_QDate.getIdStatic()))) {

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QDate.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDate.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDate.prototype.isValid = function(...args) 
          
        {
          //print("JS: QDate.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QDate.prototype.year = function(...args) 
          
        {
          //print("JS: QDate.prototype.year");
          return this.__PROXY__.year(...args);
        };
    
        // function 
        QDate.prototype.month = function(...args) 
          
        {
          //print("JS: QDate.prototype.month");
          return this.__PROXY__.month(...args);
        };
    
        // function 
        QDate.prototype.day = function(...args) 
          
        {
          //print("JS: QDate.prototype.day");
          return this.__PROXY__.day(...args);
        };
    
        // function 
        QDate.prototype.dayOfWeek = function(...args) 
          
        {
          //print("JS: QDate.prototype.dayOfWeek");
          return this.__PROXY__.dayOfWeek(...args);
        };
    
        // function 
        QDate.prototype.dayOfYear = function(...args) 
          
        {
          //print("JS: QDate.prototype.dayOfYear");
          return this.__PROXY__.dayOfYear(...args);
        };
    
        // function 
        QDate.prototype.daysInMonth = function(...args) 
          
        {
          //print("JS: QDate.prototype.daysInMonth");
          return this.__PROXY__.daysInMonth(...args);
        };
    
        // function 
        QDate.prototype.daysInYear = function(...args) 
          
        {
          //print("JS: QDate.prototype.daysInYear");
          return this.__PROXY__.daysInYear(...args);
        };
    
        // function 
        QDate.prototype.startOfDay = function(...args) 
          
        {
          //print("JS: QDate.prototype.startOfDay");
          return this.__PROXY__.startOfDay(...args);
        };
    
        // function 
        QDate.prototype.endOfDay = function(...args) 
          
        {
          //print("JS: QDate.prototype.endOfDay");
          return this.__PROXY__.endOfDay(...args);
        };
    
        // function 
        QDate.prototype.toString = function(...args) 
          
        {
          //print("JS: QDate.prototype.toString");
          return this.__PROXY__.toString(...args);
        };
    
        // function 
        QDate.prototype.setDate = function(...args) 
          
        {
          //print("JS: QDate.prototype.setDate");
          return this.__PROXY__.setDate(...args);
        };
    
        // function 
        QDate.prototype.addDays = function(...args) 
          
        {
          //print("JS: QDate.prototype.addDays");
          return this.__PROXY__.addDays(...args);
        };
    
        // function 
        QDate.prototype.addMonths = function(...args) 
          
        {
          //print("JS: QDate.prototype.addMonths");
          return this.__PROXY__.addMonths(...args);
        };
    
        // function 
        QDate.prototype.addYears = function(...args) 
          
        {
          //print("JS: QDate.prototype.addYears");
          return this.__PROXY__.addYears(...args);
        };
    
        // function 
        QDate.prototype.daysTo = function(...args) 
          
        {
          //print("JS: QDate.prototype.daysTo");
          return this.__PROXY__.daysTo(...args);
        };
    
        // function 
        QDate.prototype.currentDate = function(...args) 
          
        {
          //print("JS: QDate.prototype.currentDate");
          return this.__PROXY__.currentDate(...args);
        };
    
        // function 
        QDate.prototype.fromString = function(...args) 
          
        {
          //print("JS: QDate.prototype.fromString");
          return this.__PROXY__.fromString(...args);
        };
    
        // function 
        QDate.prototype.isLeapYear = function(...args) 
          
        {
          //print("JS: QDate.prototype.isLeapYear");
          return this.__PROXY__.isLeapYear(...args);
        };
    
        // function 
        QDate.prototype.fromJulianDay = function(...args) 
          
        {
          //print("JS: QDate.prototype.fromJulianDay");
          return this.__PROXY__.fromJulianDay(...args);
        };
    
        // function 
        QDate.prototype.toJulianDay = function(...args) 
          
        {
          //print("JS: QDate.prototype.toJulianDay");
          return this.__PROXY__.toJulianDay(...args);
        };
    
        // function 
        QDate.prototype.nullJd = function(...args) 
          
        {
          //print("JS: QDate.prototype.nullJd");
          return this.__PROXY__.nullJd(...args);
        };
    
        // function 
        QDate.prototype.minJd = function(...args) 
          
        {
          //print("JS: QDate.prototype.minJd");
          return this.__PROXY__.minJd(...args);
        };
    
        // function 
        QDate.prototype.maxJd = function(...args) 
          
        {
          //print("JS: QDate.prototype.maxJd");
          return this.__PROXY__.maxJd(...args);
        };
    

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

      QDate.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      