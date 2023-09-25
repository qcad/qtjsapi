
      // auto generated
      //var self;

      // class constructor:
      function QFrame() {
        

        // should be QFrame_BaseJs.call(this, engine):
        //QFrame.prototype = new QFrame_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFrame.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QFrame);
            //}
          }
          else {
            qWarning("QFrame.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QFrame_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QFrame);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame(): wrong number / type of arguments");
      
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
  
          }
        }
      }

      //QFrame.prototype = new QFrame_BaseJs(engine);
      //QFrame.prototype = new QFrame_Wrapper(engine);
      QFrame.prototype = new Object();

      QFrame.prototype.toString = function() {
          //return "QFrame [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFrame [JS]";
        };
      QFrame.getObjectType = function() {
        return RJSType_QFrame.getIdStatic();
      };

      QFrame.prototype.getObjectType = function() {
        return RJSType_QFrame.getIdStatic();
      };

      QFrame.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFrame.getIdStatic()) {
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
        QFrame.prototype.actionEvent = function() 
          
        {
          //print("JS: QFrame.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QFrame.tr = function() 
          
        {
          //print("JS: QFrame.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QFrame_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFrame.setTabOrder = function() 
          
        {
          //print("JS: QFrame.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QFrame_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFrame.mouseGrabber = function() 
          
        {
          //print("JS: QFrame.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFrame_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QFrame.keyboardGrabber = function() 
          
        {
          //print("JS: QFrame.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QFrame_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFrame.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFrame.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    