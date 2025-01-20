
      // auto generated
      //var self;

      // class constructor:
      function QTimer() {
        

        // should be QTimer_BaseJs.call(this, engine):
        //QTimer.prototype = new QTimer_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTimer.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QTimer);
                
            //}
          }
          else {
            qWarning("QTimer.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTimer_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QTimer);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTimer);
  }

  
  else {
    
        print("QTimer(): wrong number / type of arguments");
      
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

      //QTimer.prototype = new QTimer_BaseJs(engine);
      //QTimer.prototype = new QTimer_Wrapper(engine);
      QTimer.prototype = new Object();

      QTimer.prototype.toString = function() {
          //return "QTimer [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTimer [JS]";
        };
      QTimer.getObjectType = function() {
        return RJSType_QTimer.getIdStatic();
      };

      QTimer.prototype.getObjectType = function() {
        return RJSType_QTimer.getIdStatic();
      };

      QTimer.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTimer.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QTimer.defaultTypeFor = function() 
          
        {
          //print("JS: QTimer.defaultTypeFor");
          
        };
      

        // static function 
        QTimer.singleShotImpl = function() 
          
        {
          //print("JS: QTimer.singleShotImpl");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTimer.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTimer.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      