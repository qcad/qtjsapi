
      // auto generated
      //var self;

      // class constructor:
      function QDrag() {
        

        // should be QDrag_BaseJs.call(this, engine):
        //QDrag.prototype = new QDrag_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QDrag_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDrag);
            //}
          }
          else {
            qWarning("QDrag.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QDrag_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDrag);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDrag);
  }

  
  else {
    
        print("QDrag(): wrong number / type of arguments");
      
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
            
    this["actionChanged(Qt::DropAction)"] = Object.getPrototypeOf(this).actionChanged;
  
    this["targetChanged(QObject*)"] = Object.getPrototypeOf(this).targetChanged;
  
          }
        }
      }

      //QDrag.prototype = new QDrag_BaseJs(engine);
      //QDrag.prototype = new QDrag_Wrapper(engine);
      QDrag.prototype = new Object();

      QDrag.prototype.toString = function() {
          //return "QDrag [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDrag [JS]";
        };
      QDrag.getObjectType = function() {
        
            return RJSType.QDrag_Type;
          
      };

      QDrag.prototype.getObjectType = function() {
        
            return RJSType.QDrag_Type;
          
      };

      QDrag.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QDrag_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QDrag_Type, 
          
            RJSType.QObject_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QDrag.tr = function() 
          
        {
          //print("JS: QDrag.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QDrag_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QDrag);
  }

  
  else {
    
        print("QDrag.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDrag.cancel = function() 
          
        {
          //print("JS: QDrag.cancel");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDrag_WrapperSingletonInstance.cancel(
                  
                );
              

        //copyProperties(this, wrapper, QDrag);
  }

  
  else {
    
        print("QDrag.cancel(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDrag.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDrag.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    