
      // auto generated
      //var self;

      // class constructor:
      function QQmlEngine() {
        

        // should be QQmlEngine_BaseJs.call(this, engine):
        //QQmlEngine.prototype = new QQmlEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQmlEngine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QQmlEngine);
            //}
          }
          else {
            qWarning("QQmlEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QQmlEngine_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QQmlEngine);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQmlEngine);
  }

  
  else {
    
        print("QQmlEngine(): wrong number / type of arguments");
      
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

      //QQmlEngine.prototype = new QQmlEngine_BaseJs(engine);
      //QQmlEngine.prototype = new QQmlEngine_Wrapper(engine);
      QQmlEngine.prototype = new Object();

      QQmlEngine.prototype.toString = function() {
          //return "QQmlEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQmlEngine [JS]";
        };
      QQmlEngine.getObjectType = function() {
        return RJSType_QQmlEngine.getIdStatic();
      };

      QQmlEngine.prototype.getObjectType = function() {
        return RJSType_QQmlEngine.getIdStatic();
      };

      QQmlEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQmlEngine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QJSEngine.getIdStatic()) {
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
      //QQmlEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQmlEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    