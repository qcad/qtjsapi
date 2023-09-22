
      // auto generated
      //var self;

      // class constructor:
      function QMimeData() {
        

        // should be QMimeData_BaseJs.call(this, engine):
        //QMimeData.prototype = new QMimeData_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QMimeData.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMimeData);
            //}
          }
          else {
            qWarning("QMimeData.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QMimeData_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMimeData);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMimeData);
  }

  
  else {
    
        print("QMimeData(): wrong number / type of arguments");
      
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

      //QMimeData.prototype = new QMimeData_BaseJs(engine);
      //QMimeData.prototype = new QMimeData_Wrapper(engine);
      QMimeData.prototype = new Object();

      QMimeData.prototype.toString = function() {
          //return "QMimeData [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMimeData [JS]";
        };
      QMimeData.getObjectType = function() {
        
            return RJSType_QMimeData.getIdStatic();
          
      };

      QMimeData.prototype.getObjectType = function() {
        
            return RJSType_QMimeData.getIdStatic();
          
      };

      QMimeData.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QMimeData.getIdStatic()) {
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
        QMimeData.tr = function() 
          
        {
          //print("JS: QMimeData.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QMimeData_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMimeData);
  }

  
  else {
    
        print("QMimeData.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMimeData.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMimeData.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    