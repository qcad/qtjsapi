
      // auto generated
      //var self;

      // class constructor:
      function QDockWidget() {
        

        // should be QDockWidget_BaseJs.call(this, engine):
        //QDockWidget.prototype = new QDockWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QDockWidget.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QDockWidget);
            //}
          }
          else {
            qWarning("QDockWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QDockWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDockWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDockWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QDockWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else {
    
        print("QDockWidget(): wrong number / type of arguments");
      
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
  
    this["featuresChanged(QDockWidget::DockWidgetFeatures)"] = Object.getPrototypeOf(this).featuresChanged;
  
    this["topLevelChanged(bool)"] = Object.getPrototypeOf(this).topLevelChanged;
  
    this["allowedAreasChanged(Qt::DockWidgetAreas)"] = Object.getPrototypeOf(this).allowedAreasChanged;
  
    this["visibilityChanged(bool)"] = Object.getPrototypeOf(this).visibilityChanged;
  
    this["dockLocationChanged(Qt::DockWidgetArea)"] = Object.getPrototypeOf(this).dockLocationChanged;
  
          }
        }
      }

      //QDockWidget.prototype = new QDockWidget_BaseJs(engine);
      //QDockWidget.prototype = new QDockWidget_Wrapper(engine);
      QDockWidget.prototype = new Object();

      QDockWidget.prototype.toString = function() {
          //return "QDockWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDockWidget [JS]";
        };
      QDockWidget.getObjectType = function() {
        
            return RJSType_QDockWidget.getIdStatic();
          
      };

      QDockWidget.prototype.getObjectType = function() {
        
            return RJSType_QDockWidget.getIdStatic();
          
      };

      QDockWidget.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QDockWidget.getIdStatic()) {
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
      
  // enum: DockWidgetFeature
QDockWidget.DockWidgetClosable = QDockWidget_Wrapper.DockWidgetClosable;
QDockWidget.DockWidgetMovable = QDockWidget_Wrapper.DockWidgetMovable;
QDockWidget.DockWidgetFloatable = QDockWidget_Wrapper.DockWidgetFloatable;
QDockWidget.DockWidgetVerticalTitleBar = QDockWidget_Wrapper.DockWidgetVerticalTitleBar;
QDockWidget.DockWidgetFeatureMask = QDockWidget_Wrapper.DockWidgetFeatureMask;
QDockWidget.NoDockWidgetFeatures = QDockWidget_Wrapper.NoDockWidgetFeatures;
QDockWidget.Reserved = QDockWidget_Wrapper.Reserved;


      // functions:
      
        // function 
        QDockWidget.prototype.actionEvent = function() 
          
        {
          //print("JS: QDockWidget.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else {
    
        print("QDockWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QDockWidget.tr = function() 
          
        {
          //print("JS: QDockWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QDockWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else {
    
        print("QDockWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDockWidget.setTabOrder = function() 
          
        {
          //print("JS: QDockWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QDockWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else {
    
        print("QDockWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDockWidget.mouseGrabber = function() 
          
        {
          //print("JS: QDockWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDockWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else {
    
        print("QDockWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QDockWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QDockWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QDockWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else {
    
        print("QDockWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDockWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDockWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    