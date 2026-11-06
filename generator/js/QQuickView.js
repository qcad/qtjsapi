
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QQuickView.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QQuickView.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QQuickView.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QQuickView.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QQuickView.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QQuickView.prototype.findChild = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QQuickView.prototype.children = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QQuickView.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QQuickView.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QQuickView.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QQuickView.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QQuickView.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QQuickView.prototype.property = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QQuickView.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QQuickView.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QQuickView.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QQuickView.prototype.setVisibility = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setVisibility");
          
              return this.__PROXY__.setVisibility(...args);
            
        };
        
        // function 
        QQuickView.prototype.create = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QQuickView.prototype.parent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QQuickView.prototype.setParent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QQuickView.prototype.isTopLevel = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isTopLevel");
          
              return this.__PROXY__.isTopLevel(...args);
            
        };
        
        // function 
        QQuickView.prototype.isModal = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QQuickView.prototype.setModality = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setModality");
          
              return this.__PROXY__.setModality(...args);
            
        };
        
        // function 
        QQuickView.prototype.setFlags = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setFlags");
          
              return this.__PROXY__.setFlags(...args);
            
        };
        
        // function 
        QQuickView.prototype.setFlag = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setFlag");
          
              return this.__PROXY__.setFlag(...args);
            
        };
        
        // function 
        QQuickView.prototype.type = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
        
        // function 
        QQuickView.prototype.setOpacity = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setOpacity");
          
              return this.__PROXY__.setOpacity(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMask = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QQuickView.prototype.mask = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QQuickView.prototype.isActive = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isActive");
          
              return this.__PROXY__.isActive(...args);
            
        };
        
        // function 
        QQuickView.prototype.reportContentOrientationChange = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.reportContentOrientationChange");
          
              return this.__PROXY__.reportContentOrientationChange(...args);
            
        };
        
        // function 
        QQuickView.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
        
        // function 
        QQuickView.prototype.windowState = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QQuickView.prototype.windowStates = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.windowStates");
          
              return this.__PROXY__.windowStates(...args);
            
        };
        
        // function 
        QQuickView.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QQuickView.prototype.setWindowStates = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setWindowStates");
          
              return this.__PROXY__.setWindowStates(...args);
            
        };
        
        // function 
        QQuickView.prototype.setTransientParent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setTransientParent");
          
              return this.__PROXY__.setTransientParent(...args);
            
        };
        
        // function 
        QQuickView.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QQuickView.prototype.isExposed = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.isExposed");
          
              return this.__PROXY__.isExposed(...args);
            
        };
        
        // function 
        QQuickView.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
        
        // function 
        QQuickView.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
        // function 
        QQuickView.prototype.baseSize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.baseSize");
          
              return this.__PROXY__.baseSize(...args);
            
        };
        
        // function 
        QQuickView.prototype.sizeIncrement = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.sizeIncrement");
          
              return this.__PROXY__.sizeIncrement(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QQuickView.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QQuickView.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QQuickView.prototype.geometry = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QQuickView.prototype.frameMargins = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.frameMargins");
          
              return this.__PROXY__.frameMargins(...args);
            
        };
        
        // function 
        QQuickView.prototype.frameGeometry = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.frameGeometry");
          
              return this.__PROXY__.frameGeometry(...args);
            
        };
        
        // function 
        QQuickView.prototype.framePosition = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.framePosition");
          
              return this.__PROXY__.framePosition(...args);
            
        };
        
        // function 
        QQuickView.prototype.setFramePosition = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setFramePosition");
          
              return this.__PROXY__.setFramePosition(...args);
            
        };
        
        // function 
        QQuickView.prototype.size = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
        
        // function 
        QQuickView.prototype.position = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
        
        // function 
        QQuickView.prototype.setPosition = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setPosition");
          
              return this.__PROXY__.setPosition(...args);
            
        };
        
        // function 
        QQuickView.prototype.resize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QQuickView.prototype.setFilePath = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setFilePath");
          
              return this.__PROXY__.setFilePath(...args);
            
        };
        
        // function 
        QQuickView.prototype.filePath = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.filePath");
          
              return this.__PROXY__.filePath(...args);
            
        };
        
        // function 
        QQuickView.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
        
        // function 
        QQuickView.prototype.icon = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.icon");
          
              return this.__PROXY__.icon(...args);
            
        };
        
        // function 
        QQuickView.prototype.destroy = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QQuickView.prototype.setKeyboardGrabEnabled = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setKeyboardGrabEnabled");
          
              return this.__PROXY__.setKeyboardGrabEnabled(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMouseGrabEnabled = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMouseGrabEnabled");
          
              return this.__PROXY__.setMouseGrabEnabled(...args);
            
        };
        
        // function 
        QQuickView.prototype.screen = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.screen");
          
              return this.__PROXY__.screen(...args);
            
        };
        
        // function 
        QQuickView.prototype.setScreen = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setScreen");
          
              return this.__PROXY__.setScreen(...args);
            
        };
        
        // function 
        QQuickView.prototype.focusObject = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.focusObject");
          
              return this.__PROXY__.focusObject(...args);
            
        };
        
        // function 
        QQuickView.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QQuickView.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QQuickView.prototype.cursor = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.cursor");
          
              return this.__PROXY__.cursor(...args);
            
        };
        
        // function 
        QQuickView.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QQuickView.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QQuickView.prototype.requestActivate = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.requestActivate");
          
              return this.__PROXY__.requestActivate(...args);
            
        };
        
        // function 
        QQuickView.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QQuickView.prototype.show = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QQuickView.prototype.hide = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QQuickView.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QQuickView.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QQuickView.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QQuickView.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QQuickView.prototype.close = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QQuickView.prototype.raise = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QQuickView.prototype.lower = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QQuickView.prototype.startSystemResize = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.startSystemResize");
          
              return this.__PROXY__.startSystemResize(...args);
            
        };
        
        // function 
        QQuickView.prototype.startSystemMove = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.startSystemMove");
          
              return this.__PROXY__.startSystemMove(...args);
            
        };
        
        // function 
        QQuickView.prototype.setTitle = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setTitle");
          
              return this.__PROXY__.setTitle(...args);
            
        };
        
        // function 
        QQuickView.prototype.setX = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setX");
          
              return this.__PROXY__.setX(...args);
            
        };
        
        // function 
        QQuickView.prototype.setY = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setY");
          
              return this.__PROXY__.setY(...args);
            
        };
        
        // function 
        QQuickView.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
        
        // function 
        QQuickView.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setHeight");
          
              return this.__PROXY__.setHeight(...args);
            
        };
        
        // function 
        QQuickView.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QQuickView.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QQuickView.prototype.alert = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.alert");
          
              return this.__PROXY__.alert(...args);
            
        };
        
        // function 
        QQuickView.prototype.requestUpdate = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.requestUpdate");
          
              return this.__PROXY__.requestUpdate(...args);
            
        };
        
        // function 
        QQuickView.prototype.exposeEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.exposeEvent");
          
              return this.__PROXY__.exposeEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.event = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QQuickView.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.touchEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.touchEvent");
          
              return this.__PROXY__.touchEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QQuickView.prototype.surfaceHandle = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.surfaceHandle");
          
              return this.__PROXY__.surfaceHandle(...args);
            
        };
        
        // function 
        QQuickView.prototype.source = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.source");
          
              return this.__PROXY__.source(...args);
            
        };
        
        // function 
        QQuickView.prototype.engine = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.engine");
          
              return this.__PROXY__.engine(...args);
            
        };
        
        // function 
        QQuickView.prototype.rootContext = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.rootContext");
          
              return this.__PROXY__.rootContext(...args);
            
        };
        
        // function 
        QQuickView.prototype.rootObject = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.rootObject");
          
              return this.__PROXY__.rootObject(...args);
            
        };
        
        // function 
        QQuickView.prototype.resizeMode = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.resizeMode");
          
              return this.__PROXY__.resizeMode(...args);
            
        };
        
        // function 
        QQuickView.prototype.setResizeMode = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setResizeMode");
          
              return this.__PROXY__.setResizeMode(...args);
            
        };
        
        // function 
        QQuickView.prototype.setSource = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setSource");
          
              return this.__PROXY__.setSource(...args);
            
        };
        
        // function 
        QQuickView.prototype.setInitialProperties = function(...args) 
          
        {
          //print("JS: QQuickView.prototype.setInitialProperties");
          
              return this.__PROXY__.setInitialProperties(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QQuickView.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'title', {
              get: function() {
                  
                      return this.__PROXY__.title;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'modality', {
              get: function() {
                  
                      return this.__PROXY__.modality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'flags', {
              get: function() {
                  
                      return this.__PROXY__.flags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setX(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setY(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'active', {
              get: function() {
                  
                      return this.__PROXY__.isActive();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'visibility', {
              get: function() {
                  
                      return this.__PROXY__.visibility;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisibility(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'contentOrientation', {
              get: function() {
                  
                      return this.__PROXY__.contentOrientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.reportContentOrientationChange(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'opacity', {
              get: function() {
                  
                      return this.__PROXY__.opacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QQuickView.prototype, 'transientParent', {
              get: function() {
                  
                      return this.__PROXY__.transientParent;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTransientParent(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'screenChanged', {
            get: function() { return this.__PROXY__.screenChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'screenChanged(QScreen*)', {
              get: function() { return this.__PROXY__.screenChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'modalityChanged', {
            get: function() { return this.__PROXY__.modalityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'modalityChanged(Qt::WindowModality)', {
              get: function() { return this.__PROXY__.modalityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'windowStateChanged', {
            get: function() { return this.__PROXY__.windowStateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'windowStateChanged(Qt::WindowState)', {
              get: function() { return this.__PROXY__.windowStateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'windowTitleChanged', {
            get: function() { return this.__PROXY__.windowTitleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'windowTitleChanged(QString)', {
              get: function() { return this.__PROXY__.windowTitleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'xChanged', {
            get: function() { return this.__PROXY__.xChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'xChanged(int)', {
              get: function() { return this.__PROXY__.xChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'yChanged', {
            get: function() { return this.__PROXY__.yChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'yChanged(int)', {
              get: function() { return this.__PROXY__.yChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'widthChanged', {
            get: function() { return this.__PROXY__.widthChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'widthChanged(int)', {
              get: function() { return this.__PROXY__.widthChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'heightChanged', {
            get: function() { return this.__PROXY__.heightChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'heightChanged(int)', {
              get: function() { return this.__PROXY__.heightChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'minimumWidthChanged', {
            get: function() { return this.__PROXY__.minimumWidthChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'minimumWidthChanged(int)', {
              get: function() { return this.__PROXY__.minimumWidthChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'minimumHeightChanged', {
            get: function() { return this.__PROXY__.minimumHeightChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'minimumHeightChanged(int)', {
              get: function() { return this.__PROXY__.minimumHeightChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'maximumWidthChanged', {
            get: function() { return this.__PROXY__.maximumWidthChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'maximumWidthChanged(int)', {
              get: function() { return this.__PROXY__.maximumWidthChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'maximumHeightChanged', {
            get: function() { return this.__PROXY__.maximumHeightChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'maximumHeightChanged(int)', {
              get: function() { return this.__PROXY__.maximumHeightChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'visibleChanged', {
            get: function() { return this.__PROXY__.visibleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'visibleChanged(bool)', {
              get: function() { return this.__PROXY__.visibleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'visibilityChanged', {
            get: function() { return this.__PROXY__.visibilityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'visibilityChanged(QWindow::Visibility)', {
              get: function() { return this.__PROXY__.visibilityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'activeChanged', {
            get: function() { return this.__PROXY__.activeChanged; },
            configurable: true
        });
        
        Object.defineProperty(QQuickView.prototype, 'contentOrientationChanged', {
            get: function() { return this.__PROXY__.contentOrientationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'contentOrientationChanged(Qt::ScreenOrientation)', {
              get: function() { return this.__PROXY__.contentOrientationChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'focusObjectChanged', {
            get: function() { return this.__PROXY__.focusObjectChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'focusObjectChanged(QObject*)', {
              get: function() { return this.__PROXY__.focusObjectChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'opacityChanged', {
            get: function() { return this.__PROXY__.opacityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'opacityChanged(qreal)', {
              get: function() { return this.__PROXY__.opacityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'transientParentChanged', {
            get: function() { return this.__PROXY__.transientParentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'transientParentChanged(QWindow*)', {
              get: function() { return this.__PROXY__.transientParentChanged; },
              configurable: true
          });
        
        Object.defineProperty(QQuickView.prototype, 'statusChanged', {
            get: function() { return this.__PROXY__.statusChanged; },
            configurable: true
        });
        
          Object.defineProperty(QQuickView.prototype, 'statusChanged(QQuickView::Status)', {
              get: function() { return this.__PROXY__.statusChanged; },
              configurable: true
          });
        QQuickView.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QQuickView.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QQuickView.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QQuickView.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      