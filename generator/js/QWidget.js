
      // auto generated
      //var self;

      // class constructor:
      function QWidget() {
        

        // should be QWidget_BaseJs.call(this, engine):
        //QWidget.prototype = new QWidget_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QWidget.getIdStatic()))) {

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
            qWarning("QWidget.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QWidget_Wrapper(
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

      

        //copyProperties(this, wrapper, QWidget);
  }

  
  else {
    
        print("QWidget(): wrong number / type of arguments");
      
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

      //QWidget.prototype = new QWidget_BaseJs(engine);
      //QWidget.prototype = new QWidget_Wrapper(engine);
      QWidget.prototype = new Object();


      QWidget.prototype.toString = function() {
          //return "QWidget [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QWidget [JS]";
        };
      QWidget.getObjectType = function() {
        return RJSType_QWidget.getIdStatic();
      };

      QWidget.prototype.getObjectType = function() {
        return RJSType_QWidget.getIdStatic();
      };

      QWidget.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QWidget.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QPaintDevice.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QWidget.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QWidget.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QWidget.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QWidget.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QWidget.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QWidget.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QWidget.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QWidget.prototype.findChild = function(...args) 
          
        {
          //print("JS: QWidget.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QWidget.prototype.children = function(...args) 
          
        {
          //print("JS: QWidget.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QWidget.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QWidget.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QWidget.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QWidget.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QWidget.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QWidget.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QWidget.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QWidget.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QWidget.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QWidget.prototype.property = function(...args) 
          
        {
          //print("JS: QWidget.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QWidget.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QWidget.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QWidget.prototype.parent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QWidget.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QWidget.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QWidget.prototype.paintingActive = function(...args) 
          
        {
          //print("JS: QWidget.prototype.paintingActive");
          
              return this.__PROXY__.paintingActive(...args);
            
        };
    
        // function 
        QWidget.prototype.paintEngine = function(...args) 
          
        {
          //print("JS: QWidget.prototype.paintEngine");
          
              return this.__PROXY__.paintEngine(...args);
            
        };
    
        // function 
        QWidget.prototype.widthMM = function(...args) 
          
        {
          //print("JS: QWidget.prototype.widthMM");
          
              return this.__PROXY__.widthMM(...args);
            
        };
    
        // function 
        QWidget.prototype.heightMM = function(...args) 
          
        {
          //print("JS: QWidget.prototype.heightMM");
          
              return this.__PROXY__.heightMM(...args);
            
        };
    
        // function 
        QWidget.prototype.logicalDpiX = function(...args) 
          
        {
          //print("JS: QWidget.prototype.logicalDpiX");
          
              return this.__PROXY__.logicalDpiX(...args);
            
        };
    
        // function 
        QWidget.prototype.logicalDpiY = function(...args) 
          
        {
          //print("JS: QWidget.prototype.logicalDpiY");
          
              return this.__PROXY__.logicalDpiY(...args);
            
        };
    
        // function 
        QWidget.prototype.physicalDpiX = function(...args) 
          
        {
          //print("JS: QWidget.prototype.physicalDpiX");
          
              return this.__PROXY__.physicalDpiX(...args);
            
        };
    
        // function 
        QWidget.prototype.physicalDpiY = function(...args) 
          
        {
          //print("JS: QWidget.prototype.physicalDpiY");
          
              return this.__PROXY__.physicalDpiY(...args);
            
        };
    
        // function 
        QWidget.prototype.devicePixelRatio = function(...args) 
          
        {
          //print("JS: QWidget.prototype.devicePixelRatio");
          
              return this.__PROXY__.devicePixelRatio(...args);
            
        };
    
        // function 
        QWidget.prototype.devicePixelRatioF = function(...args) 
          
        {
          //print("JS: QWidget.prototype.devicePixelRatioF");
          
              return this.__PROXY__.devicePixelRatioF(...args);
            
        };
    
        // function 
        QWidget.prototype.colorCount = function(...args) 
          
        {
          //print("JS: QWidget.prototype.colorCount");
          
              return this.__PROXY__.colorCount(...args);
            
        };
    
        // function 
        QWidget.prototype.depth = function(...args) 
          
        {
          //print("JS: QWidget.prototype.depth");
          
              return this.__PROXY__.depth(...args);
            
        };
    
        // function 
        QWidget.prototype.qt_paint_device_metric = function(...args) 
          
        {
          //print("JS: QWidget.prototype.qt_paint_device_metric");
          
              return this.__PROXY__.qt_paint_device_metric(...args);
            
        };
    
        // function 
        QWidget.prototype.devType = function(...args) 
          
        {
          //print("JS: QWidget.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QWidget.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QWidget.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QWidget.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QWidget.prototype.isModal = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QWidget.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QWidget.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QWidget.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QWidget.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QWidget.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QWidget.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QWidget.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QWidget.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QWidget.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QWidget.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QWidget.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QWidget.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QWidget.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QWidget.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QWidget.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QWidget.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QWidget.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QWidget.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QWidget.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QWidget.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QWidget.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QWidget.prototype.window = function(...args) 
          
        {
          //print("JS: QWidget.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QWidget.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QWidget.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QWidget.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QWidget.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QWidget.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QWidget.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QWidget.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QWidget.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QWidget.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QWidget.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QWidget.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QWidget.prototype.setFont = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QWidget.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QWidget.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QWidget.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QWidget.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QWidget.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QWidget.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QWidget.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QWidget.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QWidget.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QWidget.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QWidget.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QWidget.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QWidget.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QWidget.prototype.setMask = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QWidget.prototype.mask = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QWidget.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QWidget.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QWidget.prototype.grab = function(...args) 
          
        {
          //print("JS: QWidget.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QWidget.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QWidget.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QWidget.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QWidget.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QWidget.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QWidget.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QWidget.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QWidget.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QWidget.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QWidget.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QWidget.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QWidget.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QWidget.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QWidget.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QWidget.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QWidget.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QWidget.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QWidget.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QWidget.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QWidget.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QWidget.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QWidget.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QWidget.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QWidget.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QWidget.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QWidget.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QWidget.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QWidget.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QWidget.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QWidget.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QWidget.prototype.setTabOrder = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setTabOrder");
          
              return this.__PROXY__.setTabOrder(...args);
            
        };
    
        // function 
        QWidget.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QWidget.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QWidget.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QWidget.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QWidget.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QWidget.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QWidget.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QWidget.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QWidget.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QWidget.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QWidget.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QWidget.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QWidget.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QWidget.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QWidget.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QWidget.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QWidget.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QWidget.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QWidget.prototype.mouseGrabber = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mouseGrabber");
          
              return this.__PROXY__.mouseGrabber(...args);
            
        };
    
        // function 
        QWidget.prototype.keyboardGrabber = function(...args) 
          
        {
          //print("JS: QWidget.prototype.keyboardGrabber");
          
              return this.__PROXY__.keyboardGrabber(...args);
            
        };
    
        // function 
        QWidget.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QWidget.prototype.update = function(...args) 
          
        {
          //print("JS: QWidget.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QWidget.prototype.repaint = function(...args) 
          
        {
          //print("JS: QWidget.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QWidget.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QWidget.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QWidget.prototype.show = function(...args) 
          
        {
          //print("JS: QWidget.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QWidget.prototype.hide = function(...args) 
          
        {
          //print("JS: QWidget.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QWidget.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QWidget.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QWidget.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QWidget.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QWidget.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QWidget.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QWidget.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QWidget.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QWidget.prototype.close = function(...args) 
          
        {
          //print("JS: QWidget.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QWidget.prototype.raise = function(...args) 
          
        {
          //print("JS: QWidget.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QWidget.prototype.lower = function(...args) 
          
        {
          //print("JS: QWidget.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QWidget.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QWidget.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QWidget.prototype.move = function(...args) 
          
        {
          //print("JS: QWidget.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QWidget.prototype.resize = function(...args) 
          
        {
          //print("JS: QWidget.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QWidget.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QWidget.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QWidget.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QWidget.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QWidget.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QWidget.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QWidget.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QWidget.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QWidget.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QWidget.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QWidget.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QWidget.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QWidget.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QWidget.prototype.windowState = function(...args) 
          
        {
          //print("JS: QWidget.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QWidget.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QWidget.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QWidget.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QWidget.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QWidget.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QWidget.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QWidget.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QWidget.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QWidget.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QWidget.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QWidget.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QWidget.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QWidget.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QWidget.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QWidget.prototype.layout = function(...args) 
          
        {
          //print("JS: QWidget.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QWidget.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QWidget.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QWidget.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QWidget.prototype.setParent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QWidget.prototype.scroll = function(...args) 
          
        {
          //print("JS: QWidget.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QWidget.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QWidget.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QWidget.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QWidget.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QWidget.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QWidget.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QWidget.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QWidget.prototype.addAction = function(...args) 
          
        {
          //print("JS: QWidget.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QWidget.prototype.addActions = function(...args) 
          
        {
          //print("JS: QWidget.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QWidget.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QWidget.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QWidget.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QWidget.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QWidget.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QWidget.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QWidget.prototype.actions = function(...args) 
          
        {
          //print("JS: QWidget.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QWidget.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QWidget.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QWidget.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QWidget.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QWidget.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QWidget.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QWidget.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QWidget.prototype.windowType = function(...args) 
          
        {
          //print("JS: QWidget.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QWidget.prototype.childAt = function(...args) 
          
        {
          //print("JS: QWidget.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QWidget.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QWidget.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QWidget.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QWidget.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QWidget.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QWidget.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QWidget.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QWidget.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QWidget.prototype.event = function(...args) 
          
        {
          //print("JS: QWidget.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QWidget.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QWidget.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QWidget.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QWidget.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QWidget.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QWidget.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QWidget.prototype.actionEvent = function() 
        
      {
        //print("JS: QWidget.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QWidget);
  }

  
  else {
    
        print("QWidget.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QWidget.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.metric = function(...args) 
          
        {
          //print("JS: QWidget.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QWidget.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QWidget.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QWidget.prototype.redirected = function(...args) 
          
        {
          //print("JS: QWidget.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QWidget.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QWidget.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QWidget.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QWidget.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QWidget.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QWidget.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QWidget.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QWidget.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QWidget.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QWidget.prototype.create = function(...args) 
          
        {
          //print("JS: QWidget.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QWidget.prototype.destroy = function(...args) 
          
        {
          //print("JS: QWidget.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QWidget.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QWidget.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QWidget.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QWidget.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QWidget.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QWidget.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QWidget.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QWidget.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QWidget.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QWidget.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QWidget.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QWidget.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QWidget.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QWidget.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QWidget.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QWidget.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QWidget.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QWidget.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    

      // static functions:
      

        // static function 
        QWidget.setTabOrder = function() 
          
        {
          //print("JS: QWidget.setTabOrder");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QWidget_WrapperSingletonInstance.setTabOrder(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QWidget);
  }

  
  else {
    
        print("QWidget.setTabOrder(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QWidget.mouseGrabber = function() 
          
        {
          //print("JS: QWidget.mouseGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QWidget_WrapperSingletonInstance.mouseGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QWidget);
  }

  
  else {
    
        print("QWidget.mouseGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QWidget.keyboardGrabber = function() 
          
        {
          //print("JS: QWidget.keyboardGrabber");
          
      if (arguments.length == 0) {
    
                // calling static wrapper:
                return QWidget_WrapperSingletonInstance.keyboardGrabber(
                  
                );
              

        //copyProperties(this, wrapper, QWidget);
  }

  
  else {
    
        print("QWidget.keyboardGrabber(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      
          Object.defineProperty(QWidget.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QWidget.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QWidget.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QWidget.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        QWidget.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QWidget.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QWidget.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QWidget.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QWidget.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QWidget.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      