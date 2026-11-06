
      // auto generated
      //var self;

      // class constructor:
      function QLineEdit() {
        

        // should be QLineEdit_BaseJs.call(this, engine):
        //QLineEdit.prototype = new QLineEdit_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QLineEdit.getIdStatic()))) {

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
            qWarning("QLineEdit.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QLineEdit_Wrapper(
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

      

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QLineEdit_Wrapper(
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

      

        //copyProperties(this, wrapper, QLineEdit);
  }

  
  else {
    
        print("QLineEdit(): wrong number / type of arguments");
      
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

      //QLineEdit.prototype = new QLineEdit_BaseJs(engine);
      //QLineEdit.prototype = new QLineEdit_Wrapper(engine);
      QLineEdit.prototype = new Object();


      QLineEdit.prototype.toString = function() {
          //return "QLineEdit [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLineEdit [JS]";
        };
      QLineEdit.getObjectType = function() {
        return RJSType_QLineEdit.getIdStatic();
      };

      QLineEdit.prototype.getObjectType = function() {
        return RJSType_QLineEdit.getIdStatic();
      };

      QLineEdit.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QLineEdit.getIdStatic()) {
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
      
  // enum: ActionPosition
QLineEdit.LeadingPosition = QLineEdit_Wrapper.LeadingPosition;
QLineEdit.TrailingPosition = QLineEdit_Wrapper.TrailingPosition;

  // enum: EchoMode
QLineEdit.Normal = QLineEdit_Wrapper.Normal;
QLineEdit.NoEcho = QLineEdit_Wrapper.NoEcho;
QLineEdit.Password = QLineEdit_Wrapper.Password;
QLineEdit.PasswordEchoOnEdit = QLineEdit_Wrapper.PasswordEchoOnEdit;


      // functions:
      
        // function 
        QLineEdit.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QLineEdit.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QLineEdit.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QLineEdit.prototype.findChild = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QLineEdit.prototype.children = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QLineEdit.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QLineEdit.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QLineEdit.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QLineEdit.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QLineEdit.prototype.property = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QLineEdit.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QLineEdit.prototype.parent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QLineEdit.prototype.devType = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QLineEdit.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isModal = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QLineEdit.prototype.window = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QLineEdit.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QLineEdit.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QLineEdit.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QLineEdit.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFont = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QLineEdit.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QLineEdit.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QLineEdit.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMask = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mask = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QLineEdit.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QLineEdit.prototype.grab = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QLineEdit.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QLineEdit.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QLineEdit.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QLineEdit.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QLineEdit.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QLineEdit.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QLineEdit.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QLineEdit.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QLineEdit.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QLineEdit.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QLineEdit.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QLineEdit.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QLineEdit.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QLineEdit.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.update = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QLineEdit.prototype.repaint = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QLineEdit.prototype.show = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hide = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QLineEdit.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QLineEdit.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QLineEdit.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QLineEdit.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QLineEdit.prototype.close = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QLineEdit.prototype.raise = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QLineEdit.prototype.lower = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QLineEdit.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QLineEdit.prototype.move = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QLineEdit.prototype.resize = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QLineEdit.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QLineEdit.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QLineEdit.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QLineEdit.prototype.windowState = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QLineEdit.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QLineEdit.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QLineEdit.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QLineEdit.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QLineEdit.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QLineEdit.prototype.layout = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QLineEdit.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setParent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.scroll = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QLineEdit.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QLineEdit.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QLineEdit.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QLineEdit.prototype.addActions = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QLineEdit.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QLineEdit.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QLineEdit.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QLineEdit.prototype.actions = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QLineEdit.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QLineEdit.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QLineEdit.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QLineEdit.prototype.windowType = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QLineEdit.prototype.childAt = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QLineEdit.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QLineEdit.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QLineEdit.prototype.event = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
    
        // function 
        QLineEdit.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.metric = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QLineEdit.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QLineEdit.prototype.redirected = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QLineEdit.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QLineEdit.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QLineEdit.prototype.create = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QLineEdit.prototype.destroy = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QLineEdit.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QLineEdit.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QLineEdit.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QLineEdit.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QLineEdit.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QLineEdit.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QLineEdit.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QLineEdit.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setPlaceholderText = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setPlaceholderText");
          
              return this.__PROXY__.setPlaceholderText(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setMaxLength = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setMaxLength");
          
              return this.__PROXY__.setMaxLength(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setFrame = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setFrame");
          
              return this.__PROXY__.setFrame(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hasFrame = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hasFrame");
          
              return this.__PROXY__.hasFrame(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setClearButtonEnabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setClearButtonEnabled");
          
              return this.__PROXY__.setClearButtonEnabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isClearButtonEnabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isClearButtonEnabled");
          
              return this.__PROXY__.isClearButtonEnabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setEchoMode = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setEchoMode");
          
              return this.__PROXY__.setEchoMode(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isReadOnly = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isReadOnly");
          
              return this.__PROXY__.isReadOnly(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setReadOnly = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setReadOnly");
          
              return this.__PROXY__.setReadOnly(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setValidator = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setValidator");
          
              return this.__PROXY__.setValidator(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setCompleter = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setCompleter");
          
              return this.__PROXY__.setCompleter(...args);
            
        };
    
        // function 
        QLineEdit.prototype.completer = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.completer");
          
              return this.__PROXY__.completer(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setCursorPosition = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setCursorPosition");
          
              return this.__PROXY__.setCursorPosition(...args);
            
        };
    
        // function 
        QLineEdit.prototype.cursorPositionAt = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.cursorPositionAt");
          
              return this.__PROXY__.cursorPositionAt(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QLineEdit.prototype.cursorForward = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.cursorForward");
          
              return this.__PROXY__.cursorForward(...args);
            
        };
    
        // function 
        QLineEdit.prototype.cursorBackward = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.cursorBackward");
          
              return this.__PROXY__.cursorBackward(...args);
            
        };
    
        // function 
        QLineEdit.prototype.cursorWordForward = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.cursorWordForward");
          
              return this.__PROXY__.cursorWordForward(...args);
            
        };
    
        // function 
        QLineEdit.prototype.cursorWordBackward = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.cursorWordBackward");
          
              return this.__PROXY__.cursorWordBackward(...args);
            
        };
    
        // function 
        QLineEdit.prototype.backspace = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.backspace");
          
              return this.__PROXY__.backspace(...args);
            
        };
    
        // function 
        QLineEdit.prototype.del = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.del");
          
              return this.__PROXY__.del(...args);
            
        };
    
        // function 
        QLineEdit.prototype.home = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.home");
          
              return this.__PROXY__.home(...args);
            
        };
    
        // function 
        QLineEdit.prototype.end = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.end");
          
              return this.__PROXY__.end(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isModified = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isModified");
          
              return this.__PROXY__.isModified(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setModified = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setModified");
          
              return this.__PROXY__.setModified(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
    
        // function 
        QLineEdit.prototype.selectionStart = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.selectionStart");
          
              return this.__PROXY__.selectionStart(...args);
            
        };
    
        // function 
        QLineEdit.prototype.selectionEnd = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.selectionEnd");
          
              return this.__PROXY__.selectionEnd(...args);
            
        };
    
        // function 
        QLineEdit.prototype.selectionLength = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.selectionLength");
          
              return this.__PROXY__.selectionLength(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isUndoAvailable = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isUndoAvailable");
          
              return this.__PROXY__.isUndoAvailable(...args);
            
        };
    
        // function 
        QLineEdit.prototype.isRedoAvailable = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.isRedoAvailable");
          
              return this.__PROXY__.isRedoAvailable(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setDragEnabled = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setDragEnabled");
          
              return this.__PROXY__.setDragEnabled(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setCursorMoveStyle = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setCursorMoveStyle");
          
              return this.__PROXY__.setCursorMoveStyle(...args);
            
        };
    
        // function 
        QLineEdit.prototype.inputMask = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.inputMask");
          
              return this.__PROXY__.inputMask(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setInputMask = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setInputMask");
          
              return this.__PROXY__.setInputMask(...args);
            
        };
    
        // function 
        QLineEdit.prototype.hasAcceptableInput = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.hasAcceptableInput");
          
              return this.__PROXY__.hasAcceptableInput(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setTextMargins = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setTextMargins");
          
              return this.__PROXY__.setTextMargins(...args);
            
        };
    
        // function 
        QLineEdit.prototype.textMargins = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.textMargins");
          
              return this.__PROXY__.textMargins(...args);
            
        };
    
        // function 
        QLineEdit.prototype.addAction = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QLineEdit.prototype.setText = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
    
        // function 
        QLineEdit.prototype.clear = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QLineEdit.prototype.selectAll = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.selectAll");
          
              return this.__PROXY__.selectAll(...args);
            
        };
    
        // function 
        QLineEdit.prototype.undo = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
    
        // function 
        QLineEdit.prototype.redo = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
    
        // function 
        QLineEdit.prototype.cut = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.cut");
          
              return this.__PROXY__.cut(...args);
            
        };
    
        // function 
        QLineEdit.prototype.copy = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.copy");
          
              return this.__PROXY__.copy(...args);
            
        };
    
        // function 
        QLineEdit.prototype.paste = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.paste");
          
              return this.__PROXY__.paste(...args);
            
        };
    
        // function 
        QLineEdit.prototype.deselect = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.deselect");
          
              return this.__PROXY__.deselect(...args);
            
        };
    
        // function 
        QLineEdit.prototype.insert = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.insert");
          
              return this.__PROXY__.insert(...args);
            
        };
    
        // function 
        QLineEdit.prototype.createStandardContextMenu = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.createStandardContextMenu");
          
              return this.__PROXY__.createStandardContextMenu(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
    
        // function 
        QLineEdit.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QLineEdit.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QLineEdit.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QLineEdit.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QLineEdit.prototype.cursorRect = function(...args) 
          
        {
          //print("JS: QLineEdit.prototype.cursorRect");
          
              return this.__PROXY__.cursorRect(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QLineEdit.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'maxLength', {
              get: function() {
                  
                      return this.__PROXY__.maxLength;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaxLength(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'frame', {
              get: function() {
                  
                      return this.__PROXY__.hasFrame();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrame(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'echoMode', {
              get: function() {
                  
                      return this.__PROXY__.echoMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEchoMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'displayText', {
              get: function() {
                  
                      return this.__PROXY__.displayText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'cursorPosition', {
              get: function() {
                  
                      return this.__PROXY__.cursorPosition;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorPosition(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'alignment', {
              get: function() {
                  
                      return this.__PROXY__.alignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'modified', {
              get: function() {
                  
                      return this.__PROXY__.isModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'hasSelectedText', {
              get: function() {
                  
                      return this.__PROXY__.hasSelectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'selectedText', {
              get: function() {
                  
                      return this.__PROXY__.selectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'dragEnabled', {
              get: function() {
                  
                      return this.__PROXY__.dragEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDragEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'readOnly', {
              get: function() {
                  
                      return this.__PROXY__.isReadOnly();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setReadOnly(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'undoAvailable', {
              get: function() {
                  
                      return this.__PROXY__.isUndoAvailable();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'redoAvailable', {
              get: function() {
                  
                      return this.__PROXY__.isRedoAvailable();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'acceptableInput', {
              get: function() {
                  
                      return this.__PROXY__.hasAcceptableInput();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'placeholderText', {
              get: function() {
                  
                      return this.__PROXY__.placeholderText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPlaceholderText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'cursorMoveStyle', {
              get: function() {
                  
                      return this.__PROXY__.cursorMoveStyle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursorMoveStyle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLineEdit.prototype, 'clearButtonEnabled', {
              get: function() {
                  
                      return this.__PROXY__.isClearButtonEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setClearButtonEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QLineEdit.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QLineEdit.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QLineEdit.prototype, 'textChanged', {
            get: function() { return this.__PROXY__.textChanged; },
            configurable: true
        });
        
          Object.defineProperty(QLineEdit.prototype, 'textChanged(QString)', {
              get: function() { return this.__PROXY__.textChanged; },
              configurable: true
          });
        
        Object.defineProperty(QLineEdit.prototype, 'textEdited', {
            get: function() { return this.__PROXY__.textEdited; },
            configurable: true
        });
        
          Object.defineProperty(QLineEdit.prototype, 'textEdited(QString)', {
              get: function() { return this.__PROXY__.textEdited; },
              configurable: true
          });
        
        Object.defineProperty(QLineEdit.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        
          Object.defineProperty(QLineEdit.prototype, 'cursorPositionChanged(int,int)', {
              get: function() { return this.__PROXY__.cursorPositionChanged; },
              configurable: true
          });
        
        Object.defineProperty(QLineEdit.prototype, 'returnPressed', {
            get: function() { return this.__PROXY__.returnPressed; },
            configurable: true
        });
        
        Object.defineProperty(QLineEdit.prototype, 'editingFinished', {
            get: function() { return this.__PROXY__.editingFinished; },
            configurable: true
        });
        
        Object.defineProperty(QLineEdit.prototype, 'selectionChanged', {
            get: function() { return this.__PROXY__.selectionChanged; },
            configurable: true
        });
        
        Object.defineProperty(QLineEdit.prototype, 'inputRejected', {
            get: function() { return this.__PROXY__.inputRejected; },
            configurable: true
        });
        QLineEdit.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QLineEdit.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QLineEdit.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLineEdit.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLineEdit.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QLineEdit.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      