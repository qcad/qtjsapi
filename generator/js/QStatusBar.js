
      // auto generated
      //var self;

      // class constructor:
      function QStatusBar() {
        

        // should be QStatusBar_BaseJs.call(this, engine):
        //QStatusBar.prototype = new QStatusBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStatusBar.getIdStatic()))) {

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
            qWarning("QStatusBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QStatusBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QStatusBar);
  }

  
  else {
    
        print("QStatusBar(): wrong number / type of arguments");
      
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

      //QStatusBar.prototype = new QStatusBar_BaseJs(engine);
      //QStatusBar.prototype = new QStatusBar_Wrapper(engine);
      QStatusBar.prototype = new Object();


      QStatusBar.prototype.toString = function() {
          //return "QStatusBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStatusBar [JS]";
        };
      QStatusBar.getObjectType = function() {
        return RJSType_QStatusBar.getIdStatic();
      };

      QStatusBar.prototype.getObjectType = function() {
        return RJSType_QStatusBar.getIdStatic();
      };

      QStatusBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStatusBar.getIdStatic()) {
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
        QStatusBar.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QStatusBar.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QStatusBar.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QStatusBar.prototype.findChild = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QStatusBar.prototype.children = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QStatusBar.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QStatusBar.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QStatusBar.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QStatusBar.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QStatusBar.prototype.property = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QStatusBar.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QStatusBar.prototype.parent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QStatusBar.prototype.devType = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QStatusBar.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isModal = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QStatusBar.prototype.window = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QStatusBar.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QStatusBar.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QStatusBar.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setFont = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QStatusBar.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QStatusBar.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QStatusBar.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QStatusBar.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QStatusBar.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setMask = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mask = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QStatusBar.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QStatusBar.prototype.grab = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QStatusBar.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QStatusBar.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QStatusBar.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QStatusBar.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QStatusBar.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QStatusBar.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QStatusBar.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QStatusBar.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QStatusBar.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QStatusBar.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QStatusBar.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QStatusBar.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QStatusBar.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QStatusBar.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QStatusBar.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QStatusBar.prototype.update = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QStatusBar.prototype.repaint = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QStatusBar.prototype.show = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QStatusBar.prototype.hide = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QStatusBar.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QStatusBar.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QStatusBar.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QStatusBar.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QStatusBar.prototype.close = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QStatusBar.prototype.raise = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QStatusBar.prototype.lower = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QStatusBar.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QStatusBar.prototype.move = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QStatusBar.prototype.resize = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QStatusBar.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QStatusBar.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QStatusBar.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QStatusBar.prototype.windowState = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QStatusBar.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QStatusBar.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QStatusBar.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QStatusBar.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QStatusBar.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QStatusBar.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QStatusBar.prototype.layout = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QStatusBar.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setParent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.scroll = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QStatusBar.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QStatusBar.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QStatusBar.prototype.addAction = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QStatusBar.prototype.addActions = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QStatusBar.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QStatusBar.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QStatusBar.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QStatusBar.prototype.actions = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QStatusBar.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QStatusBar.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QStatusBar.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QStatusBar.prototype.windowType = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QStatusBar.prototype.childAt = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QStatusBar.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QStatusBar.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QStatusBar.prototype.event = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QStatusBar.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.metric = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QStatusBar.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QStatusBar.prototype.redirected = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QStatusBar.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QStatusBar.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QStatusBar.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QStatusBar.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QStatusBar.prototype.create = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QStatusBar.prototype.destroy = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QStatusBar.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QStatusBar.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QStatusBar.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QStatusBar.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QStatusBar.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QStatusBar.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QStatusBar.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QStatusBar.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QStatusBar.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.addPermanentWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.addPermanentWidget");
          
              return this.__PROXY__.addPermanentWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.insertPermanentWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.insertPermanentWidget");
          
              return this.__PROXY__.insertPermanentWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
        
        // function 
        QStatusBar.prototype.setSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.setSizeGripEnabled");
          
              return this.__PROXY__.setSizeGripEnabled(...args);
            
        };
        
        // function 
        QStatusBar.prototype.isSizeGripEnabled = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.isSizeGripEnabled");
          
              return this.__PROXY__.isSizeGripEnabled(...args);
            
        };
        
        // function 
        QStatusBar.prototype.currentMessage = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.currentMessage");
          
              return this.__PROXY__.currentMessage(...args);
            
        };
        
        // function 
        QStatusBar.prototype.showMessage = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.showMessage");
          
              return this.__PROXY__.showMessage(...args);
            
        };
        
        // function 
        QStatusBar.prototype.clearMessage = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.clearMessage");
          
              return this.__PROXY__.clearMessage(...args);
            
        };
        
        // function 
        QStatusBar.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QStatusBar.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QStatusBar.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QStatusBar.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QStatusBar.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QStatusBar.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QStatusBar.prototype.resizeEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QStatusBar.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStatusBar.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QStatusBar.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QStatusBar.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QStatusBar.prototype, 'messageChanged', {
            get: function() { return this.__PROXY__.messageChanged; },
            configurable: true
        });
        
          Object.defineProperty(QStatusBar.prototype, 'messageChanged(QString)', {
              get: function() { return this.__PROXY__.messageChanged; },
              configurable: true
          });
        QStatusBar.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStatusBar.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStatusBar.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStatusBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStatusBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStatusBar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      