
      // auto generated
      //var self;

      // class constructor:
      function QMdiSubWindow() {
        

        // should be QMdiSubWindow_BaseJs.call(this, engine):
        //QMdiSubWindow.prototype = new QMdiSubWindow_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QMdiSubWindow.getIdStatic()))) {

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
            qWarning("QMdiSubWindow.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QMdiSubWindow_Wrapper(
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

      

        //copyProperties(this, wrapper, QMdiSubWindow);
  }

  
  else {
    
        print("QMdiSubWindow(): wrong number / type of arguments");
      
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

      //QMdiSubWindow.prototype = new QMdiSubWindow_BaseJs(engine);
      //QMdiSubWindow.prototype = new QMdiSubWindow_Wrapper(engine);
      QMdiSubWindow.prototype = new Object();


      QMdiSubWindow.prototype.toString = function() {
          //return "QMdiSubWindow [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QMdiSubWindow [JS]";
        };
      QMdiSubWindow.getObjectType = function() {
        return RJSType_QMdiSubWindow.getIdStatic();
      };

      QMdiSubWindow.prototype.getObjectType = function() {
        return RJSType_QMdiSubWindow.getIdStatic();
      };

      QMdiSubWindow.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QMdiSubWindow.getIdStatic()) {
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
        QMdiSubWindow.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.findChild = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.children = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.property = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.parent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.devType = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isModal = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.window = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setFont = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setMask = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mask = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.grab = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.update = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.repaint = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.show = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.hide = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.close = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.raise = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.lower = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.move = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.resize = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.windowState = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.layout = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setParent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.scroll = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.addAction = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.addActions = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.actions = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.windowType = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.childAt = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.event = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.metric = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.redirected = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.create = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.destroy = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setWidget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.widget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.maximizedButtonsWidget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.maximizedButtonsWidget");
          
              return this.__PROXY__.maximizedButtonsWidget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.maximizedSystemMenuIconWidget = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.maximizedSystemMenuIconWidget");
          
              return this.__PROXY__.maximizedSystemMenuIconWidget(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.isShaded = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.isShaded");
          
              return this.__PROXY__.isShaded(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setOption = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setOption");
          
              return this.__PROXY__.setOption(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.testOption = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.testOption");
          
              return this.__PROXY__.testOption(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setKeyboardSingleStep = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setKeyboardSingleStep");
          
              return this.__PROXY__.setKeyboardSingleStep(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.keyboardSingleStep = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.keyboardSingleStep");
          
              return this.__PROXY__.keyboardSingleStep(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setKeyboardPageStep = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setKeyboardPageStep");
          
              return this.__PROXY__.setKeyboardPageStep(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.keyboardPageStep = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.keyboardPageStep");
          
              return this.__PROXY__.keyboardPageStep(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.setSystemMenu = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.setSystemMenu");
          
              return this.__PROXY__.setSystemMenu(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.systemMenu = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.systemMenu");
          
              return this.__PROXY__.systemMenu(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mdiArea = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mdiArea");
          
              return this.__PROXY__.mdiArea(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.showSystemMenu = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.showSystemMenu");
          
              return this.__PROXY__.showSystemMenu(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.showShaded = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.showShaded");
          
              return this.__PROXY__.showShaded(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QMdiSubWindow.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QMdiSubWindow.prototype.eventFilter");
          
              return this.__PROXY__.eventFilter(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QMdiSubWindow.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QMdiSubWindow.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QMdiSubWindow.prototype, 'windowStateChanged', {
            get: function() { return this.__PROXY__.windowStateChanged; },
            configurable: true
        });
        
          Object.defineProperty(QMdiSubWindow.prototype, 'windowStateChanged(Qt::WindowStates,Qt::WindowStates)', {
              get: function() { return this.__PROXY__.windowStateChanged; },
              configurable: true
          });
        
        Object.defineProperty(QMdiSubWindow.prototype, 'aboutToActivate', {
            get: function() { return this.__PROXY__.aboutToActivate; },
            configurable: true
        });
        QMdiSubWindow.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QMdiSubWindow.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QMdiSubWindow.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QMdiSubWindow.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QMdiSubWindow.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QMdiSubWindow.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      