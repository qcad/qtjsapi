
      // auto generated
      //var self;

      // class constructor:
      function QWindow() {
        

        // should be QWindow_BaseJs.call(this, engine):
        //QWindow.prototype = new QWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QWindow.getIdStatic()))) {

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
            qWarning("QWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QWindow_Wrapper(
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

      

        //copyProperties(this, wrapper, QWindow);
  }

  
  else {
    
        print("QWindow(): wrong number / type of arguments");
      
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

      //QWindow.prototype = new QWindow_BaseJs(engine);
      //QWindow.prototype = new QWindow_Wrapper(engine);
      QWindow.prototype = new Object();


      QWindow.prototype.toString = function() {
          //return "QWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QWindow [JS]";
        };
      QWindow.getObjectType = function() {
        return RJSType_QWindow.getIdStatic();
      };

      QWindow.prototype.getObjectType = function() {
        return RJSType_QWindow.getIdStatic();
      };

      QWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QWindow.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QSurface.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Visibility
QWindow.Hidden = QWindow_Wrapper.Hidden;
QWindow.AutomaticVisibility = QWindow_Wrapper.AutomaticVisibility;
QWindow.Windowed = QWindow_Wrapper.Windowed;
QWindow.Minimized = QWindow_Wrapper.Minimized;
QWindow.Maximized = QWindow_Wrapper.Maximized;
QWindow.FullScreen = QWindow_Wrapper.FullScreen;

  // enum: AncestorMode
QWindow.ExcludeTransients = QWindow_Wrapper.ExcludeTransients;
QWindow.IncludeTransients = QWindow_Wrapper.IncludeTransients;


      // functions:
      
        // function 
        QWindow.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QWindow.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QWindow.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QWindow.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QWindow.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QWindow.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QWindow.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QWindow.prototype.findChild = function(...args) 
          
        {
          //print("JS: QWindow.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QWindow.prototype.children = function(...args) 
          
        {
          //print("JS: QWindow.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QWindow.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QWindow.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QWindow.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QWindow.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QWindow.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QWindow.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QWindow.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QWindow.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QWindow.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QWindow.prototype.property = function(...args) 
          
        {
          //print("JS: QWindow.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QWindow.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QWindow.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QWindow.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QWindow.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QWindow.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QWindow.prototype.setVisibility = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setVisibility");
          
              return this.__PROXY__.setVisibility(...args);
            
        };
    
        // function 
        QWindow.prototype.create = function(...args) 
          
        {
          //print("JS: QWindow.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QWindow.prototype.parent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QWindow.prototype.setParent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QWindow.prototype.isTopLevel = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isTopLevel");
          
              return this.__PROXY__.isTopLevel(...args);
            
        };
    
        // function 
        QWindow.prototype.isModal = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QWindow.prototype.setModality = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setModality");
          
              return this.__PROXY__.setModality(...args);
            
        };
    
        // function 
        QWindow.prototype.setFlags = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setFlags");
          
              return this.__PROXY__.setFlags(...args);
            
        };
    
        // function 
        QWindow.prototype.setFlag = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setFlag");
          
              return this.__PROXY__.setFlag(...args);
            
        };
    
        // function 
        QWindow.prototype.type = function(...args) 
          
        {
          //print("JS: QWindow.prototype.type");
          
              return this.__PROXY__.type(...args);
            
        };
    
        // function 
        QWindow.prototype.setOpacity = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setOpacity");
          
              return this.__PROXY__.setOpacity(...args);
            
        };
    
        // function 
        QWindow.prototype.setMask = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QWindow.prototype.mask = function(...args) 
          
        {
          //print("JS: QWindow.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QWindow.prototype.isActive = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isActive");
          
              return this.__PROXY__.isActive(...args);
            
        };
    
        // function 
        QWindow.prototype.reportContentOrientationChange = function(...args) 
          
        {
          //print("JS: QWindow.prototype.reportContentOrientationChange");
          
              return this.__PROXY__.reportContentOrientationChange(...args);
            
        };
    
        // function 
        QWindow.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QWindow.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        QWindow.prototype.windowState = function(...args) 
          
        {
          //print("JS: QWindow.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QWindow.prototype.windowStates = function(...args) 
          
        {
          //print("JS: QWindow.prototype.windowStates");
          
              return this.__PROXY__.windowStates(...args);
            
        };
    
        // function 
        QWindow.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QWindow.prototype.setWindowStates = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setWindowStates");
          
              return this.__PROXY__.setWindowStates(...args);
            
        };
    
        // function 
        QWindow.prototype.setTransientParent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setTransientParent");
          
              return this.__PROXY__.setTransientParent(...args);
            
        };
    
        // function 
        QWindow.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QWindow.prototype.isExposed = function(...args) 
          
        {
          //print("JS: QWindow.prototype.isExposed");
          
              return this.__PROXY__.isExposed(...args);
            
        };
    
        // function 
        QWindow.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
    
        // function 
        QWindow.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
    
        // function 
        QWindow.prototype.baseSize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.baseSize");
          
              return this.__PROXY__.baseSize(...args);
            
        };
    
        // function 
        QWindow.prototype.sizeIncrement = function(...args) 
          
        {
          //print("JS: QWindow.prototype.sizeIncrement");
          
              return this.__PROXY__.sizeIncrement(...args);
            
        };
    
        // function 
        QWindow.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QWindow.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QWindow.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QWindow.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QWindow.prototype.geometry = function(...args) 
          
        {
          //print("JS: QWindow.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
    
        // function 
        QWindow.prototype.frameMargins = function(...args) 
          
        {
          //print("JS: QWindow.prototype.frameMargins");
          
              return this.__PROXY__.frameMargins(...args);
            
        };
    
        // function 
        QWindow.prototype.frameGeometry = function(...args) 
          
        {
          //print("JS: QWindow.prototype.frameGeometry");
          
              return this.__PROXY__.frameGeometry(...args);
            
        };
    
        // function 
        QWindow.prototype.framePosition = function(...args) 
          
        {
          //print("JS: QWindow.prototype.framePosition");
          
              return this.__PROXY__.framePosition(...args);
            
        };
    
        // function 
        QWindow.prototype.setFramePosition = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setFramePosition");
          
              return this.__PROXY__.setFramePosition(...args);
            
        };
    
        // function 
        QWindow.prototype.size = function(...args) 
          
        {
          //print("JS: QWindow.prototype.size");
          
              return this.__PROXY__.size(...args);
            
        };
    
        // function 
        QWindow.prototype.position = function(...args) 
          
        {
          //print("JS: QWindow.prototype.position");
          
              return this.__PROXY__.position(...args);
            
        };
    
        // function 
        QWindow.prototype.setPosition = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setPosition");
          
              return this.__PROXY__.setPosition(...args);
            
        };
    
        // function 
        QWindow.prototype.resize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QWindow.prototype.setFilePath = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setFilePath");
          
              return this.__PROXY__.setFilePath(...args);
            
        };
    
        // function 
        QWindow.prototype.filePath = function(...args) 
          
        {
          //print("JS: QWindow.prototype.filePath");
          
              return this.__PROXY__.filePath(...args);
            
        };
    
        // function 
        QWindow.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        QWindow.prototype.icon = function(...args) 
          
        {
          //print("JS: QWindow.prototype.icon");
          
              return this.__PROXY__.icon(...args);
            
        };
    
        // function 
        QWindow.prototype.destroy = function(...args) 
          
        {
          //print("JS: QWindow.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QWindow.prototype.setKeyboardGrabEnabled = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setKeyboardGrabEnabled");
          
              return this.__PROXY__.setKeyboardGrabEnabled(...args);
            
        };
    
        // function 
        QWindow.prototype.setMouseGrabEnabled = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMouseGrabEnabled");
          
              return this.__PROXY__.setMouseGrabEnabled(...args);
            
        };
    
        // function 
        QWindow.prototype.screen = function(...args) 
          
        {
          //print("JS: QWindow.prototype.screen");
          
              return this.__PROXY__.screen(...args);
            
        };
    
        // function 
        QWindow.prototype.setScreen = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setScreen");
          
              return this.__PROXY__.setScreen(...args);
            
        };
    
        // function 
        QWindow.prototype.focusObject = function(...args) 
          
        {
          //print("JS: QWindow.prototype.focusObject");
          
              return this.__PROXY__.focusObject(...args);
            
        };
    
        // function 
        QWindow.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QWindow.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QWindow.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QWindow.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QWindow.prototype.cursor = function(...args) 
          
        {
          //print("JS: QWindow.prototype.cursor");
          
              return this.__PROXY__.cursor(...args);
            
        };
    
        // function 
        QWindow.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QWindow.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QWindow.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QWindow.prototype.requestActivate = function(...args) 
          
        {
          //print("JS: QWindow.prototype.requestActivate");
          
              return this.__PROXY__.requestActivate(...args);
            
        };
    
        // function 
        QWindow.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QWindow.prototype.show = function(...args) 
          
        {
          //print("JS: QWindow.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QWindow.prototype.hide = function(...args) 
          
        {
          //print("JS: QWindow.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QWindow.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QWindow.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QWindow.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QWindow.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QWindow.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QWindow.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QWindow.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QWindow.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QWindow.prototype.close = function(...args) 
          
        {
          //print("JS: QWindow.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QWindow.prototype.raise = function(...args) 
          
        {
          //print("JS: QWindow.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QWindow.prototype.lower = function(...args) 
          
        {
          //print("JS: QWindow.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QWindow.prototype.startSystemResize = function(...args) 
          
        {
          //print("JS: QWindow.prototype.startSystemResize");
          
              return this.__PROXY__.startSystemResize(...args);
            
        };
    
        // function 
        QWindow.prototype.startSystemMove = function(...args) 
          
        {
          //print("JS: QWindow.prototype.startSystemMove");
          
              return this.__PROXY__.startSystemMove(...args);
            
        };
    
        // function 
        QWindow.prototype.setTitle = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setTitle");
          
              return this.__PROXY__.setTitle(...args);
            
        };
    
        // function 
        QWindow.prototype.setX = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setX");
          
              return this.__PROXY__.setX(...args);
            
        };
    
        // function 
        QWindow.prototype.setY = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setY");
          
              return this.__PROXY__.setY(...args);
            
        };
    
        // function 
        QWindow.prototype.setWidth = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setWidth");
          
              return this.__PROXY__.setWidth(...args);
            
        };
    
        // function 
        QWindow.prototype.setHeight = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setHeight");
          
              return this.__PROXY__.setHeight(...args);
            
        };
    
        // function 
        QWindow.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QWindow.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QWindow.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QWindow.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QWindow.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QWindow.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QWindow.prototype.alert = function(...args) 
          
        {
          //print("JS: QWindow.prototype.alert");
          
              return this.__PROXY__.alert(...args);
            
        };
    
        // function 
        QWindow.prototype.requestUpdate = function(...args) 
          
        {
          //print("JS: QWindow.prototype.requestUpdate");
          
              return this.__PROXY__.requestUpdate(...args);
            
        };
    
        // function 
        QWindow.prototype.exposeEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.exposeEvent");
          
              return this.__PROXY__.exposeEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QWindow.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QWindow.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.event = function(...args) 
          
        {
          //print("JS: QWindow.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QWindow.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QWindow.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.touchEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.touchEvent");
          
              return this.__PROXY__.touchEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QWindow.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QWindow.prototype.surfaceHandle = function(...args) 
          
        {
          //print("JS: QWindow.prototype.surfaceHandle");
          
              return this.__PROXY__.surfaceHandle(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QWindow.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'title', {
              get: function() {
                  
                      return this.__PROXY__.title;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'modality', {
              get: function() {
                  
                      return this.__PROXY__.modality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'flags', {
              get: function() {
                  
                      return this.__PROXY__.flags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setX(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setY(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'active', {
              get: function() {
                  
                      return this.__PROXY__.isActive();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'visibility', {
              get: function() {
                  
                      return this.__PROXY__.visibility;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisibility(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'contentOrientation', {
              get: function() {
                  
                      return this.__PROXY__.contentOrientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.reportContentOrientationChange(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'opacity', {
              get: function() {
                  
                      return this.__PROXY__.opacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWindow.prototype, 'transientParent', {
              get: function() {
                  
                      return this.__PROXY__.transientParent;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTransientParent(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'screenChanged', {
            get: function() { return this.__PROXY__.screenChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'screenChanged(QScreen*)', {
              get: function() { return this.__PROXY__.screenChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'modalityChanged', {
            get: function() { return this.__PROXY__.modalityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'modalityChanged(Qt::WindowModality)', {
              get: function() { return this.__PROXY__.modalityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'windowStateChanged', {
            get: function() { return this.__PROXY__.windowStateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'windowStateChanged(Qt::WindowState)', {
              get: function() { return this.__PROXY__.windowStateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'windowTitleChanged', {
            get: function() { return this.__PROXY__.windowTitleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'windowTitleChanged(QString)', {
              get: function() { return this.__PROXY__.windowTitleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'xChanged', {
            get: function() { return this.__PROXY__.xChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'xChanged(int)', {
              get: function() { return this.__PROXY__.xChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'yChanged', {
            get: function() { return this.__PROXY__.yChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'yChanged(int)', {
              get: function() { return this.__PROXY__.yChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'widthChanged', {
            get: function() { return this.__PROXY__.widthChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'widthChanged(int)', {
              get: function() { return this.__PROXY__.widthChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'heightChanged', {
            get: function() { return this.__PROXY__.heightChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'heightChanged(int)', {
              get: function() { return this.__PROXY__.heightChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'minimumWidthChanged', {
            get: function() { return this.__PROXY__.minimumWidthChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'minimumWidthChanged(int)', {
              get: function() { return this.__PROXY__.minimumWidthChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'minimumHeightChanged', {
            get: function() { return this.__PROXY__.minimumHeightChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'minimumHeightChanged(int)', {
              get: function() { return this.__PROXY__.minimumHeightChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'maximumWidthChanged', {
            get: function() { return this.__PROXY__.maximumWidthChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'maximumWidthChanged(int)', {
              get: function() { return this.__PROXY__.maximumWidthChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'maximumHeightChanged', {
            get: function() { return this.__PROXY__.maximumHeightChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'maximumHeightChanged(int)', {
              get: function() { return this.__PROXY__.maximumHeightChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'visibleChanged', {
            get: function() { return this.__PROXY__.visibleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'visibleChanged(bool)', {
              get: function() { return this.__PROXY__.visibleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'visibilityChanged', {
            get: function() { return this.__PROXY__.visibilityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'visibilityChanged(QWindow::Visibility)', {
              get: function() { return this.__PROXY__.visibilityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'activeChanged', {
            get: function() { return this.__PROXY__.activeChanged; },
            configurable: true
        });
        
        Object.defineProperty(QWindow.prototype, 'contentOrientationChanged', {
            get: function() { return this.__PROXY__.contentOrientationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'contentOrientationChanged(Qt::ScreenOrientation)', {
              get: function() { return this.__PROXY__.contentOrientationChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'focusObjectChanged', {
            get: function() { return this.__PROXY__.focusObjectChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'focusObjectChanged(QObject*)', {
              get: function() { return this.__PROXY__.focusObjectChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'opacityChanged', {
            get: function() { return this.__PROXY__.opacityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'opacityChanged(qreal)', {
              get: function() { return this.__PROXY__.opacityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QWindow.prototype, 'transientParentChanged', {
            get: function() { return this.__PROXY__.transientParentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QWindow.prototype, 'transientParentChanged(QWindow*)', {
              get: function() { return this.__PROXY__.transientParentChanged; },
              configurable: true
          });
        QWindow.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QWindow.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QWindow.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QWindow.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      