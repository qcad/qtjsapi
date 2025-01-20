
      // auto generated
      //var self;

      // class constructor:
      function QQmlApplicationEngine() {
        

        // should be QQmlApplicationEngine_BaseJs.call(this, engine):
        //QQmlApplicationEngine.prototype = new QQmlApplicationEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQmlApplicationEngine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QQmlApplicationEngine);
                
            //}
          }
          else {
            qWarning("QQmlApplicationEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QQmlApplicationEngine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QQmlApplicationEngine);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQmlApplicationEngine);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QQmlApplicationEngine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QQmlApplicationEngine);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQmlApplicationEngine);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QQmlApplicationEngine_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QQmlApplicationEngine);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQmlApplicationEngine);
  }

  
  else {
    
        print("QQmlApplicationEngine(): wrong number / type of arguments");
      
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
              
    this["objectCreated(QObject*,QUrl)"] = Object.getPrototypeOf(this).objectCreated;
  
    this["objectCreationFailed(QUrl)"] = Object.getPrototypeOf(this).objectCreationFailed;
  
            }
          
        }

        

      }

      //QQmlApplicationEngine.prototype = new QQmlApplicationEngine_BaseJs(engine);
      //QQmlApplicationEngine.prototype = new QQmlApplicationEngine_Wrapper(engine);
      QQmlApplicationEngine.prototype = new Object();

      QQmlApplicationEngine.prototype.toString = function() {
          //return "QQmlApplicationEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQmlApplicationEngine [JS]";
        };
      QQmlApplicationEngine.getObjectType = function() {
        return RJSType_QQmlApplicationEngine.getIdStatic();
      };

      QQmlApplicationEngine.prototype.getObjectType = function() {
        return RJSType_QQmlApplicationEngine.getIdStatic();
      };

      QQmlApplicationEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQmlApplicationEngine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QJSEngine.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QQmlEngine.getIdStatic()) {
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
      //QQmlApplicationEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQmlApplicationEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      