
      // auto generated
      //var self;

      // class constructor:
      function QGroupBox() {
        

        // should be QGroupBox_BaseJs.call(this, engine):
        //QGroupBox.prototype = new QGroupBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGroupBox.getIdStatic()))) {

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
            qWarning("QGroupBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QGroupBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGroupBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QGroupBox);
  }

  
  else {
    
        print("QGroupBox(): wrong number / type of arguments");
      
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

      //QGroupBox.prototype = new QGroupBox_BaseJs(engine);
      //QGroupBox.prototype = new QGroupBox_Wrapper(engine);
      QGroupBox.prototype = new Object();


      QGroupBox.prototype.toString = function() {
          //return "QGroupBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGroupBox [JS]";
        };
      QGroupBox.getObjectType = function() {
        return RJSType_QGroupBox.getIdStatic();
      };

      QGroupBox.prototype.getObjectType = function() {
        return RJSType_QGroupBox.getIdStatic();
      };

      QGroupBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGroupBox.getIdStatic()) {
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
        QGroupBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QGroupBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QGroupBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QGroupBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QGroupBox.prototype.children = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QGroupBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QGroupBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QGroupBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QGroupBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QGroupBox.prototype.property = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QGroupBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QGroupBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QGroupBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QGroupBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QGroupBox.prototype.window = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QGroupBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QGroupBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QGroupBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QGroupBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QGroupBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QGroupBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QGroupBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QGroupBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QGroupBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QGroupBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QGroupBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QGroupBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QGroupBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QGroupBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QGroupBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QGroupBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QGroupBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QGroupBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QGroupBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QGroupBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QGroupBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QGroupBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QGroupBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QGroupBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QGroupBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QGroupBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QGroupBox.prototype.update = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QGroupBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QGroupBox.prototype.show = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QGroupBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QGroupBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QGroupBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QGroupBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QGroupBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QGroupBox.prototype.close = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QGroupBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QGroupBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QGroupBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QGroupBox.prototype.move = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QGroupBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QGroupBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QGroupBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QGroupBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QGroupBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QGroupBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QGroupBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QGroupBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QGroupBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QGroupBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QGroupBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QGroupBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QGroupBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QGroupBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QGroupBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QGroupBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QGroupBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QGroupBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QGroupBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QGroupBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QGroupBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QGroupBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QGroupBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QGroupBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QGroupBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QGroupBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QGroupBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QGroupBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QGroupBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QGroupBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QGroupBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QGroupBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QGroupBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QGroupBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QGroupBox.prototype.create = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QGroupBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QGroupBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QGroupBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QGroupBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QGroupBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QGroupBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QGroupBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QGroupBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QGroupBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setTitle = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setTitle");
          
              return this.__PROXY__.setTitle(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isFlat = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isFlat");
          
              return this.__PROXY__.isFlat(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setFlat = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setFlat");
          
              return this.__PROXY__.setFlat(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
        
        // function 
        QGroupBox.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
        
        // function 
        QGroupBox.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
        
        // function 
        QGroupBox.prototype.event = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QGroupBox.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QGroupBox.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QGroupBox.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QGroupBox.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QGroupBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QGroupBox.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QGroupBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QGroupBox.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QGroupBox.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QGroupBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'alignment', {
              get: function() {
                  
                      return this.__PROXY__.alignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'flat', {
              get: function() {
                  
                      return this.__PROXY__.isFlat();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFlat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGroupBox.prototype, 'title', {
              get: function() {
                  
                      return this.__PROXY__.title;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QGroupBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QGroupBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QGroupBox.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QGroupBox.prototype, 'clicked(bool)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QGroupBox.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QGroupBox.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        QGroupBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGroupBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGroupBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGroupBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGroupBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGroupBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      