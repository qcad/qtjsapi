
      // auto generated
      //var self;

      // class constructor:
      function QMenuBar() {
        

        // should be QMenuBar_BaseJs.call(this, engine):
        //QMenuBar.prototype = new QMenuBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QMenuBar_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QMenuBar);
            //}
          }
          else {
            qWarning("QMenuBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMenuBar_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QMenuBar);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar(): wrong number / type of arguments");
      
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

      //QMenuBar.prototype = new QMenuBar_BaseJs(engine);
      //QMenuBar.prototype = new QMenuBar_Wrapper(engine);
      QMenuBar.prototype = new Object();

      QMenuBar.prototype.toString = function() {
          //return "QMenuBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMenuBar [JS]";
        };
      QMenuBar.getObjectType = function() {
        
            return RJSType.QMenuBar_Type;
          
      };

      QMenuBar.prototype.getObjectType = function() {
        
            return RJSType.QMenuBar_Type;
          
      };

      QMenuBar.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QMenuBar_Type:
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
          RJSType.QMenuBar_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QMenuBar.prototype.actionEvent = function() 
          
        {
          //print("JS: QMenuBar.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QMenuBar.tr = function() 
          
        {
          //print("JS: QMenuBar.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QMenuBar_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMenuBar.setTabOrder = function() 
          
        {
          //print("JS: QMenuBar.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QMenuBar_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMenuBar.mouseGrabber = function() 
          
        {
          //print("JS: QMenuBar.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMenuBar_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QMenuBar.keyboardGrabber = function() 
          
        {
          //print("JS: QMenuBar.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QMenuBar_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMenuBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMenuBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    