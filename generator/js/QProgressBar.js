
      // auto generated
      //var self;

      // class constructor:
      function QProgressBar() {
        

        // should be QProgressBar_BaseJs.call(this, engine):
        //QProgressBar.prototype = new QProgressBar_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QProgressBar.getIdStatic()))) {

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
            qWarning("QProgressBar.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QProgressBar_Wrapper(
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

      

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar(): wrong number / type of arguments");
      
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

      //QProgressBar.prototype = new QProgressBar_BaseJs(engine);
      //QProgressBar.prototype = new QProgressBar_Wrapper(engine);
      QProgressBar.prototype = new Object();


      QProgressBar.prototype.toString = function() {
          //return "QProgressBar [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QProgressBar [JS]";
        };
      QProgressBar.getObjectType = function() {
        return RJSType_QProgressBar.getIdStatic();
      };

      QProgressBar.prototype.getObjectType = function() {
        return RJSType_QProgressBar.getIdStatic();
      };

      QProgressBar.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QProgressBar.getIdStatic()) {
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
      
  // enum: Direction
QProgressBar.TopToBottom = QProgressBar_Wrapper.TopToBottom;
QProgressBar.BottomToTop = QProgressBar_Wrapper.BottomToTop;


      // functions:
      
        // function 
        QProgressBar.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        QProgressBar.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        QProgressBar.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QProgressBar.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QProgressBar.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QProgressBar.prototype.findChild = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QProgressBar.prototype.children = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QProgressBar.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QProgressBar.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QProgressBar.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QProgressBar.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QProgressBar.prototype.property = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QProgressBar.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QProgressBar.prototype.parent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QProgressBar.prototype.devType = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QProgressBar.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isModal = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QProgressBar.prototype.window = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QProgressBar.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QProgressBar.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QProgressBar.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QProgressBar.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFont = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QProgressBar.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QProgressBar.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QProgressBar.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QProgressBar.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QProgressBar.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMask = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mask = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QProgressBar.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QProgressBar.prototype.grab = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QProgressBar.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QProgressBar.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QProgressBar.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QProgressBar.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QProgressBar.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QProgressBar.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QProgressBar.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QProgressBar.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QProgressBar.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QProgressBar.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QProgressBar.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QProgressBar.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QProgressBar.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QProgressBar.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QProgressBar.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QProgressBar.prototype.update = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QProgressBar.prototype.repaint = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QProgressBar.prototype.show = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QProgressBar.prototype.hide = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QProgressBar.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QProgressBar.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QProgressBar.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QProgressBar.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QProgressBar.prototype.close = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QProgressBar.prototype.raise = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QProgressBar.prototype.lower = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QProgressBar.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QProgressBar.prototype.move = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QProgressBar.prototype.resize = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QProgressBar.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QProgressBar.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QProgressBar.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QProgressBar.prototype.windowState = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QProgressBar.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QProgressBar.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QProgressBar.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QProgressBar.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QProgressBar.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QProgressBar.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QProgressBar.prototype.layout = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QProgressBar.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setParent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.scroll = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QProgressBar.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QProgressBar.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QProgressBar.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QProgressBar.prototype.addAction = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QProgressBar.prototype.addActions = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QProgressBar.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QProgressBar.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QProgressBar.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QProgressBar.prototype.actions = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QProgressBar.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QProgressBar.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QProgressBar.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QProgressBar.prototype.windowType = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QProgressBar.prototype.childAt = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QProgressBar.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QProgressBar.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        QProgressBar.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        QProgressBar.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        QProgressBar.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        QProgressBar.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QProgressBar.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QProgressBar.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QProgressBar.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QProgressBar.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      QProgressBar.prototype.actionEvent = function() 
        
      {
        //print("JS: QProgressBar.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QProgressBar);
  }

  
  else {
    
        print("QProgressBar.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QProgressBar.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.metric = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QProgressBar.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QProgressBar.prototype.redirected = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QProgressBar.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QProgressBar.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QProgressBar.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QProgressBar.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QProgressBar.prototype.create = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QProgressBar.prototype.destroy = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QProgressBar.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QProgressBar.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QProgressBar.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QProgressBar.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QProgressBar.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QProgressBar.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QProgressBar.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QProgressBar.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QProgressBar.prototype.minimum = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.minimum");
          
              return this.__PROXY__.minimum(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setTextVisible = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setTextVisible");
          
              return this.__PROXY__.setTextVisible(...args);
            
        };
        
        // function 
        QProgressBar.prototype.isTextVisible = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.isTextVisible");
          
              return this.__PROXY__.isTextVisible(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setInvertedAppearance = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setInvertedAppearance");
          
              return this.__PROXY__.setInvertedAppearance(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setTextDirection = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setTextDirection");
          
              return this.__PROXY__.setTextDirection(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setFormat = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setFormat");
          
              return this.__PROXY__.setFormat(...args);
            
        };
        
        // function 
        QProgressBar.prototype.resetFormat = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.resetFormat");
          
              return this.__PROXY__.resetFormat(...args);
            
        };
        
        // function 
        QProgressBar.prototype.reset = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.reset");
          
              return this.__PROXY__.reset(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setRange = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMinimum = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMinimum");
          
              return this.__PROXY__.setMinimum(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setMaximum = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setMaximum");
          
              return this.__PROXY__.setMaximum(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setValue = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
        
        // function 
        QProgressBar.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
        
        // function 
        QProgressBar.prototype.event = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
        QProgressBar.prototype.event.__SUPER__ = true;
        
        // function 
        QProgressBar.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QProgressBar.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QProgressBar.prototype.paintEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QProgressBar.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'maximum', {
              get: function() {
                  
                      return this.__PROXY__.maximum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'value', {
              get: function() {
                  
                      return this.__PROXY__.value;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setValue(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'alignment', {
              get: function() {
                  
                      return this.__PROXY__.alignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'textVisible', {
              get: function() {
                  
                      return this.__PROXY__.isTextVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'orientation', {
              get: function() {
                  
                      return this.__PROXY__.orientation;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOrientation(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'invertedAppearance', {
              get: function() {
                  
                      return this.__PROXY__.invertedAppearance;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInvertedAppearance(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'textDirection', {
              get: function() {
                  
                      return this.__PROXY__.textDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QProgressBar.prototype, 'format', {
              get: function() {
                  
                      return this.__PROXY__.format;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFormat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QProgressBar.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QProgressBar.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QProgressBar.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QProgressBar.prototype, 'valueChanged(int)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        QProgressBar.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QProgressBar.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QProgressBar.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QProgressBar.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QProgressBar.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QProgressBar.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      