
      // auto generated
      //var self;

      // class constructor:
      function QGroupBox() {
        

        // should be QGroupBox_BaseJs.call(this, engine):
        //QGroupBox.prototype = new QGroupBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QGroupBox.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QGroupBox);
            //}
          }
          else {
            qWarning("QGroupBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QGroupBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QGroupBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGroupBox_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QGroupBox);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else {
    
        print("QGroupBox(): wrong number / type of arguments");
      
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
  
          }
        }
      }

      //QGroupBox.prototype = new QGroupBox_BaseJs(engine);
      //QGroupBox.prototype = new QGroupBox_Wrapper(engine);
      QGroupBox.prototype = new Object();

      QGroupBox.prototype.toString = function() {
          //return "QGroupBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGroupBox [JS]";
        };
      QGroupBox.getObjectType = function() {
        
            return RJSType_QGroupBox.getIdStatic();
          
      };

      QGroupBox.prototype.getObjectType = function() {
        
            return RJSType_QGroupBox.getIdStatic();
          
      };

      QGroupBox.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QGroupBox.getIdStatic()) {
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
        QGroupBox.prototype.actionEvent = function() 
          
        {
          //print("JS: QGroupBox.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else {
    
        print("QGroupBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QGroupBox.tr = function() 
          
        {
          //print("JS: QGroupBox.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QGroupBox_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else {
    
        print("QGroupBox.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGroupBox.setTabOrder = function() 
          
        {
          //print("JS: QGroupBox.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QGroupBox_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else {
    
        print("QGroupBox.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGroupBox.mouseGrabber = function() 
          
        {
          //print("JS: QGroupBox.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGroupBox_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else {
    
        print("QGroupBox.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QGroupBox.keyboardGrabber = function() 
          
        {
          //print("JS: QGroupBox.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QGroupBox_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else {
    
        print("QGroupBox.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGroupBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGroupBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    