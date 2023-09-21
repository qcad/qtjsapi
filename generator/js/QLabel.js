
      // auto generated
      //var self;

      // class constructor:
      function QLabel() {
        

        // should be QLabel_BaseJs.call(this, engine):
        //QLabel.prototype = new QLabel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QLabel_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QLabel);
            //}
          }
          else {
            qWarning("QLabel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QLabel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLabel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLabel);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QLabel_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QLabel);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel(): wrong number / type of arguments");
      
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
  
    this["linkActivated(QString)"] = Object.getPrototypeOf(this).linkActivated;
  
    this["linkHovered(QString)"] = Object.getPrototypeOf(this).linkHovered;
  
          }
        }
      }

      //QLabel.prototype = new QLabel_BaseJs(engine);
      //QLabel.prototype = new QLabel_Wrapper(engine);
      QLabel.prototype = new Object();

      QLabel.prototype.toString = function() {
          //return "QLabel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLabel [JS]";
        };
      QLabel.getObjectType = function() {
        
            return RJSType.QLabel_Type;
          
      };

      QLabel.prototype.getObjectType = function() {
        
            return RJSType.QLabel_Type;
          
      };

      QLabel.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QLabel_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        case RJSType.QFrame_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QLabel_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            ,
            RJSType.QFrame_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QLabel.prototype.actionEvent = function() 
          
        {
          //print("JS: QLabel.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QLabel.tr = function() 
          
        {
          //print("JS: QLabel.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QLabel_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLabel.setTabOrder = function() 
          
        {
          //print("JS: QLabel.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QLabel_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLabel.mouseGrabber = function() 
          
        {
          //print("JS: QLabel.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QLabel_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLabel.keyboardGrabber = function() 
          
        {
          //print("JS: QLabel.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QLabel_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLabel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLabel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    