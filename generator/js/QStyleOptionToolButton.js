
      // auto generated
      //var self;

      // class constructor:
      function QStyleOptionToolButton() {
        

        // should be QStyleOptionToolButton_BaseJs.call(this, engine):
        //QStyleOptionToolButton.prototype = new QStyleOptionToolButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStyleOptionToolButton.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QStyleOptionToolButton);
                
            //}
          }
          else {
            qWarning("QStyleOptionToolButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStyleOptionToolButton_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionToolButton);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionToolButton);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStyleOptionToolButton_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QStyleOptionToolButton);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStyleOptionToolButton);
  }

  
  else {
    
        print("QStyleOptionToolButton(): wrong number / type of arguments");
      
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
          
        }

        

      }

      //QStyleOptionToolButton.prototype = new QStyleOptionToolButton_BaseJs(engine);
      //QStyleOptionToolButton.prototype = new QStyleOptionToolButton_Wrapper(engine);
      QStyleOptionToolButton.prototype = new Object();

      QStyleOptionToolButton.prototype.toString = function() {
          //return "QStyleOptionToolButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStyleOptionToolButton [JS]";
        };
      QStyleOptionToolButton.getObjectType = function() {
        return RJSType_QStyleOptionToolButton.getIdStatic();
      };

      QStyleOptionToolButton.prototype.getObjectType = function() {
        return RJSType_QStyleOptionToolButton.getIdStatic();
      };

      QStyleOptionToolButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStyleOptionToolButton.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QStyleOptionComplex.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: ToolButtonFeature
QStyleOptionToolButton.None = QStyleOptionToolButton_Wrapper.None;
QStyleOptionToolButton.Arrow = QStyleOptionToolButton_Wrapper.Arrow;
QStyleOptionToolButton.Menu = QStyleOptionToolButton_Wrapper.Menu;
QStyleOptionToolButton.MenuButtonPopup = QStyleOptionToolButton_Wrapper.MenuButtonPopup;
QStyleOptionToolButton.PopupDelay = QStyleOptionToolButton_Wrapper.PopupDelay;
QStyleOptionToolButton.HasMenu = QStyleOptionToolButton_Wrapper.HasMenu;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStyleOptionToolButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStyleOptionToolButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      