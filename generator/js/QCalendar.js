
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
            arguments[2].getWrappedType()===
              
                  RJSType_QCalendar.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QCalendar);
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
          

        copyProperties(this, wrapper, QCalendar);

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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
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
    