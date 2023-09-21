
      // auto generated
      //var self;

      // class constructor:
      function QStatusBar() {
        

        // should be QStatusBar_BaseJs.call(this, engine):
        //QStatusBar.prototype = new QStatusBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QStatusBar_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QStatusBar);
            //}
          }
          else {
            qWarning("QStatusBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QStatusBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStatusBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStatusBar);
  }

  
  else {
    
        print("QStatusBar(): wrong number / type of arguments");
      
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
  
    this["messageChanged(QString)"] = Object.getPrototypeOf(this).messageChanged;
  
          }
        }
      }

      //QStatusBar.prototype = new QStatusBar_BaseJs(engine);
      //QStatusBar.prototype = new QStatusBar_Wrapper(engine);
      QStatusBar.prototype = new Object();

      QStatusBar.prototype.toString = function() {
          //return "QStatusBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStatusBar [JS]";
        };
      QStatusBar.getObjectType = function() {
        
            return RJSType.QStatusBar_Type;
          
      };

      QStatusBar.prototype.getObjectType = function() {
        
            return RJSType.QStatusBar_Type;
          
      };

      QStatusBar.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QStatusBar_Type:
              return true;
          
        case RJSType.QObject_Type:
          return true;
        
        case RJSType.QWidget_Type:
          return true;
        
        default:
          return false;
        }

        /*
        return [
          RJSType.QStatusBar_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QStatusBar.prototype.actionEvent = function() 
          
        {
          //print("JS: QStatusBar.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QStatusBar);
  }

  
  else {
    
        print("QStatusBar.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QStatusBar.tr = function() 
          
        {
          //print("JS: QStatusBar.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QStatusBar_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QStatusBar);
  }

  
  else {
    
        print("QStatusBar.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStatusBar.setTabOrder = function() 
          
        {
          //print("JS: QStatusBar.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QStatusBar_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QStatusBar);
  }

  
  else {
    
        print("QStatusBar.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStatusBar.mouseGrabber = function() 
          
        {
          //print("JS: QStatusBar.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QStatusBar_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QStatusBar);
  }

  
  else {
    
        print("QStatusBar.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStatusBar.keyboardGrabber = function() 
          
        {
          //print("JS: QStatusBar.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QStatusBar_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QStatusBar);
  }

  
  else {
    
        print("QStatusBar.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStatusBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStatusBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    