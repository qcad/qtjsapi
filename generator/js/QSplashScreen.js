
      // auto generated
      //var self;

      // class constructor:
      function QSplashScreen() {
        

        // should be QSplashScreen_BaseJs.call(this, engine):
        //QSplashScreen.prototype = new QSplashScreen_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSplashScreen.getIdStatic()))) {

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
            qWarning("QSplashScreen.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 2 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QSplashScreen_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else 
  
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QSplashScreen_Wrapper(
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

      

        //copyProperties(this, wrapper, QSplashScreen);
  }

  
  else {
    
        print("QSplashScreen(): wrong number / type of arguments");
      
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

      //QSplashScreen.prototype = new QSplashScreen_BaseJs(engine);
      //QSplashScreen.prototype = new QSplashScreen_Wrapper(engine);
      QSplashScreen.prototype = new Object();


      QSplashScreen.prototype.toString = function() {
          //return "QSplashScreen [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSplashScreen [JS]";
        };
      QSplashScreen.getObjectType = function() {
        return RJSType_QSplashScreen.getIdStatic();
      };

      QSplashScreen.prototype.getObjectType = function() {
        return RJSType_QSplashScreen.getIdStatic();
      };

      QSplashScreen.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSplashScreen.getIdStatic()) {
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
        QSplashScreen.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.findChild = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.children = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.property = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.parent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.devType = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isModal = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.window = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setFont = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setMask = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mask = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.grab = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.update = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.show = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.hide = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.close = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.raise = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.lower = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.move = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.resize = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.windowState = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.layout = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.scroll = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.addAction = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.addActions = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.actions = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.windowType = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.childAt = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.metric = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.redirected = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.create = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.destroy = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.setPixmap = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.setPixmap");
          
              return this.__PROXY__.setPixmap(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.pixmap = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.pixmap");
          
              return this.__PROXY__.pixmap(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.finish = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.finish");
          
              return this.__PROXY__.finish(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.repaint = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.message = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.message");
          
              return this.__PROXY__.message(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.showMessage = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.showMessage");
          
              return this.__PROXY__.showMessage(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.clearMessage = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.clearMessage");
          
              return this.__PROXY__.clearMessage(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.event = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.drawContents = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.drawContents");
          
              return this.__PROXY__.drawContents(...args);
            
        };
    
        // function 
        QSplashScreen.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QSplashScreen.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QSplashScreen.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSplashScreen.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QSplashScreen.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QSplashScreen.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QSplashScreen.prototype, 'messageChanged', {
            get: function() { return this.__PROXY__.messageChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSplashScreen.prototype, 'messageChanged(QString)', {
              get: function() { return this.__PROXY__.messageChanged; },
              configurable: true
          });
        QSplashScreen.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSplashScreen.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSplashScreen.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSplashScreen.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSplashScreen.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSplashScreen.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      