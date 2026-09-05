
      // auto generated
      //var self;

      // class constructor:
      function QHelpEngineCore() {
        

        // should be QHelpEngineCore_BaseJs.call(this, engine):
        //QHelpEngineCore.prototype = new QHelpEngineCore_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHelpEngineCore.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QHelpEngineCore);
                
            //}
          }
          else {
            qWarning("QHelpEngineCore.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QHelpEngineCore_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QHelpEngineCore);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHelpEngineCore);
  }

  
  else {
    
        print("QHelpEngineCore(): wrong number / type of arguments");
      
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

      //QHelpEngineCore.prototype = new QHelpEngineCore_BaseJs(engine);
      //QHelpEngineCore.prototype = new QHelpEngineCore_Wrapper(engine);
      QHelpEngineCore.prototype = new Object();

      QHelpEngineCore.prototype.toString = function() {
          //return "QHelpEngineCore [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHelpEngineCore [JS]";
        };
      QHelpEngineCore.getObjectType = function() {
        return RJSType_QHelpEngineCore.getIdStatic();
      };

      QHelpEngineCore.prototype.getObjectType = function() {
        return RJSType_QHelpEngineCore.getIdStatic();
      };

      QHelpEngineCore.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHelpEngineCore.getIdStatic()) {
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
        QHelpEngineCore.namespaceName = function() 
          
        {
          //print("JS: QHelpEngineCore.namespaceName");
          
      if (arguments.length == 1) {
    
                // calling static wrapper:
                return QHelpEngineCore_WrapperSingletonInstance.namespaceName(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QHelpEngineCore);
  }

  
  else {
    
        print("QHelpEngineCore.namespaceName(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHelpEngineCore.metaData = function() 
          
        {
          //print("JS: QHelpEngineCore.metaData");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QHelpEngineCore_WrapperSingletonInstance.metaData(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QHelpEngineCore);
  }

  
  else {
    
        print("QHelpEngineCore.metaData(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHelpEngineCore.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHelpEngineCore.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      