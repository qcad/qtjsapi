
      // auto generated
      //var self;

      // class constructor:
      function QAbstractSpinBox() {
        

        // should be QAbstractSpinBox_BaseJs.call(this, engine):
        //QAbstractSpinBox.prototype = new QAbstractSpinBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QAbstractSpinBox.getIdStatic()))) {

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
            qWarning("QAbstractSpinBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
              qWarning("QAbstractSpinBox.js: No constructor found for class QAbstractSpinBox");
            
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

      //QAbstractSpinBox.prototype = new QAbstractSpinBox_BaseJs(engine);
      //QAbstractSpinBox.prototype = new QAbstractSpinBox_Wrapper(engine);
      QAbstractSpinBox.prototype = new Object();


      QAbstractSpinBox.prototype.toString = function() {
          //return "QAbstractSpinBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QAbstractSpinBox [JS]";
        };
      QAbstractSpinBox.getObjectType = function() {
        return RJSType_QAbstractSpinBox.getIdStatic();
      };

      QAbstractSpinBox.prototype.getObjectType = function() {
        return RJSType_QAbstractSpinBox.getIdStatic();
      };

      QAbstractSpinBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QAbstractSpinBox.getIdStatic()) {
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
        QAbstractSpinBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.children = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.property = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.window = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.update = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.show = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.close = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.move = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.event = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.create = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.stepUp = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.stepUp");
          
              return this.__PROXY__.stepUp(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.stepDown = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.stepDown");
          
              return this.__PROXY__.stepDown(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.clear = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QAbstractSpinBox.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QAbstractSpinBox.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QAbstractSpinBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QAbstractSpinBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QAbstractSpinBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        QAbstractSpinBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QAbstractSpinBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QAbstractSpinBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QAbstractSpinBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QAbstractSpinBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QAbstractSpinBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      