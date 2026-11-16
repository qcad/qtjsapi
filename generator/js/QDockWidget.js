
      // auto generated
      //var self;

      // class constructor:
      function QDockWidget() {
        

        // should be QDockWidget_BaseJs.call(this, engine):
        //QDockWidget.prototype = new QDockWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QDockWidget.getIdStatic()))) {

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
            qWarning("QDockWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QDockWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QDockWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QDockWidget);
  }

  
  else {
    
        print("QDockWidget(): wrong number / type of arguments");
      
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

      //QDockWidget.prototype = new QDockWidget_BaseJs(engine);
      //QDockWidget.prototype = new QDockWidget_Wrapper(engine);
      QDockWidget.prototype = new Object();


      QDockWidget.prototype.toString = function() {
          //return "QDockWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QDockWidget [JS]";
        };
      QDockWidget.getObjectType = function() {
        return RJSType_QDockWidget.getIdStatic();
      };

      QDockWidget.prototype.getObjectType = function() {
        return RJSType_QDockWidget.getIdStatic();
      };

      QDockWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QDockWidget.getIdStatic()) {
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
      
  // enum: DockWidgetFeature
QDockWidget.DockWidgetClosable = QDockWidget_Wrapper.DockWidgetClosable;
QDockWidget.DockWidgetMovable = QDockWidget_Wrapper.DockWidgetMovable;
QDockWidget.DockWidgetFloatable = QDockWidget_Wrapper.DockWidgetFloatable;
QDockWidget.DockWidgetVerticalTitleBar = QDockWidget_Wrapper.DockWidgetVerticalTitleBar;
QDockWidget.DockWidgetFeatureMask = QDockWidget_Wrapper.DockWidgetFeatureMask;
QDockWidget.NoDockWidgetFeatures = QDockWidget_Wrapper.NoDockWidgetFeatures;
QDockWidget.Reserved = QDockWidget_Wrapper.Reserved;


      // functions:
      
        // function 
        QDockWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QDockWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QDockWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QDockWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QDockWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QDockWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QDockWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QDockWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QDockWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QDockWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QDockWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QDockWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QDockWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QDockWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QDockWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QDockWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QDockWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QDockWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QDockWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QDockWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QDockWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QDockWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QDockWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QDockWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QDockWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QDockWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QDockWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QDockWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QDockWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QDockWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QDockWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QDockWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QDockWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QDockWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QDockWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QDockWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QDockWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QDockWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QDockWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QDockWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QDockWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QDockWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QDockWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QDockWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QDockWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QDockWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QDockWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QDockWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QDockWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QDockWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QDockWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QDockWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QDockWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QDockWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QDockWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QDockWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QDockWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QDockWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QDockWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QDockWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QDockWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QDockWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QDockWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QDockWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QDockWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QDockWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QDockWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QDockWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QDockWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QDockWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QDockWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QDockWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QDockWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QDockWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QDockWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QDockWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QDockWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QDockWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QDockWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QDockWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QDockWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QDockWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QDockWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QDockWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QDockWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QDockWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QDockWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QDockWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QDockWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QDockWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QDockWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QDockWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QDockWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QDockWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QDockWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QDockWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QDockWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QDockWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QDockWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QDockWidget.prototype.widget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setWidget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFeatures = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFeatures");
          
              return this.__PROXY__.setFeatures(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setFloating = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setFloating");
          
              return this.__PROXY__.setFloating(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isFloating = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isFloating");
          
              return this.__PROXY__.isFloating(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setAllowedAreas = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setAllowedAreas");
          
              return this.__PROXY__.setAllowedAreas(...args);
            
        };
        
        // function 
        QDockWidget.prototype.setTitleBarWidget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.setTitleBarWidget");
          
              return this.__PROXY__.setTitleBarWidget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.titleBarWidget = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.titleBarWidget");
          
              return this.__PROXY__.titleBarWidget(...args);
            
        };
        
        // function 
        QDockWidget.prototype.isAreaAllowed = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.isAreaAllowed");
          
              return this.__PROXY__.isAreaAllowed(...args);
            
        };
        
        // function 
        QDockWidget.prototype.toggleViewAction = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.toggleViewAction");
          
              return this.__PROXY__.toggleViewAction(...args);
            
        };
        
        // function 
        QDockWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QDockWidget.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QDockWidget.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QDockWidget.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QDockWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QDockWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QDockWidget.prototype.resizeEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QDockWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'features', {
              get: function() {
                  
                      return this.__PROXY__.features;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFeatures(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'allowedAreas', {
              get: function() {
                  
                      return this.__PROXY__.allowedAreas;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAllowedAreas(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QDockWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QDockWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QDockWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QDockWidget.prototype, 'featuresChanged', {
            get: function() { return this.__PROXY__.featuresChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDockWidget.prototype, 'featuresChanged(QDockWidget::DockWidgetFeatures)', {
              get: function() { return this.__PROXY__.featuresChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDockWidget.prototype, 'topLevelChanged', {
            get: function() { return this.__PROXY__.topLevelChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDockWidget.prototype, 'topLevelChanged(bool)', {
              get: function() { return this.__PROXY__.topLevelChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDockWidget.prototype, 'allowedAreasChanged', {
            get: function() { return this.__PROXY__.allowedAreasChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDockWidget.prototype, 'allowedAreasChanged(Qt::DockWidgetAreas)', {
              get: function() { return this.__PROXY__.allowedAreasChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDockWidget.prototype, 'visibilityChanged', {
            get: function() { return this.__PROXY__.visibilityChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDockWidget.prototype, 'visibilityChanged(bool)', {
              get: function() { return this.__PROXY__.visibilityChanged; },
              configurable: true
          });
        
        Object.defineProperty(QDockWidget.prototype, 'dockLocationChanged', {
            get: function() { return this.__PROXY__.dockLocationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QDockWidget.prototype, 'dockLocationChanged(Qt::DockWidgetArea)', {
              get: function() { return this.__PROXY__.dockLocationChanged; },
              configurable: true
          });
        QDockWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QDockWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QDockWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QDockWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QDockWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QDockWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      