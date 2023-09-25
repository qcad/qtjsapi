
      // auto generated
      //var self;

      // class constructor:
      function QStackedWidget() {
        

        // should be QStackedWidget_BaseJs.call(this, engine):
        //QStackedWidget.prototype = new QStackedWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStackedWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QStackedWidget);
            //}
          }
          else {
            qWarning("QStackedWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QStackedWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QStackedWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget(): wrong number / type of arguments");
      
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
  
    this["currentChanged(int)"] = Object.getPrototypeOf(this).currentChanged;
  
    this["widgetRemoved(int)"] = Object.getPrototypeOf(this).widgetRemoved;
  
          }
        }
      }

      //QStackedWidget.prototype = new QStackedWidget_BaseJs(engine);
      //QStackedWidget.prototype = new QStackedWidget_Wrapper(engine);
      QStackedWidget.prototype = new Object();

      QStackedWidget.prototype.toString = function() {
          //return "QStackedWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStackedWidget [JS]";
        };
      QStackedWidget.getObjectType = function() {
        return RJSType_QStackedWidget.getIdStatic();
      };

      QStackedWidget.prototype.getObjectType = function() {
        return RJSType_QStackedWidget.getIdStatic();
      };

      QStackedWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStackedWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QStackedWidget.prototype.actionEvent = function() 
          
        {
          //print("JS: QStackedWidget.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QStackedWidget.tr = function() 
          
        {
          //print("JS: QStackedWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QStackedWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStackedWidget.setTabOrder = function() 
          
        {
          //print("JS: QStackedWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QStackedWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStackedWidget.mouseGrabber = function() 
          
        {
          //print("JS: QStackedWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QStackedWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QStackedWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QStackedWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QStackedWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QStackedWidget);
  }

  
  else {
    
        print("QStackedWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStackedWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStackedWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    