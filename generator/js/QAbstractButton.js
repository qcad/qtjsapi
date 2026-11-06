
      // auto generated
      //var self;

      // class constructor:
      function QAbstractButton() {
        

        // should be QAbstractButton_BaseJs.call(this, engine):
        //QAbstractButton.prototype = new QAbstractButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractButton.getIdStatic()))) {

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
            qWarning("QAbstractButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractButton.js: No constructor found for class QAbstractButton");
            
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

      //QAbstractButton.prototype = new QAbstractButton_BaseJs(engine);
      //QAbstractButton.prototype = new QAbstractButton_Wrapper(engine);
      QAbstractButton.prototype = new Object();


      QAbstractButton.prototype.toString = function() {
          //return "QAbstractButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractButton [JS]";
        };
      QAbstractButton.getObjectType = function() {
        return RJSType_QAbstractButton.getIdStatic();
      };

      QAbstractButton.prototype.getObjectType = function() {
        return RJSType_QAbstractButton.getIdStatic();
      };

      QAbstractButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractButton.getIdStatic()) {
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
        QAbstractButton.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.devType = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isModal = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.window = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setFont = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setMask = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mask = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.grab = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.update = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.repaint = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.show = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.hide = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.close = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.raise = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.lower = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.move = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.resize = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.windowState = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.layout = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.scroll = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.addAction = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.addActions = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.actions = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.windowType = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.childAt = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.event = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.metric = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.redirected = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.create = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.destroy = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setText = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setDown = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setDown");
          
              return this.__PROXY__.setDown(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.isDown = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.isDown");
          
              return this.__PROXY__.isDown(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAutoRepeatDelay = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAutoRepeatDelay");
          
              return this.__PROXY__.setAutoRepeatDelay(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAutoRepeatInterval = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAutoRepeatInterval");
          
              return this.__PROXY__.setAutoRepeatInterval(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setAutoExclusive = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setAutoExclusive");
          
              return this.__PROXY__.setAutoExclusive(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.group = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.group");
          
              return this.__PROXY__.group(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.animateClick = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.animateClick");
          
              return this.__PROXY__.animateClick(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.click = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.click");
          
              return this.__PROXY__.click(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.toggle = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
    
        // function 
        QAbstractButton.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QAbstractButton.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractButton.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'autoExclusive', {
              get: function() {
                  
                      return this.__PROXY__.autoExclusive;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoExclusive(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'autoRepeatDelay', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatDelay;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatDelay(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'autoRepeatInterval', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'down', {
              get: function() {
                  
                      return this.__PROXY__.isDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractButton.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractButton.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractButton.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractButton.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractButton.prototype, 'released', {
            get: function() { return this.__PROXY__.released; },
            configurable: true
        });
        
        Object.defineProperty(QAbstractButton.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractButton.prototype, 'clicked(bool)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QAbstractButton.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractButton.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        QAbstractButton.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractButton.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractButton.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractButton.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      