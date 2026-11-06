
      // auto generated
      //var self;

      // class constructor:
      function QToolButton() {
        

        // should be QToolButton_BaseJs.call(this, engine):
        //QToolButton.prototype = new QToolButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QToolButton.getIdStatic()))) {

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
            qWarning("QToolButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QToolButton_Wrapper(
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

      

        //copyProperties(this, wrapper, QToolButton);
  }

  
  else {
    
        print("QToolButton(): wrong number / type of arguments");
      
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

      //QToolButton.prototype = new QToolButton_BaseJs(engine);
      //QToolButton.prototype = new QToolButton_Wrapper(engine);
      QToolButton.prototype = new Object();


      QToolButton.prototype.toString = function() {
          //return "QToolButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QToolButton [JS]";
        };
      QToolButton.getObjectType = function() {
        return RJSType_QToolButton.getIdStatic();
      };

      QToolButton.prototype.getObjectType = function() {
        return RJSType_QToolButton.getIdStatic();
      };

      QToolButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QToolButton.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractButton.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QToolButton.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QToolButton.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QToolButton.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QToolButton.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QToolButton.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QToolButton.prototype.findChild = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QToolButton.prototype.children = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QToolButton.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QToolButton.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QToolButton.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QToolButton.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QToolButton.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QToolButton.prototype.property = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QToolButton.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QToolButton.prototype.parent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QToolButton.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QToolButton.prototype.devType = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QToolButton.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QToolButton.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QToolButton.prototype.isModal = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QToolButton.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QToolButton.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QToolButton.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QToolButton.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QToolButton.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QToolButton.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QToolButton.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QToolButton.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QToolButton.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QToolButton.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QToolButton.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QToolButton.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QToolButton.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QToolButton.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QToolButton.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QToolButton.prototype.window = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QToolButton.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QToolButton.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QToolButton.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QToolButton.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QToolButton.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QToolButton.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QToolButton.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QToolButton.prototype.setFont = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QToolButton.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QToolButton.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QToolButton.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QToolButton.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QToolButton.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QToolButton.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QToolButton.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMask = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QToolButton.prototype.mask = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QToolButton.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QToolButton.prototype.grab = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QToolButton.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QToolButton.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QToolButton.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QToolButton.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QToolButton.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QToolButton.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QToolButton.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QToolButton.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QToolButton.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QToolButton.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QToolButton.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QToolButton.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QToolButton.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QToolButton.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QToolButton.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QToolButton.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QToolButton.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QToolButton.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QToolButton.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QToolButton.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QToolButton.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QToolButton.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QToolButton.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QToolButton.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QToolButton.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QToolButton.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QToolButton.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QToolButton.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QToolButton.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QToolButton.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QToolButton.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QToolButton.prototype.update = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QToolButton.prototype.repaint = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QToolButton.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QToolButton.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QToolButton.prototype.show = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QToolButton.prototype.hide = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QToolButton.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QToolButton.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QToolButton.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QToolButton.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QToolButton.prototype.close = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QToolButton.prototype.raise = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QToolButton.prototype.lower = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QToolButton.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QToolButton.prototype.move = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QToolButton.prototype.resize = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QToolButton.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QToolButton.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QToolButton.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QToolButton.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QToolButton.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QToolButton.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QToolButton.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QToolButton.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QToolButton.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QToolButton.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QToolButton.prototype.windowState = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QToolButton.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QToolButton.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QToolButton.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QToolButton.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QToolButton.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QToolButton.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QToolButton.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QToolButton.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QToolButton.prototype.layout = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QToolButton.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QToolButton.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QToolButton.prototype.setParent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QToolButton.prototype.scroll = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QToolButton.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QToolButton.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QToolButton.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QToolButton.prototype.addAction = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QToolButton.prototype.addActions = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QToolButton.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QToolButton.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QToolButton.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QToolButton.prototype.actions = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QToolButton.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QToolButton.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QToolButton.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QToolButton.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QToolButton.prototype.windowType = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QToolButton.prototype.childAt = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QToolButton.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QToolButton.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QToolButton.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QToolButton.prototype.event = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QToolButton.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.metric = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QToolButton.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QToolButton.prototype.redirected = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QToolButton.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QToolButton.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QToolButton.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QToolButton.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QToolButton.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QToolButton.prototype.create = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QToolButton.prototype.destroy = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QToolButton.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QToolButton.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QToolButton.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QToolButton.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QToolButton.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QToolButton.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QToolButton.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QToolButton.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QToolButton.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QToolButton.prototype.setText = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QToolButton.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        QToolButton.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
    
        // function 
        QToolButton.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
    
        // function 
        QToolButton.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
    
        // function 
        QToolButton.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
    
        // function 
        QToolButton.prototype.setDown = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setDown");
          
              return this.__PROXY__.setDown(...args);
            
        };
    
        // function 
        QToolButton.prototype.isDown = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.isDown");
          
              return this.__PROXY__.isDown(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAutoRepeatDelay = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAutoRepeatDelay");
          
              return this.__PROXY__.setAutoRepeatDelay(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAutoRepeatInterval = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAutoRepeatInterval");
          
              return this.__PROXY__.setAutoRepeatInterval(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAutoExclusive = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAutoExclusive");
          
              return this.__PROXY__.setAutoExclusive(...args);
            
        };
    
        // function 
        QToolButton.prototype.group = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.group");
          
              return this.__PROXY__.group(...args);
            
        };
    
        // function 
        QToolButton.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QToolButton.prototype.animateClick = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.animateClick");
          
              return this.__PROXY__.animateClick(...args);
            
        };
    
        // function 
        QToolButton.prototype.click = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.click");
          
              return this.__PROXY__.click(...args);
            
        };
    
        // function 
        QToolButton.prototype.toggle = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
    
        // function 
        QToolButton.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
    
        // function 
        QToolButton.prototype.setArrowType = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setArrowType");
          
              return this.__PROXY__.setArrowType(...args);
            
        };
    
        // function 
        QToolButton.prototype.setMenu = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setMenu");
          
              return this.__PROXY__.setMenu(...args);
            
        };
    
        // function 
        QToolButton.prototype.menu = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.menu");
          
              return this.__PROXY__.menu(...args);
            
        };
    
        // function 
        QToolButton.prototype.setPopupMode = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setPopupMode");
          
              return this.__PROXY__.setPopupMode(...args);
            
        };
    
        // function 
        QToolButton.prototype.defaultAction = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.defaultAction");
          
              return this.__PROXY__.defaultAction(...args);
            
        };
    
        // function 
        QToolButton.prototype.setAutoRaise = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setAutoRaise");
          
              return this.__PROXY__.setAutoRaise(...args);
            
        };
    
        // function 
        QToolButton.prototype.showMenu = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.showMenu");
          
              return this.__PROXY__.showMenu(...args);
            
        };
    
        // function 
        QToolButton.prototype.setToolButtonStyle = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setToolButtonStyle");
          
              return this.__PROXY__.setToolButtonStyle(...args);
            
        };
    
        // function 
        QToolButton.prototype.setDefaultAction = function(...args) 
          
        {
          //print("JS: QToolButton.prototype.setDefaultAction");
          
              return this.__PROXY__.setDefaultAction(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QToolButton.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'autoExclusive', {
              get: function() {
                  
                      return this.__PROXY__.autoExclusive;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoExclusive(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'autoRepeatDelay', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatDelay;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatDelay(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'autoRepeatInterval', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'down', {
              get: function() {
                  
                      return this.__PROXY__.isDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'toolButtonStyle', {
              get: function() {
                  
                      return this.__PROXY__.toolButtonStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolButtonStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'autoRaise', {
              get: function() {
                  
                      return this.__PROXY__.autoRaise;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRaise(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'arrowType', {
              get: function() {
                  
                      return this.__PROXY__.arrowType;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setArrowType(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QToolButton.prototype, 'popupMode', {
              get: function() {
                  
                      return this.__PROXY__.popupMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPopupMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QToolButton.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QToolButton.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QToolButton.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
        Object.defineProperty(QToolButton.prototype, 'released', {
            get: function() { return this.__PROXY__.released; },
            configurable: true
        });
        
        Object.defineProperty(QToolButton.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QToolButton.prototype, 'clicked(bool)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QToolButton.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QToolButton.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        
        Object.defineProperty(QToolButton.prototype, 'triggered', {
            get: function() { return this.__PROXY__.triggered; },
            configurable: true
        });
        
          Object.defineProperty(QToolButton.prototype, 'triggered(QAction*)', {
              get: function() { return this.__PROXY__.triggered; },
              configurable: true
          });
        QToolButton.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QToolButton.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QToolButton.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QToolButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QToolButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QToolButton.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      