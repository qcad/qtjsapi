
      // auto generated
      //var self;

      // class constructor:
      function QMenu() {
        

        // should be QMenu_BaseJs.call(this, engine):
        //QMenu.prototype = new QMenu_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMenu.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QMenu);
                
            //}
          }
          else {
            qWarning("QMenu.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QMenu_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QMenu);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMenu);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMenu_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QMenu);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu(): wrong number / type of arguments");
      
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
              
    this["customContextMenuRequested(QPoint)"] = Object.getPrototypeOf(this).customContextMenuRequested;
  
    this["triggered(QAction*)"] = Object.getPrototypeOf(this).triggered;
  
    this["hovered(QAction*)"] = Object.getPrototypeOf(this).hovered;
  
            }
          
        }

        

      }

      //QMenu.prototype = new QMenu_BaseJs(engine);
      //QMenu.prototype = new QMenu_Wrapper(engine);
      QMenu.prototype = new Object();

      QMenu.prototype.toString = function() {
          //return "QMenu [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMenu [JS]";
        };
      QMenu.getObjectType = function() {
        return RJSType_QMenu.getIdStatic();
      };

      QMenu.prototype.getObjectType = function() {
        return RJSType_QMenu.getIdStatic();
      };

      QMenu.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMenu.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      

      // static functions:
      

        // static function 
        QMenu.exec = function() 
          
        {
          //print("JS: QMenu.exec");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QMenu_WrapperSingletonInstance.exec(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu.exec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMenu.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMenu.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      