
      // auto generated
      //var self;

      // class constructor:
      function QVBoxLayout() {
        

        // should be QVBoxLayout_BaseJs.call(this, engine):
        //QVBoxLayout.prototype = new QVBoxLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QVBoxLayout_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QVBoxLayout);
            //}
          }
          else {
            qWarning("QVBoxLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QVBoxLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QVBoxLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QVBoxLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QVBoxLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QVBoxLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QVBoxLayout);
  }

  
  else {
    
        print("QVBoxLayout(): wrong number / type of arguments");
      
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

      //QVBoxLayout.prototype = new QVBoxLayout_BaseJs(engine);
      //QVBoxLayout.prototype = new QVBoxLayout_Wrapper(engine);
      QVBoxLayout.prototype = new Object();

      QVBoxLayout.prototype.toString = function() {
          //return "QVBoxLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QVBoxLayout [JS]";
        };
      QVBoxLayout.getObjectType = function() {
        
            return RJSType.QVBoxLayout_Type;
          
      };

      QVBoxLayout.prototype.getObjectType = function() {
        
            return RJSType.QVBoxLayout_Type;
          
      };

      QVBoxLayout.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QVBoxLayout_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QLayoutItem_Type:
          return true;
        
        case RJSType.QLayout_Type:
          return true;
        
        case RJSType.QBoxLayout_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QVBoxLayout_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QLayoutItem_Type
            ,
            RJSType.QLayout_Type
            ,
            RJSType.QBoxLayout_Type
            
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Direction
QVBoxLayout.LeftToRight = QVBoxLayout_Wrapper.LeftToRight;
QVBoxLayout.RightToLeft = QVBoxLayout_Wrapper.RightToLeft;
QVBoxLayout.TopToBottom = QVBoxLayout_Wrapper.TopToBottom;
QVBoxLayout.BottomToTop = QVBoxLayout_Wrapper.BottomToTop;
QVBoxLayout.Down = QVBoxLayout_Wrapper.Down;
QVBoxLayout.Up = QVBoxLayout_Wrapper.Up;


      // functions:
      

      // static functions:
      

        // static function 
        QVBoxLayout.tr = function() 
          
        {
          //print("JS: QVBoxLayout.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QVBoxLayout_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QVBoxLayout);
  }

  
  else {
    
        print("QVBoxLayout.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QVBoxLayout.closestAcceptableSize = function() 
          
        {
          //print("JS: QVBoxLayout.closestAcceptableSize");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QVBoxLayout_WrapperSingletonInstance.closestAcceptableSize(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QVBoxLayout);
  }

  
  else {
    
        print("QVBoxLayout.closestAcceptableSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QVBoxLayout.activateRecursiveHelper = function() 
          
        {
          //print("JS: QVBoxLayout.activateRecursiveHelper");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QVBoxLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QVBoxLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    