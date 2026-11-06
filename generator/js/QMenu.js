
      // auto generated
      //var self;

      // class constructor:
      function QMenu() {
        

        // should be QMenu_BaseJs.call(this, engine):
        //QMenu.prototype = new QMenu_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMenu.getIdStatic()))) {

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
            qWarning("QMenu.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QMenu_Wrapper(
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

      

        //copyProperties(this, wrapper, QMenu);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMenu_Wrapper(
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

      

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu(): wrong number / type of arguments");
      
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

      //QMenu.prototype = new QMenu_BaseJs(engine);
      //QMenu.prototype = new QMenu_Wrapper(engine);
      QMenu.prototype = new Object();


      QMenu.prototype.toString = function() {
          //return "QMenu [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMenu [JS]";
        };
      QMenu.getObjectType = function() {
        return RJSType_QMenu.getIdStatic();
      };

      QMenu.prototype.getObjectType = function() {
        return RJSType_QMenu.getIdStatic();
      };

      QMenu.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMenu.getIdStatic()) {
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
        QMenu.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QMenu.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QMenu.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QMenu.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QMenu.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QMenu.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QMenu.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QMenu.prototype.findChild = function(...args) 
          
        {
          //print("JS: QMenu.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QMenu.prototype.children = function(...args) 
          
        {
          //print("JS: QMenu.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QMenu.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QMenu.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QMenu.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QMenu.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QMenu.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QMenu.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QMenu.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QMenu.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QMenu.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QMenu.prototype.property = function(...args) 
          
        {
          //print("JS: QMenu.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QMenu.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QMenu.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QMenu.prototype.parent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QMenu.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QMenu.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QMenu.prototype.devType = function(...args) 
          
        {
          //print("JS: QMenu.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QMenu.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QMenu.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QMenu.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QMenu.prototype.isModal = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QMenu.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QMenu.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QMenu.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QMenu.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QMenu.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QMenu.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QMenu.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QMenu.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QMenu.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QMenu.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QMenu.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QMenu.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QMenu.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QMenu.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QMenu.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QMenu.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QMenu.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QMenu.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QMenu.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QMenu.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QMenu.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QMenu.prototype.window = function(...args) 
          
        {
          //print("JS: QMenu.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QMenu.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QMenu.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QMenu.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QMenu.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QMenu.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QMenu.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QMenu.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QMenu.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QMenu.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QMenu.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QMenu.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QMenu.prototype.setFont = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QMenu.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QMenu.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QMenu.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QMenu.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QMenu.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QMenu.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QMenu.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QMenu.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QMenu.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QMenu.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QMenu.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QMenu.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QMenu.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QMenu.prototype.setMask = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QMenu.prototype.mask = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QMenu.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QMenu.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QMenu.prototype.grab = function(...args) 
          
        {
          //print("JS: QMenu.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QMenu.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QMenu.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QMenu.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QMenu.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QMenu.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QMenu.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QMenu.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QMenu.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QMenu.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QMenu.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QMenu.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QMenu.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QMenu.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QMenu.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QMenu.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QMenu.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QMenu.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QMenu.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QMenu.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QMenu.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QMenu.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QMenu.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QMenu.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QMenu.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QMenu.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QMenu.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QMenu.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QMenu.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QMenu.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QMenu.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QMenu.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QMenu.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QMenu.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QMenu.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QMenu.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QMenu.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QMenu.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QMenu.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QMenu.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QMenu.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QMenu.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QMenu.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QMenu.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QMenu.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QMenu.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QMenu.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QMenu.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QMenu.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QMenu.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QMenu.prototype.update = function(...args) 
          
        {
          //print("JS: QMenu.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QMenu.prototype.repaint = function(...args) 
          
        {
          //print("JS: QMenu.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QMenu.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QMenu.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QMenu.prototype.show = function(...args) 
          
        {
          //print("JS: QMenu.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QMenu.prototype.hide = function(...args) 
          
        {
          //print("JS: QMenu.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QMenu.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QMenu.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QMenu.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QMenu.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QMenu.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QMenu.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QMenu.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QMenu.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QMenu.prototype.close = function(...args) 
          
        {
          //print("JS: QMenu.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QMenu.prototype.raise = function(...args) 
          
        {
          //print("JS: QMenu.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QMenu.prototype.lower = function(...args) 
          
        {
          //print("JS: QMenu.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QMenu.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QMenu.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QMenu.prototype.move = function(...args) 
          
        {
          //print("JS: QMenu.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QMenu.prototype.resize = function(...args) 
          
        {
          //print("JS: QMenu.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QMenu.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QMenu.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QMenu.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QMenu.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QMenu.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QMenu.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QMenu.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QMenu.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QMenu.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QMenu.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QMenu.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QMenu.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QMenu.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QMenu.prototype.windowState = function(...args) 
          
        {
          //print("JS: QMenu.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QMenu.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QMenu.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QMenu.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QMenu.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QMenu.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QMenu.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QMenu.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QMenu.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QMenu.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QMenu.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QMenu.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QMenu.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QMenu.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QMenu.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QMenu.prototype.layout = function(...args) 
          
        {
          //print("JS: QMenu.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QMenu.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QMenu.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QMenu.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QMenu.prototype.setParent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QMenu.prototype.scroll = function(...args) 
          
        {
          //print("JS: QMenu.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QMenu.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QMenu.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QMenu.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QMenu.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QMenu.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QMenu.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QMenu.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QMenu.prototype.addActions = function(...args) 
          
        {
          //print("JS: QMenu.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QMenu.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QMenu.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QMenu.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QMenu.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QMenu.prototype.actions = function(...args) 
          
        {
          //print("JS: QMenu.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QMenu.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QMenu.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QMenu.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QMenu.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QMenu.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QMenu.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QMenu.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QMenu.prototype.windowType = function(...args) 
          
        {
          //print("JS: QMenu.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QMenu.prototype.childAt = function(...args) 
          
        {
          //print("JS: QMenu.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QMenu.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QMenu.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QMenu.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QMenu.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QMenu.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QMenu.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QMenu.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QMenu.prototype.event = function(...args) 
          
        {
          //print("JS: QMenu.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QMenu.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.metric = function(...args) 
          
        {
          //print("JS: QMenu.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QMenu.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QMenu.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QMenu.prototype.redirected = function(...args) 
          
        {
          //print("JS: QMenu.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QMenu.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QMenu.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QMenu.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QMenu.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QMenu.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QMenu.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QMenu.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QMenu.prototype.create = function(...args) 
          
        {
          //print("JS: QMenu.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QMenu.prototype.destroy = function(...args) 
          
        {
          //print("JS: QMenu.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QMenu.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QMenu.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QMenu.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QMenu.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QMenu.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QMenu.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QMenu.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QMenu.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QMenu.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QMenu.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QMenu.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QMenu.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QMenu.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QMenu.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QMenu.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QMenu.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QMenu.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QMenu.prototype.addAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QMenu.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QMenu.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QMenu.prototype.addMenu = function(...args) 
          
        {
          //print("JS: QMenu.prototype.addMenu");
          
              return this.__PROXY__.addMenu(...args);
            
        };
        
        // function 
        QMenu.prototype.addSeparator = function(...args) 
          
        {
          //print("JS: QMenu.prototype.addSeparator");
          
              return this.__PROXY__.addSeparator(...args);
            
        };
        
        // function 
        QMenu.prototype.addSection = function(...args) 
          
        {
          //print("JS: QMenu.prototype.addSection");
          
              return this.__PROXY__.addSection(...args);
            
        };
        
        // function 
        QMenu.prototype.insertMenu = function(...args) 
          
        {
          //print("JS: QMenu.prototype.insertMenu");
          
              return this.__PROXY__.insertMenu(...args);
            
        };
        
        // function 
        QMenu.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: QMenu.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
        
        // function 
        QMenu.prototype.insertSection = function(...args) 
          
        {
          //print("JS: QMenu.prototype.insertSection");
          
              return this.__PROXY__.insertSection(...args);
            
        };
        
        // function 
        QMenu.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QMenu.prototype.clear = function(...args) 
          
        {
          //print("JS: QMenu.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QMenu.prototype.setTearOffEnabled = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setTearOffEnabled");
          
              return this.__PROXY__.setTearOffEnabled(...args);
            
        };
        
        // function 
        QMenu.prototype.isTearOffEnabled = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isTearOffEnabled");
          
              return this.__PROXY__.isTearOffEnabled(...args);
            
        };
        
        // function 
        QMenu.prototype.isTearOffMenuVisible = function(...args) 
          
        {
          //print("JS: QMenu.prototype.isTearOffMenuVisible");
          
              return this.__PROXY__.isTearOffMenuVisible(...args);
            
        };
        
        // function 
        QMenu.prototype.showTearOffMenu = function(...args) 
          
        {
          //print("JS: QMenu.prototype.showTearOffMenu");
          
              return this.__PROXY__.showTearOffMenu(...args);
            
        };
        
        // function 
        QMenu.prototype.hideTearOffMenu = function(...args) 
          
        {
          //print("JS: QMenu.prototype.hideTearOffMenu");
          
              return this.__PROXY__.hideTearOffMenu(...args);
            
        };
        
        // function 
        QMenu.prototype.setDefaultAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setDefaultAction");
          
              return this.__PROXY__.setDefaultAction(...args);
            
        };
        
        // function 
        QMenu.prototype.defaultAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.defaultAction");
          
              return this.__PROXY__.defaultAction(...args);
            
        };
        
        // function 
        QMenu.prototype.setActiveAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setActiveAction");
          
              return this.__PROXY__.setActiveAction(...args);
            
        };
        
        // function 
        QMenu.prototype.activeAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.activeAction");
          
              return this.__PROXY__.activeAction(...args);
            
        };
        
        // function 
        QMenu.prototype.popup = function(...args) 
          
        {
          //print("JS: QMenu.prototype.popup");
          
              return this.__PROXY__.popup(...args);
            
        };
        
        // function 
        QMenu.prototype.exec = function(...args) 
          
        {
          //print("JS: QMenu.prototype.exec");
          
              return this.__PROXY__.exec(...args);
            
        };
        
        // function 
        QMenu.prototype.actionGeometry = function(...args) 
          
        {
          //print("JS: QMenu.prototype.actionGeometry");
          
              return this.__PROXY__.actionGeometry(...args);
            
        };
        
        // function 
        QMenu.prototype.actionAt = function(...args) 
          
        {
          //print("JS: QMenu.prototype.actionAt");
          
              return this.__PROXY__.actionAt(...args);
            
        };
        
        // function 
        QMenu.prototype.menuAction = function(...args) 
          
        {
          //print("JS: QMenu.prototype.menuAction");
          
              return this.__PROXY__.menuAction(...args);
            
        };
        
        // function 
        QMenu.prototype.setTitle = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setTitle");
          
              return this.__PROXY__.setTitle(...args);
            
        };
        
        // function 
        QMenu.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
        
        // function 
        QMenu.prototype.setNoReplayFor = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setNoReplayFor");
          
              return this.__PROXY__.setNoReplayFor(...args);
            
        };
        
        // function 
        QMenu.prototype.setAsDockMenu = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setAsDockMenu");
          
              return this.__PROXY__.setAsDockMenu(...args);
            
        };
        
        // function 
        QMenu.prototype.setSeparatorsCollapsible = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setSeparatorsCollapsible");
          
              return this.__PROXY__.setSeparatorsCollapsible(...args);
            
        };
        
        // function 
        QMenu.prototype.setToolTipsVisible = function(...args) 
          
        {
          //print("JS: QMenu.prototype.setToolTipsVisible");
          
              return this.__PROXY__.setToolTipsVisible(...args);
            
        };
        
        // function 
        QMenu.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QMenu.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
        
        // function 
        QMenu.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QMenu.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QMenu.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QMenu.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QMenu.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QMenu.prototype.paintEvent.__SUPER__ = true;
        

      // static functions:
      

        // static function 
        QMenu.exec = function() 
          
        {
          //print("JS: QMenu.exec");
          
      if (arguments.length >= 2 &&
          arguments.length <= 4) {
    
                // calling static wrapper:
                return QMenu_WrapperSingletonInstance.exec(
                  arguments[0], arguments[1], arguments[2], arguments[3]
                );
              

        //copyProperties(this, wrapper, QMenu);
  }

  
  else {
    
        print("QMenu.exec(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QMenu.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'tearOffEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isTearOffEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTearOffEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'title', {
              get: function() {
                  
                      return this.__PROXY__.title;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'separatorsCollapsible', {
              get: function() {
                  
                      return this.__PROXY__.separatorsCollapsible;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSeparatorsCollapsible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenu.prototype, 'toolTipsVisible', {
              get: function() {
                  
                      return this.__PROXY__.toolTipsVisible;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipsVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QMenu.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QMenu.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QMenu.prototype, 'aboutToShow', {
            get: function() { return this.__PROXY__.aboutToShow; },
            configurable: true
        });
        
        Object.defineProperty(QMenu.prototype, 'aboutToHide', {
            get: function() { return this.__PROXY__.aboutToHide; },
            configurable: true
        });
        
        Object.defineProperty(QMenu.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(QMenu.prototype, 'triggered(QAction*)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        
        Object.defineProperty(QMenu.prototype, 'hovered', {
            get: function() { return this.__PROXY__.hovered; },
            configurable: true
        });
        
          Object.defineProperty(QMenu.prototype, 'hovered(QAction*)', {
              get: function() { return this.__PROXY__.hovered; },
              configurable: true
          });
        QMenu.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMenu.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMenu.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMenu.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMenu.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMenu.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      