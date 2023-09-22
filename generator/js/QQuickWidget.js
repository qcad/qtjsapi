
      // auto generated
      //var self;

      // class constructor:
      function QQuickWidget() {
        

        // should be QQuickWidget_BaseJs.call(this, engine):
        //QQuickWidget.prototype = new QQuickWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType_QQuickWidget.getIdStatic()
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QQuickWidget);
            //}
          }
          else {
            qWarning("QQuickWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QQuickWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QQuickWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QQuickWidget_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QQuickWidget);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget(): wrong number / type of arguments");
      
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
  
    this["statusChanged(QQuickWidget::Status)"] = Object.getPrototypeOf(this).statusChanged;
  
          }
        }
      }

      //QQuickWidget.prototype = new QQuickWidget_BaseJs(engine);
      //QQuickWidget.prototype = new QQuickWidget_Wrapper(engine);
      QQuickWidget.prototype = new Object();

      QQuickWidget.prototype.toString = function() {
          //return "QQuickWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQuickWidget [JS]";
        };
      QQuickWidget.getObjectType = function() {
        
            return RJSType_QQuickWidget.getIdStatic();
          
      };

      QQuickWidget.prototype.getObjectType = function() {
        
            return RJSType_QQuickWidget.getIdStatic();
          
      };

      QQuickWidget.prototype.isOfObjectType = function(t) {
        
            if (t===RJSType_QQuickWidget.getIdStatic()) {
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
      
  // enum: ResizeMode
QQuickWidget.SizeViewToRootObject = QQuickWidget_Wrapper.SizeViewToRootObject;
QQuickWidget.SizeRootObjectToView = QQuickWidget_Wrapper.SizeRootObjectToView;

  // enum: Status
QQuickWidget.Null = QQuickWidget_Wrapper.Null;
QQuickWidget.Ready = QQuickWidget_Wrapper.Ready;
QQuickWidget.Loading = QQuickWidget_Wrapper.Loading;
QQuickWidget.Error = QQuickWidget_Wrapper.Error;


      // functions:
      
        // function 
        QQuickWidget.prototype.actionEvent = function() 
          
        {
          //print("JS: QQuickWidget.prototype.actionEvent");
          
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                return this.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // static functions:
      

        // static function 
        QQuickWidget.tr = function() 
          
        {
          //print("JS: QQuickWidget.tr");
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
                // calling static wrapper:
                return QQuickWidget_WrapperSingletonInstance.tr(
                  arguments[0], arguments[1], arguments[2]
                );
              

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget.tr(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QQuickWidget.setTabOrder = function() 
          
        {
          //print("JS: QQuickWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QQuickWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QQuickWidget.mouseGrabber = function() 
          
        {
          //print("JS: QQuickWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QQuickWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QQuickWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QQuickWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QQuickWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QQuickWidget);
  }

  
  else {
    
        print("QQuickWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQuickWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQuickWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    