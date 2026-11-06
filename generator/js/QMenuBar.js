
      // auto generated
      //var self;

      // class constructor:
      function QMenuBar() {
        

        // should be QMenuBar_BaseJs.call(this, engine):
        //QMenuBar.prototype = new QMenuBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMenuBar.getIdStatic()))) {

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
            qWarning("QMenuBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QMenuBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QMenuBar);
  }

  
  else {
    
        print("QMenuBar(): wrong number / type of arguments");
      
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

      //QMenuBar.prototype = new QMenuBar_BaseJs(engine);
      //QMenuBar.prototype = new QMenuBar_Wrapper(engine);
      QMenuBar.prototype = new Object();


      QMenuBar.prototype.toString = function() {
          //return "QMenuBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMenuBar [JS]";
        };
      QMenuBar.getObjectType = function() {
        return RJSType_QMenuBar.getIdStatic();
      };

      QMenuBar.prototype.getObjectType = function() {
        return RJSType_QMenuBar.getIdStatic();
      };

      QMenuBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMenuBar.getIdStatic()) {
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
        QMenuBar.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QMenuBar.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QMenuBar.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QMenuBar.prototype.findChild = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QMenuBar.prototype.children = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QMenuBar.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QMenuBar.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QMenuBar.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QMenuBar.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QMenuBar.prototype.property = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QMenuBar.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QMenuBar.prototype.parent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QMenuBar.prototype.devType = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QMenuBar.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isModal = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QMenuBar.prototype.window = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QMenuBar.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QMenuBar.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QMenuBar.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QMenuBar.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setFont = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QMenuBar.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QMenuBar.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QMenuBar.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QMenuBar.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QMenuBar.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setMask = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mask = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QMenuBar.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QMenuBar.prototype.grab = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QMenuBar.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QMenuBar.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QMenuBar.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QMenuBar.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QMenuBar.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QMenuBar.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QMenuBar.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QMenuBar.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QMenuBar.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QMenuBar.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QMenuBar.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QMenuBar.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QMenuBar.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QMenuBar.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QMenuBar.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QMenuBar.prototype.update = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QMenuBar.prototype.repaint = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QMenuBar.prototype.show = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QMenuBar.prototype.hide = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QMenuBar.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QMenuBar.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QMenuBar.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QMenuBar.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QMenuBar.prototype.close = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QMenuBar.prototype.raise = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QMenuBar.prototype.lower = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QMenuBar.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QMenuBar.prototype.move = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QMenuBar.prototype.resize = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QMenuBar.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QMenuBar.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QMenuBar.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QMenuBar.prototype.windowState = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QMenuBar.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QMenuBar.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QMenuBar.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QMenuBar.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QMenuBar.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QMenuBar.prototype.layout = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QMenuBar.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setParent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.scroll = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QMenuBar.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QMenuBar.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QMenuBar.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QMenuBar.prototype.addActions = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QMenuBar.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QMenuBar.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QMenuBar.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QMenuBar.prototype.actions = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QMenuBar.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QMenuBar.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QMenuBar.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QMenuBar.prototype.windowType = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QMenuBar.prototype.childAt = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QMenuBar.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QMenuBar.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QMenuBar.prototype.event = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.metric = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QMenuBar.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QMenuBar.prototype.redirected = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QMenuBar.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QMenuBar.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QMenuBar.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QMenuBar.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QMenuBar.prototype.create = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QMenuBar.prototype.destroy = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QMenuBar.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QMenuBar.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QMenuBar.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QMenuBar.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QMenuBar.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QMenuBar.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QMenuBar.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QMenuBar.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QMenuBar.prototype.addAction = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QMenuBar.prototype.addMenu = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.addMenu");
          
              return this.__PROXY__.addMenu(...args);
            
        };
    
        // function 
        QMenuBar.prototype.addSeparator = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.addSeparator");
          
              return this.__PROXY__.addSeparator(...args);
            
        };
    
        // function 
        QMenuBar.prototype.insertSeparator = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.insertSeparator");
          
              return this.__PROXY__.insertSeparator(...args);
            
        };
    
        // function 
        QMenuBar.prototype.insertMenu = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.insertMenu");
          
              return this.__PROXY__.insertMenu(...args);
            
        };
    
        // function 
        QMenuBar.prototype.clear = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QMenuBar.prototype.activeAction = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.activeAction");
          
              return this.__PROXY__.activeAction(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setActiveAction = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setActiveAction");
          
              return this.__PROXY__.setActiveAction(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setDefaultUp = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setDefaultUp");
          
              return this.__PROXY__.setDefaultUp(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isDefaultUp = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isDefaultUp");
          
              return this.__PROXY__.isDefaultUp(...args);
            
        };
    
        // function 
        QMenuBar.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QMenuBar.prototype.actionGeometry = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.actionGeometry");
          
              return this.__PROXY__.actionGeometry(...args);
            
        };
    
        // function 
        QMenuBar.prototype.actionAt = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.actionAt");
          
              return this.__PROXY__.actionAt(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QMenuBar.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QMenuBar.prototype.isNativeMenuBar = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.isNativeMenuBar");
          
              return this.__PROXY__.isNativeMenuBar(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setNativeMenuBar = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setNativeMenuBar");
          
              return this.__PROXY__.setNativeMenuBar(...args);
            
        };
    
        // function 
        QMenuBar.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QMenuBar.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    
        // function 
        QMenuBar.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QMenuBar.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QMenuBar.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QMenuBar.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QMenuBar.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QMenuBar.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMenuBar.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QMenuBar.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QMenuBar.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QMenuBar.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(QMenuBar.prototype, 'triggered(QAction*)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        
        Object.defineProperty(QMenuBar.prototype, 'hovered', {
            get: function() { return this.__PROXY__.hovered; },
            configurable: true
        });
        
          Object.defineProperty(QMenuBar.prototype, 'hovered(QAction*)', {
              get: function() { return this.__PROXY__.hovered; },
              configurable: true
          });
        QMenuBar.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMenuBar.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMenuBar.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMenuBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMenuBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMenuBar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      