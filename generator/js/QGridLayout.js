
      // auto generated
      //var self;

      // class constructor:
      function QGridLayout() {
        

        // should be QGridLayout_BaseJs.call(this, engine):
        //QGridLayout.prototype = new QGridLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGridLayout.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QGridLayout);
            //}
          }
          else {
            qWarning("QGridLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGridLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QGridLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGridLayout);
  }

  
  else {
    
        print("QGridLayout(): wrong number / type of arguments");
      
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

      //QGridLayout.prototype = new QGridLayout_BaseJs(engine);
      //QGridLayout.prototype = new QGridLayout_Wrapper(engine);
      QGridLayout.prototype = new Object();

      QGridLayout.prototype.toString = function() {
          //return "QGridLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGridLayout [JS]";
        };
      QGridLayout.getObjectType = function() {
        return RJSType_QGridLayout.getIdStatic();
      };

      QGridLayout.prototype.getObjectType = function() {
        return RJSType_QGridLayout.getIdStatic();
      };

      QGridLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGridLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QGridLayout.tr = function() 
          
        {
          //print("JS: QGridLayout.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QGridLayout_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QGridLayout);
  }

  
  else {
    
        print("QGridLayout.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGridLayout.closestAcceptableSize = function() 
          
        {
          //print("JS: QGridLayout.closestAcceptableSize");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QGridLayout_WrapperSingletonInstance.closestAcceptableSize(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QGridLayout);
  }

  
  else {
    
        print("QGridLayout.closestAcceptableSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGridLayout.activateRecursiveHelper = function() 
          
        {
          //print("JS: QGridLayout.activateRecursiveHelper");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGridLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGridLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    