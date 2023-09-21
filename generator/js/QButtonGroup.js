
      // auto generated
      //var self;

      // class constructor:
      function QButtonGroup() {
        

        // should be QButtonGroup_BaseJs.call(this, engine):
        //QButtonGroup.prototype = new QButtonGroup_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QButtonGroup_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QButtonGroup);
            //}
          }
          else {
            qWarning("QButtonGroup.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QButtonGroup_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QButtonGroup);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QButtonGroup);
  }

  
  else {
    
        print("QButtonGroup(): wrong number / type of arguments");
      
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
            
    this["buttonClicked(QAbstractButton*)"] = Object.getPrototypeOf(this).buttonClicked;
  
    this["buttonPressed(QAbstractButton*)"] = Object.getPrototypeOf(this).buttonPressed;
  
    this["buttonReleased(QAbstractButton*)"] = Object.getPrototypeOf(this).buttonReleased;
  
    this["buttonToggled(QAbstractButton*,bool)"] = Object.getPrototypeOf(this).buttonToggled;
  
    this["idClicked(int)"] = Object.getPrototypeOf(this).idClicked;
  
    this["idPressed(int)"] = Object.getPrototypeOf(this).idPressed;
  
    this["idReleased(int)"] = Object.getPrototypeOf(this).idReleased;
  
    this["idToggled(int,bool)"] = Object.getPrototypeOf(this).idToggled;
  
          }
        }
      }

      //QButtonGroup.prototype = new QButtonGroup_BaseJs(engine);
      //QButtonGroup.prototype = new QButtonGroup_Wrapper(engine);
      QButtonGroup.prototype = new Object();

      QButtonGroup.prototype.toString = function() {
          //return "QButtonGroup [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QButtonGroup [JS]";
        };
      QButtonGroup.getObjectType = function() {
        
            return RJSType.QButtonGroup_Type;
          
      };

      QButtonGroup.prototype.getObjectType = function() {
        
            return RJSType.QButtonGroup_Type;
          
      };

      QButtonGroup.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QButtonGroup_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QButtonGroup_Type, 
          
            RJSType.QObject_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QButtonGroup.tr = function() 
          
        {
          //print("JS: QButtonGroup.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QButtonGroup_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QButtonGroup);
  }

  
  else {
    
        print("QButtonGroup.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QButtonGroup.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QButtonGroup.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    