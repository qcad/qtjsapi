
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QDateTime.prototype.swap = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QDateTime.prototype.isNull = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.isNull");
          return this.__PROXY__.isNull(...args);
        };
    
        // function 
        QDateTime.prototype.isValid = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QDateTime.prototype.date = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.date");
          return this.__PROXY__.date(...args);
        };
    
        // function 
        QDateTime.prototype.time = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.time");
          return this.__PROXY__.time(...args);
        };
    
        // function 
        QDateTime.prototype.timeSpec = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.timeSpec");
          return this.__PROXY__.timeSpec(...args);
        };
    
        // function 
        QDateTime.prototype.offsetFromUtc = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.offsetFromUtc");
          return this.__PROXY__.offsetFromUtc(...args);
        };
    
        // function 
        QDateTime.prototype.timeZone = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.timeZone");
          return this.__PROXY__.timeZone(...args);
        };
    
        // function 
        QDateTime.prototype.timeZoneAbbreviation = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.timeZoneAbbreviation");
          return this.__PROXY__.timeZoneAbbreviation(...args);
        };
    
        // function 
        QDateTime.prototype.isDaylightTime = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.isDaylightTime");
          return this.__PROXY__.isDaylightTime(...args);
        };
    
        // function 
        QDateTime.prototype.toMSecsSinceEpoch = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.toMSecsSinceEpoch");
          return this.__PROXY__.toMSecsSinceEpoch(...args);
        };
    
        // function 
        QDateTime.prototype.toSecsSinceEpoch = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.toSecsSinceEpoch");
          return this.__PROXY__.toSecsSinceEpoch(...args);
        };
    
        // function 
        QDateTime.prototype.setDate = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.setDate");
          return this.__PROXY__.setDate(...args);
        };
    
        // function 
        QDateTime.prototype.setTime = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.setTime");
          return this.__PROXY__.setTime(...args);
        };
    
        // function 
        QDateTime.prototype.setTimeSpec = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.setTimeSpec");
          return this.__PROXY__.setTimeSpec(...args);
        };
    
        // function 
        QDateTime.prototype.setTimeZone = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.setTimeZone");
          return this.__PROXY__.setTimeZone(...args);
        };
    
        // function 
        QDateTime.prototype.setMSecsSinceEpoch = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.setMSecsSinceEpoch");
          return this.__PROXY__.setMSecsSinceEpoch(...args);
        };
    
        // function 
        QDateTime.prototype.setSecsSinceEpoch = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.setSecsSinceEpoch");
          return this.__PROXY__.setSecsSinceEpoch(...args);
        };
    
        // function 
        QDateTime.prototype.toString = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.toString");
          return this.__PROXY__.toString(...args);
        };
    
        // function 
        QDateTime.prototype.addDays = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.addDays");
          return this.__PROXY__.addDays(...args);
        };
    
        // function 
        QDateTime.prototype.addMonths = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.addMonths");
          return this.__PROXY__.addMonths(...args);
        };
    
        // function 
        QDateTime.prototype.addYears = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.addYears");
          return this.__PROXY__.addYears(...args);
        };
    
        // function 
        QDateTime.prototype.addSecs = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.addSecs");
          return this.__PROXY__.addSecs(...args);
        };
    
        // function 
        QDateTime.prototype.addMSecs = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.addMSecs");
          return this.__PROXY__.addMSecs(...args);
        };
    
        // function 
        QDateTime.prototype.toLocalTime = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.toLocalTime");
          return this.__PROXY__.toLocalTime(...args);
        };
    
        // function 
        QDateTime.prototype.toUTC = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.toUTC");
          return this.__PROXY__.toUTC(...args);
        };
    
        // function 
        QDateTime.prototype.toOffsetFromUtc = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.toOffsetFromUtc");
          return this.__PROXY__.toOffsetFromUtc(...args);
        };
    
        // function 
        QDateTime.prototype.toTimeZone = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.toTimeZone");
          return this.__PROXY__.toTimeZone(...args);
        };
    
        // function 
        QDateTime.prototype.daysTo = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.daysTo");
          return this.__PROXY__.daysTo(...args);
        };
    
        // function 
        QDateTime.prototype.secsTo = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.secsTo");
          return this.__PROXY__.secsTo(...args);
        };
    
        // function 
        QDateTime.prototype.msecsTo = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.msecsTo");
          return this.__PROXY__.msecsTo(...args);
        };
    
        // function 
        QDateTime.prototype.currentDateTime = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.currentDateTime");
          return this.__PROXY__.currentDateTime(...args);
        };
    
        // function 
        QDateTime.prototype.currentDateTimeUtc = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.currentDateTimeUtc");
          return this.__PROXY__.currentDateTimeUtc(...args);
        };
    
        // function 
        QDateTime.prototype.fromString = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.fromString");
          return this.__PROXY__.fromString(...args);
        };
    
        // function 
        QDateTime.prototype.fromMSecsSinceEpoch = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.fromMSecsSinceEpoch");
          return this.__PROXY__.fromMSecsSinceEpoch(...args);
        };
    
        // function 
        QDateTime.prototype.currentMSecsSinceEpoch = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.currentMSecsSinceEpoch");
          return this.__PROXY__.currentMSecsSinceEpoch(...args);
        };
    
        // function 
        QDateTime.prototype.currentSecsSinceEpoch = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.currentSecsSinceEpoch");
          return this.__PROXY__.currentSecsSinceEpoch(...args);
        };
    
        // function 
        QDateTime.prototype.operator_lessthan = function(...args) 
          
        {
          //print("JS: QDateTime.prototype.operator_lessthan");
          return this.__PROXY__.operator_lessthan(...args);
        };
    

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

      QDateTime.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      