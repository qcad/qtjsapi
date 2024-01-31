
      // auto generated
      //var self;

      // class constructor:
      function QTabWidget() {
        

        // should be QTabWidget_BaseJs.call(this, engine):
        //QTabWidget.prototype = new QTabWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTabWidget.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QTabWidget);
            //}
          }
          else {
            qWarning("QTabWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTabWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QTabWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTabWidget);
  }

  
  else {
    
        print("QTabWidget(): wrong number / type of arguments");
      
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
  
    this["tabCloseRequested(int)"] = Object.getPrototypeOf(this).tabCloseRequested;
  
    this["tabBarClicked(int)"] = Object.getPrototypeOf(this).tabBarClicked;
  
    this["tabBarDoubleClicked(int)"] = Object.getPrototypeOf(this).tabBarDoubleClicked;
  
          }
        }
      }

      //QTabWidget.prototype = new QTabWidget_BaseJs(engine);
      //QTabWidget.prototype = new QTabWidget_Wrapper(engine);
      QTabWidget.prototype = new Object();

      QTabWidget.prototype.toString = function() {
          //return "QTabWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTabWidget [JS]";
        };
      QTabWidget.getObjectType = function() {
        return RJSType_QTabWidget.getIdStatic();
      };

      QTabWidget.prototype.getObjectType = function() {
        return RJSType_QTabWidget.getIdStatic();
      };

      QTabWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTabWidget.getIdStatic()) {
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
      
  // enum: TabPosition
QTabWidget.North = QTabWidget_Wrapper.North;
QTabWidget.South = QTabWidget_Wrapper.South;
QTabWidget.West = QTabWidget_Wrapper.West;
QTabWidget.East = QTabWidget_Wrapper.East;

  // enum: TabShape
QTabWidget.Rounded = QTabWidget_Wrapper.Rounded;
QTabWidget.Triangular = QTabWidget_Wrapper.Triangular;


      // functions:
      

      // static functions:
      

        // static function 
        QTabWidget.tr = function() 
          
        {
          //print("JS: QTabWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QTabWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QTabWidget);
  }

  
  else {
    
        print("QTabWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTabWidget.setTabOrder = function() 
          
        {
          //print("JS: QTabWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QTabWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QTabWidget);
  }

  
  else {
    
        print("QTabWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTabWidget.mouseGrabber = function() 
          
        {
          //print("JS: QTabWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTabWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTabWidget);
  }

  
  else {
    
        print("QTabWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QTabWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QTabWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QTabWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QTabWidget);
  }

  
  else {
    
        print("QTabWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTabWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTabWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    