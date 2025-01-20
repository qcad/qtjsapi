
      // auto generated
      //var self;

      // class constructor:
      function QQuickView() {
        

        // should be QQuickView_BaseJs.call(this, engine):
        //QQuickView.prototype = new QQuickView_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QQuickView.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QQuickView);
                
            //}
          }
          else {
            qWarning("QQuickView.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QQuickView_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QQuickView);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQuickView);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QQuickView_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QQuickView);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QQuickView);
  }

  
  else {
    
        print("QQuickView(): wrong number / type of arguments");
      
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
              
    this["screenChanged(QScreen*)"] = Object.getPrototypeOf(this).screenChanged;
  
    this["modalityChanged(Qt::WindowModality)"] = Object.getPrototypeOf(this).modalityChanged;
  
    this["windowStateChanged(Qt::WindowState)"] = Object.getPrototypeOf(this).windowStateChanged;
  
    this["windowTitleChanged(QString)"] = Object.getPrototypeOf(this).windowTitleChanged;
  
    this["xChanged(int)"] = Object.getPrototypeOf(this).xChanged;
  
    this["yChanged(int)"] = Object.getPrototypeOf(this).yChanged;
  
    this["widthChanged(int)"] = Object.getPrototypeOf(this).widthChanged;
  
    this["heightChanged(int)"] = Object.getPrototypeOf(this).heightChanged;
  
    this["minimumWidthChanged(int)"] = Object.getPrototypeOf(this).minimumWidthChanged;
  
    this["minimumHeightChanged(int)"] = Object.getPrototypeOf(this).minimumHeightChanged;
  
    this["maximumWidthChanged(int)"] = Object.getPrototypeOf(this).maximumWidthChanged;
  
    this["maximumHeightChanged(int)"] = Object.getPrototypeOf(this).maximumHeightChanged;
  
    this["visibleChanged(bool)"] = Object.getPrototypeOf(this).visibleChanged;
  
    this["visibilityChanged(QWindow::Visibility)"] = Object.getPrototypeOf(this).visibilityChanged;
  
    this["contentOrientationChanged(Qt::ScreenOrientation)"] = Object.getPrototypeOf(this).contentOrientationChanged;
  
    this["focusObjectChanged(QObject*)"] = Object.getPrototypeOf(this).focusObjectChanged;
  
    this["opacityChanged(qreal)"] = Object.getPrototypeOf(this).opacityChanged;
  
    this["transientParentChanged(QWindow*)"] = Object.getPrototypeOf(this).transientParentChanged;
  
    this["statusChanged(QQuickView::Status)"] = Object.getPrototypeOf(this).statusChanged;
  
            }
          
        }

        

      }

      //QQuickView.prototype = new QQuickView_BaseJs(engine);
      //QQuickView.prototype = new QQuickView_Wrapper(engine);
      QQuickView.prototype = new Object();

      QQuickView.prototype.toString = function() {
          //return "QQuickView [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QQuickView [JS]";
        };
      QQuickView.getObjectType = function() {
        return RJSType_QQuickView.getIdStatic();
      };

      QQuickView.prototype.getObjectType = function() {
        return RJSType_QQuickView.getIdStatic();
      };

      QQuickView.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QQuickView.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWindow.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Visibility
QQuickView.Hidden = QQuickView_Wrapper.Hidden;
QQuickView.AutomaticVisibility = QQuickView_Wrapper.AutomaticVisibility;
QQuickView.Windowed = QQuickView_Wrapper.Windowed;
QQuickView.Minimized = QQuickView_Wrapper.Minimized;
QQuickView.Maximized = QQuickView_Wrapper.Maximized;
QQuickView.FullScreen = QQuickView_Wrapper.FullScreen;

  // enum: AncestorMode
QQuickView.ExcludeTransients = QQuickView_Wrapper.ExcludeTransients;
QQuickView.IncludeTransients = QQuickView_Wrapper.IncludeTransients;

  // enum: ResizeMode
QQuickView.SizeViewToRootObject = QQuickView_Wrapper.SizeViewToRootObject;
QQuickView.SizeRootObjectToView = QQuickView_Wrapper.SizeRootObjectToView;

  // enum: Status
QQuickView.Null = QQuickView_Wrapper.Null;
QQuickView.Ready = QQuickView_Wrapper.Ready;
QQuickView.Loading = QQuickView_Wrapper.Loading;
QQuickView.Error = QQuickView_Wrapper.Error;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QQuickView.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QQuickView.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      