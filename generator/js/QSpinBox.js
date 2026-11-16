
      // auto generated
      //var self;

      // class constructor:
      function QSpinBox() {
        

        // should be QSpinBox_BaseJs.call(this, engine):
        //QSpinBox.prototype = new QSpinBox_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QSpinBox.getIdStatic()))) {

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
            qWarning("QSpinBox.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QSpinBox_Wrapper(
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

      

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox(): wrong number / type of arguments");
      
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

      //QSpinBox.prototype = new QSpinBox_BaseJs(engine);
      //QSpinBox.prototype = new QSpinBox_Wrapper(engine);
      QSpinBox.prototype = new Object();


      QSpinBox.prototype.toString = function() {
          //return "QSpinBox [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QSpinBox [JS]";
        };
      QSpinBox.getObjectType = function() {
        return RJSType_QSpinBox.getIdStatic();
      };

      QSpinBox.prototype.getObjectType = function() {
        return RJSType_QSpinBox.getIdStatic();
      };

      QSpinBox.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QSpinBox.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QAbstractSpinBox.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QSpinBox.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
        QSpinBox.prototype.eventFilter.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QSpinBox.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QSpinBox.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QSpinBox.prototype.findChild = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QSpinBox.prototype.children = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QSpinBox.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QSpinBox.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QSpinBox.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QSpinBox.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QSpinBox.prototype.property = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QSpinBox.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QSpinBox.prototype.parent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QSpinBox.prototype.devType = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QSpinBox.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isModal = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QSpinBox.prototype.window = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QSpinBox.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QSpinBox.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QSpinBox.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QSpinBox.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setFont = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QSpinBox.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QSpinBox.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QSpinBox.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QSpinBox.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QSpinBox.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMask = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mask = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QSpinBox.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QSpinBox.prototype.grab = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QSpinBox.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QSpinBox.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QSpinBox.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QSpinBox.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QSpinBox.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QSpinBox.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QSpinBox.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QSpinBox.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QSpinBox.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QSpinBox.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QSpinBox.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QSpinBox.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QSpinBox.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QSpinBox.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QSpinBox.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QSpinBox.prototype.update = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QSpinBox.prototype.repaint = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QSpinBox.prototype.show = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QSpinBox.prototype.hide = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QSpinBox.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QSpinBox.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QSpinBox.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QSpinBox.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QSpinBox.prototype.close = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QSpinBox.prototype.raise = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QSpinBox.prototype.lower = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QSpinBox.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QSpinBox.prototype.move = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QSpinBox.prototype.resize = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QSpinBox.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QSpinBox.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QSpinBox.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QSpinBox.prototype.windowState = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QSpinBox.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QSpinBox.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QSpinBox.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QSpinBox.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QSpinBox.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QSpinBox.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QSpinBox.prototype.layout = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QSpinBox.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setParent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.scroll = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QSpinBox.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QSpinBox.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QSpinBox.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QSpinBox.prototype.addAction = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QSpinBox.prototype.addActions = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QSpinBox.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QSpinBox.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QSpinBox.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QSpinBox.prototype.actions = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QSpinBox.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QSpinBox.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QSpinBox.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QSpinBox.prototype.windowType = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QSpinBox.prototype.childAt = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QSpinBox.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QSpinBox.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QSpinBox.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QSpinBox.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
      // function 
      QSpinBox.prototype.actionEvent = function() 
        
      {
        //print("JS: QSpinBox.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QSpinBox);
  }

  
  else {
    
        print("QSpinBox.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QSpinBox.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.metric = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QSpinBox.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QSpinBox.prototype.redirected = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QSpinBox.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QSpinBox.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QSpinBox.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QSpinBox.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QSpinBox.prototype.create = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QSpinBox.prototype.destroy = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QSpinBox.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QSpinBox.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QSpinBox.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QSpinBox.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QSpinBox.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QSpinBox.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QSpinBox.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QSpinBox.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QSpinBox.prototype.stepUp = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.stepUp");
          
              return this.__PROXY__.stepUp(...args);
            
        };
        
        // function 
        QSpinBox.prototype.stepDown = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.stepDown");
          
              return this.__PROXY__.stepDown(...args);
            
        };
        
        // function 
        QSpinBox.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
        
        // function 
        QSpinBox.prototype.clear = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QSpinBox.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QSpinBox.prototype.resizeEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
        QSpinBox.prototype.keyPressEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEventSuper(...args);
            
        };
        QSpinBox.prototype.keyReleaseEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
        QSpinBox.prototype.wheelEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEventSuper(...args);
            
        };
        QSpinBox.prototype.focusInEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEventSuper(...args);
            
        };
        QSpinBox.prototype.focusOutEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEventSuper(...args);
            
        };
        QSpinBox.prototype.contextMenuEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.changeEvent");
          
              return this.__PROXY__.changeEventSuper(...args);
            
        };
        QSpinBox.prototype.changeEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
        QSpinBox.prototype.mousePressEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
        QSpinBox.prototype.mouseReleaseEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QSpinBox.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QSpinBox.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QSpinBox.prototype.setPrefix = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setPrefix");
          
              return this.__PROXY__.setPrefix(...args);
            
        };
        
        // function 
        QSpinBox.prototype.suffix = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.suffix");
          
              return this.__PROXY__.suffix(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setSuffix = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setSuffix");
          
              return this.__PROXY__.setSuffix(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setSingleStep = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setSingleStep");
          
              return this.__PROXY__.setSingleStep(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMinimum = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMinimum");
          
              return this.__PROXY__.setMinimum(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setMaximum = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setMaximum");
          
              return this.__PROXY__.setMaximum(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setRange = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setRange");
          
              return this.__PROXY__.setRange(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setStepType = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setStepType");
          
              return this.__PROXY__.setStepType(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setDisplayIntegerBase = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setDisplayIntegerBase");
          
              return this.__PROXY__.setDisplayIntegerBase(...args);
            
        };
        
        // function 
        QSpinBox.prototype.event = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QSpinBox.prototype.validate = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.validate");
          
              return this.__PROXY__.validate(...args);
            
        };
        
        // function 
        QSpinBox.prototype.valueFromText = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.valueFromText");
          
              return this.__PROXY__.valueFromText(...args);
            
        };
        
        // function 
        QSpinBox.prototype.textFromValue = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.textFromValue");
          
              return this.__PROXY__.textFromValue(...args);
            
        };
        
        // function 
        QSpinBox.prototype.fixup = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.fixup");
          
              return this.__PROXY__.fixup(...args);
            
        };
        
        // function 
        QSpinBox.prototype.setValue = function(...args) 
          
        {
          //print("JS: QSpinBox.prototype.setValue");
          
              return this.__PROXY__.setValue(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QSpinBox.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'prefix', {
              get: function() {
                  
                      return this.__PROXY__.prefix;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPrefix(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'cleanText', {
              get: function() {
                  
                      return this.__PROXY__.cleanText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'minimum', {
              get: function() {
                  
                      return this.__PROXY__.minimum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'maximum', {
              get: function() {
                  
                      return this.__PROXY__.maximum;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximum(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'singleStep', {
              get: function() {
                  
                      return this.__PROXY__.singleStep;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSingleStep(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'stepType', {
              get: function() {
                  
                      return this.__PROXY__.stepType;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStepType(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'value', {
              get: function() {
                  
                      return this.__PROXY__.value;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setValue(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QSpinBox.prototype, 'displayIntegerBase', {
              get: function() {
                  
                      return this.__PROXY__.displayIntegerBase;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDisplayIntegerBase(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QSpinBox.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QSpinBox.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QSpinBox.prototype, 'valueChanged', {
            get: function() { return this.__PROXY__.valueChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSpinBox.prototype, 'valueChanged(int)', {
              get: function() { return this.__PROXY__.valueChanged; },
              configurable: true
          });
        
        Object.defineProperty(QSpinBox.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
          Object.defineProperty(QSpinBox.prototype, 'textChanged(QString)', {
              get: function() { return this.__PROXY__.textChanged; },
              configurable: true
          });
        QSpinBox.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QSpinBox.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QSpinBox.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QSpinBox.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QSpinBox.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QSpinBox.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      