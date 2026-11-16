
      // auto generated
      //var self;

      // class constructor:
      function QMainWindow() {
        

        // should be QMainWindow_BaseJs.call(this, engine):
        //QMainWindow.prototype = new QMainWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMainWindow.getIdStatic()))) {

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
            qWarning("QMainWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QMainWindow_Wrapper(
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

      

        //copyProperties(this, wrapper, QMainWindow);
  }

  
  else {
    
        print("QMainWindow(): wrong number / type of arguments");
      
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

      //QMainWindow.prototype = new QMainWindow_BaseJs(engine);
      //QMainWindow.prototype = new QMainWindow_Wrapper(engine);
      QMainWindow.prototype = new Object();


      QMainWindow.prototype.toString = function() {
          //return "QMainWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMainWindow [JS]";
        };
      QMainWindow.getObjectType = function() {
        return RJSType_QMainWindow.getIdStatic();
      };

      QMainWindow.prototype.getObjectType = function() {
        return RJSType_QMainWindow.getIdStatic();
      };

      QMainWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMainWindow.getIdStatic()) {
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
      
  // enum: DockOption
QMainWindow.AnimatedDocks = QMainWindow_Wrapper.AnimatedDocks;
QMainWindow.AllowNestedDocks = QMainWindow_Wrapper.AllowNestedDocks;
QMainWindow.AllowTabbedDocks = QMainWindow_Wrapper.AllowTabbedDocks;
QMainWindow.ForceTabbedDocks = QMainWindow_Wrapper.ForceTabbedDocks;
QMainWindow.VerticalTabs = QMainWindow_Wrapper.VerticalTabs;
QMainWindow.GroupedDragging = QMainWindow_Wrapper.GroupedDragging;


      // functions:
      
        // function 
        QMainWindow.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QMainWindow.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QMainWindow.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QMainWindow.prototype.findChild = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QMainWindow.prototype.children = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QMainWindow.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QMainWindow.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QMainWindow.prototype.property = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QMainWindow.prototype.parent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QMainWindow.prototype.devType = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QMainWindow.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isModal = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QMainWindow.prototype.window = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QMainWindow.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QMainWindow.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QMainWindow.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setFont = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QMainWindow.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QMainWindow.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QMainWindow.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QMainWindow.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QMainWindow.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMask = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mask = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QMainWindow.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QMainWindow.prototype.grab = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QMainWindow.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QMainWindow.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QMainWindow.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QMainWindow.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QMainWindow.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QMainWindow.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QMainWindow.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QMainWindow.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QMainWindow.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QMainWindow.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QMainWindow.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QMainWindow.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QMainWindow.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QMainWindow.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QMainWindow.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QMainWindow.prototype.update = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QMainWindow.prototype.repaint = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QMainWindow.prototype.show = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QMainWindow.prototype.hide = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QMainWindow.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QMainWindow.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QMainWindow.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QMainWindow.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QMainWindow.prototype.close = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QMainWindow.prototype.raise = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QMainWindow.prototype.lower = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QMainWindow.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QMainWindow.prototype.move = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QMainWindow.prototype.resize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QMainWindow.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QMainWindow.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QMainWindow.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QMainWindow.prototype.windowState = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QMainWindow.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QMainWindow.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QMainWindow.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QMainWindow.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QMainWindow.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QMainWindow.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QMainWindow.prototype.layout = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QMainWindow.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setParent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.scroll = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QMainWindow.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QMainWindow.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QMainWindow.prototype.addAction = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QMainWindow.prototype.addActions = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QMainWindow.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QMainWindow.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QMainWindow.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QMainWindow.prototype.actions = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QMainWindow.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QMainWindow.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QMainWindow.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QMainWindow.prototype.windowType = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QMainWindow.prototype.childAt = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QMainWindow.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QMainWindow.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QMainWindow.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.metric = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QMainWindow.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QMainWindow.prototype.redirected = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QMainWindow.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QMainWindow.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QMainWindow.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QMainWindow.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QMainWindow.prototype.create = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QMainWindow.prototype.destroy = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QMainWindow.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QMainWindow.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QMainWindow.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QMainWindow.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QMainWindow.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QMainWindow.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QMainWindow.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QMainWindow.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QMainWindow.prototype.iconSize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.iconSize");
          
              return this.__PROXY__.iconSize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setToolButtonStyle = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setToolButtonStyle");
          
              return this.__PROXY__.setToolButtonStyle(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isAnimated = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isAnimated");
          
              return this.__PROXY__.isAnimated(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isDockNestingEnabled = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isDockNestingEnabled");
          
              return this.__PROXY__.isDockNestingEnabled(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setDocumentMode = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setDocumentMode");
          
              return this.__PROXY__.setDocumentMode(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setTabShape = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setTabShape");
          
              return this.__PROXY__.setTabShape(...args);
            
        };
        
        // function 
        QMainWindow.prototype.tabPosition = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.tabPosition");
          
              return this.__PROXY__.tabPosition(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setTabPosition = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setTabPosition");
          
              return this.__PROXY__.setTabPosition(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setDockOptions = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setDockOptions");
          
              return this.__PROXY__.setDockOptions(...args);
            
        };
        
        // function 
        QMainWindow.prototype.isSeparator = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.isSeparator");
          
              return this.__PROXY__.isSeparator(...args);
            
        };
        
        // function 
        QMainWindow.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
        
        // function 
        QMainWindow.prototype.menuWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.menuWidget");
          
              return this.__PROXY__.menuWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setMenuWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setMenuWidget");
          
              return this.__PROXY__.setMenuWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.statusBar = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.statusBar");
          
              return this.__PROXY__.statusBar(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setStatusBar = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setStatusBar");
          
              return this.__PROXY__.setStatusBar(...args);
            
        };
        
        // function 
        QMainWindow.prototype.centralWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.centralWidget");
          
              return this.__PROXY__.centralWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setCentralWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setCentralWidget");
          
              return this.__PROXY__.setCentralWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.takeCentralWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.takeCentralWidget");
          
              return this.__PROXY__.takeCentralWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setCorner = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setCorner");
          
              return this.__PROXY__.setCorner(...args);
            
        };
        
        // function 
        QMainWindow.prototype.corner = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.corner");
          
              return this.__PROXY__.corner(...args);
            
        };
        
        // function 
        QMainWindow.prototype.addToolBarBreak = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.addToolBarBreak");
          
              return this.__PROXY__.addToolBarBreak(...args);
            
        };
        
        // function 
        QMainWindow.prototype.insertToolBarBreak = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.insertToolBarBreak");
          
              return this.__PROXY__.insertToolBarBreak(...args);
            
        };
        
        // function 
        QMainWindow.prototype.addToolBar = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.addToolBar");
          
              return this.__PROXY__.addToolBar(...args);
            
        };
        
        // function 
        QMainWindow.prototype.insertToolBar = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.insertToolBar");
          
              return this.__PROXY__.insertToolBar(...args);
            
        };
        
        // function 
        QMainWindow.prototype.removeToolBar = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.removeToolBar");
          
              return this.__PROXY__.removeToolBar(...args);
            
        };
        
        // function 
        QMainWindow.prototype.removeToolBarBreak = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.removeToolBarBreak");
          
              return this.__PROXY__.removeToolBarBreak(...args);
            
        };
        
        // function 
        QMainWindow.prototype.toolBarArea = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.toolBarArea");
          
              return this.__PROXY__.toolBarArea(...args);
            
        };
        
        // function 
        QMainWindow.prototype.toolBarBreak = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.toolBarBreak");
          
              return this.__PROXY__.toolBarBreak(...args);
            
        };
        
        // function 
        QMainWindow.prototype.addDockWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.addDockWidget");
          
              return this.__PROXY__.addDockWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.splitDockWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.splitDockWidget");
          
              return this.__PROXY__.splitDockWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.tabifyDockWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.tabifyDockWidget");
          
              return this.__PROXY__.tabifyDockWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.tabifiedDockWidgets = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.tabifiedDockWidgets");
          
              return this.__PROXY__.tabifiedDockWidgets(...args);
            
        };
        
        // function 
        QMainWindow.prototype.removeDockWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.removeDockWidget");
          
              return this.__PROXY__.removeDockWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.restoreDockWidget = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.restoreDockWidget");
          
              return this.__PROXY__.restoreDockWidget(...args);
            
        };
        
        // function 
        QMainWindow.prototype.dockWidgetArea = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.dockWidgetArea");
          
              return this.__PROXY__.dockWidgetArea(...args);
            
        };
        
        // function 
        QMainWindow.prototype.resizeDocks = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.resizeDocks");
          
              return this.__PROXY__.resizeDocks(...args);
            
        };
        
        // function 
        QMainWindow.prototype.saveState = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.saveState");
          
              return this.__PROXY__.saveState(...args);
            
        };
        
        // function 
        QMainWindow.prototype.restoreState = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.restoreState");
          
              return this.__PROXY__.restoreState(...args);
            
        };
        
        // function 
        QMainWindow.prototype.createPopupMenu = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.createPopupMenu");
          
              return this.__PROXY__.createPopupMenu(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setAnimated = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setAnimated");
          
              return this.__PROXY__.setAnimated(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setDockNestingEnabled = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setDockNestingEnabled");
          
              return this.__PROXY__.setDockNestingEnabled(...args);
            
        };
        
        // function 
        QMainWindow.prototype.setUnifiedTitleAndToolBarOnMac = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.setUnifiedTitleAndToolBarOnMac");
          
              return this.__PROXY__.setUnifiedTitleAndToolBarOnMac(...args);
            
        };
        
        // function 
        QMainWindow.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEventSuper(...args);
            
        };
        QMainWindow.prototype.contextMenuEvent.__SUPER__ = true;
        
        // function 
        QMainWindow.prototype.event = function(...args) 
          
        {
          //print("JS: QMainWindow.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
        QMainWindow.prototype.event.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QMainWindow.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'toolButtonStyle', {
              get: function() {
                  
                      return this.__PROXY__.toolButtonStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolButtonStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'animated', {
              get: function() {
                  
                      return this.__PROXY__.isAnimated();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAnimated(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'documentMode', {
              get: function() {
                  
                      return this.__PROXY__.documentMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'tabShape', {
              get: function() {
                  
                      return this.__PROXY__.tabShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'dockNestingEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isDockNestingEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDockNestingEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'dockOptions', {
              get: function() {
                  
                      return this.__PROXY__.dockOptions;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDockOptions(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMainWindow.prototype, 'unifiedTitleAndToolBarOnMac', {
              get: function() {
                  
                      return this.__PROXY__.unifiedTitleAndToolBarOnMac;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUnifiedTitleAndToolBarOnMac(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QMainWindow.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QMainWindow.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QMainWindow.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QMainWindow.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QMainWindow.prototype, 'toolButtonStyleChanged', {
            get: function() { return this.__PROXY__.toolButtonStyleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QMainWindow.prototype, 'toolButtonStyleChanged(Qt::ToolButtonStyle)', {
              get: function() { return this.__PROXY__.toolButtonStyleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QMainWindow.prototype, 'tabifiedDockWidgetActivated', {
            get: function() { return this.__PROXY__.tabifiedDockWidgetActivated; },
            configurable: true
        });
        
          Object.defineProperty(QMainWindow.prototype, 'tabifiedDockWidgetActivated(QDockWidget*)', {
              get: function() { return this.__PROXY__.tabifiedDockWidgetActivated; },
              configurable: true
          });
        QMainWindow.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMainWindow.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMainWindow.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMainWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMainWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMainWindow.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      