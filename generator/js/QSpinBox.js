
      // auto generated
      //var self;

      // class constructor:
      function QSpinBox() {
        

        // should be QSpinBox_BaseJs.call(this, engine):
        //QSpinBox.prototype = new QSpinBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QSpinBox_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSpinBox);
            //}
          }
          else {
            qWarning("QSpinBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSpinBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSpinBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox(): wrong number / type of arguments");
      
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
  
    this["textChanged(QString)"] = Object.getPrototypeOf(this).textChanged;
  
          }
        }
      }

      //QSpinBox.prototype = new QSpinBox_BaseJs(engine);
      //QSpinBox.prototype = new QSpinBox_Wrapper(engine);
      QSpinBox.prototype = new Object();

      QSpinBox.prototype.toString = function() {
          //return "QSpinBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSpinBox [JS]";
        };
      QSpinBox.getObjectType = function() {
        
            return RJSType.QSpinBox_Type;
          
      };

      QSpinBox.prototype.getObjectType = function() {
        
            return RJSType.QSpinBox_Type;
          
      };

      QSpinBox.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QSpinBox_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        case RJSType.QAbstractSpinBox_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QSpinBox_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            ,
            RJSType.QAbstractSpinBox_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QSpinBox.prototype.actionEvent = function() 
          
        {
          //print("JS: QSpinBox.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QSpinBox.tr = function() 
          
        {
          //print("JS: QSpinBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QSpinBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSpinBox.setTabOrder = function() 
          
        {
          //print("JS: QSpinBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSpinBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSpinBox.mouseGrabber = function() 
          
        {
          //print("JS: QSpinBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSpinBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSpinBox.keyboardGrabber = function() 
          
        {
          //print("JS: QSpinBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSpinBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSpinBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSpinBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    