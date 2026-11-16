
      // auto generated
      //var self;

      // class constructor:
      function QToolBar() {
        

        // should be QToolBar_BaseJs.call(this, engine):
        //QToolBar.prototype = new QToolBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QToolBar.getIdStatic()))) {

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
            qWarning("QToolBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QToolBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QToolBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QToolBar);
  }

  
  else {
    
        print("QToolBar(): wrong number / type of arguments");
      
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

      //QToolBar.prototype = new QToolBar_BaseJs(engine);
      //QToolBar.prototype = new QToolBar_Wrapper(engine);
      QToolBar.prototype = new Object();


      QToolBar.prototype.toString = function() {
          //return "QToolBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QToolBar [JS]";
        };
      QToolBar.getObjectType = function() {
        return RJSType_QToolBar.getIdStatic();
      };

      QToolBar.prototype.getObjectType = function() {
        return RJSType_QToolBar.getIdStatic();
      };

      QToolBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QToolBar.getIdStatic()) {
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
      

      // functions:
      
        // function 
        QToolBar.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QToolBar.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QToolBar.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QToolBar.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QToolBar.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QToolBar.prototype.findChild = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QToolBar.prototype.children = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QToolBar.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QToolBar.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QToolBar.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QToolBar.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QToolBar.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QToolBar.prototype.property = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QToolBar.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QToolBar.prototype.parent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QToolBar.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QToolBar.prototype.devType = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QToolBar.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QToolBar.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QToolBar.prototype.isModal = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QToolBar.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QToolBar.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QToolBar.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QToolBar.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QToolBar.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QToolBar.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QToolBar.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QToolBar.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QToolBar.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QToolBar.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QToolBar.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QToolBar.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QToolBar.prototype.window = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QToolBar.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QToolBar.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QToolBar.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QToolBar.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QToolBar.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QToolBar.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QToolBar.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFont = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QToolBar.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QToolBar.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QToolBar.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QToolBar.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QToolBar.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QToolBar.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QToolBar.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMask = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QToolBar.prototype.mask = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QToolBar.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QToolBar.prototype.grab = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QToolBar.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QToolBar.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QToolBar.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QToolBar.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QToolBar.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QToolBar.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QToolBar.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QToolBar.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QToolBar.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QToolBar.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QToolBar.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QToolBar.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QToolBar.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QToolBar.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QToolBar.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QToolBar.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QToolBar.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QToolBar.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QToolBar.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QToolBar.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QToolBar.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QToolBar.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QToolBar.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QToolBar.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QToolBar.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QToolBar.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QToolBar.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QToolBar.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QToolBar.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QToolBar.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QToolBar.prototype.update = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QToolBar.prototype.repaint = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QToolBar.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QToolBar.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QToolBar.prototype.show = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QToolBar.prototype.hide = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QToolBar.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QToolBar.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QToolBar.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QToolBar.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QToolBar.prototype.close = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QToolBar.prototype.raise = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QToolBar.prototype.lower = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QToolBar.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QToolBar.prototype.move = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QToolBar.prototype.resize = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QToolBar.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QToolBar.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QToolBar.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QToolBar.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QToolBar.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QToolBar.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QToolBar.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QToolBar.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QToolBar.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QToolBar.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QToolBar.prototype.windowState = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QToolBar.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QToolBar.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QToolBar.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QToolBar.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QToolBar.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QToolBar.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QToolBar.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QToolBar.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QToolBar.prototype.layout = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QToolBar.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QToolBar.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QToolBar.prototype.setParent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QToolBar.prototype.scroll = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QToolBar.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QToolBar.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QToolBar.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QToolBar.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QToolBar.prototype.addActions = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QToolBar.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QToolBar.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QToolBar.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QToolBar.prototype.actions = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QToolBar.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QToolBar.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QToolBar.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QToolBar.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QToolBar.prototype.windowType = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QToolBar.prototype.childAt = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QToolBar.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QToolBar.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QToolBar.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QToolBar.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QToolBar.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QToolBar.prototype.event = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QToolBar.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.metric = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QToolBar.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QToolBar.prototype.redirected = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QToolBar.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QToolBar.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QToolBar.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QToolBar.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QToolBar.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QToolBar.prototype.create = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QToolBar.prototype.destroy = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QToolBar.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QToolBar.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QToolBar.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QToolBar.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QToolBar.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QToolBar.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QToolBar.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QToolBar.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QToolBar.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QToolBar.prototype.setMovable = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setMovable");
          
              return this.__PROXY__.setMovable(...args);
            
        };
        
        // function 
        QToolBar.prototype.isMovable = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isMovable");
          
              return this.__PROXY__.isMovable(...args);
            
        };
        
        // function 
        QToolBar.prototype.setAllowedAreas = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setAllowedAreas");
          
              return this.__PROXY__.setAllowedAreas(...args);
            
        };
        
        // function 
        QToolBar.prototype.isAreaAllowed = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isAreaAllowed");
          
              return this.__PROXY__.isAreaAllowed(...args);
            
        };
        
        // function 
        QToolBar.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
        
        // function 
        QToolBar.prototype.clear = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QToolBar.prototype.addAction = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QToolBar.prototype.addSeparator = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.addSeparator");
          
              return this.__PROXY__.addSeparator(...args);
            
        };
        
        // function 
        QToolBar.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
        
        // function 
        QToolBar.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QToolBar.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        QToolBar.prototype.actionGeometry = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.actionGeometry");
          
              return this.__PROXY__.actionGeometry(...args);
            
        };
        
        // function 
        QToolBar.prototype.actionAt = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.actionAt");
          
              return this.__PROXY__.actionAt(...args);
            
        };
        
        // function 
        QToolBar.prototype.toggleViewAction = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.toggleViewAction");
          
              return this.__PROXY__.toggleViewAction(...args);
            
        };
        
        // function 
        QToolBar.prototype.widgetForAction = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.widgetForAction");
          
              return this.__PROXY__.widgetForAction(...args);
            
        };
        
        // function 
        QToolBar.prototype.isFloatable = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isFloatable");
          
              return this.__PROXY__.isFloatable(...args);
            
        };
        
        // function 
        QToolBar.prototype.setFloatable = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setFloatable");
          
              return this.__PROXY__.setFloatable(...args);
            
        };
        
        // function 
        QToolBar.prototype.isFloating = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.isFloating");
          
              return this.__PROXY__.isFloating(...args);
            
        };
        
        // function 
        QToolBar.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QToolBar.prototype.setToolButtonStyle = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.setToolButtonStyle");
          
              return this.__PROXY__.setToolButtonStyle(...args);
            
        };
        
        // function 
        QToolBar.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QToolBar.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QToolBar.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QToolBar.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QToolBar.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QToolBar.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QToolBar.prototype.resizeEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QToolBar.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'allowedAreas', {
              get: function() {
                  
                      return this.__PROXY__.allowedAreas;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAllowedAreas(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'floatable', {
              get: function() {
                  
                      return this.__PROXY__.isFloatable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFloatable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'movable', {
              get: function() {
                  
                      return this.__PROXY__.isMovable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'orientation', {
              get: function() {
                  
                      return this.__PROXY__.orientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrientation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolBar.prototype, 'toolButtonStyle', {
              get: function() {
                  
                      return this.__PROXY__.toolButtonStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolButtonStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'actionTriggered', {
            get: function() { return this.__PROXY__.actionTriggered; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'actionTriggered(QAction*)', {
              get: function() { return this.__PROXY__.actionTriggered; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'movableChanged', {
            get: function() { return this.__PROXY__.movableChanged; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'movableChanged(bool)', {
              get: function() { return this.__PROXY__.movableChanged; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'allowedAreasChanged', {
            get: function() { return this.__PROXY__.allowedAreasChanged; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'allowedAreasChanged(Qt::ToolBarAreas)', {
              get: function() { return this.__PROXY__.allowedAreasChanged; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'orientationChanged', {
            get: function() { return this.__PROXY__.orientationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'orientationChanged(Qt::Orientation)', {
              get: function() { return this.__PROXY__.orientationChanged; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'iconSizeChanged', {
            get: function() { return this.__PROXY__.iconSizeChanged; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'iconSizeChanged(QSize)', {
              get: function() { return this.__PROXY__.iconSizeChanged; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'toolButtonStyleChanged', {
            get: function() { return this.__PROXY__.toolButtonStyleChanged; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'toolButtonStyleChanged(Qt::ToolButtonStyle)', {
              get: function() { return this.__PROXY__.toolButtonStyleChanged; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'topLevelChanged', {
            get: function() { return this.__PROXY__.topLevelChanged; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'topLevelChanged(bool)', {
              get: function() { return this.__PROXY__.topLevelChanged; },
              configurable: true
          });
        
        Object.defineProperty(QToolBar.prototype, 'visibilityChanged', {
            get: function() { return this.__PROXY__.visibilityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QToolBar.prototype, 'visibilityChanged(bool)', {
              get: function() { return this.__PROXY__.visibilityChanged; },
              configurable: true
          });
        QToolBar.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QToolBar.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QToolBar.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QToolBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QToolBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QToolBar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      