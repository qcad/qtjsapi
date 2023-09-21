
      // auto generated
      //var self;

      // class constructor:
      function QCheckBox() {
        

        // should be QCheckBox_BaseJs.call(this, engine):
        //QCheckBox.prototype = new QCheckBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QCheckBox_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QCheckBox);
            //}
          }
          else {
            qWarning("QCheckBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QCheckBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCheckBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QCheckBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QCheckBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox(): wrong number / type of arguments");
      
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
  
    this["clicked(bool)"] = Object.getPrototypeOf(this).clicked;
  
    this["toggled(bool)"] = Object.getPrototypeOf(this).toggled;
  
    this["stateChanged(int)"] = Object.getPrototypeOf(this).stateChanged;
  
          }
        }
      }

      //QCheckBox.prototype = new QCheckBox_BaseJs(engine);
      //QCheckBox.prototype = new QCheckBox_Wrapper(engine);
      QCheckBox.prototype = new Object();

      QCheckBox.prototype.toString = function() {
          //return "QCheckBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCheckBox [JS]";
        };
      QCheckBox.getObjectType = function() {
        
            return RJSType.QCheckBox_Type;
          
      };

      QCheckBox.prototype.getObjectType = function() {
        
            return RJSType.QCheckBox_Type;
          
      };

      QCheckBox.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QCheckBox_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        case RJSType.QAbstractButton_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QCheckBox_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            ,
            RJSType.QAbstractButton_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QCheckBox.prototype.actionEvent = function() 
          
        {
          //print("JS: QCheckBox.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QCheckBox.tr = function() 
          
        {
          //print("JS: QCheckBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QCheckBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCheckBox.setTabOrder = function() 
          
        {
          //print("JS: QCheckBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QCheckBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCheckBox.mouseGrabber = function() 
          
        {
          //print("JS: QCheckBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCheckBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QCheckBox.keyboardGrabber = function() 
          
        {
          //print("JS: QCheckBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QCheckBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QCheckBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCheckBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    