
      // auto generated
      //var self;

      // class constructor:
      function QCalendar() {
        

        // should be QCalendar_BaseJs.call(this, engine):
        //QCalendar.prototype = new QCalendar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QCalendar.getIdStatic()))) {

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
            qWarning("QCalendar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QCalendar_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCalendar);
  }

  
  else {
    
        print("QCalendar(): wrong number / type of arguments");
      
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

      //QCalendar.prototype = new QCalendar_BaseJs(engine);
      //QCalendar.prototype = new QCalendar_Wrapper(engine);
      QCalendar.prototype = new Object();

      QCalendar.prototype.toString = function() {
          //return "QCalendar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCalendar [JS]";
        };
      QCalendar.getObjectType = function() {
        return RJSType_QCalendar.getIdStatic();
      };

      QCalendar.prototype.getObjectType = function() {
        return RJSType_QCalendar.getIdStatic();
      };

      QCalendar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QCalendar.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QCalendar.prototype.isValid = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isValid");
          return this.__PROXY__.isValid(...args);
        };
    
        // function 
        QCalendar.prototype.daysInMonth = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.daysInMonth");
          return this.__PROXY__.daysInMonth(...args);
        };
    
        // function 
        QCalendar.prototype.daysInYear = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.daysInYear");
          return this.__PROXY__.daysInYear(...args);
        };
    
        // function 
        QCalendar.prototype.monthsInYear = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.monthsInYear");
          return this.__PROXY__.monthsInYear(...args);
        };
    
        // function 
        QCalendar.prototype.isDateValid = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isDateValid");
          return this.__PROXY__.isDateValid(...args);
        };
    
        // function 
        QCalendar.prototype.isLeapYear = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isLeapYear");
          return this.__PROXY__.isLeapYear(...args);
        };
    
        // function 
        QCalendar.prototype.isGregorian = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isGregorian");
          return this.__PROXY__.isGregorian(...args);
        };
    
        // function 
        QCalendar.prototype.isLunar = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isLunar");
          return this.__PROXY__.isLunar(...args);
        };
    
        // function 
        QCalendar.prototype.isLuniSolar = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isLuniSolar");
          return this.__PROXY__.isLuniSolar(...args);
        };
    
        // function 
        QCalendar.prototype.isSolar = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isSolar");
          return this.__PROXY__.isSolar(...args);
        };
    
        // function 
        QCalendar.prototype.isProleptic = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.isProleptic");
          return this.__PROXY__.isProleptic(...args);
        };
    
        // function 
        QCalendar.prototype.hasYearZero = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.hasYearZero");
          return this.__PROXY__.hasYearZero(...args);
        };
    
        // function 
        QCalendar.prototype.maximumDaysInMonth = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.maximumDaysInMonth");
          return this.__PROXY__.maximumDaysInMonth(...args);
        };
    
        // function 
        QCalendar.prototype.minimumDaysInMonth = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.minimumDaysInMonth");
          return this.__PROXY__.minimumDaysInMonth(...args);
        };
    
        // function 
        QCalendar.prototype.maximumMonthsInYear = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.maximumMonthsInYear");
          return this.__PROXY__.maximumMonthsInYear(...args);
        };
    
        // function 
        QCalendar.prototype.name = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.name");
          return this.__PROXY__.name(...args);
        };
    
        // function 
        QCalendar.prototype.dayOfWeek = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.dayOfWeek");
          return this.__PROXY__.dayOfWeek(...args);
        };
    
        // function 
        QCalendar.prototype.monthName = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.monthName");
          return this.__PROXY__.monthName(...args);
        };
    
        // function 
        QCalendar.prototype.standaloneMonthName = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.standaloneMonthName");
          return this.__PROXY__.standaloneMonthName(...args);
        };
    
        // function 
        QCalendar.prototype.weekDayName = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.weekDayName");
          return this.__PROXY__.weekDayName(...args);
        };
    
        // function 
        QCalendar.prototype.standaloneWeekDayName = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.standaloneWeekDayName");
          return this.__PROXY__.standaloneWeekDayName(...args);
        };
    
        // function 
        QCalendar.prototype.availableCalendars = function(...args) 
          
        {
          //print("JS: QCalendar.prototype.availableCalendars");
          return this.__PROXY__.availableCalendars(...args);
        };
    

      // static functions:
      

        // static function 
        QCalendar.availableCalendars = function() 
          
        {
          //print("JS: QCalendar.availableCalendars");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCalendar_WrapperSingletonInstance.availableCalendars(
                  
                );
              

        //copyProperties(this, wrapper, QCalendar);
  }

  
  else {
    
        print("QCalendar.availableCalendars(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QCalendar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCalendar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QCalendar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      