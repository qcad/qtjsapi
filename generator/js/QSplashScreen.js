
      // auto generated
      //var self;

      // class constructor:
      function QSplashScreen() {
        

        // should be QSplashScreen_BaseJs.call(this, engine):
        //QSplashScreen.prototype = new QSplashScreen_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QSplashScreen_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QSplashScreen);
            //}
          }
          else {
            qWarning("QSplashScreen.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSplashScreen_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSplashScreen);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSplashScreen_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QSplashScreen);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen(): wrong number / type of arguments");
      
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

      //QSplashScreen.prototype = new QSplashScreen_BaseJs(engine);
      //QSplashScreen.prototype = new QSplashScreen_Wrapper(engine);
      QSplashScreen.prototype = new Object();

      QSplashScreen.prototype.toString = function() {
          //return "QSplashScreen [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplashScreen [JS]";
        };
      QSplashScreen.getObjectType = function() {
        
            return RJSType.QSplashScreen_Type;
          
      };

      QSplashScreen.prototype.getObjectType = function() {
        
            return RJSType.QSplashScreen_Type;
          
      };

      QSplashScreen.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QSplashScreen_Type:
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
          RJSType.QSplashScreen_Type, 
          
            RJSType.QObject_Type
            ,
            RJSType.QWidget_Type
            
        ].includes(t);
        */
      };

      // enum values:
      

      // functions:
      
        // function 
        QSplashScreen.prototype.actionEvent = function() 
          
        {
          //print("JS: QSplashScreen.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QSplashScreen.tr = function() 
          
        {
          //print("JS: QSplashScreen.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QSplashScreen_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplashScreen.setTabOrder = function() 
          
        {
          //print("JS: QSplashScreen.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QSplashScreen_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplashScreen.mouseGrabber = function() 
          
        {
          //print("JS: QSplashScreen.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSplashScreen_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QSplashScreen.keyboardGrabber = function() 
          
        {
          //print("JS: QSplashScreen.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QSplashScreen_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplashScreen.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplashScreen.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    