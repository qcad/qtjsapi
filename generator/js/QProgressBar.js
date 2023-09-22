
      // auto generated
      //var self;

      // class constructor:
      function QProgressBar() {
        

        // should be QProgressBar_BaseJs.call(this, engine):
        //QProgressBar.prototype = new QProgressBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QProgressBar.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QProgressBar);
            //}
          }
          else {
            qWarning("QProgressBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QProgressBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QProgressBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar(): wrong number / type of arguments");
      
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
  
    this["valueChanged(int)"] = Object.getPrototypeOf(this).valueChanged;
  
          }
        }
      }

      //QProgressBar.prototype = new QProgressBar_BaseJs(engine);
      //QProgressBar.prototype = new QProgressBar_Wrapper(engine);
      QProgressBar.prototype = new Object();

      QProgressBar.prototype.toString = function() {
          //return "QProgressBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QProgressBar [JS]";
        };
      QProgressBar.getObjectType = function() {
        
            return RJSType_QProgressBar.getIdStatic();
          
      };

      QProgressBar.prototype.getObjectType = function() {
        
            return RJSType_QProgressBar.getIdStatic();
          
      };

      QProgressBar.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QProgressBar.getIdStatic()) {
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
      
  // enum: Direction
QProgressBar.TopToBottom = QProgressBar_Wrapper.TopToBottom;
QProgressBar.BottomToTop = QProgressBar_Wrapper.BottomToTop;


      // functions:
      
        // function 
        QProgressBar.prototype.actionEvent = function() 
          
        {
          //print("JS: QProgressBar.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QProgressBar.tr = function() 
          
        {
          //print("JS: QProgressBar.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QProgressBar_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QProgressBar.setTabOrder = function() 
          
        {
          //print("JS: QProgressBar.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QProgressBar_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QProgressBar.mouseGrabber = function() 
          
        {
          //print("JS: QProgressBar.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QProgressBar_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QProgressBar.keyboardGrabber = function() 
          
        {
          //print("JS: QProgressBar.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QProgressBar_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QProgressBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QProgressBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    