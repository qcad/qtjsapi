
      // auto generated
      //var self;

      // class constructor:
      function QCheckBox() {
        

        // should be QCheckBox_BaseJs.call(this, engine):
        //QCheckBox.prototype = new QCheckBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QCheckBox.getIdStatic()))) {

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
            qWarning("QCheckBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QCheckBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QCheckBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QCheckBox);
  }

  
  else {
    
        print("QCheckBox(): wrong number / type of arguments");
      
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

      //QCheckBox.prototype = new QCheckBox_BaseJs(engine);
      //QCheckBox.prototype = new QCheckBox_Wrapper(engine);
      QCheckBox.prototype = new Object();


      QCheckBox.prototype.toString = function() {
          //return "QCheckBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCheckBox [JS]";
        };
      QCheckBox.getObjectType = function() {
        return RJSType_QCheckBox.getIdStatic();
      };

      QCheckBox.prototype.getObjectType = function() {
        return RJSType_QCheckBox.getIdStatic();
      };

      QCheckBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QCheckBox.getIdStatic()) {
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
        QCheckBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QCheckBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QCheckBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QCheckBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QCheckBox.prototype.children = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QCheckBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QCheckBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QCheckBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QCheckBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QCheckBox.prototype.property = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QCheckBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QCheckBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QCheckBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QCheckBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QCheckBox.prototype.window = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QCheckBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QCheckBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QCheckBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QCheckBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QCheckBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QCheckBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QCheckBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QCheckBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QCheckBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QCheckBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QCheckBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QCheckBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QCheckBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QCheckBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QCheckBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QCheckBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QCheckBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QCheckBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QCheckBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QCheckBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QCheckBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QCheckBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QCheckBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QCheckBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QCheckBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QCheckBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QCheckBox.prototype.update = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QCheckBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QCheckBox.prototype.show = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QCheckBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QCheckBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QCheckBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QCheckBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QCheckBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QCheckBox.prototype.close = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QCheckBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QCheckBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QCheckBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QCheckBox.prototype.move = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QCheckBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QCheckBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QCheckBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QCheckBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QCheckBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QCheckBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QCheckBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QCheckBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QCheckBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QCheckBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QCheckBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QCheckBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QCheckBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QCheckBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QCheckBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QCheckBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QCheckBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QCheckBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QCheckBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QCheckBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QCheckBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QCheckBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QCheckBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QCheckBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QCheckBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QCheckBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QCheckBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QCheckBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QCheckBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QCheckBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QCheckBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QCheckBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QCheckBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QCheckBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QCheckBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QCheckBox.prototype.create = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QCheckBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QCheckBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QCheckBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QCheckBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QCheckBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QCheckBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QCheckBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QCheckBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QCheckBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setText = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setDown = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setDown");
          
              return this.__PROXY__.setDown(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isDown = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isDown");
          
              return this.__PROXY__.isDown(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAutoRepeatDelay = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAutoRepeatDelay");
          
              return this.__PROXY__.setAutoRepeatDelay(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAutoRepeatInterval = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAutoRepeatInterval");
          
              return this.__PROXY__.setAutoRepeatInterval(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setAutoExclusive = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setAutoExclusive");
          
              return this.__PROXY__.setAutoExclusive(...args);
            
        };
    
        // function 
        QCheckBox.prototype.group = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.group");
          
              return this.__PROXY__.group(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QCheckBox.prototype.animateClick = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.animateClick");
          
              return this.__PROXY__.animateClick(...args);
            
        };
    
        // function 
        QCheckBox.prototype.click = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.click");
          
              return this.__PROXY__.click(...args);
            
        };
    
        // function 
        QCheckBox.prototype.toggle = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setTristate = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setTristate");
          
              return this.__PROXY__.setTristate(...args);
            
        };
    
        // function 
        QCheckBox.prototype.isTristate = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.isTristate");
          
              return this.__PROXY__.isTristate(...args);
            
        };
    
        // function 
        QCheckBox.prototype.checkState = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.checkState");
          
              return this.__PROXY__.checkState(...args);
            
        };
    
        // function 
        QCheckBox.prototype.setCheckState = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.setCheckState");
          
              return this.__PROXY__.setCheckState(...args);
            
        };
    
        // function 
        QCheckBox.prototype.event = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QCheckBox.prototype.hitButton = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.hitButton");
          
              return this.__PROXY__.hitButton(...args);
            
        };
    
        // function 
        QCheckBox.prototype.checkStateSet = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.checkStateSet");
          
              return this.__PROXY__.checkStateSet(...args);
            
        };
    
        // function 
        QCheckBox.prototype.nextCheckState = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.nextCheckState");
          
              return this.__PROXY__.nextCheckState(...args);
            
        };
    
        // function 
        QCheckBox.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QCheckBox.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QCheckBox.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QCheckBox.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QCheckBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'autoExclusive', {
              get: function() {
                  
                      return this.__PROXY__.autoExclusive;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoExclusive(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'autoRepeatDelay', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatDelay;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatDelay(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'autoRepeatInterval', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'down', {
              get: function() {
                  
                      return this.__PROXY__.isDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QCheckBox.prototype, 'tristate', {
              get: function() {
                  
                      return this.__PROXY__.isTristate();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTristate(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QCheckBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QCheckBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QCheckBox.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
        Object.defineProperty(QCheckBox.prototype, 'released', {
            get: function() { return this.__PROXY__.released; },
            configurable: true
        });
        
        Object.defineProperty(QCheckBox.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QCheckBox.prototype, 'clicked(bool)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QCheckBox.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QCheckBox.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        
        Object.defineProperty(QCheckBox.prototype, 'stateChanged', {
            get: function() { return this.__PROXY__.stateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QCheckBox.prototype, 'stateChanged(int)', {
              get: function() { return this.__PROXY__.stateChanged; },
              configurable: true
          });
        QCheckBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QCheckBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QCheckBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QCheckBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCheckBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QCheckBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      