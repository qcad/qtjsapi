
      // auto generated
      //var self;

      // class constructor:
      function QGesture() {
        

        // should be QGesture_BaseJs.call(this, engine):
        //QGesture.prototype = new QGesture_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGesture.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QGesture);
                
            //}
          }
          else {
            qWarning("QGesture.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGesture_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QGesture);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGesture);
  }

  
  else {
    
        print("QGesture(): wrong number / type of arguments");
      
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

      //QGesture.prototype = new QGesture_BaseJs(engine);
      //QGesture.prototype = new QGesture_Wrapper(engine);
      QGesture.prototype = new Object();

      QGesture.prototype.toString = function() {
          //return "QGesture [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGesture [JS]";
        };
      QGesture.getObjectType = function() {
        return RJSType_QGesture.getIdStatic();
      };

      QGesture.prototype.getObjectType = function() {
        return RJSType_QGesture.getIdStatic();
      };

      QGesture.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGesture.getIdStatic()) {
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
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGesture.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGesture.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      