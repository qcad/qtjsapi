
      // auto generated
      //var self;

      // class constructor:
      function QLabel() {
        

        // should be QLabel_BaseJs.call(this, engine):
        //QLabel.prototype = new QLabel_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QLabel.getIdStatic()))) {

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
            qWarning("QLabel.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 3) {
    
            self = this;
            wrapper = new QLabel_Wrapper(
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

      

        //copyProperties(this, wrapper, QLabel);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QLabel_Wrapper(
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

      

        //copyProperties(this, wrapper, QLabel);
  }

  
  else {
    
        print("QLabel(): wrong number / type of arguments");
      
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

      //QLabel.prototype = new QLabel_BaseJs(engine);
      //QLabel.prototype = new QLabel_Wrapper(engine);
      QLabel.prototype = new Object();


      QLabel.prototype.toString = function() {
          //return "QLabel [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLabel [JS]";
        };
      QLabel.getObjectType = function() {
        return RJSType_QLabel.getIdStatic();
      };

      QLabel.prototype.getObjectType = function() {
        return RJSType_QLabel.getIdStatic();
      };

      QLabel.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QLabel.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QWidget.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QFrame.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QLabel.NoFrame = QLabel_Wrapper.NoFrame;
QLabel.Box = QLabel_Wrapper.Box;
QLabel.Panel = QLabel_Wrapper.Panel;
QLabel.WinPanel = QLabel_Wrapper.WinPanel;
QLabel.HLine = QLabel_Wrapper.HLine;
QLabel.VLine = QLabel_Wrapper.VLine;
QLabel.StyledPanel = QLabel_Wrapper.StyledPanel;

  // enum: Shadow
QLabel.Plain = QLabel_Wrapper.Plain;
QLabel.Raised = QLabel_Wrapper.Raised;
QLabel.Sunken = QLabel_Wrapper.Sunken;

  // enum: StyleMask
QLabel.Shadow_Mask = QLabel_Wrapper.Shadow_Mask;
QLabel.Shape_Mask = QLabel_Wrapper.Shape_Mask;


      // functions:
      
        // function 
        QLabel.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QLabel.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QLabel.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QLabel.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QLabel.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QLabel.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QLabel.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QLabel.prototype.findChild = function(...args) 
          
        {
          //print("JS: QLabel.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QLabel.prototype.children = function(...args) 
          
        {
          //print("JS: QLabel.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QLabel.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QLabel.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QLabel.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QLabel.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QLabel.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QLabel.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QLabel.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QLabel.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QLabel.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QLabel.prototype.property = function(...args) 
          
        {
          //print("JS: QLabel.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QLabel.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QLabel.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QLabel.prototype.parent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QLabel.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QLabel.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QLabel.prototype.devType = function(...args) 
          
        {
          //print("JS: QLabel.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QLabel.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QLabel.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QLabel.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QLabel.prototype.isModal = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QLabel.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QLabel.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QLabel.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QLabel.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QLabel.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QLabel.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QLabel.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QLabel.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QLabel.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QLabel.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QLabel.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QLabel.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QLabel.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QLabel.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QLabel.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QLabel.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QLabel.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QLabel.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QLabel.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QLabel.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QLabel.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QLabel.prototype.window = function(...args) 
          
        {
          //print("JS: QLabel.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QLabel.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QLabel.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QLabel.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QLabel.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QLabel.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QLabel.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QLabel.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QLabel.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QLabel.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QLabel.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QLabel.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QLabel.prototype.setFont = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QLabel.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QLabel.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QLabel.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QLabel.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QLabel.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QLabel.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QLabel.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QLabel.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QLabel.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QLabel.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QLabel.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QLabel.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QLabel.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QLabel.prototype.setMask = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QLabel.prototype.mask = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QLabel.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QLabel.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QLabel.prototype.grab = function(...args) 
          
        {
          //print("JS: QLabel.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QLabel.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QLabel.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QLabel.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QLabel.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QLabel.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QLabel.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QLabel.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QLabel.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QLabel.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QLabel.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QLabel.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QLabel.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QLabel.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QLabel.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QLabel.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QLabel.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QLabel.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QLabel.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QLabel.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QLabel.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QLabel.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QLabel.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QLabel.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QLabel.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QLabel.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QLabel.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QLabel.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QLabel.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QLabel.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QLabel.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QLabel.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QLabel.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QLabel.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QLabel.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QLabel.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QLabel.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QLabel.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QLabel.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QLabel.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QLabel.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QLabel.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QLabel.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QLabel.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QLabel.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QLabel.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QLabel.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QLabel.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QLabel.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QLabel.prototype.update = function(...args) 
          
        {
          //print("JS: QLabel.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QLabel.prototype.repaint = function(...args) 
          
        {
          //print("JS: QLabel.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QLabel.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QLabel.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QLabel.prototype.show = function(...args) 
          
        {
          //print("JS: QLabel.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QLabel.prototype.hide = function(...args) 
          
        {
          //print("JS: QLabel.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QLabel.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QLabel.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QLabel.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QLabel.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QLabel.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QLabel.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QLabel.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QLabel.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QLabel.prototype.close = function(...args) 
          
        {
          //print("JS: QLabel.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QLabel.prototype.raise = function(...args) 
          
        {
          //print("JS: QLabel.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QLabel.prototype.lower = function(...args) 
          
        {
          //print("JS: QLabel.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QLabel.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QLabel.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QLabel.prototype.move = function(...args) 
          
        {
          //print("JS: QLabel.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QLabel.prototype.resize = function(...args) 
          
        {
          //print("JS: QLabel.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QLabel.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QLabel.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QLabel.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QLabel.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QLabel.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QLabel.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QLabel.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QLabel.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QLabel.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QLabel.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QLabel.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QLabel.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QLabel.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QLabel.prototype.windowState = function(...args) 
          
        {
          //print("JS: QLabel.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QLabel.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QLabel.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QLabel.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QLabel.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QLabel.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QLabel.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QLabel.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QLabel.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QLabel.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QLabel.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QLabel.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QLabel.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QLabel.prototype.layout = function(...args) 
          
        {
          //print("JS: QLabel.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QLabel.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QLabel.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QLabel.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QLabel.prototype.setParent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QLabel.prototype.scroll = function(...args) 
          
        {
          //print("JS: QLabel.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QLabel.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QLabel.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QLabel.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QLabel.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QLabel.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QLabel.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QLabel.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QLabel.prototype.addAction = function(...args) 
          
        {
          //print("JS: QLabel.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QLabel.prototype.addActions = function(...args) 
          
        {
          //print("JS: QLabel.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QLabel.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QLabel.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QLabel.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QLabel.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QLabel.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QLabel.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QLabel.prototype.actions = function(...args) 
          
        {
          //print("JS: QLabel.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QLabel.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QLabel.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QLabel.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QLabel.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QLabel.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QLabel.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QLabel.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QLabel.prototype.windowType = function(...args) 
          
        {
          //print("JS: QLabel.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QLabel.prototype.childAt = function(...args) 
          
        {
          //print("JS: QLabel.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QLabel.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QLabel.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QLabel.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QLabel.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QLabel.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QLabel.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QLabel.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QLabel.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QLabel.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.metric = function(...args) 
          
        {
          //print("JS: QLabel.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QLabel.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QLabel.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QLabel.prototype.redirected = function(...args) 
          
        {
          //print("JS: QLabel.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QLabel.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QLabel.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QLabel.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QLabel.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QLabel.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QLabel.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QLabel.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QLabel.prototype.create = function(...args) 
          
        {
          //print("JS: QLabel.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QLabel.prototype.destroy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QLabel.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QLabel.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QLabel.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QLabel.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QLabel.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QLabel.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QLabel.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QLabel.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QLabel.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QLabel.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QLabel.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QLabel.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QLabel.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QLabel.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QLabel.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QLabel.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QLabel.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QLabel.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QLabel.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QLabel.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QLabel.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QLabel.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QLabel.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QLabel.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QLabel.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QLabel.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QLabel.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QLabel.prototype.picture = function(...args) 
          
        {
          //print("JS: QLabel.prototype.picture");
          
              return this.__PROXY__.picture(...args);
            
        };
        
        // function 
        QLabel.prototype.setTextFormat = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setTextFormat");
          
              return this.__PROXY__.setTextFormat(...args);
            
        };
        
        // function 
        QLabel.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QLabel.prototype.setWordWrap = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setWordWrap");
          
              return this.__PROXY__.setWordWrap(...args);
            
        };
        
        // function 
        QLabel.prototype.setIndent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setIndent");
          
              return this.__PROXY__.setIndent(...args);
            
        };
        
        // function 
        QLabel.prototype.setMargin = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setMargin");
          
              return this.__PROXY__.setMargin(...args);
            
        };
        
        // function 
        QLabel.prototype.hasScaledContents = function(...args) 
          
        {
          //print("JS: QLabel.prototype.hasScaledContents");
          
              return this.__PROXY__.hasScaledContents(...args);
            
        };
        
        // function 
        QLabel.prototype.setScaledContents = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setScaledContents");
          
              return this.__PROXY__.setScaledContents(...args);
            
        };
        
        // function 
        QLabel.prototype.setBuddy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setBuddy");
          
              return this.__PROXY__.setBuddy(...args);
            
        };
        
        // function 
        QLabel.prototype.buddy = function(...args) 
          
        {
          //print("JS: QLabel.prototype.buddy");
          
              return this.__PROXY__.buddy(...args);
            
        };
        
        // function 
        QLabel.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QLabel.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QLabel.prototype.setOpenExternalLinks = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setOpenExternalLinks");
          
              return this.__PROXY__.setOpenExternalLinks(...args);
            
        };
        
        // function 
        QLabel.prototype.setTextInteractionFlags = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setTextInteractionFlags");
          
              return this.__PROXY__.setTextInteractionFlags(...args);
            
        };
        
        // function 
        QLabel.prototype.setSelection = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setSelection");
          
              return this.__PROXY__.setSelection(...args);
            
        };
        
        // function 
        QLabel.prototype.selectionStart = function(...args) 
          
        {
          //print("JS: QLabel.prototype.selectionStart");
          
              return this.__PROXY__.selectionStart(...args);
            
        };
        
        // function 
        QLabel.prototype.setText = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setText");
          
              return this.__PROXY__.setText(...args);
            
        };
        
        // function 
        QLabel.prototype.setPixmap = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setPixmap");
          
              return this.__PROXY__.setPixmap(...args);
            
        };
        
        // function 
        QLabel.prototype.setPicture = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setPicture");
          
              return this.__PROXY__.setPicture(...args);
            
        };
        
        // function 
        QLabel.prototype.setNum = function(...args) 
          
        {
          //print("JS: QLabel.prototype.setNum");
          
              return this.__PROXY__.setNum(...args);
            
        };
        
        // function 
        QLabel.prototype.clear = function(...args) 
          
        {
          //print("JS: QLabel.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
        
        // function 
        QLabel.prototype.event = function(...args) 
          
        {
          //print("JS: QLabel.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QLabel.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QLabel.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QLabel.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QLabel.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QLabel.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.contextMenuEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.contextMenuEvent");
          
              return this.__PROXY__.contextMenuEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QLabel.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QLabel.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QLabel.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QLabel.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'text', {
              get: function() {
                  
                      return this.__PROXY__.text;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'textFormat', {
              get: function() {
                  
                      return this.__PROXY__.textFormat;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextFormat(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'pixmap', {
              get: function() {
                  
                      return this.__PROXY__.pixmap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPixmap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'scaledContents', {
              get: function() {
                  
                      return this.__PROXY__.hasScaledContents();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setScaledContents(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'alignment', {
              get: function() {
                  
                      return this.__PROXY__.alignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'wordWrap', {
              get: function() {
                  
                      return this.__PROXY__.wordWrap;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWordWrap(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'margin', {
              get: function() {
                  
                      return this.__PROXY__.margin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'indent', {
              get: function() {
                  
                      return this.__PROXY__.indent;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIndent(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'openExternalLinks', {
              get: function() {
                  
                      return this.__PROXY__.openExternalLinks;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setOpenExternalLinks(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'textInteractionFlags', {
              get: function() {
                  
                      return this.__PROXY__.textInteractionFlags;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextInteractionFlags(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'hasSelectedText', {
              get: function() {
                  
                      return this.__PROXY__.hasSelectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLabel.prototype, 'selectedText', {
              get: function() {
                  
                      return this.__PROXY__.selectedText;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QLabel.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QLabel.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        
        Object.defineProperty(QLabel.prototype, 'linkActivated', {
            get: function() { return this.__PROXY__.linkActivated; },
            configurable: true
        });
        
          Object.defineProperty(QLabel.prototype, 'linkActivated(QString)', {
              get: function() { return this.__PROXY__.linkActivated; },
              configurable: true
          });
        
        Object.defineProperty(QLabel.prototype, 'linkHovered', {
            get: function() { return this.__PROXY__.linkHovered; },
            configurable: true
        });
        
          Object.defineProperty(QLabel.prototype, 'linkHovered(QString)', {
              get: function() { return this.__PROXY__.linkHovered; },
              configurable: true
          });
        QLabel.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QLabel.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QLabel.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLabel.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLabel.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QLabel.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      