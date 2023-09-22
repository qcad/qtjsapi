
      // auto generated
      //var self;

      // class constructor:
      function QHBoxLayout() {
        

        // should be QHBoxLayout_BaseJs.call(this, engine):
        //QHBoxLayout.prototype = new QHBoxLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QHBoxLayout.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QHBoxLayout);
            //}
          }
          else {
            qWarning("QHBoxLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QHBoxLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QHBoxLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHBoxLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QHBoxLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QHBoxLayout);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHBoxLayout);
  }

  
  else {
    
        print("QHBoxLayout(): wrong number / type of arguments");
      
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

      //QHBoxLayout.prototype = new QHBoxLayout_BaseJs(engine);
      //QHBoxLayout.prototype = new QHBoxLayout_Wrapper(engine);
      QHBoxLayout.prototype = new Object();

      QHBoxLayout.prototype.toString = function() {
          //return "QHBoxLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHBoxLayout [JS]";
        };
      QHBoxLayout.getObjectType = function() {
        
            return RJSType_QHBoxLayout.getIdStatic();
          
      };

      QHBoxLayout.prototype.getObjectType = function() {
        
            return RJSType_QHBoxLayout.getIdStatic();
          
      };

      QHBoxLayout.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QHBoxLayout.getIdStatic()) {
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
        
          if (t===RJSType_QBoxLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Direction
QHBoxLayout.LeftToRight = QHBoxLayout_Wrapper.LeftToRight;
QHBoxLayout.RightToLeft = QHBoxLayout_Wrapper.RightToLeft;
QHBoxLayout.TopToBottom = QHBoxLayout_Wrapper.TopToBottom;
QHBoxLayout.BottomToTop = QHBoxLayout_Wrapper.BottomToTop;
QHBoxLayout.Down = QHBoxLayout_Wrapper.Down;
QHBoxLayout.Up = QHBoxLayout_Wrapper.Up;


      // functions:
      

      // static functions:
      

        // static function 
        QHBoxLayout.tr = function() 
          
        {
          //print("JS: QHBoxLayout.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QHBoxLayout_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QHBoxLayout);
  }

  
  else {
    
        print("QHBoxLayout.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHBoxLayout.closestAcceptableSize = function() 
          
        {
          //print("JS: QHBoxLayout.closestAcceptableSize");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QHBoxLayout_WrapperSingletonInstance.closestAcceptableSize(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QHBoxLayout);
  }

  
  else {
    
        print("QHBoxLayout.closestAcceptableSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QHBoxLayout.activateRecursiveHelper = function() 
          
        {
          //print("JS: QHBoxLayout.activateRecursiveHelper");
          
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHBoxLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHBoxLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    