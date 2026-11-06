
      // auto generated
      //var self;

      // class constructor:
      function QRhiWidget() {
        

        // should be QRhiWidget_BaseJs.call(this, engine):
        //QRhiWidget.prototype = new QRhiWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRhiWidget.getIdStatic()))) {

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
            qWarning("QRhiWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QRhiWidget.js: No constructor found for class QRhiWidget");
            
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

      //QRhiWidget.prototype = new QRhiWidget_BaseJs(engine);
      //QRhiWidget.prototype = new QRhiWidget_Wrapper(engine);
      QRhiWidget.prototype = new Object();


      QRhiWidget.prototype.toString = function() {
          //return "QRhiWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRhiWidget [JS]";
        };
      QRhiWidget.getObjectType = function() {
        return RJSType_QRhiWidget.getIdStatic();
      };

      QRhiWidget.prototype.getObjectType = function() {
        return RJSType_QRhiWidget.getIdStatic();
      };

      QRhiWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRhiWidget.getIdStatic()) {
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
        QRhiWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QRhiWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QRhiWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QRhiWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRhiWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QRhiWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QRhiWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        QRhiWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QRhiWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QRhiWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRhiWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRhiWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QRhiWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      