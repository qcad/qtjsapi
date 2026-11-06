
      // auto generated
      //var self;

      // class constructor:
      function QRadioButton() {
        

        // should be QRadioButton_BaseJs.call(this, engine):
        //QRadioButton.prototype = new QRadioButton_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QRadioButton.getIdStatic()))) {

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
            qWarning("QRadioButton.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QRadioButton_Wrapper(
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

      

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QRadioButton_Wrapper(
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

      

        //copyProperties(this, wrapper, QRadioButton);
  }

  
  else {
    
        print("QRadioButton(): wrong number / type of arguments");
      
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

      //QRadioButton.prototype = new QRadioButton_BaseJs(engine);
      //QRadioButton.prototype = new QRadioButton_Wrapper(engine);
      QRadioButton.prototype = new Object();


      QRadioButton.prototype.toString = function() {
          //return "QRadioButton [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QRadioButton [JS]";
        };
      QRadioButton.getObjectType = function() {
        return RJSType_QRadioButton.getIdStatic();
      };

      QRadioButton.prototype.getObjectType = function() {
        return RJSType_QRadioButton.getIdStatic();
      };

      QRadioButton.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QRadioButton.getIdStatic()) {
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
        QRadioButton.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QRadioButton.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QRadioButton.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QRadioButton.prototype.findChild = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QRadioButton.prototype.children = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QRadioButton.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QRadioButton.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QRadioButton.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QRadioButton.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QRadioButton.prototype.property = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QRadioButton.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QRadioButton.prototype.parent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QRadioButton.prototype.devType = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QRadioButton.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isModal = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QRadioButton.prototype.window = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QRadioButton.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QRadioButton.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QRadioButton.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QRadioButton.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setFont = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QRadioButton.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QRadioButton.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QRadioButton.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QRadioButton.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QRadioButton.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setMask = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mask = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QRadioButton.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QRadioButton.prototype.grab = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QRadioButton.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QRadioButton.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QRadioButton.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QRadioButton.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QRadioButton.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QRadioButton.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QRadioButton.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QRadioButton.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QRadioButton.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QRadioButton.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QRadioButton.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QRadioButton.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QRadioButton.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QRadioButton.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QRadioButton.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QRadioButton.prototype.update = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QRadioButton.prototype.repaint = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QRadioButton.prototype.show = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QRadioButton.prototype.hide = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QRadioButton.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QRadioButton.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QRadioButton.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QRadioButton.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QRadioButton.prototype.close = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QRadioButton.prototype.raise = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QRadioButton.prototype.lower = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QRadioButton.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QRadioButton.prototype.move = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QRadioButton.prototype.resize = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QRadioButton.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QRadioButton.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QRadioButton.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QRadioButton.prototype.windowState = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QRadioButton.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QRadioButton.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QRadioButton.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QRadioButton.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QRadioButton.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QRadioButton.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QRadioButton.prototype.layout = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QRadioButton.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setParent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.scroll = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QRadioButton.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QRadioButton.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QRadioButton.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QRadioButton.prototype.addAction = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QRadioButton.prototype.addActions = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QRadioButton.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QRadioButton.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QRadioButton.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QRadioButton.prototype.actions = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QRadioButton.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QRadioButton.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QRadioButton.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QRadioButton.prototype.windowType = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QRadioButton.prototype.childAt = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QRadioButton.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QRadioButton.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.metric = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QRadioButton.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QRadioButton.prototype.redirected = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QRadioButton.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QRadioButton.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QRadioButton.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QRadioButton.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QRadioButton.prototype.create = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QRadioButton.prototype.destroy = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QRadioButton.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QRadioButton.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QRadioButton.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QRadioButton.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QRadioButton.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QRadioButton.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QRadioButton.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QRadioButton.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setText = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setIcon = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setIcon");
          
              return this.__PROXY__.setIcon(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setShortcut = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setShortcut");
          
              return this.__PROXY__.setShortcut(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setCheckable = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setCheckable");
          
              return this.__PROXY__.setCheckable(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isCheckable = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isCheckable");
          
              return this.__PROXY__.isCheckable(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isChecked = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isChecked");
          
              return this.__PROXY__.isChecked(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setDown = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setDown");
          
              return this.__PROXY__.setDown(...args);
            
        };
    
        // function 
        QRadioButton.prototype.isDown = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.isDown");
          
              return this.__PROXY__.isDown(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAutoRepeat = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAutoRepeat");
          
              return this.__PROXY__.setAutoRepeat(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAutoRepeatDelay = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAutoRepeatDelay");
          
              return this.__PROXY__.setAutoRepeatDelay(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAutoRepeatInterval = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAutoRepeatInterval");
          
              return this.__PROXY__.setAutoRepeatInterval(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setAutoExclusive = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setAutoExclusive");
          
              return this.__PROXY__.setAutoExclusive(...args);
            
        };
    
        // function 
        QRadioButton.prototype.group = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.group");
          
              return this.__PROXY__.group(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setIconSize = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setIconSize");
          
              return this.__PROXY__.setIconSize(...args);
            
        };
    
        // function 
        QRadioButton.prototype.animateClick = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.animateClick");
          
              return this.__PROXY__.animateClick(...args);
            
        };
    
        // function 
        QRadioButton.prototype.click = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.click");
          
              return this.__PROXY__.click(...args);
            
        };
    
        // function 
        QRadioButton.prototype.toggle = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.toggle");
          
              return this.__PROXY__.toggle(...args);
            
        };
    
        // function 
        QRadioButton.prototype.setChecked = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.setChecked");
          
              return this.__PROXY__.setChecked(...args);
            
        };
    
        // function 
        QRadioButton.prototype.event = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QRadioButton.prototype.hitButton = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.hitButton");
          
              return this.__PROXY__.hitButton(...args);
            
        };
    
        // function 
        QRadioButton.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QRadioButton.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QRadioButton.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QRadioButton.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QRadioButton.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'icon', {
              get: function() {
                  
                      return this.__PROXY__.icon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'iconSize', {
              get: function() {
                  
                      return this.__PROXY__.iconSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIconSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'shortcut', {
              get: function() {
                  
                      return this.__PROXY__.shortcut;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setShortcut(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'checkable', {
              get: function() {
                  
                      return this.__PROXY__.isCheckable();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCheckable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'checked', {
              get: function() {
                  
                      return this.__PROXY__.isChecked();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setChecked(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'autoRepeat', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'autoExclusive', {
              get: function() {
                  
                      return this.__PROXY__.autoExclusive;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoExclusive(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'autoRepeatDelay', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatDelay;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatDelay(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'autoRepeatInterval', {
              get: function() {
                  
                      return this.__PROXY__.autoRepeatInterval;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoRepeatInterval(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'down', {
              get: function() {
                  
                      return this.__PROXY__.isDown();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDown(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QRadioButton.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QRadioButton.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QRadioButton.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QRadioButton.prototype, 'pressed', {
            get: function() { return this.__PROXY__.pressed; },
            configurable: true
        });
        
        Object.defineProperty(QRadioButton.prototype, 'released', {
            get: function() { return this.__PROXY__.released; },
            configurable: true
        });
        
        Object.defineProperty(QRadioButton.prototype, 'clicked', {
            get: function() { return this.__PROXY__.clicked; },
            configurable: true
        });
        
          Object.defineProperty(QRadioButton.prototype, 'clicked(bool)', {
              get: function() { return this.__PROXY__.clicked; },
              configurable: true
          });
        
        Object.defineProperty(QRadioButton.prototype, 'toggled', {
            get: function() { return this.__PROXY__.toggled; },
            configurable: true
        });
        
          Object.defineProperty(QRadioButton.prototype, 'toggled(bool)', {
              get: function() { return this.__PROXY__.toggled; },
              configurable: true
          });
        QRadioButton.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QRadioButton.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QRadioButton.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QRadioButton.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QRadioButton.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QRadioButton.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      