
      // auto generated
      //var self;

      // class constructor:
      function QAbstractButton() {
        

        // should be QAbstractButton_BaseJs.call(this, engine):
        //QAbstractButton.prototype = new QAbstractButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractButton.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractButton);
            //}
          }
          else {
            qWarning("QAbstractButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractButton.js: No constructor found for class QAbstractButton");
            
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
  
    this["clicked(bool)"] = Object.getPrototypeOf(this).clicked;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
          }
        }
      }

      //QAbstractButton.prototype = new QAbstractButton_BaseJs(engine);
      //QAbstractButton.prototype = new QAbstractButton_Wrapper(engine);
      QAbstractButton.prototype = new Object();

      QAbstractButton.prototype.toString = function() {
          //return "QAbstractButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractButton [JS]";
        };
      QAbstractButton.getObjectType = function() {
        return RJSType_QAbstractButton.getIdStatic();
      };

      QAbstractButton.prototype.getObjectType = function() {
        return RJSType_QAbstractButton.getIdStatic();
      };

      QAbstractButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractButton.getIdStatic()) {
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
        QAbstractButton.prototype.actionEvent = function() 
          
        {
          //print("JS: QAbstractButton.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QAbstractButton);
  }

  
  else {
    
        print("QAbstractButton.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QAbstractButton.tr = function() 
          
        {
          //print("JS: QAbstractButton.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractButton_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractButton);
  }

  
  else {
    
        print("QAbstractButton.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractButton.setTabOrder = function() 
          
        {
          //print("JS: QAbstractButton.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QAbstractButton_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QAbstractButton);
  }

  
  else {
    
        print("QAbstractButton.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractButton.mouseGrabber = function() 
          
        {
          //print("JS: QAbstractButton.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractButton_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractButton);
  }

  
  else {
    
        print("QAbstractButton.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractButton.keyboardGrabber = function() 
          
        {
          //print("JS: QAbstractButton.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractButton_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractButton);
  }

  
  else {
    
        print("QAbstractButton.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    