
      // auto generated
      //var self;

      // class constructor:
      function QAbstractSpinBox() {
        

        // should be QAbstractSpinBox_BaseJs.call(this, engine):
        //QAbstractSpinBox.prototype = new QAbstractSpinBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractSpinBox.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QAbstractSpinBox);
            //}
          }
          else {
            qWarning("QAbstractSpinBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractSpinBox.js: No constructor found for class QAbstractSpinBox");
            
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

      //QAbstractSpinBox.prototype = new QAbstractSpinBox_BaseJs(engine);
      //QAbstractSpinBox.prototype = new QAbstractSpinBox_Wrapper(engine);
      QAbstractSpinBox.prototype = new Object();

      QAbstractSpinBox.prototype.toString = function() {
          //return "QAbstractSpinBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractSpinBox [JS]";
        };
      QAbstractSpinBox.getObjectType = function() {
        return RJSType_QAbstractSpinBox.getIdStatic();
      };

      QAbstractSpinBox.prototype.getObjectType = function() {
        return RJSType_QAbstractSpinBox.getIdStatic();
      };

      QAbstractSpinBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractSpinBox.getIdStatic()) {
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
        QAbstractSpinBox.tr = function() 
          
        {
          //print("JS: QAbstractSpinBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QAbstractSpinBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QAbstractSpinBox);
  }

  
  else {
    
        print("QAbstractSpinBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractSpinBox.setTabOrder = function() 
          
        {
          //print("JS: QAbstractSpinBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QAbstractSpinBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QAbstractSpinBox);
  }

  
  else {
    
        print("QAbstractSpinBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractSpinBox.mouseGrabber = function() 
          
        {
          //print("JS: QAbstractSpinBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractSpinBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractSpinBox);
  }

  
  else {
    
        print("QAbstractSpinBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QAbstractSpinBox.keyboardGrabber = function() 
          
        {
          //print("JS: QAbstractSpinBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QAbstractSpinBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QAbstractSpinBox);
  }

  
  else {
    
        print("QAbstractSpinBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractSpinBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractSpinBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    