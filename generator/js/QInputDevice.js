
      // auto generated
      //var self;

      // class constructor:
      function QInputDevice() {
        

        // should be QInputDevice_BaseJs.call(this, engine):
        //QInputDevice.prototype = new QInputDevice_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QInputDevice_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QInputDevice);
            //}
          }
          else {
            qWarning("QInputDevice.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QInputDevice_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QInputDevice);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QInputDevice);
  }

  
  else {
    
        print("QInputDevice(): wrong number / type of arguments");
      
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
            
    this["availableVirtualGeometryChanged(QRect)"] = Object.getPrototypeOf(this).availableVirtualGeometryChanged;
  
          }
        }
      }

      //QInputDevice.prototype = new QInputDevice_BaseJs(engine);
      //QInputDevice.prototype = new QInputDevice_Wrapper(engine);
      QInputDevice.prototype = new Object();

      QInputDevice.prototype.toString = function() {
          //return "QInputDevice [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QInputDevice [JS]";
        };
      QInputDevice.getObjectType = function() {
        
            return RJSType.QInputDevice_Type;
          
      };

      QInputDevice.prototype.getObjectType = function() {
        
            return RJSType.QInputDevice_Type;
          
      };

      QInputDevice.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QInputDevice_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QInputDevice_Type, 
          
            RJSType.QObject_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QInputDevice.tr = function() 
          
        {
          //print("JS: QInputDevice.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QInputDevice_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QInputDevice);
  }

  
  else {
    
        print("QInputDevice.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QInputDevice.seatNames = function() 
          
        {
          //print("JS: QInputDevice.seatNames");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QInputDevice_WrapperSingletonInstance.seatNames(
                  
                );
              

        //copyProperties(this, wrapper, QInputDevice);
  }

  
  else {
    
        print("QInputDevice.seatNames(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QInputDevice.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QInputDevice.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    