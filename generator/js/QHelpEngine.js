
      // auto generated
      //var self;

      // class constructor:
      function QHelpEngine() {
        

        // should be QHelpEngine_BaseJs.call(this, engine):
        //QHelpEngine.prototype = new QHelpEngine_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpEngine.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QHelpEngine);
                
            //}
          }
          else {
            qWarning("QHelpEngine.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QHelpEngine_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHelpEngine);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHelpEngine);
  }

  
  else {
    
        print("QHelpEngine(): wrong number / type of arguments");
      
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
              
    this["warning(QString)"] = Object.getPrototypeOf(this).warning;
  
    this["currentFilterChanged(QString)"] = Object.getPrototypeOf(this).currentFilterChanged;
  
            }
          
        }

        

      }

      //QHelpEngine.prototype = new QHelpEngine_BaseJs(engine);
      //QHelpEngine.prototype = new QHelpEngine_Wrapper(engine);
      QHelpEngine.prototype = new Object();

      QHelpEngine.prototype.toString = function() {
          //return "QHelpEngine [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpEngine [JS]";
        };
      QHelpEngine.getObjectType = function() {
        return RJSType_QHelpEngine.getIdStatic();
      };

      QHelpEngine.prototype.getObjectType = function() {
        return RJSType_QHelpEngine.getIdStatic();
      };

      QHelpEngine.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpEngine.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QHelpEngineCore.getIdStatic()) {
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
      //QHelpEngine.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpEngine.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      