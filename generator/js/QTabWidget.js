
      // auto generated
      //var self;

      // class constructor:
      function QTabWidget() {
        

        // should be QTabWidget_BaseJs.call(this, engine):
        //QTabWidget.prototype = new QTabWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTabWidget.getIdStatic()))) {

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
            qWarning("QTabWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTabWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QTabWidget);
  }

  
  else {
    
        print("QTabWidget(): wrong number / type of arguments");
      
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

      //QTabWidget.prototype = new QTabWidget_BaseJs(engine);
      //QTabWidget.prototype = new QTabWidget_Wrapper(engine);
      QTabWidget.prototype = new Object();


      QTabWidget.prototype.toString = function() {
          //return "QTabWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTabWidget [JS]";
        };
      QTabWidget.getObjectType = function() {
        return RJSType_QTabWidget.getIdStatic();
      };

      QTabWidget.prototype.getObjectType = function() {
        return RJSType_QTabWidget.getIdStatic();
      };

      QTabWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTabWidget.getIdStatic()) {
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
      
  // enum: TabPosition
QTabWidget.North = QTabWidget_Wrapper.North;
QTabWidget.South = QTabWidget_Wrapper.South;
QTabWidget.West = QTabWidget_Wrapper.West;
QTabWidget.East = QTabWidget_Wrapper.East;

  // enum: TabShape
QTabWidget.Rounded = QTabWidget_Wrapper.Rounded;
QTabWidget.Triangular = QTabWidget_Wrapper.Triangular;


      // functions:
      
        // function 
        QTabWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QTabWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QTabWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QTabWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QTabWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QTabWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QTabWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QTabWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QTabWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QTabWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QTabWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QTabWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QTabWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QTabWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QTabWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QTabWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QTabWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QTabWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QTabWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QTabWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QTabWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QTabWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QTabWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QTabWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QTabWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QTabWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QTabWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QTabWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QTabWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QTabWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QTabWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QTabWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QTabWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QTabWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QTabWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QTabWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QTabWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QTabWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QTabWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QTabWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QTabWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QTabWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QTabWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QTabWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QTabWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QTabWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QTabWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QTabWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QTabWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QTabWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QTabWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QTabWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QTabWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QTabWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QTabWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QTabWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QTabWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QTabWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QTabWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QTabWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QTabWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QTabWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QTabWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QTabWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QTabWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QTabWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QTabWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QTabWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QTabWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QTabWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QTabWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QTabWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QTabWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QTabWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QTabWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QTabWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QTabWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QTabWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QTabWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QTabWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QTabWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QTabWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QTabWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QTabWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QTabWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QTabWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QTabWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QTabWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QTabWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QTabWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QTabWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QTabWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QTabWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QTabWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QTabWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QTabWidget.prototype.addTab = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.addTab");
          
              return this.__PROXY__.addTab(...args);
            
        };
        
        // function 
        QTabWidget.prototype.insertTab = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.insertTab");
          
              return this.__PROXY__.insertTab(...args);
            
        };
        
        // function 
        QTabWidget.prototype.removeTab = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.removeTab");
          
              return this.__PROXY__.removeTab(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isTabEnabled = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isTabEnabled");
          
              return this.__PROXY__.isTabEnabled(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabEnabled = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabEnabled");
          
              return this.__PROXY__.setTabEnabled(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isTabVisible = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isTabVisible");
          
              return this.__PROXY__.isTabVisible(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabVisible = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabVisible");
          
              return this.__PROXY__.setTabVisible(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabText = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabText");
          
              return this.__PROXY__.tabText(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabText = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabText");
          
              return this.__PROXY__.setTabText(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabIcon = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabIcon");
          
              return this.__PROXY__.tabIcon(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabIcon = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabIcon");
          
              return this.__PROXY__.setTabIcon(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabToolTip = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabToolTip");
          
              return this.__PROXY__.setTabToolTip(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabToolTip = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabToolTip");
          
              return this.__PROXY__.tabToolTip(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabWhatsThis = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabWhatsThis");
          
              return this.__PROXY__.setTabWhatsThis(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabWhatsThis = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabWhatsThis");
          
              return this.__PROXY__.tabWhatsThis(...args);
            
        };
        
        // function 
        QTabWidget.prototype.currentWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.currentWidget");
          
              return this.__PROXY__.currentWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.widget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabPosition = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabPosition");
          
              return this.__PROXY__.tabPosition(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabPosition = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabPosition");
          
              return this.__PROXY__.setTabPosition(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabsClosable = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabsClosable");
          
              return this.__PROXY__.setTabsClosable(...args);
            
        };
        
        // function 
        QTabWidget.prototype.isMovable = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.isMovable");
          
              return this.__PROXY__.isMovable(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setMovable = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setMovable");
          
              return this.__PROXY__.setMovable(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabShape = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabShape");
          
              return this.__PROXY__.setTabShape(...args);
            
        };
        
        // function 
        QTabWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QTabWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setElideMode = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setElideMode");
          
              return this.__PROXY__.setElideMode(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setUsesScrollButtons = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setUsesScrollButtons");
          
              return this.__PROXY__.setUsesScrollButtons(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setDocumentMode = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setDocumentMode");
          
              return this.__PROXY__.setDocumentMode(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setTabBarAutoHide = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabBarAutoHide");
          
              return this.__PROXY__.setTabBarAutoHide(...args);
            
        };
        
        // function 
        QTabWidget.prototype.clear = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabBar = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabBar");
          
              return this.__PROXY__.tabBar(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setCurrentWidget = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setCurrentWidget");
          
              return this.__PROXY__.setCurrentWidget(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabInserted = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabInserted");
          
              return this.__PROXY__.tabInserted(...args);
            
        };
        
        // function 
        QTabWidget.prototype.tabRemoved = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.tabRemoved");
          
              return this.__PROXY__.tabRemoved(...args);
            
        };
        
        // function 
        QTabWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QTabWidget.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QTabWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QTabWidget.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QTabWidget.prototype.setTabBar = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setTabBar");
          
              return this.__PROXY__.setTabBar(...args);
            
        };
        
        // function 
        QTabWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QTabWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QTabWidget.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QTabWidget.prototype.setUpLayout = function(...args) 
          
        {
          //print("JS: QTabWidget.prototype.setUpLayout");
          
              return this.__PROXY__.setUpLayout(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QTabWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'tabShape', {
              get: function() {
                  
                      return this.__PROXY__.tabShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'count', {
              get: function() {
                  
                      return this.__PROXY__.count;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'elideMode', {
              get: function() {
                  
                      return this.__PROXY__.elideMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setElideMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'usesScrollButtons', {
              get: function() {
                  
                      return this.__PROXY__.usesScrollButtons;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUsesScrollButtons(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'documentMode', {
              get: function() {
                  
                      return this.__PROXY__.documentMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'tabsClosable', {
              get: function() {
                  
                      return this.__PROXY__.tabsClosable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabsClosable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'movable', {
              get: function() {
                  
                      return this.__PROXY__.isMovable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMovable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTabWidget.prototype, 'tabBarAutoHide', {
              get: function() {
                  
                      return this.__PROXY__.tabBarAutoHide;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabBarAutoHide(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTabWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTabWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTabWidget.prototype, 'currentChanged', {
            get: function() { return this.__PROXY__.currentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTabWidget.prototype, 'currentChanged(int)', {
              get: function() { return this.__PROXY__.currentChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTabWidget.prototype, 'tabCloseRequested', {
            get: function() { return this.__PROXY__.tabCloseRequested; },
            configurable: true
        });
        
          Object.defineProperty(QTabWidget.prototype, 'tabCloseRequested(int)', {
              get: function() { return this.__PROXY__.tabCloseRequested; },
              configurable: true
          });
        
        Object.defineProperty(QTabWidget.prototype, 'tabBarClicked', {
            get: function() { return this.__PROXY__.tabBarClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTabWidget.prototype, 'tabBarClicked(int)', {
              get: function() { return this.__PROXY__.tabBarClicked; },
              configurable: true
          });
        
        Object.defineProperty(QTabWidget.prototype, 'tabBarDoubleClicked', {
            get: function() { return this.__PROXY__.tabBarDoubleClicked; },
            configurable: true
        });
        
          Object.defineProperty(QTabWidget.prototype, 'tabBarDoubleClicked(int)', {
              get: function() { return this.__PROXY__.tabBarDoubleClicked; },
              configurable: true
          });
        QTabWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTabWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTabWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTabWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTabWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTabWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      