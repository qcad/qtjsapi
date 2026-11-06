
      // auto generated
      //var self;

      // class constructor:
      function QFrame() {
        

        // should be QFrame_BaseJs.call(this, engine):
        //QFrame.prototype = new QFrame_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QFrame.getIdStatic()))) {

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
            qWarning("QFrame.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QFrame_Wrapper(
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

      

        //copyProperties(this, wrapper, QFrame);
  }

  
  else {
    
        print("QFrame(): wrong number / type of arguments");
      
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

      //QFrame.prototype = new QFrame_BaseJs(engine);
      //QFrame.prototype = new QFrame_Wrapper(engine);
      QFrame.prototype = new Object();


      QFrame.prototype.toString = function() {
          //return "QFrame [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QFrame [JS]";
        };
      QFrame.getObjectType = function() {
        return RJSType_QFrame.getIdStatic();
      };

      QFrame.prototype.getObjectType = function() {
        return RJSType_QFrame.getIdStatic();
      };

      QFrame.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QFrame.getIdStatic()) {
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
      
  // enum: Shape
QFrame.NoFrame = QFrame_Wrapper.NoFrame;
QFrame.Box = QFrame_Wrapper.Box;
QFrame.Panel = QFrame_Wrapper.Panel;
QFrame.WinPanel = QFrame_Wrapper.WinPanel;
QFrame.HLine = QFrame_Wrapper.HLine;
QFrame.VLine = QFrame_Wrapper.VLine;
QFrame.StyledPanel = QFrame_Wrapper.StyledPanel;

  // enum: Shadow
QFrame.Plain = QFrame_Wrapper.Plain;
QFrame.Raised = QFrame_Wrapper.Raised;
QFrame.Sunken = QFrame_Wrapper.Sunken;

  // enum: StyleMask
QFrame.Shadow_Mask = QFrame_Wrapper.Shadow_Mask;
QFrame.Shape_Mask = QFrame_Wrapper.Shape_Mask;


      // functions:
      
        // function 
        QFrame.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QFrame.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QFrame.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QFrame.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QFrame.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QFrame.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QFrame.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QFrame.prototype.findChild = function(...args) 
          
        {
          //print("JS: QFrame.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QFrame.prototype.children = function(...args) 
          
        {
          //print("JS: QFrame.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QFrame.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QFrame.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QFrame.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QFrame.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QFrame.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QFrame.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QFrame.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QFrame.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QFrame.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QFrame.prototype.property = function(...args) 
          
        {
          //print("JS: QFrame.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QFrame.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QFrame.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QFrame.prototype.parent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QFrame.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QFrame.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QFrame.prototype.devType = function(...args) 
          
        {
          //print("JS: QFrame.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
        
        // function 
        QFrame.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QFrame.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
        
        // function 
        QFrame.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
        
        // function 
        QFrame.prototype.isModal = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
        
        // function 
        QFrame.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QFrame.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
        
        // function 
        QFrame.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QFrame.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
        
        // function 
        QFrame.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
        
        // function 
        QFrame.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
        
        // function 
        QFrame.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
        
        // function 
        QFrame.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
        
        // function 
        QFrame.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
        
        // function 
        QFrame.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
        
        // function 
        QFrame.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
        
        // function 
        QFrame.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
        
        // function 
        QFrame.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
        
        // function 
        QFrame.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
        
        // function 
        QFrame.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
        
        // function 
        QFrame.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
        
        // function 
        QFrame.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
        
        // function 
        QFrame.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
        
        // function 
        QFrame.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
        
        // function 
        QFrame.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
        
        // function 
        QFrame.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
        
        // function 
        QFrame.prototype.window = function(...args) 
          
        {
          //print("JS: QFrame.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
        
        // function 
        QFrame.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QFrame.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
        
        // function 
        QFrame.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QFrame.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
        
        // function 
        QFrame.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
        
        // function 
        QFrame.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
        
        // function 
        QFrame.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QFrame.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
        
        // function 
        QFrame.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
        
        // function 
        QFrame.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QFrame.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
        
        // function 
        QFrame.prototype.setFont = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
        
        // function 
        QFrame.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QFrame.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
        
        // function 
        QFrame.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
        
        // function 
        QFrame.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QFrame.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
        
        // function 
        QFrame.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
        
        // function 
        QFrame.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QFrame.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
        
        // function 
        QFrame.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QFrame.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
        
        // function 
        QFrame.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
        
        // function 
        QFrame.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QFrame.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
        
        // function 
        QFrame.prototype.setMask = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
        
        // function 
        QFrame.prototype.mask = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
        
        // function 
        QFrame.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QFrame.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
        
        // function 
        QFrame.prototype.grab = function(...args) 
          
        {
          //print("JS: QFrame.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
        
        // function 
        QFrame.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QFrame.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
        
        // function 
        QFrame.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QFrame.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
        
        // function 
        QFrame.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
        
        // function 
        QFrame.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QFrame.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
        
        // function 
        QFrame.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
        
        // function 
        QFrame.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
        
        // function 
        QFrame.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
        
        // function 
        QFrame.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
        
        // function 
        QFrame.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
        
        // function 
        QFrame.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
        
        // function 
        QFrame.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
        
        // function 
        QFrame.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
        
        // function 
        QFrame.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QFrame.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
        
        // function 
        QFrame.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
        
        // function 
        QFrame.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QFrame.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
        
        // function 
        QFrame.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
        
        // function 
        QFrame.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
        
        // function 
        QFrame.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QFrame.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
        
        // function 
        QFrame.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QFrame.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
        
        // function 
        QFrame.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
        
        // function 
        QFrame.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
        
        // function 
        QFrame.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QFrame.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
        
        // function 
        QFrame.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
        
        // function 
        QFrame.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QFrame.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
        
        // function 
        QFrame.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
        
        // function 
        QFrame.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QFrame.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
        
        // function 
        QFrame.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QFrame.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
        
        // function 
        QFrame.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QFrame.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
        
        // function 
        QFrame.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QFrame.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
        
        // function 
        QFrame.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QFrame.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
        
        // function 
        QFrame.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QFrame.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
        
        // function 
        QFrame.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
        
        // function 
        QFrame.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
        
        // function 
        QFrame.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
        
        // function 
        QFrame.prototype.update = function(...args) 
          
        {
          //print("JS: QFrame.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QFrame.prototype.repaint = function(...args) 
          
        {
          //print("JS: QFrame.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
        
        // function 
        QFrame.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
        
        // function 
        QFrame.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
        
        // function 
        QFrame.prototype.show = function(...args) 
          
        {
          //print("JS: QFrame.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
        
        // function 
        QFrame.prototype.hide = function(...args) 
          
        {
          //print("JS: QFrame.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
        
        // function 
        QFrame.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QFrame.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
        
        // function 
        QFrame.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QFrame.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
        
        // function 
        QFrame.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QFrame.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
        
        // function 
        QFrame.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QFrame.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
        
        // function 
        QFrame.prototype.close = function(...args) 
          
        {
          //print("JS: QFrame.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
        
        // function 
        QFrame.prototype.raise = function(...args) 
          
        {
          //print("JS: QFrame.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
        
        // function 
        QFrame.prototype.lower = function(...args) 
          
        {
          //print("JS: QFrame.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
        
        // function 
        QFrame.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QFrame.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
        
        // function 
        QFrame.prototype.move = function(...args) 
          
        {
          //print("JS: QFrame.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
        
        // function 
        QFrame.prototype.resize = function(...args) 
          
        {
          //print("JS: QFrame.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
        
        // function 
        QFrame.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QFrame.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QFrame.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
        
        // function 
        QFrame.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QFrame.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
        
        // function 
        QFrame.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QFrame.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
        
        // function 
        QFrame.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
        
        // function 
        QFrame.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
        
        // function 
        QFrame.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
        
        // function 
        QFrame.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
        
        // function 
        QFrame.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
        
        // function 
        QFrame.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
        
        // function 
        QFrame.prototype.windowState = function(...args) 
          
        {
          //print("JS: QFrame.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
        
        // function 
        QFrame.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QFrame.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
        
        // function 
        QFrame.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
        
        // function 
        QFrame.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QFrame.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QFrame.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QFrame.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QFrame.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QFrame.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
        
        // function 
        QFrame.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QFrame.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QFrame.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QFrame.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QFrame.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QFrame.prototype.layout = function(...args) 
          
        {
          //print("JS: QFrame.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QFrame.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
        
        // function 
        QFrame.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QFrame.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
        
        // function 
        QFrame.prototype.setParent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QFrame.prototype.scroll = function(...args) 
          
        {
          //print("JS: QFrame.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
        
        // function 
        QFrame.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QFrame.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
        
        // function 
        QFrame.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QFrame.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
        
        // function 
        QFrame.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QFrame.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
        
        // function 
        QFrame.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
        
        // function 
        QFrame.prototype.addAction = function(...args) 
          
        {
          //print("JS: QFrame.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
        
        // function 
        QFrame.prototype.addActions = function(...args) 
          
        {
          //print("JS: QFrame.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
        
        // function 
        QFrame.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QFrame.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
        
        // function 
        QFrame.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QFrame.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
        
        // function 
        QFrame.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QFrame.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
        
        // function 
        QFrame.prototype.actions = function(...args) 
          
        {
          //print("JS: QFrame.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
        
        // function 
        QFrame.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QFrame.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
        
        // function 
        QFrame.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QFrame.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
        
        // function 
        QFrame.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
        
        // function 
        QFrame.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QFrame.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
        
        // function 
        QFrame.prototype.windowType = function(...args) 
          
        {
          //print("JS: QFrame.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
        
        // function 
        QFrame.prototype.childAt = function(...args) 
          
        {
          //print("JS: QFrame.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
        
        // function 
        QFrame.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
        
        // function 
        QFrame.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QFrame.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
        
        // function 
        QFrame.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QFrame.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
        
        // function 
        QFrame.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QFrame.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
        
        // function 
        QFrame.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
        
        // function 
        QFrame.prototype.event = function(...args) 
          
        {
          //print("JS: QFrame.prototype.event");
          
              return this.__PROXY__.event(...args);
            
        };
        
        // function 
        QFrame.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.metric = function(...args) 
          
        {
          //print("JS: QFrame.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
        
        // function 
        QFrame.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QFrame.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
        
        // function 
        QFrame.prototype.redirected = function(...args) 
          
        {
          //print("JS: QFrame.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
        
        // function 
        QFrame.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QFrame.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
        
        // function 
        QFrame.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
        
        // function 
        QFrame.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QFrame.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
        
        // function 
        QFrame.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
        
        // function 
        QFrame.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QFrame.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
        
        // function 
        QFrame.prototype.create = function(...args) 
          
        {
          //print("JS: QFrame.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
        
        // function 
        QFrame.prototype.destroy = function(...args) 
          
        {
          //print("JS: QFrame.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
        
        // function 
        QFrame.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QFrame.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
        
        // function 
        QFrame.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QFrame.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
        
        // function 
        QFrame.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QFrame.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
        
        // function 
        QFrame.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
        
        // function 
        QFrame.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QFrame.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
        
        // function 
        QFrame.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QFrame.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
        
        // function 
        QFrame.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QFrame.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
        
        // function 
        QFrame.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QFrame.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
        
        // function 
        QFrame.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QFrame.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
        
        // function 
        QFrame.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QFrame.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
        
        // function 
        QFrame.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
        
        // function 
        QFrame.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
        
        // function 
        QFrame.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
        
        // function 
        QFrame.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
        
        // function 
        QFrame.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
        
        // function 
        QFrame.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QFrame.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
        
        // function 
        QFrame.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QFrame.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
        
        // function 
        QFrame.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QFrame.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
        
        // function 
        QFrame.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
        QFrame.prototype.paintEvent.__SUPER__ = true;
        
        // function 
        QFrame.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
        QFrame.prototype.mouseMoveEvent.__SUPER__ = true;
        
        // function 
        QFrame.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QFrame.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
        QFrame.prototype.resizeEvent.__SUPER__ = true;
        

      // static functions:
      
          Object.defineProperty(QFrame.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QFrame.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QFrame.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QFrame.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        QFrame.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QFrame.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QFrame.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QFrame.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QFrame.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QFrame.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      