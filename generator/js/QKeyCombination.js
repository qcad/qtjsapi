
      // auto generated
      //var self;

      // class constructor:
      function QKeyCombination() {
        

        // should be QKeyCombination_BaseJs.call(this, engine):
        //QKeyCombination.prototype = new QKeyCombination_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QKeyCombination.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QKeyCombination);
            //}
          }
          else {
            qWarning("QKeyCombination.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 2) {
    
            self = this;
            wrapper = new QKeyCombination_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeyCombination);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeyCombination);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QKeyCombination_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QKeyCombination);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QKeyCombination);
  }

  
  else {
    
        print("QKeyCombination(): wrong number / type of arguments");
      
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

      //QKeyCombination.prototype = new QKeyCombination_BaseJs(engine);
      //QKeyCombination.prototype = new QKeyCombination_Wrapper(engine);
      QKeyCombination.prototype = new Object();

      QKeyCombination.prototype.toString = function() {
          //return "QKeyCombination [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QKeyCombination [JS]";
        };
      QKeyCombination.getObjectType = function() {
        
            return RJSType_QKeyCombination.getIdStatic();
          
      };

      QKeyCombination.prototype.getObjectType = function() {
        
            return RJSType_QKeyCombination.getIdStatic();
          
      };

      QKeyCombination.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QKeyCombination.getIdStatic()) {
              return true;
            }
          

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QKeyCombination.fromCombined = function() 
          
        {
          //print("JS: QKeyCombination.fromCombined");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QKeyCombination_WrapperSingletonInstance.fromCombined(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QKeyCombination);
  }

  
  else {
    
        print("QKeyCombination.fromCombined(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QKeyCombination.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QKeyCombination.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    