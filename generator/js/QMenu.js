
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
      
        // function 
        QMenu.prototype.actionEvent = function() 
          
        {
          //print("JS: QMenu.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QMenu.tr = function() 
          
        {
          //print("JS: QMenu.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QMenu_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMenu.setTabOrder = function() 
          
        {
          //print("JS: QMenu.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QMenu_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMenu.mouseGrabber = function() 
          
        {
          //print("JS: QMenu.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMenu_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMenu.keyboardGrabber = function() 
          
        {
          //print("JS: QMenu.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMenu_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

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
    