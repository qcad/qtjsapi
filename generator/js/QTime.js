
      // auto generated
      //var self;

      // class constructor:
      function QTime() {
        

        // should be QTime_BaseJs.call(this, engine):
        //QTime.prototype = new QTime_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QTime_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTime);
            //}
          }
          else {
            qWarning("QTime.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
            self = this;
            wrapper = new QTime_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTime);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTime);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QTime_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTime);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTime);
  }

  
  else {
    
        print("QTime(): wrong number / type of arguments");
      
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

      //QTime.prototype = new QTime_BaseJs(engine);
      //QTime.prototype = new QTime_Wrapper(engine);
      QTime.prototype = new Object();

      QTime.getObjectType = function() {
        
            return RJSType.QTime_Type;
          
      };

      QTime.prototype.getObjectType = function() {
        
            return RJSType.QTime_Type;
          
      };

      QTime.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QTime_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QTime_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QTime.fromMSecsSinceStartOfDay = function() 
          
        {
          //print("JS: QTime.fromMSecsSinceStartOfDay");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QTime_WrapperSingletonInstance.fromMSecsSinceStartOfDay(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QTime);
  }

  
  else {
    
        print("QTime.fromMSecsSinceStartOfDay(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTime.currentTime = function() 
          
        {
          //print("JS: QTime.currentTime");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTime_WrapperSingletonInstance.currentTime(
                  
                );
              

        //copyProperties(this, wrapper, QTime);
  }

  
  else {
    
        print("QTime.currentTime(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTime.fromString = function() 
          
        {
          //print("JS: QTime.fromString");
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
                // calling static wrapper:
                return QTime_WrapperSingletonInstance.fromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTime);
  }

  
  else 
  
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTime_WrapperSingletonInstance.fromString(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTime);
  }

  
  else {
    
        print("QTime.fromString(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTime.operator_lessthan = function() 
          
        {
          //print("JS: QTime.operator_lessthan");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTime_WrapperSingletonInstance.operator_lessthan(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTime);
  }

  
  else {
    
        print("QTime.operator_lessthan(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTime.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTime.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    