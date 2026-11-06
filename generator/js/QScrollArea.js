
      // auto generated
      //var self;

      // class constructor:
      function QScrollArea() {
        

        // should be QScrollArea_BaseJs.call(this, engine):
        //QScrollArea.prototype = new QScrollArea_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QScrollArea.getIdStatic()))) {

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
            qWarning("QScrollArea.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QScrollArea_Wrapper(
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

      

        //copyProperties(this, wrapper, QScrollArea);
  }

  
  else {
    
        print("QScrollArea(): wrong number / type of arguments");
      
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

      //QScrollArea.prototype = new QScrollArea_BaseJs(engine);
      //QScrollArea.prototype = new QScrollArea_Wrapper(engine);
      QScrollArea.prototype = new Object();


      QScrollArea.prototype.toString = function() {
          //return "QScrollArea [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QScrollArea [JS]";
        };
      QScrollArea.getObjectType = function() {
        return RJSType_QScrollArea.getIdStatic();
      };

      QScrollArea.prototype.getObjectType = function() {
        return RJSType_QScrollArea.getIdStatic();
      };

      QScrollArea.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QScrollArea.getIdStatic()) {
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
        
          if (t===RJSType_QAbstractScrollArea.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Shape
QScrollArea.NoFrame = QScrollArea_Wrapper.NoFrame;
QScrollArea.Box = QScrollArea_Wrapper.Box;
QScrollArea.Panel = QScrollArea_Wrapper.Panel;
QScrollArea.WinPanel = QScrollArea_Wrapper.WinPanel;
QScrollArea.HLine = QScrollArea_Wrapper.HLine;
QScrollArea.VLine = QScrollArea_Wrapper.VLine;
QScrollArea.StyledPanel = QScrollArea_Wrapper.StyledPanel;

  // enum: Shadow
QScrollArea.Plain = QScrollArea_Wrapper.Plain;
QScrollArea.Raised = QScrollArea_Wrapper.Raised;
QScrollArea.Sunken = QScrollArea_Wrapper.Sunken;

  // enum: StyleMask
QScrollArea.Shadow_Mask = QScrollArea_Wrapper.Shadow_Mask;
QScrollArea.Shape_Mask = QScrollArea_Wrapper.Shape_Mask;

  // enum: SizeAdjustPolicy
QScrollArea.AdjustIgnored = QScrollArea_Wrapper.AdjustIgnored;
QScrollArea.AdjustToContentsOnFirstShow = QScrollArea_Wrapper.AdjustToContentsOnFirstShow;
QScrollArea.AdjustToContents = QScrollArea_Wrapper.AdjustToContents;


      // functions:
      
        // function 
        QScrollArea.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QScrollArea.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QScrollArea.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QScrollArea.prototype.findChild = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QScrollArea.prototype.children = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QScrollArea.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QScrollArea.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QScrollArea.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QScrollArea.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QScrollArea.prototype.property = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QScrollArea.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QScrollArea.prototype.parent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QScrollArea.prototype.devType = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.devType");
          
              return this.__PROXY__.devType(...args);
            
        };
    
        // function 
        QScrollArea.prototype.createWinId = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.createWinId");
          
              return this.__PROXY__.createWinId(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isWindow = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isWindow");
          
              return this.__PROXY__.isWindow(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isModal = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isModal");
          
              return this.__PROXY__.isModal(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowModality = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowModality");
          
              return this.__PROXY__.setWindowModality(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isEnabledTo = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isEnabledTo");
          
              return this.__PROXY__.isEnabledTo(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setDisabled = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setDisabled");
          
              return this.__PROXY__.setDisabled(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowModified = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowModified");
          
              return this.__PROXY__.setWindowModified(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMinimumSize = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMinimumSize");
          
              return this.__PROXY__.setMinimumSize(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMaximumSize = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMaximumSize");
          
              return this.__PROXY__.setMaximumSize(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMinimumWidth = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMinimumWidth");
          
              return this.__PROXY__.setMinimumWidth(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMinimumHeight = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMinimumHeight");
          
              return this.__PROXY__.setMinimumHeight(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMaximumWidth = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMaximumWidth");
          
              return this.__PROXY__.setMaximumWidth(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMaximumHeight = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMaximumHeight");
          
              return this.__PROXY__.setMaximumHeight(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setSizeIncrement = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setSizeIncrement");
          
              return this.__PROXY__.setSizeIncrement(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setBaseSize = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setBaseSize");
          
              return this.__PROXY__.setBaseSize(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFixedSize = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFixedSize");
          
              return this.__PROXY__.setFixedSize(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFixedWidth = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFixedWidth");
          
              return this.__PROXY__.setFixedWidth(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFixedHeight = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFixedHeight");
          
              return this.__PROXY__.setFixedHeight(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mapToGlobal = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mapToGlobal");
          
              return this.__PROXY__.mapToGlobal(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mapFromGlobal = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mapFromGlobal");
          
              return this.__PROXY__.mapFromGlobal(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mapToParent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mapToParent");
          
              return this.__PROXY__.mapToParent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mapFromParent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mapFromParent");
          
              return this.__PROXY__.mapFromParent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mapTo = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mapTo");
          
              return this.__PROXY__.mapTo(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mapFrom = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mapFrom");
          
              return this.__PROXY__.mapFrom(...args);
            
        };
    
        // function 
        QScrollArea.prototype.window = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.window");
          
              return this.__PROXY__.window(...args);
            
        };
    
        // function 
        QScrollArea.prototype.nativeParentWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.nativeParentWidget");
          
              return this.__PROXY__.nativeParentWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.topLevelWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.topLevelWidget");
          
              return this.__PROXY__.topLevelWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setPalette = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setPalette");
          
              return this.__PROXY__.setPalette(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setBackgroundRole = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setBackgroundRole");
          
              return this.__PROXY__.setBackgroundRole(...args);
            
        };
    
        // function 
        QScrollArea.prototype.backgroundRole = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.backgroundRole");
          
              return this.__PROXY__.backgroundRole(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setForegroundRole = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setForegroundRole");
          
              return this.__PROXY__.setForegroundRole(...args);
            
        };
    
        // function 
        QScrollArea.prototype.foregroundRole = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.foregroundRole");
          
              return this.__PROXY__.foregroundRole(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFont = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFont");
          
              return this.__PROXY__.setFont(...args);
            
        };
    
        // function 
        QScrollArea.prototype.fontInfo = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.fontInfo");
          
              return this.__PROXY__.fontInfo(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setCursor = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setCursor");
          
              return this.__PROXY__.setCursor(...args);
            
        };
    
        // function 
        QScrollArea.prototype.unsetCursor = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.unsetCursor");
          
              return this.__PROXY__.unsetCursor(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMouseTracking = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMouseTracking");
          
              return this.__PROXY__.setMouseTracking(...args);
            
        };
    
        // function 
        QScrollArea.prototype.hasMouseTracking = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.hasMouseTracking");
          
              return this.__PROXY__.hasMouseTracking(...args);
            
        };
    
        // function 
        QScrollArea.prototype.underMouse = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.underMouse");
          
              return this.__PROXY__.underMouse(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setTabletTracking = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setTabletTracking");
          
              return this.__PROXY__.setTabletTracking(...args);
            
        };
    
        // function 
        QScrollArea.prototype.hasTabletTracking = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.hasTabletTracking");
          
              return this.__PROXY__.hasTabletTracking(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMask = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMask");
          
              return this.__PROXY__.setMask(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mask = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mask");
          
              return this.__PROXY__.mask(...args);
            
        };
    
        // function 
        QScrollArea.prototype.clearMask = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.clearMask");
          
              return this.__PROXY__.clearMask(...args);
            
        };
    
        // function 
        QScrollArea.prototype.grab = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.grab");
          
              return this.__PROXY__.grab(...args);
            
        };
    
        // function 
        QScrollArea.prototype.grabGesture = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.grabGesture");
          
              return this.__PROXY__.grabGesture(...args);
            
        };
    
        // function 
        QScrollArea.prototype.ungrabGesture = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.ungrabGesture");
          
              return this.__PROXY__.ungrabGesture(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowTitle = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowTitle");
          
              return this.__PROXY__.setWindowTitle(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setStyleSheet = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setStyleSheet");
          
              return this.__PROXY__.setStyleSheet(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowIcon = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowIcon");
          
              return this.__PROXY__.setWindowIcon(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowIconText = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowIconText");
          
              return this.__PROXY__.setWindowIconText(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowRole = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowRole");
          
              return this.__PROXY__.setWindowRole(...args);
            
        };
    
        // function 
        QScrollArea.prototype.windowRole = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.windowRole");
          
              return this.__PROXY__.windowRole(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowFilePath = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowFilePath");
          
              return this.__PROXY__.setWindowFilePath(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowOpacity = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowOpacity");
          
              return this.__PROXY__.setWindowOpacity(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isWindowModified = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isWindowModified");
          
              return this.__PROXY__.isWindowModified(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setToolTip = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setToolTip");
          
              return this.__PROXY__.setToolTip(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setToolTipDuration = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setToolTipDuration");
          
              return this.__PROXY__.setToolTipDuration(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setStatusTip = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setStatusTip");
          
              return this.__PROXY__.setStatusTip(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWhatsThis = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWhatsThis");
          
              return this.__PROXY__.setWhatsThis(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setAccessibleName = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setAccessibleName");
          
              return this.__PROXY__.setAccessibleName(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setAccessibleDescription = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setAccessibleDescription");
          
              return this.__PROXY__.setAccessibleDescription(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setLayoutDirection = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setLayoutDirection");
          
              return this.__PROXY__.setLayoutDirection(...args);
            
        };
    
        // function 
        QScrollArea.prototype.unsetLayoutDirection = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.unsetLayoutDirection");
          
              return this.__PROXY__.unsetLayoutDirection(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setLocale = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setLocale");
          
              return this.__PROXY__.setLocale(...args);
            
        };
    
        // function 
        QScrollArea.prototype.unsetLocale = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.unsetLocale");
          
              return this.__PROXY__.unsetLocale(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isRightToLeft = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isRightToLeft");
          
              return this.__PROXY__.isRightToLeft(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isLeftToRight = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isLeftToRight");
          
              return this.__PROXY__.isLeftToRight(...args);
            
        };
    
        // function 
        QScrollArea.prototype.activateWindow = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.activateWindow");
          
              return this.__PROXY__.activateWindow(...args);
            
        };
    
        // function 
        QScrollArea.prototype.clearFocus = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.clearFocus");
          
              return this.__PROXY__.clearFocus(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFocus = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFocus");
          
              return this.__PROXY__.setFocus(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFocusPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFocusPolicy");
          
              return this.__PROXY__.setFocusPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.hasFocus = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.hasFocus");
          
              return this.__PROXY__.hasFocus(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFocusProxy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFocusProxy");
          
              return this.__PROXY__.setFocusProxy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.focusProxy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.focusProxy");
          
              return this.__PROXY__.focusProxy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setContextMenuPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setContextMenuPolicy");
          
              return this.__PROXY__.setContextMenuPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.grabMouse = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.grabMouse");
          
              return this.__PROXY__.grabMouse(...args);
            
        };
    
        // function 
        QScrollArea.prototype.releaseMouse = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.releaseMouse");
          
              return this.__PROXY__.releaseMouse(...args);
            
        };
    
        // function 
        QScrollArea.prototype.grabKeyboard = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.grabKeyboard");
          
              return this.__PROXY__.grabKeyboard(...args);
            
        };
    
        // function 
        QScrollArea.prototype.releaseKeyboard = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.releaseKeyboard");
          
              return this.__PROXY__.releaseKeyboard(...args);
            
        };
    
        // function 
        QScrollArea.prototype.grabShortcut = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.grabShortcut");
          
              return this.__PROXY__.grabShortcut(...args);
            
        };
    
        // function 
        QScrollArea.prototype.releaseShortcut = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.releaseShortcut");
          
              return this.__PROXY__.releaseShortcut(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setShortcutEnabled = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setShortcutEnabled");
          
              return this.__PROXY__.setShortcutEnabled(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setShortcutAutoRepeat = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setShortcutAutoRepeat");
          
              return this.__PROXY__.setShortcutAutoRepeat(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setUpdatesEnabled = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setUpdatesEnabled");
          
              return this.__PROXY__.setUpdatesEnabled(...args);
            
        };
    
        // function 
        QScrollArea.prototype.update = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
    
        // function 
        QScrollArea.prototype.repaint = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.repaint");
          
              return this.__PROXY__.repaint(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setVisible = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setVisible");
          
              return this.__PROXY__.setVisible(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setHidden = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setHidden");
          
              return this.__PROXY__.setHidden(...args);
            
        };
    
        // function 
        QScrollArea.prototype.show = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.show");
          
              return this.__PROXY__.show(...args);
            
        };
    
        // function 
        QScrollArea.prototype.hide = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.hide");
          
              return this.__PROXY__.hide(...args);
            
        };
    
        // function 
        QScrollArea.prototype.showMinimized = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.showMinimized");
          
              return this.__PROXY__.showMinimized(...args);
            
        };
    
        // function 
        QScrollArea.prototype.showMaximized = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.showMaximized");
          
              return this.__PROXY__.showMaximized(...args);
            
        };
    
        // function 
        QScrollArea.prototype.showFullScreen = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.showFullScreen");
          
              return this.__PROXY__.showFullScreen(...args);
            
        };
    
        // function 
        QScrollArea.prototype.showNormal = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.showNormal");
          
              return this.__PROXY__.showNormal(...args);
            
        };
    
        // function 
        QScrollArea.prototype.close = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.close");
          
              return this.__PROXY__.close(...args);
            
        };
    
        // function 
        QScrollArea.prototype.raise = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.raise");
          
              return this.__PROXY__.raise(...args);
            
        };
    
        // function 
        QScrollArea.prototype.lower = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.lower");
          
              return this.__PROXY__.lower(...args);
            
        };
    
        // function 
        QScrollArea.prototype.stackUnder = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.stackUnder");
          
              return this.__PROXY__.stackUnder(...args);
            
        };
    
        // function 
        QScrollArea.prototype.move = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.move");
          
              return this.__PROXY__.move(...args);
            
        };
    
        // function 
        QScrollArea.prototype.resize = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.resize");
          
              return this.__PROXY__.resize(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
    
        // function 
        QScrollArea.prototype.saveGeometry = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.saveGeometry");
          
              return this.__PROXY__.saveGeometry(...args);
            
        };
    
        // function 
        QScrollArea.prototype.restoreGeometry = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.restoreGeometry");
          
              return this.__PROXY__.restoreGeometry(...args);
            
        };
    
        // function 
        QScrollArea.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isVisible = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isVisible");
          
              return this.__PROXY__.isVisible(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isVisibleTo = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isVisibleTo");
          
              return this.__PROXY__.isVisibleTo(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isHidden = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isHidden");
          
              return this.__PROXY__.isHidden(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isMinimized = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isMinimized");
          
              return this.__PROXY__.isMinimized(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isMaximized = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isMaximized");
          
              return this.__PROXY__.isMaximized(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isFullScreen = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isFullScreen");
          
              return this.__PROXY__.isFullScreen(...args);
            
        };
    
        // function 
        QScrollArea.prototype.windowState = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.windowState");
          
              return this.__PROXY__.windowState(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowState = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowState");
          
              return this.__PROXY__.setWindowState(...args);
            
        };
    
        // function 
        QScrollArea.prototype.overrideWindowState = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.overrideWindowState");
          
              return this.__PROXY__.overrideWindowState(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setSizePolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setSizePolicy");
          
              return this.__PROXY__.setSizePolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
    
        // function 
        QScrollArea.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
    
        // function 
        QScrollArea.prototype.visibleRegion = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.visibleRegion");
          
              return this.__PROXY__.visibleRegion(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
    
        // function 
        QScrollArea.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
    
        // function 
        QScrollArea.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
    
        // function 
        QScrollArea.prototype.layout = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setLayout = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setLayout");
          
              return this.__PROXY__.setLayout(...args);
            
        };
    
        // function 
        QScrollArea.prototype.updateGeometry = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.updateGeometry");
          
              return this.__PROXY__.updateGeometry(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setParent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.scroll = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.scroll");
          
              return this.__PROXY__.scroll(...args);
            
        };
    
        // function 
        QScrollArea.prototype.focusWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.focusWidget");
          
              return this.__PROXY__.focusWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.nextInFocusChain = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.nextInFocusChain");
          
              return this.__PROXY__.nextInFocusChain(...args);
            
        };
    
        // function 
        QScrollArea.prototype.previousInFocusChain = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.previousInFocusChain");
          
              return this.__PROXY__.previousInFocusChain(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setAcceptDrops = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setAcceptDrops");
          
              return this.__PROXY__.setAcceptDrops(...args);
            
        };
    
        // function 
        QScrollArea.prototype.addAction = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.addAction");
          
              return this.__PROXY__.addAction(...args);
            
        };
    
        // function 
        QScrollArea.prototype.addActions = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.addActions");
          
              return this.__PROXY__.addActions(...args);
            
        };
    
        // function 
        QScrollArea.prototype.insertActions = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.insertActions");
          
              return this.__PROXY__.insertActions(...args);
            
        };
    
        // function 
        QScrollArea.prototype.insertAction = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.insertAction");
          
              return this.__PROXY__.insertAction(...args);
            
        };
    
        // function 
        QScrollArea.prototype.removeAction = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.removeAction");
          
              return this.__PROXY__.removeAction(...args);
            
        };
    
        // function 
        QScrollArea.prototype.actions = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.actions");
          
              return this.__PROXY__.actions(...args);
            
        };
    
        // function 
        QScrollArea.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowFlags = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowFlags");
          
              return this.__PROXY__.setWindowFlags(...args);
            
        };
    
        // function 
        QScrollArea.prototype.windowFlags = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.windowFlags");
          
              return this.__PROXY__.windowFlags(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWindowFlag = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWindowFlag");
          
              return this.__PROXY__.setWindowFlag(...args);
            
        };
    
        // function 
        QScrollArea.prototype.overrideWindowFlags = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.overrideWindowFlags");
          
              return this.__PROXY__.overrideWindowFlags(...args);
            
        };
    
        // function 
        QScrollArea.prototype.windowType = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.windowType");
          
              return this.__PROXY__.windowType(...args);
            
        };
    
        // function 
        QScrollArea.prototype.childAt = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.childAt");
          
              return this.__PROXY__.childAt(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setAttribute = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setAttribute");
          
              return this.__PROXY__.setAttribute(...args);
            
        };
    
        // function 
        QScrollArea.prototype.testAttribute = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.testAttribute");
          
              return this.__PROXY__.testAttribute(...args);
            
        };
    
        // function 
        QScrollArea.prototype.ensurePolished = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.ensurePolished");
          
              return this.__PROXY__.ensurePolished(...args);
            
        };
    
        // function 
        QScrollArea.prototype.isAncestorOf = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.isAncestorOf");
          
              return this.__PROXY__.isAncestorOf(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setAutoFillBackground = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setAutoFillBackground");
          
              return this.__PROXY__.setAutoFillBackground(...args);
            
        };
    
        // function 
        QScrollArea.prototype.keyReleaseEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.keyReleaseEvent");
          
              return this.__PROXY__.keyReleaseEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.focusInEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.focusInEvent");
          
              return this.__PROXY__.focusInEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.focusOutEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.focusOutEvent");
          
              return this.__PROXY__.focusOutEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.enterEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.enterEvent");
          
              return this.__PROXY__.enterEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.leaveEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.leaveEvent");
          
              return this.__PROXY__.leaveEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.moveEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.moveEvent");
          
              return this.__PROXY__.moveEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.closeEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.closeEvent");
          
              return this.__PROXY__.closeEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.tabletEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.tabletEvent");
          
              return this.__PROXY__.tabletEvent(...args);
            
        };
    
      // function 
      QScrollArea.prototype.actionEvent = function() 
        
      {
        //print("JS: QScrollArea.prototype.actionEvent");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.actionEvent(
                // call highest level JS implementation:
                //return this.actionEventBase(
                
                    return this.__PROXY__.actionEventSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QScrollArea);
  }

  
  else {
    
        print("QScrollArea.actionEvent(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QScrollArea.prototype.dragMoveEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.dragMoveEvent");
          
              return this.__PROXY__.dragMoveEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.dragLeaveEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.dragLeaveEvent");
          
              return this.__PROXY__.dragLeaveEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.dropEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.dropEvent");
          
              return this.__PROXY__.dropEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.showEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.showEvent");
          
              return this.__PROXY__.showEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.hideEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.hideEvent");
          
              return this.__PROXY__.hideEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.nativeEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.nativeEvent");
          
              return this.__PROXY__.nativeEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.changeEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.changeEvent");
          
              return this.__PROXY__.changeEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.metric = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.metric");
          
              return this.__PROXY__.metric(...args);
            
        };
    
        // function 
        QScrollArea.prototype.initPainter = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.initPainter");
          
              return this.__PROXY__.initPainter(...args);
            
        };
    
        // function 
        QScrollArea.prototype.redirected = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.redirected");
          
              return this.__PROXY__.redirected(...args);
            
        };
    
        // function 
        QScrollArea.prototype.sharedPainter = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.sharedPainter");
          
              return this.__PROXY__.sharedPainter(...args);
            
        };
    
        // function 
        QScrollArea.prototype.inputMethodEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.inputMethodEvent");
          
              return this.__PROXY__.inputMethodEvent(...args);
            
        };
    
        // function 
        QScrollArea.prototype.inputMethodQuery = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.inputMethodQuery");
          
              return this.__PROXY__.inputMethodQuery(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setInputMethodHints = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setInputMethodHints");
          
              return this.__PROXY__.setInputMethodHints(...args);
            
        };
    
        // function 
        QScrollArea.prototype.updateMicroFocus = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.updateMicroFocus");
          
              return this.__PROXY__.updateMicroFocus(...args);
            
        };
    
        // function 
        QScrollArea.prototype.create = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.create");
          
              return this.__PROXY__.create(...args);
            
        };
    
        // function 
        QScrollArea.prototype.destroy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.destroy");
          
              return this.__PROXY__.destroy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.focusNextChild = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.focusNextChild");
          
              return this.__PROXY__.focusNextChild(...args);
            
        };
    
        // function 
        QScrollArea.prototype.focusPreviousChild = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.focusPreviousChild");
          
              return this.__PROXY__.focusPreviousChild(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setBackingStore = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setBackingStore");
          
              return this.__PROXY__.setBackingStore(...args);
            
        };
    
        // function 
        QScrollArea.prototype.testAttribute_helper = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.testAttribute_helper");
          
              return this.__PROXY__.testAttribute_helper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.takeLayout = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.takeLayout");
          
              return this.__PROXY__.takeLayout(...args);
            
        };
    
        // function 
        QScrollArea.prototype.qt_mac_is_metal = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.qt_mac_is_metal");
          
              return this.__PROXY__.qt_mac_is_metal(...args);
            
        };
    
        // function 
        QScrollArea.prototype.qt_qwidget_data = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.qt_qwidget_data");
          
              return this.__PROXY__.qt_qwidget_data(...args);
            
        };
    
        // function 
        QScrollArea.prototype.qt_widget_private = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.qt_widget_private");
          
              return this.__PROXY__.qt_widget_private(...args);
            
        };
    
        // function 
        QScrollArea.prototype.frameStyle = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.frameStyle");
          
              return this.__PROXY__.frameStyle(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFrameStyle = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFrameStyle");
          
              return this.__PROXY__.setFrameStyle(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFrameShape = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFrameShape");
          
              return this.__PROXY__.setFrameShape(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFrameShadow = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFrameShadow");
          
              return this.__PROXY__.setFrameShadow(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setLineWidth = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setLineWidth");
          
              return this.__PROXY__.setLineWidth(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setMidLineWidth = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setMidLineWidth");
          
              return this.__PROXY__.setMidLineWidth(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setFrameRect = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setFrameRect");
          
              return this.__PROXY__.setFrameRect(...args);
            
        };
    
        // function 
        QScrollArea.prototype.drawFrame = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.drawFrame");
          
              return this.__PROXY__.drawFrame(...args);
            
        };
    
        // function 
        QScrollArea.prototype.initStyleOption = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.initStyleOption");
          
              return this.__PROXY__.initStyleOption(...args);
            
        };
    
        // function 
        QScrollArea.prototype.verticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.verticalScrollBarPolicy");
          
              return this.__PROXY__.verticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setVerticalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setVerticalScrollBarPolicy");
          
              return this.__PROXY__.setVerticalScrollBarPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.verticalScrollBar = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.verticalScrollBar");
          
              return this.__PROXY__.verticalScrollBar(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setVerticalScrollBar = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setVerticalScrollBar");
          
              return this.__PROXY__.setVerticalScrollBar(...args);
            
        };
    
        // function 
        QScrollArea.prototype.horizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.horizontalScrollBarPolicy");
          
              return this.__PROXY__.horizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setHorizontalScrollBarPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setHorizontalScrollBarPolicy");
          
              return this.__PROXY__.setHorizontalScrollBarPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.horizontalScrollBar = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.horizontalScrollBar");
          
              return this.__PROXY__.horizontalScrollBar(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setHorizontalScrollBar = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setHorizontalScrollBar");
          
              return this.__PROXY__.setHorizontalScrollBar(...args);
            
        };
    
        // function 
        QScrollArea.prototype.cornerWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.cornerWidget");
          
              return this.__PROXY__.cornerWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setCornerWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setCornerWidget");
          
              return this.__PROXY__.setCornerWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.addScrollBarWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.addScrollBarWidget");
          
              return this.__PROXY__.addScrollBarWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.viewport = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.viewport");
          
              return this.__PROXY__.viewport(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setViewport = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setViewport");
          
              return this.__PROXY__.setViewport(...args);
            
        };
    
        // function 
        QScrollArea.prototype.maximumViewportSize = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.maximumViewportSize");
          
              return this.__PROXY__.maximumViewportSize(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setupViewport = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setupViewport");
          
              return this.__PROXY__.setupViewport(...args);
            
        };
    
        // function 
        QScrollArea.prototype.sizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.sizeAdjustPolicy");
          
              return this.__PROXY__.sizeAdjustPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setSizeAdjustPolicy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setSizeAdjustPolicy");
          
              return this.__PROXY__.setSizeAdjustPolicy(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setViewportMargins = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setViewportMargins");
          
              return this.__PROXY__.setViewportMarginsSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.viewportMargins = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.viewportMargins");
          
              return this.__PROXY__.viewportMarginsSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.viewportEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.viewportEvent");
          
              return this.__PROXY__.viewportEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.paintEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.paintEvent");
          
              return this.__PROXY__.paintEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mousePressEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mousePressEvent");
          
              return this.__PROXY__.mousePressEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mouseReleaseEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mouseReleaseEvent");
          
              return this.__PROXY__.mouseReleaseEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mouseDoubleClickEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mouseDoubleClickEvent");
          
              return this.__PROXY__.mouseDoubleClickEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.mouseMoveEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.mouseMoveEvent");
          
              return this.__PROXY__.mouseMoveEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.wheelEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.wheelEvent");
          
              return this.__PROXY__.wheelEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.dragEnterEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.dragEnterEvent");
          
              return this.__PROXY__.dragEnterEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.keyPressEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.keyPressEvent");
          
              return this.__PROXY__.keyPressEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.widget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWidget");
          
              return this.__PROXY__.setWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.takeWidget = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.takeWidget");
          
              return this.__PROXY__.takeWidget(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setWidgetResizable = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setWidgetResizable");
          
              return this.__PROXY__.setWidgetResizable(...args);
            
        };
    
        // function 
        QScrollArea.prototype.focusNextPrevChild = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.focusNextPrevChild");
          
              return this.__PROXY__.focusNextPrevChild(...args);
            
        };
    
        // function 
        QScrollArea.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
    
        // function 
        QScrollArea.prototype.ensureVisible = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.ensureVisible");
          
              return this.__PROXY__.ensureVisible(...args);
            
        };
    
        // function 
        QScrollArea.prototype.ensureWidgetVisible = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.ensureWidgetVisible");
          
              return this.__PROXY__.ensureWidgetVisible(...args);
            
        };
    
        // function 
        QScrollArea.prototype.event = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.event");
          
              return this.__PROXY__.eventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.eventFilter");
          
              return this.__PROXY__.eventFilterSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.resizeEvent = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.resizeEvent");
          
              return this.__PROXY__.resizeEventSuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.scrollContentsBy = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.scrollContentsBy");
          
              return this.__PROXY__.scrollContentsBySuper(...args);
            
        };
    
        // function 
        QScrollArea.prototype.viewportSizeHint = function(...args) 
          
        {
          //print("JS: QScrollArea.prototype.viewportSizeHint");
          
              return this.__PROXY__.viewportSizeHintSuper(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QScrollArea.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'modal', {
              get: function() {
                  
                      return this.__PROXY__.isModal();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'windowModality', {
              get: function() {
                  
                      return this.__PROXY__.windowModality;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModality(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'enabled', {
              get: function() {
                  
                      return this.__PROXY__.isEnabled();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'geometry', {
              get: function() {
                  
                      return this.__PROXY__.geometry;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setGeometry(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'frameGeometry', {
              get: function() {
                  
                      return this.__PROXY__.frameGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'normalGeometry', {
              get: function() {
                  
                      return this.__PROXY__.normalGeometry;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'x', {
              get: function() {
                  
                      return this.__PROXY__.x;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'y', {
              get: function() {
                  
                      return this.__PROXY__.y;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'pos', {
              get: function() {
                  
                      return this.__PROXY__.pos;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.move(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'frameSize', {
              get: function() {
                  
                      return this.__PROXY__.frameSize;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.resize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'width', {
              get: function() {
                  
                      return this.__PROXY__.width;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'height', {
              get: function() {
                  
                      return this.__PROXY__.height;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'rect', {
              get: function() {
                  
                      return this.__PROXY__.rect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'childrenRect', {
              get: function() {
                  
                      return this.__PROXY__.childrenRect;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'childrenRegion', {
              get: function() {
                  
                      return this.__PROXY__.childrenRegion;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'sizePolicy', {
              get: function() {
                  
                      return this.__PROXY__.sizePolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizePolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'minimumSize', {
              get: function() {
                  
                      return this.__PROXY__.minimumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'maximumSize', {
              get: function() {
                  
                      return this.__PROXY__.maximumSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'minimumWidth', {
              get: function() {
                  
                      return this.__PROXY__.minimumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'minimumHeight', {
              get: function() {
                  
                      return this.__PROXY__.minimumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMinimumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'maximumWidth', {
              get: function() {
                  
                      return this.__PROXY__.maximumWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'maximumHeight', {
              get: function() {
                  
                      return this.__PROXY__.maximumHeight;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumHeight(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'sizeIncrement', {
              get: function() {
                  
                      return this.__PROXY__.sizeIncrement;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSizeIncrement(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'baseSize', {
              get: function() {
                  
                      return this.__PROXY__.baseSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'palette', {
              get: function() {
                  
                      return this.__PROXY__.palette;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPalette(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'font', {
              get: function() {
                  
                      return this.__PROXY__.font;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'cursor', {
              get: function() {
                  
                      return this.__PROXY__.cursor;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCursor(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'mouseTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasMouseTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMouseTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'tabletTracking', {
              get: function() {
                  
                      return this.__PROXY__.hasTabletTracking();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTabletTracking(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'isActiveWindow', {
              get: function() {
                  
                      return this.__PROXY__.isActiveWindow;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'focusPolicy', {
              get: function() {
                  
                      return this.__PROXY__.focusPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFocusPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'focus', {
              get: function() {
                  
                      return this.__PROXY__.hasFocus();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'contextMenuPolicy', {
              get: function() {
                  
                      return this.__PROXY__.contextMenuPolicy;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setContextMenuPolicy(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'updatesEnabled', {
              get: function() {
                  
                      return this.__PROXY__.updatesEnabled;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUpdatesEnabled(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'visible', {
              get: function() {
                  
                      return this.__PROXY__.isVisible();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setVisible(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'minimized', {
              get: function() {
                  
                      return this.__PROXY__.isMinimized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'maximized', {
              get: function() {
                  
                      return this.__PROXY__.isMaximized();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'fullScreen', {
              get: function() {
                  
                      return this.__PROXY__.isFullScreen();
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'sizeHint', {
              get: function() {
                  
                      return this.__PROXY__.sizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'minimumSizeHint', {
              get: function() {
                  
                      return this.__PROXY__.minimumSizeHint;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'acceptDrops', {
              get: function() {
                  
                      return this.__PROXY__.acceptDrops;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAcceptDrops(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'windowTitle', {
              get: function() {
                  
                      return this.__PROXY__.windowTitle;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowTitle(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'windowIcon', {
              get: function() {
                  
                      return this.__PROXY__.windowIcon;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIcon(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'windowIconText', {
              get: function() {
                  
                      return this.__PROXY__.windowIconText;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowIconText(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'windowOpacity', {
              get: function() {
                  
                      return this.__PROXY__.windowOpacity;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowOpacity(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'windowModified', {
              get: function() {
                  
                      return this.__PROXY__.isWindowModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'toolTip', {
              get: function() {
                  
                      return this.__PROXY__.toolTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'toolTipDuration', {
              get: function() {
                  
                      return this.__PROXY__.toolTipDuration;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setToolTipDuration(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'statusTip', {
              get: function() {
                  
                      return this.__PROXY__.statusTip;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStatusTip(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'whatsThis', {
              get: function() {
                  
                      return this.__PROXY__.whatsThis;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWhatsThis(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'accessibleName', {
              get: function() {
                  
                      return this.__PROXY__.accessibleName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'accessibleDescription', {
              get: function() {
                  
                      return this.__PROXY__.accessibleDescription;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAccessibleDescription(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'layoutDirection', {
              get: function() {
                  
                      return this.__PROXY__.layoutDirection;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLayoutDirection(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'autoFillBackground', {
              get: function() {
                  
                      return this.__PROXY__.autoFillBackground;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAutoFillBackground(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'styleSheet', {
              get: function() {
                  
                      return this.__PROXY__.styleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'locale', {
              get: function() {
                  
                      return this.__PROXY__.locale;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLocale(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'windowFilePath', {
              get: function() {
                  
                      return this.__PROXY__.windowFilePath;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWindowFilePath(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'inputMethodHints', {
              get: function() {
                  
                      return this.__PROXY__.inputMethodHints;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setInputMethodHints(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'frameRect', {
              get: function() {
                  
                      return this.__PROXY__.frameRect;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameRect(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'frameShadow', {
              get: function() {
                  
                      return this.__PROXY__.frameShadow;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShadow(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'frameShape', {
              get: function() {
                  
                      return this.__PROXY__.frameShape;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setFrameShape(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'frameWidth', {
              get: function() {
                  
                      return this.__PROXY__.frameWidth;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'lineWidth', {
              get: function() {
                  
                      return this.__PROXY__.lineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'midLineWidth', {
              get: function() {
                  
                      return this.__PROXY__.midLineWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMidLineWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'alignment', {
              get: function() {
                  
                      return this.__PROXY__.alignment;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setAlignment(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QScrollArea.prototype, 'widgetResizable', {
              get: function() {
                  
                      return this.__PROXY__.widgetResizable;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setWidgetResizable(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QScrollArea.prototype, 'customContextMenuRequested', {
            get: function() { return this.__PROXY__.customContextMenuRequested; },
            configurable: true
        });
        
          Object.defineProperty(QScrollArea.prototype, 'customContextMenuRequested(QPoint)', {
              get: function() { return this.__PROXY__.customContextMenuRequested; },
              configurable: true
          });
        QScrollArea.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QScrollArea.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QScrollArea.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QScrollArea.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QScrollArea.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QScrollArea.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      